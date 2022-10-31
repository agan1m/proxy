const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const httpProxy = require('http-proxy');
const cors = require('cors');

const app = express();
const proxy = httpProxy.createProxyServer({});

app.use(cors({credentials: true, origin: 'http://localhost:8000'}));

app.use(
    '/',
    createProxyMiddleware({
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        secure: false,
    })
);

app.listen(3333);