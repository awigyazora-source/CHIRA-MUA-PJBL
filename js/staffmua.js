(function () {
            const STAFF_PROFILES_KEY = "chira_staff_profiles";
            const BOOKINGS_KEY = "chira_bookings";

            const DEFAULT_STAFF_PROFILES = [
                {
                    id: "nadine",
                    nama: "Nadine Queen Reina",
                    email: "nadine@chiramua.com",
                    role: "Lead MUA / Super Admin",
                    spesialisasi: "Senior Bridal & Glow Specialist",
                    specialtyTag: "Bridal & Glow Specialist",
                    category: "bridal ready",
                    status: "Ready on Duty",
                    isReady: true,
                    bio: "Spesialis riasan modern soft glam dan radiant glowing flawless. Piawai menciptakan tampilan pengantin anggun yang tahan lama untuk momen sakral akad maupun resepsi.",
                    pengalamanTahun: 9,
                    fotoProfil: "img/MUA-STAFF-Nadine.png",
                    defaultFoto: "img/MUA-STAFF-Nadine.png",
                    baseKlien: 650,
                    baseKlienLabel: "Brides",
                    baseRating: 98,
                    portofolioTerbaik: [
                        { judul: "Radiant Akad Bridal", kategori: "Wedding", gambar: "img/Portfolio-wedding1-after.png" },
                        { judul: "Soft Glam Reception", kategori: "Wedding", gambar: "img/Portfolio-wedding2-after.png" },
                        { judul: "Flawless Glass Skin", kategori: "Wedding", gambar: "img/Portfolio-wedding3-after.png" }
                    ]
                },
                {
                    id: "aurora",
                    nama: "Aurora Clarissa",
                    email: "aurora@chiramua.com",
                    role: "Staff MUA",
                    spesialisasi: "Graduation & Party Look Specialist",
                    specialtyTag: "Graduation & Party Look",
                    category: "graduation ready",
                    status: "Ready on Duty",
                    isReady: true,
                    bio: "Ahli dalam riasan wisuda fresh, youthful, dan natural glow yang tahan kilau seharian untuk momen kelulusan, prom night, hingga party semi-formal yang ceria.",
                    pengalamanTahun: 5,
                    fotoProfil: "img/MUA-STAFF-Aurora.png",
                    defaultFoto: "img/MUA-STAFF-Aurora.png",
                    baseKlien: 380,
                    baseKlienLabel: "Clients",
                    baseRating: 98,
                    portofolioTerbaik: [
                        { judul: "Fresh Youthful Grad", kategori: "Graduation", gambar: "img/Portfolio-graduation1-after.jpg" },
                        { judul: "Sweet Peach Birthday", kategori: "Birthday", gambar: "img/Portfolio-birthday1-after.png" },
                        { judul: "Glowing Party Look", kategori: "Birthday", gambar: "img/Portfolio-birthday2-after.png" }
                    ]
                },
                {
                    id: "draco",
                    nama: "Draco Sebastian",
                    email: "draco@chiramua.com",
                    role: "Staff MUA",
                    spesialisasi: "Fashion & Photoshoot MUA",
                    specialtyTag: "Commercial & Photoshoot",
                    category: "glamour ready",
                    status: "Ready on Duty",
                    isReady: true,
                    bio: "Pakar complexion berdimensi tegas dan eye-artistry untuk prewedding outdoor, fashion editorial, campaign komersial, serta video beresolusi tinggi 4K.",
                    pengalamanTahun: 7,
                    fotoProfil: "img/MUA-STAFF-Draco.png",
                    defaultFoto: "img/MUA-STAFF-Draco.png",
                    baseKlien: 510,
                    baseKlienLabel: "Shoots",
                    baseRating: 99,
                    portofolioTerbaik: [
                        { judul: "Editorial High-Def 4K", kategori: "Photoshoot", gambar: "img/Portfolio-photoshoot1-after.png" },
                        { judul: "Commercial Campaign", kategori: "Photoshoot", gambar: "img/Portfolio-photoshoot2-after.png" },
                        { judul: "Sculpted Studio Look", kategori: "Photoshoot", gambar: "img/Portfolio-photoshoot3-after.png" }
                    ]
                },
                {
                    id: "lisa",
                    nama: "Lisa Anggraini",
                    email: "lisa@chiramua.com",
                    role: "Staff MUA",
                    spesialisasi: "Engagement & Modern Hijab Specialist",
                    specialtyTag: "Engagement & Modern Hijab",
                    category: "engagement bridal ready",
                    status: "Ready on Duty",
                    isReady: true,
                    bio: "Spesialis perpaduan makeup lembut romantis untuk prosesi lamaran/sangjit dengan kreasi modern hijab styling yang rapi, mewah, dan menonjolkan inner beauty.",
                    pengalamanTahun: 6,
                    fotoProfil: "img/MUA-STAFF-Lisa.png",
                    defaultFoto: "img/MUA-STAFF-Lisa.png",
                    baseKlien: 450,
                    baseKlienLabel: "Events",
                    baseRating: 98,
                    portofolioTerbaik: [
                        { judul: "Romantic Sangjit Look", kategori: "Engagement", gambar: "img/Portfolio-engagement1-after.jpg" },
                        { judul: "Modern Hijab Glam", kategori: "Engagement", gambar: "img/service-engagement.png" },
                        { judul: "Soft Dewy Bridal", kategori: "Wedding", gambar: "img/Portfolio-wedding1-after.png" }
                    ]
                },
                {
                    id: "marco",
                    nama: "Marco Pratama",
                    email: "marco@chiramua.com",
                    role: "Staff MUA",
                    spesialisasi: "Senior Bridal & Airbrush Specialist",
                    specialtyTag: "Bridal & Airbrush Specialist",
                    category: "bridal glamour",
                    status: "Busy in Session",
                    isReady: false,
                    bio: "Master riasan pengantin modern dengan teknik airbrush ultra-flawless, anti-crack, dan tahan 14+ jam untuk pesta pernikahan megah dan intimate wedding.",
                    pengalamanTahun: 8,
                    fotoProfil: "img/MUA-STAFF-Marco.png",
                    defaultFoto: "img/MUA-STAFF-Marco.png",
                    baseKlien: 600,
                    baseKlienLabel: "Brides",
                    baseRating: 99,
                    portofolioTerbaik: [
                        { judul: "Airbrush Grand Bridal", kategori: "Wedding", gambar: "img/Portfolio-wedding2-after.png" },
                        { judul: "Intimate Luxury Bride", kategori: "Wedding", gambar: "img/Portfolio-wedding3-after.png" },
                        { judul: "Signature Custom Look", kategori: "Custom", gambar: "img/Portfolio-custom2-after.png" }
                    ]
                },
                {
                    id: "thania",
                    nama: "Thania Aurelia Putri",
                    email: "thania@chiramua.com",
                    role: "Staff MUA",
                    spesialisasi: "Editorial & High Glamour Specialist",
                    specialtyTag: "Editorial & High Glamour",
                    category: "glamour ready",
                    status: "Ready on Duty",
                    isReady: true,
                    bio: "Ahli dalam riasan mata tajam elegan, dramatic look, dan glowing photoshoot complexion. Sangat direkomendasikan untuk wisuda, pesta malam, hingga commercial photoshoot.",
                    pengalamanTahun: 6,
                    fotoProfil: "img/MUA-STAFF-Thania.png",
                    defaultFoto: "img/MUA-STAFF-Thania.png",
                    baseKlien: 420,
                    baseKlienLabel: "Events",
                    baseRating: 99,
                    portofolioTerbaik: [
                        { judul: "Dramatic Evening Glam", kategori: "Custom", gambar: "img/Portfolio-custom1-after.png" },
                        { judul: "Bold Eye Editorial", kategori: "Custom", gambar: "img/Portfolio-custom3-after.png" },
                        { judul: "Sparkling Night Party", kategori: "Birthday", gambar: "img/Portfolio-birthday3-after.png" }
                    ]
                }
            ];

            let currentFilter = "all";
            let syncedProfilesCache = [];

            function escapeHtml(str) {
                if (!str) return "";
                return String(str)
                    .replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
            }

            /**
             * Membaca profil 6 artist dari localStorage (chira_staff_profiles)
             * atau inisialisasi default jika belum tersedia
             */
            function loadSyncedStaffProfiles() {
                try {
                    let raw = localStorage.getItem(STAFF_PROFILES_KEY);
                    if (raw) {
                        if (raw.includes("Nadine Muamlah Veronica")) {
                            raw = raw.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina");
                            localStorage.setItem(STAFF_PROFILES_KEY, raw);
                        }
                        const parsed = JSON.parse(raw);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            return DEFAULT_STAFF_PROFILES.map(def => {
                                const found = parsed.find(p => p.id === def.id || p.email === def.email);
                                if (!found) return JSON.parse(JSON.stringify(def));
                                return {
                                    ...JSON.parse(JSON.stringify(def)),
                                    isActive: found.isActive !== false,
                                    ...found,
                                    portofolioTerbaik: Array.isArray(found.portofolioTerbaik)
                                        ? found.portofolioTerbaik.slice(0, 3)
                                        : JSON.parse(JSON.stringify(def.portofolioTerbaik))
                                };
                            });
                        }
                    }
                } catch (e) {
                    console.error("Gagal membaca chira_staff_profiles:", e);
                }
                const initial = JSON.parse(JSON.stringify(DEFAULT_STAFF_PROFILES));
                try {
                    localStorage.setItem(STAFF_PROFILES_KEY, JSON.stringify(initial));
                } catch (e) {}
                return initial;
            }

            /**
             * Membaca seluruh data pesanan dari localStorage (chira_bookings)
             */
            function loadSyncedBookings() {
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
                } catch (e) {
                    console.error("Gagal membaca chira_bookings:", e);
                }
                return [];
            }

            /**
             * Kalkulasi Akurat Jumlah Pelanggan Dilayani & Persentase Rating Dinamis
             * - Jumlah Klien = baseKlien + total pax pesanan 'Completed' milik MUA (termasuk paket Bundle)
             * - Rating Dinamis = rasio berbobot baseRating terhadap pesanan 'Completed' vs 'Cancelled'
             */
            function calculateArtistDynamicStats(artist, bookings) {
                const nameLower = (artist.nama || "").trim().toLowerCase();
                const firstLower = nameLower.split(" ")[0];

                const artistOrders = bookings.filter(b => {
                    const bStaff = (b.staffName || "").trim().toLowerCase();
                    return bStaff === nameLower || (firstLower && bStaff.startsWith(firstLower + " "));
                });

                const completedOrders = artistOrders.filter(b => b.status === "Completed");
                const cancelledOrders = artistOrders.filter(b => b.status === "Cancelled");

                // Hitung total pax dari semua pesanan Completed (Bundle menghitung paxCount)
                const completedPax = completedOrders.reduce((acc, order) => {
                    const pax = Math.max(1, parseInt(order.paxCount, 10) || 1);
                    return acc + pax;
                }, 0);

                const baseKlien = Number(artist.baseKlien) || 0;
                const totalKlienDilayani = baseKlien + completedPax;

                // Hitung rating kepuasan dinamis dari baseRating + rasio Completed vs Cancelled
                const baseRating = Number(artist.baseRating) || 98;
                const compCount = completedOrders.length;
                const cancCount = cancelledOrders.length;
                let dynamicRating = baseRating;

                if (compCount > 0 || cancCount > 0) {
                    const baseWeight = 10;
                    dynamicRating = ((baseRating * baseWeight) + (compCount * 100) + (cancCount * 0)) / (baseWeight + compCount + cancCount);
                    dynamicRating = Math.max(50, Math.min(100, dynamicRating));
                }

                const formattedRating = Number.isInteger(Number(dynamicRating.toFixed(1)))
                    ? `${Math.round(dynamicRating)}%`
                    : `${dynamicRating.toFixed(1)}%`;

                return {
                    totalKlienDilayani,
                    completedPax,
                    completedCount: compCount,
                    cancelledCount: cancCount,
                    formattedRating
                };
            }

            function openPortfolioLightbox(artistId, slotIndex) {
                const artist = syncedProfilesCache.find(p => p.id === artistId);
                if (!artist || !Array.isArray(artist.portofolioTerbaik)) return;
                const item = artist.portofolioTerbaik[slotIndex];
                if (!item || !item.gambar) return;

                const modal = document.getElementById("staffPortfolioModal");
                document.getElementById("spmImage").src = item.gambar;
                document.getElementById("spmCategory").innerText = item.kategori || "Make Up";
                document.getElementById("spmTitle").innerText = item.judul || "Karya Terbaik";
                document.getElementById("spmArtistMeta").innerText = `Karya oleh ${artist.nama} — ${artist.spesialisasi}`;

                const bookLink = document.getElementById("spmBookLink");
                if (artist.isReady === false || artist.status === "Busy in Session") {
                    bookLink.href = "booking.html";
                    bookLink.innerHTML = `<i class="fa-solid fa-calendar-check"></i> Cek Jadwal Studio Chira`;
                } else {
                    bookLink.href = `booking.html?artist=${encodeURIComponent(artist.nama)}`;
                    bookLink.innerHTML = `<i class="fa-solid fa-calendar-check"></i> Pesan Riasan dengan ${escapeHtml(artist.nama.split(" ")[0])}`;
                }

                modal.style.display = "flex";
            }

            window.openStaffPortfolioPreview = openPortfolioLightbox;

            function applyArtistFilter(filterValue) {
                currentFilter = filterValue || "all";
                const artistCards = document.querySelectorAll("#artistsGrid .artist-profile-card");
                artistCards.forEach(card => {
                    const categories = card.getAttribute("data-category") || "";
                    if (currentFilter === "all" || categories.includes(currentFilter)) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            }

            /**
             * Render ulang ke-6 Kartu Artist secara dinamis dari localStorage
             */
            function renderDynamicArtists() {
                const grid = document.getElementById("artistsGrid");
                if (!grid) return;

                const profiles = loadSyncedStaffProfiles();
                const bookings = loadSyncedBookings();
                syncedProfilesCache = profiles;

                grid.innerHTML = "";

                profiles.forEach(artist => {
                    const stats = calculateArtistDynamicStats(artist, bookings);
                    const isDeactivated = artist.isActive === false || artist.status === "Nonaktif" || artist.status === "Dipecat";
                    const isCuti = artist.status === "Cuti" || artist.status === "Cuti / Nonaktif Sementara";
                    const isBusy = artist.status === "Busy in Session";
                    const isReady = !isDeactivated && !isCuti && !isBusy && (artist.isReady !== false);

                    let statusBadgeClass = "badge-ready";
                    let statusBadgeText = "Ready to Book";
                    let statusBadgeStyle = "";

                    if (isDeactivated) {
                        statusBadgeClass = "badge-deactivated";
                        statusBadgeText = "Tidak Bertugas / Nonaktif";
                        statusBadgeStyle = "background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5;";
                    } else if (isCuti) {
                        statusBadgeClass = "badge-cuti";
                        statusBadgeText = "Sedang Cuti";
                        statusBadgeStyle = "background: #fef3c7; color: #b45309; border: 1px solid #fcd34d;";
                    } else if (isBusy) {
                        statusBadgeClass = "badge-full";
                        statusBadgeText = "Full Booked";
                    }

                    const catTokens = (artist.category || "").split(/\s+/).filter(Boolean).filter(c => c !== "ready");
                    if (isReady) catTokens.push("ready");
                    const categoryAttr = catTokens.join(" ");

                    // Render hingga 3 thumbnail portofolio terbaik
                    const portfolioItems = Array.isArray(artist.portofolioTerbaik)
                        ? artist.portofolioTerbaik.filter(item => item && item.gambar).slice(0, 3)
                        : [];

                    let portfolioSectionHTML = "";
                    if (portfolioItems.length > 0) {
                        const thumbsHTML = portfolioItems.map((item, idx) => `
                            <div class="best-portfolio-thumb" onclick="window.openStaffPortfolioPreview('${escapeHtml(artist.id)}', ${idx})" title="${escapeHtml(item.judul)} (${escapeHtml(item.kategori)}) — Klik untuk perbesar">
                                <img src="${item.gambar}" alt="${escapeHtml(item.judul)}" onerror="this.src='img/CHIRA_LOGO-removebg-preview.png'">
                                <div class="best-portfolio-overlay">
                                    <span class="best-portfolio-cat">${escapeHtml(item.kategori || "Look")}</span>
                                    <span class="best-portfolio-title">${escapeHtml(item.judul || "Karya")}</span>
                                </div>
                            </div>
                        `).join("");

                        portfolioSectionHTML = `
                            <div class="artist-best-portfolio">
                                <div class="best-portfolio-header">
                                    <span class="best-portfolio-label">
                                        <i class="fa-solid fa-sparkles"></i> Portofolio Terbaik
                                    </span>
                                    <span class="best-portfolio-count">${portfolioItems.length} Karya</span>
                                </div>
                                <div class="best-portfolio-grid">
                                    ${thumbsHTML}
                                </div>
                            </div>
                        `;
                    }

                    const clientTooltip = `Base ${artist.baseKlien} + ${stats.completedPax} pax pesanan selesai terverifikasi`;
                    const ratingTooltip = `Rating dinamis dari ${stats.completedCount} selesai & ${stats.cancelledCount} batal (Base ${artist.baseRating}%)`;

                    let actionButtonHTML = "";
                    if (isDeactivated) {
                        actionButtonHTML = `<button type="button" class="btn-artist-disabled" style="background: #f1f5f9; color: #64748b; border: 1px solid #cbd5e1; cursor: not-allowed;">
                                <i class="fa-solid fa-user-slash"></i> Tidak Bertugas / Nonaktif
                           </button>`;
                    } else if (isCuti) {
                        actionButtonHTML = `<button type="button" class="btn-artist-disabled" style="background: #fffbeb; color: #b45309; border: 1px solid #fde68a; cursor: not-allowed;">
                                <i class="fa-solid fa-umbrella-beach"></i> Sedang Cuti Sementara
                           </button>`;
                    } else if (isReady) {
                        actionButtonHTML = `<a href="booking.html?artist=${encodeURIComponent(artist.nama)}" class="btn-artist-book">
                                <i class="fa-solid fa-calendar-check"></i> Pilih Artist &amp; Book
                           </a>`;
                    } else {
                        actionButtonHTML = `<button type="button" class="btn-artist-disabled">
                                <i class="fa-solid fa-ban"></i> Full Booked (Jadwal Penuh)
                           </button>`;
                    }

                    const card = document.createElement("div");
                    card.className = "artist-profile-card";
                    card.setAttribute("data-category", categoryAttr);
                    card.innerHTML = `
                        <div class="artist-photo-wrap">
                            <span class="artist-badge-status ${statusBadgeClass}" style="${statusBadgeStyle}">${statusBadgeText}</span>
                            <span class="specialty-tag">${escapeHtml(artist.specialtyTag || artist.spesialisasi)}</span>
                            <img src="${artist.fotoProfil}" alt="${escapeHtml(artist.nama)}" onerror="this.src='${escapeHtml(artist.defaultFoto || "img/CHIRA_LOGO-removebg-preview.png")}'" style="${isDeactivated ? 'filter: grayscale(70%); opacity: 0.85;' : ''}">
                        </div>
                        <div class="artist-profile-body">
                            <div class="artist-profile-info">
                                <h3>${escapeHtml(artist.nama)}</h3>
                                <div class="artist-role">${escapeHtml(artist.spesialisasi)}</div>
                                <p class="artist-description">${escapeHtml(artist.bio)}</p>

                                <div class="artist-mini-stats">
                                    <div class="mini-stat">
                                        <strong>${Number(artist.pengalamanTahun) || 5}+</strong>
                                        <span>Tahun</span>
                                    </div>
                                    <div class="mini-stat" title="${escapeHtml(clientTooltip)}">
                                        <strong>
                                            ${stats.totalKlienDilayani}+
                                            <i class="fa-solid fa-circle-check stat-verified-icon"></i>
                                        </strong>
                                        <span>${escapeHtml(artist.baseKlienLabel || "Klien")}</span>
                                        <div class="stat-verified-pill">
                                            <i class="fa-solid fa-check"></i> Terverifikasi
                                        </div>
                                    </div>
                                    <div class="mini-stat" title="${escapeHtml(ratingTooltip)}">
                                        <strong class="stat-rating-dynamic">
                                            ${stats.formattedRating}
                                            <i class="fa-solid fa-star stat-rating-star"></i>
                                        </strong>
                                        <span>Rating</span>
                                    </div>
                                </div>

                                ${portfolioSectionHTML}
                            </div>

                            ${actionButtonHTML}
                        </div>
                    `;

                    grid.appendChild(card);
                });

                applyArtistFilter(currentFilter);
            }

            document.addEventListener("DOMContentLoaded", function () {
                // 1. Render profil, statistik & 3 portofolio dinamis dari localStorage
                renderDynamicArtists();

                // 2. Filter Interaktif Artis
                const filterBtns = document.querySelectorAll(".filter-pill");
                filterBtns.forEach(btn => {
                    btn.addEventListener("click", function () {
                        filterBtns.forEach(b => b.classList.remove("active"));
                        this.classList.add("active");
                        applyArtistFilter(this.getAttribute("data-filter"));
                    });
                });

                // 3. Tutup Lightbox Portofolio
                const modal = document.getElementById("staffPortfolioModal");
                const closeBtn = document.getElementById("closeSpmBtn");
                if (closeBtn && modal) {
                    closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
                    modal.addEventListener("click", (e) => {
                        if (e.target === modal) modal.style.display = "none";
                    });
                }

                // 4. Sinkronisasi Real-Time antar Tab Browser (jika diedit dari admin-dashboard.html)
                window.addEventListener("storage", function (e) {
                    if (e.key === STAFF_PROFILES_KEY || e.key === BOOKINGS_KEY) {
                        renderDynamicArtists();
                    }
                });
            });
        })();