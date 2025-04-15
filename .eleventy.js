module.exports = function (eleventyConfig) {
    // Add your Eleventy configuration here

    // Example: Copy static files to the output folder
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
};