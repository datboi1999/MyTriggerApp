This **API Endpoint Document** outlines the internal and external interfaces for the **TRIGGER** growth engine, based on the functional and technical requirements defined in the Product Requirements Document.

### **1. Core System Performance Targets**
*   **Dashboard API Response:** <300ms.
*   **Trigger Queue Latency:** <150ms.
*   **Real-Time Feed Refresh:** ≤3 seconds.
*   **Uptime SLA:** 99.5%.

---

### **2. Authentication & Security**
*The system uses **JWT-based session authentication** and supports optional 2FA.*

| Method | Endpoint | Description | Key Parameters |
| :--- | :--- | :--- | :--- |
| **POST** | `/v1/auth/login` | Authenticates user and returns JWT token. | `email`, `password`, `device_fingerprint` |
| **POST** | `/v1/auth/2fa/verify` | Validates two-factor authentication codes. | `token`, `code` |
| **GET** | `/v1/auth/session` | Validates session integrity and IP anomalies. | `Authorization: Bearer <token>` |

---

### **3. Campaign Orchestration API**
*Handles the end-to-end **Campaign Creation Workflow** (FR-C1) and **URL Verification** (FR-C2).*

| Method | Endpoint | Description | Key Parameters |
| :--- | :--- | :--- | :--- |
| **POST** | `/v1/campaigns/validate` | Real-time URL validation and metadata fetching. | `url`, `platform_id` |
| **POST** | `/v1/campaigns` | Launches a new growth campaign. | `platforms[]`, `target_url`, `objectives{}`, `geo_filters{}`, `demographics{}` |
| **GET** | `/v1/campaigns` | Lists active and archived campaigns. | `status`, `page`, `limit` |
| **GET** | `/v1/campaigns/{id}` | Fetches detailed status and coordination data. | `campaign_id` |
| **PATCH** | `/v1/campaigns/{id}/pause` | Pauses/Resumes execution worker triggers. | `status: "paused" \| "active"` |

---

### **4. Analytics & Monitoring API**
*Provides data for the **Analytics Hub**, including the **AI Activity Feed** and **Growth Trends**.*

| Method | Endpoint | Description | Data Returned |
| :--- | :--- | :--- | :--- |
| **GET** | `/v1/analytics/trends` | High-density growth metrics for interactive charts. | Follower/stream velocity, retention rates, conversion efficiency. |
| **GET** | `/v1/analytics/platform-roi` | Efficiency scores and traffic contribution per platform. | ROI per platform, trigger success rate, growth efficiency. |
| **GET** | `/v1/analytics/activity-stream` | **Server-Sent Events (SSE)** for the live AI activity feed. | Trigger executions, AI optimization decisions, recovery events. |

---

### **5. AI & Retention Logic API**
*Internal APIs for the **Automation Engine** and **Anti-Fluctuation Logic**.*

| Method | Endpoint | Description | Functional Requirement |
| :--- | :--- | :--- | :--- |
| **POST** | `/v1/ai/optimize` | Internal trigger for the AI to adjust interaction frequency. | FR-A4: AI Campaign Optimization |
| **GET** | `/v1/ai/retention-status` | Monitors engagement decay and abnormal drop-offs. | FR-R1: Retention Stabilization |
| **POST** | `/v1/ai/recovery/trigger` | Manually or automatically triggers reinforcement campaigns. | FR-R4: Intelligent Recovery Logic |

---

### **6. Billing & Subscription API**
*Integrates with **Paystack** and **Flutterwave** for NGN billing and wallet management.*

| Method | Endpoint | Description | Key Parameters |
| :--- | :--- | :--- | :--- |
| **GET** | `/v1/billing/tiers` | Fetches available Influencer/Creative packages. | `category` (Influencer/Creative) |
| **POST** | `/v1/billing/top-up` | Initiates a wallet balance top-up. | `amount`, `provider` |
| **POST** | `/v1/billing/subscribe` | Processes tier selection and recurring billing setup. | `tier_id`, `cycle` (Monthly/Yearly) |
| **POST** | `/v1/billing/webhook` | Handles automated reconciliation for NGN transactions. | Provider-specific payload. |

---

### **7. Real-time Communication (WebSockets)**
*Used for high-concurrency event stream processing with a **≤3s refresh interval**.*

*   **Gateway:** `wss://api.trigger.app/realtime`
*   **Events Emitted:**
    *   `trigger.executed`: Real-time notification of a simulated human interaction.
    *   `campaign.optimized`: Alert when the AI shifts geographic or frequency allocation.
    *   `retention.stabilized`: Alert when the Anti-Fluctuation engine activates recovery.