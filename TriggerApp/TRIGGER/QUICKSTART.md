# TRIGGER Development Setup

This is the monorepo for TRIGGER, a high-performance growth engine for influencers and musicians.

## Quick Start

### Prerequisites
- Node.js 18+ (frontend & backend)
- Python 3.11+ (AI agents)
- Docker & Docker Compose (recommended)

### Development (Local)

#### 1. Frontend Setup
```bash
cd apps/frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

#### 2. Backend Setup
```bash
cd apps/backend
npm install
cp .env.example .env
npm run dev
# Runs on http://localhost:3001
```

#### 3. AI Agents Setup
```bash
cd apps/ai-agents
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Run each agent in separate terminals:
python humanizer/main.py    # Port 8001
python optimizer/main.py    # Port 8002
python stabilizer/main.py   # Port 8003
python economist/main.py    # Port 8004
```

### Docker Setup (Recommended)

```bash
docker-compose up -d

# View logs
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
