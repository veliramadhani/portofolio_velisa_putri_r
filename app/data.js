export const projects = [
  // ── 1. PPDB SMK ──────────────────────────────────────────────────────────
  {
    slug: "ppdb-smk",
    title: "PPDB SMK Se-Kota Padang",
    category: "Website Development",
    summary: "Platform penerimaan siswa baru multi-peran untuk 15 SMK di Kota Padang.",
    desc: "Platform penerimaan siswa baru multi-peran (Super Admin, Admin Sekolah, Siswa) untuk 15 SMK di Kota Padang dengan 4 jalur seleksi dan 763 pendaftar. Skema MySQL dirancang lengkap dari nol untuk data penerimaan lintas sekolah.",
    features: [
      "Multi-Role Dashboard",
      "4 Jalur Seleksi",
      "763 Pendaftar, 15 SMK",
    ],
    about: [
      "Platform penerimaan siswa baru multi-peran untuk 15 SMK vokasi di Kota Padang dengan 4 jalur seleksi dan 763 pendaftar.",
      "Merancang skema MySQL lengkap untuk data penerimaan lintas sekolah. Membangun front-end modul Transfer Siswa dengan UI Bootstrap yang responsif, sehingga orang tua bisa mendaftar dan memantau proses secara online.",
      "Proyek tim — berperan sebagai Database Designer & Front End Developer.",
    ],
    client: "Proyek Tim (Group Project)",
    year: "2025",
    role: "Database Designer & Front End Developer",
    demo: "https://github.com/veliramadhani/PPDB-SMK-Se-Kota-Padang-Vocational-School-Admission-System-",
    tech: ["PHP", "MySQL", "Bootstrap", "MVC"],
    image: "/projects/ppdb-landing.jpg",
    images: [
      "/projects/ppdb-landing.jpg",
      "/projects/ppdb-siswa.jpg",
      "/projects/ppdb-superadmin.jpg",
      "/projects/ppdb-admin.jpg",
    ],
    gallery: ["/projects/ppdb-landing.jpg", "/projects/ppdb-siswa.jpg", "/projects/ppdb-superadmin.jpg", "/projects/ppdb-admin.jpg"],
  },

  // ── 2. SANTAN ARDAFA ─────────────────────────────────────────────────────
  {
    slug: "santan-ardafa",
    title: "Santan Ardafa",
    category: "Website Development",
    summary: "Sistem inventori & kasir berbasis web untuk toko sembako lokal di Padang.",
    desc: "Sistem manajemen inventori & kasir berbasis web untuk toko sembako Santan Ardafa di Padang. Menggantikan pencatatan manual dengan modul stok, supplier, POS kasir, biaya operasional, laporan penjualan, dan akses berbasis peran untuk pemilik & kasir.",
    features: [
      "Inventori & Stok Real-Time",
      "POS Kasir & Transaksi",
      "Laporan Penjualan",
    ],
    about: [
      "Merancang arsitektur sistem, antarmuka front-end, dan skema MySQL dari awal untuk toko sembako lokal di Padang, menggantikan pencatatan inventori dan penjualan yang sebelumnya manual.",
      "Membangun modul inventori & stok, manajemen supplier, POS kasir, biaya operasional, laporan penjualan, dan akses berbasis peran untuk pemilik dan kasir.",
      "Berkontribusi pada back-end dan menerjemahkan kebutuhan klien menjadi fitur nyata melalui kolaborasi langsung dengan bisnis. (Real-Client PBL)",
    ],
    client: "Santan Ardafa — Real-Client PBL",
    year: "2025",
    role: "System Architect, Front-End Developer & Database Designer",
    demo: "https://github.com/veliramadhani/santan-ardafa-pos-inventory-system",
    tech: ["PHP", "MySQL", "CSS", "MVC"],
    image: "/projects/santan-landing.jpg",
    images: [
      "/projects/santan-landing.jpg",
      "/projects/santan-dashboard.jpg",
      "/projects/santan-kasir.jpg",
      "/projects/santan-inventory.jpg",
    ],
    gallery: ["/projects/santan-landing.jpg", "/projects/santan-dashboard.jpg", "/projects/santan-kasir.jpg", "/projects/santan-inventory.jpg"],
  },

  // ── 3. VELILUXE BEAUTY ───────────────────────────────────────────────────
  {
    slug: "veliluxe-beauty",
    title: "Veliluxe Beauty",
    category: "Website Development",
    summary: "Sistem manajemen toko skincare dengan akses berbasis peran dan transaksi multi-item.",
    desc: "Aplikasi web manajemen toko skincare dengan akses berbasis peran (Admin & Kasir) dan CRUD lengkap untuk kategori, merek, produk, pelanggan, dan pesanan — didukung database MySQL 7 tabel. Transaksi multi-item menyesuaikan stok otomatis, dilengkapi dashboard statistik penjualan dan peringatan stok menipis.",
    features: [
      "Role-Based Access (Admin & Kasir)",
      "Transaksi Multi-Item Otomatis",
      "Dashboard Statistik & Stok Alert",
    ],
    about: [
      "Membangun aplikasi web manajemen toko skincare dengan akses berbasis peran (Admin dan Kasir) serta CRUD lengkap untuk kategori, merek, produk, pelanggan, dan pesanan, didukung database MySQL 7 tabel.",
      "Mengimplementasikan transaksi multi-item yang menyesuaikan stok secara otomatis, ditambah dashboard statistik penjualan dan notifikasi stok menipis.",
    ],
    client: "Course Project",
    year: "2026",
    role: "Full-Stack Developer",
    demo: "https://github.com/veliramadhani/veliluxe_beauty",
    tech: ["Laravel", "MySQL", "Bootstrap 5"],
    image: "/projects/veliluxe-dashboard.jpg",
    images: [
      "/projects/veliluxe-dashboard.jpg",   // Dashboard Admin — pink hero "Halo Admin Veliluxe 🌸"
      "/projects/veliluxe-dashboard-kasir.jpg", // Dashboard Kasir
      "/projects/veliluxe-produk.jpg",          // Data Produk Admin
      "/projects/veliluxe-produk-kasir.jpg",    // Data Produk Kasir
    ],
    gallery: [
      "/projects/veliluxe-dashboard.jpg",
      "/projects/veliluxe-dashboard-kasir.jpg",
      "/projects/veliluxe-produk.jpg",
      "/projects/veliluxe-produk-kasir.jpg",
      "/projects/veliluxe-pesanan.jpg",         // Dashboard scrolled — Pesanan Terbaru
    ],
  },

  // ── 4. BENGKEL PRO ───────────────────────────────────────────────────────
  {
    slug: "bengkel-pro",
    title: "Bengkel Pro",
    category: "Desktop Application",
    summary: "Aplikasi desktop manajemen bengkel: spare part, transaksi, mekanik, dan laporan bisnis.",
    desc: "Aplikasi desktop untuk bengkel otomotif yang memusatkan stok spare part, pembelian, transaksi servis, data supplier & mekanik, serta laporan statistik bisnis dalam satu sistem.",
    features: [
      "Manajemen Stok Spare Part",
      "Transaksi Servis & Pembelian",
      "Laporan Statistik Bisnis",
    ],
    about: [
      "Mengembangkan aplikasi desktop untuk bengkel otomotif yang memusatkan stok spare part, pembelian, transaksi servis, data supplier dan mekanik, serta laporan statistik bisnis.",
    ],
    client: "Proyek Pribadi",
    year: "2026",
    role: "Developer",
    demo: "#",
    tech: ["C#", ".NET Framework", "MySQL"],
    image: "/projects/bengkel-dashboard.jpg",
    images: [
      "/projects/bengkel-dashboard.jpg",   // Dashboard utama — dark tile menu
      "/projects/bengkel-transaksi.jpg",   // Form Transaksi Pembelian
    ],
    gallery: [
      "/projects/bengkel-dashboard.jpg",
      "/projects/bengkel-transaksi.jpg",
    ],
  },

  // ── 5. ACADEMIC HUB ─────────────────────────────────────────────────────
  {
    slug: "academic-hub",
    title: "Academic Hub",
    category: "UI/UX Design",
    summary: "Prototipe interaktif aplikasi mobile manajemen kehadiran & tugas mahasiswa.",
    desc: "Desain prototipe high-fidelity 10+ layar untuk aplikasi mobile yang menyatukan kehadiran, materi pembelajaran, pengumpulan tugas, dan pemantauan nilai. Dilengkapi design system: tipografi, color token, dan component library.",
    features: [
      "10+ Layar High-Fidelity",
      "Design System Lengkap",
      "Prototipe Interaktif",
    ],
    about: [
      "Merancang prototipe high-fidelity 10+ layar untuk aplikasi mobile yang menyatukan kehadiran, materi pembelajaran, pengumpulan tugas, dan pemantauan nilai.",
      "Membuat design system yang mencakup tipografi, color token, dan component library.",
    ],
    client: "Proyek Pribadi",
    year: "2025",
    role: "UI/UX Designer",
    demo: "https://www.figma.com/proto/U06L0pkWduyV2fK2a2DKxE/UAS-FIGMA-Kelompok-7?node-id=84-599&p=f&t=9eE0khyqZeoP2GeS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A791",
    tech: ["Flutter", "Figma", "UI/UX"],
    image: "/projects/academic-home.jpg",
    overviews: [
      "/projects/academic-overview-1.jpg",  // Composite: Login, Dashboard, Presensi, Presensi Done, Riwayat
      "/projects/academic-overview-2.jpg",  // Composite: Upload Tugas, Materi, Daftar Tugas, Nilai, Setting
    ],
    images: [
      "/projects/academic-home.jpg",
      "/projects/academic-presensi.jpg",
      "/projects/academic-upload.jpg",
      "/projects/academic-tugas.jpg",
      "/projects/academic-materi.jpg",
      "/projects/academic-nilai.jpg",
      "/projects/academic-setting.jpg",
    ],
    gallery: [
      "/projects/academic-home.jpg",
      "/projects/academic-presensi.jpg",
      "/projects/academic-upload.jpg",
      "/projects/academic-tugas.jpg",
      "/projects/academic-materi.jpg",
      "/projects/academic-nilai.jpg",
      "/projects/academic-setting.jpg",
    ],
  },
];