# Setup Guide - Kitwe Auto Shop

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- PostgreSQL 13+ ([Download](https://www.postgresql.org/))
- Git
- Docker & Docker Compose (for containerized setup)

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/richardmwmba-debug/Kitwe-auto-shop-.git
cd Kitwe-auto-shop-
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run dev
```

The API will be available at `http://localhost:5000`

### 3. Mobile App Setup

```bash
cd mobile
npm install

# Using Expo
npx expo start

# Then:
# - Press 'i' for iOS simulator
# - Press 'a' for Android emulator
# - Scan QR code with Expo app (mobile device)
```

### 4. Web Dashboard Setup

```bash
cd web
npm install
npm run dev
```

The dashboard will be available at `http://localhost:3000`

## Using Docker Compose

```bash
# Start PostgreSQL and Redis
docker-compose up -d

# Verify services
docker-compose ps
```

## Environment Variables

Create `.env` files in backend/ with:

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/kitwe_auto_shop
JWT_SECRET=your_secret_key_here
NODE_ENV=development
PORT=5000
```

## Database Setup

```bash
cd backend
npm run migrate  # Run migrations
npm run seed     # Seed sample data
```

## Testing

```bash
# Backend tests
cd backend && npm run test

# Mobile tests
cd mobile && npm run test

# Web tests
cd web && npm run test
```

## Linting & Formatting

```bash
# Lint
npm run lint

# Format
npm run format
```

## Troubleshooting

### PostgreSQL Connection Issues
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Run: `psql -U postgres -h localhost -d kitwe_auto_shop`

### Port Conflicts
- Backend: 5000
- Web: 3000
- PostgreSQL: 5432
- Redis: 6379

Change ports in `.env` or vite.config.js if needed.

### Mobile Issues
- Clear cache: `npx expo r -c`
- Ensure Node.js 18+: `node --version`
