# Инструкция по установке

## Требования

- Node.js 16+
- npm или yarn
- PostgreSQL 12+ (опционально)

## Установка локально

### 1. Клонирование репозитория

```bash
git clone https://github.com/urlanuulukuban/company-audit.git
cd company-audit
```

### 2. Установка зависимостей Frontend

```bash
cd frontend
npm install
```

### 3. Установка зависимостей Backend

```bash
cd ../backend
npm install
```

### 4. Конфигурация переменных окружения

**Backend (.env)**
```
PORT=5000
NODE_ENV=development
AUTH_PASSWORD=1234
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 5. Запуск приложения

**Терминал 1 - Backend:**
```bash
cd backend
npm run dev
```

**Терминал 2 - Frontend:**
```bash
cd frontend
npm start
```

Приложение будет доступно по адресу: `http://localhost:3000`

## Деплой

### Vercel (Frontend)

1. Создайте аккаунт на https://vercel.com
2. Подключите репозиторий
3. Установите переменную окружения `REACT_APP_API_URL`
4. Разверните

### Railway (Backend)

1. Создайте проект на https://railway.app
2. Подключите репозиторий
3. Установите переменные окружения
4. Разверните
