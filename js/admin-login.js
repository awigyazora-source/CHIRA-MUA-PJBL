// 1. MASTER STUDIO PIN (6-Digit)
        const MASTER_STUDIO_PIN = "889900";

        // 2. WHITELIST AKUN RESMI SUPER ADMIN / OWNER & 6 STAFF MUA ARTIST
        const ADMIN_WHITELIST = [
            {
                email: "awigya@chiramua.com",
                googleEmail: "awigya.owner@gmail.com",
                nama: "Awigya Zora",
                inisial: "AZ",
                role: "Super Admin / Owner",
                personalPin: "998877"
            },
            {
                email: "nadine@chiramua.com",
                googleEmail: "nadine.mua@gmail.com",
                nama: "Nadine Queen Reina",
                inisial: "NQ",
                role: "Senior Bridal MUA",
                personalPin: "112233"
            },
            {
                email: "aurora@chiramua.com",
                googleEmail: "aurora.mua@gmail.com",
                nama: "Aurora Clarissa",
                inisial: "AC",
                role: "Staff MUA (Graduation & Party Look)",
                personalPin: "223344"
            },
            {
                email: "draco@chiramua.com",
                googleEmail: "draco.mua@gmail.com",
                nama: "Draco Sebastian",
                inisial: "DS",
                role: "Staff MUA (Fashion & Photoshoot)",
                personalPin: "334455"
            },
            {
                email: "lisa@chiramua.com",
                googleEmail: "lisa.mua@gmail.com",
                nama: "Lisa Anggraini",
                inisial: "LA",
                role: "Staff MUA (Engagement & Modern Hijab)",
                personalPin: "445566"
            },
            {
                email: "marco@chiramua.com",
                googleEmail: "marco.mua@gmail.com",
                nama: "Marco Pratama",
                inisial: "MP",
                role: "Staff MUA (Bridal & Airbrush Specialist)",
                personalPin: "556677"
            },
            {
                email: "thania@chiramua.com",
                googleEmail: "thania.mua@gmail.com",
                nama: "Thania Aurelia Putri",
                inisial: "TP",
                role: "Staff MUA (Editorial & High Glamour)",
                personalPin: "667788"
            }
        ];

        // Tampilkan info kredensial di console agar mudah diuji oleh penguji/guru
        console.group("🔑 [CHIRA MAKE-UP] DAFTAR KREDENSIAL RESMI ADMIN & MUA ARTIST");
        console.log("PIN Utama Studio:", MASTER_STUDIO_PIN);
        console.table(ADMIN_WHITELIST.map(a => ({
            "Nama Artist": a.nama,
            "Role Otoritas": a.role,
            "Email Resmi": a.email,
            "PIN Pribadi": a.personalPin
        })));
        console.groupEnd();

        // STATE KEAMANAN
        let currentAuthenticatedAdmin = null;
        let failedPinAttempts = 0;
        let lockoutTimer = null;
        let lockoutSeconds = 0;

        // DOM ELEMENTS
        const alertBox = document.getElementById("alertBox");
        const alertMsg = document.getElementById("alertMsg");
        const adminLoginForm = document.getElementById("adminLoginForm");
        const adminEmailInput = document.getElementById("adminEmail");
        const adminPasswordInput = document.getElementById("adminPassword");
        const submitLoginBtn = document.getElementById("submitLoginBtn");
        const googleAdminBtn = document.getElementById("googleAdminBtn");

        const googleSelectModal = document.getElementById("googleSelectModal");
        const googleAccountsList = document.getElementById("googleAccountsList");
        const closeGoogleModalBtn = document.getElementById("closeGoogleModalBtn");
        const testFakeAccountBtn = document.getElementById("testFakeAccountBtn");

        const pinVerifyModal = document.getElementById("pinVerifyModal");
        const pinForm = document.getElementById("pinForm");
        const masterPinInput = document.getElementById("masterPin");
        const artistPinInput = document.getElementById("artistPin");
        const authAvatar = document.getElementById("authAvatar");
        const authArtistName = document.getElementById("authArtistName");
        const authArtistRole = document.getElementById("authArtistRole");
        const personalPinHint = document.getElementById("personalPinHint");
        const attemptsText = document.getElementById("attemptsText");
        const cancelPinBtn = document.getElementById("cancelPinBtn");

        // FUNGSI TAMPILKAN ALERT
        function showAlert(msg, isSuccess = false) {
            alertMsg.innerText = msg;
            alertBox.className = "alert-box " + (isSuccess ? "alert-success" : "alert-danger");
            alertBox.style.display = "flex";
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function hideAlert() {
            alertBox.style.display = "none";
        }

        // CARI ADMIN DARI WHITELIST (Berdasarkan Email Resmi atau Google Email)
        function findAdminByEmail(rawEmail) {
            if (!rawEmail) return null;
            const cleaned = rawEmail.trim().toLowerCase();
            return ADMIN_WHITELIST.find(item => 
                item.email.toLowerCase() === cleaned || 
                item.googleEmail.toLowerCase() === cleaned
            );
        }

        // CEK STATUS AKTIF / NONAKTIF STAFF DARI chira_staff_profiles
        function checkStaffAccountDeactivated(admin) {
            if (!admin) return null;
            try {
                const raw = localStorage.getItem("chira_staff_profiles");
                if (raw) {
                    const profiles = JSON.parse(raw);
                    if (Array.isArray(profiles)) {
                        const emailLower = (admin.email || "").trim().toLowerCase();
                        const found = profiles.find(p => (p.email || "").trim().toLowerCase() === emailLower);
                        if (found && (found.isActive === false || found.status === "Nonaktif" || found.status === "Dipecat")) {
                            return {
                                isBlocked: true,
                                status: found.status || "Nonaktif",
                                reason: found.deactivationReason || "Evaluasi Internal Manajemen Atelier",
                                date: found.deactivationDate || "-"
                            };
                        }
                    }
                }
            } catch (e) {
                console.error("Gagal memeriksa status staff:", e);
            }
            return null;
        }

        // 3. SUBMIT FORM KREDENSIAL MANUAL (LANGKAH 1)
        adminLoginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            if (lockoutSeconds > 0) return;

            hideAlert();
            const emailValue = adminEmailInput.value;
            const admin = findAdminByEmail(emailValue);

            if (!admin) {
                // TAMPILKAN ALERT MERAH TEGAS SESUAI PERMINTAAN
                showAlert("Akses Ditolak: Akun Anda tidak terdaftar dalam otoritas Admin Chira Make-Up.");
                return;
            }

            const deact = checkStaffAccountDeactivated(admin);
            if (deact) {
                showAlert(`Akses Ditolak (${deact.status}): Akun Anda telah dinonaktifkan oleh Super Admin. Alasan: "${deact.reason}". Hubungi manajemen Atelier.`);
                return;
            }

            // Kredensial Langkah 1 Lolos -> Buka Modal PIN (Langkah 2)
            openPinModal(admin);
        });

        // 4. GOOGLE SIGN-IN RESMI (LANGKAH 1)
        googleAdminBtn.addEventListener("click", function() {
            if (lockoutSeconds > 0) return;
            hideAlert();
            renderGoogleAccounts();
            googleSelectModal.style.display = "flex";
        });

        closeGoogleModalBtn.addEventListener("click", function() {
            googleSelectModal.style.display = "none";
        });

        // RENDER 6 AKUN GOOGLE ADMIN DALAM MODAL
        function renderGoogleAccounts() {
            googleAccountsList.innerHTML = "";
            ADMIN_WHITELIST.forEach(admin => {
                const item = document.createElement("button");
                item.type = "button";
                item.className = "google-account-item";
                item.innerHTML = `
                    <div class="avatar">${admin.inisial}</div>
                    <div class="info">
                        <strong>${admin.nama}</strong>
                        <span>${admin.googleEmail} • <em>${admin.role}</em></span>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="color:#d89a9a; font-size:12px;"></i>
                `;
                item.addEventListener("click", function() {
                    googleSelectModal.style.display = "none";
                    const deact = checkStaffAccountDeactivated(admin);
                    if (deact) {
                        showAlert(`Akses Ditolak (${deact.status}): Akun Anda telah dinonaktifkan oleh Super Admin. Alasan: "${deact.reason}". Hubungi manajemen Atelier.`);
                        return;
                    }
                    openPinModal(admin);
                });
                googleAccountsList.appendChild(item);
            });
        }

        // SIMULASI AKUN LUAR (UNTUK MENGUJI "AKSES DITOLAK")
        testFakeAccountBtn.addEventListener("click", function() {
            googleSelectModal.style.display = "none";
            showAlert("Akses Ditolak: Akun Anda tidak terdaftar dalam otoritas Admin Chira Make-Up.");
        });

        // 5. BUKA MODAL TAHAP 2 (2x PIN KEAMANAN)
        function openPinModal(admin) {
            currentAuthenticatedAdmin = admin;
            authAvatar.innerText = admin.inisial;
            authArtistName.innerText = admin.nama;
            authArtistRole.innerText = admin.role;
            personalPinHint.innerText = `Demo: ${admin.personalPin}`;

            masterPinInput.value = "";
            artistPinInput.value = "";
            updateAttemptsUI();

            pinVerifyModal.style.display = "flex";
            setTimeout(() => masterPinInput.focus(), 200);
        }

        cancelPinBtn.addEventListener("click", function() {
            pinVerifyModal.style.display = "none";
            currentAuthenticatedAdmin = null;
        });

        // TOGGLE VISIBILITY PIN
        window.togglePinVisibility = function(inputId, icon) {
            const input = document.getElementById(inputId);
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        };

        // 6. VALIDASI 2x PIN KEAMANAN & ANTI BRUTE-FORCE
        pinForm.addEventListener("submit", function(e) {
            e.preventDefault();
            if (lockoutSeconds > 0) return;

            const enteredMasterPin = masterPinInput.value.trim();
            const enteredArtistPin = artistPinInput.value.trim();

            const isMasterValid = (enteredMasterPin === MASTER_STUDIO_PIN);
            const isArtistValid = (enteredArtistPin === currentAuthenticatedAdmin.personalPin);

            if (isMasterValid && isArtistValid) {
                // SEMUA VERIFIKASI BERHASIL!
                pinVerifyModal.style.display = "none";
                showAlert(`Verifikasi Berhasil! Selamat datang, ${currentAuthenticatedAdmin.nama}. Mengarahkan ke Dashboard...`, true);

                // SIMPAN DATA SESI ADMIN LENGKAP KE LOCALSTORAGE
                const adminSession = {
                    email: currentAuthenticatedAdmin.email,
                    namaArtist: currentAuthenticatedAdmin.nama,
                    role: currentAuthenticatedAdmin.role,
                    isAdmin: true,
                    loginAt: new Date().toISOString()
                };

                localStorage.setItem("chira_admin_session", JSON.stringify(adminSession));
                localStorage.setItem("chira_login_status", "true");
                localStorage.setItem("chira_user_name", currentAuthenticatedAdmin.nama);

                // REDIRECT KE admin-dashboard.html
                setTimeout(() => {
                    window.location.href = "admin-dashboard.html";
                }, 1200);

            } else {
                // PIN SALAH -> HITUNG ATTEMPTS
                failedPinAttempts++;
                const remaining = 3 - failedPinAttempts;

                if (failedPinAttempts >= 3) {
                    // PICU ANTI BRUTE-FORCE LOCKOUT 30 DETIK
                    pinVerifyModal.style.display = "none";
                    triggerLockout(30);
                } else {
                    let errMsg = "Kombinasi PIN tidak sesuai.";
                    if (!isMasterValid && !isArtistValid) errMsg = "PIN Studio dan PIN Pribadi keduanya salah.";
                    else if (!isMasterValid) errMsg = "PIN Utama Studio tidak valid.";
                    else if (!isArtistValid) errMsg = "PIN Pribadi Artist tidak sesuai.";

                    alert(`${errMsg}\nSisa percobaan: ${remaining} kali sebelum sistem dikunci.`);
                    updateAttemptsUI();
                    masterPinInput.value = "";
                    artistPinInput.value = "";
                    masterPinInput.focus();
                }
            }
        });

        function updateAttemptsUI() {
            const remaining = Math.max(0, 3 - failedPinAttempts);
            attemptsText.innerText = `Percobaan tersisa: ${remaining} kali`;
        }

        // 7. SISTEM LOCKOUT ANTI BRUTE-FORCE (30 DETIK DENGAN COUNTDOWN)
        function triggerLockout(duration) {
            lockoutSeconds = duration;
            failedPinAttempts = 0;

            submitLoginBtn.disabled = true;
            googleAdminBtn.disabled = true;
            adminEmailInput.disabled = true;
            adminPasswordInput.disabled = true;

            updateLockoutMessage();

            lockoutTimer = setInterval(() => {
                lockoutSeconds--;
                if (lockoutSeconds <= 0) {
                    clearInterval(lockoutTimer);
                    lockoutTimer = null;
                    submitLoginBtn.disabled = false;
                    googleAdminBtn.disabled = false;
                    adminEmailInput.disabled = false;
                    adminPasswordInput.disabled = false;
                    showAlert("Sistem telah dibuka kembali. Silakan coba masukkan kredensial dengan benar.", true);
                } else {
                    updateLockoutMessage();
                }
            }, 1000);
        }

        function updateLockoutMessage() {
            showAlert(`🚨 Akun dikunci sementara karena 3x salah memasukkan PIN keamanan. Silakan tunggu ${lockoutSeconds} detik sebelum mencoba kembali.`);
        }