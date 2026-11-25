(function() {
            // 1. Cek sesi admin aktif - blokir pembuatan pesanan oleh akun Admin / Staff MUA
            try {
                const adminRaw = localStorage.getItem("chira_admin_session");
                if (adminRaw) {
                    const parsed = JSON.parse(adminRaw);
                    if (parsed && parsed.isAdmin) {
                        alert("Akses Ditolak: Akun Admin / Staff MUA tidak diperbolehkan membuat pesanan. Silakan logout dan gunakan akun Buyer/Pelanggan jika ingin memesan layanan.");
                        window.location.replace("admin-dashboard.html");
                        return;
                    }
                }
            } catch (e) {}

            // 2. Cek status login pelanggan
            const loginStatus = localStorage.getItem("chira_login_status");
            if (loginStatus !== "true") {
                alert("Akses Terbatas! Silakan login terlebih dahulu untuk melakukan pemesanan.");
                window.location.replace("login.html");
            }
        })();

// --- 1. STATE MANAGEMENT ---
        let currentBooking = {
            serviceKey: 'wedding',
            serviceName: 'Makeup Wedding / Pre-Wedding',
            basePrice: 1500000,
            baseDuration: 150, // dalam menit
            serviceImg: 'img/service-wedding.png',
            orderType: 'single', // 'single' atau 'bundle'
            paxCount: 1,
            selectedDate: '',
            startTime: '08:00',
            endTime: '10:30',
            staffName: 'Nadine Queen Reina',
            transportZone: 'zona1',
            transportZoneLabel: 'Zona 1 — Studio Chira Malang',
            transportFee: 0,
            locationType: 'Studio Chira Make-Up (Malang)',
            address: 'Studio Atelier Chira Make-Up Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang',
            gmapsLink: 'https://maps.google.com/?q=Kota+Malang,+Jawa+Timur',
            gpsCoordinates: null,
            isDestinationService: false,
            custName: '',
            custPhone: '',
            custNotes: '',
            totalPrice: 1500000,
            dpAmount: 750000,
            remainingAmount: 750000,
            totalDuration: 150,
            bookingCode: ''
        };

        let timerInterval = null;

        // --- 2. INITIALIZATION ON DOM READY ---
        document.addEventListener("DOMContentLoaded", function() {
            // Auto-fill Profil Customer ke Form Pemesanan
            if (window.ChiraCustomerProfile) {
                window.ChiraCustomerProfile.autoFillBooking();
            }

            // Inisialisasi Validasi Batas Waktu Pemesanan (Lead Time)
            const dateInput = document.getElementById("bookingDate");
            applyDateLeadTimeValidation();

            // Event Listeners for Date and Time
            dateInput.addEventListener("change", function(e) {
                const val = e.target.value;
                if (!val) return;

                if (dateInput.min && val < dateInput.min) {
                    alert(`Tanggal yang Anda pilih (${formatDateIndo(val)}) terlalu dekat!\nUntuk layanan ${currentBooking.serviceName}, pemesanan wajib minimal dilakukan pada ${formatDateIndo(dateInput.min)}.`);
                    e.target.value = dateInput.min;
                    currentBooking.selectedDate = dateInput.min;
                } else if (dateInput.max && val > dateInput.max) {
                    alert(`Tanggal yang Anda pilih (${formatDateIndo(val)}) melebihi batas waktu reservasi!\nUntuk layanan ${currentBooking.serviceName}, pemesanan maksimal dilakukan pada ${formatDateIndo(dateInput.max)}.`);
                    e.target.value = dateInput.max;
                    currentBooking.selectedDate = dateInput.max;
                } else {
                    currentBooking.selectedDate = val;
                }
                updateCalculations();
            });

            document.getElementById("startTime").addEventListener("change", function(e) {
                currentBooking.startTime = e.target.value || "08:00";
                updateCalculations();
            });

            // Service Selection Click Listeners
            const serviceCards = document.querySelectorAll(".service-select-item");
            serviceCards.forEach(card => {
                card.addEventListener("click", function() {
                    serviceCards.forEach(c => c.classList.remove("selected"));
                    this.classList.add("selected");

                    currentBooking.serviceKey = this.dataset.key;
                    currentBooking.serviceName = this.dataset.name;
                    currentBooking.basePrice = parseInt(this.dataset.price);
                    currentBooking.baseDuration = parseInt(this.dataset.duration);
                    currentBooking.serviceImg = this.dataset.img;

                    // Otomatis perbarui rentang validasi tanggal min & max sesuai layanan baru
                    applyDateLeadTimeValidation();
                    updateCalculations();
                });
            });

            // Sinkronkan ketersediaan & visibilitas staf dari chira_staff_profiles
            syncStaffAvailabilityFromProfiles();

            // Pre-select Artist from URL parameter if present
            const urlParams = new URLSearchParams(window.location.search);
            const artistParam = urlParams.get('artist');
            if (artistParam) {
                const staffCards = document.querySelectorAll(".staff-card");
                const decodedParam = decodeURIComponent(artistParam).toLowerCase();
                staffCards.forEach(card => {
                    const sName = card.dataset.staff.toLowerCase();
                    if ((sName.includes(decodedParam) || decodedParam.includes(sName)) && !card.classList.contains("disabled") && card.style.display !== "none") {
                        selectStaff(card);
                    }
                });
            }

            // Initial calculation run
            updateCalculations();
        });

        // Sinkronisasi status aktif/nonaktif staf MUA secara real-time
        function syncStaffAvailabilityFromProfiles() {
            try {
                const raw = localStorage.getItem("chira_staff_profiles");
                if (!raw) return;
                const profiles = JSON.parse(raw);
                if (!Array.isArray(profiles)) return;

                const staffCards = document.querySelectorAll(".staff-card");
                let anySelectedVisible = false;

                staffCards.forEach(card => {
                    const staffName = (card.dataset.staff || "").trim().toLowerCase();
                    const matched = profiles.find(p => {
                        const pName = (p.nama || "").trim().toLowerCase();
                        return pName === staffName || (pName.split(" ")[0] === staffName.split(" ")[0]);
                    });

                    if (matched) {
                        const isDeactivated = matched.isActive === false || matched.status === "Nonaktif" || matched.status === "Dipecat";
                        const isCuti = matched.status === "Cuti" || matched.status === "Cuti / Nonaktif Sementara";

                        if (isDeactivated || isCuti) {
                            // Staff nonaktif/dipecat/cuti otomatis hilang dari pilihan booking
                            card.style.display = "none";
                            card.classList.remove("selected");
                        } else {
                            card.style.display = "";
                            const badge = card.querySelector(".staff-badge-status");
                            if (badge) {
                                if (matched.status === "Busy in Session" || matched.isReady === false) {
                                    card.classList.add("disabled");
                                    badge.className = "staff-badge-status badge-full";
                                    badge.innerText = "■ Full Booked";
                                } else {
                                    card.classList.remove("disabled");
                                    badge.className = "staff-badge-status badge-ready";
                                    badge.innerText = "● Ready";
                                }
                            }
                            if (card.classList.contains("selected")) {
                                anySelectedVisible = true;
                            }
                        }
                    }
                });

                // Jika artist terpilih disembunyikan, arahkan ke staf pertama yang aktif & ready
                const visibleCards = Array.from(staffCards).filter(c => c.style.display !== "none" && !c.classList.contains("disabled"));
                if (!anySelectedVisible && visibleCards.length > 0) {
                    selectStaff(visibleCards[0]);
                }
            } catch (e) {
                console.error("Gagal sinkron status staf MUA:", e);
            }
        }

        window.addEventListener("storage", function(e) {
            if (e.key === "chira_staff_profiles") {
                syncStaffAvailabilityFromProfiles();
            }
        });

        // --- 3. SELECTION HANDLERS ---
        function selectOrderType(type) {
            currentBooking.orderType = type;
            const singleBtn = document.getElementById("typeSingle");
            const bundleBtn = document.getElementById("typeBundle");
            const stepperWrapper = document.getElementById("bundleStepperWrapper");
            const singlePaxBox = document.getElementById("singlePaxBox");

            if (type === 'single') {
                singleBtn.classList.add("active");
                bundleBtn.classList.remove("active");
                stepperWrapper.style.display = "none";
                if (singlePaxBox) singlePaxBox.style.display = "flex";
                currentBooking.paxCount = 1;
            } else {
                singleBtn.classList.remove("active");
                bundleBtn.classList.add("active");
                stepperWrapper.style.display = "flex";
                if (singlePaxBox) singlePaxBox.style.display = "none";
                if (currentBooking.paxCount < 2) {
                    currentBooking.paxCount = 2; // Default bundle = 2 pax
                }
            }

            updateCalculations();
        }

        function adjustPax(delta) {
            let newPax = currentBooking.paxCount + delta;
            if (newPax >= 2 && newPax <= 5) {
                currentBooking.paxCount = newPax;
                document.getElementById("paxDisplay").innerText = `${newPax} Orang`;
                document.getElementById("btnMinusPax").disabled = (newPax === 2);
                document.getElementById("btnPlusPax").disabled = (newPax === 5);
                updateCalculations();
            }
        }

        function selectStaff(element) {
            if (element.classList.contains("disabled")) {
                alert("Maaf, staf MUA ini berstatus Full Booked (jadwal penuh). Silakan pilih staf MUA lainnya yang berstatus Ready to Book.");
                return;
            }
            document.querySelectorAll(".staff-card").forEach(c => c.classList.remove("selected"));
            element.classList.add("selected");
            currentBooking.staffName = element.dataset.staff;
            document.getElementById("summaryStaff").innerText = element.dataset.staff;
        }

        function selectLocation(type, element) {
            document.querySelectorAll(".location-label").forEach(l => l.classList.remove("active"));
            element.classList.add("active");
            
            const radio = element.querySelector("input[type='radio']");
            radio.checked = true;
            currentBooking.locationType = radio.value;

            const addressGroup = document.getElementById("addressGroup");
            if (type === 'studio') {
                addressGroup.style.display = "none";
            } else {
                addressGroup.style.display = "block";
            }

            document.getElementById("summaryLocation").innerText = radio.value;
        }

        // --- SISTEM ZONA TRANSPORTASI & LOKASI ---
        function selectZone(zoneId, element) {
            document.querySelectorAll(".zone-card").forEach(c => c.classList.remove("active"));
            element.classList.add("active");
            const radio = element.querySelector("input[type='radio']");
            if (radio) radio.checked = true;

            currentBooking.transportZone = zoneId;

            const locationDetails = document.getElementById("locationDetailsWrapper");
            const destinationNotice = document.getElementById("destinationNoticeBox");
            const addressInput = document.getElementById("custAddress");

            if (zoneId === 'zona1') {
                currentBooking.transportFee = 0;
                currentBooking.transportZoneLabel = 'Zona 1 — Studio Chira Malang';
                currentBooking.locationType = 'Studio Chira Make-Up (Malang)';
                currentBooking.isDestinationService = false;
                if (locationDetails) locationDetails.style.display = 'none';
                if (destinationNotice) destinationNotice.style.display = 'none';
                currentBooking.address = 'Studio Atelier Chira Make-Up Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang';
                currentBooking.gmapsLink = 'https://maps.google.com/?q=Kota+Malang,+Jawa+Timur';
            } else if (zoneId === 'zona2') {
                currentBooking.transportFee = 50000;
                currentBooking.transportZoneLabel = 'Zona 2 — Kota Malang & Batu';
                currentBooking.locationType = 'Home Service Kota Malang & Batu';
                currentBooking.isDestinationService = false;
                if (locationDetails) locationDetails.style.display = 'block';
                if (destinationNotice) destinationNotice.style.display = 'none';
                if (addressInput) addressInput.placeholder = 'Nama Jalan, No. Rumah/Hotel, RT/RW, Kelurahan, Kecamatan, Kota Malang / Kota Batu...';
            } else if (zoneId === 'zona3') {
                currentBooking.transportFee = 300000;
                currentBooking.transportZoneLabel = 'Zona 3 — Luar Kota (Jawa Timur)';
                currentBooking.locationType = 'Luar Kota (Area Jawa Timur & Sekitarnya)';
                currentBooking.isDestinationService = false;
                if (locationDetails) locationDetails.style.display = 'block';
                if (destinationNotice) destinationNotice.style.display = 'none';
                if (addressInput) addressInput.placeholder = 'Nama Gedung/Hotel/Rumah, Jalan, Kota/Kabupaten di Jawa Timur (Surabaya, Sidoarjo, Kediri, Pasuruan, dll)...';
            } else if (zoneId === 'zona4') {
                currentBooking.transportFee = 0; // Biaya di sistem Rp 0, tiket & hotel ditanggung klien
                currentBooking.transportZoneLabel = 'Zona 4 — Worldwide Destination';
                currentBooking.locationType = 'Luar Pulau / Luar Negeri (Worldwide Destination)';
                currentBooking.isDestinationService = true;
                if (locationDetails) locationDetails.style.display = 'block';
                if (destinationNotice) destinationNotice.style.display = 'flex';
                if (addressInput) addressInput.placeholder = 'Nama Venue / Hotel, Kota, Provinsi / Negara Tujuan (Luar Pulau / Luar Negeri)...';
            }

            updateCalculations();
        }

        // --- SISTEM GEOLOCATION GPS (HTML5 PINPOINT LOKASI MAPS) ---
        function detectUserGps() {
            const feedbackEl = document.getElementById("gpsFeedback");
            const linkInput = document.getElementById("custGmapsLink");
            const btn = document.getElementById("btnDetectGps");

            if (!navigator.geolocation) {
                feedbackEl.style.display = "block";
                feedbackEl.style.color = "#c0392b";
                feedbackEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Browser Anda tidak mendukung sensor GPS Geolocation.';
                return;
            }

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mendeteksi GPS...';
            feedbackEl.style.display = "block";
            feedbackEl.style.color = "#d35400";
            feedbackEl.innerHTML = '<i class="fa-solid fa-satellite-dish fa-fade"></i> Mengontak satelit GPS untuk mendapatkan titik lokasi perangkat Anda...';

            navigator.geolocation.getCurrentPosition(
                function(position) {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> GPS Terkunci';
                    const lat = position.coords.latitude.toFixed(6);
                    const lng = position.coords.longitude.toFixed(6);
                    const accuracy = Math.round(position.coords.accuracy || 0);
                    const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;

                    linkInput.value = mapsUrl;
                    currentBooking.gmapsLink = mapsUrl;
                    currentBooking.gpsCoordinates = { lat: parseFloat(lat), lng: parseFloat(lng), accuracy: accuracy };

                    feedbackEl.style.color = "#27ae60";
                    feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> Titik koordinat berhasil dikunci: <strong>${lat}, ${lng}</strong> (Akurasi ±${accuracy}m). Disematkan ke link Google Maps.`;
                },
                function(error) {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fa-solid fa-crosshairs"></i> Gunakan Titik GPS Saya';
                    feedbackEl.style.color = "#c0392b";
                    let msg = "Gagal mengambil titik GPS.";
                    if (error.code === 1) {
                        msg = "Izin akses lokasi ditolak oleh browser. Anda dapat menyalin link Google Maps secara manual.";
                    } else if (error.code === 2) {
                        msg = "Sinyal GPS perangkat tidak tersedia.";
                    } else if (error.code === 3) {
                        msg = "Waktu pencarian sinyal GPS habis (timeout).";
                    }
                    feedbackEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${msg}`;
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        }

        // Utility: Tambah Hari pada Objek Tanggal
        function addDays(baseDate, days) {
            const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate());
            d.setDate(d.getDate() + days);
            return d;
        }

        // Utility: Format Date ke YYYY-MM-DD
        function toISODateString(d) {
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        }

        // --- SISTEM VALIDASI LEAD TIME (BATAS WAKTU PEMESANAN) ---
        function applyDateLeadTimeValidation() {
            const dateInput = document.getElementById("bookingDate");
            const hintContent = document.getElementById("dateHintContent");
            if (!dateInput) return;

            const now = new Date();
            const serviceKey = currentBooking.serviceKey || 'wedding';

            let minDays = 7;
            let maxDays = 30;
            let serviceLabel = "Layanan Reguler";

            if (serviceKey === 'wedding' || serviceKey === 'engagement') {
                minDays = 30;
                maxDays = 150; // 5 bulan (150 hari)
                serviceLabel = (serviceKey === 'wedding') ? "Wedding / Pre-Wedding" : "Engagement";
            } else {
                serviceLabel = currentBooking.serviceName || "Reguler";
            }

            const minDateObj = addDays(now, minDays);
            const maxDateObj = addDays(now, maxDays);

            const minDateStr = toISODateString(minDateObj);
            const maxDateStr = toISODateString(maxDateObj);

            dateInput.min = minDateStr;
            dateInput.max = maxDateStr;

            // Jika tanggal yang terpilih kosong atau di luar rentang valid, auto-select ke minDateStr
            if (!currentBooking.selectedDate || currentBooking.selectedDate < minDateStr || currentBooking.selectedDate > maxDateStr) {
                dateInput.value = minDateStr;
                currentBooking.selectedDate = minDateStr;
            } else {
                dateInput.value = currentBooking.selectedDate;
            }

            // Update teks keterangan dinamis di bawah kalender
            if (hintContent) {
                hintContent.innerHTML = `Rentang tanggal valid [<strong>${serviceLabel}</strong>]: <strong>${formatDateIndo(minDateStr)}</strong> s/d <strong>${formatDateIndo(maxDateStr)}</strong> (H+${minDays} s/d H+${maxDays}).`;
            }
        }

        // --- 4. ENGINE PERHITUNGAN OTOMATIS (WAKTU & BIAYA) ---
        function updateCalculations() {
            // A. Perhitungan Total Harga & DP 50% (Termasuk Transportasi)
            const serviceTotal = currentBooking.basePrice * currentBooking.paxCount;
            currentBooking.totalPrice = serviceTotal + currentBooking.transportFee;
            currentBooking.dpAmount = Math.round(currentBooking.totalPrice * 0.5);
            currentBooking.remainingAmount = currentBooking.totalPrice - currentBooking.dpAmount;

            // B. Perhitungan Total Durasi (Jumlah Orang x Durasi per Orang)
            currentBooking.totalDuration = currentBooking.baseDuration * currentBooking.paxCount;

            // C. Hitung Jam Selesai
            currentBooking.endTime = computeEndTime(currentBooking.startTime, currentBooking.totalDuration);

            // D. Format Durasi Text (e.g. "180 menit (3.0 jam)")
            const hours = (currentBooking.totalDuration / 60).toFixed(1).replace('.0', '');
            const durationText = `${currentBooking.totalDuration} menit (${hours} jam)`;

            // E. Update UI Ringkasan (Summary Widget)
            document.getElementById("summaryThumb").src = currentBooking.serviceImg;
            document.getElementById("summaryServiceName").innerText = currentBooking.serviceName;
            document.getElementById("summaryDurationSingle").innerText = `${currentBooking.baseDuration} menit / pax`;
            
            if (currentBooking.orderType === 'single') {
                document.getElementById("summaryOrderType").innerText = "Perorangan (1 Pax)";
            } else {
                document.getElementById("summaryOrderType").innerText = `Bundle (${currentBooking.paxCount} Pax)`;
            }

            document.getElementById("summaryTotalDuration").innerText = durationText;
            document.getElementById("summaryTime").innerText = `${currentBooking.startTime} - ${currentBooking.endTime} WIB`;
            document.getElementById("summaryDate").innerText = formatDateIndo(currentBooking.selectedDate);
            
            // Lokasi Sesi & Biaya Transportasi
            const summaryLoc = document.getElementById("summaryLocation");
            if (summaryLoc) {
                summaryLoc.innerText = currentBooking.transportZoneLabel;
            }

            const summaryTransport = document.getElementById("summaryTransportFee");
            if (summaryTransport) {
                if (currentBooking.transportZone === 'zona1') {
                    summaryTransport.innerHTML = '<span style="color: var(--text-dark); font-weight: 600;">Rp 0 (Gratis Studio)</span>';
                } else if (currentBooking.transportZone === 'zona2') {
                    summaryTransport.innerHTML = '<span style="color: var(--text-dark); font-weight: 600;">Rp 50.000</span>';
                } else if (currentBooking.transportZone === 'zona3') {
                    summaryTransport.innerHTML = '<span style="color: var(--text-dark); font-weight: 600;">Rp 300.000</span>';
                } else if (currentBooking.transportZone === 'zona4') {
                    summaryTransport.innerHTML = '<span style="color: var(--text-dark); font-weight: 600;">Rp 0 (Tiket & Hotel via Klien)</span>';
                }
            }

            const summaryBasePrice = document.getElementById("summaryBasePackagePrice");
            if (summaryBasePrice) {
                summaryBasePrice.innerText = formatRupiah(serviceTotal);
            }

            const destBadge = document.getElementById("summaryDestinationBadge");
            if (destBadge) {
                destBadge.style.display = currentBooking.isDestinationService ? 'block' : 'none';
            }

            // Total Harga & DP 50% (Dibayar Sekarang vs Hari H)
            document.getElementById("summaryTotalPrice").innerText = formatRupiah(currentBooking.totalPrice);
            document.getElementById("summaryDpPrice").innerText = formatRupiah(currentBooking.dpAmount);
            document.getElementById("summaryRemainingPay").innerText = formatRupiah(currentBooking.remainingAmount);

            // F. Update Badge Penguncian Slot Waktu
            document.getElementById("lockedSlotBadge").innerText = `${currentBooking.startTime} - ${currentBooking.endTime} WIB`;
            document.getElementById("lockedSlotNote").innerHTML = 
                `Total durasi pengerjaan: <strong>${durationText}</strong> untuk ${currentBooking.paxCount} orang. Staf MUA akan didedikasikan secara eksklusif untuk sesi Anda sepanjang rentang waktu ini.`;
        }

        // Utility: Hitung Jam Selesai dari Jam Mulai + Total Menit
        function computeEndTime(startHHMM, addMinutes) {
            const parts = startHHMM.split(":");
            let h = parseInt(parts[0], 10);
            let m = parseInt(parts[1], 10);

            let totalM = (h * 60) + m + addMinutes;
            let endH = Math.floor(totalM / 60) % 24;
            let endM = totalM % 60;

            const pad = (n) => String(n).padStart(2, '0');
            return `${pad(endH)}:${pad(endM)}`;
        }

        // Utility: Format Rupiah
        function formatRupiah(number) {
            return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        // Utility: Format Tanggal Indonesia
        function formatDateIndo(dateStr) {
            if (!dateStr) return "- Belum Dipilih -";
            const parts = dateStr.split("-");
            if (parts.length !== 3) return dateStr;
            const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const d = parseInt(parts[2], 10);
            const m = months[parseInt(parts[1], 10) - 1];
            const y = parts[0];
            return `${d} ${m} ${y}`;
        }

        // --- 5. MODAL QRIS & SIMULASI TRANSAKSI ---
        function handleProceedPayment() {
            // Lapisan Proteksi Ganda: Blokir submit pesanan oleh akun Admin / Staff MUA
            try {
                const adminRaw = localStorage.getItem("chira_admin_session");
                if (adminRaw) {
                    const parsed = JSON.parse(adminRaw);
                    if (parsed && parsed.isAdmin) {
                        alert("Akses Ditolak: Akun Admin / Staff MUA tidak diperbolehkan membuat pesanan. Silakan logout dan gunakan akun Buyer/Pelanggan jika ingin memesan layanan.");
                        window.location.replace("admin-dashboard.html");
                        return;
                    }
                }
            } catch (e) {}

            // Validasi Input
            const custName = document.getElementById("custName").value.trim();
            const custPhone = document.getElementById("custPhone").value.trim();
            const bookingDate = document.getElementById("bookingDate").value;

            if (!custName) {
                alert("Mohon lengkapi Nama Lengkap Pemesan pada Step 4.");
                document.getElementById("custName").focus();
                return;
            }

            if (!custPhone) {
                alert("Mohon lengkapi Nomor WhatsApp Aktif pada Step 4.");
                document.getElementById("custPhone").focus();
                return;
            }

            if (!bookingDate) {
                alert("Mohon tentukan Tanggal Acara pada Step 3.");
                document.getElementById("bookingDate").focus();
                return;
            }

            const dateInput = document.getElementById("bookingDate");
            if (dateInput.min && bookingDate < dateInput.min) {
                alert(`Pemesanan tidak dapat diproses: Tanggal acara (${formatDateIndo(bookingDate)}) terlalu dekat!\nUntuk layanan ${currentBooking.serviceName}, pemesanan minimal dilakukan pada ${formatDateIndo(dateInput.min)}.`);
                dateInput.focus();
                return;
            }

            if (dateInput.max && bookingDate > dateInput.max) {
                alert(`Pemesanan tidak dapat diproses: Tanggal acara (${formatDateIndo(bookingDate)}) melebihi batas waktu reservasi!\nUntuk layanan ${currentBooking.serviceName}, pemesanan maksimal dilakukan pada ${formatDateIndo(dateInput.max)}.`);
                dateInput.focus();
                return;
            }

            // Jika lokasi bukan studio (Zona 2, 3, 4), pastikan alamat terisi
            if (currentBooking.transportZone !== 'zona1') {
                const address = document.getElementById("custAddress").value.trim();
                if (!address) {
                    alert(`Mohon lengkapi Alamat Lengkap Lokasi Acara untuk ${currentBooking.transportZoneLabel}.`);
                    document.getElementById("custAddress").focus();
                    return;
                }
                currentBooking.address = address;
                const gmapsInput = document.getElementById("custGmapsLink").value.trim();
                if (gmapsInput) {
                    currentBooking.gmapsLink = gmapsInput;
                }
            } else {
                currentBooking.address = 'Studio Atelier Chira Make-Up Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang';
                if (!currentBooking.gmapsLink) {
                    currentBooking.gmapsLink = 'https://maps.google.com/?q=Kota+Malang,+Jawa+Timur';
                }
            }

            currentBooking.custName = custName;
            currentBooking.custPhone = custPhone;
            currentBooking.custNotes = document.getElementById("custNotes").value.trim();

            // Generate Kode Booking Acak yang Elegan
            const randomCode = Math.floor(1000 + Math.random() * 9000);
            currentBooking.bookingCode = `CHR-${bookingDate.replace(/-/g, '')}-${randomCode}`;

            // Setup Konten Modal QRIS
            document.getElementById("qrisBookingCode").innerText = currentBooking.bookingCode;
            document.getElementById("modalService").innerText = currentBooking.serviceName;
            document.getElementById("modalSchedule").innerText = `${formatDateIndo(currentBooking.selectedDate)} (${currentBooking.startTime} - ${currentBooking.endTime} WIB, ${currentBooking.paxCount} Pax)`;
            
            let packageDesc = formatRupiah(currentBooking.totalPrice);
            if (currentBooking.transportFee > 0) {
                packageDesc += ` (Termasuk Transport: ${formatRupiah(currentBooking.transportFee)})`;
            } else if (currentBooking.isDestinationService) {
                packageDesc += ` (Transport & Hotel via Klien)`;
            }
            document.getElementById("modalTotalPackage").innerText = packageDesc;
            document.getElementById("modalTotalPay").innerText = formatRupiah(currentBooking.dpAmount);
            document.getElementById("modalRemainingPay").innerText = formatRupiah(currentBooking.remainingAmount);

            // Buka Modal
            document.getElementById("qrisPaymentView").style.display = "block";
            document.getElementById("qrisSuccessView").style.display = "none";
            document.getElementById("qrisModal").classList.add("show");

            // Mulai Countdown Timer 15 Menit
            startQrisTimer(15 * 60);
        }

        function closeQrisModal() {
            document.getElementById("qrisModal").classList.remove("show");
            if (timerInterval) clearInterval(timerInterval);
        }

        function startQrisTimer(durationSeconds) {
            if (timerInterval) clearInterval(timerInterval);
            let timer = durationSeconds;
            const timerElem = document.getElementById("qrisTimer");

            function updateDisplay() {
                const minutes = Math.floor(timer / 60);
                const seconds = timer % 60;
                timerElem.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                if (--timer < 0) {
                    clearInterval(timerInterval);
                    timerElem.innerText = "Kadaluarsa";
                }
            }

            updateDisplay();
            timerInterval = setInterval(updateDisplay, 1000);
        }

        function simulatePaymentSuccess() {
            if (timerInterval) clearInterval(timerInterval);

            // Simpan riwayat booking ke localStorage
            try {
                let activeProfile = null;
                try {
                    activeProfile = JSON.parse(localStorage.getItem("chira_customer_profile") || "null");
                } catch (e) {}
                const ownerEmail = (activeProfile && activeProfile.email) || "";
                const ownerName = (activeProfile && activeProfile.name) || localStorage.getItem("chira_user_name") || currentBooking.custName;

                const existingBookings = JSON.parse(localStorage.getItem("chira_bookings") || "[]");
                existingBookings.unshift({
                    ...currentBooking,
                    custEmail: ownerEmail,
                    ownerName: ownerName,
                    isUserOrder: true,
                    transportZone: currentBooking.transportZone,
                    transportZoneLabel: currentBooking.transportZoneLabel,
                    transportFee: currentBooking.transportFee,
                    locationType: currentBooking.locationType,
                    address: currentBooking.address,
                    gmapsLink: currentBooking.gmapsLink || '',
                    gpsCoordinates: currentBooking.gpsCoordinates || null,
                    isDestinationService: currentBooking.isDestinationService,
                    paidAmount: currentBooking.dpAmount, // Nominal DP 50% yang dibayarkan via QRIS
                    remainingAmount: currentBooking.remainingAmount, // Sisa pelunasan di Hari H
                    paymentType: 'DP 50%',
                    alasanPenolakan: '',
                    timestamp: new Date().toISOString(),
                    status: 'DP 50% Paid (Slot Locked)'
                });
                localStorage.setItem("chira_bookings", JSON.stringify(existingBookings));
            } catch (err) {
                console.error("Gagal menyimpan ke localStorage:", err);
            }

            // Render Rincian Sukses
            const successDetailText = document.getElementById("successDetailText");
            successDetailText.innerHTML = `
                <div style="margin-bottom: 6px;"><strong>Kode Reservasi:</strong> <span style="color: var(--dark-pink); font-weight:700;">${currentBooking.bookingCode}</span></div>
                <div style="margin-bottom: 6px;"><strong>Nama Klien:</strong> ${currentBooking.custName} (${currentBooking.custPhone})</div>
                <div style="margin-bottom: 6px;"><strong>Layanan:</strong> ${currentBooking.serviceName} (${currentBooking.paxCount} Pax)</div>
                <div style="margin-bottom: 6px;"><strong>Jadwal Terkunci:</strong> ${formatDateIndo(currentBooking.selectedDate)}, Pukul ${currentBooking.startTime} - ${currentBooking.endTime} WIB</div>
                <div style="margin-bottom: 6px;"><strong>Penata Rias:</strong> ${currentBooking.staffName}</div>
                <div style="margin-bottom: 6px;"><strong>Zona & Lokasi:</strong> ${currentBooking.transportZoneLabel}</div>
                <div style="margin-bottom: 6px;"><strong>Alamat / Titik:</strong> ${currentBooking.address}</div>
                ${currentBooking.gmapsLink ? `<div style="margin-bottom: 6px;"><strong>Google Maps:</strong> <a href="${currentBooking.gmapsLink}" target="_blank" style="color: var(--dark-pink); text-decoration: underline;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Tautan Peta</a></div>` : ''}
                ${currentBooking.isDestinationService ? `<div style="margin-bottom: 6px; background: #fdf9f9; border: 1px solid #f0e4e4; border-left: 3px solid var(--accent-pink); padding: 6px 10px; border-radius: 6px; font-size: 11.5px; color: var(--text-dark);"><i class="fa-solid fa-plane" style="color: var(--accent-pink);"></i> <strong>Destination Service:</strong> Tiket PP & penginapan tim MUA ditanggung klien.</div>` : ''}
                <div style="margin-bottom: 6px;"><strong>Total Biaya Tagihan:</strong> ${formatRupiah(currentBooking.totalPrice)}</div>
                <div style="margin-bottom: 6px;"><strong>DP 50% Terbayar:</strong> <span style="font-weight:700; color:var(--text-dark);">${formatRupiah(currentBooking.dpAmount)}</span> (Lunas via QRIS)</div>
                <div style="background: #fdf9f9; padding: 8px 12px; border-radius: 8px; font-size: 12px; color: var(--text-dark); border: 1px solid #f0e4e4; border-left: 3px solid var(--accent-pink); margin-top: 6px;">
                    <i class="fa-solid fa-circle-info" style="color: var(--accent-pink);"></i> <strong>Sisa Pelunasan (50%):</strong> ${formatRupiah(currentBooking.remainingAmount)} dibayarkan langsung di lokasi pada Hari H.
                </div>
            `;

            // Tautan WhatsApp Konfirmasi Otomatis
            const waMessage = encodeURIComponent(
                `Halo Chira Make Up, saya telah menyelesaikan pembayaran DP 50% via QRIS untuk reservasi:\n\n` +
                `Kode Booking: ${currentBooking.bookingCode}\n` +
                `Nama: ${currentBooking.custName}\n` +
                `Layanan: ${currentBooking.serviceName} (${currentBooking.paxCount} Orang)\n` +
                `Tanggal: ${formatDateIndo(currentBooking.selectedDate)}\n` +
                `Waktu: ${currentBooking.startTime} - ${currentBooking.endTime} WIB\n` +
                `Staff MUA: ${currentBooking.staffName}\n` +
                `Zona: ${currentBooking.transportZoneLabel}\n` +
                `Alamat: ${currentBooking.address}\n` +
                (currentBooking.gmapsLink ? `Google Maps: ${currentBooking.gmapsLink}\n` : '') +
                (currentBooking.isDestinationService ? `*Ketentuan Destination: Tiket PP & Hotel ditanggung klien*\n` : '') +
                `Total Tagihan: ${formatRupiah(currentBooking.totalPrice)}\n` +
                `DP 50% Terbayar: ${formatRupiah(currentBooking.dpAmount)}\n` +
                `Sisa Pelunasan Hari H: ${formatRupiah(currentBooking.remainingAmount)}\n\n` +
                `Mohon konfirmasi pesanan saya. Terima kasih!`
            );

            const waBtn = document.getElementById("btnWaConfirmation");
            waBtn.href = `https://wa.me/6288989865380?text=${waMessage}`;

            // Ganti Tampilan Modal ke State Sukses
            document.getElementById("qrisPaymentView").style.display = "none";
            document.getElementById("qrisSuccessView").style.display = "block";
        }