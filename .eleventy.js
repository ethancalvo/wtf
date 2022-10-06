const yaml = require("js-yaml");
module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
