module.exports = {
    content: [
      "./_layouts/**/*.html",
      "./_includes/**/*.html",
      "./**/*.md",
      "./*.html",
      "./test.html",
    ],
    // ⬇︎ don't let purge read the compiled file
    safelist: [],
    theme: { extend: {} },
    plugins: [
        function ({ addUtilities }) {
          console.log('TAILWIND: Custom plugin loaded');
        }], 
    // ignorePattern is the official way in v4
    // (in v3 you’d exclude by moving the file to a folder outside the globs)
    ignore: ["assets/css/tailwind-output.css"],
  }; 