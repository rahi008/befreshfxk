module.exports = {
  apps: [
    {
      name: "fxnew",
      instances: "1", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start", //running on port 3000
      watch: false,
    },
  ],
};
