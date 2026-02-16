import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    entry: ["./src/index.js"],
    devServer: {
      static: path.join(__dirname, "./src"),
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  };