# API документация

## Authentication

### POST /api/auth/login
Вход в систему

**Request:**
```json
{
  "password": "1234"
}
```

**Response:**
```json
{
  "user": {
    "id": 1,
    "name": "Пользователь",
    "email": "user@example.com"
  }
}
```

## Audits

### POST /api/audits
Сохранить результаты аудита

**Request:**
```json
{
  "results": [
    {
      "section": "Бухгалтерия",
      "question": "...",
      "answer": true
    }
  ]
}
```

### GET /api/audits
Получить список аудитов

**Response:**
```json
[
  {
    "id": 1,
    "date": "2024-01-01T00:00:00Z",
    "score": 85,
    "results": [...]
  }
]
```
