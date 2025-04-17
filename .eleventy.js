module.exports = function (eleventyConfig) {
    // Add your Eleventy configuration here

    // Example: Copy static files to the output folder
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/assets");
    
    eleventyConfig.addCollection("news", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/news/*.md").reverse(); // 依照時間排序最新的在上面
      });
      

    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
};