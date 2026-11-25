document.addEventListener("DOMContentLoaded", function() {
            // --- SISTEM ETALASE & ARSIP ULASAN TERVERIFIKASI (localStorage: chira_reviews) ---
            const REVIEWS_KEY = "chira_reviews";

            const OFFICIAL_CHIRA_SERVICES = [
                "Makeup Wedding / Pre-Wedding",
                "Makeup Graduation",
                "Makeup Engagement",
                "Makeup Birthday",
                "Makeup Photoshoot",
                "Custom Makeup"
            ];

            function normalizeServiceName(serviceName) {
                if (!serviceName) return "Custom Makeup";
                const s = String(serviceName).trim().toLowerCase();
                if (s.includes("wedding") || s.includes("bridal") || s.includes("nikah") || s.includes("pengantin") || s.includes("pre-wedding") || s.includes("prewedding")) {
                    return "Makeup Wedding / Pre-Wedding";
                }
                if (s.includes("grad") || s.includes("wisuda")) {
                    return "Makeup Graduation";
                }
                if (s.includes("engage") || s.includes("lamaran") || s.includes("tunangan")) {
                    return "Makeup Engagement";
                }
                if (s.includes("birth") || s.includes("ulang tahun") || s.includes("party") || s.includes("pesta") || s.includes("gala")) {
                    return "Makeup Birthday";
                }
                if (s.includes("photo") || s.includes("shoot") || s.includes("foto") || s.includes("editorial") || s.includes("commercial")) {
                    return "Makeup Photoshoot";
                }
                if (s.includes("custom") || s.includes("khusus") || s.includes("hijab")) {
                    return "Custom Makeup";
                }
                const match = OFFICIAL_CHIRA_SERVICES.find(o => o.toLowerCase() === s);
                if (match) return match;
                return "Custom Makeup";
            }

            const DEFAULT_CHIRA_REVIEWS = [
                {
                    id: "REV-2026-001",
                    bookingCode: "CHR-20260214-0891",
                    custName: "Clarissa",
                    serviceName: "Makeup Wedding / Pre-Wedding",
                    staffName: "Nadine Queen Reina",
                    rating: 5,
                    comment: "Termasuk CHIRA MUA. Hasil Make Up nya Bagus. dan membuat Tamu Party TERPESONA!",
                    date: "2026-02-14",
                    verified: true
                },
                {
                    id: "REV-2026-002",
                    bookingCode: "CHR-20260210-4412",
                    custName: "Chika",
                    serviceName: "Makeup Graduation",
                    staffName: "Aurora Clarissa",
                    rating: 5,
                    comment: "CHIRA MUA Emang The Best, semuanya ga perlu ribet dan semua flownya lengkap. cuma asik all time...",
                    date: "2026-02-10",
                    verified: true
                },
                {
                    id: "REV-2026-003",
                    bookingCode: "CHR-20260205-1923",
                    custName: "Amelia",
                    serviceName: "Makeup Engagement",
                    staffName: "Lisa Anggraini",
                    rating: 5,
                    comment: "Riasan natural banget, tahan lama meskipun acara sampai malam. Sangat direkomendasikan untuk semua calon pengantin!",
                    date: "2026-02-05",
                    verified: true
                },
                {
                    id: "REV-2026-004",
                    bookingCode: "CHR-20260128-5524",
                    custName: "Felicia Tan",
                    serviceName: "Makeup Photoshoot",
                    staffName: "Draco Sebastian",
                    rating: 5,
                    comment: "Sesi photoshoot komersial berjalan mulus. Look makeup-nya on-point banget di depan kamera dan sangat tahan lama!",
                    date: "2026-01-28",
                    verified: true
                },
                {
                    id: "REV-2026-005",
                    bookingCode: "CHR-20260120-7762",
                    custName: "Stephanie W.",
                    serviceName: "Makeup Wedding / Pre-Wedding",
                    staffName: "Marco Pratama",
                    rating: 5,
                    comment: "Hasil riasan airbrush-nya sangat halus dan mulus. Berasa sangat istimewa di hari pernikahan impian saya.",
                    date: "2026-01-20",
                    verified: true
                },
                {
                    id: "REV-2026-006",
                    bookingCode: "CHR-20260115-3310",
                    custName: "Valerie Natasha",
                    serviceName: "Makeup Birthday",
                    staffName: "Thania Aurelia Putri",
                    rating: 5,
                    comment: "Makeup glamor untuk acara gala dinner sukses mencuri perhatian. Warnanya pas, elegan, dan tidak menor sama sekali.",
                    date: "2026-01-15",
                    verified: true
                },
                {
                    id: "REV-2026-007",
                    bookingCode: "CHR-20260108-9844",
                    custName: "Nabila Larasati",
                    serviceName: "Makeup Wedding / Pre-Wedding",
                    staffName: "Nadine Queen Reina",
                    rating: 5,
                    comment: "Sesi prewedding outdoor dari pagi sampai sore riasannya tetap fresh glowing. MUA-nya super ramah dan komunikatif!",
                    date: "2026-01-08",
                    verified: true
                },
                {
                    id: "REV-2026-008",
                    bookingCode: "CHR-20251228-2190",
                    custName: "Kezia Rahma",
                    serviceName: "Makeup Graduation",
                    staffName: "Aurora Clarissa",
                    rating: 5,
                    comment: "Booking paket rame-rame bareng teman wisuda puas banget! Pengerjaan on-time, teliti, dan hasil riasan tahan seharian.",
                    date: "2025-12-28",
                    verified: true
                },
                {
                    id: "REV-2026-009",
                    bookingCode: "CHR-20251218-1102",
                    custName: "Dinda Kirana",
                    serviceName: "Custom Makeup",
                    staffName: "Lisa Anggraini",
                    rating: 5,
                    comment: "Hijab styling dan riasan lamarannya sangat rapi dan elegan. Banyak tamu yang tanya MUA-nya siapa!",
                    date: "2025-12-18",
                    verified: true
                }
            ];

            function getChiraReviews() {
                try {
                    const raw = localStorage.getItem(REVIEWS_KEY);
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            let updated = false;
                            const normalized = parsed.map(r => {
                                const norm = normalizeServiceName(r.serviceName);
                                if (r.serviceName !== norm) {
                                    updated = true;
                                    return Object.assign({}, r, { serviceName: norm });
                                }
                                return r;
                            });
                            if (updated) {
                                localStorage.setItem(REVIEWS_KEY, JSON.stringify(normalized));
                            }
                            return normalized;
                        }
                    }
                } catch (e) {
                    console.error("Gagal membaca chira_reviews:", e);
                }
                try {
                    localStorage.setItem(REVIEWS_KEY, JSON.stringify(DEFAULT_CHIRA_REVIEWS));
                } catch (e) {}
                return [...DEFAULT_CHIRA_REVIEWS];
            }

            function escapeHtmlReview(str) {
                if (!str) return "";
                return String(str)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }

            function renderAggregateSummary(reviews) {
                const summaryEl = document.getElementById("testiAggregateSummary");
                const countBtnEl = document.getElementById("totalReviewsCountBtn");
                if (countBtnEl) countBtnEl.innerText = reviews.length;

                if (!summaryEl) return;
                const total = reviews.length;
                const avgScore = total > 0 ? (reviews.reduce((acc, r) => acc + Number(r.rating || 5), 0) / total).toFixed(1) : "5.0";
                const roundStars = Math.round(Number(avgScore));
                const starsHtml = "★".repeat(roundStars) + "☆".repeat(5 - roundStars);

                summaryEl.innerHTML = `
                    <div class="testi-agg-score-box">
                        <div class="testi-agg-score">${avgScore}</div>
                        <div class="testi-agg-stars-col">
                            <div class="testi-agg-stars">${starsHtml}</div>
                            <div class="testi-agg-out-of">Rata-rata dari ${total} Ulasan Resmi</div>
                        </div>
                    </div>
                    <div class="testi-agg-divider"></div>
                    <div class="testi-agg-count-box">
                        <div class="testi-agg-total">${total} Ulasan Pelanggan Terverifikasi</div>
                        <div class="testi-agg-sub">
                            <i class="fa-solid fa-circle-check"></i> 100% Klien Riil Terdaftar Sistem CHIRA MUA
                        </div>
                    </div>
                `;
            }

            let carouselCurrentPage = 0;
            let carouselCardItems = [];
            let carouselUpdateSlideFn = null;

            function renderCarouselReviews(reviews) {
                const track = document.getElementById("testiTrack");
                if (!track) return;

                // Batasi render maksimal 6-9 ulasan terbaru dengan rating 4-5★
                const eligible = reviews
                    .filter(r => Number(r.rating || 5) >= 4)
                    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
                    .slice(0, 9);

                track.innerHTML = eligible.map(r => {
                    const stars = Math.round(Number(r.rating || 5));
                    const starsStr = "★".repeat(stars) + "☆".repeat(5 - stars);
                    const initial = (r.custName || "C").trim().charAt(0).toUpperCase();
                    return `
                        <div class="testi-card-item">
                            <div class="testi-card">
                                <div class="testi-card-top-row">
                                    <div class="testi-stars">${starsStr}</div>
                                    <span class="testi-verified-pill" title="Klien Terverifikasi Resmi">
                                        <i class="fa-solid fa-circle-check"></i> Verified Client
                                    </span>
                                </div>
                                <p class="testi-text">"${escapeHtmlReview(r.comment)}"</p>
                                <div class="testi-user">
                                    <div class="testi-avatar">${escapeHtmlReview(initial)}</div>
                                    <div class="testi-info">
                                        <h5>${escapeHtmlReview(r.custName)}</h5>
                                        <p>${escapeHtmlReview(r.serviceName)}</p>
                                    </div>
                                </div>
                                <div class="testi-handled">
                                    <a href="staffmua.html#artists-team" class="testi-artist-pill" title="Lihat profil MUA Artist">
                                        <i class="fa-solid fa-paintbrush"></i> MUA: <strong>${escapeHtmlReview(r.staffName)}</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                }).join("");

                initCarouselBehavior();
            }

            function initCarouselBehavior() {
                const track = document.getElementById("testiTrack");
                const prevBtn = document.getElementById("testiPrevBtn");
                const nextBtn = document.getElementById("testiNextBtn");
                const dotsContainer = document.getElementById("testiDots");
                carouselCardItems = track ? track.querySelectorAll(".testi-card-item") : [];

                if (!track || !prevBtn || !nextBtn || !dotsContainer || carouselCardItems.length === 0) return;

                carouselCurrentPage = 0;

                function getItemsPerView() {
                    return window.innerWidth > 768 ? 3 : 1;
                }

                function getMaxPages() {
                    return Math.max(1, Math.ceil(carouselCardItems.length / getItemsPerView()));
                }

                function renderDots() {
                    const maxPages = getMaxPages();
                    dotsContainer.innerHTML = "";
                    for (let i = 0; i < maxPages; i++) {
                        const dot = document.createElement("button");
                        dot.className = "testi-dot" + (i === carouselCurrentPage ? " active" : "");
                        dot.setAttribute("aria-label", "Menuju Halaman Testimoni " + (i + 1));
                        dot.addEventListener("click", () => {
                            carouselCurrentPage = i;
                            updateSlide();
                        });
                        dotsContainer.appendChild(dot);
                    }
                }

                function updateSlide() {
                    const maxPages = getMaxPages();
                    if (carouselCurrentPage >= maxPages) carouselCurrentPage = 0;
                    if (carouselCurrentPage < 0) carouselCurrentPage = maxPages - 1;

                    track.style.transform = "translateX(-" + (carouselCurrentPage * 100) + "%)";

                    const dots = dotsContainer.querySelectorAll(".testi-dot");
                    dots.forEach((dot, idx) => {
                        dot.classList.toggle("active", idx === carouselCurrentPage);
                    });
                }

                carouselUpdateSlideFn = updateSlide;

                nextBtn.onclick = () => {
                    carouselCurrentPage++;
                    if (carouselCurrentPage >= getMaxPages()) carouselCurrentPage = 0;
                    updateSlide();
                };

                prevBtn.onclick = () => {
                    carouselCurrentPage--;
                    if (carouselCurrentPage < 0) carouselCurrentPage = getMaxPages() - 1;
                    updateSlide();
                };

                // Touch Swipe
                let startX = 0;
                let endX = 0;
                track.ontouchstart = (e) => {
                    startX = e.touches[0].clientX;
                };
                track.ontouchend = (e) => {
                    endX = e.changedTouches[0].clientX;
                    if (startX - endX > 40) {
                        nextBtn.click();
                    } else if (endX - startX > 40) {
                        prevBtn.click();
                    }
                };

                renderDots();
                updateSlide();
            }

            // --- LOGIKA MODAL ARSIP SEMUA ULASAN (FILTER & PAGINATION 6 ITEM/PAGE) ---
            let archiveReviews = [];
            let archiveCurrentPage = 1;
            const ARCHIVE_PER_PAGE = 6;

            function populateServiceFilterOptions() {
                const sel = document.getElementById("filterServiceType");
                if (!sel) return;
                const currentVal = sel.value || "all";
                sel.innerHTML = '<option value="all">Semua Layanan</option>' +
                    OFFICIAL_CHIRA_SERVICES.map(s => `<option value="${escapeHtmlReview(s)}">${escapeHtmlReview(s)}</option>`).join("");
                sel.value = currentVal;
            }

            function getFilteredArchiveReviews() {
                const starVal = (document.getElementById("filterRatingStars")?.value || "all");
                const staffVal = (document.getElementById("filterStaffMUA")?.value || "all");
                const servVal = (document.getElementById("filterServiceType")?.value || "all");
                const searchVal = (document.getElementById("searchReviewInput")?.value || "").toLowerCase().trim();

                return archiveReviews.filter(r => {
                    const rStar = Number(r.rating || 5);
                    if (starVal === "5" && rStar !== 5) return false;
                    if (starVal === "4" && rStar !== 4) return false;
                    if (starVal === "3" && rStar !== 3) return false;
                    if (starVal === "1-2" && (rStar > 2)) return false;

                    if (staffVal !== "all" && (r.staffName || "").trim() !== staffVal) return false;
                    if (servVal !== "all" && normalizeServiceName(r.serviceName) !== servVal) return false;

                    if (searchVal) {
                        const matchCust = (r.custName || "").toLowerCase().includes(searchVal);
                        const matchComm = (r.comment || "").toLowerCase().includes(searchVal);
                        const matchServ = (r.serviceName || "").toLowerCase().includes(searchVal);
                        const matchMUA = (r.staffName || "").toLowerCase().includes(searchVal);
                        if (!matchCust && !matchComm && !matchServ && !matchMUA) return false;
                    }

                    return true;
                });
            }

            function renderArchivePage() {
                const grid = document.getElementById("armReviewsGrid");
                const pagination = document.getElementById("armPagination");
                const resultCount = document.getElementById("armResultCount");
                if (!grid || !pagination) return;

                const filtered = getFilteredArchiveReviews();
                const total = filtered.length;
                const totalPages = Math.max(1, Math.ceil(total / ARCHIVE_PER_PAGE));

                if (archiveCurrentPage > totalPages) archiveCurrentPage = totalPages;
                if (archiveCurrentPage < 1) archiveCurrentPage = 1;

                if (resultCount) {
                    resultCount.innerText = `Menampilkan ${total} ulasan (Halaman ${archiveCurrentPage} dari ${totalPages})`;
                }

                if (total === 0) {
                    grid.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: #8c7373;">
                            <i class="fa-regular fa-face-meh" style="font-size: 38px; color: #d89a9a; margin-bottom: 12px; display: block;"></i>
                            <strong style="font-size: 15px; color: #332222;">Tidak Ada Ulasan Ditemukan</strong>
                            <p style="font-size: 12.5px; margin-top: 4px;">Coba ubah filter rating, staff MUA, atau kata kunci pencarian Anda.</p>
                        </div>
                    `;
                    pagination.innerHTML = "";
                    return;
                }

                const startIdx = (archiveCurrentPage - 1) * ARCHIVE_PER_PAGE;
                const pageItems = filtered.slice(startIdx, startIdx + ARCHIVE_PER_PAGE);

                grid.innerHTML = pageItems.map(r => {
                    const stars = Math.round(Number(r.rating || 5));
                    const starsStr = "★".repeat(stars) + "☆".repeat(5 - stars);
                    const initial = (r.custName || "C").trim().charAt(0).toUpperCase();
                    const dateFormatted = r.date ? new Date(r.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) : "-";
                    return `
                        <div class="arm-review-card">
                            <div>
                                <div class="arm-rc-top">
                                    <div class="arm-rc-stars">${starsStr}</div>
                                    <span class="arm-rc-date"><i class="fa-regular fa-calendar"></i> ${dateFormatted}</span>
                                </div>
                                <div class="arm-rc-comment">"${escapeHtmlReview(r.comment)}"</div>
                            </div>
                            <div class="arm-rc-user">
                                <div class="arm-rc-avatar">${escapeHtmlReview(initial)}</div>
                                <div class="arm-rc-meta">
                                    <div class="arm-rc-name">
                                        ${escapeHtmlReview(r.custName)}
                                        <i class="fa-solid fa-circle-check badge-mini-v" title="Klien Terverifikasi"></i>
                                    </div>
                                    <div class="arm-rc-service" title="${escapeHtmlReview(r.serviceName)}">${escapeHtmlReview(r.serviceName)}</div>
                                    <div class="arm-rc-mua"><i class="fa-solid fa-wand-magic-sparkles"></i> MUA: ${escapeHtmlReview(r.staffName)}</div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join("");

                // Render Pagination Buttons
                let pagHTML = "";
                // Prev Btn
                pagHTML += `<button type="button" class="arm-page-btn" ${archiveCurrentPage <= 1 ? "disabled" : ""} id="armPrevBtn" aria-label="Halaman Sebelumnya"><i class="fa-solid fa-chevron-left"></i></button>`;

                for (let p = 1; p <= totalPages; p++) {
                    pagHTML += `<button type="button" class="arm-page-btn ${p === archiveCurrentPage ? "active" : ""}" data-page="${p}">${p}</button>`;
                }

                // Next Btn
                pagHTML += `<button type="button" class="arm-page-btn" ${archiveCurrentPage >= totalPages ? "disabled" : ""} id="armNextBtn" aria-label="Halaman Berikutnya"><i class="fa-solid fa-chevron-right"></i></button>`;

                pagination.innerHTML = pagHTML;

                // Event Listeners for pagination
                const pBtns = pagination.querySelectorAll(".arm-page-btn[data-page]");
                pBtns.forEach(btn => {
                    btn.addEventListener("click", () => {
                        archiveCurrentPage = parseInt(btn.getAttribute("data-page"), 10);
                        renderArchivePage();
                    });
                });

                const prevPBtn = document.getElementById("armPrevBtn");
                if (prevPBtn) {
                    prevPBtn.addEventListener("click", () => {
                        if (archiveCurrentPage > 1) {
                            archiveCurrentPage--;
                            renderArchivePage();
                        }
                    });
                }

                const nextPBtn = document.getElementById("armNextBtn");
                if (nextPBtn) {
                    nextPBtn.addEventListener("click", () => {
                        if (archiveCurrentPage < totalPages) {
                            archiveCurrentPage++;
                            renderArchivePage();
                        }
                    });
                }
            }

            function setupModalArchiveEvents() {
                const modal = document.getElementById("allReviewsModal");
                const openBtn = document.getElementById("btnOpenAllReviewsModal");
                const closeBtn = document.getElementById("btnCloseAllReviewsModal");

                if (openBtn && modal) {
                    openBtn.addEventListener("click", () => {
                        archiveReviews = getChiraReviews();
                        populateServiceFilterOptions(archiveReviews);
                        archiveCurrentPage = 1;
                        renderArchivePage();
                        modal.classList.add("active");
                        document.body.style.overflow = "hidden";
                    });
                }

                function closeModal() {
                    if (modal) {
                        modal.classList.remove("active");
                        document.body.style.overflow = "";
                    }
                }

                if (closeBtn) closeBtn.addEventListener("click", closeModal);

                if (modal) {
                    modal.addEventListener("click", (e) => {
                        if (e.target === modal) closeModal();
                    });
                }

                window.addEventListener("keydown", (e) => {
                    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
                        closeModal();
                    }
                });

                const starSelect = document.getElementById("filterRatingStars");
                const staffSelect = document.getElementById("filterStaffMUA");
                const servSelect = document.getElementById("filterServiceType");
                const searchInput = document.getElementById("searchReviewInput");

                [starSelect, staffSelect, servSelect].forEach(el => {
                    if (el) {
                        el.addEventListener("change", () => {
                            archiveCurrentPage = 1;
                            renderArchivePage();
                        });
                    }
                });

                if (searchInput) {
                    let searchTimer;
                    searchInput.addEventListener("input", () => {
                        clearTimeout(searchTimer);
                        searchTimer = setTimeout(() => {
                            archiveCurrentPage = 1;
                            renderArchivePage();
                        }, 250);
                    });
                }
            }

            function loadAndRenderAllReviews() {
                const reviews = getChiraReviews();
                archiveReviews = reviews;
                renderAggregateSummary(reviews);
                renderCarouselReviews(reviews);
            }

            // --- SINKRONISASI OTOMATIS PROFIL & PORTOFOLIO NADINE DARI chira_staff_profiles ---
            function syncNadineProfile() {
                try {
                    const raw = localStorage.getItem("chira_staff_profiles");
                    if (!raw) return;
                    const profiles = JSON.parse(raw);
                    if (!Array.isArray(profiles)) return;
                    const nadine = profiles.find(p => p.id === "nadine" || (p.nama && p.nama.toLowerCase().includes("nadine")));
                    if (!nadine) return;

                    // Foto Profil
                    const nadineImg = document.querySelector("#artist .artist-image img");
                    if (nadineImg && nadine.fotoProfil) {
                        nadineImg.src = nadine.fotoProfil;
                    }

                    // Bio
                    const nadineBio = document.querySelector("#artist .artist-bio");
                    if (nadineBio && nadine.bio) {
                        nadineBio.textContent = nadine.bio;
                    }

                    // Spesialisasi
                    const nadineTitle = document.querySelector("#artist .artist-title");
                    if (nadineTitle && nadine.spesialisasi) {
                        nadineTitle.textContent = nadine.spesialisasi;
                    }

                    // Statistik jika tersedia
                    const statItems = document.querySelectorAll("#artist .artist-stats .stat-item");
                    if (statItems && statItems.length >= 3) {
                        if (nadine.pengalamanTahun) {
                            const h4 = statItems[0].querySelector("h4");
                            if (h4) h4.textContent = nadine.pengalamanTahun + "+";
                        }
                        if (nadine.baseKlien) {
                            const h4 = statItems[1].querySelector("h4");
                            if (h4) h4.textContent = nadine.baseKlien + "+";
                            const p = statItems[1].querySelector("p");
                            if (p && nadine.baseKlienLabel) p.textContent = nadine.baseKlienLabel;
                        }
                        if (nadine.baseRating) {
                            const h4 = statItems[2].querySelector("h4");
                            if (h4) h4.textContent = nadine.baseRating + "%";
                        }
                    }

                    // 3 Portofolio Terbaik
                    if (Array.isArray(nadine.portofolioTerbaik) && nadine.portofolioTerbaik.length > 0) {
                        const grid = document.getElementById("nadinePortfolioGrid");
                        if (grid) {
                            grid.innerHTML = nadine.portofolioTerbaik.slice(0, 3).map((item, idx) => {
                                const imgUrl = item.gambar || `img/Portfolio-wedding${idx + 1}-after.png`;
                                const title = item.judul || `Portofolio ${idx + 1}`;
                                return `
                                    <div class="portfolio-thumb-card" title="${title}">
                                        <img src="${imgUrl}" alt="${title}">
                                        <span class="thumb-caption">${title}</span>
                                    </div>
                                `;
                            }).join("");
                        }
                    }
                } catch (e) {
                    console.error("Gagal sinkronisasi profil Nadine di index.html:", e);
                }
            }

            // Jalankan inisialisasi etalase ulasan & profil artist
            loadAndRenderAllReviews();
            setupModalArchiveEvents();
            syncNadineProfile();

            // Dengarkan perubahan localStorage dari tab lain (misal admin-dashboard.html atau pesanan-saya.html)
            window.addEventListener("storage", (e) => {
                if (e.key === REVIEWS_KEY || !e.key) {
                    loadAndRenderAllReviews();
                }
                if (e.key === "chira_staff_profiles" || !e.key) {
                    syncNadineProfile();
                }
            });

            // Handle window resize untuk carousel responsive
            let resizeTimer;
            window.addEventListener("resize", () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    if (carouselUpdateSlideFn) carouselUpdateSlideFn();
                }, 100);
            });
        });