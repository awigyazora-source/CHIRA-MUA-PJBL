/**
 * ==========================================================================
 * CHIRA MAKE-UP - CUSTOMER PROFILE & NAVBAR DROPDOWN LOGIC
 * ==========================================================================
 */

(function () {
    // 1. HELPER PEMBUAT DATA URI SVG YANG 100% AMAN DARI BENTROK TANDA KUTIP
    function createSafeSvgDataUri(svgString) {
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString.trim());
    }

    // 2. AVATAR DEFAULT SILUET ELEGAN (PINK / CREAM CHIRA ATELIER)
    const DEFAULT_AVATAR_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'>` +
        `<defs>` +
        `<linearGradient id='chiraBg' x1='0%' y1='0%' x2='100%' y2='100%'>` +
        `<stop offset='0%' stop-color='#fde9e6'/>` +
        `<stop offset='100%' stop-color='#f4dada'/>` +
        `</linearGradient>` +
        `</defs>` +
        `<circle cx='40' cy='40' r='38' fill='url(#chiraBg)' stroke='#d89a9a' stroke-width='2'/>` +
        `<circle cx='40' cy='31' r='14' fill='#927979'/>` +
        `<path d='M16 68c0-13.255 10.745-24 24-24s24 10.745 24 24' fill='#927979'/>` +
        `</svg>`;

    const DEFAULT_AVATAR = createSafeSvgDataUri(DEFAULT_AVATAR_SVG);

    // 3. GENERATOR AVATAR BERINISIAL ELEGAN (FALLBACK OTOMATIS)
    function generateInitialsAvatar(name) {
        const cleanName = (name || "Customer").trim();
        const parts = cleanName.split(/\s+/).filter(Boolean);
        let initials = "C";
        if (parts.length >= 2) {
            initials = (parts[0][0] + parts[1][0]).toUpperCase();
        } else if (parts.length === 1 && parts[0].length > 0) {
            initials = parts[0].slice(0, 2).toUpperCase();
        }

        const initialsSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'>` +
            `<defs>` +
            `<linearGradient id='initBg' x1='0%' y1='0%' x2='100%' y2='100%'>` +
            `<stop offset='0%' stop-color='#fde9e6'/>` +
            `<stop offset='100%' stop-color='#f4dada'/>` +
            `</linearGradient>` +
            `</defs>` +
            `<circle cx='40' cy='40' r='38' fill='url(#initBg)' stroke='#d89a9a' stroke-width='2'/>` +
            `<text x='50%' y='53%' dominant-baseline='middle' text-anchor='middle' fill='#927979' font-family='Arial, Helvetica, sans-serif' font-weight='700' font-size='26' letter-spacing='0.5'>${initials}</text>` +
            `</svg>`;

        return createSafeSvgDataUri(initialsSvg);
    }

    // 4. GLOBAL ONERROR HANDLER UNTUK SEMUA TAG AVATAR
    window.handleChiraAvatarError = function (imgEl, name) {
        if (!imgEl) return;
        imgEl.onerror = null; // Mencegah infinite loop
        imgEl.src = generateInitialsAvatar(name || "Customer");
    };

    // 5. ESCAPING UNTUK MENCEGAH KEBOCORAN ATRIBUT HTML
    function escapeHtmlAttr(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function escapeJsParam(str) {
        if (!str) return "";
        return String(str).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    }

    let currentAvatarBase64 = null;

    /**
     * Sanitasi & Validasi URL / Data Foto dari localStorage
     */
    function sanitizePhoto(photo, name) {
        if (!photo || typeof photo !== "string") {
            return generateInitialsAvatar(name);
        }
        // Periksa apakah ada karakter kutip ganda atau unencoded svg yang menyebabkan tag img bocor
        if (photo.includes('"') || photo.includes('<svg') || photo.includes('xmlns=')) {
            return generateInitialsAvatar(name);
        }
        // Validasi format aman (data URI ter-encode atau URL file gambar valid)
        if (
            photo.startsWith("data:image/") ||
            photo.startsWith("http://") ||
            photo.startsWith("https://") ||
            photo.startsWith("img/")
        ) {
            return photo;
        }
        return generateInitialsAvatar(name);
    }

    /**
     * Ambil data profil customer dari localStorage dengan pemulihan otomatis
     */
    function getCustomerProfile() {
        let profile = null;
        try {
            const raw = localStorage.getItem("chira_customer_profile");
            if (raw) profile = JSON.parse(raw);
        } catch (e) {
            console.error("Gagal membaca chira_customer_profile", e);
        }

        const fallbackName = localStorage.getItem("chira_user_name") || "Customer Chira";

        if (!profile) {
            profile = {
                name: fallbackName,
                email: "customer@chiramua.com",
                phone: "",
                address: "",
                photo: generateInitialsAvatar(fallbackName)
            };
        } else {
            if (!profile.name) profile.name = fallbackName;
            if (!profile.email) profile.email = "customer@chiramua.com";
            
            // Perbaiki data foto jika sebelumnya tersimpan dalam kondisi korup / ada tanda kutip ganda
            const cleanPhoto = sanitizePhoto(profile.photo, profile.name);
            if (cleanPhoto !== profile.photo) {
                profile.photo = cleanPhoto;
                saveCustomerProfile(profile);
            }
        }

        return profile;
    }

    /**
     * Simpan data profil customer ke localStorage
     */
    function saveCustomerProfile(profile) {
        try {
            localStorage.setItem("chira_customer_profile", JSON.stringify(profile));
            if (profile.name) {
                localStorage.setItem("chira_user_name", profile.name);
            }
        } catch (e) {
            console.error("Gagal menyimpan chira_customer_profile", e);
        }
    }

    /**
     * Ambil Sesi Admin Aktif dari localStorage jika ada
     */
    function getAdminSession() {
        try {
            const raw = localStorage.getItem("chira_admin_session");
            if (raw) {
                const session = JSON.parse(raw);
                if (session && session.isAdmin) {
                    return session;
                }
            }
        } catch (e) {
            console.error("Gagal membaca chira_admin_session:", e);
        }
        return null;
    }

    /**
     * Render Avatar & Dropdown di Navbar
     */
    function renderNavbarProfile() {
        const navLoginItem = document.getElementById("nav-login-item");
        if (!navLoginItem) return;

        // 1. PRIORITAS 1: CEK APAKAH ADA SESI ADMIN AKTIF (isAdmin: true)
        const adminSession = getAdminSession();
        if (adminSession) {
            renderAdminNavbar(adminSession, navLoginItem);
            return;
        }

        // 2. PRIORITAS 2: CEK SESI CUSTOMER REGULER
        const isLoggedIn = localStorage.getItem("chira_login_status");
        if (isLoggedIn === "true") {
            renderCustomerNavbar(navLoginItem);
            return;
        }

        // 3. JIKA BELUM LOGIN SAMA SEKALI
        navLoginItem.className = "";
        navLoginItem.innerHTML = '<a href="login.html" class="nav-btn">Login</a>';
    }

    /**
     * Render Navbar Mode Admin dengan Badge Otoritas & Menu Cepat Kembali
     */
    function renderAdminNavbar(adminSession, navLoginItem) {
        const fullName = adminSession.namaArtist || "Admin MUA";
        const shortName = fullName.trim().split(" ")[0] || "Admin";
        const role = adminSession.role || "Lead MUA / Super Admin";
        const email = adminSession.email || "admin@chiramua.com";

        navLoginItem.className = "nav-user-item";
        navLoginItem.innerHTML = `
            <div class="user-profile-menu" id="userProfileMenu">
                <button class="user-profile-btn admin-mode" id="userProfileBtn" type="button" aria-expanded="false" title="Menu Otoritas Admin CHIRA">
                    <div class="admin-nav-shield">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <span class="nav-admin-title-badge">
                        <span class="admin-prefix">Admin:</span>
                        <span class="admin-artist-name">${escapeHtmlAttr(shortName)}</span>
                    </span>
                    <i class="fa-solid fa-chevron-down nav-user-arrow"></i>
                </button>
                <div class="user-dropdown-menu" id="userDropdownMenu">
                    <div class="dropdown-header admin-header">
                        <div class="admin-badge-indicator">
                            <i class="fa-solid fa-crown"></i>
                            <span>Otoritas Admin MUA</span>
                        </div>
                        <strong id="dropdownUserFullName">${escapeHtmlAttr(fullName)}</strong>
                        <span class="admin-role-badge-text">${escapeHtmlAttr(role)}</span>
                        <span class="admin-email-text">${escapeHtmlAttr(email)}</span>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a href="admin-dashboard.html" class="dropdown-item dropdown-admin-dashboard" id="navReturnDashboardBtn">
                        <i class="fa-solid fa-gauge-high"></i>
                        <span>Kembali ke Admin Dashboard</span>
                    </a>
                    <a href="booking.html" class="dropdown-item">
                        <i class="fa-solid fa-calendar-check"></i>
                        <span>Formulir Pemesanan</span>
                    </a>
                    <a href="pesanan-saya.html" class="dropdown-item">
                        <i class="fa-solid fa-receipt"></i>
                        <span>Pesanan Saya</span>
                    </a>
                    <a href="staffmua.html" class="dropdown-item">
                        <i class="fa-solid fa-users"></i>
                        <span>Lihat Profil Tim MUA</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <button type="button" class="dropdown-item dropdown-logout" id="navAdminLogoutBtn">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Logout Admin</span>
                    </button>
                </div>
            </div>
        `;

        // Toggle Dropdown
        const menu = document.getElementById("userProfileMenu");
        const btn = document.getElementById("userProfileBtn");
        if (btn && menu) {
            btn.addEventListener("click", function (e) {
                e.stopPropagation();
                menu.classList.toggle("active");
            });
        }

        // Tutup dropdown saat klik di luar
        document.addEventListener("click", function (e) {
            if (menu && !menu.contains(e.target)) {
                menu.classList.remove("active");
            }
        });

        // Tombol Logout Admin
        const logoutBtn = document.getElementById("navAdminLogoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function (e) {
                e.preventDefault();
                if (confirm("Apakah Anda yakin ingin logout dari sesi Admin Chira Make-Up?")) {
                    localStorage.removeItem("chira_admin_session");
                    localStorage.removeItem("chira_login_status");
                    window.location.href = "admin-login.html";
                }
            });
        }
    }

    /**
     * Render Navbar Mode Customer Reguler
     */
    function renderCustomerNavbar(navLoginItem) {
        const profile = getCustomerProfile();
        const fullName = profile.name || "Customer Chira";
        const firstName = fullName.trim().split(" ")[0] || "Customer";
        const safePhoto = profile.photo || generateInitialsAvatar(fullName);
        const safeAlt = escapeHtmlAttr(`Avatar ${fullName}`);
        const safeNameParam = escapeJsParam(fullName);

        navLoginItem.className = "nav-user-item";
        navLoginItem.innerHTML = `
            <div class="user-profile-menu" id="userProfileMenu">
                <button class="user-profile-btn" id="userProfileBtn" type="button" aria-expanded="false" title="Menu Akun Saya">
                    <img src="${safePhoto}" alt="${safeAlt}" class="nav-user-avatar" id="navUserAvatar" onerror="window.handleChiraAvatarError && window.handleChiraAvatarError(this, '${safeNameParam}')">
                    <span class="nav-user-name" id="navUserName">${escapeHtmlAttr(firstName)}</span>
                    <i class="fa-solid fa-chevron-down nav-user-arrow"></i>
                </button>
                <div class="user-dropdown-menu" id="userDropdownMenu">
                    <div class="dropdown-header">
                        <strong id="dropdownUserFullName">${escapeHtmlAttr(fullName)}</strong>
                        <span id="dropdownUserEmail">${escapeHtmlAttr(profile.email || "customer@chiramua.com")}</span>
                    </div>
                    <div class="dropdown-divider"></div>
                    <button type="button" class="dropdown-item" id="openProfileModalBtn">
                        <i class="fa-solid fa-user-pen"></i>
                        <span>Kelola Profil</span>
                    </button>
                    <a href="pesanan-saya.html" class="dropdown-item">
                        <i class="fa-solid fa-receipt"></i>
                        <span>Pesanan Saya</span>
                    </a>
                    <a href="booking.html" class="dropdown-item">
                        <i class="fa-solid fa-calendar-plus"></i>
                        <span>Buat Reservasi</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <button type="button" class="dropdown-item dropdown-logout" id="navLogoutBtn">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        `;

        // Toggle Dropdown
        const menu = document.getElementById("userProfileMenu");
        const btn = document.getElementById("userProfileBtn");
        if (btn && menu) {
            btn.addEventListener("click", function (e) {
                e.stopPropagation();
                menu.classList.toggle("active");
            });
        }

        // Tutup dropdown saat klik di luar
        document.addEventListener("click", function (e) {
            if (menu && !menu.contains(e.target)) {
                menu.classList.remove("active");
            }
        });

        // Tombol Logout
        const logoutBtn = document.getElementById("navLogoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function (e) {
                e.preventDefault();
                if (confirm("Apakah Anda yakin ingin logout dari akun?")) {
                    localStorage.removeItem("chira_login_status");
                    window.location.href = "login.html";
                }
            });
        }

        // Tombol Kelola Profil
        const openModalBtn = document.getElementById("openProfileModalBtn");
        if (openModalBtn) {
            openModalBtn.addEventListener("click", function (e) {
                e.preventDefault();
                if (menu) menu.classList.remove("active");
                openCustomerProfileModal();
            });
        }
    }

    /**
     * Pastikan Markup Modal Profil Ada di Halaman
     */
    function ensureProfileModalMarkup() {
        if (document.getElementById("customerProfileModal")) return;

        const profile = getCustomerProfile();
        const safePhoto = profile.photo || DEFAULT_AVATAR;

        const modalHTML = `
            <!-- MODAL KELOLA PROFIL CUSTOMER -->
            <div class="profile-modal-overlay" id="customerProfileModal" style="display: none;">
                <div class="profile-modal-card">
                    <div class="profile-modal-header">
                        <h3><i class="fa-solid fa-user-circle"></i> Kelola Profil Customer</h3>
                        <button type="button" class="profile-modal-close" id="closeProfileModalBtn" aria-label="Tutup Modal">&times;</button>
                    </div>
                    <div class="profile-modal-body">
                        <!-- FITUR GONTA-GANTI FOTO PROFIL -->
                        <div class="avatar-edit-wrap">
                            <div class="avatar-preview-box">
                                <img src="${safePhoto}" alt="Preview Foto Profil" id="profileModalAvatarPreview" onerror="window.handleChiraAvatarError && window.handleChiraAvatarError(this, 'Customer')">
                            </div>
                            <div class="avatar-edit-actions">
                                <label for="profilePhotoInput" class="btn-avatar-upload">
                                    <i class="fa-solid fa-camera"></i> Ganti Foto
                                </label>
                                <input type="file" id="profilePhotoInput" accept="image/*" style="display: none;">
                                <button type="button" class="btn-avatar-reset" id="resetAvatarBtn">
                                    <i class="fa-solid fa-rotate-left"></i> Reset Foto Default
                                </button>
                                <span class="avatar-note">Format: JPG, PNG, GIF. Maks. 2MB</span>
                            </div>
                        </div>

                        <!-- FORM EDIT DATA CUSTOMER -->
                        <form id="customerProfileForm">
                            <div class="profile-form-group">
                                <label for="profCustName">Nama Lengkap Pemesan:</label>
                                <input type="text" id="profCustName" class="profile-form-input" placeholder="Masukkan nama lengkap Anda..." required>
                            </div>
                            <div class="profile-form-group">
                                <label for="profCustEmail">Alamat Email:</label>
                                <input type="email" id="profCustEmail" class="profile-form-input" placeholder="contoh: nama@gmail.com" required>
                            </div>
                            <div class="profile-form-group">
                                <label for="profCustPhone">Nomor WhatsApp Aktif:</label>
                                <input type="tel" id="profCustPhone" class="profile-form-input" placeholder="contoh: 0889-8986-5380" required>
                            </div>
                            <div class="profile-form-group">
                                <label for="profCustAddress">Alamat Lengkap (Untuk Home Service / Lokasi Acara):</label>
                                <textarea id="profCustAddress" class="profile-form-input" rows="3" placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, Kota Malang..."></textarea>
                            </div>

                            <div class="profile-modal-footer">
                                <button type="button" class="btn-prof-cancel" id="cancelProfileBtn">Batal</button>
                                <button type="submit" class="btn-prof-save">
                                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- TOAST NOTIFIKASI SUKSES -->
            <div id="profileToast" class="profile-toast">
                <i class="fa-solid fa-circle-check"></i>
                <span id="profileToastMsg">Profil berhasil diperbarui!</span>
            </div>
        `;

        document.body.insertAdjacentHTML("beforeend", modalHTML);
        bindProfileModalEvents();
    }

    /**
     * Buka Modal Profil & Isi Data Saat Ini
     */
    function openCustomerProfileModal() {
        ensureProfileModalMarkup();
        const modal = document.getElementById("customerProfileModal");
        if (!modal) return;

        const profile = getCustomerProfile();

        document.getElementById("profCustName").value = profile.name || "";
        document.getElementById("profCustEmail").value = profile.email || "customer@chiramua.com";
        document.getElementById("profCustPhone").value = profile.phone || "";
        document.getElementById("profCustAddress").value = profile.address || "";

        currentAvatarBase64 = profile.photo || generateInitialsAvatar(profile.name);
        const preview = document.getElementById("profileModalAvatarPreview");
        if (preview) preview.src = currentAvatarBase64;

        modal.style.display = "flex";
    }

    /**
     * Tutup Modal Profil
     */
    function closeCustomerProfileModal() {
        const modal = document.getElementById("customerProfileModal");
        if (modal) modal.style.display = "none";
    }

    /**
     * Tampilkan Notifikasi Toast
     */
    function showToast(message) {
        const toast = document.getElementById("profileToast");
        const msg = document.getElementById("profileToastMsg");
        if (!toast) return;

        if (msg) msg.innerText = message || "Profil berhasil diperbarui!";
        toast.style.display = "flex";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3500);
    }

    /**
     * Event Listener untuk Modal Profil
     */
    function bindProfileModalEvents() {
        const modal = document.getElementById("customerProfileModal");
        const closeBtn = document.getElementById("closeProfileModalBtn");
        const cancelBtn = document.getElementById("cancelProfileBtn");
        const photoInput = document.getElementById("profilePhotoInput");
        const resetBtn = document.getElementById("resetAvatarBtn");
        const form = document.getElementById("customerProfileForm");

        if (closeBtn) closeBtn.addEventListener("click", closeCustomerProfileModal);
        if (cancelBtn) cancelBtn.addEventListener("click", closeCustomerProfileModal);

        // Klik di luar kartu modal untuk menutup
        if (modal) {
            modal.addEventListener("click", function (e) {
                if (e.target === modal) closeCustomerProfileModal();
            });
        }

        // Upload Foto Profil Menggunakan FileReader (Base64)
        if (photoInput) {
            photoInput.addEventListener("change", function (e) {
                const file = e.target.files[0];
                if (!file) return;

                if (!file.type.startsWith("image/")) {
                    alert("Mohon pilih file gambar yang valid (JPG, PNG, GIF, WebP)!");
                    return;
                }

                if (file.size > 2 * 1024 * 1024) {
                    alert("Ukuran gambar terlalu besar! Maksimal 2MB.");
                    return;
                }

                const reader = new FileReader();
                reader.onload = function (evt) {
                    currentAvatarBase64 = evt.target.result;
                    const preview = document.getElementById("profileModalAvatarPreview");
                    if (preview) preview.src = currentAvatarBase64;
                };
                reader.onerror = function () {
                    alert("Gagal membaca file gambar.");
                };
                reader.readAsDataURL(file);
            });
        }

        // Reset Foto Default ke Inisial / Siluet Elegan
        if (resetBtn) {
            resetBtn.addEventListener("click", function () {
                const nameVal = document.getElementById("profCustName").value || "Customer";
                currentAvatarBase64 = generateInitialsAvatar(nameVal);
                const preview = document.getElementById("profileModalAvatarPreview");
                if (preview) preview.src = currentAvatarBase64;
                if (photoInput) photoInput.value = "";
            });
        }

        // Simpan Perubahan Form
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const nameVal = document.getElementById("profCustName").value.trim();
                const updatedProfile = {
                    name: nameVal,
                    email: document.getElementById("profCustEmail").value.trim(),
                    phone: document.getElementById("profCustPhone").value.trim(),
                    address: document.getElementById("profCustAddress").value.trim(),
                    photo: currentAvatarBase64 || generateInitialsAvatar(nameVal)
                };

                // Simpan ke localStorage
                saveCustomerProfile(updatedProfile);

                // Perbarui Tampilan Avatar di Navbar Langsung Tanpa Reload
                const navAvatar = document.getElementById("navUserAvatar");
                const navName = document.getElementById("navUserName");
                const dropFullName = document.getElementById("dropdownUserFullName");
                const dropEmail = document.getElementById("dropdownUserEmail");

                if (navAvatar) {
                    navAvatar.src = updatedProfile.photo;
                    navAvatar.alt = escapeHtmlAttr(`Avatar ${updatedProfile.name}`);
                }
                if (navName) navName.innerText = updatedProfile.name.trim().split(" ")[0] || "Customer";
                if (dropFullName) dropFullName.innerText = updatedProfile.name;
                if (dropEmail) dropEmail.innerText = updatedProfile.email;

                // Bonus Auto-Fill: Sinkronkan ke form booking.html jika sedang dibuka
                autoFillBookingForm(updatedProfile);

                // Tutup Modal & Tampilkan Toast
                closeCustomerProfileModal();
                showToast("Profil berhasil diperbarui!");
            });
        }
    }

    /**
     * Bonus Integrasi: Auto-Fill Form di booking.html
     */
    function autoFillBookingForm(profile) {
        if (!profile) profile = getCustomerProfile();

        const custNameInput = document.getElementById("custName");
        const custPhoneInput = document.getElementById("custPhone");
        const custAddressInput = document.getElementById("custAddress");

        if (custNameInput && profile.name) {
            custNameInput.value = profile.name;
        }

        if (custPhoneInput && profile.phone) {
            custPhoneInput.value = profile.phone;
        }

        if (custAddressInput && profile.address) {
            custAddressInput.value = profile.address;
        }
    }

    // Inisialisasi Saat DOM Siap
    function init() {
        renderNavbarProfile();
        ensureProfileModalMarkup();
        autoFillBookingForm();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    // Ekspor fungsi ke window agar bisa diakses global jika diperlukan
    window.ChiraCustomerProfile = {
        getProfile: getCustomerProfile,
        saveProfile: saveCustomerProfile,
        openModal: openCustomerProfileModal,
        closeModal: closeCustomerProfileModal,
        autoFillBooking: autoFillBookingForm,
        renderNavbar: renderNavbarProfile,
        generateInitialsAvatar: generateInitialsAvatar
    };
})();
