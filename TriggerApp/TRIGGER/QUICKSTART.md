# TRIGGER - Quick Start Guide

## Project Overview
TRIGGER is a high-performance browser-based growth engine for influencers and musicians. This monorepo contains:
- **Frontend:** Next.js (React + TypeScript) with dark-mode cyber-analytics UI
- **Backend:** NestJS microservices with Fastify
- **AI Agents:** Python services (Humanizer, Optimizer, Stabilizer, Economist)

## Prerequisites
- Node.js 18+ and npm 9+
- Python 3.10+ or 3.11
- Git
- Docker & Docker Compose (optional)

## Quick Installation

### Option 1: Automated (All Services)
```bash
cd TriggerApp/TRIGGER
npm run install:all
```

### Option 2: Manual Per-Service

#### Frontend
```bash
cd apps/frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

#### Backend  
```bash
cd apps/backend
npm install --legacy-peer-deps
npm run dev
# Runs on http://localhost:3001
```

#### AI Agents
```bash
cd apps/ai-agents
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows
pip install -r requirements.txt
python -m uvicorn humanizer.main:app --reload --port 8001
# Runs on http://localhost:8001
```

## Development

### Start All Services
```bash
npm run dev
```

### Individual Service Commands
**Frontend:**
```bash
npm run dev:frontend
```

**Backend:**
```bash
npm run dev:backend
```

**AI Agents:**
```bash
npm run dev:ai
```

### VS Code Tasks (`Ctrl+Shift+B`)
- TRIGGER: Frontend Dev Server
- TRIGGER: Backend Dev Server
- TRIGGER: AI Agents Dev
- TRIGGER: Docker Compose Up/Down

## Docker Deployment

### Start All Services
```bash
npm run docker:up
```

### View Logs
```bash
npm run docker:logs
```

### Stop Services
```bash
npm run docker:down
```

## Project Structure
```
TRIGGER/
├── apps/
│   ├── frontend/          # Next.js UI (Port 3000)
│   ├── backend/           # NestJS API (Port 3001)
│   └── ai-agents/         # Python microservices
├── packages/              # Shared libraries
├── infrastructure/        # DevOps & deployment
├── docs/                  # Documentation
└── .vscode/tasks.json     # Development tasks
```

## API Health Checks

### Backend
```bash
curl http://localhost:3001/health
```

### AI Agents
- Humanizer: http://localhost:8001
- Optimizer: http://localhost:8002
- Stabilizer: http://localhost:8003
- Economist: http://localhost:8004

## Building for Production

### Build All
```bash
npm run build:all
```

### Build Frontend
```bash
cd apps/frontend
npm run build
npm start
```

### Build Backend
```bash
cd apps/backend
npm run build
npm start
```

## Troubleshooting

### Backend npm install fails
```bash
npm install --legacy-peer-deps
```

### Python venv activation
```powershell
.\venv\Scripts\Activate.ps1
```

### Port conflicts
```powershell
# Find process on port 3000
lsof -i :3000
kill -9 <PID>
```

## Performance Targets
- Trigger queue latency: <150ms
- API response: <300ms
- Dashboard refresh: ≤3s
- Uptime SLA: 99.5%

## Documentation
- [Architecture](./docs/ARCHITECTURE.md)
- [Database Schema](./docs/SCHEMA.md)
- [GitHub](https://github.com/datboi1999/MyTriggerApp)

---
**Last Updated:** May 23, 2026
docker-compose logs -f
```

This will start:
- Frontend (Next.js) on http://localhost:3000
- Backend (NestJS) on http://localhost:3001
- AI Agents on ports 8001-8004
- PostgreSQL on port 5432
- Redis on port 6379
- Kafka on port 9092

## Project Structure

```
├── apps/
│   ├── frontend/          # Next.js UI (TailwindCSS, Zustand, Recharts)
│   ├── backend/           # NestJS/Fastify microservices
│   └── ai-agents/         # Python AI microservices
│       ├── humanizer/     # Behavioral simulation
│       ├── optimizer/     # Growth optimization
│       ├── stabilizer/    # Anti-fluctuation logic
│       └── economist/     # Cost optimization
├── packages/              # Shared libraries
├── infrastructure/        # DevOps & IaC
└── docs/                  # Documentation
```

## Color Palette (Cyber-Analytics Dark Mode)
- **Background**: Deep Midnight Navy (#081120)
- **Secondary**: Navy Slate (#0F172A)
- **Primary CTA**: Vibrant Blue (#0052FF)
- **Success/Active**: Neon Green (#00FF85)

## Performance Targets
- Trigger queue latency: <150ms
- API response: <300ms
- Dashboard refresh: ≤3 seconds
- Trigger success rate: 98%
- Uptime SLA: 99.5%

## Key Features
✅ Automated human-like engagement simulation
✅ Anti-Fluctuation Logic for stable growth
✅ Real-time analytics dashboard
✅ Multi-platform campaign orchestration
✅ AI-driven optimization and retention
✅ Secure JWT authentication
✅ Cost-optimized infrastructure

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License
ISC
