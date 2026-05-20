# Company Audit Application

Полнофункциональное веб-приложение для аудита компании с 500+ вопросами по разным категориям.

## Функциональность

- ✅ Аудит компании (Бухгалтерия, Экономика, Продажи, Маркетинг, Управление)
- ✅ 500+ вопросов для проверки
- ✅ Сохранение результатов
- ✅ История аудитов
- ✅ Экспорт отчетов (JSON, PDF)
- ✅ Аутентификация пользователей
- ✅ Панель администратора
- ✅ Аналитика результатов

## Структура проекта

```
company-audit/
├── frontend/          # React приложение
├── backend/           # Node.js/Express сервер
├── docs/              # Документация
└── README.md
```

## Быстрый старт

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Переменные окружения

Создайте `.env` файлы в корнях backend и frontend.

### Backend (.env)
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/company_audit
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Деплой

- Frontend: Vercel, Netlify
- Backend: Railway, Heroku, собственный сервер
- БД: PostgreSQL на облаке

## Лицензия

MIT
