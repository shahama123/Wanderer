/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import withMT from "@material-tailwind/react/utils/withMT";
import heroImage from "./src/assets/hero.jpg";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: `url("/src/assets/hero.jpg")`,
        home2: `url("/src/assets/home.jpg")`,
      },
    },
  },
  plugins: [],
});
