module.exports = {
  apps: [
    {
      name: "API-ML",
      script: "index.js",
      ignore_watch: ["node_modules"],
      watch: ["./index.js"],
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
