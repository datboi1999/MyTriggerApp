# TRIGGER - Quick Start Guide

## 🎯 Overview

Welcome to TRIGGER! This guide will help you get the development environment set up quickly.

## ⚡ 5-Minute Setup

### Prerequisites Check
```bash
# Check Node.js version (should be 16+)
node --version

# Check npm version (should be 7+)
npm --version
```

### Step 1: Frontend Setup (2 minutes)

```bash
cd myTriggerApp

# Install dependencies
npm install

# Start development server
npm start
```

The app will show a QR code. Scan it with Expo Go app on your phone, or press:
- `i` for iOS simulator
- `a` for Android emulator  
- `w` for web browser

### Step 2: Backend Setup (3 minutes)

Open a NEW terminal:

```bash
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend will run on: `http://localhost:5000`

## 🔧 Configuration

### Frontend Environment Variables

Create `myTriggerApp/.env`:
```env
EXPO_PUBLIC_API_URL=http://localhost:5000/api
EXPO_PUBLIC_APP_ENV=development
```

### Backend Environment Variables

Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_super_secret_key_here
```

## 📱 Testing the App

1. **HomeScreen Test:**
   - Navigate to Home tab
   - Should see welcome message and quick stats

2. **CampaignScreen Test:**
   - Tap Campaign tab
   - See sample campaigns with progress bars
   - Try creating a new campaign

3. **AnalyticsScreen Test:**
   - Tap Analytics tab
   - View metrics and filters
   - Test time period switching

4. **SettingsScreen Test:**
   - Tap Settings tab
   - Toggle notifications and analytics
   - View profile options

## 🔌 API Testing

### Using cURL

```bash
# Check backend health
curl http://localhost:5000/api/health

# Get all campaigns
curl http://localhost:5000/api/campaigns

# Create a campaign
curl -X POST http://localhost:5000/api/campaigns \
  -H "Content-Type: application/json" \
  -d '{"name":"My Campaign","status":"active"}'
```

### Using Postman

1. Import the API endpoints
2. Create requests for each endpoint
3. Test with different parameters

## 🐳 Docker Setup (Alternative)

```bash
# Start backend with Docker Compose
docker-compose up

# Backend: http://localhost:5000
# MongoDB Express: http://localhost:8081
```

## 📁 Project Structure Quick Reference

```
Frontend:
- src/theme - Color & design tokens
- src/screens - App pages
- src/navigation - Tab routing
- src/services - API calls

Backend:
- src/routes - API endpoints
- src/middleware - Request handlers
- src/utils - Helper functions
- src/config - Configuration
```

## 🚨 Troubleshooting

### Frontend Issues

**Port 19000 already in use:**
```bash
npm start -- --clear
```

**Modules not found:**
```bash
npm install
```

**TypeScript errors:**
```bash
npm run build
```

### Backend Issues

**Port 5000 already in use:**
```bash
# Find and kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

**Dependencies issue:**
```bash
rm -rf node_modules
npm install
```

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `App.tsx` | Frontend entry point |
| `backend/src/server.ts` | Backend entry point |
| `src/theme/index.ts` | App colors and styling |
| `src/navigation/BottomTabNavigator.tsx` | Main navigation |
| `backend/src/routes/campaigns.ts` | Campaign API |

## ✅ Development Workflow

1. **Make changes** to code
2. **Save** (auto-reload on both frontend and backend)
3. **Test** via app or API
4. **Commit** with meaningful messages

## 🔄 Hot Reload

Both frontend and backend support hot reload:
- **Frontend:** Changes auto-appear in Expo
- **Backend:** Changes auto-reload in development

## 📊 Database (Optional)

To use MongoDB locally:

```bash
# Install MongoDB Community Edition
# Then start it

# Or use Docker:
docker-compose up mongo
```

## 🎓 Next Steps

1. ✅ Get app running
2. ✅ Explore the codebase
3. ✅ Make a small change and test
4. ✅ Review theme colors
5. ✅ Test API endpoints
6. ✅ Read the main README

## 📞 Common Commands

```bash
# Frontend
npm start          # Start dev server
npm test           # Run tests
npm run build      # Build app
npm run android    # Run on Android
npm run ios        # Run on iOS

# Backend
npm run dev        # Start dev server
npm run build      # Compile TypeScript
npm run lint       # Check code style
npm test           # Run tests
```

## 🤝 Team Tips

- Ask in the team chat if stuck
- Read inline comments for context
- Keep commits small and focused
- Test before pushing
- Follow the existing code style

## 📖 Documentation

- Main README: `../README.md`
- API Docs: Will be added
- Component Docs: Will be added
- Architecture: Will be added

---

**Happy coding! 🚀**

*Questions? Check the main README or ask the team.*
