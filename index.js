const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let validProxies = [];
let scrapingPromise = null;

async function scrapeProxies() {
  console.log('[*] Mengambil proxy dari free-proxy-list.net...');
  try {
    const response = await axios.get('https://free-proxy-list.net/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    });
    const $ = cheerio.load(response.data);
    const textarea = $('textarea').text();
    const lines = textarea.split('\n');
    const proxies = [];
    for (let line of lines) {
      line = line.trim();
      if (!line) continue;
      const parts = line.split(':');
      if (parts.length === 2) {
        const ip = parts[0].trim();
        const port = parts[1].trim();
        if (ip && port) {
          proxies.push({ ip, port: parseInt(port) });
        }
      }
    }
    console.log(`[+] Terkumpul ${proxies.length} proxy, memvalidasi...`);
    const valid = [];
    const validate = async (proxy) => {
      try {
        const res = await axios.get('http://ip.ml.youngjoygame.com:30220/myip', {
          proxy: {
            protocol: 'http',
            host: proxy.ip,
            port: proxy.port
          },
          timeout: 8000
        });
        if (res.status === 200) {
          valid.push(proxy);
          process.stdout.write(`\r[+] Ditemukan (${valid.length}) proxy valid.`);
        }
      } catch (e) {
      }
    };
    const chunkSize = 30;
    for (let i = 0; i < proxies.length; i += chunkSize) {
      const chunk = proxies.slice(i, i + chunkSize);
      await Promise.all(chunk.map(validate));
    }
    console.log(`\n[✓] Total proxy valid: ${valid.length}`);
    validProxies = valid;
    return valid;
  } catch (err) {
    console.error('Gagal scraping proxy:', err.message);
    return [];
  }
}
scrapingPromise = scrapeProxies();

app.get('/api/refresh-proxies', async (req, res) => {
  await scrapeProxies();
  res.json({ count: validProxies.length, proxies: validProxies });
});

app.post('/api/moonton-proxy', async (req, res) => {
  if (validProxies.length === 0) {
    await scrapingPromise;
    if (validProxies.length === 0) {
      return res.status(502).json({ message: 'Tidak ada proxy valid' });
    }
  }
  const body = req.body;
  const moontonURL = 'https://accountmtapi.mobilelegends.com/';
  for (const proxy of validProxies) {
    try {
      const response = await axios.post(moontonURL, body, {
        headers: { 'Content-Type': 'application/json' },
        proxy: {
          protocol: 'http',
          host: proxy.ip,
          port: proxy.port
        },
        timeout: 12000
      });
      return res.json(response.data);
    } catch (err) {
      continue;
    }
  }
  res.status(502).json({ message: 'Semua proxy gagal' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Moonton Checker server berjalan di http://localhost:${PORT}`);
});