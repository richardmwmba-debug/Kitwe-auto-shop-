# Kitwe Auto Shop - Architecture Overview

## System Architecture

### Three-Tier Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│         Presentation Layer                      │
│  ┌──────────────────────────┐  ┌──────────────────────────┐    │
│  │  Mobile App      │  │  Web Dashboard   │    │
│  │  (React Native)  │  │  (React + MUI)   │    │
│  └──────────────────────────┘  └──────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
           ↓ HTTP/REST API ↓
┌─────────────────────────────────────────────────────────────────┐
│         Application Layer                       │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Express.js API Server (Node.js)        │  │
│  │  - Authentication & Authorization       │  │
│  │  - Business Logic                       │  │
│  │  - Data Validation                      │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
           ↓ Database Queries ↓
┌─────────────────────────────────────────────────────────────────┐
│         Data Layer                              │
│  ┌──────────────────────────┐  ┌──────────────────────────┐    │
│  │  PostgreSQL      │  │  Redis Cache     │    │
│  │  (Primary DB)    │  │  (Sessions)      │    │
│  └──────────────────────────┘  └──────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Caching**: Redis
- **Authentication**: JWT
- **Validation**: Joi

### Mobile
- **Framework**: React Native + Expo
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation
- **Storage**: AsyncStorage, SQLite

### Web
- **Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Charts**: Recharts
- **State**: Zustand

## Database Schema

### Core Tables
- **users**: Authentication & roles
- **products**: Spare parts catalog
- **inventory**: Stock levels
- **transactions**: Sales & purchases
- **customers**: Customer profiles
- **suppliers**: Vendor information
- **reports**: Analytics data

## API Structure

### Base URL
`/api/v1`

### Endpoints
- `/auth`: Authentication
- `/products`: Product management
- `/inventory`: Inventory management
- `/sales`: Sales/transactions
- `/customers`: Customer management
- `/reports`: Reports & analytics

## Security

- JWT tokens for authentication
- Role-based access control (RBAC)
- Input validation with Joi
- HTTPS in production
- CORS configuration
- Rate limiting (to be implemented)

## Deployment

### Development
- Local setup with Docker Compose
- PostgreSQL + Redis containers

### Production
- Backend: Heroku, Railway, or AWS EC2
- Mobile: Play Store/App Store
- Web: Vercel, Netlify, or AWS S3 + CloudFront
