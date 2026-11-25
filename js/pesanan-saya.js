(function () {
            const loginStatus = localStorage.getItem("chira_login_status");
            let hasAdminSession = false;
            try {
                const adminRaw = localStorage.getItem("chira_admin_session");
                if (adminRaw) {
                    const parsed = JSON.parse(adminRaw);
                    if (parsed && parsed.isAdmin) hasAdminSession = true;
                }
            } catch (e) {}

            if (loginStatus !== "true" && !hasAdminSession) {
                alert("Akses Terbatas! Silakan login terlebih dahulu untuk melihat riwayat pesanan Anda.");
                window.location.replace("login.html");
            }
        })();

(function () {
            const BOOKINGS_KEY = "chira_bookings";
            const STAFF_PROFILES_KEY = "chira_staff_profiles";
        const REVIEWS_STORAGE_KEY = "chira_reviews";

        function getStoredReviews() {
            try {
                const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed)) return parsed;
                }
            } catch (e) {
                console.error("Gagal membaca chira_reviews", e);
            }
            return [];
        }

        function findReviewForOrder(bookingCode, order) {
            const reviews = getStoredReviews();
            const fromReviews = reviews.find(r => r.bookingCode === bookingCode);
            if (fromReviews) return fromReviews;
            if (order && order.userRating) {
                return {
                    rating: order.userRating,
                    comment: order.userReview || "",
                    date: order.ratedAt ? order.ratedAt.split("T")[0] : ""
                };
            }
            return null;
        }


            const FALLBACK_ARTIST_PHOTOS = {
                "nadine": "img/MUA-STAFF-Nadine.png",
                "aurora": "img/MUA-STAFF-Aurora.png",
                "draco": "img/MUA-STAFF-Draco.png",
                "lisa": "img/MUA-STAFF-Lisa.png",
                "marco": "img/MUA-STAFF-Marco.png",
                "thania": "img/MUA-STAFF-Thania.png"
            };

            const STAR_LABELS = {
                1: "Kurang Memuaskan (1/5)",
                2: "Cukup Baik (2/5)",
                3: "Baik & Rapi (3/5)",
                4: "Sangat Bagus! (4/5)",
                5: "Sempurna! Sangat Memuaskan (5/5)"
            };

            let currentFilter = "all";
            let activeUser = { name: "Customer Chira", email: "customer@chiramua.com", phone: "088989865380" };
            let activeRatingCode = null;
            let selectedStars = 5;

            function escapeHtml(str) {
                if (!str) return "";
                return String(str)
                    .replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
            }

            function formatRupiah(num) {
                return "Rp " + Number(num || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }

            function formatDateIndo(dateStr) {
                if (!dateStr) return "-";
                const parts = dateStr.split("-");
                if (parts.length !== 3) return dateStr;
                const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
                return `${parseInt(parts[2], 10)} ${months[parseInt(parts[1], 10) - 1] || ""} ${parts[0]}`;
            }

            function formatTimestamp(isoStr) {
                if (!isoStr) return "";
                try {
                    const d = new Date(isoStr);
                    return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) + " WIB";
                } catch (e) {
                    return "";
                }
            }

            function showToast(msg) {
                const toast = document.getElementById("pageToast");
                const text = document.getElementById("pageToastMsg");
                if (toast && text) {
                    text.innerText = msg;
                    toast.style.display = "flex";
                    setTimeout(() => { toast.style.display = "none"; }, 3400);
                }
            }

            function getActiveUserIdentity() {
                let profile = null;
                try {
                    const raw = localStorage.getItem("chira_customer_profile");
                    if (raw) profile = JSON.parse(raw);
                } catch (e) {}

                let adminSession = null;
                try {
                    const aRaw = localStorage.getItem("chira_admin_session");
                    if (aRaw) adminSession = JSON.parse(aRaw);
                } catch (e) {}

                const name = (profile && profile.name)
                    || (adminSession && adminSession.namaArtist)
                    || localStorage.getItem("chira_user_name")
                    || "Awigya Zora";
                const email = (profile && profile.email)
                    || (adminSession && adminSession.email)
                    || "customer@chiramua.com";
                const phone = (profile && profile.phone) || "088989865380";

                return { name, email, phone };
            }

            function getAllBookings() {
                try {
                    let raw = localStorage.getItem(BOOKINGS_KEY);
                    if (raw) {
                        if (raw.includes("Nadine Muamlah Veronica")) {
                            raw = raw.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina");
                            localStorage.setItem(BOOKINGS_KEY, raw);
                        }
                        const parsed = JSON.parse(raw);
                        if (Array.isArray(parsed)) return parsed;
                    }
                } catch (e) {}
                return [];
            }

            function saveAllBookings(arr) {
                try {
                    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(arr));
                } catch (e) {
                    console.error("Gagal menyimpan chira_bookings:", e);
                }
            }

            function getArtistPhoto(staffName) {
                const lower = (staffName || "").toLowerCase();
                try {
                    const profiles = JSON.parse(localStorage.getItem(STAFF_PROFILES_KEY) || "[]");
                    if (Array.isArray(profiles)) {
                        const match = profiles.find(p => (p.nama || "").toLowerCase() === lower || lower.startsWith((p.id || "") + " "));
                        if (match && match.fotoProfil) return match.fotoProfil;
                    }
                } catch (e) {}
                const first = lower.split(" ")[0];
                return FALLBACK_ARTIST_PHOTOS[first] || "img/MUA-STAFF-Nadine.png";
            }

            function isOrderOwnedByActiveUser(order, user) {
                if (!order) return false;
                const uEmail = (user.email || "").trim().toLowerCase();
                const uName = (user.name || "").trim().toLowerCase();
                const oEmail = (order.custEmail || "").trim().toLowerCase();
                const oOwner = (order.ownerName || "").trim().toLowerCase();
                const oCust = (order.custName || "").trim().toLowerCase();

                if (uEmail && oEmail && oEmail === uEmail) return true;
                if (uName && (oOwner === uName || oCust === uName)) return true;
                if (order.isUserOrder === true && !oEmail) return true;
                return false;
            }

            /**
             * Jika user yang sedang login belum memiliki riwayat pesanan di chira_bookings,
             * tambahkan 3 contoh pesanan simulasi realistis agar langsung dapat didemokan
             * dan otomatis tersinkronisasi dengan Admin Dashboard.
             */
            function ensureUserDemoOrders() {
                const allBookings = getAllBookings();
                const userOrders = allBookings.filter(b => isOrderOwnedByActiveUser(b, activeUser));
                if (userOrders.length > 0) return allBookings;

                const seededOrders = [
                    {
                        bookingCode: "CHR-20261218-7102",
                        custName: activeUser.name,
                        custEmail: activeUser.email,
                        ownerName: activeUser.name,
                        isUserOrder: true,
                        custPhone: activeUser.phone,
                        serviceKey: "graduation",
                        serviceName: "Makeup Graduation",
                        orderType: "bundle",
                        paxCount: 2,
                        selectedDate: "2026-12-18",
                        startTime: "07:00",
                        endTime: "09:00",
                        totalDuration: 120,
                        staffName: "Aurora Clarissa",
                        locationType: "Studio Chira Malang",
                        address: "Studio Atelier Chira Kota Malang",
                        custNotes: "Riasan wisuda fresh natural glow untuk 2 orang (bersama sahabat).",
                        totalPrice: 900000,
                        dpAmount: 450000,
                        paidAmount: 450000,
                        remainingAmount: 450000,
                        paymentType: "DP 50%",
                        alasanPenolakan: "",
                        status: "DP 50% Paid (Slot Locked)",
                        timestamp: new Date(Date.now() - 3600000 * 4).toISOString()
                    },
                    {
                        bookingCode: "CHR-20261224-5489",
                        custName: activeUser.name,
                        custEmail: activeUser.email,
                        ownerName: activeUser.name,
                        isUserOrder: true,
                        custPhone: activeUser.phone,
                        serviceKey: "engagement",
                        serviceName: "Makeup Engagement",
                        orderType: "single",
                        paxCount: 1,
                        selectedDate: "2026-12-24",
                        startTime: "09:00",
                        endTime: "10:30",
                        totalDuration: 90,
                        staffName: "Nadine Queen Reina",
                        locationType: "Home Service (Rumah)",
                        address: "Jl. Raya Dieng No. 28, Sukun, Kota Malang",
                        custNotes: "Request soft glam peach glowing untuk acara lamaran keluarga.",
                        totalPrice: 750000,
                        dpAmount: 375000,
                        paidAmount: 375000,
                        remainingAmount: 375000,
                        paymentType: "DP 50%",
                        alasanPenolakan: "",
                        status: "Confirmed",
                        timestamp: new Date(Date.now() - 3600000 * 26).toISOString()
                    },
                    {
                        bookingCode: "CHR-20261110-3321",
                        custName: activeUser.name,
                        custEmail: activeUser.email,
                        ownerName: activeUser.name,
                        isUserOrder: true,
                        custPhone: activeUser.phone,
                        serviceKey: "photoshoot",
                        serviceName: "Makeup Photoshoot",
                        orderType: "single",
                        paxCount: 1,
                        selectedDate: "2026-11-10",
                        startTime: "13:00",
                        endTime: "14:15",
                        totalDuration: 75,
                        staffName: "Draco Sebastian",
                        locationType: "Studio Chira Malang",
                        address: "Studio Atelier Chira Kota Malang",
                        custNotes: "Konsep foto studio katalog clean glam.",
                        totalPrice: 550000,
                        dpAmount: 275000,
                        paidAmount: 275000,
                        remainingAmount: 275000,
                        paymentType: "DP 50%",
                        alasanPenolakan: "",
                        status: "Completed",
                        timestamp: new Date(Date.now() - 3600000 * 144).toISOString()
                    }
                ];

                const merged = [...seededOrders, ...allBookings];
                saveAllBookings(merged);
                return merged;
            }

            function classifyStatus(rawStatus) {
                if (rawStatus === "Confirmed") return "confirmed";
                if (rawStatus === "Completed") return "completed";
                if (rawStatus === "Cancelled") return "cancelled";
                return "pending";
            }

            function getStatusMeta(rawStatus) {
                const key = classifyStatus(rawStatus);
                if (key === "confirmed") {
                    return { cls: "status-confirmed", icon: "fa-circle-check", label: "Dikonfirmasi (ACC)" };
                }
                if (key === "completed") {
                    return { cls: "status-completed", icon: "fa-award", label: "Selesai (Lunas)" };
                }
                if (key === "cancelled") {
                    return { cls: "status-cancelled", icon: "fa-circle-xmark", label: "Ditolak / Dibatalkan" };
                }
                return { cls: "status-pending", icon: "fa-hourglass-half", label: "Menunggu Verifikasi DP" };
            }

            function renderOrders() {
                const allBookings = ensureUserDemoOrders();
                const userOrders = allBookings.filter(b => isOrderOwnedByActiveUser(b, activeUser));

                // Update Tab Counters
                const counts = { all: userOrders.length, pending: 0, confirmed: 0, completed: 0, cancelled: 0 };
                userOrders.forEach(o => {
                    const k = classifyStatus(o.status);
                    counts[k]++;
                });
                document.getElementById("countAll").innerText = counts.all;
                document.getElementById("countPending").innerText = counts.pending;
                document.getElementById("countConfirmed").innerText = counts.confirmed;
                document.getElementById("countCompleted").innerText = counts.completed;
                document.getElementById("countCancelled").innerText = counts.cancelled;

                // Filter orders
                const filtered = currentFilter === "all"
                    ? userOrders
                    : userOrders.filter(o => classifyStatus(o.status) === currentFilter);

                const container = document.getElementById("ordersListContainer");
                container.innerHTML = "";

                if (filtered.length === 0) {
                    container.innerHTML = `
                        <div class="empty-orders-box">
                            <i class="fa-regular fa-calendar-xmark"></i>
                            <h3>Belum Ada Pesanan di Kategori Ini</h3>
                            <p>Riwayat reservasi Anda dengan status terpilih masih kosong. Yuk jadwalkan sesi rias impian Anda bersama tim MUA profesional kami!</p>
                            <a href="booking.html" class="btn-new-booking">
                                <i class="fa-solid fa-calendar-plus"></i> Pesan Riasan Sekarang
                            </a>
                        </div>
                    `;
                    return;
                }

                filtered.forEach(order => {
                    const statusKey = classifyStatus(order.status);
                    const statusMeta = getStatusMeta(order.status);
                    const dpVal = order.dpAmount || order.paidAmount || Math.round((order.totalPrice || 0) * 0.5);
                    const remVal = order.remainingAmount !== undefined ? order.remainingAmount : ((order.totalPrice || 0) - dpVal);
                    const artistImg = getArtistPhoto(order.staffName);
                    const paxText = order.orderType === "bundle"
                        ? `Bundle (${order.paxCount || 2} Pax)`
                        : `Perorangan (${order.paxCount || 1} Pax)`;

                    // Blok Alasan Penolakan Khusus Status Cancelled
                    let rejectionBoxHTML = "";
                    if (statusKey === "cancelled") {
                        const reason = order.alasanPenolakan || "Pesanan dibatalkan atau dana DP 50% belum terverifikasi oleh Admin Studio.";
                        const rejMeta = order.rejectedAt
                            ? `<div class="rejection-meta-small">Dicatat pada ${formatTimestamp(order.rejectedAt)}${order.rejectedBy ? " oleh " + escapeHtml(order.rejectedBy) : ""}</div>`
                            : "";
                        rejectionBoxHTML = `
                            <div class="rejection-alert-box">
                                <div class="rejection-alert-icon">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                </div>
                                <div class="rejection-alert-content">
                                    <h5>Alasan Penolakan dari Admin Studio</h5>
                                    <p>${escapeHtml(reason)}</p>
                                    ${rejMeta}
                                </div>
                            </div>
                        `;
                    }

                    // Blok Review Terverifikasi (dari chira_reviews atau order.userRating)
                    const existingReview = findReviewForOrder(order.bookingCode, order);
                    let ratingBannerHTML = "";
                    if (existingReview) {
                        const rScore = Number(existingReview.rating || 5);
                        const starsStr = "★".repeat(Math.round(rScore)) + "☆".repeat(5 - Math.round(rScore));
                        ratingBannerHTML = `
                            <div class="submitted-rating-banner">
                                <div>
                                    <span class="submitted-stars">${starsStr}</span>
                                    <strong style="margin-left: 6px;">Ulasan Anda (${rScore.toFixed(1)}/5)</strong>
                                    ${existingReview.comment ? `<span style="margin-left: 8px; font-style: italic;">"${escapeHtml(existingReview.comment)}"</span>` : ""}
                                </div>
                                <span style="font-size: 11px; color: #1e8449; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Ulasan Terverifikasi</span>
                            </div>
                        `;
                    }

                    // Tombol Aksi di Footer Kartu
                    let actionsHTML = "";
                    let footerHint = "";

                    if (statusKey === "cancelled") {
                        const waMsg = encodeURIComponent(
                            `Halo Admin Chira Make Up, saya ingin menanyakan mengenai pembatalan pesanan saya:\n` +
                            `Kode Booking: ${order.bookingCode}\n` +
                            `Nama: ${order.custName}\n` +
                            `Alasan tercatat: ${order.alasanPenolakan || "-"}\n` +
                            `Mohon bantuannya untuk konfirmasi/jadwal ulang. Terima kasih!`
                        );
                        footerHint = `<i class="fa-solid fa-circle-info" style="color: var(--danger);"></i> Butuh klarifikasi mutasi atau ingin ganti jadwal?`;
                        actionsHTML = `
                            <a href="booking.html" class="btn-order-act btn-rebook">
                                <i class="fa-solid fa-rotate-right"></i> Booking Ulang
                            </a>
                            <a href="https://wa.me/6288989865380?text=${waMsg}" target="_blank" class="btn-order-act btn-wa-support">
                                <i class="fa-brands fa-whatsapp"></i> Chat Admin WA
                            </a>
                        `;
                    } else {
                        footerHint = statusKey === "pending"
                            ? `<i class="fa-solid fa-clock" style="color: var(--warning);"></i> Admin sedang mencocokkan mutasi DP 50% QRIS Anda.`
                            : (statusKey === "confirmed"
                                ? `<i class="fa-solid fa-shield-check" style="color: var(--success);"></i> Jadwal resmi terkunci! Tunjukkan E-Receipt saat Hari H.`
                                : `<i class="fa-solid fa-sparkles" style="color: var(--info);"></i> Terima kasih telah mempercayakan momen istimewa Anda kepada kami.`);

                        actionsHTML = `
                            <button type="button" class="btn-order-act btn-receipt" onclick="window.openOrderEReceipt('${escapeHtml(order.bookingCode)}')">
                                <i class="fa-solid fa-file-invoice"></i> Lihat E-Receipt
                            </button>
                        `;

                        if (statusKey === "completed") {
                            if (existingReview) {
                                const rScore = Number(existingReview.rating || 5).toFixed(1);
                                actionsHTML += `
                                    <span class="badge-review-sent" title="Ulasan Anda untuk pesanan ini telah terverifikasi dan tersimpan">
                                        <i class="fa-solid fa-star"></i> Ulasan Terkirim (★ ${rScore})
                                    </span>
                                `;
                            } else {
                                actionsHTML += `
                                    <button type="button" class="btn-order-act btn-rate" onclick="window.openArtistRatingModal('${escapeHtml(order.bookingCode)}')">
                                        <i class="fa-solid fa-star"></i> Beri Rating &amp; Ulasan
                                    </button>
                                `;
                            }
                        }
                    }

                    const card = document.createElement("article");
                    card.className = "order-card" + (statusKey === "cancelled" ? " card-cancelled" : "");
                    card.innerHTML = `
                        <div class="order-card-head">
                            <div class="order-code-group">
                                <span class="order-code-badge">
                                    <i class="fa-solid fa-hashtag"></i> ${escapeHtml(order.bookingCode)}
                                </span>
                                <span class="order-created-time">Dipesan: ${formatTimestamp(order.timestamp)}</span>
                            </div>
                            <span class="status-pill ${statusMeta.cls}">
                                <i class="fa-solid ${statusMeta.icon}"></i> ${statusMeta.label}
                            </span>
                        </div>

                        <div class="order-card-body">
                            <div class="order-main-grid">
                                <div>
                                    <div class="order-artist-row">
                                        <img src="${artistImg}" alt="${escapeHtml(order.staffName)}" class="order-artist-avatar" onerror="this.src='img/CHIRA_LOGO-removebg-preview.png'">
                                        <div>
                                            <div class="order-service-title">${escapeHtml(order.serviceName)}</div>
                                            <div class="order-artist-sub">
                                                <span><i class="fa-solid fa-wand-magic-sparkles" style="color: var(--accent-pink);"></i> MUA: <strong style="color: var(--text-dark);">${escapeHtml(order.staffName)}</strong></span>
                                                <span class="pax-type-pill"><i class="fa-solid fa-user-group"></i> ${paxText}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="order-meta-grid">
                                        <div class="order-meta-item">
                                            <div class="order-meta-label"><i class="fa-regular fa-calendar"></i> Tanggal Acara</div>
                                            <div class="order-meta-value">${formatDateIndo(order.selectedDate)}</div>
                                        </div>
                                        <div class="order-meta-item">
                                            <div class="order-meta-label"><i class="fa-regular fa-clock"></i> Jam &amp; Durasi</div>
                                            <div class="order-meta-value">${escapeHtml(order.startTime)} - ${escapeHtml(order.endTime)} WIB</div>
                                            <div class="order-meta-sub">${order.totalDuration || 90} menit pengerjaan</div>
                                        </div>
                                        <div class="order-meta-item full-span">
                                            <div class="order-meta-label"><i class="fa-solid fa-location-dot"></i> Lokasi Pengerjaan</div>
                                            <div class="order-meta-value">${escapeHtml(order.locationType || "Studio Chira Malang")}</div>
                                            <div class="order-meta-sub">${escapeHtml(order.address || "Studio Atelier Chira Kota Malang")}${order.gmapsLink ? ` &bull; <a href="${escapeHtml(order.gmapsLink)}" target="_blank" style="color: var(--dark-pink); text-decoration: underline; font-weight: 600;"><i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px;"></i> Buka Google Maps</a>` : ''}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="order-finance-box">
                                    <div class="finance-box-title">
                                        <i class="fa-solid fa-wallet"></i> Ringkasan Tagihan (DP 50%)
                                    </div>
                                    <div class="finance-line">
                                        <span>Total Harga Layanan</span>
                                        <strong>${formatRupiah(order.totalPrice)}</strong>
                                    </div>
                                    <div class="finance-line dp-paid">
                                        <span><i class="fa-solid fa-qrcode"></i> DP 50% (via QRIS)</span>
                                        <span>${formatRupiah(dpVal)}</span>
                                    </div>
                                    <div class="finance-line remaining-line">
                                        <span>Sisa Pelunasan Hari H (50%)</span>
                                        <span style="color: ${statusKey === 'completed' ? 'var(--info)' : 'var(--dark-pink)'};">
                                            ${statusKey === "completed" ? "LUNAS 100%" : formatRupiah(remVal)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            ${rejectionBoxHTML}
                            ${ratingBannerHTML}
                        </div>

                        <div class="order-card-footer">
                            <div class="footer-hint-text">${footerHint}</div>
                            <div class="order-actions-row">${actionsHTML}</div>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }

            /* --- MODAL E-RECEIPT --- */
            window.openOrderEReceipt = function (bookingCode) {
                const allBookings = getAllBookings();
                const order = allBookings.find(b => b.bookingCode === bookingCode);
                if (!order) return;

                const statusMeta = getStatusMeta(order.status);
                const statusKey = classifyStatus(order.status);
                const dpVal = order.dpAmount || order.paidAmount || Math.round((order.totalPrice || 0) * 0.5);
                const remVal = order.remainingAmount !== undefined ? order.remainingAmount : ((order.totalPrice || 0) - dpVal);

                const body = document.getElementById("eReceiptBody");
                body.innerHTML = `
                    <div class="receipt-stamp-row">
                        <div>
                            <div style="font-size: 11px; color: var(--text-light);">Kode Booking Resmi</div>
                            <div style="font-weight: 700; font-size: 16px; color: var(--text-dark); font-variant-numeric: tabular-nums;">${escapeHtml(order.bookingCode)}</div>
                        </div>
                        <span class="status-pill ${statusMeta.cls}">
                            <i class="fa-solid ${statusMeta.icon}"></i> ${statusMeta.label}
                        </span>
                    </div>

                    <div class="receipt-detail-list">
                        <div class="receipt-row">
                            <span>Nama Pemesan</span>
                            <strong>${escapeHtml(order.custName)}</strong>
                        </div>
                        <div class="receipt-row">
                            <span>No. WhatsApp</span>
                            <strong>${escapeHtml(order.custPhone || "-")}</strong>
                        </div>
                        <div class="receipt-row">
                            <span>Layanan &amp; Paket</span>
                            <strong>${escapeHtml(order.serviceName)} (${order.orderType === "bundle" ? "Bundle " + order.paxCount + " Pax" : "1 Pax"})</strong>
                        </div>
                        <div class="receipt-row">
                            <span>Staff MUA Artist</span>
                            <strong style="color: var(--dark-pink);">${escapeHtml(order.staffName)}</strong>
                        </div>
                        <div class="receipt-row">
                            <span>Jadwal Rias</span>
                            <strong>${formatDateIndo(order.selectedDate)}, ${escapeHtml(order.startTime)} - ${escapeHtml(order.endTime)} WIB</strong>
                        </div>
                        <div class="receipt-row">
                            <span>Lokasi</span>
                            <strong>${escapeHtml(order.locationType)} — ${escapeHtml(order.address || "Studio Chira Malang")}</strong>
                        </div>
                    </div>

                    <div class="order-finance-box">
                        <div class="finance-line">
                            <span>Total Biaya Layanan</span>
                            <strong>${formatRupiah(order.totalPrice)}</strong>
                        </div>
                        <div class="finance-line dp-paid">
                            <span>DP 50% Terbayar (QRIS)</span>
                            <span>${formatRupiah(dpVal)}</span>
                        </div>
                        <div class="finance-line remaining-line">
                            <span>Sisa Pelunasan di Hari H (50%)</span>
                            <span>${statusKey === "completed" ? "LUNAS 100%" : formatRupiah(remVal)}</span>
                        </div>
                    </div>

                    <p style="font-size: 11.5px; color: var(--text-light); text-align: center; margin-top: 14px;">
                        <i class="fa-solid fa-shield-halved" style="color: var(--accent-pink);"></i>
                        Bukti reservasi elektronik sah diterbitkan oleh sistem CHIRA MAKE-UP Atelier Malang.
                    </p>
                `;

                document.getElementById("eReceiptModal").style.display = "flex";
            };

            /* --- MODAL BERI RATING --- */
            function updateStarPickerUI(stars) {
                selectedStars = stars;
                const btns = document.querySelectorAll("#starPicker button");
                btns.forEach(btn => {
                    const val = parseInt(btn.getAttribute("data-star"), 10);
                    btn.classList.toggle("active", val <= stars);
                });
                const lbl = document.getElementById("ratingLabelText");
                if (lbl) lbl.innerText = STAR_LABELS[stars] || "";
            }

            window.openArtistRatingModal = function (bookingCode) {
                const allBookings = getAllBookings();
                const order = allBookings.find(b => b.bookingCode === bookingCode);
                if (!order) return;

                activeRatingCode = bookingCode;
                document.getElementById("ratingArtistPhoto").src = getArtistPhoto(order.staffName);
                document.getElementById("ratingArtistName").innerText = order.staffName;
                document.getElementById("ratingOrderMeta").innerText = `${order.bookingCode} • ${order.serviceName}`;
                document.getElementById("ratingReviewInput").value = "";
                updateStarPickerUI(5);

                document.getElementById("ratingModal").style.display = "flex";
            };

            /**
             * Menyimpan rating ke objek pesanan (chira_bookings) dan
             * memperbarui skor rating artist di chira_staff_profiles secara dinamis
             */
            function submitArtistRating() {
                if (!activeRatingCode) return;

                const allBookings = getAllBookings();
                const idx = allBookings.findIndex(b => b.bookingCode === activeRatingCode);
                if (idx === -1) return;

                const reviewText = (document.getElementById("ratingReviewInput").value || "").trim();
                const order = allBookings[idx];

                order.userRating = selectedStars;
                order.userReview = reviewText;
                order.ratedAt = new Date().toISOString();
                saveAllBookings(allBookings);

                // 1. Simpan ke sistem etalase ulasan terverifikasi chira_reviews
                try {
                    function normalizeServiceName(sn) {
                        if (!sn) return "Custom Makeup";
                        const s = String(sn).trim().toLowerCase();
                        if (s.includes("wedding") || s.includes("bridal") || s.includes("nikah") || s.includes("pengantin") || s.includes("pre-wedding") || s.includes("prewedding")) return "Makeup Wedding / Pre-Wedding";
                        if (s.includes("grad") || s.includes("wisuda")) return "Makeup Graduation";
                        if (s.includes("engage") || s.includes("lamaran") || s.includes("tunangan")) return "Makeup Engagement";
                        if (s.includes("birth") || s.includes("ulang tahun") || s.includes("party") || s.includes("pesta") || s.includes("gala")) return "Makeup Birthday";
                        if (s.includes("photo") || s.includes("shoot") || s.includes("foto") || s.includes("editorial") || s.includes("commercial")) return "Makeup Photoshoot";
                        return "Custom Makeup";
                    }

                    const reviewItem = {
                        id: "REV-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5).toUpperCase(),
                        bookingCode: order.bookingCode,
                        custName: order.custName || "Klien CHIRA MUA",
                        serviceName: normalizeServiceName(order.serviceName),
                        staffName: order.staffName || "Staff MUA",
                        rating: Number(selectedStars),
                        comment: reviewText,
                        date: new Date().toISOString().split("T")[0],
                        verified: true
                    };

                    let existingReviews = getStoredReviews();
                    const existRevIdx = existingReviews.findIndex(r => r.bookingCode === order.bookingCode);
                    if (existRevIdx >= 0) {
                        existingReviews[existRevIdx] = Object.assign({}, existingReviews[existRevIdx], reviewItem);
                    } else {
                        existingReviews.unshift(reviewItem);
                    }
                    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(existingReviews));
                    window.dispatchEvent(new Event("storage"));
                } catch (e) {
                    console.error("Gagal menyimpan ke chira_reviews:", e);
                }

                // 2. Sinkronkan & perbarui skor rating artist di chira_staff_profiles
                try {
                    const rawProfiles = localStorage.getItem(STAFF_PROFILES_KEY);
                    if (rawProfiles) {
                        const profiles = JSON.parse(rawProfiles);
                        if (Array.isArray(profiles)) {
                            const targetLower = (order.staffName || "").trim().toLowerCase();
                            const firstLower = targetLower.split(" ")[0];
                            const pIdx = profiles.findIndex(p =>
                                (p.nama || "").trim().toLowerCase() === targetLower ||
                                (firstLower && (p.id || "").toLowerCase() === firstLower)
                            );
                            if (pIdx !== -1) {
                                const artist = profiles[pIdx];
                                if (!Array.isArray(artist.customerReviews)) artist.customerReviews = [];
                                artist.customerReviews.unshift({
                                    bookingCode: order.bookingCode,
                                    customerName: order.custName,
                                    stars: selectedStars,
                                    review: reviewText,
                                    ratedAt: order.ratedAt
                                });

                                // Perbarui baseRating berbobot berdasarkan nilai bintang (1★=20%, 5★=100%)
                                const prevBase = Number(artist.baseRating) || 98;
                                const starPct = selectedStars * 20;
                                const updatedRating = Math.round((((prevBase * 12) + starPct) / 13) * 10) / 10;
                                artist.baseRating = Math.max(50, Math.min(100, updatedRating));
                                localStorage.setItem(STAFF_PROFILES_KEY, JSON.stringify(profiles));
                            }
                        }
                    }
                } catch (e) {
                    console.error("Gagal memperbarui rating di chira_staff_profiles:", e);
                }

                document.getElementById("ratingModal").style.display = "none";
                activeRatingCode = null;
                renderOrders();
                showToast(`Terima kasih! Rating ${selectedStars}★ berhasil dikirim & memperbarui skor MUA.`);
            }

            document.addEventListener("DOMContentLoaded", function () {
                activeUser = getActiveUserIdentity();
                const sub = document.getElementById("userOrdersSubtitle");
                if (sub) {
                    sub.innerHTML = `Halo <strong>${escapeHtml(activeUser.name)}</strong>, pantau status verifikasi DP 50%, unduh E-Receipt resmi, dan berikan rating untuk MUA Artist favorit Anda.`;
                }

                renderOrders();

                // Filter Tabs Click
                const tabBtns = document.querySelectorAll("#statusTabsBar .status-tab-btn");
                tabBtns.forEach(btn => {
                    btn.addEventListener("click", function () {
                        tabBtns.forEach(b => b.classList.remove("active"));
                        this.classList.add("active");
                        currentFilter = this.getAttribute("data-filter") || "all";
                        renderOrders();
                    });
                });

                // E-Receipt Modal Close
                const receiptModal = document.getElementById("eReceiptModal");
                document.getElementById("closeReceiptBtn").addEventListener("click", () => { receiptModal.style.display = "none"; });
                document.getElementById("closeReceiptBottomBtn").addEventListener("click", () => { receiptModal.style.display = "none"; });
                receiptModal.addEventListener("click", (e) => { if (e.target === receiptModal) receiptModal.style.display = "none"; });

                // Rating Modal Controls
                const ratingModal = document.getElementById("ratingModal");
                document.getElementById("closeRatingBtn").addEventListener("click", () => { ratingModal.style.display = "none"; });
                document.getElementById("cancelRatingBtn").addEventListener("click", () => { ratingModal.style.display = "none"; });
                ratingModal.addEventListener("click", (e) => { if (e.target === ratingModal) ratingModal.style.display = "none"; });

                document.querySelectorAll("#starPicker button").forEach(btn => {
                    btn.addEventListener("click", function () {
                        updateStarPickerUI(parseInt(this.getAttribute("data-star"), 10));
                    });
                });

                document.getElementById("submitRatingBtn").addEventListener("click", submitArtistRating);

                // Sinkronisasi Real-Time antar Tab Browser (ketika Admin ACC / Selesai / Tolak dengan Alasan)
                window.addEventListener("storage", function (e) {
                    if (e.key === BOOKINGS_KEY || e.key === STAFF_PROFILES_KEY) {
                        renderOrders();
                    }
                });
            });
        })();