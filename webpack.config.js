//Used to have access to absolute path (build in node package)
const path = require("path");

// export the configuration
module.exports = {
  entry: "./src/js/index.js",
  output: {
    //path.resolve is a method from the path package
    // __dirname is the current absolute path
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  }
};
// Four core concepts
// Entry point --> Where webpack will start the bundling.
// Output --> Tell webpack where to save the bundle file
// Loaders
// Plugins
