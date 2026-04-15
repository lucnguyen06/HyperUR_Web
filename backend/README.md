# HyperUR Serial Backend

## Requirements
- JDK 17+
- Maven 3.8+

## Gmail Setup

### 1. Enable 2FA on your Google Account
Go to: https://myaccount.google.com/security

### 2. Create App Password
1. Go to https://myaccount.google.com/security → App passwords
2. Select app: "Mail"
3. Select device: "Other (Custom name)" → type "HyperUR"
4. Copy the 16-character password

### 3. Configure environment variables

**Option A: Create .env file** (copy from .env.example)
```
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=abcd1234efgh5678
ADMIN_EMAIL=your-admin-email@gmail.com
```

**Option B: Set system environment variables**
```bash
set MAIL_USERNAME=your-email@gmail.com
set MAIL_PASSWORD=abcd1234efgh5678
set ADMIN_EMAIL=your-admin-email@gmail.com
```

## Run

```bash
cd backend
mvn spring-boot:run
```

Server will start at http://localhost:8080

## Test API

```bash
curl -X POST http://localhost:8080/api/register-serial \
  -H "Content-Type: application/json" \
  -d '{
    "serial": "Redmi K60 Pro - SOCRATES",
    "serialDevice": "1x2y3z4d",
    "email": "test@example.com",
    "date": "2026-04-02T10:30:00"
  }'
```

## API Response

```json
{
  "success": true,
  "activationCode": "HUR-A1B2C3D4",
  "message": "Registration successful"
}
```

## Update Frontend

Update the API endpoint in `serial.html`:
```javascript
const API_ENDPOINT = 'http://localhost:8080/api/register-serial';
```
