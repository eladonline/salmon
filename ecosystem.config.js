module.exports = {
  apps: [
    {
      name: 'www',
      script: './server.js',
      watch: true,
      env: {
        'NODE_ENV': 'production',
      }
    }
  ]
}
