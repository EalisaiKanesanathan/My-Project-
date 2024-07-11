const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Adding Flowbite content configuration
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Adding Flowbite plugin configuration
  ],
};
