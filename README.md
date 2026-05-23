# TRIGGER - AI-Powered Growth Platform for Nigerian Creator Economy

A modern, full-stack application built with React Native (Expo) and Node.js/Express for creators in Nigeria to manage, track, and grow their audience and engagement.

## 🎯 Project Overview

TRIGGER is designed to empower African creators with AI-driven insights and tools to:
- 📊 Track performance metrics in real-time
- 🎯 Manage marketing campaigns
- 📈 Analyze audience growth and engagement
- 🔔 Receive actionable insights and recommendations

## 🏗 Architecture

### Tech Stack

**Frontend (Mobile):**
- React Native with Expo
- TypeScript
- Bottom Tab Navigation
- Custom Theme System

**Backend (API):**
- Node.js with Express.js
- TypeScript
- RESTful API
- Middleware: CORS, Helmet, Rate Limiting

**Styling:**
- Theme: Deep Midnight Navy (#0F1726) background
- Primary: Vibrant Blue (#0052FF) for actions
- Surface: Dark Charcoal Grey (#1A1F2E)

## 📁 Project Structure

```
TRIGGER/
├── myTriggerApp/                 # React Native Frontend
│   ├── src/
│   │   ├── assets/               # Images, fonts, icons
│   │   ├── components/           # Reusable components
│   │   ├── hooks/                # Custom React hooks
│   │   ├── navigation/           # Navigation setup
│   │   │   ├── BottomTabNavigator.tsx
│   │   │   └── RootNavigator.tsx
│   │   ├── screens/              # Screen components
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── CampaignScreen.tsx
│   │   │   ├── AnalyticsScreen.tsx
│   │   │   └── SettingsScreen.tsx
│   │   ├── services/             # API services
│   │   └── theme/                # Theme configuration
│   ├── App.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── backend/                      # Node.js Express Backend
│   ├── src/
│   │   ├── config/               # Configuration files
│   │   ├── controllers/          # Request handlers
│   │   ├── middleware/           # Custom middleware
│   │   ├── models/               # Database models
│   │   ├── routes/               # API routes
│   │   │   ├── health.ts
│   │   │   ├── users.ts
│   │   │   ├── campaigns.ts
│   │   │   └── analytics.ts
│   │   ├── utils/                # Utility functions
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- Python 3 (for Expo)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd myTriggerApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env` file from template:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Run on your device/emulator:
   - Press `i` for iOS
   - Press `a` for Android
   - Press `w` for web

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env` file from template:
```bash
cp .env.example .env
```

4. Update environment variables as needed

5. Start the development server:
```bash
npm run dev
# or for production
npm run build
npm start
```

The backend will start on `http://localhost:5000`

## 📱 Screens

### Home Screen
- Overview dashboard
- Quick stats (Followers, Engagements, Growth %)
- Performance cards

### Campaign Screen
- Create and manage campaigns
- Track campaign progress
- View campaign status (active, scheduled, completed)

### Analytics Screen
- View comprehensive performance metrics
- Time period filtering (Week, Month, Year)
- Growth trends
- Audience demographics

### Settings Screen
- Profile management
- Password management
- Notification preferences
- Dark mode toggle
- Privacy and terms

## 🎨 Theme Configuration

The app uses a centralized theme system located at `src/theme/index.ts`:

```typescript
// Color Palette
- Primary: #0052FF (Vibrant Blue)
- Background: #0F1726 (Deep Midnight Navy)
- Surface: #1A1F2E (Dark Charcoal Grey)
- Text: #FFFFFF (White)
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
```

## 🔌 API Endpoints

### Health Check
- `GET /api/health` - Server health status
- `GET /api/health/ready` - Readiness check

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Campaigns
- `GET /api/campaigns` - Get all campaigns
- `GET /api/campaigns/:id` - Get campaign by ID
- `POST /api/campaigns` - Create new campaign
- `PUT /api/campaigns/:id` - Update campaign
- `DELETE /api/campaigns/:id` - Delete campaign

### Analytics
- `GET /api/analytics` - Get analytics by period
- `GET /api/analytics/performance/metrics` - Get performance metrics
- `GET /api/analytics/demographics` - Get audience demographics
- `GET /api/analytics/trends` - Get engagement trends
- `POST /api/analytics/query` - Custom analytics query

## 📦 Key Dependencies

### Frontend
- `@react-navigation/bottom-tabs` - Tab navigation
- `@react-navigation/native` - Navigation container
- `react-native-vector-icons` - Icon library
- `axios` - HTTP client

### Backend
- `express` - Web framework
- `cors` - Cross-origin support
- `helmet` - Security headers
- `express-rate-limit` - Rate limiting
- `joi` - Data validation

## 🔒 Security Features

- Helmet.js for HTTP security headers
- CORS configuration for controlled access
- Rate limiting to prevent abuse
- Input validation with Joi
- Password hashing with bcryptjs
- JWT authentication ready

## 🧪 Testing

To run tests:

```bash
# Frontend
cd myTriggerApp
npm test

# Backend
cd backend
npm test
```

## 📝 Environment Variables

### Frontend (.env)
```
EXPO_PUBLIC_API_URL=http://localhost:5000/api
EXPO_PUBLIC_APP_ENV=development
EXPO_PUBLIC_ENABLE_DEBUG=true
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/trigger
JWT_SECRET=your_secret_key
```

## 🚢 Deployment

### Frontend (Expo)
```bash
npm run build
# Use EAS for native builds
eas build
eas submit
```

### Backend (Heroku/Railway)
```bash
npm run build
# Deploy to your hosting platform
```

## 📊 Navigation Flow

```
App
└── RootNavigator
    └── BottomTabNavigator
        ├── Home Screen
        ├── Campaign Screen
        ├── Analytics Screen
        └── Settings Screen
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Team

Built for the Nigerian creator economy with ❤️

## 📞 Support

For support, email support@trigger.app or visit our website.

## 🗺 Roadmap

- [ ] AI-powered insights engine
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Influencer marketplace
- [ ] Payment integration
- [ ] Social media integrations (Instagram, TikTok, Twitter)
- [ ] Content calendar
- [ ] Audience sentiment analysis

---

**Made with ❤️ for African Creators**
