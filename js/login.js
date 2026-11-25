document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah form reload halaman

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "awigya.zora@gmail.com" && password === "awigya123") {
                // 1. Simpan status login & profil awal user Awigya Zora ke localStorage sebelum pindah halaman
                localStorage.removeItem("chira_admin_session");
                localStorage.setItem("chira_login_status", "true");
                localStorage.setItem("chira_user_name", "Awigya Zora");

                let savedProfile = null;
                try {
                    savedProfile = JSON.parse(localStorage.getItem("chira_customer_profile") || "null");
                } catch (e) {}

                if (!savedProfile || savedProfile.email !== "awigya.zora@gmail.com") {
                    localStorage.setItem("chira_customer_profile", JSON.stringify({
                        name: "Awigya Zora",
                        email: "awigya.zora@gmail.com",
                        phone: (savedProfile && savedProfile.phone) || "",
                        address: (savedProfile && savedProfile.address) || "",
                        photo: ""
                    }));
                }

                // 2. Arahkan user ke halaman beranda
                window.location.replace("index.html");
            } else {
                alert("Email atau password tidak sesuai!");
                return;
            }
        });

        // 3. Simulasi Login Cepat Akun Google
        const googleLoginBtn = document.getElementById("googleLoginBtn");
        if (googleLoginBtn) {
            googleLoginBtn.addEventListener("click", function() {
                localStorage.removeItem("chira_admin_session");
                localStorage.setItem("chira_login_status", "true");
                localStorage.setItem("chira_user_name", "Google Account (Demo)");
                window.location.href = "index.html";
            });
        }