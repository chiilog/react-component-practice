/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'ヒラギノ丸ゴ Pro',
          'Hiragino Maru Gothic Pro',
          'メイリオ',
          'Meiryo',
          'Osaka',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#ff6881',
      },
    },
  },
};
