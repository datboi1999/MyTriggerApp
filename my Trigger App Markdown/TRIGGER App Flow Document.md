# TRIGGER App Flow Document

This document outlines the end-to-end user journey for the **TRIGGER** platform, detailing the interactions between screens and the core functional loops.

### 1. Authentication & Onboarding Flow

The initial entry point focus on getting the user into the growth engine ecosystem.

*   **Initial Entry:** The user starts at the **Splash Screen** which displays the "AI-Powered Growth Engine" branding.
* **Login & Security:**
    *   Existing users use the **Login Screen** to sign in via email or Google.
    *   If a password is forgotten, the user enters their email on the **Forgot Password Screen** to receive a 4-digit OTP.
    *   The **OTP Verification Screen** validates the code.
    *   The **Reset Password Screen** allows the user to set a new password (minimum 8 characters with symbols) before returning to Login.
*   **New User Registration:** Users sign up by providing their Full Name, Email, and Password on the **Sign Up Screen**.

### 2. Global Navigation
Once authenticated, users navigate the app via a persistent **Bottom Navigation Bar** available on primary screens:
1.  **Home (Dashboard):** Real-time activity and campaign overview.
2.  **Campaign:** The entry point for the growth setup flow.
3.  **Analytics:** Performance data and AI-driven growth trends.
4.  **Settings:** User profile, billing history, and notification toggles.

### 3. Growth Campaign Setup Flow
This is the core "Growth Engine" process where users configure their automated engagement.

*   **Step 1: Category Selection:** Users name their campaign and choose between the **Influencer** (Social Media) or **Creator** (Music & Audio) path.
*   **Step 2: Plan Selection:** Users select a billing cycle (Monthly to Yearly) and a specific tier (e.g., Starter, Influencer, or Business) based on their growth needs.
*   **Step 3: Platform Selection:** Users pick the specific social or streaming channels they want to boost (e.g., Instagram, TikTok, Facebook).
*   **Step 4: Platform Connection:** Users input the specific profile or channel URLs for the selected platforms. The system provides auto-detection and validation for these links.
*   **Step 5: Final Review:** The **Confirm Campaign** screen provides a summary of the selected plan, connected channels, and projected monthly activity (e.g., "Likes Boost" or "Organic Growth").
*   **Step 6: Payment:** Users are directed to the **Complete Payment** screen to choose between **Paystack** or **Flutterwave**. Upon successful NGN-based transaction, the campaign is activated.

### 4. Post-Launch Management & Monitoring
After a campaign is live, users interact with the app to track results and manage their account.

*   **Real-Time Monitoring:** The **Dashboard** features an "AI Activity Feed" showing live updates like "Engagement Spike" or "Profile Synced".
*   **In-Depth Analysis:** The **Analytics Screen** provides:
    *   **Growth Trends:** Visual graphs of followers or streams over time depending on the plan selected.
    *   **Platform Contribution:** A percentage breakdown of which platforms are driving the most growth.
    *   **AI Insights:** Personalized recommendations, such as optimal posting times.
*   **Account Customization:** Through the **Settings Screen**, users can manage active subscriptions, update profile links, and toggle notification preferences for campaign updates and payment alerts.