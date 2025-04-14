module.exports = function (eleventyConfig) {
    // Add your Eleventy configuration here

    // Example: Copy static files to the output folder
    eleventyConfig.addPassthroughCopy("static");

    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
};