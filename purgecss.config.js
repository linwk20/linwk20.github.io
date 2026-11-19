module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Class names that only exist at runtime, added by scripts loaded from a CDN
  // (the image zoom library), which the content scan above cannot see.
  safelist: [/^medium-zoom/],
};
