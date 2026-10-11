const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint that outputs configuration text (Subscription format)
app.get('/sub/:id', (req, res) => {
  const configId = req.params.id;
  
  // Example proxy configuration payload (Base64 encoded or raw lines)
  // Replace these with your actual server details (vless://, shadowsocks://, etc.)
  const sampleConfig = `vless://00000000-0000-0000-0000-000000000000@your-vps-ip:443?encryption=none&type=tcp&security=reality&sni=google.com#Server-${configId}`;
  
  // Proxy apps usually read base64 encoded subscription strings
  const encodedSub = Buffer.from(sampleConfig).toString('base64');
  
  res.send(encodedSub);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
