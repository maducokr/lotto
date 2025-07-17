const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5500;

// 보안 및 성능 최적화 미들웨어
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));
app.use(compression());
app.use(cors());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "로또 번호 추첨기 서버가 정상 작동 중입니다.",
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`브라우저에서 http://localhost:${PORT} 를 열어보세요.`);
  console.log(`헬스 체크: http://localhost:${PORT}/health`);
});

module.exports = app;
