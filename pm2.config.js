module.exports = {
  apps: [
    {
      name: "Portfolio", // Replace with your application's name
      script: "node_modules/next/dist/bin/next", // Path to the Next.js executable
      args: "start",
      instances: 1, // Number of instances to run, typically set to 1 for most applications
      autorestart: true, // Enable automatic restart on failure
      watch: false, // Set to true if you want PM2 to watch for changes and automatically reload
      max_memory_restart: "512M", // Maximum memory usage before restarting
      env: {
        NODE_ENV: "production", // Set your desired environment (production, development, etc.)
        PORT: 3000, // Set the port number for your application
      },
    },
  ],
};
