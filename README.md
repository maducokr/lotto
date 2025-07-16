# 🎰 로또 번호 추첨기

한국 로또 6/45 번호를 생성하는 웹 애플리케이션입니다.

## ✨ 기능

- 5세트의 로또 번호 자동 생성
- 각 세트별로 다른 번호 선택 전략 적용
- 애니메이션 효과로 번호 생성 과정 표시
- 모바일 친화적인 반응형 디자인

## 🚀 로컬 실행

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 프로덕션 서버 실행:
```bash
npm start
```

4. 브라우저에서 `http://localhost:10000` 접속

## 🌐 배포 방법

### 1. Render 배포 (추천)

1. [Render](https://render.com)에 가입
2. GitHub 저장소 연결
3. 새 Web Service 생성:
   - **Name**: lotto-number-generator
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. 환경 변수 설정:
   - `NODE_ENV`: `production`
   - `PORT`: `10000`

### 2. Vercel 배포

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정

### 3. Netlify 배포

1. [Netlify](https://netlify.com)에 가입
2. GitHub 저장소 연결
3. 빌드 설정:
   - Build command: `npm install`
   - Publish directory: `.`

### 4. Heroku 배포

1. [Heroku](https://heroku.com)에 가입
2. Heroku CLI 설치
3. 배포 명령어:
```bash
heroku create your-app-name
git push heroku main
```

### 5. 일반 호스팅 서비스

1. 모든 파일을 서버에 업로드
2. `npm install --production` 실행
3. `npm start` 또는 `node server.js` 실행

## 📁 프로젝트 구조

```
lotto-generator/
├── index.html          # 메인 HTML 파일
├── server.js           # Express 서버
├── package.json        # 프로젝트 설정
├── render.yaml         # Render 배포 설정
├── 404.html           # 404 에러 페이지
├── .gitignore         # Git 제외 파일
├── README.md          # 프로젝트 설명
├── vercel.json        # Vercel 배포 설정
├── netlify.toml       # Netlify 배포 설정
├── Procfile           # Heroku 배포 설정
├── 로또배경.png        # 배경 이미지
├── 로또배경1.png       # 배경 이미지
└── 로또배경3.png       # 배경 이미지
```

## 🔧 환경 변수

- `PORT`: 서버 포트 (기본값: 10000)
- `NODE_ENV`: 환경 설정 (development/production)

## 📱 사용법

1. 웹페이지 접속
2. "번호 생성" 버튼 클릭
3. 5세트의 로또 번호가 순차적으로 생성됨
4. 각 번호는 슬롯머신 효과로 표시

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **보안**: Helmet.js
- **성능**: Compression 미들웨어
- **배포**: Render, Vercel, Netlify, Heroku 지원

## 🚀 Render 배포 단계별 가이드

### 1단계: GitHub 저장소 준비
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/lotto-generator.git
git push -u origin main
```

### 2단계: Render 설정
1. [Render Dashboard](https://dashboard.render.com) 접속
2. "New +" → "Web Service" 클릭
3. GitHub 저장소 연결
4. 서비스 설정:
   - **Name**: lotto-number-generator
   - **Environment**: Node
   - **Region**: Singapore (Asia)
   - **Branch**: main
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 3단계: 환경 변수 설정
- `NODE_ENV`: `production`
- `PORT`: `10000`

### 4단계: 배포
- "Create Web Service" 클릭
- 자동 배포 완료 후 제공되는 URL로 접속

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요. 