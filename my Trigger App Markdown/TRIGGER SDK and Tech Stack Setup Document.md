# SDK and Tech Stack Setup Document: TRIGGER

This document defines the technical infrastructure and software development kits (SDKs) required to build and maintain the **TRIGGER** AI-powered growth platform. The stack is optimized for cross-platform performance, secure NGN-based transactions, and high-frequency AI engagement.

### 1. Frontend & Mobile Development
The mobile client is the primary interface for users to manage campaigns and monitor real-time growth.
*   **Core Framework:** **React Native** will be the exclusive framework for building the UI/UX, ensuring a native feel for both iOS and Android.
*   **Development & Build Suite:** **Expo** is the central tool for:
    *   **Prototyping:** Rapid previewing and testing during development.
    *   **EAS (Expo Application Services):** Generating production-ready `.apk` (Android) and iOS build files for deployment.
    *   **Distribution:** Pushing updates and initial releases directly to the **Google Play Store** and **Apple App Store**.
*   **Navigation:** Implementation of a global bottom navigation bar to manage state across the Home, Campaign, Analytics, and Settings tabs.

### 2. Payment & Billing SDKs
The platform is designed to handle recurring subscription revenue specifically for the Nigerian creator economy.
*   **Payment Gateways:** Integration of the following SDKs to support **NGN (Nigerian Naira)** transactions:
    *   **Paystack SDK:** For handling cards, bank transfers, and USSD.
    *   **Flutterwave SDK:** For mobile money, POS, and QR Pay options.
*   **Security Standard:** All financial data transmission must utilize **AES-256 encryption standards** to ensure a "Secure Payment Gateway".
*   **Billing Logic:** SDK support for flexible billing cycles including Monthly, Quarterly, Semi-Annual, and Yearly tiers.

### 3. Authentication & Security
*   **Social Auth SDK:** Integration of **Google Sign-In** for simplified user onboarding.
*   **Identity Management:**
    *   Custom Email/Password authentication flow.
    *   **OTP Service:** A 4-digit One-Time Password system for secure account recovery.
*   **Validation Logic:** Password security requires a minimum of 8 characters, including a mix of uppercase letters, numbers, and symbols.

### 4. Data Visualization & Analytics
The app requires high-performance charting libraries to display complex growth data.
*   **Graphing Libraries:** Required to render interactive **Growth Trend graphs** (Followers vs. Streams) and **Platform Contribution** charts.
*   **Real-time Feed:** Implementation of a low-latency socket or polling system for the **AI Activity Feed**, displaying live events such as "Engagement Spike" and "Profile Synced".

### 5. AI Growth Engine & Platform Integration
The "Engagement Automation Engine" interfaces with external ecosystems to drive visibility.
*   **Platform Linking SDKs:** Logic for **auto-detection and verification** of profile URLs across 12+ platforms, including:
    *   **Social:** Instagram, TikTok, YouTube Shorts, Facebook, Snapchat, X (Twitter), and Threads.
    *   **Music:** Spotify, Apple Music, Audiomack, and SoundCloud.
*   **Performance Requirements:** The backend infrastructure supporting the SDKs must target **99.5% uptime** and provide **low-latency triggers** for engagement activities.

### 6. Summary of Technical Requirements
| Component | Technology / SDK |
| :--- | :--- |
| **Frontend UI/UX** | React Native |
| **Testing/Distribution** | Expo (EAS) |
| **Payments** | Paystack, Flutterwave |
| **Encryption** | AES-256 |
| **Authentication** | Google SDK, Email/OTP |
| **Analytics** | AI Insight Engine, Custom Graphing Libs |
| **Target Regions** | Nigeria (First Phase) |