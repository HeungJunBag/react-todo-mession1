# React Todo App

React와 Vite로 만든 할 일 관리 앱입니다.

## 실행 화면

|               기본 화면                |               할 일 추가               |               수정 모드                |
| :------------------------------------: | :------------------------------------: | :------------------------------------: |
| ![기본 화면](docs/screenshot_main.png) | ![할 일 추가](docs/screenshot_add.png) | ![수정 모드](docs/screenshot_edit.png) |

> 캡처 이미지를 `docs/` 폴더에 넣어주세요.

## 주요 기능

- 할 일 추가 / 삭제 / 수정
- 완료 체크 및 취소선 표시
- 전체 완료 / 전체 해제
- 남은 할 일 개수 표시
- LocalStorage를 이용한 데이터 영속성

## 기술 스택

- **React 19** — UI 구성
- **Vite 8** — 빌드 도구
- **Tailwind CSS v4** — 스타일링
- **Context API** — 전역 상태 관리
- **LocalStorage** — 데이터 저장

## 프로젝트 구조

```
src/
├── App.jsx                  # 루트 컴포넌트
├── main.jsx                 # 엔트리 포인트
├── index.css                # Tailwind CSS 임포트
├── components/
│   ├── TodoWriteForm.jsx    # 할 일 입력 폼
│   ├── TodoList.jsx         # 할 일 목록
│   └── TodoItem.jsx         # 할 일 항목
├── context/
│   └── TodoContext.jsx      # 전역 상태 관리
└── utils/
    └── storage.js           # LocalStorage 유틸
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```
