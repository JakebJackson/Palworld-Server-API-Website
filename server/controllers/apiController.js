const axios = require('axios');
require('dotenv').config();
const serverAuth = process.env.SERVER_AUTH;

const apiController = {
  async getServerData(req, res) {
    try {
      const response = await axios.get('http://localhost:8212/v1/api/info', {
        headers: {
          'Authorization': `Basic ${serverAuth}`,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from Palworld server:', error);
      res.status(500).json({ error: 'Failed to fetch data from Palworld server' });
    }
  },
  async getPlayerData(req, res) {
    try {
      const response = await axios.get('http://localhost:8212/v1/api/players', {
        headers: {
          'Authorization': `Basic ${serverAuth}`,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from Palworld server:', error);
      res.status(500).json({ error: 'Failed to fetch data from Palworld server' });
    }
  },
  async getServerSettings(req, res) {
    try {
      const response = await axios.get('http://localhost:8212/v1/api/settings', {
        headers: {
          'Authorization': `Basic ${serverAuth}`,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from Palworld server:', error);
      res.status(500).json({ error: 'Failed to fetch data from Palworld server' });
    }
  },
  async getServerMetrics(req, res) {
    try {
      const response = await axios.get('http://localhost:8212/v1/api/metrics', {
        headers: {
          'Authorization': `Basic ${serverAuth}`,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from Palworld server:', error);
      res.status(500).json({ error: 'Failed to fetch data from Palworld server' });
    }
  },
  async postAnnounce(req, res) {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    try {
      const response = await axios.post('http://localhost:8212/v1/api/announce',
        { message }, // Send the message in the request body
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${serverAuth}` // Ensure `serverAuth` is defined
          }
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error('Error sending announcement to Palworld server:', error);
      res.status(500).json({ error: 'Failed to send announcement to Palworld server' });
    }
  }
};

module.exports = apiController;