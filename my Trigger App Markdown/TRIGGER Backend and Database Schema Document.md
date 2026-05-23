# Backend and Database Schema Document: TRIGGER

This document defines the backend architecture and database schema for the **TRIGGER** platform, ensuring it supports the AI growth engine, tiered subscriptions, and multi-platform integrations as detailed in the sources.

### 1. Database Schema
The database is designed to handle user authentication, complex campaign configurations, and real-time activity tracking.

#### 1.1 Users Table
Stores core identity and security data.
*   **id**: UUID (Primary Key)
*   **full_name**: String
*   **email**: String (Unique)
*   **password_hash**: String (Minimum 8 chars with symbols requirement enforced at app level)
*   **auth_provider**: Enum (Email, Google)
*   **otp_code**: String (4-digit for password recovery)
*   **created_at**: Timestamp

#### 1.2 Campaigns Table
Manages the specific growth journeys for users.
*   **id**: UUID (Primary Key)
*   **user_id**: UUID (Foreign Key -> Users)
*   **campaign_name**: String
*   **category**: Enum (Influencer/Social Media, Creative/Music & Audio)
*   **tier_id**: UUID (Foreign Key -> Tiers)
*   **status**: Enum (Draft, Active, Paused, Expired)
*   **start_date**: Timestamp
*   **end_date**: Timestamp

#### 1.3 Subscription Tiers Table
Defines the limits and pricing for different service levels.
*   **id**: UUID (Primary Key)
*   **category**: Enum (Influencer, Creative)
*   **tier_name**: String (Starter, Influencer, Business, Pro Growth Accelerator)
*   **price_ngn**: Decimal (Supports NGN payments)
*   **billing_cycle**: Enum (Monthly, Quarterly, Semi-Annual, Yearly)
*   **platform_limit**: Integer
*   **metrics_config**: JSON (Stores limits for followers, views, and reactions allowed by the tier)

#### 1.4 User Platforms (Linked Accounts) Table
Stores the specific social and streaming links to be boosted.
*   **id**: UUID (Primary Key)
*   **campaign_id**: UUID (Foreign Key -> Campaigns)
*   **platform_type**: Enum (Instagram, TikTok, Spotify, Apple Music, etc.)
*   **profile_url**: String (Verified and auto-detected)
*   **is_verified**: Boolean
*   **last_synced**: Timestamp

#### 1.5 Payments Table
Tracks financial transactions processed through local gateways.
*   **id**: UUID (Primary Key)
*   **campaign_id**: UUID (Foreign Key -> Campaigns)
*   **gateway**: Enum (Paystack, Flutterwave)
*   **amount**: Decimal
*   **currency**: String (Default: NGN)
*   **status**: Enum (Pending, Completed, Failed)
*   **transaction_ref**: String (Unique reference from gateway)
*   **encryption_method**: String (Default: AES-256 for payment data)

#### 1.6 AI Activity & Analytics Logs
Captures the output of the growth engine and performance trends.
*   **id**: UUID (Primary Key)
*   **campaign_id**: UUID (Foreign Key -> Campaigns)
*   **event_type**: Enum (Engagement Spike, Profile Synced, Smart Targeting, Growth Surge)
*   **metric_type**: Enum (Followers, Views, Reactions, Streams)
*   **value_change**: Integer (e.g., +120 likes)
*   **timestamp**: Timestamp

---

### 2. Backend API Structure
The backend must support **low-latency triggers** and secure data transmission.

#### 2.1 Authentication Service
*   `POST /auth/signup`: Create new user profile.
*   `POST /auth/login`: Authenticate via Email or Google.
*   `POST /auth/otp/send`: Initiate 4-digit code for password reset.
*   `POST /auth/password/reset`: Update password with security requirements.

#### 2.2 Campaign & Growth Engine Service
*   `GET /campaigns`: List all active and past campaigns for the user.
*   `POST /campaigns/setup`: Step-by-step creation including category and plan selection.
*   `POST /platforms/verify`: Validate profile URLs (e.g., checking Instagram/TikTok link formats).
*   `PATCH /campaigns/{id}/trigger`: Activate the AI growth bots and engagement engine.

#### 2.3 Payments Service
*   `POST /payments/initialize`: Prepare transaction for Paystack or Flutterwave.
*   `POST /payments/webhook`: Handle asynchronous success/failure notifications from gateways.

#### 2.4 Analytics & Insights Service
*   `GET /analytics/trends`: Retrieve time-series data for "Growth Trend" graphs.
*   `GET /analytics/insights`: Fetch AI-detected optimal posting times and regional reach data.
*   `GET /activity-feed`: Stream real-time "AI Activity Feed" updates to the dashboard.

### 3. Security & Non-Functional Compliance
*   **Data Protection:** All profile links and payment interactions must be handled via **Secure Data Transmission**.
*   **Privacy:** Terms of Service and Privacy Policy acceptance is required during signup.
*   **Operational Targets:** The backend logic must maintain a **99.5% uptime** to ensure the engagement automation engine remains constant.