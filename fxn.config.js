module.exports = {
  apps : [{
    name: 'fxnew',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3004', //running on port 3000
    cwd: "./apps/nextapp",
    instances: 1,
    watch: false,
    env: {
        ...
    },
  }]
};