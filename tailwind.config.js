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
      colors: {
        primary: "var(--primary)",
      },

      /* ✅ BACKGROUND IMAGES (tumhara existing) */
      backgroundImage: {
        'sale-banner': "url('/Nikhil.jpg')",
        'banner': "url('/buy_get_free.jpg')",
        'banner2': "url('/upcoming_season.jpg')",
        'banner3': "url('/Tshirt_banner.jpg')",
        'banner4': "url('/Seasonal.jpg')",
        'banner5': "url('/otabek-xatipov-Bg6apLsAE3Q-unsplash.jpg')",
        'banner6': "url('/Nikhil12.jpg')",
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
      fontFamily: {
        heading: ["Poppins"],
        body: ["Inter"],
      },

    },
  },
  plugins: [],
};
