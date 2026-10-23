// Konfigurasi Tailwind CDN: warna, font, sudut, dan bayangan situs.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#F9F7F4',      // latar utama
        mist: '#ECEFE9',       // latar section & chip (sage sangat muda)
        sand: '#D9D4CB',       // garis/border
        mauve: '#8B5A6B',      // warna utama (tombol, aksen)
        mauveDark: '#6F4455',  // hover & teks aksen
        ink: '#2E2A2D',        // teks & panel gelap
        sage: '#7F9186',       // aksen sekunder
      },
      borderRadius: { xl: '0.625rem', '2xl': '0.75rem', '3xl': '1rem' },
      boxShadow: {
        md: '0 2px 8px rgba(46, 42, 45, 0.08)',
        lg: '0 6px 18px rgba(46, 42, 45, 0.10)',
        xl: '0 10px 28px rgba(46, 42, 45, 0.12)',
        '2xl': '0 14px 36px rgba(46, 42, 45, 0.14)',
      },
    },
  },
};