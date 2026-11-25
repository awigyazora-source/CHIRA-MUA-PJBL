document.getElementById("loginForm").addEventListener(
            "submit", function(event) {
                event.preventDefault();

                // Simpan status pendaftaran & login
                localStorage.setItem("chira_login_status", "true");
                localStorage.setItem("chira_user_name", "Registered User");
                window.location.href = "index.html";
            }
        );

        // Simulasi Registrasi/Login Cepat Akun Google
        const googleRegisterBtn = document.getElementById("googleRegisterBtn");
        if (googleRegisterBtn) {
            googleRegisterBtn.addEventListener("click", function() {
                localStorage.setItem("chira_login_status", "true");
                localStorage.setItem("chira_user_name", "Google Account (Demo)");
                window.location.href = "index.html";
            });
        }