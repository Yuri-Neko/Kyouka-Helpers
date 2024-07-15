const axios = require('axios');

class KyoukaAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'SOON';
  }

  async get(endpointName, params) {
    try {
      const response = await axios.get(`${this.baseURL}${endpointName}`, {
        params: { ...params, apikey: this.apiKey }
      });
      return response.data;
    } catch (error) {
      throw new Error(`API request failed: ${error.message}`);
    }
  }

  async post(endpointName, data) {
    try {
      const response = await axios.post(`${this.baseURL}${endpointName}`, data, {
        params: { apikey: this.apiKey }
      });
      return response.data;
    } catch (error) {
      throw new Error(`API request failed: ${error.message}`);
    }
  }
}

module.exports = KyoukaAPI;
