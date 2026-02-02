// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         greatvibes: ["Great Vibes", "cursive"],
//       }
//     }
//   },
//   plugins: [],
// }



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* ✅ BACKGROUND IMAGES (tumhara existing) */
      backgroundImage: {
        'sale-banner': "url('/SaleBanner.jpg')",
        'banner': "url('/buy_get_free.jpg')",
        'banner2': "url('/upcoming_season.jpg')",
        'banner3': "url('/Tshirt_banner.jpg')",
        'banner4': "url('/Seasonal.jpg')",
        'banner5': "url('/otabek-xatipov-Bg6apLsAE3Q-unsplash.jpg')",
        'banner6': "url('/newsletter.jpg')",
        'shopbanner6': "url('/ShopBanner.jpg')",
        'blogbanner': "url('/blogbanner.jpg')",
        'aboutbanner': "url('/aboutbanner.jpg')",
      },

      /* ✅ MARQUEE ANIMATION */
      animation: {
        marquee: "marquee 15s linear infinite",
        marqueeReverse: "marqueeReverse 15s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

    },
  },
  plugins: [],
};
