module.exports = {
  apps: [{
    name: "hello-world-app",
    script: "app.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "300M",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};
