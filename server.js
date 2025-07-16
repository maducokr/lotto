const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 10000;

// 보안 미들웨어 - CSP 설정 완화
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "blob:", "*"],
      fontSrc: ["'self'", "data:", "*"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// 압축 미들웨어
app.use(compression());

// 정적 파일 서빙 - 캐시 설정 추가
app.use(express.static(__dirname, {
  maxAge: '1h',
  etag: true,
  lastModified: true
}));

// 메인 페이지 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 테스트 페이지 라우트
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

// 헬스 체크 엔드포인트
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: '로또 번호 추첨기 서버가 정상 작동 중입니다.',
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// 404 에러 핸들링
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`📱 브라우저에서 http://localhost:${PORT} 를 열어보세요.`);
  console.log(`🏥 헬스 체크: http://localhost:${PORT}/health`);
});

module.exports = app; 