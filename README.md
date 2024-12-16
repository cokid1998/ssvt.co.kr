# ssvt.co.kr

회사 홈페이지 프로젝트 레포지토리입니다.

## 개요

프론트엔드와 백엔드 모노레포로 구성되어 있으며 기술 스택은 아래와 같습니다.

### Front-end
- React
- Gatsby
- Typescript
- Stitches

### Backend
- Strapi
- Typescript
- SQLite (dev)
- PostgreSQL (prod)

## 설치

### Yarn
패키지 및 모노레포 관리 도구로 Yarn Berry와 Yarn Workspaces를 사용하고 있으므로 Yarn 설치가 필요합니다.

```bash
> npm i -g yarn
```

### Dependencies
yarn 설치 후 의존성 설치를 위해 아래와 같은 명령어를 입력합니다.

```bash
> yarn
# 혹은
> yarn install
```

## 환경변수

## 실행

### Development Mode
프론트엔드와 백엔드를 동시에 개발 환경으로 실행하기 위해 아래와 같은 명령어를 입력합니다.

```bash
> yarn dev
```

### Production Mode
프론트엔드와 백엔드를 동시에 프로덕션 환경으로 실행하기 위해 아래와 같은 명령어를 입력합니다.

```bash
> yarn build
> yarn prod
```