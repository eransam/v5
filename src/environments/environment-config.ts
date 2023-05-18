export const environmentConfig = {
    development: {
      apiPath: 'https://localhost:44380/',
      googleApiKey: 'your-development-google-api-key' // Replace with your actual development Google API key
    },
    production: {
      apiPath: window.location.protocol + '//' + window.location.host + '/', // Replace with your actual production API path
      googleApiKey: 'your-production-google-api-key' // Replace with your actual production Google API key
    }
  };
  