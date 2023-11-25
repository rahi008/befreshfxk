module.exports = {
  apps: [
    {
      name: "fxnew",
      instances: "1",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3004",
    },
  ],
};
