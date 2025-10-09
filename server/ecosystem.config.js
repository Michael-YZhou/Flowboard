module.exports = {
  apps: [
    {
      name: "flowboard",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
