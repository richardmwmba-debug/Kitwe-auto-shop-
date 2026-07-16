# Kitwe Auto Shop Management

A comprehensive mobile and web application for managing auto spare parts inventory, point of sale operations, and customer relationships for Kitwe Auto Shop in Zambia.

## Features

- **Inventory Management**: Track stock levels, manage suppliers, receive new shipments
- **Point of Sale (POS)**: Fast checkout, multiple payment methods, receipt generation
- **Customer Management**: Maintain customer profiles, order history, loyalty tracking
- **Reporting & Analytics**: Sales reports, inventory insights, customer analytics
- **Multi-user Support**: Role-based access (admin, cashier, inventory manager)

## Tech Stack

### Mobile App
- **Framework**: React Native (iOS & Android)
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation
- **API Client**: Axios
- **Local Storage**: AsyncStorage, SQLite for offline support

### Backend API
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT + Refresh tokens
- **Validation**: Joi
- **File Storage**: AWS S3 (for receipts, customer documents)

### Web Dashboard
- **Framework**: React with Vite
- **UI Library**: Material-UI (MUI)
- **Charts**: Recharts for analytics

## Project Structure

```
Kitwe-auto-shop-management/
├── mobile/                 # React Native mobile app
│   ├── src/
│   │   ├── screens/       # UI screens
│   │   ├── components/    # Reusable components
│   │   ├── services/      # API & local storage services
│   │   ├── redux/         # State management
│   │   ├── navigation/    # Navigation config
│   │   └── utils/         # Helpers & constants
│   ├── app.json
│   └── package.json
│
├── backend/               # Express.js API server
│   ├── src/
│   │   ├── routes/        # API endpoints
│   │   ├── controllers/   # Request handlers
│   │   ├── models/        # Database models (Sequelize or TypeORM)
│   │   ├── middleware/    # Auth, validation, error handling
│   │   ├── services/      # Business logic
│   │   ├── config/        # Database, env config
│   │   └── utils/         # Helpers
│   ├── migrations/        # Database migrations
│   ├── seeds/             # Database seed data
│   ├── .env.example
│   └── package.json
│
├── web/                   # React dashboard
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── services/      # API calls
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # Context API
│   │   └── utils/         # Helpers
│   ├── vite.config.js
│   └── package.json
│
├── docker-compose.yml     # PostgreSQL + Redis for local dev
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- React Native CLI or Expo CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run migrate
npm run seed
npm run dev
```

### Setup Mobile App

```bash
cd mobile
npm install
# For Expo:
npx expo start

# Or for React Native CLI:
npm run android
npm run ios
```

### Setup Web Dashboard

```bash
cd web
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the `backend/` directory:

```
DATABASE_URL=postgresql://user:password@localhost:5432/kitwe_auto_shop
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
PORT=5000
AWS_S3_BUCKET=kitwe-auto-shop-receipts
AWS_REGION=us-east-1
REDIS_URL=redis://localhost:6379
```

## Database Schema

Key entities:
- **Users**: Admin, cashier, inventory manager roles
- **Products**: Spare parts with SKU, price, quantity
- **Inventory**: Stock levels, warehouse locations
- **Transactions**: Sales, purchases, adjustments
- **Customers**: Contact, purchase history, loyalty points
- **Suppliers**: Vendor information, payment terms
- **Reports**: Daily/weekly/monthly summaries

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Inventory
- `GET /api/inventory` - Current stock levels
- `POST /api/inventory/receive` - Receive shipment
- `POST /api/inventory/adjust` - Adjust stock

### Sales
- `POST /api/sales` - Create sale/transaction
- `GET /api/sales` - List sales
- `GET /api/sales/reports` - Sales analytics

### Customers
- `GET /api/customers` - List customers
- `POST /api/customers` - Add customer
- `GET /api/customers/:id` - Customer details

## Development

### Running Tests

```bash
# Backend
cd backend
npm run test

# Mobile
cd mobile
npm run test

# Web
cd web
npm run test
```

### Code Quality

```bash
npm run lint
npm run format
```

## Deployment

- **Backend**: Deploy to Heroku, Railway, or AWS EC2
- **Mobile**: Build APK/IPA and distribute via Play Store/App Store
- **Web**: Deploy to Vercel, Netlify, or AWS S3 + CloudFront

## Contact

**Kitwe Auto Shop**  
📞 +260 777 591955  
🏪 Kitwe, Zambia

## License

GNU General Public License v3.0 - See [LICENSE](LICENSE) for details.
