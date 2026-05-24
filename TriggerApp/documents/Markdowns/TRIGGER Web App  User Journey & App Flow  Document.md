### **TRIGGER Web App — User Journey & App Flow Document**

#### **Product Overview**
**TRIGGER** is a high-performance browser-based growth engine designed for influencers, musicians, labels, and digital marketers. The platform’s primary objective is to facilitate accelerated audience acquisition and engagement amplification using **Anti-Fluctuation Logic**—a specialized stabilization system that prevents unnatural spikes and maintains sustainable growth patterns.

---

### **1. Global UX/UI Architecture**
#### **Design System & Visual Language**
*   **Core Aesthetic:** Dark Mode First with a "cyber-analytics" aesthetic optimized for data-dense environments.
*   **Color Palette:**
    *   **Primary Background:** Deep Midnight Navy (#081120).
    *   **Secondary Surface:** Charcoal Blue / Dark Slate (#0F172A).
    *   **Accents:** Vibrant Electric Blue (#0052FF) for CTAs; Neon Green (#00FF85) for growth metrics.
*   **UI Characteristics:** Glassmorphism overlays, animated activity indicators, and real-time graph transitions.

#### **Navigation Structure**
*   **Desktop:** Left Sidebar (Home, Campaign, Analytics, Settings).
*   **Mobile:** Bottom Navigation Bar (Home, Campaign, Analytics, Settings).
*   **Sticky Utility Actions:** Notifications, AI Activity Status, User Profile, and Billing Status.

---

### **2. Phase 1 — Secure Onboarding & Authentication**

#### **Step 1 — Splash / Landing Experience**
*   **Objective:** Introduce the "AI-Powered Growth Stabilization" value proposition.
*   **UI Elements:** Animated growth graph visualizations and a prominent "Start Growing" CTA.

#### **Step 2 — Sign-Up / Login Interface**
*   **Authentication:** Supports Google OAuth, Apple Sign-In, and traditional Email/Password entry.
*   **Security:** Enforces 8+ character passwords with mandatory symbols, uppercase letters, and numbers.
*   **Requirement:** Users must accept the Privacy Policy and Terms of Use before verification.

#### **Step 3 — Account Verification & Security**
*   **Email Confirmation:** Secure link sent to the user's email.
*   **Forgot Password Loop:** Utilizes a 4-digit OTP with a 5-minute expiration timer and auto-focus input boxes.

---

### **3. Phase 2 — 7-Step Growth Campaign Orchestrator**

#### **Step 1 — Dashboard Entry Point**
*   **Primary CTA:** **“Start Campaign”** visually emphasized with a neon glow animation and motion pulse effect.
*   **Overview:** Displays total growth metrics, active campaigns, and an AI Activity Feed.

#### **Step 2 — Category Selection**
*   **User Action:** Inputs a Campaign Name and selects a category.
*   **Categories:**
    *   **Influencer (Social Media):** TikTok, Instagram, Facebook, X, YouTube Shorts, Threads, Snapchat.
    *   **Creative (Music & Audio):** Spotify, Apple Music, Audiomack, Boomplay, SoundCloud, YouTube Music, Deezer, Tidal.

#### **Step 3 — Subscription Tier Selection (Updated via PRD)**
**A. Influencer Package (Social Media Push)**
*   **Starter Pack (₦7,500/mo):** 2 Platforms; ~1k-1.5k Followers; Basic AI pacing.
*   **Influencer Pack (₦15,000/mo):** 4 Platforms; ~2.5k-3k Followers; 3 Local Custom Demographics.
*   **Business Pack (₦35,000/mo):** All Platforms; ~5k-7k Followers; Custom Gender; 7 Custom Demographics (5 Local, 2 Int'l).

**B. Creative Package (Music Streaming Platforms)**
*   **Underground (₦15,000/mo):** 3 Platforms; 2k-3k Followers; 1.5k-3k Streams.
*   **Professional (₦22,000/mo):** 5 Platforms; 4k-7k Followers; 2.5k-4k Streams; 2 Local Custom Demographics.
*   **A-List (₦50,000/mo):** All Platforms; 10k-15k Followers; 5.5k-8k Streams; Spotify Monthly Listeners (10% of streams); 7 Custom Demographics (4 Local, 3 Int'l).

#### **Step 4 — Platform Selection**
*   **Logic:** Selectable platforms are restricted based on the chosen tier (e.g., 2 for Starter, All for Business).
*   **UI:** Platforms appear as cards with logos, connection status, and AI compatibility indicators.

#### **Step 5 — Platform Connection & Verification**
*   **User Action:** Paste profile/content URL.
*   **AI Auto-Detection:** System validates account existence, fetches metadata (profile image, follower counts), and prevents duplicate campaign conflicts.
*   **Anti-Fluctuation Initialization:** AI establishes a baseline engagement rate and sets safe automation pacing thresholds.

#### **Step 6 — Campaign Confirmation**
*   **Review Screen:** Summarizes selected tier, platforms, and billing.
*   **AI Projection Card:** Displays estimated engagement velocity and daily growth projections.

#### **Step 7 — Activation & Payment**
*   **Integration:** Paystack and Flutterwave supporting NGN transactions.
*   **Post-Payment Actions:** Immediate activation of the AI Growth Engine, initialization of low-latency triggers (<150ms), and deployment of engagement routines.

---

### **4. Phase 3 — Post-Launch Monitoring**

#### **Analytics Dashboard**
*   **Growth Trends:** Interactive line and bar charts for follower/stream velocity, engagement consistency, and retention rates.
*   **Platform Contribution:** Displays ROI per platform and conversion efficiency (e.g., Spotify 48%, TikTok 27%).
*   **Refresh Interval:** ≤3 seconds for active campaigns.

#### **AI Activity Feed**
*   **Live Event Stream:** Timestamped logs showing "Engagement Spike Detected," "AI Optimization Updated," or "Growth Stabilization Active".
*   **UX:** Live-updating feed with neon pulse indicators.

---

### **5. System & Performance Logic**
*   **Low-Latency:** Uses an event-driven microservices architecture to ensure trigger execution within <150ms.
*   **Retention Protocol:** Upon subscription expiration, the **Anti-Fluctuation Retention Protocol** reduces automation gradually rather than stopping instantly to prevent growth volatility.
*   **Resource Allocation:** AI prioritizes high-conversion campaigns and auto-scales workers based on load while maintaining API costs at ~0.99% of revenue.