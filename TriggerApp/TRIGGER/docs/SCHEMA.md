# TRIGGER Backend and Database Schema

## PostgreSQL Schema

### Users & Authentication
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  wallet_balance DECIMAL(18,6) DEFAULT 0,
  status ENUM('active', 'suspended', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  device_fingerprint VARCHAR(255),
  ip_address VARCHAR(45),
  jwt_token_jti VARCHAR(255),
  expires_at TIMESTAMP
);
```

### Campaigns
```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  status ENUM('active', 'paused', 'completed') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE campaign_targets (
  id UUID PRIMARY KEY,
  campaign_id UUID REFERENCES campaigns(id),
  platform_id VARCHAR(50),  -- 'tiktok', 'instagram', 'spotify'
  content_url VARCHAR(500),
  metadata JSONB  -- title, thumbnail, profile info
);
```

### Subscriptions & Billing
```sql
CREATE TABLE subscription_tiers (
  id UUID PRIMARY KEY,
  name VARCHAR(100),  -- 'Starter', 'Underground', 'A-List', etc.
  category ENUM('Influencer', 'Creative'),
  price_ngn DECIMAL(18,2),
  platform_limit INT,
  features JSONB
);

CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  tier_id UUID REFERENCES subscription_tiers(id),
  status ENUM('active', 'expired', 'tapering'),
  start_date TIMESTAMP,
  end_date TIMESTAMP
);
```

## Redis Schema

### Trigger Queue
```
trigger:queue:priority  # Priority queue for trigger execution
trigger:queue:pending   # Pending triggers
trigger:active:count    # Counter for active triggers
```

### Caching
```
campaign:{campaign_id}:metrics  # Cached metrics
user:{user_id}:session         # Session cache
```

## ClickHouse Schema

### Time-Series Analytics
```
CREATE TABLE trigger_events (
  timestamp DateTime,
  campaign_id String,
  platform_id String,
  action_type String,
  status String,  -- success, fail
  response_time_ms UInt32
) ENGINE = MergeTree()
ORDER BY (timestamp, campaign_id);

CREATE TABLE growth_metrics (
  timestamp DateTime,
  campaign_id String,
  metric_type String,
  value Float32,
  variance_score Float32
) ENGINE = MergeTree()
ORDER BY (timestamp, campaign_id);
```

## API Endpoints (Planned)

### Campaign Management
- `POST /v1/campaigns/create` - Create campaign
- `GET /v1/campaigns` - List campaigns
- `GET /v1/campaigns/{id}` - Get campaign details
- `PATCH /v1/campaigns/{id}` - Update campaign
- `DELETE /v1/campaigns/{id}` - Delete campaign

### Analytics
- `GET /v1/analytics/trends` - Growth trends
- `GET /v1/analytics/live` - Live metrics (WebSocket/SSE)
- `GET /v1/analytics/platform-roi` - Platform-specific ROI

### AI Agents
- `POST /v1/ai/optimize` - Trigger optimization
- `GET /v1/ai/status` - Get AI agent status
- `POST /v1/ai/recover` - Trigger recovery

### Billing
- `GET /v1/billing/tiers` - Get subscription tiers
- `POST /v1/billing/subscribe` - Create subscription
- `POST /v1/billing/top-up` - Top up wallet
