module.exports = {
  apps: [{
    name: "hello-world-app",
    script: "app.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "300M",
    log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
    error_file: "./logs/error.log",
    out_file: "./logs/out.log",
    merge_logs: true,
    log_type: "json",
    env: {
      NODE_ENV: "production",
      PORT: 3000,
      DEBUG: "express:*",
      HTTP_LOG: "true"
    }
  }]
};
