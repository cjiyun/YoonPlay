# 🎬 YoonPlay

영화를 카테고리별로 조회하고 원하는 영화를 검색할 수 있는 영화 웹 서비스입니다.
React 기반으로 제작되었으며, 무한 스크롤, 페이지네이션, 스켈레톤 UI, 토큰 기반 인증, 검색 최적화(debounce) 등의 기능을 구현하며 React의 핵심 개념과 실전 개발 패턴을 학습하는 것을 목표로 진행한 프로젝트입니다.

## 🌐 Demo

[YoonPlay 배포 링크](https://yoonplay.netlify.app/)

## ✨ Main Features
### 🎞 영화 목록
- 영화 카테고리별 조회
- 무한 스크롤 기반 데이터 로딩
- 스켈레톤 UI를 활용한 로딩 상태 표시

### 📄 영화 상세 정보 조회
- 영화 상세 페이지에서 추가 정보 조회

### 🔎 영화 검색
- 영화 제목 기반 검색
- debounce를 적용하여 불필요한 API 요청 최소화
- 페이지네이션 기반 검색 결과 조회

### 👤 사용자 인증
- 로그인 / 회원가입 기능
- AccessToken / RefreshToken 기반 인증

## 🛠 Tech Stack
### Frontend
- React (Vite)
- JavaScript
- React Router
- TanStack Query
- Tailwind CSS

### Backend
- NestJS
- PostgreSQL
- Docker Compose

### Deployment
- Frontend: Netlify
- Backend: Render

## 👨‍💻 My Contributions
- 프론트엔드 전체 기능 설계 및 구현
- Docker Compose를 이용한 PostgreSQL 로컬 개발 환경 구성
- Render / Netlify 기반 서비스 배포 환경 구축
- 제공된 NestJS 백엔드 코드 일부 수정 및 운영 환경 구성

## 📂 Project Structure
```
src
 ┣ apis/
 ┣ components/
 ┣ contexts/
 ┣ hooks/
 ┣ layout/
 ┣ pages/
 ┣ routes/
 ┗ utils/
```

## ⚙️ Getting Started
1. install dependencies:
   ```
   yarn install
2. Run PostgreSQL (Docker)
   ```
   docker-compose up -d
3. Run development server:
   ```
   yarn dev
