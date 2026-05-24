"""
TRIGGER - Store state management using Zustand
Manages campaign orchestration, analytics, and UI state
"""

from typing import Optional, List, Dict, Any

class CampaignState:
    def __init__(self):
        self.active_campaigns: List[Dict[str, Any]] = []
        self.selected_campaign: Optional[Dict[str, Any]] = None
        self.loading: bool = False
        self.error: Optional[str] = None
    
    def add_campaign(self, campaign: Dict[str, Any]) -> None:
        self.active_campaigns.append(campaign)
    
    def remove_campaign(self, campaign_id: str) -> None:
        self.active_campaigns = [c for c in self.active_campaigns if c['id'] != campaign_id]
    
    def set_selected(self, campaign_id: str) -> None:
        self.selected_campaign = next(
            (c for c in self.active_campaigns if c['id'] == campaign_id),
            None
        )
    
    def set_loading(self, loading: bool) -> None:
        self.loading = loading
    
    def set_error(self, error: Optional[str]) -> None:
        self.error = error
