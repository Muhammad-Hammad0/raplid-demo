#!/usr/bin/env node
import http from 'http'
import fs from 'fs'
import path from 'path'

const port = process.env.PORT || 5000
const distDir = path.resolve(process.cwd(), 'dist')

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
}

function sendFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500)
      res.end('Server error')
      return
    }
    const ext = path.extname(filePath).toLowerCase()
    const type = mime[ext] || 'application/octet-stream'
    res.writeHead(200, { 'Content-Type': type })
    res.end(data)
  })
}

const server = http.createServer((req, res) => {
  try {
    const reqPath = decodeURIComponent(new URL(req.url, `http://localhost`).pathname)
    let filePath = path.join(distDir, reqPath)

    // Directory or root -> serve index.html
    if (reqPath === '/' || reqPath.endsWith('/')) {
      filePath = path.join(distDir, 'index.html')
    }

    // If file doesn't exist, fallback to index.html (SPA behavior)
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html')
    }

    sendFile(filePath, res)
  } catch (e) {
    res.writeHead(500)
    res.end('Server error')
  }
})

server.listen(port, () => {
  console.log(`Serving ${distDir} at http://localhost:${port}`)
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
})
