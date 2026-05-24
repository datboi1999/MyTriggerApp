This **Backend and Database Schema Document** defines the technical infrastructure required to support **TRIGGER’s** high-performance orchestration, AI-driven optimization, and real-time analytics as outlined in the Product Requirements Document.

### **1. Backend Service Architecture**
The backend is designed as an **event-driven microservices architecture** using **Node.js (NestJS or Fastify)** to handle high concurrency and low-latency requirements.

*   **Campaign Orchestration Service:** Handles the creation workflow, automated URL verification, and platform-specific metadata fetching.
*   **Automation & Trigger Engine:** Manages distributed workers to execute engagement triggers (likes, follows, streams) with a target **queue latency of <150ms**.
*   **AI Optimization Service:** A Python-based layer using **TensorFlow/PyTorch** for behavioral simulation, performance scoring, and predictive scheduling.
*   **Anti-Fluctuation & Retention Service:** Monitors engagement decay and executes the recovery logic to stabilize growth metrics.
*   **Analytics Aggregation Service:** Processes high-volume event streams into time-series data for the dashboard with a **≤3-second refresh interval**.
*   **Billing & Subscription Service:** Manages NGN transactions and webhooks via **Paystack and Flutterwave**.

---

### **2. Primary Database Schema (PostgreSQL)**
PostgreSQL handles structured data requiring high integrity, such as user accounts, billing, and campaign configurations.

#### **Users & Authentication**
*   **`users`**: `id (UUID)`, `email`, `password_hash`, `wallet_balance (decimal)`, `status (active/suspended)`, `created_at`.
*   **`user_sessions`**: `id`, `user_id`, `device_fingerprint`, `ip_address`, `jwt_token_jti`, `expires_at`.

#### **Subscriptions & Billing**
*   **`subscription_tiers`**: `id`, `name (Starter/Underground/etc.)`, `category (Influencer/Creative)`, `price_ngn`, `platform_limit`, `features (JSONB)`.
*   **`user_subscriptions`**: `id`, `user_id`, `tier_id`, `status (active/expired/tapering)`, `billing_cycle`, `start_date`, `end_date`.
*   **`transactions`**: `id`, `user_id`, `provider (Paystack/Flutterwave)`, `reference_id`, `amount`, `status`, `type (renewal/top-up)`.

#### **Campaigns & Orchestration**
*   **`campaigns`**: `id`, `user_id`, `status (active/paused/completed)`, `created_at`, `updated_at`.
*   **`campaign_targets`**: `id`, `campaign_id`, `platform_id`, `content_url`, `metadata (title/thumbnail)`.
*   **`campaign_objectives`**: `id`, `campaign_id`, `metric_type (follower/stream/comment)`, `target_count`, `current_count`.
*   **`geo_demographic_filters`**: `id`, `campaign_id`, `locations (JSONB)`, `gender_ratio`, `age_segments`, `interest_tags`.

---

### **3. Analytics & Event Schema (TimescaleDB / ClickHouse)**
This layer is optimized for high-volume time-series data and historical logs (retained for 90–180 days).

*   **`trigger_events`**: `timestamp`, `campaign_id`, `platform_id`, `action_type`, `status (success/fail)`, `response_time_ms`.
*   **`growth_metrics`**: `timestamp`, `campaign_id`, `metric_type`, `value`, `variance_score`.
*   **`ai_optimization_logs`**: `timestamp`, `campaign_id`, `decision_type (freq_adjust/geo_shift/recovery_trigger)`, `reasoning_data`.
*   **`retention_snapshots`**: `timestamp`, `campaign_id`, `retention_rate`, `decay_probability`.

---

### **4. Real-time & Queue Schema (Redis)**
Redis manages volatile data, session integrity, and high-speed messaging.

*   **Trigger Queue:** Priority-based message queue for immediate worker execution (latency <150ms).
*   **Active Feed Cache:** Stores the latest 50 events per user for the **AI Activity Feed** (3-second refresh).
*   **Rate Limiting:** Key-value pairs for `user_id:platform_id` to enforce engagement pacing and abuse protection.
*   **Worker Heartbeats:** Monitoring state for auto-scaling horizontal trigger workers.

---

### **5. API Endpoints (Core Examples)**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/v1/campaigns/create` | Initiates creation flow with real-time URL verification. |
| **GET** | `/v1/analytics/live` | Streams growth trends via WebSockets/SSE. |
| **POST** | `/v1/billing/webhook` | Handles Paystack/Flutterwave transaction reconciliation. |
| **PATCH** | `/v1/ai/optimize` | Internal endpoint for the AI agent to update trigger frequency. |
| **GET** | `/v1/activity-feed` | Fetches the live event stream for the dashboard. |

### **6. Security & Compliance Integration**
*   **Encryption:** All sensitive fields (e.g., wallet data, PII) are encrypted using **AES-256** before insertion.
*   **Data Retention:** Automated worker scripts to archive `trigger_events` to cold storage after 180 days to maintain DB performance.
*   **Session Integrity:** Cross-referencing `device_fingerprint` in the `user_sessions` table for every high-value API request.