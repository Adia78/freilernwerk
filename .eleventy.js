module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/");

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  }
}
