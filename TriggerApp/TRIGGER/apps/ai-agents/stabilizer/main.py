"""
TRIGGER Stabilizer Agent - Anti-Fluctuation Logic & Retention Protocol
Prevents sudden growth drops and manages graceful subscription expiration tapering
"""

from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, Any, List
from datetime import datetime, timedelta
import random

app = FastAPI(title="TRIGGER Stabilizer Agent", version="1.0.0")

class EngagementSnapshot(BaseModel):
    campaign_id: str
    followers_current: int
    followers_24h_ago: int
    streams_current: int
    streams_24h_ago: int

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "agent": "Stabilizer",
        "timestamp": datetime.now().isoformat(),
    }

@app.post("/monitor-decay")
async def monitor_decay(snapshot: EngagementSnapshot) -> Dict[str, Any]:
    """
    Detect abnormal engagement drop-offs before they become visible
    """
    
    follower_change = snapshot.followers_current - snapshot.followers_24h_ago
    stream_change = snapshot.streams_current - snapshot.streams_24h_ago
    
    # Calculate decay probability (0-1)
    decay_risk = 0.0
    if follower_change < -50:  # More than 50 followers lost
        decay_risk += 0.4
    if stream_change < -100:  # More than 100 streams lost
        decay_risk += 0.3
    
    anomaly_detected = decay_risk > 0.5
    
    return {
        "campaign_id": snapshot.campaign_id,
        "follower_change": follower_change,
        "stream_change": stream_change,
        "decay_probability": min(decay_risk, 1.0),
        "anomaly_detected": anomaly_detected,
        "recommended_action": "trigger_recovery" if anomaly_detected else "maintain",
        "timestamp": datetime.now().isoformat(),
    }

@app.post("/trigger-recovery")
async def trigger_recovery(campaign_id: str) -> Dict[str, Any]:
    """
    Automatically trigger reinforcement campaign when fluctuation detected
    """
    
    recovery_intensity = random.choice(["low", "medium", "high"])
    
    intensity_map = {
        "low": {"frequency_boost": 1.2, "duration_hours": 6},
        "medium": {"frequency_boost": 1.5, "duration_hours": 12},
        "high": {"frequency_boost": 2.0, "duration_hours": 24},
    }
    
    config = intensity_map[recovery_intensity]
    
    return {
        "campaign_id": campaign_id,
        "recovery_triggered": True,
        "intensity": recovery_intensity,
        "frequency_boost": config["frequency_boost"],
        "duration_hours": config["duration_hours"],
        "activated_at": datetime.now().isoformat(),
    }

@app.post("/retention-protocol")
async def retention_protocol(campaign_id: str, days_until_expiry: int) -> Dict[str, Any]:
    """
    Manage Retention Protocol: gradually taper automation during subscription expiration
    to avoid sudden growth drops and maintain natural engagement curve
    """
    
    if days_until_expiry <= 0:
        taper_phase = "final"
        frequency_multiplier = 0.1
    elif days_until_expiry <= 7:
        taper_phase = "aggressive"
        frequency_multiplier = 0.3
    elif days_until_expiry <= 14:
        taper_phase = "moderate"
        frequency_multiplier = 0.6
    else:
        taper_phase = "maintain"
        frequency_multiplier = 1.0
    
    return {
        "campaign_id": campaign_id,
        "days_until_expiry": days_until_expiry,
        "taper_phase": taper_phase,
        "frequency_multiplier": frequency_multiplier,
        "retention_protocol_active": True,
        "strategy": "progressive_reduction",
        "timestamp": datetime.now().isoformat(),
    }

@app.post("/rolling-balance")
async def rolling_balance(campaign_id: str) -> Dict[str, Any]:
    """
    Implement adaptive cooldown cycles and account aging distribution
    to maintain natural engagement gradient
    """
    
    return {
        "campaign_id": campaign_id,
        "cooldown_cycle_hours": 4,
        "account_aging_days": random.randint(30, 90),
        "engagement_distribution": "natural_curve",
        "status": "balanced",
        "timestamp": datetime.now().isoformat(),
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)
