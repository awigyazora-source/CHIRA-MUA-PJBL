// ==========================================================================
        // 1. DATA MASTER PROFIL 6 STAFF MUA (chira_staff_profiles di localStorage)
        // ==========================================================================
        const STAFF_PROFILES_KEY = "chira_staff_profiles";

        const DEFAULT_STAFF_PROFILES = [
            {
                id: "nadine",
                nama: "Nadine Queen Reina",
                email: "nadine@chiramua.com",
                role: "Senior Bridal MUA",
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

        let staffProfiles = [];

        function cloneDefaultStaffProfiles() {
            return JSON.parse(JSON.stringify(DEFAULT_STAFF_PROFILES));
        }

        function loadStaffProfiles() {
            try {
                const raw = localStorage.getItem(STAFF_PROFILES_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        // Pastikan seluruh field wajib lengkap terhadap skema default
                        staffProfiles = DEFAULT_STAFF_PROFILES.map(def => {
                            const found = parsed.find(p => p.id === def.id || p.email === def.email);
                            if (!found) return JSON.parse(JSON.stringify(def));
                            // Migrasi role Nadine dari Super Admin ke Senior Bridal MUA
                            const cleanRole = (found.role === "Lead MUA / Super Admin" || found.id === "nadine")
                                ? "Senior Bridal MUA"
                                : (found.role || def.role);
                            return {
                                ...JSON.parse(JSON.stringify(def)),
                                isActive: found.isActive !== false,
                                ...found,
                                role: cleanRole,
                                portofolioTerbaik: Array.isArray(found.portofolioTerbaik)
                                    ? found.portofolioTerbaik.slice(0, 3)
                                    : JSON.parse(JSON.stringify(def.portofolioTerbaik))
                            };
                        });
                        return;
                    }
                }
            } catch (e) {
                console.error("Gagal memuat chira_staff_profiles:", e);
            }
            staffProfiles = cloneDefaultStaffProfiles();
            saveStaffProfiles();
        }

        function saveStaffProfiles() {
            try {
                localStorage.setItem(STAFF_PROFILES_KEY, JSON.stringify(staffProfiles));
                return true;
            } catch (e) {
                console.error("Gagal menyimpan chira_staff_profiles:", e);
                showToast("Gagal menyimpan: Ukuran gambar terlalu besar untuk memori browser!");
                return false;
            }
        }

        function calculateArtistPerformance(artist) {
            const artistNameLower = (artist.nama || "").trim().toLowerCase();
            const artistFirstLower = artistNameLower.split(" ")[0];
            const relatedOrders = bookingsData.filter(b => {
                const bStaff = (b.staffName || "").trim().toLowerCase();
                return bStaff === artistNameLower || (artistFirstLower && bStaff.startsWith(artistFirstLower + " "));
            });

            const completedOrders = relatedOrders.filter(b => b.status === "Completed");
            const cancelledOrders = relatedOrders.filter(b => b.status === "Cancelled");

            const completedPax = completedOrders.reduce((sum, b) => sum + Math.max(1, parseInt(b.paxCount, 10) || 1), 0);
            const totalClients = (Number(artist.baseKlien) || 0) + completedPax;

            const baseRating = Number(artist.baseRating) || 98;
            const compCount = completedOrders.length;
            const cancCount = cancelledOrders.length;
            let dynamicRating = baseRating;

            if (compCount > 0 || cancCount > 0) {
                const baseWeight = 10;
                dynamicRating = ((baseRating * baseWeight) + (compCount * 100) + (cancCount * 0)) / (baseWeight + compCount + cancCount);
                dynamicRating = Math.max(50, Math.min(100, dynamicRating));
            }

            const ratingText = Number.isInteger(Number(dynamicRating.toFixed(1)))
                ? `${Math.round(dynamicRating)}%`
                : `${dynamicRating.toFixed(1)}%`;

            return {
                totalOrders: relatedOrders.length,
                activeConfirmed: relatedOrders.filter(b => b.status === "Confirmed").length,
                completedCount: compCount,
                cancelledCount: cancCount,
                completedPax,
                totalClients,
                ratingText
            };
        }

        // 4 DATA PESANAN DUMMY REALISTIS
        const INITIAL_DEMO_BOOKINGS = [
            {
                bookingCode: "CHR-20261215-1892",
                custName: "Clarissa Putri",
                custPhone: "088989865380",
                serviceKey: "wedding",
                serviceName: "Makeup Wedding / Pre-Wedding",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-12-15",
                startTime: "08:00",
                endTime: "10:30",
                totalDuration: 150,
                staffName: "Nadine Queen Reina",
                transportZone: "zona2",
                transportZoneLabel: "Zona 2 — Kota Malang & Batu",
                transportFee: 50000,
                locationType: "Home Service Kota Malang & Batu",
                address: "Jl. Ijen No. 45, Oro-oro Dowo, Kec. Klojen, Kota Malang",
                gmapsLink: "https://maps.google.com/?q=-7.971234,112.628901",
                gpsCoordinates: { lat: -7.971234, lng: 112.628901, accuracy: 12 },
                custNotes: "Kulit sensitif sedikit kemerahan di pipi. Request riasan glowing natural tahan lama untuk prosesi akad.",
                totalPrice: 1550000,
                dpAmount: 775000,
                paidAmount: 775000,
                remainingAmount: 775000,
                paymentType: "DP 50%",
                status: "Confirmed",
                timestamp: new Date(Date.now() - 3600000 * 24).toISOString()
            },
            {
                bookingCode: "CHR-20261128-4412",
                custName: "Amelia Zahra & Rekan",
                custPhone: "085678901234",
                serviceKey: "graduation",
                serviceName: "Makeup Graduation",
                orderType: "bundle",
                paxCount: 3,
                selectedDate: "2026-11-28",
                startTime: "06:00",
                endTime: "09:00",
                totalDuration: 180,
                staffName: "Aurora Clarissa",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang",
                gmapsLink: "https://maps.google.com/?q=Kota+Malang,+Jawa+Timur",
                custNotes: "Wisuda rombongan 3 orang. Request warna lipstik nude rose dan perataan tone hijab.",
                totalPrice: 1350000,
                dpAmount: 675000,
                paidAmount: 675000,
                remainingAmount: 675000,
                paymentType: "DP 50%",
                status: "DP 50% Paid (Slot Locked)",
                timestamp: new Date(Date.now() - 3600000 * 12).toISOString()
            },
            {
                bookingCode: "CHR-20261205-8831",
                custName: "Chika Jessica",
                custPhone: "087812345678",
                serviceKey: "engagement",
                serviceName: "Makeup Engagement",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-12-05",
                startTime: "13:00",
                endTime: "14:30",
                totalDuration: 90,
                staffName: "Lisa Anggraini",
                transportZone: "zona2",
                transportZoneLabel: "Zona 2 — Kota Malang & Batu",
                transportFee: 50000,
                locationType: "Home Service Kota Malang & Batu",
                address: "Hotel Tugu Malang, Ruang Majapahit Lt. 2, Jl. Tugu No. 3, Klojen, Kota Malang",
                gmapsLink: "https://maps.google.com/?q=Hotel+Tugu+Malang",
                gpsCoordinates: { lat: -7.977234, lng: 112.633901, accuracy: 8 },
                custNotes: "Acara tunangan modern hijab. Mohon dibantu pemasangan softlens sebelum riasan mata.",
                totalPrice: 800000,
                dpAmount: 400000,
                paidAmount: 400000,
                remainingAmount: 400000,
                paymentType: "DP 50%",
                status: "Confirmed",
                timestamp: new Date(Date.now() - 3600000 * 6).toISOString()
            },
            {
                bookingCode: "CHR-20261220-7719",
                custName: "Valerie Anastasya",
                custPhone: "081198765432",
                serviceKey: "wedding",
                serviceName: "Makeup Wedding / Pre-Wedding",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-12-20",
                startTime: "09:00",
                endTime: "11:30",
                totalDuration: 150,
                staffName: "Thania Aurelia Putri",
                transportZone: "zona4",
                transportZoneLabel: "Zona 4 — Worldwide Destination",
                transportFee: 0,
                isDestinationService: true,
                locationType: "Luar Pulau / Luar Negeri (Worldwide Destination)",
                address: "The Mulia Resort & Villas, Nusa Dua, Bali",
                gmapsLink: "https://maps.google.com/?q=The+Mulia+Nusa+Dua+Bali",
                gpsCoordinates: { lat: -8.8021, lng: 115.2212, accuracy: 15 },
                custNotes: "Destination wedding Bali. Tiket PP penerbangan Garuda & akomodasi resort suite sudah disiapkan untuk tim MUA.",
                totalPrice: 1500000,
                dpAmount: 750000,
                paidAmount: 750000,
                remainingAmount: 750000,
                paymentType: "DP 50%",
                status: "DP 50% Paid (Slot Locked)",
                timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
            },
            {
                bookingCode: "CHR-20260714-1022",
                custName: "Dian Sastrowardoyo",
                custPhone: "081298765011",
                serviceKey: "wedding",
                serviceName: "Makeup Wedding / Pre-Wedding",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-07-14",
                startTime: "07:30",
                endTime: "10:00",
                totalDuration: 150,
                staffName: "Marco Pratama",
                transportZone: "zona2",
                transportZoneLabel: "Zona 2 — Kota Malang & Batu",
                transportFee: 50000,
                locationType: "Home Service Kota Malang & Batu",
                address: "Jl. Retawu No. 12, Klojen, Kota Malang",
                totalPrice: 1600000,
                dpAmount: 800000,
                paidAmount: 800000,
                remainingAmount: 800000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-07-10T08:00:00.000Z"
            },
            {
                bookingCode: "CHR-20260728-3190",
                custName: "Siti Rahmawati",
                custPhone: "081387654122",
                serviceKey: "wedding",
                serviceName: "Makeup Wedding / Pre-Wedding",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-07-28",
                startTime: "06:00",
                endTime: "08:30",
                totalDuration: 150,
                staffName: "Nadine Queen Reina",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Klojen, Kota Malang",
                totalPrice: 1800000,
                dpAmount: 900000,
                paidAmount: 900000,
                remainingAmount: 900000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-07-20T10:00:00.000Z"
            },
            {
                bookingCode: "CHR-20260811-4419",
                custName: "Bunga Citra Lestari",
                custPhone: "085712348899",
                serviceKey: "graduation",
                serviceName: "Makeup Graduation",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-08-11",
                startTime: "05:30",
                endTime: "07:00",
                totalDuration: 90,
                staffName: "Aurora Clarissa",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Klojen, Kota Malang",
                totalPrice: 950000,
                dpAmount: 475000,
                paidAmount: 475000,
                remainingAmount: 475000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-08-05T09:30:00.000Z"
            },
            {
                bookingCode: "CHR-20260825-5021",
                custName: "Fitria Nurhaliza",
                custPhone: "087799887766",
                serviceKey: "engagement",
                serviceName: "Makeup Engagement",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-08-25",
                startTime: "11:00",
                endTime: "12:30",
                totalDuration: 90,
                staffName: "Lisa Anggraini",
                transportZone: "zona2",
                transportZoneLabel: "Zona 2 — Kota Malang & Batu",
                transportFee: 50000,
                locationType: "Home Service Kota Malang & Batu",
                address: "Perumahan Ijen Nirwana Blok D, Kota Malang",
                totalPrice: 850000,
                dpAmount: 425000,
                paidAmount: 425000,
                remainingAmount: 425000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-08-18T14:00:00.000Z"
            },
            {
                bookingCode: "CHR-20260909-6612",
                custName: "Gisella Anastasia",
                custPhone: "081233445566",
                serviceKey: "photoshoot",
                serviceName: "Makeup Photoshoot",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-09-09",
                startTime: "13:00",
                endTime: "14:15",
                totalDuration: 75,
                staffName: "Draco Sebastian",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Klojen, Kota Malang",
                totalPrice: 750000,
                dpAmount: 375000,
                paidAmount: 375000,
                remainingAmount: 375000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-09-02T11:00:00.000Z"
            },
            {
                bookingCode: "CHR-20260922-7815",
                custName: "Raisa Andriana",
                custPhone: "081987654321",
                serviceKey: "wedding",
                serviceName: "Makeup Wedding / Pre-Wedding",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-09-22",
                startTime: "06:30",
                endTime: "09:00",
                totalDuration: 150,
                staffName: "Nadine Queen Reina",
                transportZone: "zona2",
                transportZoneLabel: "Zona 2 — Kota Malang & Batu",
                transportFee: 50000,
                locationType: "Home Service Kota Malang & Batu",
                address: "Kusuma Agrowisata Resort, Batu, Malang",
                totalPrice: 2200000,
                dpAmount: 1100000,
                paidAmount: 1100000,
                remainingAmount: 1100000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-09-15T07:00:00.000Z"
            },
            {
                bookingCode: "CHR-20261008-8120",
                custName: "Cinta Laura Kiehl",
                custPhone: "081122334455",
                serviceKey: "party",
                serviceName: "Makeup Party / Event",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-10-08",
                startTime: "15:00",
                endTime: "16:15",
                totalDuration: 75,
                staffName: "Thania Aurelia Putri",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Klojen, Kota Malang",
                totalPrice: 900000,
                dpAmount: 450000,
                paidAmount: 450000,
                remainingAmount: 450000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-10-01T12:00:00.000Z"
            },
            {
                bookingCode: "CHR-20261021-9311",
                custName: "Anya Geraldine",
                custPhone: "081399887711",
                serviceKey: "wedding",
                serviceName: "Makeup Wedding / Pre-Wedding",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-10-21",
                startTime: "08:00",
                endTime: "10:30",
                totalDuration: 150,
                staffName: "Marco Pratama",
                transportZone: "zona2",
                transportZoneLabel: "Zona 2 — Kota Malang & Batu",
                transportFee: 50000,
                locationType: "Home Service Kota Malang & Batu",
                address: "Villa Songgoriti, Kota Batu",
                totalPrice: 1750000,
                dpAmount: 875000,
                paidAmount: 875000,
                remainingAmount: 875000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-10-14T09:00:00.000Z"
            },
            {
                bookingCode: "CHR-20261030-9942",
                custName: "Maudy Ayunda",
                custPhone: "081266554433",
                serviceKey: "graduation",
                serviceName: "Makeup Graduation",
                orderType: "bundle",
                paxCount: 3,
                selectedDate: "2026-10-30",
                startTime: "06:00",
                endTime: "09:00",
                totalDuration: 180,
                staffName: "Aurora Clarissa",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Klojen, Kota Malang",
                totalPrice: 1350000,
                dpAmount: 675000,
                paidAmount: 675000,
                remainingAmount: 675000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: "2026-10-22T08:30:00.000Z"
            },
            {
                bookingCode: "CHR-20261125-9011",
                custName: "Nadia Syahrini",
                custPhone: "089912345678",
                serviceKey: "photoshoot",
                serviceName: "Makeup Photoshoot",
                orderType: "single",
                paxCount: 1,
                selectedDate: "2026-11-25",
                startTime: "10:00",
                endTime: "11:15",
                totalDuration: 75,
                staffName: "Draco Sebastian",
                transportZone: "zona1",
                transportZoneLabel: "Zona 1 — Studio Chira Malang",
                transportFee: 0,
                locationType: "Studio Chira Make-Up (Malang)",
                address: "Studio Atelier Chira Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang",
                gmapsLink: "https://maps.google.com/?q=Kota+Malang,+Jawa+Timur",
                custNotes: "Konsep pemotretan editorial studio brand pakaian, bold eye & clean complexion.",
                totalPrice: 550000,
                dpAmount: 275000,
                paidAmount: 275000,
                remainingAmount: 275000,
                paymentType: "DP 50%",
                status: "Completed",
                timestamp: new Date(Date.now() - 3600000 * 48).toISOString()
            }
        ];

        // POOL UNTUK TOMBOL '+ SIMULASI PESANAN MASUK'
        const SIMULATION_CLIENT_POOL = [
            { name: "Siti Rahmawati", phone: "081298765432", notes: "Kulit normal, suka finish matte halus." },
            { name: "Devi Anggraini", phone: "085712349988", notes: "Ada bekas jerawat kecil, mohon disamarkan dengan baik." },
            { name: "Fiona Maharani", phone: "087755443322", notes: "Mata agak sensitif terhadap eyeliner cair." },
            { name: "Bella Safitri", phone: "081344556677", notes: "Acara pesta malam hari, riasan tahan keringat." },
            { name: "Rania Az-Zahra", phone: "082188776655", notes: "Pemberkatan pagi, natural soft peach." }
        ];

        const SIMULATION_SERVICE_POOL = [
            { key: "wedding", name: "Makeup Wedding / Pre-Wedding", price: 1500000, duration: 150, type: "single", pax: 1 },
            { key: "graduation", name: "Makeup Graduation", price: 450000, duration: 60, type: "single", pax: 1 },
            { key: "engagement", name: "Makeup Engagement", price: 750000, duration: 90, type: "single", pax: 1 },
            { key: "birthday", name: "Makeup Birthday", price: 400000, duration: 60, type: "single", pax: 1 },
            { key: "custom", name: "Custom Makeup", price: 600000, duration: 90, type: "single", pax: 1 }
        ];

        // ==========================================================================
        // 2. MIGRASI DATA LAMA (MENGGANTI NAMA LAMA NADINE DI LOCALSTORAGE)
        // ==========================================================================
        function migrateLegacyNadineData() {
            try {
                // 1. Migrasi Sesi Admin di localStorage
                const adminRaw = localStorage.getItem("chira_admin_session");
                if (adminRaw && (adminRaw.includes("Nadine Muamlah Veronica") || adminRaw.includes("Muamlah") || adminRaw.includes("Veronica"))) {
                    const updatedAdminRaw = adminRaw.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina")
                                                   .replace(/Nadine Veronica/g, "Nadine Queen Reina");
                    localStorage.setItem("chira_admin_session", updatedAdminRaw);
                }

                // 2. Migrasi Riwayat Bookings di localStorage
                const bookingsRaw = localStorage.getItem("chira_bookings");
                if (bookingsRaw && (bookingsRaw.includes("Nadine Muamlah Veronica") || bookingsRaw.includes("Muamlah") || bookingsRaw.includes("Veronica"))) {
                    const updatedBookingsRaw = bookingsRaw.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina")
                                                         .replace(/Nadine Veronica/g, "Nadine Queen Reina");
                    localStorage.setItem("chira_bookings", updatedBookingsRaw);
                }

                // 3. Migrasi User Name & Profil Customer jika ada
                const userName = localStorage.getItem("chira_user_name");
                if (userName && (userName.includes("Nadine Muamlah Veronica") || userName.includes("Veronica"))) {
                    localStorage.setItem("chira_user_name", userName.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina").replace(/Nadine Veronica/g, "Nadine Queen Reina"));
                }

                const custProfileRaw = localStorage.getItem("chira_customer_profile");
                if (custProfileRaw && custProfileRaw.includes("Nadine Muamlah Veronica")) {
                    localStorage.setItem("chira_customer_profile", custProfileRaw.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina"));
                }

                // 4. Migrasi Staff Profiles jika ada
                const staffProfilesRaw = localStorage.getItem(STAFF_PROFILES_KEY);
                if (staffProfilesRaw && (staffProfilesRaw.includes("Nadine Muamlah Veronica") || staffProfilesRaw.includes("Veronica"))) {
                    localStorage.setItem(STAFF_PROFILES_KEY, staffProfilesRaw.replace(/Nadine Muamlah Veronica/g, "Nadine Queen Reina").replace(/Nadine Veronica/g, "Nadine Queen Reina"));
                }
            } catch (e) {
                console.warn("Pemeriksaan migrasi legacy data:", e);
            }
        }

        // ==========================================================================
        // 3. PROTEKSI SESI LOGIN ADMIN & INISIALISASI PROFIL
        // ==========================================================================
        let currentAdminSession = null;
        let bookingsData = [];
        
        let ordersCurrentPage = 1;
        const ordersPageSize = 8;

        let scheduleCurrentPage = 1;
        const schedulePageSize = 6;

        let reportPeriod = "all";
        let reportCustomStartDate = "";
        let reportCustomEndDate = "";
        let reportsCurrentPage = 1;
        const reportsPageSize = 8;
        let categoryChartInstance = null;
        let artistChartInstance = null;
        let dashCategoryChartInstance = null;
        let dashStaffChartInstance = null;
        let monthlyTrendChartInstance = null;


        let activeModalOrder = null;

        function isSuperAdminSession() {
            if (!currentAdminSession) return false;
            const roleStr = (currentAdminSession.role || "").toLowerCase();
            const emailStr = (currentAdminSession.email || "").toLowerCase();
            const nameStr = (currentAdminSession.namaArtist || "").toLowerCase();
            return roleStr.includes("super admin") || roleStr.includes("owner") || emailStr === "awigya@chiramua.com" || nameStr.includes("awigya");
        }

        function findLoggedInStaffProfile() {
            if (!currentAdminSession || !staffProfiles.length) return null;
            const emailLower = (currentAdminSession.email || "").toLowerCase();
            const nameLower = (currentAdminSession.namaArtist || "").toLowerCase();
            return staffProfiles.find(p => (p.email || "").toLowerCase() === emailLower)
                || staffProfiles.find(p => (p.nama || "").toLowerCase() === nameLower)
                || null;
        }

        function syncAdminHeaderProfile() {
            if (!currentAdminSession) return;
            const isSuper = isSuperAdminSession();
            const matchedProfile = findLoggedInStaffProfile();
            const name = (matchedProfile && matchedProfile.nama) || currentAdminSession.namaArtist || (isSuper ? "Awigya Zora" : "Nadine Queen Reina");
            const role = currentAdminSession.role || (matchedProfile && matchedProfile.role) || (isSuper ? "Super Admin / Owner" : "Senior Bridal MUA");
            const email = currentAdminSession.email || (matchedProfile && matchedProfile.email) || (isSuper ? "awigya@chiramua.com" : "nadine@chiramua.com");

            // Topbar header
            const topName = document.getElementById("topAdminName");
            const topRole = document.getElementById("topAdminRole");
            if (topName) topName.innerText = name;
            if (topRole) topRole.innerText = role;

            // Duty status badge: Sembunyikan untuk Super Admin / Owner
            const dutyBadge = document.getElementById("dutyToggleBtn");
            if (dutyBadge) {
                dutyBadge.style.display = isSuper ? "none" : "inline-flex";
            }

            // Dropdown profile details
            const dropName = document.getElementById("dropdownAdminName");
            const dropEmail = document.getElementById("dropdownAdminEmail");
            const dropRoleBadge = document.getElementById("dropdownAdminRoleBadge");
            if (dropName) dropName.innerText = name;
            if (dropEmail) dropEmail.innerText = email;
            if (dropRoleBadge) {
                dropRoleBadge.innerHTML = isSuper 
                    ? `<i class="fa-solid fa-shield-halved"></i> Super Admin / Owner` 
                    : `<i class="fa-solid fa-paintbrush"></i> Staff MUA`;
            }

            // Sembunyikan 'Kelola Profil Saya' untuk Super Admin / Owner
            const btnEditProfile = document.getElementById("btnDropdownEditMyProfile");
            const divEditProfile = document.getElementById("dropdownEditProfileDivider");
            if (btnEditProfile) {
                btnEditProfile.style.display = isSuper ? "none" : "flex";
            }
            if (divEditProfile) {
                divEditProfile.style.display = isSuper ? "none" : "block";
            }

            // Role-based Sidebar item visibility: Kelola 6 Profil MUA (HANYA SUPER ADMIN), Laporan (SEMUA AKUN)
            const staffNavItem = document.getElementById("navItemStaff");
            const reportsNavItem = document.getElementById("navItemReports");
            const adminLabel = document.getElementById("sidebarAdminLabel");
            const opsReportBtn = document.getElementById("btnDashOpsReportShortcut");
            const opsReportWrapper = document.getElementById("dashOpsReportShortcutWrapper");

            if (staffNavItem) {
                staffNavItem.style.display = isSuper ? "flex" : "none";
            }
            if (reportsNavItem) {
                reportsNavItem.style.display = "flex"; // Tampil untuk Super Admin & Staff MUA
                const span = reportsNavItem.querySelector("span");
                if (span) span.innerText = isSuper ? "Laporan Bisnis" : "Laporan Pendapatan";
            }
            if (adminLabel) {
                adminLabel.style.display = "block";
                adminLabel.innerText = isSuper ? "MANAJEMEN ATELIER" : "LAPORAN & GAJI";
            }
            if (opsReportBtn) {
                opsReportBtn.style.display = "flex";
            }
            if (opsReportWrapper) {
                opsReportWrapper.style.display = "block";
            }

            // Avatar initials
            const avatarEl = document.getElementById("topAdminInitials");
            if (avatarEl) {
                const parts = name.trim().split(" ");
                let initials = "AZ";
                if (parts.length >= 2) initials = (parts[0][0] + parts[1][0]).toUpperCase();
                else if (parts.length === 1) initials = parts[0].slice(0, 2).toUpperCase();

                if (matchedProfile && matchedProfile.fotoProfil) {
                    avatarEl.innerHTML = `<img src="${matchedProfile.fotoProfil}" alt="${escapeHtml(name)}" onerror="this.parentElement.innerText='${initials}'">`;
                } else {
                    avatarEl.innerText = initials;
                }
            }
        }

        function checkAdminAuth() {
            try {
                const raw = localStorage.getItem("chira_admin_session");
                if (raw) {
                    currentAdminSession = JSON.parse(raw);
                }
            } catch (e) {
                console.error("Gagal membaca chira_admin_session", e);
            }

            // Jika sesi admin tidak ada atau bukan admin, arahkan ke admin-login.html
            if (!currentAdminSession || !currentAdminSession.isAdmin) {
                alert("Akses Terbatas Otoritas Admin! Silakan masuk melalui Portal Admin Chira Make-Up.");
                window.location.replace("admin-login.html");
                return false;
            }

            syncAdminHeaderProfile();
            return true;
        }

        // ==========================================================================
        // 3. STORAGE SYNC: AMBIL & SIMPAN PESANAN (chira_bookings)
        // ==========================================================================
        function loadBookings() {
            try {
                const raw = localStorage.getItem("chira_bookings");
                if (raw) {
                    bookingsData = JSON.parse(raw);
                }
            } catch (e) {
                console.error("Gagal memuat chira_bookings", e);
            }

            // Sanitasi data jika masih ada nama artis lama yang lolos di memori
            if (Array.isArray(bookingsData) && bookingsData.length > 0) {
                let hasLegacy = false;
                bookingsData.forEach(b => {
                    if (b.staffName && (b.staffName.includes("Muamlah") || b.staffName.includes("Veronica"))) {
                        b.staffName = "Nadine Queen Reina";
                        hasLegacy = true;
                    }
                });
                if (hasLegacy) saveBookingsToStorage();
            }

            // Jika data masih kosong atau kurang dari 1, isi dengan demo awal
            if (!bookingsData || !Array.isArray(bookingsData) || bookingsData.length === 0) {
                bookingsData = [...INITIAL_DEMO_BOOKINGS];
                saveBookingsToStorage();
            } else if (!bookingsData.some(b => (b.selectedDate || "").startsWith("2026-07"))) {
                // Auto-sinkronisasi histori demo Semester 2 (Jul–Okt) ke memori aktif
                const existingCodes = new Set(bookingsData.map(b => b.bookingCode));
                INITIAL_DEMO_BOOKINGS.forEach(item => {
                    if (!existingCodes.has(item.bookingCode)) {
                        bookingsData.push(item);
                    }
                });
                saveBookingsToStorage();
            }
        }

        function saveBookingsToStorage() {
            try {
                localStorage.setItem("chira_bookings", JSON.stringify(bookingsData));
            } catch (e) {
                console.error("Gagal menyimpan ke chira_bookings", e);
            }
        }

        // ==========================================================================
        // 3B. RBAC DATA SCOPING: FILTER PESANAN SESUAI HAK AKSES ROLE
        // Super Admin (Nadine): Seluruh data pesanan studio
        // Staff MUA Biasa: Hanya data pesanan milik dirinya sendiri
        // ==========================================================================
        function getScopedOrders() {
            if (!Array.isArray(bookingsData)) return [];
            if (isSuperAdminSession()) {
                return bookingsData;
            }

            const loggedStaff = findLoggedInStaffProfile();
            const loggedName = ((loggedStaff && loggedStaff.nama) || (currentAdminSession && currentAdminSession.namaArtist) || "").toLowerCase().trim();
            const loggedId = ((loggedStaff && loggedStaff.id) || "").toLowerCase().trim();
            const loggedFirstName = loggedName.split(" ")[0] || "";

            return bookingsData.filter(b => {
                const staffName = (b.staffName || "").toLowerCase().trim();
                const staffId = (b.staffId || "").toLowerCase().trim();

                if (loggedName && (staffName === loggedName || staffName.includes(loggedName) || loggedName.includes(staffName))) {
                    return true;
                }
                if (loggedId && (staffId === loggedId || staffName.includes(loggedId))) {
                    return true;
                }
                if (loggedFirstName && staffName.includes(loggedFirstName)) {
                    return true;
                }
                return false;
            });
        }

        // ==========================================================================
        // 4. HITUNG RINGKASAN KPI OTOMATIS SECARA REAL-TIME
        // ==========================================================================
        function updateKPIs() {
            const scoped = getScopedOrders();
            const totalOrders = scoped.length;
            
            // Menunggu Verifikasi: status 'Pending DP' atau 'DP 50% Paid (Slot Locked)'
            const pendingCount = scoped.filter(b => 
                b.status === "DP 50% Paid (Slot Locked)" || 
                b.status === "Pending DP"
            ).length;

            // Terkonfirmasi
            const confirmedCount = scoped.filter(b => b.status === "Confirmed").length;

            // Total Pemasukan DP 50% yang telah dibayarkan / diverifikasi
            const totalIncome = scoped
                .filter(b => b.status !== "Cancelled")
                .reduce((acc, curr) => {
                    const paid = curr.paidAmount || curr.dpAmount || (curr.totalPrice * 0.5) || 0;
                    return acc + Number(paid);
                }, 0);

            const elTotalOrders = document.getElementById("kpiTotalOrders");
            const elPendingVerify = document.getElementById("kpiPendingVerify");
            const elConfirmed = document.getElementById("kpiConfirmed");
            const elTotalIncome = document.getElementById("kpiTotalIncome");

            if (elTotalOrders) elTotalOrders.innerText = totalOrders;
            if (elPendingVerify) elPendingVerify.innerText = pendingCount;
            if (elConfirmed) elConfirmed.innerText = confirmedCount;
            if (elTotalIncome) elTotalIncome.innerText = formatRupiah(totalIncome);
        }

        // ==========================================================================
        // 5. RENDER TABEL PESANAN & PENCARIAN / FILTER
        // ==========================================================================
        function setOrdersPage(page) {
            ordersCurrentPage = page;
            renderOrdersTable();
        }

        
        function setSchedulePage(page) {
            scheduleCurrentPage = page;
            renderScheduleTable();
        }

        function renderPagination(containerId, currentPage, totalPages, totalItems, pageSize, onPageFnName) {
            const container = document.getElementById(containerId);
            if (!container) return;

            if (totalItems === 0) {
                container.innerHTML = `<span class="pagination-info">Tidak ada data untuk ditampilkan</span>`;
                return;
            }

            const start = (currentPage - 1) * pageSize + 1;
            const end = Math.min(currentPage * pageSize, totalItems);

            let pagesHTML = "";
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, startPage + 4);
            if (endPage - startPage < 4) {
                startPage = Math.max(1, endPage - 4);
            }

            for (let p = startPage; p <= endPage; p++) {
                pagesHTML += `
                    <button type="button" class="page-num ${p === currentPage ? 'active' : ''}" onclick="${onPageFnName}(${p})">
                        ${p}
                    </button>
                `;
            }

            container.innerHTML = `
                <div class="pagination-info">
                    Menampilkan <strong>${start}</strong> - <strong>${end}</strong> dari <strong>${totalItems}</strong> data
                </div>
                <div class="pagination-controls">
                    <button type="button" class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="${onPageFnName}(${currentPage - 1})">
                        <i class="fa-solid fa-chevron-left"></i> Prev
                    </button>
                    ${pagesHTML}
                    <button type="button" class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="${onPageFnName}(${currentPage + 1})">
                        Next <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            `;
        }

        function getServiceCategory(item) {
            const key = ((item.serviceKey || "") + " " + (item.serviceName || "")).toLowerCase();
            if (key.includes("wedding") || key.includes("bridal") || key.includes("pengantin") || key.includes("pre-wedding")) {
                return "Bridal";
            }
            if (key.includes("graduation") || key.includes("wisuda")) {
                return "Graduation";
            }
            if (key.includes("engagement") || key.includes("lamaran") || key.includes("sangjit")) {
                return "Engagement";
            }
            return "Party & Custom";
        }

        function renderMonthlyPerformanceChart() {
            const chartCanvas = document.getElementById("monthlyTrendChart");
            const meterEl = document.getElementById("dashboardMetricMeters");
            const footerEl = document.getElementById("monthlySummaryFooter");
            if (!chartCanvas) return;

            const scoped = getScopedOrders();
            const isSuper = isSuperAdminSession();
            const activeScoped = scoped.filter(b => b.status !== "Cancelled");

            const monthsConfig = [
                { key: "2026-07", label: "Jul" },
                { key: "2026-08", label: "Agt" },
                { key: "2026-09", label: "Sep" },
                { key: "2026-10", label: "Okt" },
                { key: "2026-11", label: "Nov" },
                { key: "2026-12", label: "Des" }
            ];

            const monthLabels = monthsConfig.map(m => m.label);
            const orderCounts = [];
            const dpTotals = [];

            let totalSemesterOrders = 0;
            let totalSemesterDP = 0;

            monthsConfig.forEach(m => {
                const inMonth = activeScoped.filter(b => {
                    const d = (b.selectedDate || "").trim();
                    return d.startsWith(m.key);
                });
                const count = inMonth.length;
                const dp = inMonth.reduce((acc, curr) => {
                    const val = Number(curr.paidAmount || curr.dpAmount || (curr.totalPrice * 0.5) || 0);
                    return acc + val;
                }, 0);

                orderCounts.push(count);
                dpTotals.push(dp);

                totalSemesterOrders += count;
                totalSemesterDP += dp;
            });

            // SINKRONISASI GRAFIK CHART.JS DUAL-AXIS (monthlyTrendChart)
            if (typeof Chart !== "undefined") {
                if (monthlyTrendChartInstance) {
                    monthlyTrendChartInstance.destroy();
                }

                const maxOrders = Math.max(...orderCounts, 1);
                const maxDP = Math.max(...dpTotals, 1000000);

                // Plugin inline untuk label angka eksplisit di atas ujung setiap batang
                const barDataLabelsPlugin = {
                    id: 'barDataLabelsPlugin',
                    afterDatasetsDraw(chart) {
                        const { ctx } = chart;
                        chart.data.datasets.forEach((dataset, datasetIndex) => {
                            const meta = chart.getDatasetMeta(datasetIndex);
                            if (!meta.hidden) {
                                meta.data.forEach((element, index) => {
                                    const val = dataset.data[index];
                                    if (val === undefined || val === null) return;

                                    let text = '';
                                    if (datasetIndex === 0) {
                                        text = val > 0 ? `${val} Sesi` : '0';
                                    } else {
                                        if (val >= 1000000) {
                                            const jtVal = (val / 1000000).toFixed(1).replace('.0', '');
                                            text = `Rp ${jtVal} Jt`;
                                        } else if (val >= 1000) {
                                            text = `Rp ${Math.round(val / 1000)} Rb`;
                                        } else {
                                            text = val > 0 ? `Rp ${val}` : 'Rp 0';
                                        }
                                    }

                                    ctx.save();
                                    ctx.font = '600 10px Poppins, sans-serif';
                                    ctx.fillStyle = datasetIndex === 0 ? '#b85d73' : '#783848';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';

                                    const x = element.x;
                                    const y = element.y - 4;
                                    ctx.fillText(text, x, y);
                                    ctx.restore();
                                });
                            }
                        });
                    }
                };

                monthlyTrendChartInstance = new Chart(chartCanvas, {
                    type: 'bar',
                    data: {
                        labels: monthLabels,
                        datasets: [
                            {
                                label: 'Jumlah Reservasi (Sesi)',
                                data: orderCounts,
                                backgroundColor: 'rgba(216, 115, 138, 0.85)',
                                borderColor: '#c45872',
                                borderWidth: 1.5,
                                borderRadius: 6,
                                yAxisID: 'y'
                            },
                            {
                                label: 'Realisasi DP 50% (Rp)',
                                data: dpTotals,
                                backgroundColor: 'rgba(141, 57, 80, 0.85)',
                                borderColor: '#8d3950',
                                borderWidth: 1.5,
                                borderRadius: 6,
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                bottom: 0,
                                left: 4,
                                right: 6
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    boxWidth: 12,
                                    font: { family: 'Poppins', size: 11, weight: '500' }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        if (context.datasetIndex === 0) {
                                            return ' ' + context.dataset.label + ': ' + context.parsed.y + ' Sesi';
                                        }
                                        return ' ' + context.dataset.label + ': ' + formatRupiah(context.parsed.y);
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                title: {
                                    display: true,
                                    text: 'Jumlah Sesi',
                                    color: '#8d3950',
                                    font: { family: 'Poppins', size: 10, weight: '600' }
                                },
                                ticks: {
                                    stepSize: 1,
                                    precision: 0,
                                    callback: function(val) {
                                        return val + ' Sesi';
                                    },
                                    font: { family: 'Poppins', size: 10 }
                                },
                                grid: { color: 'rgba(235, 212, 207, 0.4)' },
                                beginAtZero: true,
                                suggestedMax: maxOrders + 1
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                title: {
                                    display: true,
                                    text: 'Realisasi DP 50%',
                                    color: '#c45872',
                                    font: { family: 'Poppins', size: 10, weight: '600' }
                                },
                                grid: { drawOnChartArea: false },
                                ticks: {
                                    callback: function(val) {
                                        if (val >= 1000000) return 'Rp ' + (val / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' Jt';
                                        if (val >= 1000) return 'Rp ' + (val / 1000).toLocaleString('id-ID', { maximumFractionDigits: 0 }) + ' Rb';
                                        return 'Rp ' + val;
                                    },
                                    font: { family: 'Poppins', size: 10 }
                                },
                                beginAtZero: true,
                                suggestedMax: Math.round(maxDP * 1.25)
                            },
                            x: {
                                grid: { display: false },
                                ticks: { font: { family: 'Poppins', size: 11, weight: '600' } }
                            }
                        }
                    },
                    plugins: [barDataLabelsPlugin]
                });
            }

            // RINGKASAN TOTAL PERIODE JUL–DES (SEMESTER 2 2026)
            if (footerEl) {
                const avgDP = totalSemesterOrders > 0 ? Math.round(totalSemesterDP / totalSemesterOrders) : 0;
                footerEl.innerHTML = `
                    <div class="sem-summary-box">
                        <div class="sem-summary-left">
                            <i class="fa-solid fa-chart-line" style="color: var(--accent-pink); font-size: 16px;"></i>
                            <div>
                                <span style="font-size: 10.5px; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Ringkasan Semester 2 (Jul–Des 2026)</span>
                                <strong style="display: block; font-size: 13px; color: var(--text-dark);">
                                    ${isSuper ? 'Akumulasi Seluruh Studio Atelier' : 'Akumulasi Sesi Pribadi Staff MUA'}
                                </strong>
                            </div>
                        </div>
                        <div class="sem-summary-right">
                            <div class="sem-stat-item">
                                <span class="sem-stat-label">Total Reservasi:</span>
                                <span class="sem-stat-val val-orders">${totalSemesterOrders} Sesi</span>
                            </div>
                            <div class="sem-stat-divider"></div>
                            <div class="sem-stat-item">
                                <span class="sem-stat-label">Realisasi DP 50%:</span>
                                <span class="sem-stat-val val-dp">${formatRupiah(totalSemesterDP)}</span>
                            </div>
                            <div class="sem-stat-divider"></div>
                            <div class="sem-stat-item">
                                <span class="sem-stat-label">Rata-rata DP:</span>
                                <span class="sem-stat-val" style="color: #785f5f;">${formatRupiah(avgDP)} / Sesi</span>
                            </div>
                        </div>
                    </div>
                `;
            }

            // EFISIENSI & LAYANAN (SIDE CARD)
            if (meterEl) {
                const totalActive = activeScoped.length || 1;
                const confirmedOrCompleted = activeScoped.filter(b => b.status === "Confirmed" || b.status === "Completed").length;
                const dpRatio = Math.min(100, Math.round((confirmedOrCompleted / totalActive) * 100)) || 96.4;
                
                const studioCount = activeScoped.filter(b => !b.transportZone || b.transportZone === "zona1").length;
                const studioRatio = Math.round((studioCount / totalActive) * 100) || 65;
                const ratingLabel = isSuper ? "4.92 / 5.0" : "4.96 / 5.0";

                meterEl.innerHTML = `
                    <div class="metric-meter-item">
                        <div class="meter-top">
                            <span class="meter-title"><i class="fa-solid fa-circle-check" style="color: var(--success);"></i> Rasio Konversi DP 50%</span>
                            <span class="meter-val">${dpRatio}%</span>
                        </div>
                        <div class="meter-bar-bg"><div class="meter-bar-fill" style="width: ${dpRatio}%;"></div></div>
                    </div>
                    <div class="metric-meter-item">
                        <div class="meter-top">
                            <span class="meter-title"><i class="fa-solid fa-star" style="color: #f1c40f;"></i> Kepuasan Rating Klien</span>
                            <span class="meter-val">${ratingLabel}</span>
                        </div>
                        <div class="meter-bar-bg"><div class="meter-bar-fill" style="width: 98.4%;"></div></div>
                    </div>
                    <div class="metric-meter-item">
                        <div class="meter-top">
                            <span class="meter-title"><i class="fa-solid fa-house-chimney" style="color: var(--accent-pink);"></i> Rasio Sesi Studio vs Home Service</span>
                            <span class="meter-val">${studioRatio}% Studio</span>
                        </div>
                        <div class="meter-bar-bg"><div class="meter-bar-fill" style="width: ${studioRatio}%;"></div></div>
                    </div>
                `;
            }
        }

        function renderDashboardCharts() {
            const scoped = getScopedOrders();
            const isSuper = isSuperAdminSession();
            const revBookings = scoped.filter(b => b.status === "Confirmed" || b.status === "Completed");

            // 1. Data per Kategori (Scoped)
            const categories = ["Bridal", "Graduation", "Engagement", "Party & Custom"];
            const catData = {
                "Bridal": { omzet: 0, count: 0 },
                "Graduation": { omzet: 0, count: 0 },
                "Engagement": { omzet: 0, count: 0 },
                "Party & Custom": { omzet: 0, count: 0 }
            };

            revBookings.forEach(b => {
                const cat = getServiceCategory(b);
                if (!catData[cat]) catData[cat] = { omzet: 0, count: 0 };
                catData[cat].omzet += Number(b.totalPrice || 0);
                catData[cat].count += 1;
            });

            const catOmzetVals = categories.map(c => catData[c].omzet);
            const catCountVals = categories.map(c => catData[c].count);

            // RENDER DASHBOARD CATEGORY CHART (dashCategoryChart)
            const ctxCat = document.getElementById("dashCategoryChart");
            if (ctxCat && typeof Chart !== "undefined") {
                if (dashCategoryChartInstance) {
                    dashCategoryChartInstance.destroy();
                }
                dashCategoryChartInstance = new Chart(ctxCat, {
                    type: 'bar',
                    data: {
                        labels: categories,
                        datasets: [
                            {
                                label: 'Omzet (Rp)',
                                data: catOmzetVals,
                                backgroundColor: 'rgba(216, 115, 138, 0.85)',
                                borderColor: '#c45872',
                                borderWidth: 1.5,
                                borderRadius: 6,
                                yAxisID: 'y'
                            },
                            {
                                label: 'Jumlah Sesi',
                                data: catCountVals,
                                backgroundColor: 'rgba(141, 57, 80, 0.85)',
                                borderColor: '#8d3950',
                                borderWidth: 1.5,
                                borderRadius: 6,
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: { boxWidth: 12, font: { family: 'Poppins', size: 11 } }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        if (context.datasetIndex === 0) {
                                            return ' ' + context.dataset.label + ': ' + formatRupiah(context.parsed.y);
                                        }
                                        return ' ' + context.dataset.label + ': ' + context.parsed.y + ' Sesi';
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    callback: function(val) {
                                        if (val >= 1000000) return (val / 1000000) + ' Jt';
                                        if (val >= 1000) return (val / 1000) + ' Rb';
                                        return val;
                                    },
                                    font: { family: 'Poppins', size: 10 }
                                },
                                grid: { color: 'rgba(235, 212, 207, 0.4)' }
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                grid: { drawOnChartArea: false },
                                ticks: {
                                    stepSize: 1,
                                    font: { family: 'Poppins', size: 10 }
                                }
                            },
                            x: {
                                grid: { display: false },
                                ticks: { font: { family: 'Poppins', size: 11, weight: '500' } }
                            }
                        }
                    }
                });
            }

            // 2. RENDER GRAFIK KANAN: KONTRIBUSI 6 STAFF MUA (SUPER ADMIN) ATAU STATUS & RASIO SESI SAYA (STAFF MUA BIASA)
            const rightTitleEl = document.getElementById("dashRightChartTitle");
            const rightSubtitleEl = document.getElementById("dashRightChartSubtitle");
            const rightBadgeEl = document.getElementById("dashRightChartBadge");
            const ctxArtist = document.getElementById("dashStaffChart");

            if (ctxArtist && typeof Chart !== "undefined") {
                if (dashStaffChartInstance) {
                    dashStaffChartInstance.destroy();
                }

                if (isSuper) {
                    // === SUPER ADMIN MODE: Kontribusi Finansial 6 Staff MUA ===
                    if (rightTitleEl) rightTitleEl.innerHTML = '<i class="fa-solid fa-chart-pie" style="color: var(--accent-pink);"></i> Kontribusi Finansial 6 Staff MUA';
                    if (rightSubtitleEl) rightSubtitleEl.innerText = 'Proporsi omzet & total sesi terselesaikan per artist';
                    if (rightBadgeEl) rightBadgeEl.innerText = '6 Artists';

                    const artistNames = [
                        "Nadine Queen Reina",
                        "Aurora Clarissa",
                        "Draco Sebastian",
                        "Lisa Anggraini",
                        "Marco Pratama",
                        "Thania Aurellia Putri"
                    ];
                    const artistColors = [
                        "#d8738a",
                        "#e89cae",
                        "#8d3950",
                        "#b47b86",
                        "#d4a373",
                        "#e29578"
                    ];

                    const artistData = {};
                    artistNames.forEach(name => {
                        artistData[name] = { omzet: 0, completed: 0, count: 0 };
                    });

                    bookingsData.filter(b => b.status !== "Cancelled").forEach(b => {
                        const name = b.staffName || "Nadine Queen Reina";
                        const matched = artistNames.find(n => n.toLowerCase() === name.toLowerCase()) || "Nadine Queen Reina";
                        if (b.status === "Confirmed" || b.status === "Completed") {
                            artistData[matched].omzet += Number(b.totalPrice || 0);
                            artistData[matched].count += 1;
                        }
                        if (b.status === "Completed") {
                            artistData[matched].completed += 1;
                        }
                    });

                    const artistOmzetVals = artistNames.map(n => artistData[n].omzet);
                    const artistCompletedVals = artistNames.map(n => artistData[n].completed);
                    const totalOmzetArtists = artistOmzetVals.reduce((a, b) => a + b, 0) || 1;

                    dashStaffChartInstance = new Chart(ctxArtist, {
                        type: 'doughnut',
                        data: {
                            labels: artistNames.map(n => n.split(' ')[0]),
                            datasets: [{
                                data: artistOmzetVals.map(v => v > 0 ? v : 0.0001),
                                backgroundColor: artistColors,
                                borderWidth: 2,
                                borderColor: '#ffffff',
                                hoverOffset: 6
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        boxWidth: 12,
                                        font: { family: 'Poppins', size: 10.5 },
                                        generateLabels: function(chart) {
                                            const data = chart.data;
                                            return data.labels.map((lbl, i) => {
                                                const val = artistOmzetVals[i];
                                                const pct = Math.round((val / totalOmzetArtists) * 100);
                                                const comp = artistCompletedVals[i];
                                                return {
                                                    text: `${lbl} (${pct}%, ${comp} Done)`,
                                                    fillStyle: artistColors[i],
                                                    hidden: false,
                                                    index: i
                                                };
                                            });
                                        }
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            const idx = context.dataIndex;
                                            const fullName = artistNames[idx];
                                            const val = artistOmzetVals[idx];
                                            const pct = Math.round((val / totalOmzetArtists) * 100);
                                            const comp = artistCompletedVals[idx];
                                            return [
                                                ` ${fullName}`,
                                                ` Omzet: ${formatRupiah(val)} (${pct}%)`,
                                                ` Selesai: ${comp} Sesi`
                                            ];
                                        }
                                    }
                                }
                            },
                            cutout: '60%'
                        }
                    });

                } else {
                    // === STAFF MUA BIASA MODE: Status & Rasio Sesi Saya ===
                    if (rightTitleEl) rightTitleEl.innerHTML = '<i class="fa-solid fa-chart-pie" style="color: var(--accent-pink);"></i> Status & Rasio Sesi Saya';
                    if (rightSubtitleEl) rightSubtitleEl.innerText = 'Distribusi status pesanan dan rasio penyelesaian sesi saya';
                    if (rightBadgeEl) rightBadgeEl.innerText = 'Sesi Saya';

                    const myCompleted = scoped.filter(b => b.status === "Completed").length;
                    const myConfirmed = scoped.filter(b => b.status === "Confirmed").length;
                    const myPending = scoped.filter(b => b.status === "DP 50% Paid (Slot Locked)" || b.status === "Pending DP").length;
                    const myCancelled = scoped.filter(b => b.status === "Cancelled").length;

                    const myStatusLabels = ["Completed", "Confirmed", "Menunggu DP", "Cancelled"];
                    const myStatusCounts = [myCompleted, myConfirmed, myPending, myCancelled];
                    const myStatusColors = ["#27ae60", "#2980b9", "#e67e22", "#927979"];
                    const totalMySessions = scoped.length || 1;

                    dashStaffChartInstance = new Chart(ctxArtist, {
                        type: 'doughnut',
                        data: {
                            labels: myStatusLabels,
                            datasets: [{
                                data: myStatusCounts.map(v => v > 0 ? v : 0.0001),
                                backgroundColor: myStatusColors,
                                borderWidth: 2,
                                borderColor: '#ffffff',
                                hoverOffset: 6
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        boxWidth: 12,
                                        font: { family: 'Poppins', size: 10.5 },
                                        generateLabels: function(chart) {
                                            return myStatusLabels.map((lbl, i) => {
                                                const cnt = myStatusCounts[i];
                                                const pct = Math.round((cnt / totalMySessions) * 100);
                                                return {
                                                    text: `${lbl} (${cnt} Sesi, ${pct}%)`,
                                                    fillStyle: myStatusColors[i],
                                                    hidden: false,
                                                    index: i
                                                };
                                            });
                                        }
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            const idx = context.dataIndex;
                                            const lbl = myStatusLabels[idx];
                                            const cnt = myStatusCounts[idx];
                                            const pct = Math.round((cnt / totalMySessions) * 100);
                                            return [
                                                ` Status: ${lbl}`,
                                                ` Total: ${cnt} Sesi`,
                                                ` Proporsi: ${pct}%`
                                            ];
                                        }
                                    }
                                }
                            },
                            cutout: '60%'
                        }
                    });
                }
            }
        }

        function renderDashboardOperationsSummary() {
            const scoped = getScopedOrders();
            const isSuper = isSuperAdminSession();

            // 1. Upcoming confirmed sessions (Scoped)
            const upcomingListEl = document.getElementById("dashUpcomingSessionsList");
            if (upcomingListEl) {
                const confirmedBookings = scoped
                    .filter(b => b.status === "Confirmed")
                    .sort((a, b) => {
                        const dateA = (a.selectedDate || "") + " " + (a.startTime || "00:00");
                        const dateB = (b.selectedDate || "") + " " + (b.startTime || "00:00");
                        return dateA.localeCompare(dateB);
                    })
                    .slice(0, 3);

                if (confirmedBookings.length === 0) {
                    upcomingListEl.innerHTML = `
                        <div style="text-align: center; padding: 24px 10px; color: var(--text-light); font-size: 13px;">
                            <i class="fa-regular fa-calendar-xmark" style="font-size: 26px; color: #d8bebe; margin-bottom: 8px; display: block;"></i>
                            Belum ada agenda sesi berstatus 'Confirmed'.
                        </div>
                    `;
                } else {
                    let html = "";
                    confirmedBookings.forEach(item => {
                        const zoneInfo = getOrderZoneInfo(item);
                        const d = item.selectedDate ? new Date(item.selectedDate + "T00:00:00") : new Date();
                        const dayNum = d.getDate();
                        const monthStr = d.toLocaleDateString("id-ID", { month: "short" });

                        html += `
                            <div class="ops-session-item">
                                <div class="ops-session-left">
                                    <div class="ops-date-badge">
                                        <div class="ops-date-day">${dayNum}</div>
                                        <div class="ops-date-month">${monthStr}</div>
                                    </div>
                                    <div class="ops-session-info">
                                        <strong>${escapeHtml(item.custName || "Klien")}</strong>
                                        <small><i class="fa-regular fa-clock" style="color: var(--dark-pink);"></i> ${item.startTime || "08:00"} WIB • ${escapeHtml(item.serviceName || "Layanan MUA")}</small>
                                        <small style="color: var(--dark-pink); font-weight: 600;"><i class="fa-solid fa-paintbrush"></i> ${escapeHtml(item.staffName || "Staff MUA")}</small>
                                    </div>
                                </div>
                                <div class="ops-session-right">
                                    <span class="badge-zone ${zoneInfo.badgeClass}" style="font-size: 10px; padding: 3px 8px;">
                                        <i class="${zoneInfo.icon}"></i> ${zoneInfo.short}
                                    </span>
                                    <span class="status-pill status-confirmed" style="font-size: 9.5px; padding: 2px 7px;">
                                        <i class="fa-solid fa-circle-check"></i> Confirmed
                                    </span>
                                </div>
                            </div>
                        `;
                    });
                    upcomingListEl.innerHTML = html;
                }
            }

            // 2. Zone Breakdown & Team Readiness (Scoped)
            const zoneTeamEl = document.getElementById("dashZoneAndTeamSummary");
            if (zoneTeamEl) {
                const activeBookings = scoped.filter(b => b.status !== "Cancelled");
                const countZ1 = activeBookings.filter(b => b.transportZone === "zona1" || !b.transportZone).length;
                const countZ2 = activeBookings.filter(b => b.transportZone === "zona2").length;
                const countZ3 = activeBookings.filter(b => b.transportZone === "zona3").length;
                const countZ4 = activeBookings.filter(b => b.transportZone === "zona4").length;

                let teamRowHTML = "";
                if (isSuper) {
                    let avatarsHTML = "";
                    staffProfiles.forEach(staff => {
                        const avatarSrc = staff.fotoProfil || "img/CHIRA_LOGO-removebg-preview.png";
                        avatarsHTML += `
                            <img src="${avatarSrc}" alt="${escapeHtml(staff.nama)}" class="ops-team-avatar-pill" title="${escapeHtml(staff.nama)} — ${escapeHtml(staff.spesialisasi)}" onerror="this.src='img/CHIRA_LOGO-removebg-preview.png'">
                        `;
                    });

                    teamRowHTML = `
                        <div class="ops-team-row">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div class="ops-team-avatars">
                                    ${avatarsHTML}
                                </div>
                                <div>
                                    <strong style="color: var(--text-dark); font-size: 11.5px;">6 Staff MUA Official</strong>
                                    <div style="font-size: 10px; color: var(--success); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Siap Bertugas (Ready on Duty)</div>
                                </div>
                            </div>
                            <span class="chart-badge" style="background:#eafaf1; color:var(--success); border-color:#c2eed2; font-size: 10px;">
                                100% Ready
                            </span>
                        </div>
                    `;
                } else {
                    const loggedStaff = findLoggedInStaffProfile();
                    const staffName = (loggedStaff && loggedStaff.nama) || (currentAdminSession && currentAdminSession.namaArtist) || "Staff MUA";
                    const staffRole = (loggedStaff && loggedStaff.spesialisasi) || (currentAdminSession && currentAdminSession.role) || "Makeup Specialist";
                    const avatarSrc = (loggedStaff && loggedStaff.fotoProfil) || "img/CHIRA_LOGO-removebg-preview.png";

                    teamRowHTML = `
                        <div class="ops-team-row">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div class="ops-team-avatars">
                                    <img src="${avatarSrc}" alt="${escapeHtml(staffName)}" class="ops-team-avatar-pill" style="margin-left:0; width:34px; height:34px;" onerror="this.src='img/CHIRA_LOGO-removebg-preview.png'">
                                </div>
                                <div>
                                    <strong style="color: var(--text-dark); font-size: 11.5px;">${escapeHtml(staffName)}</strong>
                                    <div style="font-size: 10px; color: var(--success); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> ${escapeHtml(staffRole)} • Ready on Duty</div>
                                </div>
                            </div>
                            <span class="chart-badge" style="background:#eafaf1; color:var(--success); border-color:#c2eed2; font-size: 10px;">
                                <i class="fa-solid fa-user-check"></i> Sesi Personal
                            </span>
                        </div>
                    `;
                }

                zoneTeamEl.innerHTML = `
                    <div class="ops-zone-stats-grid">
                        <div class="ops-zone-stat-box">
                            <div class="zone-count">${countZ1}</div>
                            <div class="zone-title">Studio Malang (Z1)</div>
                        </div>
                        <div class="ops-zone-stat-box">
                            <div class="zone-count">${countZ2}</div>
                            <div class="zone-title">Home Service (Z2)</div>
                        </div>
                        <div class="ops-zone-stat-box">
                            <div class="zone-count">${countZ3}</div>
                            <div class="zone-title">Luar Kota (Z3)</div>
                        </div>
                        <div class="ops-zone-stat-box">
                            <div class="zone-count">${countZ4}</div>
                            <div class="zone-title">Destination (Z4)</div>
                        </div>
                    </div>
                    ${teamRowHTML}
                `;
            }
        }

        function renderDashboardOverview() {
            updateKPIs();
            renderMonthlyPerformanceChart();
            renderDashboardCharts();
            renderDashboardOperationsSummary();
        }

        // ==========================================================================
        // 5. RENDER TABEL PESANAN & PENCARIAN / FILTER (DENGAN PAGINATION)
        // ==========================================================================
        function renderOrdersTable() {
            const tbody = document.getElementById("ordersTableBody");
            if (!tbody) return;

            const searchInput = document.getElementById("orderSearchInput");
            const statusSelect = document.getElementById("statusFilterSelect");
            const searchKeyword = (searchInput && searchInput.value ? searchInput.value : "").toLowerCase().trim();
            const statusFilter = (statusSelect && statusSelect.value ? statusSelect.value : "ALL");

            const scoped = getScopedOrders();

            // Update sidebar badge counter berdasarkan data scoped MUA
            const sidebarBadge = document.getElementById("sidebarOrdersBadge");
            if (sidebarBadge) {
                const pendingCount = scoped.filter(b => b.status === "DP 50% Paid (Slot Locked)" || b.status === "Pending DP").length;
                sidebarBadge.innerText = pendingCount > 0 ? pendingCount : scoped.length;
            }

            tbody.innerHTML = "";

            // Filter data dari scoped orders
            const filtered = scoped.filter(item => {
                const matchSearch = 
                    (item.bookingCode || "").toLowerCase().includes(searchKeyword) ||
                    (item.custName || "").toLowerCase().includes(searchKeyword) ||
                    (item.custPhone || "").includes(searchKeyword) ||
                    (item.staffName || "").toLowerCase().includes(searchKeyword) ||
                    (item.serviceName || "").toLowerCase().includes(searchKeyword);

                let matchStatus = true;
                if (statusFilter === "pending") {
                    matchStatus = (item.status === "DP 50% Paid (Slot Locked)" || item.status === "Pending DP");
                } else if (statusFilter === "confirmed") {
                    matchStatus = (item.status === "Confirmed");
                } else if (statusFilter === "completed") {
                    matchStatus = (item.status === "Completed");
                } else if (statusFilter === "cancelled") {
                    matchStatus = (item.status === "Cancelled");
                }

                return matchSearch && matchStatus;
            });

            const totalItems = filtered.length;
            const totalPages = Math.ceil(totalItems / ordersPageSize) || 1;

            if (ordersCurrentPage > totalPages) ordersCurrentPage = totalPages;
            if (ordersCurrentPage < 1) ordersCurrentPage = 1;

            if (totalItems === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="9">
                            <div class="empty-state">
                                <i class="fa-regular fa-folder-open"></i>
                                <p>Tidak ada data reservasi yang sesuai dengan kriteria filter.</p>
                            </div>
                        </td>
                    </tr>
                `;
                renderPagination("ordersPagination", ordersCurrentPage, 1, 0, ordersPageSize, "setOrdersPage");
                return;
            }

            const startIdx = (ordersCurrentPage - 1) * ordersPageSize;
            const paged = filtered.slice(startIdx, startIdx + ordersPageSize);

            paged.forEach((item, index) => {
                const tr = document.createElement("tr");
                const rowNumber = startIdx + index + 1;
                const dpNominal = item.dpAmount || (item.totalPrice * 0.5) || 0;
                const statusBadge = getStatusBadge(item.status, item);
                const zoneInfo = getOrderZoneInfo(item);

                tr.innerHTML = `
                    <td style="text-align: center; font-weight: 600; color: var(--text-light);">${rowNumber}</td>
                    <td>
                        <span class="booking-id-pill">${item.bookingCode || "CHR-DEMO"}</span>
                    </td>
                    <td>
                        <div class="client-info">
                            <strong>${escapeHtml(item.custName || "Klien")}</strong>
                            <a href="https://wa.me/62${cleanPhone(item.custPhone)}" target="_blank" title="Kirim Pesan WhatsApp">
                                <i class="fa-brands fa-whatsapp"></i> ${item.custPhone || "-"}
                            </a>
                        </div>
                    </td>
                    <td>
                        <div><strong>${escapeHtml(item.serviceName || "Layanan MUA")}</strong></div>
                        <div style="display: flex; gap: 5px; align-items: center; flex-wrap: wrap; margin-top: 3px;">
                            <span class="service-badge">
                                <i class="fa-solid fa-users"></i> ${item.orderType === 'bundle' ? 'Bundle ' + item.paxCount + ' Pax' : '1 Pax'}
                            </span>
                            <span class="badge-zone ${zoneInfo.badgeClass}" style="font-size: 10px; padding: 2px 7px;">
                                <i class="${zoneInfo.icon}"></i> ${zoneInfo.short}
                            </span>
                        </div>
                    </td>
                    <td>
                        <div><strong>${formatDateIndo(item.selectedDate)}</strong></div>
                        <div style="font-size: 11.5px; color: var(--dark-pink); font-weight:600;">
                            <i class="fa-regular fa-clock"></i> ${item.startTime || "08:00"} - ${item.endTime || "10:00"} WIB (${item.totalDuration || 60}m)
                        </div>
                    </td>
                    <td>
                        <span style="font-weight: 600; color: var(--text-dark);">${escapeHtml(item.staffName || "Staff MUA")}</span>
                    </td>
                    <td>
                        <strong style="color: var(--dark-pink); font-size: 14px;">${formatRupiah(dpNominal)}</strong>
                        <div style="font-size: 10.5px; color: var(--text-light);">Total: ${formatRupiah(item.totalPrice || dpNominal * 2)}</div>
                    </td>
                    <td>
                        ${statusBadge}
                    </td>
                    <td style="text-align: center;">
                        <div class="action-btns-group" style="justify-content: center;">
                            <button type="button" class="btn-action-detail" title="Lihat Detail Lembar Kerja" onclick="openOrderDetailModal('${item.bookingCode}')">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btn-action-edit" title="Edit Status Pesanan &amp; Pembayaran" onclick="openEditOrderStatusModal('${item.bookingCode}')">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                        </div>
                    </td>
                `;

                tbody.appendChild(tr);
            });

            renderPagination("ordersPagination", ordersCurrentPage, totalPages, totalItems, ordersPageSize, "setOrdersPage");
        }

        function getStatusBadge(status, item) {
            if (status === "Confirmed") {
                return `<span class="status-pill status-confirmed"><i class="fa-solid fa-circle-check"></i> Confirmed</span>`;
            } else if (status === "Completed") {
                return `<span class="status-pill status-completed"><i class="fa-solid fa-flag-checkered"></i> Completed</span>`;
            } else if (status === "Cancelled") {
                return `<span class="status-pill status-cancelled"><i class="fa-solid fa-ban"></i> Cancelled</span>`;
            } else if (status === "DP 50% Paid (Slot Locked)" || (item && item.qrisStatus === "DP 50% Terverifikasi Gateway")) {
                return `<span class="status-pill status-confirmed" style="background:#eafaf1; color:#1e8449; border-color:#c7eed8;" title="DP 50% QRIS Terverifikasi Gateway Payment"><i class="fa-solid fa-qrcode"></i> DP 50% Terverifikasi</span>`;
            } else {
                // Pending DP
                return `<span class="status-pill status-pending" title="Menunggu pembayaran QRIS dari klien"><i class="fa-solid fa-clock"></i> Menunggu QRIS</span>`;
            }
        }

        // --- HELPER METADATA ZONA LAYANAN & TRANSPORTASI ---
        function getOrderZoneInfo(order) {
            if (order.transportZone) {
                if (order.transportZone === 'zona1') {
                    return {
                        id: 'zona1',
                        name: 'Zona 1 — Studio Chira Malang',
                        short: 'Studio Malang',
                        fee: 0,
                        feeLabel: 'Bebas Transport (Rp 0)',
                        isOnSite: false,
                        isDestination: false,
                        icon: 'fa-solid fa-store',
                        badgeClass: 'badge-zone-studio'
                    };
                } else if (order.transportZone === 'zona2') {
                    return {
                        id: 'zona2',
                        name: 'Zona 2 — Home Service Malang & Batu',
                        short: 'Malang & Batu',
                        fee: order.transportFee || 50000,
                        feeLabel: formatRupiah(order.transportFee || 50000),
                        isOnSite: true,
                        isDestination: false,
                        icon: 'fa-solid fa-house-chimney',
                        badgeClass: 'badge-zone-local'
                    };
                } else if (order.transportZone === 'zona3') {
                    return {
                        id: 'zona3',
                        name: 'Zona 3 — Luar Kota (Area Jawa Timur)',
                        short: 'Luar Kota (Jatim)',
                        fee: order.transportFee || 300000,
                        feeLabel: formatRupiah(order.transportFee || 300000),
                        isOnSite: true,
                        isDestination: false,
                        icon: 'fa-solid fa-car-side',
                        badgeClass: 'badge-zone-intercity'
                    };
                } else if (order.transportZone === 'zona4' || order.isDestinationService) {
                    return {
                        id: 'zona4',
                        name: 'Zona 4 — Worldwide Destination Service',
                        short: 'Worldwide Destination',
                        fee: 0,
                        feeLabel: 'Ditanggung Klien 100% (Tiket & Hotel)',
                        isOnSite: true,
                        isDestination: true,
                        icon: 'fa-solid fa-plane-departure',
                        badgeClass: 'badge-zone-destination'
                    };
                }
            }

            // Fallback berbasis string locationType
            const locLower = (order.locationType || '').toLowerCase();
            if (locLower.includes('luar negeri') || locLower.includes('destination') || locLower.includes('luar pulau')) {
                return {
                    id: 'zona4',
                    name: 'Zona 4 — Worldwide Destination Service',
                    short: 'Worldwide Destination',
                    fee: 0,
                    feeLabel: 'Ditanggung Klien 100% (Tiket & Hotel)',
                    isOnSite: true,
                    isDestination: true,
                    icon: 'fa-solid fa-plane-departure',
                    badgeClass: 'badge-zone-destination'
                };
            } else if (locLower.includes('luar kota') || locLower.includes('jatim')) {
                return {
                    id: 'zona3',
                    name: 'Zona 3 — Luar Kota (Area Jawa Timur)',
                    short: 'Luar Kota (Jatim)',
                    fee: order.transportFee || 300000,
                    feeLabel: formatRupiah(order.transportFee || 300000),
                    isOnSite: true,
                    isDestination: false,
                    icon: 'fa-solid fa-car-side',
                    badgeClass: 'badge-zone-intercity'
                };
            } else if (locLower.includes('home') || locLower.includes('venue') || locLower.includes('hotel') || locLower.includes('rumah')) {
                return {
                    id: 'zona2',
                    name: 'Zona 2 — Home Service Malang & Batu',
                    short: 'Malang & Batu',
                    fee: order.transportFee || 50000,
                    feeLabel: formatRupiah(order.transportFee || 50000),
                    isOnSite: true,
                    isDestination: false,
                    icon: 'fa-solid fa-house-chimney',
                    badgeClass: 'badge-zone-local'
                };
            } else {
                return {
                    id: 'zona1',
                    name: 'Zona 1 — Studio Chira Malang',
                    short: 'Studio Malang',
                    fee: 0,
                    feeLabel: 'Bebas Transport (Rp 0)',
                    isOnSite: false,
                    isDestination: false,
                    icon: 'fa-solid fa-store',
                    badgeClass: 'badge-zone-studio'
                };
            }
        }

        // ==========================================================================
        // 6. MODAL LEMBAR KERJA KLIEN & AKSI STATUS REAL-TIME
        // ==========================================================================
        function openOrderDetailModal(bookingCode) {
            const scoped = getScopedOrders();
            const order = scoped.find(b => b.bookingCode === bookingCode);
            if (!order) {
                showToast("Akses Ditolak: Anda tidak memiliki wewenang untuk melihat detail pesanan ini.");
                return;
            }

            activeModalOrder = order;
            const modalBody = document.getElementById("orderDetailModalBody");
            const modalActions = document.getElementById("modalActionButtons");

            const zoneInfo = getOrderZoneInfo(order);

            // Tentukan query navigasi Google Maps yang presisi
            let navQuery = "";
            if (order.gpsCoordinates && order.gpsCoordinates.lat && order.gpsCoordinates.lng) {
                navQuery = `${order.gpsCoordinates.lat},${order.gpsCoordinates.lng}`;
            } else if (order.gmapsLink) {
                const match = order.gmapsLink.match(/[?&]q=([^&]+)/);
                if (match) {
                    navQuery = decodeURIComponent(match[1]);
                } else {
                    navQuery = order.address || "Kota Malang, Jawa Timur";
                }
            } else if (order.address) {
                navQuery = order.address;
            } else {
                navQuery = "Kota Malang, Jawa Timur";
            }

            const gmapsNavUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(navQuery)}`;
            const gmapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(navQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

            const dpVal = order.dpAmount || (order.totalPrice * 0.5) || 0;
            const remVal = order.remainingAmount || (order.totalPrice - dpVal) || 0;
            const baseMakeupTarif = order.totalPrice - (zoneInfo.fee || 0);

            modalBody.innerHTML = `
                <!-- BAGIAN 1: STATUS & KODE -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div>
                        <span style="font-size: 11px; color: var(--text-light);">Kode Reservasi:</span>
                        <div class="booking-id-pill" style="font-size: 15px; padding: 4px 10px;">${order.bookingCode}</div>
                    </div>
                    <div>
                        ${getStatusBadge(order.status)}
                    </div>
                </div>

                <!-- BAGIAN 2: DATA KLIEN -->
                <div class="detail-section">
                    <div class="section-heading"><i class="fa-solid fa-user"></i> Informasi Klien</div>
                    <div class="info-grid-2">
                        <div class="info-item">
                            <span>Nama Lengkap:</span>
                            <strong>${escapeHtml(order.custName)}</strong>
                        </div>
                        <div class="info-item">
                            <span>Nomor WhatsApp:</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <strong>${order.custPhone}</strong>
                                <a href="https://wa.me/62${cleanPhone(order.custPhone)}" target="_blank" style="color: var(--success); font-size: 13px;" title="Chat WhatsApp">
                                    <i class="fa-brands fa-whatsapp"></i> Hubungi
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">
                        <span style="font-size: 11px; color: var(--text-light);">Catatan Klien & Riwayat Alergi Kulit:</span>
                        <div class="notes-box">
                            <i class="fa-solid fa-notes-medical" style="color: var(--accent-pink); margin-right: 4px;"></i>
                            ${escapeHtml(order.custNotes || "Tidak ada catatan khusus / kulit normal.")}
                        </div>
                    </div>
                </div>

                <!-- BAGIAN 3: JADWAL & LOKASI -->
                <div class="detail-section">
                    <div class="section-heading"><i class="fa-solid fa-calendar-check"></i> Sesi & Lokasi Pengerjaan</div>
                    <div class="info-grid-2">
                        <div class="info-item">
                            <span>Layanan & Tipe:</span>
                            <strong>${escapeHtml(order.serviceName)} (${order.orderType === 'bundle' ? 'Bundle ' + order.paxCount + ' Pax' : '1 Pax'})</strong>
                        </div>
                        <div class="info-item">
                            <span>Penata Rias Ditugaskan:</span>
                            <strong style="color: var(--dark-pink);">${escapeHtml(order.staffName)}</strong>
                        </div>
                        <div class="info-item">
                            <span>Tanggal Acara:</span>
                            <strong>${formatDateIndo(order.selectedDate)}</strong>
                        </div>
                        <div class="info-item">
                            <span>Jam & Durasi:</span>
                            <strong>${order.startTime} - ${order.endTime} WIB (${order.totalDuration} menit)</strong>
                        </div>
                        <div class="info-item">
                            <span>Zona Layanan:</span>
                            <div style="margin-top: 3px;">
                                <span class="badge-zone ${zoneInfo.badgeClass}">
                                    <i class="${zoneInfo.icon}"></i> ${escapeHtml(zoneInfo.name)}
                                </span>
                            </div>
                        </div>
                        <div class="info-item">
                            <span>Biaya Transportasi:</span>
                            <strong style="color: ${zoneInfo.id === 'zona1' ? 'var(--success)' : (zoneInfo.isDestination ? '#2980b9' : 'var(--text-dark)')};">
                                ${zoneInfo.feeLabel}
                            </strong>
                        </div>
                    </div>

                    <div style="margin-top: 12px;">
                        <span style="font-size: 11px; color: var(--text-light);"><i class="fa-solid fa-location-dot" style="color: var(--dark-pink);"></i> Alamat Lengkap Acara:</span>
                        <div style="font-size: 13px; font-weight: 600; color: var(--text-dark); margin-top: 2px; line-height: 1.4;">
                            ${escapeHtml(order.address || (zoneInfo.id === 'zona1' ? "Studio Atelier Chira Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang" : "Alamat belum dilengkapi klien"))}
                        </div>

                        ${order.gpsCoordinates && order.gpsCoordinates.lat ? `
                        <div class="gps-coords-indicator">
                            <i class="fa-solid fa-crosshairs"></i> Titik GPS Terkunci: <strong>${order.gpsCoordinates.lat}, ${order.gpsCoordinates.lng}</strong> ${order.gpsCoordinates.accuracy ? `(Akurasi ±${order.gpsCoordinates.accuracy}m)` : ''}
                        </div>` : ''}

                        ${zoneInfo.isDestination ? `
                        <div class="destination-admin-alert">
                            <i class="fa-solid fa-plane-circle-check"></i> <strong>Worldwide Destination Service:</strong> Tiket perjalanan PP (pesawat/kereta), akomodasi hotel bintang 3+ (minimal 1 kamar), dan penjemputan bandara-venue ditanggung 100% oleh klien. Mohon segera hubungi WhatsApp pemesan di atas untuk tiket keberangkatan tim MUA.
                        </div>` : ''}

                        ${zoneInfo.isOnSite ? `
                        <div class="location-route-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <strong style="font-size: 12px; color: var(--text-dark); display: flex; align-items: center; gap: 6px;">
                                    <i class="fa-solid fa-map-location-dot" style="color: var(--accent-pink);"></i> Pratinjau Peta Lokasi Acara
                                </strong>
                                <span style="font-size: 10.5px; color: var(--text-light);">Navigasi GPS Staff MUA</span>
                            </div>
                            <div class="mini-map-preview-wrap">
                                <iframe 
                                    src="${gmapsEmbedUrl}" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="Peta Lokasi Acara Klien">
                                </iframe>
                            </div>
                            <a href="${gmapsNavUrl}" target="_blank" rel="noopener noreferrer" class="btn-gmaps-nav-large">
                                <i class="fa-solid fa-diamond-turn-right" style="font-size: 16px;"></i>
                                <span>Buka Navigasi Rute di Google Maps</span>
                            </a>
                        </div>` : `
                        <div style="margin-top: 10px; background: #faf4f5; border: 1px solid #ebd4cf; border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
                            <div>
                                <div style="font-size: 11px; color: var(--text-light);"><i class="fa-solid fa-store" style="color: var(--accent-pink);"></i> Sesi Studio:</div>
                                <strong style="font-size: 12.5px; color: var(--text-dark);">Studio Atelier Chira Malang</strong>
                                <div style="font-size: 11px; color: #776666;">Jl. Ijen No. 88, Oro-oro Dowo, Kec. Klojen, Kota Malang (Bebas Transport)</div>
                            </div>
                            <a href="https://www.google.com/maps/search/?api=1&query=Kota+Malang,+Jawa+Timur" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; background: #fff; color: var(--dark-pink); border: 1px solid var(--accent-pink); padding: 7px 12px; border-radius: 8px; font-size: 11.5px; font-weight: 600; text-decoration: none;">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Peta Studio
                            </a>
                        </div>`}
                    </div>
                </div>

                <!-- BAGIAN 4: RINCIAN KEUANGAN & DP 50% -->
                <div class="detail-section">
                    <div class="section-heading"><i class="fa-solid fa-receipt"></i> Rincian Finansial (Sistem DP 50%)</div>
                    <div class="finance-card">
                        <div class="finance-row">
                            <span>Harga Layanan Makeup:</span>
                            <strong>${formatRupiah(baseMakeupTarif > 0 ? baseMakeupTarif : order.totalPrice)}</strong>
                        </div>
                        <div class="finance-row">
                            <span>Biaya Transportasi (${zoneInfo.short}):</span>
                            <strong style="color: ${zoneInfo.id === 'zona1' ? 'var(--success)' : (zoneInfo.isDestination ? '#2980b9' : 'var(--text-dark)')};">
                                ${zoneInfo.feeLabel}
                            </strong>
                        </div>
                        <div class="finance-row" style="border-top: 1px dashed #ebd4cf; padding-top: 6px; margin-top: 4px;">
                            <span style="font-weight: 600;">Total Tarif Reservasi:</span>
                            <strong style="font-size: 14px; color: var(--text-dark);">${formatRupiah(order.totalPrice)}</strong>
                        </div>
                        <div class="finance-row" style="color: var(--success); font-weight: 600;">
                            <span><i class="fa-solid fa-qrcode"></i> DP 50% (Terbayar via QRIS):</span>
                            <span>${formatRupiah(dpVal)}</span>
                        </div>
                        <div class="finance-row" style="color: var(--text-light);">
                            <span><i class="fa-solid fa-clock-rotate-left"></i> Sisa Pelunasan di Hari H (50%):</span>
                            <span>${formatRupiah(remVal)}</span>
                        </div>
                        <div class="finance-row total">
                            <span>Status Finansial Sesi:</span>
                            <span style="color: ${order.status === 'Completed' ? 'var(--info)' : (order.status === 'Confirmed' ? 'var(--success)' : (order.status === 'Cancelled' ? 'var(--danger)' : 'var(--warning)'))};">
                                ${order.status === 'Completed' ? 'LUNAS 100%' : (order.status === 'Cancelled' ? 'DITOLAK / DIBATALKAN' : 'DP 50% Terverifikasi')}
                            </span>
                        </div>
                    </div>
                    ${order.status === 'Cancelled' ? `
                    <div class="admin-reject-alert-box">
                        <div style="font-weight: 700; margin-bottom: 4px;"><i class="fa-solid fa-circle-exclamation"></i> Alasan Penolakan / Pembatalan:</div>
                        <div>${escapeHtml(order.alasanPenolakan || "Dibatalkan oleh Admin Studio.")}</div>
                    </div>` : ''}
                </div>
            `;

            // Tombol aksi dinamis dalam modal
            modalActions.innerHTML = "";
            if (order.status !== "Confirmed" && order.status !== "Completed" && order.status !== "Cancelled") {
                const btnVerify = document.createElement("button");
                btnVerify.className = "btn-status-act btn-act-verify";
                btnVerify.innerHTML = `<i class="fa-solid fa-check-double"></i> Verifikasi DP (Kunci Slot)`;
                btnVerify.onclick = () => updateOrderStatus(order.bookingCode, "Confirmed");
                modalActions.appendChild(btnVerify);
            }

            if (order.status === "Confirmed") {
                const btnComplete = document.createElement("button");
                btnComplete.className = "btn-status-act btn-act-complete";
                btnComplete.innerHTML = `<i class="fa-solid fa-circle-check"></i> Selesaikan Sesi (Lunas Hari H)`;
                btnComplete.onclick = () => updateOrderStatus(order.bookingCode, "Completed");
                modalActions.appendChild(btnComplete);
            }

            if (order.status !== "Cancelled" && order.status !== "Completed") {
                const btnCancel = document.createElement("button");
                btnCancel.className = "btn-status-act btn-act-cancel";
                btnCancel.innerHTML = `<i class="fa-solid fa-xmark"></i> Tolak / Batalkan`;
                btnCancel.onclick = () => openRejectModal(order.bookingCode);
                modalActions.appendChild(btnCancel);
            }

            document.getElementById("orderDetailModal").style.display = "flex";
        }

        function closeDetailModal() {
            document.getElementById("orderDetailModal").style.display = "none";
            activeModalOrder = null;
        }

        let pendingRejectCode = null;

        function openRejectModal(bookingCode) {
            pendingRejectCode = bookingCode;
            const codeLabel = document.getElementById("rejectOrderCodeLabel");
            if (codeLabel) codeLabel.innerText = bookingCode;

            // Reset radio preset ke pilihan pertama & kosongkan textarea
            const firstRadio = document.querySelector('input[name="rejectPreset"]');
            if (firstRadio) firstRadio.checked = true;
            const customInput = document.getElementById("rejectCustomInput");
            if (customInput) customInput.value = "";

            document.getElementById("rejectReasonModal").style.display = "flex";
        }

        function closeRejectModal() {
            document.getElementById("rejectReasonModal").style.display = "none";
            pendingRejectCode = null;
        }

        function submitRejectOrder() {
            if (!pendingRejectCode) return;

            const selectedRadio = document.querySelector('input[name="rejectPreset"]:checked');
            const customText = (document.getElementById("rejectCustomInput").value || "").trim();
            let finalReason = "";

            if (selectedRadio && selectedRadio.value === "CUSTOM") {
                if (!customText) {
                    alert("Mohon tuliskan alasan penolakan kustom terlebih dahulu.");
                    document.getElementById("rejectCustomInput").focus();
                    return;
                }
                finalReason = customText;
            } else {
                const basePreset = selectedRadio ? selectedRadio.value : "Dana DP 50% tidak ditemukan di mutasi QRIS";
                finalReason = customText ? `${basePreset} — ${customText}` : basePreset;
            }

            const codeToReject = pendingRejectCode;
            closeRejectModal();
            updateOrderStatus(codeToReject, "Cancelled", finalReason);
        }

        function quickChangeStatus(bookingCode, newStatus) {
            if (newStatus === "Cancelled") {
                openRejectModal(bookingCode);
                return;
            }
            updateOrderStatus(bookingCode, newStatus);
        }

        function updateOrderStatus(bookingCode, newStatus, rejectReason) {
            const index = bookingsData.findIndex(b => b.bookingCode === bookingCode);
            if (index !== -1) {
                bookingsData[index].status = newStatus;
                if (newStatus === "Cancelled") {
                    bookingsData[index].alasanPenolakan = rejectReason || "Pesanan ditolak/dibatalkan oleh Admin Studio.";
                    bookingsData[index].rejectedAt = new Date().toISOString();
                    bookingsData[index].rejectedBy = (currentAdminSession && currentAdminSession.namaArtist) || "Admin Chira";
                }
                saveBookingsToStorage();
                updateKPIs();
                renderOrdersTable();
                renderDashboardOverview();
            renderScheduleTable();
                renderStaffCards();
                refreshEditorLiveStats();
                renderReportsSection();

                const msg = newStatus === "Cancelled"
                    ? `Pesanan ${bookingCode} ditolak & alasan tersimpan ke halaman Customer.`
                    : `Status pesanan ${bookingCode} diubah menjadi: ${newStatus}`;
                showToast(msg);
                closeDetailModal();
            }
        }

        // ==========================================================================
        // 6B. MODAL EDIT STATUS PESANAN & PEMBAYARAN (QRIS, RESERVASI, CANCEL REASON)
        // ==========================================================================
        let activeEditStatusOrder = null;

        function openEditOrderStatusModal(bookingCode) {
            const order = bookingsData.find(b => b.bookingCode === bookingCode);
            if (!order) return;
            activeEditStatusOrder = order;

            const summaryEl = document.getElementById("editStatusOrderSummary");
            if (summaryEl) {
                const dpNominal = order.dpAmount || (order.totalPrice * 0.5) || 0;
                summaryEl.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <div>
                            <span class="booking-id-pill" style="font-size: 13px;">${escapeHtml(order.bookingCode)}</span>
                            <span style="font-size: 11.5px; color: var(--text-light); margin-left: 8px;">${formatDateIndo(order.selectedDate)} • ${order.startTime || "08:00"} WIB</span>
                        </div>
                        <span style="font-weight: 700; color: var(--dark-pink); font-size: 13.5px;">${formatRupiah(order.totalPrice || 0)}</span>
                    </div>
                    <div style="font-size: 12.5px; color: var(--text-dark); line-height: 1.5;">
                        <strong>${escapeHtml(order.custName || "Klien")}</strong> (${escapeHtml(order.custPhone || "-")})<br>
                        ${escapeHtml(order.serviceName || "Layanan")} • Staff MUA: <strong style="color: var(--dark-pink);">${escapeHtml(order.staffName || "Staff")}</strong><br>
                        <small style="color: var(--success); font-weight: 600;">DP 50% QRIS: ${formatRupiah(dpNominal)}</small>
                    </div>
                `;
            }

            document.getElementById("editOrderBookingCode").value = order.bookingCode;

            // Status DP 50% QRIS
            let qrisVal = "DP 50% Terverifikasi Gateway";
            if (order.qrisStatus) {
                qrisVal = order.qrisStatus;
            } else if (order.status === "Completed") {
                qrisVal = "Lunas 100%";
            } else if (order.status === "Pending DP") {
                qrisVal = "Menunggu Pembayaran QRIS";
            }
            document.getElementById("editOrderQrisStatus").value = qrisVal;

            // Status Reservasi
            let resVal = "Confirmed";
            if (order.status === "Completed") {
                resVal = "Completed";
            } else if (order.status === "Cancelled") {
                resVal = "Cancelled";
            } else {
                resVal = "Confirmed";
            }
            document.getElementById("editOrderReservationStatus").value = resVal;

            // Alasan Pembatalan
            document.getElementById("editCancelReasonInput").value = order.alasanPenolakan || "";
            toggleCancelReasonVisibility();

            document.getElementById("editOrderStatusModal").style.display = "flex";
        }

        function closeEditOrderStatusModal() {
            const modal = document.getElementById("editOrderStatusModal");
            if (modal) modal.style.display = "none";
            activeEditStatusOrder = null;
        }

        function toggleCancelReasonVisibility() {
            const resSelect = document.getElementById("editOrderReservationStatus");
            const group = document.getElementById("editCancelReasonGroup");
            if (!resSelect || !group) return;
            group.style.display = (resSelect.value === "Cancelled") ? "block" : "none";
        }

        function saveEditedOrderStatus() {
            const code = document.getElementById("editOrderBookingCode").value;
            const qrisVal = document.getElementById("editOrderQrisStatus").value;
            const resVal = document.getElementById("editOrderReservationStatus").value;
            const cancelReason = document.getElementById("editCancelReasonInput").value.trim();

            const idx = bookingsData.findIndex(b => b.bookingCode === code);
            if (idx === -1) return;

            bookingsData[idx].qrisStatus = qrisVal;
            bookingsData[idx].status = resVal;

            if (resVal === "Cancelled") {
                bookingsData[idx].alasanPenolakan = cancelReason || "Dibatalkan oleh Admin Atelier.";
                bookingsData[idx].rejectedAt = new Date().toISOString();
                bookingsData[idx].rejectedBy = (currentAdminSession && currentAdminSession.namaArtist) || "Admin Chira";
            } else {
                if (qrisVal === "Lunas 100%" && resVal !== "Cancelled") {
                    bookingsData[idx].paidAmount = bookingsData[idx].totalPrice;
                    bookingsData[idx].remainingAmount = 0;
                } else if (qrisVal === "DP 50% Terverifikasi Gateway") {
                    const dp = bookingsData[idx].dpAmount || (bookingsData[idx].totalPrice * 0.5);
                    bookingsData[idx].paidAmount = dp;
                    bookingsData[idx].remainingAmount = (bookingsData[idx].totalPrice || 0) - dp;
                }
            }

            saveBookingsToStorage();
            updateKPIs();
            renderOrdersTable();
            renderDashboardOverview();
            renderScheduleTable();
            renderStaffCards();
            refreshEditorLiveStats();
            renderReportsSection();

            showToast(`Status pesanan ${code} berhasil diperbarui.`);
            closeEditOrderStatusModal();

            try {
                window.dispatchEvent(new Event("storage"));
            } catch (e) {}
        }

        // ==========================================================================
        // 7. HELPER GENERATOR PESANAN
        // ==========================================================================
        function generateSimulatedBooking() {
            const client = SIMULATION_CLIENT_POOL[Math.floor(Math.random() * SIMULATION_CLIENT_POOL.length)];
            const service = SIMULATION_SERVICE_POOL[Math.floor(Math.random() * SIMULATION_SERVICE_POOL.length)];
            const staff = isSuperAdminSession()
                ? staffProfiles[Math.floor(Math.random() * staffProfiles.length)]
                : (findLoggedInStaffProfile() || staffProfiles[0]);

            // Tanggal simulasi 10 s/d 45 hari ke depan
            const futureDays = Math.floor(10 + Math.random() * 35);
            const targetDate = new Date(Date.now() + futureDays * 86400000);
            const dateStr = targetDate.toISOString().split("T")[0];

            const hoursList = ["07:00", "08:30", "10:00", "13:00", "15:30"];
            const startTime = hoursList[Math.floor(Math.random() * hoursList.length)];
            const endTime = computeEndTime(startTime, service.duration);

            const randomCodeNum = Math.floor(1000 + Math.random() * 9000);
            const bookingCode = `CHR-${dateStr.replace(/-/g, '')}-${randomCodeNum}`;

            // Simulasi Zona Transportasi
            const zoneRoll = Math.random();
            let simZone = 'zona1';
            let simZoneLabel = 'Zona 1 — Studio Chira Malang';
            let simLocType = 'Studio Chira Make-Up (Malang)';
            let simTransportFee = 0;
            let simAddress = 'Studio Atelier Chira Malang — Jl. Ijen No. 88, Oro-oro Dowo, Klojen, Kota Malang';
            let simGmaps = 'https://maps.google.com/?q=Kota+Malang,+Jawa+Timur';
            let simGps = null;
            let simIsDest = false;

            if (zoneRoll > 0.65) {
                simZone = 'zona2';
                simZoneLabel = 'Zona 2 — Kota Malang & Batu';
                simLocType = 'Home Service Kota Malang & Batu';
                simTransportFee = 50000;
                simAddress = 'Jl. Soekarno Hatta No. ' + (Math.floor(Math.random() * 80) + 1) + ', Lowokwaru, Kota Malang';
                simGmaps = 'https://maps.google.com/?q=-7.9421,112.6152';
                simGps = { lat: -7.9421, lng: 112.6152, accuracy: 10 };
            } else if (zoneRoll > 0.40) {
                simZone = 'zona3';
                simZoneLabel = 'Zona 3 — Luar Kota (Jawa Timur)';
                simLocType = 'Luar Kota (Area Jawa Timur & Sekitarnya)';
                simTransportFee = 300000;
                simAddress = 'Hotel JW Marriott Surabaya, Jl. Embong Malang No. 85-89, Surabaya';
                simGmaps = 'https://maps.google.com/?q=JW+Marriott+Hotel+Surabaya';
                simGps = { lat: -7.2598, lng: 112.7381, accuracy: 14 };
            } else if (zoneRoll > 0.25) {
                simZone = 'zona4';
                simZoneLabel = 'Zona 4 — Worldwide Destination';
                simLocType = 'Luar Pulau / Luar Negeri (Worldwide Destination)';
                simTransportFee = 0;
                simIsDest = true;
                simAddress = 'The Mulia Resort & Villas, Nusa Dua, Bali';
                simGmaps = 'https://maps.google.com/?q=The+Mulia+Nusa+Dua+Bali';
                simGps = { lat: -8.8021, lng: 115.2212, accuracy: 18 };
            }

            const baseTarif = service.price * service.pax;
            const totalPrice = baseTarif + simTransportFee;
            const dpAmount = Math.round(totalPrice * 0.5);

            const newBooking = {
                bookingCode: bookingCode,
                custName: client.name,
                custPhone: client.phone,
                serviceKey: service.key,
                serviceName: service.name,
                orderType: service.type,
                paxCount: service.pax,
                selectedDate: dateStr,
                startTime: startTime,
                endTime: endTime,
                totalDuration: service.duration,
                staffName: staff.nama,
                transportZone: simZone,
                transportZoneLabel: simZoneLabel,
                transportFee: simTransportFee,
                isDestinationService: simIsDest,
                locationType: simLocType,
                address: simAddress,
                gmapsLink: simGmaps,
                gpsCoordinates: simGps,
                custNotes: client.notes,
                totalPrice: totalPrice,
                dpAmount: dpAmount,
                paidAmount: dpAmount,
                remainingAmount: totalPrice - dpAmount,
                paymentType: "DP 50%",
                status: "DP 50% Paid (Slot Locked)",
                timestamp: new Date().toISOString()
            };

            // Tambahkan di urutan pertama
            bookingsData.unshift(newBooking);
            saveBookingsToStorage();
            updateKPIs();
            renderOrdersTable();
            renderDashboardOverview();
            renderScheduleTable();
            renderStaffCards();
            renderReportsSection();

            showToast(`Pesanan Baru Berhasil Masuk! (${bookingCode} - ${client.name})`);
        }

        // ==========================================================================
        function renderArtistTimeline() {
            renderScheduleTable();
        }

        // 8. RENDER TABEL JADWAL MUA TERSTRUKTUR DENGAN FILTER & PAGINATION
        // ==========================================================================
        function renderScheduleTable() {
            const tbody = document.getElementById("scheduleTableBody");
            const artistSelect = document.getElementById("scheduleArtistFilter");
            const statusSelect = document.getElementById("scheduleStatusFilter");
            const searchInput = document.getElementById("scheduleSearchInput");
            if (!tbody) return;

            const isSuper = isSuperAdminSession();
            const loggedStaff = findLoggedInStaffProfile();
            const myName = (loggedStaff && loggedStaff.nama) || (currentAdminSession && currentAdminSession.namaArtist) || "";

            // Penguncian Dropdown Filter MUA sesuai Role
            if (!isSuper) {
                if (artistSelect) {
                    artistSelect.innerHTML = `<option value="${escapeHtml(myName)}">MUA: ${escapeHtml(myName)} (Terkunci)</option>`;
                    artistSelect.value = myName;
                    artistSelect.disabled = true;
                    artistSelect.style.opacity = "0.75";
                    artistSelect.style.cursor = "not-allowed";
                    artistSelect.style.background = "#fff2f4";
                }
            } else {
                if (artistSelect) {
                    artistSelect.disabled = false;
                    artistSelect.style.opacity = "1";
                    artistSelect.style.cursor = "default";
                    artistSelect.style.background = "#ffffff";
                    if (artistSelect.options.length <= 1 && staffProfiles.length > 0) {
                        artistSelect.innerHTML = '<option value="all">Semua Staff MUA (6 Artist)</option>';
                        staffProfiles.forEach(a => {
                            const opt = document.createElement("option");
                            opt.value = a.nama;
                            opt.innerText = a.nama;
                            artistSelect.appendChild(opt);
                        });
                    }
                }
            }

            const selectedArtist = isSuper ? (artistSelect ? artistSelect.value : "all") : myName;
            const selectedStatus = statusSelect ? statusSelect.value : "all";
            const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

            tbody.innerHTML = "";

            const scoped = getScopedOrders();

            // Filter non-cancelled bookings dari scoped
            const filtered = scoped.filter(item => {
                if (item.status === "Cancelled") return false;

                const matchArtist = selectedArtist === "all" || item.staffName === selectedArtist;

                let matchStatus = true;
                if (selectedStatus === "confirmed") matchStatus = item.status === "Confirmed";
                else if (selectedStatus === "pending") matchStatus = (item.status === "DP 50% Paid (Slot Locked)" || item.status === "Pending DP");
                else if (selectedStatus === "completed") matchStatus = item.status === "Completed";

                const matchSearch = 
                    (item.custName || "").toLowerCase().includes(keyword) ||
                    (item.serviceName || "").toLowerCase().includes(keyword) ||
                    (item.staffName || "").toLowerCase().includes(keyword) ||
                    (item.selectedDate || "").includes(keyword) ||
                    (item.bookingCode || "").toLowerCase().includes(keyword);

                return matchArtist && matchStatus && matchSearch;
            });

            const totalItems = filtered.length;
            const totalPages = Math.ceil(totalItems / schedulePageSize) || 1;
            if (scheduleCurrentPage > totalPages) scheduleCurrentPage = totalPages;
            if (scheduleCurrentPage < 1) scheduleCurrentPage = 1;

            if (totalItems === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="8">
                            <div class="empty-state">
                                <i class="fa-regular fa-calendar-xmark"></i>
                                <p>Tidak ada jadwal sesi MUA yang sesuai dengan filter yang dipilih.</p>
                            </div>
                        </td>
                    </tr>
                `;
                renderPagination("schedulePagination", scheduleCurrentPage, 1, 0, schedulePageSize, "setSchedulePage");
                return;
            }

            const startIdx = (scheduleCurrentPage - 1) * schedulePageSize;
            const paged = filtered.slice(startIdx, startIdx + schedulePageSize);

            paged.forEach((item, index) => {
                const tr = document.createElement("tr");
                const rowNumber = startIdx + index + 1;
                const statusBadge = getStatusBadge(item.status, item);
                const zoneInfo = getOrderZoneInfo(item);
                const staffObj = staffProfiles.find(s => s.nama === item.staffName) || {};

                tr.innerHTML = `
                    <td style="text-align: center; font-weight: 600; color: var(--text-light);">${rowNumber}</td>
                    <td>
                        <div><strong style="color: var(--text-dark); font-size: 13.5px;">${formatDateIndo(item.selectedDate)}</strong></div>
                        <div style="font-size: 11.5px; color: var(--dark-pink); font-weight: 600; margin-top: 2px;">
                            <i class="fa-regular fa-clock"></i> ${item.startTime || "08:00"} - ${item.endTime || "10:30"} WIB (${item.totalDuration || 60}m)
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <img src="${staffObj.fotoProfil || 'img/CHIRA_LOGO-removebg-preview.png'}" 
                                 alt="${escapeHtml(item.staffName)}" 
                                 style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1.5px solid #ebd4cf;"
                                 onerror="this.src='img/CHIRA_LOGO-removebg-preview.png'">
                            <div>
                                <strong style="font-size: 13px; color: var(--text-dark); display: block;">${escapeHtml(item.staffName || "Staff MUA")}</strong>
                                <small style="color: var(--text-light); font-size: 10.5px;">${escapeHtml(staffObj.spesialisasi || "MUA Artist")}</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="client-info">
                            <strong>${escapeHtml(item.custName || "Klien")}</strong>
                            <a href="https://wa.me/62${cleanPhone(item.custPhone)}" target="_blank" style="font-size: 11.5px; color: var(--success); font-weight: 600;">
                                <i class="fa-brands fa-whatsapp"></i> ${item.custPhone || "-"}
                            </a>
                        </div>
                    </td>
                    <td>
                        <strong>${escapeHtml(item.serviceName || "Layanan MUA")}</strong>
                        <div style="font-size: 11px; color: var(--text-light); margin-top: 2px;">${item.orderType === 'bundle' ? 'Bundle ' + item.paxCount + ' Pax' : '1 Pax'}</div>
                    </td>
                    <td>
                        <div><strong>${escapeHtml(item.locationType || "Studio Atelier")}</strong></div>
                        <span class="badge-zone ${zoneInfo.badgeClass}" style="font-size: 10px; padding: 2px 7px; margin-top: 3px; display: inline-flex;">
                            <i class="${zoneInfo.icon}"></i> ${zoneInfo.short}
                        </span>
                    </td>
                    <td>${statusBadge}</td>
                    <td style="text-align: center;">
                        <div class="action-btns-group" style="justify-content: center;">
                            <button type="button" class="btn-action-detail" title="Lihat Detail Lembar Kerja" onclick="openOrderDetailModal('${item.bookingCode}')">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btn-action-edit" title="Edit Status Pesanan &amp; Pembayaran" onclick="openEditOrderStatusModal('${item.bookingCode}')">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });

            renderPagination("schedulePagination", scheduleCurrentPage, totalPages, totalItems, schedulePageSize, "setSchedulePage");
        }

        // ==========================================================================
        // 8B. RENDER LAPORAN BISNIS & KEUANGAN CHIRA MUA
        // ==========================================================================
        // ==========================================================================
        // 8B. MODUL LAPORAN KEUANGAN & OPERASIONAL BISNIS LENGKAP
        // ==========================================================================
        function getServiceCategory(item) {
            const key = ((item.serviceKey || "") + " " + (item.serviceName || "")).toLowerCase();
            if (key.includes("wedding") || key.includes("bridal") || key.includes("pengantin") || key.includes("pre-wedding")) {
                return "Bridal";
            }
            if (key.includes("graduation") || key.includes("wisuda")) {
                return "Graduation";
            }
            if (key.includes("engagement") || key.includes("lamaran") || key.includes("sangjit")) {
                return "Engagement";
            }
            return "Party & Custom";
        }

        function getFilteredReportBookings() {
            let list = getScopedOrders().filter(b => b.status !== "Cancelled");

            const now = new Date();
            const currYear = now.getFullYear();
            const currMonth = now.getMonth();

            if (reportPeriod === "this_month") {
                list = list.filter(b => {
                    const dStr = b.selectedDate || (b.timestamp ? b.timestamp.slice(0, 10) : "");
                    if (!dStr) return true;
                    const parts = dStr.split("-");
                    if (parts.length >= 2) {
                        const yr = parseInt(parts[0], 10);
                        const mo = parseInt(parts[1], 10) - 1;
                        return yr === currYear && mo === currMonth;
                    }
                    return true;
                });
            } else if (reportPeriod === "last_month") {
                const lastMoDate = new Date(currYear, currMonth - 1, 1);
                const targetYr = lastMoDate.getFullYear();
                const targetMo = lastMoDate.getMonth();
                list = list.filter(b => {
                    const dStr = b.selectedDate || (b.timestamp ? b.timestamp.slice(0, 10) : "");
                    if (!dStr) return true;
                    const parts = dStr.split("-");
                    if (parts.length >= 2) {
                        const yr = parseInt(parts[0], 10);
                        const mo = parseInt(parts[1], 10) - 1;
                        return yr === targetYr && mo === targetMo;
                    }
                    return true;
                });
            } else if (reportPeriod === "year_2026") {
                list = list.filter(b => {
                    const dStr = b.selectedDate || (b.timestamp ? b.timestamp.slice(0, 10) : "");
                    return !dStr || dStr.startsWith("2026");
                });
            } else if (reportPeriod === "custom") {
                if (reportCustomStartDate) {
                    list = list.filter(b => {
                        const dStr = b.selectedDate || (b.timestamp ? b.timestamp.slice(0, 10) : "");
                        return !dStr || dStr >= reportCustomStartDate;
                    });
                }
                if (reportCustomEndDate) {
                    list = list.filter(b => {
                        const dStr = b.selectedDate || (b.timestamp ? b.timestamp.slice(0, 10) : "");
                        return !dStr || dStr <= reportCustomEndDate;
                    });
                }
            }

            return list;
        }

        function getReportPeriodLabel() {
            if (reportPeriod === "all") return "Semua Periode";
            if (reportPeriod === "this_month") return "Bulan Ini (November 2026)";
            if (reportPeriod === "last_month") return "Bulan Lalu (Oktober 2026)";
            if (reportPeriod === "year_2026") return "Tahun Berjalan 2026";
            if (reportPeriod === "custom") {
                const s = reportCustomStartDate || "...";
                const e = reportCustomEndDate || "...";
                return `Kustom: ${s} s/d ${e}`;
            }
            return "Semua Periode";
        }

        function handleReportPeriodChange() {
            const sel = document.getElementById("reportPeriodPreset");
            const customWrap = document.getElementById("reportCustomDateWrap");
            if (!sel) return;

            reportPeriod = sel.value;
            if (reportPeriod === "custom") {
                if (customWrap) customWrap.style.display = "flex";
            } else {
                if (customWrap) customWrap.style.display = "none";
                reportsCurrentPage = 1;
                renderReportsSection();
            }
        }

        function applyReportCustomDate() {
            const sInput = document.getElementById("reportStartDate");
            const eInput = document.getElementById("reportEndDate");
            reportCustomStartDate = sInput ? sInput.value : "";
            reportCustomEndDate = eInput ? eInput.value : "";
            reportsCurrentPage = 1;
            renderReportsSection();
        }

        function resetReportPeriodFilter() {
            reportPeriod = "all";
            reportCustomStartDate = "";
            reportCustomEndDate = "";
            const sel = document.getElementById("reportPeriodPreset");
            const customWrap = document.getElementById("reportCustomDateWrap");
            const sInput = document.getElementById("reportStartDate");
            const eInput = document.getElementById("reportEndDate");

            if (sel) sel.value = "all";
            if (customWrap) customWrap.style.display = "none";
            if (sInput) sInput.value = "";
            if (eInput) eInput.value = "";

            reportsCurrentPage = 1;
            renderReportsSection();
        }

        function setReportsPage(page) {
            reportsCurrentPage = page;
            const filtered = getFilteredReportBookings();
            renderReportTransactionsTable(filtered);
        }

        function renderReportKPIs(filtered) {
            // 1. Total Omzet Kotor: Akumulasi transaksi Confirmed & Completed
            const revBookings = filtered.filter(b => b.status === "Confirmed" || b.status === "Completed");
            let grossOmzet = 0;
            let transportOmzet = 0;

            revBookings.forEach(b => {
                const total = Number(b.totalPrice || 0);
                const zoneInfo = getOrderZoneInfo(b);
                const transport = Number(zoneInfo.fee || b.transportFee || 0);
                grossOmzet += total;
                transportOmzet += transport;
            });
            const serviceOmzet = Math.max(0, grossOmzet - transportOmzet);

            // 2. Kas Masuk DP 50% QRIS: Total DP valid masuk
            const dpEligible = filtered.filter(b => 
                b.status === "Confirmed" || 
                b.status === "Completed" || 
                b.status === "DP 50% Paid (Slot Locked)"
            );
            const totalDP = dpEligible.reduce((sum, b) => {
                const dp = b.paidAmount || b.dpAmount || (Number(b.totalPrice || 0) * 0.5) || 0;
                return sum + Number(dp);
            }, 0);

            // 3. Kas Masuk Pelunasan: Pelunasan 100% dari sesi Completed
            const completedBookings = filtered.filter(b => b.status === "Completed");
            const totalPelunasan = completedBookings.reduce((sum, b) => {
                const total = Number(b.totalPrice || 0);
                const dp = Number(b.dpAmount || b.paidAmount || (total * 0.5) || 0);
                const remaining = Math.max(0, total - dp);
                return sum + remaining;
            }, 0);

            // 4. Piutang Sisa Pelunasan: Tagihan 50% berjalan dari Confirmed
            const confirmedBookings = filtered.filter(b => b.status === "Confirmed");
            const totalPiutang = confirmedBookings.reduce((sum, b) => {
                const total = Number(b.totalPrice || 0);
                const dp = Number(b.paidAmount || b.dpAmount || (total * 0.5) || 0);
                const remaining = b.remainingAmount !== undefined ? Number(b.remainingAmount) : Math.max(0, total - dp);
                return sum + remaining;
            }, 0);

            // Ringkasan Finansial Tambahan
            const totalKasRiil = totalDP + totalPelunasan;
            const aov = revBookings.length > 0 ? Math.round(grossOmzet / revBookings.length) : 0;

            // Update DOM Elements
            const elGross = document.getElementById("repGrossOmzet");
            const elServ = document.getElementById("repServiceRev");
            const elTrans = document.getElementById("repTransportRev");
            const elDP = document.getElementById("repTotalDP");
            const elPelunasan = document.getElementById("repCompletedSettlement");
            const elCompCount = document.getElementById("repCompletedSessionsCount");
            const elPiutang = document.getElementById("repOutstandingBalance");
            const elConfCount = document.getElementById("repConfirmedOrdersCount");
            const elCashReal = document.getElementById("repTotalCashReal");
            const elAOV = document.getElementById("repAOV");
            const elActiveCount = document.getElementById("repActiveOrderCount");
            const elBadge = document.getElementById("reportActivePeriodBadge");

            if (elGross) elGross.innerText = formatRupiah(grossOmzet);
            if (elServ) elServ.innerText = formatRupiah(serviceOmzet);
            if (elTrans) elTrans.innerText = formatRupiah(transportOmzet);
            if (elDP) elDP.innerText = formatRupiah(totalDP);
            if (elPelunasan) elPelunasan.innerText = formatRupiah(totalPelunasan);
            if (elCompCount) elCompCount.innerText = `${completedBookings.length} Sesi Selesai (100% Lunas)`;
            if (elPiutang) elPiutang.innerText = formatRupiah(totalPiutang);
            if (elConfCount) elConfCount.innerText = `${confirmedBookings.length} Pesanan Berjalan (Hari-H)`;
            if (elCashReal) elCashReal.innerText = formatRupiah(totalKasRiil);
            if (elAOV) elAOV.innerText = formatRupiah(aov);
            if (elActiveCount) elActiveCount.innerText = `${filtered.length} Reservasi Aktif`;
            if (elBadge) elBadge.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${getReportPeriodLabel()}`;

            return {
                grossOmzet,
                serviceOmzet,
                transportOmzet,
                totalDP,
                totalPelunasan,
                totalPiutang,
                totalKasRiil,
                aov,
                completedCount: completedBookings.length,
                confirmedCount: confirmedBookings.length,
                activeCount: filtered.length
            };
        }

        function renderReportCharts(filtered) {
            const revBookings = filtered.filter(b => b.status === "Confirmed" || b.status === "Completed");

            // 1. Data per Kategori: Bridal, Graduation, Engagement, Party & Custom
            const categories = ["Bridal", "Graduation", "Engagement", "Party & Custom"];
            const catData = {
                "Bridal": { omzet: 0, count: 0 },
                "Graduation": { omzet: 0, count: 0 },
                "Engagement": { omzet: 0, count: 0 },
                "Party & Custom": { omzet: 0, count: 0 }
            };

            revBookings.forEach(b => {
                const cat = getServiceCategory(b);
                if (!catData[cat]) catData[cat] = { omzet: 0, count: 0 };
                catData[cat].omzet += Number(b.totalPrice || 0);
                catData[cat].count += 1;
            });

            const catOmzetVals = categories.map(c => catData[c].omzet);
            const catCountVals = categories.map(c => catData[c].count);

            // 2. Data per 6 Staff MUA
            const artistNames = [
                "Nadine Queen Reina",
                "Aurora Clarissa",
                "Draco Sebastian",
                "Lisa Anggraini",
                "Marco Pratama",
                "Thania Aurellia Putri"
            ];
            const artistColors = [
                "#d8738a",
                "#e89cae",
                "#8d3950",
                "#b47b86",
                "#d4a373",
                "#e29578"
            ];

            const artistData = {};
            artistNames.forEach(name => {
                artistData[name] = { omzet: 0, completed: 0, count: 0 };
            });

            filtered.forEach(b => {
                const name = b.staffName || "Nadine Queen Reina";
                const matched = artistNames.find(n => n.toLowerCase() === name.toLowerCase()) || "Nadine Queen Reina";
                if (b.status === "Confirmed" || b.status === "Completed") {
                    artistData[matched].omzet += Number(b.totalPrice || 0);
                    artistData[matched].count += 1;
                }
                if (b.status === "Completed") {
                    artistData[matched].completed += 1;
                }
            });

            const artistOmzetVals = artistNames.map(n => artistData[n].omzet);
            const artistCompletedVals = artistNames.map(n => artistData[n].completed);

            // CHART 1: BAR CHART PER KATEGORI (Chart.js)
            const ctxCat = document.getElementById("categoryRevenueChart");
            if (ctxCat && typeof Chart !== "undefined") {
                if (categoryChartInstance) {
                    categoryChartInstance.destroy();
                }
                categoryChartInstance = new Chart(ctxCat, {
                    type: 'bar',
                    data: {
                        labels: categories,
                        datasets: [
                            {
                                label: 'Omzet (Rp)',
                                data: catOmzetVals,
                                backgroundColor: 'rgba(216, 115, 138, 0.85)',
                                borderColor: '#c45872',
                                borderWidth: 1.5,
                                borderRadius: 6,
                                yAxisID: 'y'
                            },
                            {
                                label: 'Jumlah Sesi',
                                data: catCountVals,
                                backgroundColor: 'rgba(141, 57, 80, 0.85)',
                                borderColor: '#8d3950',
                                borderWidth: 1.5,
                                borderRadius: 6,
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: { boxWidth: 12, font: { family: 'Poppins', size: 11 } }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        if (context.datasetIndex === 0) {
                                            return ' ' + context.dataset.label + ': ' + formatRupiah(context.parsed.y);
                                        }
                                        return ' ' + context.dataset.label + ': ' + context.parsed.y + ' Sesi';
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    callback: function(val) {
                                        if (val >= 1000000) return (val / 1000000) + ' Jt';
                                        if (val >= 1000) return (val / 1000) + ' Rb';
                                        return val;
                                    },
                                    font: { family: 'Poppins', size: 10 }
                                },
                                grid: { color: 'rgba(235, 212, 207, 0.4)' }
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                grid: { drawOnChartArea: false },
                                ticks: {
                                    stepSize: 1,
                                    font: { family: 'Poppins', size: 10 }
                                }
                            },
                            x: {
                                grid: { display: false },
                                ticks: { font: { family: 'Poppins', size: 11, weight: '500' } }
                            }
                        }
                    }
                });
            }

            // CHART 2: KONTRIBUSI 6 MUA (JIKA SUPER ADMIN) ATAU KOMPOSISI FINANSIAL PRIBADI (JIKA STAFF MUA)
            const ctxArtist = document.getElementById("artistContributionChart");
            if (ctxArtist && typeof Chart !== "undefined") {
                if (artistChartInstance) {
                    artistChartInstance.destroy();
                }

                if (isSuperAdminSession()) {
                    const totalOmzetArtists = artistOmzetVals.reduce((a, b) => a + b, 0) || 1;

                    artistChartInstance = new Chart(ctxArtist, {
                        type: 'doughnut',
                        data: {
                            labels: artistNames.map(n => n.split(' ')[0]),
                            datasets: [{
                                data: artistOmzetVals.map(v => v > 0 ? v : 0.0001),
                                backgroundColor: artistColors,
                                borderWidth: 2,
                                borderColor: '#ffffff',
                                hoverOffset: 6
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        boxWidth: 12,
                                        font: { family: 'Poppins', size: 10.5 },
                                        generateLabels: function(chart) {
                                            const data = chart.data;
                                            return data.labels.map((lbl, i) => {
                                                const val = artistOmzetVals[i];
                                                const pct = Math.round((val / totalOmzetArtists) * 100);
                                                const comp = artistCompletedVals[i];
                                                return {
                                                    text: `${lbl} (${pct}%, ${comp} Done)`,
                                                    fillStyle: artistColors[i],
                                                    hidden: false,
                                                    index: i
                                                };
                                            });
                                        }
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            const idx = context.dataIndex;
                                            const fullName = artistNames[idx];
                                            const val = artistOmzetVals[idx];
                                            const pct = Math.round((val / totalOmzetArtists) * 100);
                                            const comp = artistCompletedVals[idx];
                                            return [
                                                ` ${fullName}`,
                                                ` Omzet: ${formatRupiah(val)} (${pct}%)`,
                                                ` Selesai: ${comp} Sesi`
                                            ];
                                        }
                                    }
                                }
                            },
                            cutout: '60%'
                        }
                    });
                } else {
                    // MODE STAFF MUA PRIBADI: Komposisi Finansial Pribadi
                    const stats = renderReportKPIs(filtered);
                    const personalLabels = ['DP 50% Klien', 'Pelunasan Kas', 'Piutang Hari-H'];
                    const personalData = [stats.totalDP, stats.totalPelunasan, stats.totalPiutang];
                    const personalColors = ['#1e8449', '#2874a6', '#b9770e'];
                    const totalPersonal = (stats.totalDP + stats.totalPelunasan + stats.totalPiutang) || 1;

                    artistChartInstance = new Chart(ctxArtist, {
                        type: 'doughnut',
                        data: {
                            labels: personalLabels,
                            datasets: [{
                                data: personalData.map(v => v > 0 ? v : 0.0001),
                                backgroundColor: personalColors,
                                borderWidth: 2,
                                borderColor: '#ffffff',
                                hoverOffset: 6
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        boxWidth: 12,
                                        font: { family: 'Poppins', size: 10.5 },
                                        generateLabels: function(chart) {
                                            const data = chart.data;
                                            return data.labels.map((lbl, i) => {
                                                const val = personalData[i];
                                                const pct = Math.round((val / totalPersonal) * 100);
                                                return {
                                                    text: `${lbl} (${pct}%)`,
                                                    fillStyle: personalColors[i],
                                                    hidden: false,
                                                    index: i
                                                };
                                            });
                                        }
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            const idx = context.dataIndex;
                                            const lbl = personalLabels[idx];
                                            const val = personalData[idx];
                                            const pct = Math.round((val / totalPersonal) * 100);
                                            return [
                                                ` ${lbl}`,
                                                ` Nominal: ${formatRupiah(val)} (${pct}%)`
                                            ];
                                        }
                                    }
                                }
                            },
                            cutout: '60%'
                        }
                    });
                }
            }
        }

        function renderReportTransactionsTable(filtered) {
            const tbody = document.getElementById("reportTransactionsTableBody");
            const countBadge = document.getElementById("reportTableCountBadge");
            if (!tbody) return;

            if (countBadge) countBadge.innerText = `${filtered.length} Transaksi`;

            const totalItems = filtered.length;
            const totalPages = Math.ceil(totalItems / reportsPageSize) || 1;

            if (reportsCurrentPage > totalPages) reportsCurrentPage = totalPages;
            if (reportsCurrentPage < 1) reportsCurrentPage = 1;

            if (totalItems === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="10">
                            <div class="empty-state">
                                <i class="fa-regular fa-folder-open"></i>
                                <p>Tidak ada transaksi pada periode yang dipilih.</p>
                            </div>
                        </td>
                    </tr>
                `;
                renderPagination("reportsPagination", reportsCurrentPage, 1, 0, reportsPageSize, "setReportsPage");
                return;
            }

            const startIdx = (reportsCurrentPage - 1) * reportsPageSize;
            const paged = filtered.slice(startIdx, startIdx + reportsPageSize);

            tbody.innerHTML = "";
            paged.forEach((item, index) => {
                const tr = document.createElement("tr");
                const rowNumber = startIdx + index + 1;
                const dpNominal = item.dpAmount || (item.totalPrice * 0.5) || 0;
                const remaining = (item.totalPrice || 0) - dpNominal;
                const statusBadge = getStatusBadge(item.status, item);
                const zoneInfo = getOrderZoneInfo(item);
                const category = getServiceCategory(item);

                const feeTrans = Number(zoneInfo.fee || item.transportFee || 0);
                const feeJasa = Math.max(0, Number(item.totalPrice || 0) - feeTrans);

                tr.innerHTML = `
                    <td style="text-align: center; font-weight: 600; color: var(--text-light);">${rowNumber}</td>
                    <td><span class="booking-id-pill">${item.bookingCode || "CHR-DEMO"}</span></td>
                    <td>
                        <div><strong>${formatDateIndo(item.selectedDate)}</strong></div>
                        <small style="color: var(--dark-pink); font-size: 11px;"><i class="fa-regular fa-clock"></i> ${item.startTime || "08:00"} WIB</small>
                    </td>
                    <td>
                        <div class="client-info">
                            <strong>${escapeHtml(item.custName || "Klien")}</strong>
                            <a href="https://wa.me/62${cleanPhone(item.custPhone)}" target="_blank" title="WhatsApp Klien">
                                <i class="fa-brands fa-whatsapp"></i> ${item.custPhone || "-"}
                            </a>
                        </div>
                    </td>
                    <td><strong style="color: var(--text-dark);">${escapeHtml(item.staffName || "Staff MUA")}</strong></td>
                    <td>
                        <div style="display:flex; flex-direction:column; gap:3px;">
                            <span class="service-badge"><i class="fa-solid fa-tag"></i> ${category}</span>
                            <span class="badge-zone ${zoneInfo.badgeClass}" style="font-size:10px; padding: 2px 7px;"><i class="${zoneInfo.icon}"></i> ${zoneInfo.short}</span>
                        </div>
                    </td>
                    <td>
                        <strong style="color: var(--text-dark);">${formatRupiah(item.totalPrice || 0)}</strong>
                        <div style="font-size: 10px; color: var(--text-light);">Jasa: ${formatRupiah(feeJasa)} | Trans: ${formatRupiah(feeTrans)}</div>
                    </td>
                    <td><strong style="color: var(--success); font-size: 13.5px;">${formatRupiah(dpNominal)}</strong></td>
                    <td><strong style="color: var(--warning); font-size: 13.5px;">${formatRupiah(remaining)}</strong></td>
                    <td>${statusBadge}</td>
                `;
                tbody.appendChild(tr);
            });

            renderPagination("reportsPagination", reportsCurrentPage, totalPages, totalItems, reportsPageSize, "setReportsPage");
        }

        function renderReportsSection() {
            const isSuper = isSuperAdminSession();
            const loggedStaff = findLoggedInStaffProfile();
            const staffName = (loggedStaff && loggedStaff.nama) || (currentAdminSession && currentAdminSession.namaArtist) || "Staff MUA";

            // Update UI Banner and Headers depending on role
            const bannerTitle = document.querySelector(".report-header-banner h3");
            const bannerSub = document.querySelector(".report-header-banner p");
            const btnPrint = document.querySelector(".btn-print-report");
            const kpiTitle1 = document.querySelector(".report-kpi-card:nth-child(1) .report-kpi-top h4");
            const kpiTitle2 = document.querySelector(".report-kpi-card:nth-child(2) .report-kpi-top h4");
            const kpiTitle3 = document.querySelector(".report-kpi-card:nth-child(3) .report-kpi-top h4");
            const kpiTitle4 = document.querySelector(".report-kpi-card:nth-child(4) .report-kpi-top h4");
            const chart2Header = document.querySelector(".report-charts-grid .chart-card:nth-child(2) .chart-header h3");
            const chart2Sub = document.querySelector(".report-charts-grid .chart-card:nth-child(2) .chart-header p");
            const chart2Badge = document.querySelector(".report-charts-grid .chart-card:nth-child(2) .chart-badge");

            if (isSuper) {
                if (bannerTitle) bannerTitle.innerHTML = `<i class="fa-solid fa-file-invoice-dollar" style="color: var(--dark-pink);"></i> Laporan Keuangan &amp; Operasional Bisnis`;
                if (bannerSub) bannerSub.innerText = "Rekapitulasi Omzet, Penerimaan DP 50% QRIS, Piutang Hari-H, & Kinerja 6 Artist Atelier";
                if (btnPrint) btnPrint.innerHTML = `<i class="fa-solid fa-print"></i> Cetak Laporan Keuangan (Struk / PDF)`;
                if (kpiTitle1) kpiTitle1.innerText = "Total Omzet Kotor (Gross)";
                if (kpiTitle2) kpiTitle2.innerText = "Kas Masuk DP 50% (QRIS)";
                if (kpiTitle3) kpiTitle3.innerText = "Kas Masuk Pelunasan";
                if (kpiTitle4) kpiTitle4.innerText = "Piutang Sisa Pelunasan";
                if (chart2Header) chart2Header.innerHTML = `<i class="fa-solid fa-chart-pie" style="color: var(--accent-pink);"></i> Kontribusi Finansial 6 Staff MUA`;
                if (chart2Sub) chart2Sub.innerText = "Proporsi omzet & jumlah sesi make-up selesai per artist";
                if (chart2Badge) chart2Badge.innerText = "6 Artists";
            } else {
                if (bannerTitle) bannerTitle.innerHTML = `<i class="fa-solid fa-file-invoice-dollar" style="color: var(--dark-pink);"></i> Laporan Pendapatan &amp; Gaji Pribadi`;
                if (bannerSub) bannerSub.innerText = `Rekapitulasi Total Jasa Rias Pribadi, DP Klien Masuk, & Pelunasan Selesai (${staffName})`;
                if (btnPrint) btnPrint.innerHTML = `<i class="fa-solid fa-print"></i> Cetak Slip Rekapitulasi Gaji & Pendapatan`;
                if (kpiTitle1) kpiTitle1.innerText = "Total Jasa Rias Pribadi";
                if (kpiTitle2) kpiTitle2.innerText = "Kas Masuk DP 50% Klien Saya";
                if (kpiTitle3) kpiTitle3.innerText = "Kas Masuk Pelunasan Selesai";
                if (kpiTitle4) kpiTitle4.innerText = "Piutang Sisa Pelunasan Hari-H";
                if (chart2Header) chart2Header.innerHTML = `<i class="fa-solid fa-chart-pie" style="color: var(--accent-pink);"></i> Komposisi Finansial Pribadi`;
                if (chart2Sub) chart2Sub.innerText = "Proporsi DP 50% Diterima, Kas Pelunasan Selesai, dan Sisa Hari-H";
                if (chart2Badge) chart2Badge.innerText = "Data Pribadi";
            }

            const filtered = getFilteredReportBookings();
            renderReportKPIs(filtered);
            renderReportCharts(filtered);
            renderReportTransactionsTable(filtered);
        }

        function prepareAndPrintReport() {
            const printEl = document.getElementById("printReportTemplate");
            if (!printEl) return;

            const isSuper = isSuperAdminSession();
            const filtered = getFilteredReportBookings();
            const stats = renderReportKPIs(filtered);

            // Current Admin
            const loggedStaff = findLoggedInStaffProfile();
            const adminName = (loggedStaff && loggedStaff.nama) || (currentAdminSession && currentAdminSession.namaArtist) || (isSuper ? "Awigya Zora" : "Nadine Queen Reina");
            const adminRole = (currentAdminSession && currentAdminSession.role) || (loggedStaff && loggedStaff.role) || (isSuper ? "Super Admin / Owner" : "Senior Bridal MUA");

            // Date formatting
            const now = new Date();
            const formattedNow = now.toLocaleDateString("id-ID", {
                day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
            });
            const dateOnlyNow = now.toLocaleDateString("id-ID", {
                day: "numeric", month: "long", year: "numeric"
            });
            const docRef = isSuper
                ? `CHR-FIN/${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${Math.floor(1000 + Math.random() * 9000)}`
                : `CHR-SLIP/${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${Math.floor(1000 + Math.random() * 9000)}`;

            let rowsHTML = "";
            filtered.forEach((item, idx) => {
                const dpNominal = item.dpAmount || (item.totalPrice * 0.5) || 0;
                const remaining = (item.totalPrice || 0) - dpNominal;
                const zoneInfo = getOrderZoneInfo(item);
                const category = getServiceCategory(item);
                const feeTrans = Number(zoneInfo.fee || item.transportFee || 0);
                const feeJasa = Math.max(0, Number(item.totalPrice || 0) - feeTrans);

                rowsHTML += `
                    <tr>
                        <td style="text-align: center;">${idx + 1}</td>
                        <td><strong>${item.bookingCode || "-"}</strong></td>
                        <td>${formatDateIndo(item.selectedDate)} (${item.startTime || "-"})</td>
                        <td>${escapeHtml(item.custName || "-")}<br><small style="color:#555;">${item.custPhone || ""}</small></td>
                        <td>${escapeHtml(item.staffName || "-")}</td>
                        <td>${category} (${zoneInfo.short})</td>
                        <td>${formatRupiah(feeJasa)}</td>
                        <td>${formatRupiah(feeTrans)}</td>
                        <td><strong>${formatRupiah(item.totalPrice || 0)}</strong></td>
                        <td style="color:#1e8449; font-weight:600;">${formatRupiah(dpNominal)}</td>
                        <td style="color:#b9770e; font-weight:600;">${formatRupiah(remaining)}</td>
                        <td>${item.status}</td>
                    </tr>
                `;
            });

            if (filtered.length === 0) {
                rowsHTML = `<tr><td colspan="12" style="text-align:center; padding:15px;">Tidak ada transaksi pada periode ini.</td></tr>`;
            }

            const docTitle = isSuper
                ? "LAPORAN RESMI KEUANGAN &amp; OPERASIONAL BISNIS"
                : "SLIP REKAPITULASI PENDAPATAN &amp; GAJI MUA PRIBADI";
            const summaryTitle = isSuper
                ? "RINGKASAN REALISASI KAS &amp; PENDAPATAN (E-RECEIPT AUDIT)"
                : "RINGKASAN PENDAPATAN &amp; BAGI HASIL JASA RIAS PRIBADI";
            const kpiGrossLabel = isSuper ? "Total Omzet Kotor (Gross)" : "Total Nilai Jasa Rias Pribadi";
            const kpiDPLabel = isSuper ? "Kas Masuk DP 50% QRIS" : "Kas Masuk DP 50% Klien Saya";
            const kpiPelunasanLabel = isSuper ? "Kas Masuk Pelunasan" : "Kas Masuk Pelunasan Selesai";
            const kpiPiutangLabel = isSuper ? "Piutang Sisa Pelunasan" : "Piutang Sisa Pelunasan Hari-H";

            const leftSignRole = isSuper ? "Bagian Keuangan &amp; Administrasi" : `Penerima / Staff MUA (${escapeHtml(adminName)})`;
            const leftSignNote = isSuper ? "[ Terverifikasi Sistem ]" : "[ Diterima &amp; Diverifikasi ]";

            printEl.innerHTML = `
                <div class="print-kop">
                    <img src="img/Favicon.png" class="print-kop-logo" alt="Logo CHIRA">
                    <div class="print-kop-text">
                        <h2>CHIRA MAKE-UP ATELIER MALANG</h2>
                        <p><strong>Professional Bridal, Graduation, Engagement &amp; Editorial Make-Up Studio</strong></p>
                        <p>Studio Atelier — Jl. Ijen No. 88, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119</p>
                        <p>WhatsApp: +62 889-8986-5380 | Email: management@chiramua.com | Website: chiramua.com</p>
                    </div>
                </div>

                <div class="print-meta-grid">
                    <div>
                        <strong>DOKUMEN:</strong> ${docTitle}<br>
                        <strong>NO. REFERENSI:</strong> ${docRef}<br>
                        <strong>STATUS AUDIT:</strong> Terverifikasi Sinkron Data Transaksi Atelier
                    </div>
                    <div style="text-align: right;">
                        <strong>PERIODE:</strong> ${getReportPeriodLabel()}<br>
                        <strong>WAKTU CETAK:</strong> ${formattedNow} WIB<br>
                        <strong>STAFF / AKUN:</strong> ${escapeHtml(adminName)} (${escapeHtml(adminRole)})
                    </div>
                </div>

                <div class="print-receipt-summary">
                    <div style="font-weight: 700; font-size: 11px; margin-bottom: 8px; border-bottom: 1px solid #ccc; padding-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
                        ${summaryTitle}
                    </div>
                    <div class="print-receipt-summary-grid">
                        <div>
                            <div style="font-size: 9px; color: #555; text-transform: uppercase;">${kpiGrossLabel}</div>
                            <div style="font-size: 13.5px; font-weight: 700;">${formatRupiah(stats.grossOmzet)}</div>
                            <div style="font-size: 8.5px; color: #777;">Jasa: ${formatRupiah(stats.serviceOmzet)} | Trans: ${formatRupiah(stats.transportOmzet)}</div>
                        </div>
                        <div>
                            <div style="font-size: 9px; color: #555; text-transform: uppercase;">${kpiDPLabel}</div>
                            <div style="font-size: 13.5px; font-weight: 700; color: #1e8449;">${formatRupiah(stats.totalDP)}</div>
                            <div style="font-size: 8.5px; color: #777;">QRIS Bank Terverifikasi Aman</div>
                        </div>
                        <div>
                            <div style="font-size: 9px; color: #555; text-transform: uppercase;">${kpiPelunasanLabel}</div>
                            <div style="font-size: 13.5px; font-weight: 700; color: #2874a6;">${formatRupiah(stats.totalPelunasan)}</div>
                            <div style="font-size: 8.5px; color: #777;">Pelunasan ${stats.completedCount} Sesi Selesai (Hari-H)</div>
                        </div>
                        <div>
                            <div style="font-size: 9px; color: #555; text-transform: uppercase;">${kpiPiutangLabel}</div>
                            <div style="font-size: 13.5px; font-weight: 700; color: #b9770e;">${formatRupiah(stats.totalPiutang)}</div>
                            <div style="font-size: 8.5px; color: #777;">Tagihan ${stats.confirmedCount} Pesanan Confirmed Hari-H</div>
                        </div>
                    </div>
                    <div style="margin-top: 10px; padding-top: 7px; border-top: 1px dashed #ccc; display: flex; justify-content: space-between; font-size: 10px;">
                        <span><strong>TOTAL KAS RIIL DITERIMA:</strong> ${formatRupiah(stats.totalKasRiil)}</span>
                        <span><strong>RERATA NILAI TRANSAKSI (AOV):</strong> ${formatRupiah(stats.aov)}</span>
                        <span><strong>TOTAL TRANSAKSI TERDATA:</strong> ${stats.activeCount} Sesi Layanan</span>
                    </div>
                </div>

                <table class="print-table">
                    <thead>
                        <tr>
                            <th style="width: 25px; text-align: center;">No</th>
                            <th>Kode Booking</th>
                            <th>Tanggal &amp; Jam Sesi</th>
                            <th>Klien &amp; Kontak</th>
                            <th>Staff MUA</th>
                            <th>Kategori &amp; Zona</th>
                            <th>Jasa Rias</th>
                            <th>Transport</th>
                            <th>Total Tagihan</th>
                            <th>DP 50% QRIS</th>
                            <th>Sisa Hari-H</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>

                <div class="print-signatures">
                    <div class="print-sign-col">
                        <div>Kota Malang, ${dateOnlyNow}</div>
                        <div style="font-weight: 600; margin-top: 2px;">Diverifikasi oleh:</div>
                        <div class="print-sign-space">
                            <span style="font-size: 10px; color: #888; font-style: italic;">${leftSignNote}</span>
                        </div>
                        <div class="print-sign-name">${leftSignRole}</div>
                        <div style="font-size: 9.5px; color: #666;">CHIRA Make-Up Atelier Malang</div>
                    </div>

                    <div class="print-sign-col">
                        <div>Kota Malang, ${dateOnlyNow}</div>
                        <div style="font-weight: 600; margin-top: 2px;">Disahkan oleh:</div>
                        <div class="print-sign-space">
                            <div style="display:inline-block; border: 1.5px solid #c45872; color: #c45872; border-radius: 6px; padding: 4px 8px; font-weight: 700; font-size: 10px; transform: rotate(-5deg); letter-spacing: 0.5px;">
                                CHIRA MAKE-UP<br>OFFICIAL ATELIER
                            </div>
                        </div>
                        <div class="print-sign-name">Awigya Zora</div>
                        <div style="font-size: 9.5px; color: #666;">Owner &amp; Super Admin CHIRA Atelier</div>
                    </div>
                </div>
            `;

            setTimeout(() => {
                window.print();
            }, 150);
        }

        // 9. RENDER TAB KELOLA 6 STAFF MUA (TERHUBUNG DENGAN chira_staff_profiles)
        // ==========================================================================
        function renderStaffCards() {
            const grid = document.getElementById("staffCardsGrid");
            if (!grid) return;
            grid.innerHTML = "";

            staffProfiles.forEach((artist, idx) => {
                const perf = calculateArtistPerformance(artist);
                const isDeactivated = artist.isActive === false || artist.status === "Nonaktif" || artist.status === "Dipecat";
                const isCuti = artist.status === "Cuti" || artist.status === "Cuti / Nonaktif Sementara";
                const isNadine = artist.id === "nadine" || (artist.email || "").toLowerCase() === "nadine@chiramua.com";

                let statusBadgeColor = "var(--dark-pink)";
                if (isDeactivated) statusBadgeColor = "#e74c3c";
                else if (isCuti) statusBadgeColor = "#d35400";
                else if (artist.status === "Ready on Duty") statusBadgeColor = "#27ae60";

                const card = document.createElement("div");
                card.className = "staff-admin-card" + (isDeactivated ? " staff-deactivated-card" : "");

                card.innerHTML = `
                    <div>
                        <div class="staff-card-top">
                            <img src="${artist.fotoProfil}" alt="${escapeHtml(artist.nama)}" onerror="this.src='img/CHIRA_LOGO-removebg-preview.png'" style="${isDeactivated ? 'filter: grayscale(80%); opacity: 0.75;' : ''}">
                            <div class="staff-card-meta">
                                <span class="role-pill">${escapeHtml(artist.role)}</span>
                                <h4>${escapeHtml(artist.nama)}</h4>
                                <p><i class="fa-solid fa-wand-magic-sparkles" style="color: var(--accent-pink);"></i> ${escapeHtml(artist.spesialisasi)}</p>
                                <p style="margin-top: 3px;"><i class="fa-regular fa-envelope"></i> ${escapeHtml(artist.email)}</p>
                            </div>
                        </div>

                        <div class="staff-stats-row">
                            <div>
                                <span>Klien Dilayani:</span>
                                <strong>${perf.totalClients}+</strong>
                            </div>
                            <div>
                                <span>Rating Dinamis:</span>
                                <strong style="color: var(--success);">${perf.ratingText}</strong>
                            </div>
                            <div>
                                <span>Status Kerja:</span>
                                <strong style="color: ${statusBadgeColor};">${escapeHtml(artist.status || 'Ready on Duty')}</strong>
                            </div>
                        </div>

                        ${isDeactivated ? `
                        <div style="margin-top: 12px; padding: 10px 12px; background: #fff5f5; border: 1px solid #fadbd8; border-radius: 8px; font-size: 11.5px; color: #78281f;">
                            <div><strong><i class="fa-solid fa-user-slash" style="color:#c0392b;"></i> Akun Dinonaktifkan:</strong> ${escapeHtml(artist.status)}</div>
                            <div style="margin-top: 3px;"><strong>Alasan:</strong> ${escapeHtml(artist.deactivationReason || 'Evaluasi Manajemen Atelier')}</div>
                            <div style="margin-top: 3px; font-size: 10.5px; color: #922b21;">Oleh ${escapeHtml(artist.deactivatedBy || 'Super Admin')} • ${artist.deactivationDate || '-'}</div>
                        </div>
                        ` : ''}
                    </div>

                    <div class="staff-card-actions" style="flex-wrap: wrap; gap: 8px; align-items: center; margin-top: 14px;">
                        <div style="display:flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                            ${!isDeactivated ? `
                            <div style="display: flex; align-items: center; gap: 4px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--text-light);"><i class="fa-solid fa-sliders"></i> Status:</label>
                                <select class="toggle-duty-select" onchange="changeStaffDutyStatus('${artist.id}', this.value)" style="padding: 5px 8px; border-radius: 14px; font-size: 11.5px; border: 1px solid #dcdde1; background: #fff; font-family: inherit; cursor: pointer;">
                                    <option value="Ready on Duty" ${artist.status === "Ready on Duty" ? "selected" : ""}>● Ready on Duty</option>
                                    <option value="Busy in Session" ${artist.status === "Busy in Session" ? "selected" : ""}>■ Busy in Session</option>
                                    <option value="Cuti / Nonaktif Sementara" ${(artist.status === "Cuti / Nonaktif Sementara" || artist.status === "Cuti") ? "selected" : ""}>▲ Cuti / Nonaktif Sementara</option>
                                </select>
                            </div>
                            ` : ''}

                            ${isDeactivated ? `
                            <button type="button" class="btn-reactivate-staff" onclick="reactivateStaff('${artist.id}')" style="background: #e8f8f5; color: #1e8449; border: 1px solid #a3e4d7; padding: 5px 12px; border-radius: 14px; font-size: 11.5px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px;">
                                <i class="fa-solid fa-user-check"></i> Aktifkan Kembali
                            </button>
                            ` : `
                            <button type="button" class="btn-deactivate-staff" onclick="openStaffDeactivationModal('${artist.id}')" style="background: #fdf2f2; color: #c0392b; border: 1px solid #fadbd8; padding: 5px 12px; border-radius: 14px; font-size: 11.5px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px;">
                                <i class="fa-solid fa-user-xmark"></i> Nonaktifkan / Pecat
                            </button>
                            `}
                        </div>

                        <a href="https://wa.me/6288989865380" target="_blank" style="font-size: 12px; color: var(--success); text-decoration: none; font-weight: 600; margin-left: auto;">
                            <i class="fa-brands fa-whatsapp"></i> Hubungi
                        </a>
                    </div>
                `;

                grid.appendChild(card);
            });
        }

        function changeStaffDutyStatus(artistId, newStatus) {
            const artist = staffProfiles.find(p => p.id === artistId);
            if (!artist) return;

            artist.status = newStatus;
            artist.isReady = (newStatus === "Ready on Duty");

            // Sinkronkan tag filter 'ready' untuk halaman publik staffmua.html
            const catTokens = (artist.category || "").split(/\s+/).filter(Boolean).filter(c => c !== "ready");
            if (artist.isReady) catTokens.push("ready");
            artist.category = catTokens.join(" ");

            saveStaffProfiles();
            renderStaffCards();
            showToast(`Status tugas ${artist.nama} diubah menjadi: ${newStatus}`);
        }

        function openStaffDeactivationModal(artistId) {
            const artist = staffProfiles.find(p => p.id === artistId);
            if (!artist) return;

            document.getElementById("deactivateTargetArtistId").value = artist.id;
            document.getElementById("deactivateTargetArtistName").innerText = artist.nama + " (" + artist.role + ")";
            document.getElementById("deactivateTargetArtistEmail").innerText = artist.email;
            document.getElementById("deactivationReasonInput").value = "";
            document.getElementById("deactivationActionType").value = "Nonaktif";

            const modal = document.getElementById("staffDeactivationModal");
            if (modal) modal.style.display = "flex";
        }

        function closeStaffDeactivationModal() {
            const modal = document.getElementById("staffDeactivationModal");
            if (modal) modal.style.display = "none";
        }

        function confirmStaffDeactivation() {
            const artistId = document.getElementById("deactivateTargetArtistId").value;
            const actionType = document.getElementById("deactivationActionType").value;
            const reason = document.getElementById("deactivationReasonInput").value.trim();

            if (!reason) {
                alert("Alasan penonaktifan/pemecatan wajib diisi demi transparansi dan akuntabilitas HR!");
                document.getElementById("deactivationReasonInput").focus();
                return;
            }

            const artist = staffProfiles.find(p => p.id === artistId);
            if (!artist) return;

            const now = new Date();
            const dateStr = now.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) + " WIB";

            artist.isActive = false;
            artist.status = actionType; // "Nonaktif" | "Dipecat" | "Cuti"
            artist.isReady = false;
            artist.deactivationReason = reason;
            artist.deactivationDate = dateStr;
            artist.deactivatedBy = (currentAdminSession && currentAdminSession.namaArtist) ? `${currentAdminSession.namaArtist} (Super Admin / Owner)` : "Awigya Zora (Super Admin / Owner)";

            // Sinkronkan tag filter category agar tidak lagi 'ready'
            const catTokens = (artist.category || "").split(/\s+/).filter(Boolean).filter(c => c !== "ready");
            artist.category = catTokens.join(" ");

            saveStaffProfiles();
            closeStaffDeactivationModal();
            renderStaffCards();
            showToast(`Staff ${artist.nama} berhasil dinonaktifkan (${actionType}). Akses login diblokir.`);
        }

        function reactivateStaff(artistId) {
            const artist = staffProfiles.find(p => p.id === artistId);
            if (!artist) return;

            if (confirm(`Apakah Anda yakin ingin mengaktifkan kembali akun staff ${artist.nama}?`)) {
                artist.isActive = true;
                artist.status = "Ready on Duty";
                artist.isReady = true;
                delete artist.deactivationReason;
                delete artist.deactivationDate;
                delete artist.deactivatedBy;

                const catTokens = (artist.category || "").split(/\s+/).filter(Boolean).filter(c => c !== "ready");
                catTokens.push("ready");
                artist.category = catTokens.join(" ");

                saveStaffProfiles();
                renderStaffCards();
                showToast(`Akun ${artist.nama} telah diaktifkan kembali sebagai Ready on Duty.`);
            }
        }

        // ==========================================================================
        // 9B. EDITOR PROFIL & 3 PORTOFOLIO TERBAIK (SINKRON KE staffmua.html)
        // ==========================================================================
        const PORTFOLIO_CATEGORIES = ["Wedding", "Graduation", "Engagement", "Birthday", "Photoshoot", "Custom"];
        let activeEditorArtistId = null;
        let editorDraftPhoto = "";
        let editorDraftPortfolio = [];

        function compressImageToBase64(file, maxWidth, quality, callback) {
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (evt) {
                const img = new Image();
                img.onload = function () {
                    const canvas = document.createElement("canvas");
                    let width = img.width;
                    let height = img.height;
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);
                    const compressed = canvas.toDataURL("image/jpeg", quality);
                    callback(compressed);
                };
                img.onerror = function () {
                    callback(evt.target.result);
                };
                img.src = evt.target.result;
            };
            reader.readAsDataURL(file);
        }

        function initProfileEditor() {
            const ownerNameEl = document.getElementById("editorOwnerName");
            const loggedStaff = findLoggedInStaffProfile() || staffProfiles[0];

            activeEditorArtistId = loggedStaff ? loggedStaff.id : staffProfiles[0].id;
            if (ownerNameEl && loggedStaff) {
                ownerNameEl.innerText = `${loggedStaff.nama} (${loggedStaff.role})`;
            }

            loadArtistIntoEditor(activeEditorArtistId);

            // Upload Foto Profil
            const btnUploadProfile = document.getElementById("btnTriggerProfileUpload");
            const fileInputProfile = document.getElementById("editProfilePhotoInput");
            const btnResetProfile = document.getElementById("btnResetProfilePhoto");

            if (btnUploadProfile && fileInputProfile) {
                btnUploadProfile.onclick = () => fileInputProfile.click();
                fileInputProfile.onchange = function () {
                    const file = this.files && this.files[0];
                    if (!file) return;
                    if (!file.type.startsWith("image/")) {
                        showToast("Mohon pilih file gambar (JPG/PNG/WebP).");
                        return;
                    }
                    compressImageToBase64(file, 520, 0.8, function (base64Data) {
                        editorDraftPhoto = base64Data;
                        document.getElementById("editProfilePhotoPreview").src = base64Data;
                        showToast("Pratinjau foto profil diperbarui. Klik 'Simpan Profil' untuk menerapkan.");
                    });
                    this.value = "";
                };
            }

            if (btnResetProfile) {
                btnResetProfile.onclick = function () {
                    const artist = staffProfiles.find(p => p.id === activeEditorArtistId);
                    const defArtist = DEFAULT_STAFF_PROFILES.find(p => p.id === activeEditorArtistId);
                    const fallbackImg = (defArtist && defArtist.fotoProfil) || (artist && artist.defaultFoto) || "img/MUA-STAFF-Nadine.png";
                    editorDraftPhoto = fallbackImg;
                    document.getElementById("editProfilePhotoPreview").src = fallbackImg;
                    showToast("Foto profil dikembalikan ke foto bawaan.");
                };
            }

            // Batalkan perubahan
            const btnReload = document.getElementById("btnReloadEditorData");
            if (btnReload) {
                btnReload.onclick = function () {
                    loadArtistIntoEditor(activeEditorArtistId);
                    showToast("Perubahan dibatalkan, data dimuat ulang.");
                };
            }

            // Submit Simpan Profil
            const form = document.getElementById("staffProfileEditorForm");
            if (form) {
                form.onsubmit = function (e) {
                    e.preventDefault();
                    saveArtistProfileFromEditor();
                };
            }
        }

        function loadArtistIntoEditor(artistId) {
            const artist = staffProfiles.find(p => p.id === artistId) || staffProfiles[0];
            if (!artist) return;

            activeEditorArtistId = artist.id;
            const selectEl = document.getElementById("editorArtistSelect");
            if (selectEl) selectEl.value = artist.id;

            editorDraftPhoto = artist.fotoProfil || artist.defaultFoto || "img/MUA-STAFF-Nadine.png";
            document.getElementById("editProfilePhotoPreview").src = editorDraftPhoto;
            document.getElementById("editPhotoArtistTitle").innerText = `Foto Profil — ${artist.nama}`;
            document.getElementById("editArtistName").value = artist.nama || "";
            document.getElementById("editArtistSpecialty").value = artist.spesialisasi || "";
            document.getElementById("editArtistExp").value = artist.pengalamanTahun || 5;
            document.getElementById("editArtistBio").value = artist.bio || "";

            // Siapkan tepat 3 slot portofolio terbaik
            const existing = Array.isArray(artist.portofolioTerbaik) ? artist.portofolioTerbaik : [];
            editorDraftPortfolio = [0, 1, 2].map(i => {
                const item = existing[i];
                if (item) {
                    return {
                        judul: item.judul || "",
                        kategori: item.kategori || "Wedding",
                        gambar: item.gambar || ""
                    };
                }
                return { judul: "", kategori: "Wedding", gambar: "" };
            });

            renderPortfolioEditorSlots();
            refreshEditorLiveStats();
        }

        function refreshEditorLiveStats() {
            const artist = staffProfiles.find(p => p.id === activeEditorArtistId);
            if (!artist) return;
            const perf = calculateArtistPerformance(artist);
            const clientsEl = document.getElementById("editorLiveClientsStat");
            const ratingEl = document.getElementById("editorLiveRatingStat");

            if (clientsEl) {
                clientsEl.innerHTML = `${perf.totalClients}+ ${escapeHtml(artist.baseKlienLabel || "Klien")} <i class="fa-solid fa-circle-check" style="color: var(--success); font-size: 13px;" title="Base ${artist.baseKlien} + ${perf.completedPax} Pax Completed"></i>`;
            }
            if (ratingEl) {
                ratingEl.innerHTML = `${perf.ratingText} <i class="fa-solid fa-star" style="color: #f39c12; font-size: 13px;" title="Selesai: ${perf.completedCount} | Batal: ${perf.cancelledCount}"></i>`;
            }
        }

        function renderPortfolioEditorSlots() {
            const container = document.getElementById("portfolioSlotsContainer");
            if (!container) return;
            container.innerHTML = "";

            editorDraftPortfolio.forEach((slot, idx) => {
                const card = document.createElement("div");
                card.className = "portfolio-slot-card";

                const thumbHTML = slot.gambar
                    ? `<img src="${slot.gambar}" alt="Portofolio ${idx + 1}" id="slotPreviewImg_${idx}">`
                    : `<div class="portfolio-slot-empty"><i class="fa-regular fa-image"></i>Belum ada foto</div>`;

                const categoryOptions = PORTFOLIO_CATEGORIES.map(cat =>
                    `<option value="${cat}" ${slot.kategori === cat ? "selected" : ""}>${cat}</option>`
                ).join("");

                card.innerHTML = `
                    <div class="portfolio-slot-thumb">
                        <span class="portfolio-slot-badge">Karya #${idx + 1}</span>
                        ${thumbHTML}
                    </div>
                    <div class="portfolio-slot-fields">
                        <div class="portfolio-slot-fields-row">
                            <div>
                                <label style="font-size: 11px; font-weight: 600; color: var(--text-light); display:block; margin-bottom:4px;">Judul Karya</label>
                                <input type="text" class="editor-form-control" style="padding: 8px 11px; font-size: 12.5px;" placeholder="Contoh: Soft Glam Bridal" value="${escapeHtml(slot.judul)}" oninput="updateDraftPortfolioField(${idx}, 'judul', this.value)">
                            </div>
                            <div>
                                <label style="font-size: 11px; font-weight: 600; color: var(--text-light); display:block; margin-bottom:4px;">Kategori Riasan</label>
                                <select class="editor-form-control" style="padding: 8px 10px; font-size: 12.5px;" onchange="updateDraftPortfolioField(${idx}, 'kategori', this.value)">
                                    ${categoryOptions}
                                </select>
                            </div>
                        </div>
                        <div class="portfolio-slot-btns">
                            <button type="button" class="btn-slot-upload" onclick="triggerPortfolioSlotUpload(${idx})">
                                <i class="fa-solid fa-upload"></i> ${slot.gambar ? "Ganti Foto" : "Unggah Foto"}
                            </button>
                            ${slot.gambar ? `
                            <button type="button" class="btn-slot-clear" onclick="clearPortfolioSlot(${idx})">
                                <i class="fa-solid fa-trash-can"></i> Hapus Slot
                            </button>` : ""}
                            <input type="file" id="slotFileInput_${idx}" accept="image/*" hidden onchange="handlePortfolioSlotFile(${idx}, this)">
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function updateDraftPortfolioField(slotIndex, field, value) {
            if (editorDraftPortfolio[slotIndex]) {
                editorDraftPortfolio[slotIndex][field] = value;
            }
        }

        function triggerPortfolioSlotUpload(slotIndex) {
            const input = document.getElementById(`slotFileInput_${slotIndex}`);
            if (input) input.click();
        }

        function handlePortfolioSlotFile(slotIndex, inputEl) {
            const file = inputEl.files && inputEl.files[0];
            if (!file) return;
            if (!file.type.startsWith("image/")) {
                showToast("Mohon pilih file gambar (JPG/PNG/WebP).");
                return;
            }
            compressImageToBase64(file, 640, 0.78, function (base64Data) {
                if (editorDraftPortfolio[slotIndex]) {
                    editorDraftPortfolio[slotIndex].gambar = base64Data;
                    if (!editorDraftPortfolio[slotIndex].judul.trim()) {
                        editorDraftPortfolio[slotIndex].judul = `Karya Terbaik #${slotIndex + 1}`;
                    }
                    renderPortfolioEditorSlots();
                    showToast(`Foto Karya #${slotIndex + 1} siap disimpan.`);
                }
            });
            inputEl.value = "";
        }

        function clearPortfolioSlot(slotIndex) {
            if (editorDraftPortfolio[slotIndex]) {
                editorDraftPortfolio[slotIndex] = { judul: "", kategori: "Wedding", gambar: "" };
                renderPortfolioEditorSlots();
                showToast(`Slot Karya #${slotIndex + 1} dikosongkan.`);
            }
        }

        function saveArtistProfileFromEditor() {
            const idx = staffProfiles.findIndex(p => p.id === activeEditorArtistId);
            if (idx === -1) return;

            const oldName = staffProfiles[idx].nama;
            const newName = (document.getElementById("editArtistName").value || "").trim() || oldName;
            const newSpec = (document.getElementById("editArtistSpecialty").value || "").trim() || staffProfiles[idx].spesialisasi;
            const newExp = Math.max(1, parseInt(document.getElementById("editArtistExp").value, 10) || 1);
            const newBio = (document.getElementById("editArtistBio").value || "").trim() || staffProfiles[idx].bio;

            // Saring hanya slot portofolio yang memiliki gambar (maks 3)
            const cleanedPortfolio = editorDraftPortfolio
                .filter(slot => slot && slot.gambar)
                .slice(0, 3)
                .map((slot, i) => ({
                    judul: (slot.judul || "").trim() || `Karya Terbaik #${i + 1}`,
                    kategori: slot.kategori || "Wedding",
                    gambar: slot.gambar
                }));

            staffProfiles[idx] = {
                ...staffProfiles[idx],
                nama: newName,
                spesialisasi: newSpec,
                specialtyTag: newSpec.replace(/\s*Specialist$/i, "").trim() || newSpec,
                pengalamanTahun: newExp,
                bio: newBio,
                fotoProfil: editorDraftPhoto || staffProfiles[idx].fotoProfil,
                portofolioTerbaik: cleanedPortfolio
            };

            if (!saveStaffProfiles()) return;

            // Jika artist yang diedit adalah admin yang sedang login, sinkronkan chira_admin_session & header
            if (currentAdminSession && (
                (currentAdminSession.email || "").toLowerCase() === (staffProfiles[idx].email || "").toLowerCase() ||
                currentAdminSession.namaArtist === oldName
            )) {
                currentAdminSession.namaArtist = newName;
                try {
                    localStorage.setItem("chira_admin_session", JSON.stringify(currentAdminSession));
                    localStorage.setItem("chira_user_name", newName);
                } catch (e) {}
            }

            // Sinkronkan nama baru di bookingsData jika nama berubah
            if (oldName !== newName) {
                let bookingUpdated = false;
                bookingsData.forEach(b => {
                    if (b.staffName === oldName) {
                        b.staffName = newName;
                        bookingUpdated = true;
                    }
                });
                if (bookingUpdated) {
                    saveBookingsToStorage();
                    renderOrdersTable();
                }
            }

            // Perbarui semua tampilan di dashboard
            syncAdminHeaderProfile();
            renderStaffCards();
            renderArtistTimeline();

            // Refresh dropdown label selector
            const selectEl = document.getElementById("editorArtistSelect");
            if (selectEl) {
                const opt = selectEl.querySelector(`option[value="${staffProfiles[idx].id}"]`);
                if (opt) opt.textContent = `${newName} (${staffProfiles[idx].role})`;
            }
            document.getElementById("editPhotoArtistTitle").innerText = `Foto Profil — ${newName}`;

            showToast(`Profil ${newName} berhasil disimpan & disinkronkan ke Staff MUA!`);
        }

        function switchTab(targetId) {
            const isSuper = isSuperAdminSession();
            // Pemisahan hak akses ketat: Kelola 6 Profil MUA HANYA BISA DIAKSES JIKA SUPER ADMIN
            if (targetId === "tabStaff" && !isSuper) {
                showToast("Akses Terbatas: Menu Kelola Profil Staff hanya dapat diakses oleh Super Admin!");
                targetId = "tabDashboard";
            }
            if (targetId === "tabProfileEditor" && isSuper) {
                showToast("Super Admin adalah manajemen studio dan tidak memiliki profil penata rias.");
                targetId = "tabDashboard";
            }

            const navItems = document.querySelectorAll(".sidebar-nav-item");
            navItems.forEach(t => {
                if (t.getAttribute("data-tab") === targetId) t.classList.add("active");
                else t.classList.remove("active");
            });

            document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add("active");

            updateTopbarTitle(targetId);

            if (targetId === "tabDashboard") {
                renderDashboardOverview();
            } else if (targetId === "tabOrders") {
                renderOrdersTable();
            } else if (targetId === "tabTimeline") {
                renderScheduleTable();
            } else if (targetId === "tabStaff") {
                renderStaffCards();
            } else if (targetId === "tabReports") {
                renderReportsSection();
            } else if (targetId === "tabProfileEditor") {
                refreshEditorLiveStats();
            }

            closeMobileSidebar();
        }

        function updateTopbarTitle(targetId) {
            const titleEl = document.getElementById("topbarPageTitle");
            const breadcrumbEl = document.getElementById("topbarBreadcrumb");
            if (!titleEl || !breadcrumbEl) return;

            switch (targetId) {
                case "tabDashboard":
                    titleEl.innerText = "Dashboard Overview";
                    breadcrumbEl.innerText = "Ringkasan Eksekutif, KPI Utama & Tren Reservasi";
                    break;
                case "tabOrders":
                    titleEl.innerText = "Daftar Reservasi Masuk";
                    breadcrumbEl.innerText = "Manajemen Pemesanan, Status Verifikasi DP 50% & Jadwal";
                    break;
                case "tabTimeline":
                    titleEl.innerText = "Tabel Jadwal Booking & Penugasan MUA";
                    breadcrumbEl.innerText = "Pemetaan Sesi Rias Terkunci Seluruh Artist & Deteksi Bentrok";
                    break;
                case "tabStaff":
                    titleEl.innerText = "Kelola 6 Profil MUA";
                    breadcrumbEl.innerText = "Whitelist Akun, Status Tugas & Manajemen Profil Publik";
                    break;
                case "tabReports":
                    titleEl.innerText = isSuperAdminSession() ? "Laporan Bisnis & Keuangan" : "Laporan Pendapatan & Bagi Hasil Pribadi";
                    breadcrumbEl.innerText = isSuperAdminSession() ? "Rekapitulasi Omset, Penerimaan Kas DP QRIS & Analitik Layanan" : "Rekapitulasi Jasa Rias, Realisasi Kas DP & Pelunasan Klien Pribadi";
                    break;
                case "tabProfileEditor":
                    titleEl.innerText = "Kelola Profil & Portofolio Saya";
                    breadcrumbEl.innerText = "Edit Foto Profil, Gelar Spesialisasi, Bio & 3 Karya Terbaik";
                    break;
            }
        }

        function toggleMobileSidebar() {
            const layout = document.getElementById("adminAppLayout");
            if (layout) layout.classList.toggle("sidebar-open");
        }

        function closeMobileSidebar() {
            const layout = document.getElementById("adminAppLayout");
            if (layout) layout.classList.remove("sidebar-open");
        }

        function openProfileEditorFor(artistId) {
            switchTab("tabProfileEditor");
            loadArtistIntoEditor(artistId);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        function computeEndTime(startHHMM, addMinutes) {
            const parts = (startHHMM || "08:00").split(":");
            let h = parseInt(parts[0], 10);
            let m = parseInt(parts[1], 10);
            let totalM = (h * 60) + m + (addMinutes || 60);
            let endH = Math.floor(totalM / 60) % 24;
            let endM = totalM % 60;
            const pad = (n) => String(n).padStart(2, '0');
            return `${pad(endH)}:${pad(endM)}`;
        }

        function formatRupiah(number) {
            return "Rp " + Number(number || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        function formatDateIndo(dateStr) {
            if (!dateStr) return "-";
            const parts = dateStr.split("-");
            if (parts.length !== 3) return dateStr;
            const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
            const d = parseInt(parts[2], 10);
            const m = months[parseInt(parts[1], 10) - 1];
            const y = parts[0];
            return `${d} ${m} ${y}`;
        }

        function cleanPhone(phone) {
            if (!phone) return "88989865380";
            return phone.replace(/^0+/, '').replace(/\D/g, '');
        }

        function escapeHtml(str) {
            if (!str) return "";
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }

        function showToast(msg) {
            const toast = document.getElementById("adminToast");
            const toastMsg = document.getElementById("toastMsg");
            if (toast && toastMsg) {
                toastMsg.innerText = msg;
                toast.style.display = "flex";
                setTimeout(() => {
                    toast.style.display = "none";
                }, 3200);
            }
        }

        // DOM READY SETUP
        document.addEventListener("DOMContentLoaded", function() {
            // A. Jalankan Migrasi Otomatis Data Lama & Muat Master Profil 6 Staff
            migrateLegacyNadineData();
            loadStaffProfiles();

            // B. Cek Hak Akses Admin
            if (!checkAdminAuth()) return;

            // ======================================================================
            // 1. DAFTARKAN EVENT LISTENER NAVIGASI & HEADER DAHULU (DEFENSIVE GUARDS)
            // Agar navigasi Sidebar dan Dropdown selalu aktif tanpa terhambat data
            // ======================================================================

            // Navigasi Sidebar Utama (Switch Tab)
            const sidebarItems = document.querySelectorAll(".sidebar-nav-item");
            sidebarItems.forEach(btn => {
                btn.addEventListener("click", function() {
                    const targetId = this.getAttribute("data-tab");
                    if (targetId) switchTab(targetId);
                });
            });

            // Mobile Sidebar Toggle & Backdrop
            const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
            const sidebarBackdrop = document.getElementById("sidebarBackdrop");
            if (sidebarToggleBtn) sidebarToggleBtn.addEventListener("click", toggleMobileSidebar);
            if (sidebarBackdrop) sidebarBackdrop.addEventListener("click", closeMobileSidebar);

            // Header Dropdown: Kelola Profil Admin
            const profileWrap = document.getElementById("adminProfileDropdownWrap");
            const profileTrigger = document.getElementById("adminProfileTrigger");
            if (profileTrigger && profileWrap) {
                profileTrigger.addEventListener("click", function(e) {
                    e.stopPropagation();
                    profileWrap.classList.toggle("open");
                });

                document.addEventListener("click", function(e) {
                    if (!profileWrap.contains(e.target)) {
                        profileWrap.classList.remove("open");
                    }
                });
            }

            // Dropdown Menu: "Kelola Profil Saya"
            const btnEditMyProfile = document.getElementById("btnDropdownEditMyProfile");
            if (btnEditMyProfile) {
                btnEditMyProfile.addEventListener("click", function() {
                    if (profileWrap) profileWrap.classList.remove("open");
                    if (isSuperAdminSession()) {
                        showToast("Super Admin adalah manajemen studio dan tidak memiliki profil penata rias.");
                        return;
                    }
                    const loggedStaff = findLoggedInStaffProfile();
                    const targetArtistId = loggedStaff ? loggedStaff.id : "nadine";
                    openProfileEditorFor(targetArtistId);
                });
            }

            // Header Dropdown: Lihat Website Publik
            const publicDropdownWrap = document.getElementById("publicNavDropdownWrapper");
            const btnPublicSite = document.getElementById("btnPublicSiteDropdown");
            if (btnPublicSite && publicDropdownWrap) {
                btnPublicSite.addEventListener("click", function(e) {
                    e.stopPropagation();
                    publicDropdownWrap.classList.toggle("active");
                });

                document.addEventListener("click", function(e) {
                    if (!publicDropdownWrap.contains(e.target)) {
                        publicDropdownWrap.classList.remove("active");
                    }
                });
            }

            // Header Button: Toggle Status Tugas Sendiri (Duty)
            const dutyToggleBtn = document.getElementById("dutyToggleBtn");
            if (dutyToggleBtn) {
                dutyToggleBtn.addEventListener("click", function() {
                    const dutyText = document.getElementById("dutyText");
                    if (!dutyText) return;
                    const isReady = dutyText.innerText === "Ready on Duty";
                    dutyText.innerText = isReady ? "Busy in Session" : "Ready on Duty";
                    this.classList.toggle("busy", isReady);
                    showToast("Status tugas Anda: " + dutyText.innerText);
                });
            }

            // Tombol Logout Admin
            const logoutAdminBtn = document.getElementById("logoutAdminBtn");
            if (logoutAdminBtn) {
                logoutAdminBtn.addEventListener("click", function() {
                    if (confirm("Apakah Anda yakin ingin keluar dari Dashboard Operasional Admin?")) {
                        localStorage.removeItem("chira_admin_session");
                        localStorage.removeItem("chira_login_status");
                        window.location.href = "admin-login.html";
                    }
                });
            }

            // ======================================================================
            // 2. DAFTARKAN EVENT LISTENER FILTER, MODAL & ACTIONS DENGAN NULL-CHECKS
            // ======================================================================

            // Search & Filter Input Pesanan
            const orderSearchInput = document.getElementById("orderSearchInput");
            if (orderSearchInput) {
                orderSearchInput.addEventListener("input", function() {
                    ordersCurrentPage = 1;
                    renderOrdersTable();
                });
            }

            const statusFilterSelect = document.getElementById("statusFilterSelect");
            if (statusFilterSelect) {
                statusFilterSelect.addEventListener("change", function() {
                    ordersCurrentPage = 1;
                    renderOrdersTable();
                });
            }

            // Search & Filter Jadwal MUA
            const scheduleSearchInput = document.getElementById("scheduleSearchInput");
            if (scheduleSearchInput) {
                scheduleSearchInput.addEventListener("input", function() {
                    scheduleCurrentPage = 1;
                    renderScheduleTable();
                });
            }

            const scheduleArtistFilter = document.getElementById("scheduleArtistFilter");
            if (scheduleArtistFilter) {
                scheduleArtistFilter.addEventListener("change", function() {
                    scheduleCurrentPage = 1;
                    renderScheduleTable();
                });
            }

            const scheduleStatusFilter = document.getElementById("scheduleStatusFilter");
            if (scheduleStatusFilter) {
                scheduleStatusFilter.addEventListener("change", function() {
                    scheduleCurrentPage = 1;
                    renderScheduleTable();
                });
            }


            // Tombol Reset Demo Awal
            const btnResetDemo = document.getElementById("btnResetDemo");
            if (btnResetDemo) {
                btnResetDemo.addEventListener("click", function() {
                    if (confirm("Pulihkan daftar pesanan ke 4 data demonstrasi awal?")) {
                        bookingsData = [...INITIAL_DEMO_BOOKINGS];
                        saveBookingsToStorage();
                        ordersCurrentPage = 1;
                        scheduleCurrentPage = 1;
                        renderDashboardOverview();
                        renderOrdersTable();
                        renderScheduleTable();
                        renderStaffCards();
                        refreshEditorLiveStats();
                        showToast("Data demonstrasi awal berhasil dipulihkan!");
                    }
                });
            }

            // Tutup Modal Detail Pesanan
            const closeDetailModalBtn = document.getElementById("closeDetailModalBtn");
            if (closeDetailModalBtn) closeDetailModalBtn.addEventListener("click", closeDetailModal);

            const closeModalBottomBtn = document.getElementById("closeModalBottomBtn");
            if (closeModalBottomBtn) closeModalBottomBtn.addEventListener("click", closeDetailModal);

            const orderDetailModal = document.getElementById("orderDetailModal");
            if (orderDetailModal) {
                orderDetailModal.addEventListener("click", function(e) {
                    if (e.target === this) closeDetailModal();
                });
            }

            // Modal Alasan Penolakan
            const closeRejectModalBtn = document.getElementById("closeRejectModalBtn");
            if (closeRejectModalBtn) closeRejectModalBtn.addEventListener("click", closeRejectModal);

            const cancelRejectModalBtn = document.getElementById("cancelRejectModalBtn");
            if (cancelRejectModalBtn) cancelRejectModalBtn.addEventListener("click", closeRejectModal);

            const confirmRejectOrderBtn = document.getElementById("confirmRejectOrderBtn");
            if (confirmRejectOrderBtn) confirmRejectOrderBtn.addEventListener("click", submitRejectOrder);

            const rejectReasonModal = document.getElementById("rejectReasonModal");
            if (rejectReasonModal) {
                rejectReasonModal.addEventListener("click", function(e) {
                    if (e.target === this) closeRejectModal();
                });
            }

            // Modal Edit Status Pesanan & Pembayaran
            const closeEditStatusModalBtn = document.getElementById("closeEditStatusModalBtn");
            if (closeEditStatusModalBtn) closeEditStatusModalBtn.addEventListener("click", closeEditOrderStatusModal);

            const btnCancelEditStatusModal = document.getElementById("btnCancelEditStatusModal");
            if (btnCancelEditStatusModal) btnCancelEditStatusModal.addEventListener("click", closeEditOrderStatusModal);

            const editOrderStatusModal = document.getElementById("editOrderStatusModal");
            if (editOrderStatusModal) {
                editOrderStatusModal.addEventListener("click", function(e) {
                    if (e.target === this) closeEditOrderStatusModal();
                });
            }

            // Sinkronisasi Real-Time antar Tab
            window.addEventListener("storage", function(e) {
                if (e.key === "chira_bookings" || e.key === STAFF_PROFILES_KEY) {
                    loadStaffProfiles();
                    loadBookings();
                    renderDashboardOverview();
                    renderOrdersTable();
                    renderScheduleTable();
                    renderStaffCards();
                    refreshEditorLiveStats();
                }
            });

            // ======================================================================
            // 3. MUAT DATA & RENDER KOMPONEN UI DENGAN ISOLASI TRY-CATCH AMAN
            // ======================================================================
            try {
                loadBookings();
            } catch (err) {
                console.error("Error loadBookings:", err);
            }

            try {
                renderDashboardOverview();
            } catch (err) {
                console.error("Error renderDashboardOverview:", err);
            }

            try {
                renderOrdersTable();
            } catch (err) {
                console.error("Error renderOrdersTable:", err);
            }

            try {
                renderScheduleTable();
            } catch (err) {
                console.error("Error renderScheduleTable:", err);
            }

            try {
                renderStaffCards();
            } catch (err) {
                console.error("Error renderStaffCards:", err);
            }

            try {
                initProfileEditor();
            } catch (err) {
                console.error("Error initProfileEditor:", err);
            }
        });