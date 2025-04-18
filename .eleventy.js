const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
    // Add your Eleventy configuration here

    // Example: Copy static files to the output folder
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/assets");
    
    eleventyConfig.addCollection("news", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/news/*.md").reverse(); // 依照時間排序最新的在上面
      });
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
};