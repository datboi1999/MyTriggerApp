# API Endpoints Document: TRIGGER

This document defines the RESTful API endpoints required to support the **TRIGGER** AI-powered growth platform. The backend must facilitate secure data transmission using **AES-256 standards** and maintain a **99.5% uptime target**.

### 1. Authentication Service
Handles user onboarding, security, and account recovery.

*   **`POST /auth/signup`**: Registers a new user.
    *   **Payload:** `fullName`, `email`, `password` (min 8 characters, includes symbols).
*   **`POST /auth/login`**: Authenticates existing users via email/password or Google.
*   **`POST /auth/forgot-password`**: Triggers a **4-digit OTP** to the user's email.
*   **`POST /auth/verify-otp`**: Validates the 4-digit recovery code.
*   **`POST /auth/reset-password`**: Updates the password after successful OTP verification.

### 2. Campaign Orchestration Service
Manages the multi-step "Growth Engine" setup flow.

*   **`GET /categories`**: Returns available growth paths (**Influencer** or **Creator**) and their supported platforms (e.g., Instagram, TikTok, Spotify).
*   **`POST /campaigns/initiate`**: Starts a new campaign session.
    *   **Payload:** `campaignName`, `categoryID`.
*   **`GET /plans/{categoryID}`**: Retrieves tiered pricing (Starter, Influencer, Business) and billing cycles (Monthly to Yearly) in **NGN**.
*   **`POST /campaigns/{id}/select-plan`**: Saves the chosen tier and billing cycle for a campaign.
*   **`POST /campaigns/{id}/platforms`**: Submits the list of specific platforms the user wants to boost.
*   **`POST /campaigns/{id}/connect`**: Connects and verifies profile links.
    *   **Logic:** Performs **auto-detection and URL format validation** for 12+ compatible platforms.
*   **`GET /campaigns/{id}/summary`**: Returns the "Final Review" data including projected monthly likes, streams, and engagement types (e.g., "Smart Replies").

### 3. Payment & Subscription Service
Handles financial transactions and recurring billing in **NGN**.

*   **`POST /payments/initialize`**: Prepares a transaction for **Paystack** or **Flutterwave**.
*   **`GET /payments/verify/{reference}`**: Confirms payment success from the gateway to activate the "Start Trigger" action.
*   **`GET /user/billing-history`**: Retrieves past invoices and payment statuses.

### 4. Dashboard & Growth Engine (AI Agent) Service
Powers the real-time engagement and monitoring features.

*   **`GET /dashboard/stats`**: Provides high-level metrics like **Organic Reach %** and **Campaign Rate %**.
*   **`GET /dashboard/activity-feed`**: Streams real-time updates from the AI agent (e.g., "Smart Targeting Active," "Engagement Spike," or "Profile Synced").
*   **`GET /analytics/trends`**: Provides time-series data for **Growth Trend graphs** (Followers vs. Streams).
*   **`GET /analytics/insights`**: Delivers AI-generated strategy recommendations, such as the **Optimal Posting Time** (e.g., 6 PM - 8 PM EST).
*   **`GET /analytics/contribution`**: Returns a percentage breakdown of growth by platform (e.g., Instagram: 45%, Spotify: 35%).

### 5. User & Settings Service
Manages profile customization and system preferences.

*   **`GET /user/account`**: Retrieves profile details and active subscription plan status.
*   **`PATCH /user/notifications`**: Toggles preferences for **Campaign Updates**, **AI Insights**, and **Payment Alerts**.
*   **`GET /user/connected-accounts`**: Lists all currently linked social and music profile URLs for management.
*   **`POST /auth/sign-out`**: Securely ends the user session.