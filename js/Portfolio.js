document.addEventListener("DOMContentLoaded", function() {
            
            // --- 1. LOGIKA FILTER GALERI ---
            const filterButtons = document.querySelectorAll(".filter-btn");
            const portfolioItems = document.querySelectorAll(".portfolio-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");

                    const filterValue = button.getAttribute("data-filter");

                    portfolioItems.forEach(item => {
                        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                            item.style.display = "block";
                            item.style.animation = "zoomIn 0.4s ease forwards";
                        } else {
                            item.style.display = "none";
                        }
                    });
                });
            });

            // --- 2. LOGIKA BUKA MODAL BEFORE-AFTER ---
            const modal = document.getElementById("beforeAfterModal");
            const closeModal = document.getElementById("closeModal");
            const modalImgBefore = document.getElementById("modalImgBefore");
            const modalImgAfter = document.getElementById("modalImgAfter");
            const modalTitle = document.getElementById("modalTitle");
            const modalBeforeContainer = document.getElementById("modalBeforeContainer");
            const modalSlider = document.getElementById("modalSlider");
            const baContainer = document.querySelector(".ba-container");

            portfolioItems.forEach(item => {
                item.addEventListener("click", () => {
                    // Ambil data URL gambar dari atribut HTML
                    const beforeSrc = item.getAttribute("data-before");
                    const afterSrc = item.getAttribute("data-after");
                    const title = item.getAttribute("data-title");

                    // Set gambar ke dalam modal
                    modalImgBefore.src = beforeSrc;
                    modalImgAfter.src = afterSrc;
                    modalTitle.innerText = title;

                    // Tampilkan modal
                    modal.classList.add("show");

                    // Reset posisi slider ke tengah setiap kali dibuka
                    modalSlider.style.left = "50%";
                    modalBeforeContainer.style.width = "50%";
                });
            });

            // Tutup Modal saat tombol X diklik
            closeModal.addEventListener("click", () => {
                modal.classList.remove("show");
            });

            // Tutup Modal jika klik di luar area konten
            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.classList.remove("show");
                }
            });


            // --- 3. LOGIKA SLIDER BEFORE-AFTER DI DALAM MODAL ---
            let isDragging = false;

            const moveSlider = (clientX) => {
                const rect = baContainer.getBoundingClientRect(); // Gunakan batas container modal
                let position = ((clientX - rect.left) / rect.width) * 100;
                
                if (position < 0) position = 0;
                if (position > 100) position = 100;

                modalSlider.style.left = position + "%";
                modalBeforeContainer.style.width = position + "%";
            };

            // Mouse Events
            modalSlider.addEventListener("mousedown", (e) => { e.preventDefault(); isDragging = true; });
            window.addEventListener("mouseup", () => isDragging = false);
            window.addEventListener("mousemove", (e) => { if (isDragging) moveSlider(e.clientX); });

            // Touch Events (Mobile)
            modalSlider.addEventListener("touchstart", (e) => { e.preventDefault(); isDragging = true; });
            window.addEventListener("touchend", () => isDragging = false);
            window.addEventListener("touchmove", (e) => { if (isDragging) moveSlider(e.touches[0].clientX); });
        });