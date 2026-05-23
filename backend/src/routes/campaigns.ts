import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Mock data for demo
interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'scheduled' | 'completed' | 'paused';
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

const campaigns: Campaign[] = [
  {
    id: uuidv4(),
    name: 'Summer Promo 2024',
    status: 'active',
    progress: 75,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Brand Partnership',
    status: 'scheduled',
    progress: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Community Challenge',
    status: 'completed',
    progress: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// GET all campaigns
router.get('/', (req: Request, res: Response) => {
  const { status, page = 1, limit = 10 } = req.query;

  let filtered = campaigns;
  if (status) {
    filtered = campaigns.filter((c) => c.status === status);
  }

  const startIndex = (Number(page) - 1) * Number(limit);
  const paginatedCampaigns = filtered.slice(startIndex, startIndex + Number(limit));

  res.json({
    success: true,
    data: paginatedCampaigns,
    pagination: {
      total: filtered.length,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(filtered.length / Number(limit)),
    },
  });
});

// GET campaign by ID
router.get('/:id', (req: Request, res: Response) => {
  const campaign = campaigns.find((c) => c.id === req.params.id);
  if (!campaign) {
    return res.status(404).json({
      success: false,
      message: 'Campaign not found',
    });
  }
  res.json({
    success: true,
    data: campaign,
  });
});

// CREATE new campaign
router.post('/', (req: Request, res: Response) => {
  const { name, status = 'scheduled' } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Campaign name is required',
    });
  }

  const newCampaign: Campaign = {
    id: uuidv4(),
    name,
    status,
    progress: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  campaigns.push(newCampaign);

  res.status(201).json({
    success: true,
    message: 'Campaign created successfully',
    data: newCampaign,
  });
});

// UPDATE campaign
router.put('/:id', (req: Request, res: Response) => {
  const campaign = campaigns.find((c) => c.id === req.params.id);
  if (!campaign) {
    return res.status(404).json({
      success: false,
      message: 'Campaign not found',
    });
  }

  const { name, status, progress } = req.body;
  if (name) campaign.name = name;
  if (status) campaign.status = status;
  if (progress !== undefined) campaign.progress = Math.min(progress, 100);
  campaign.updatedAt = new Date();

  res.json({
    success: true,
    message: 'Campaign updated successfully',
    data: campaign,
  });
});

// DELETE campaign
router.delete('/:id', (req: Request, res: Response) => {
  const index = campaigns.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Campaign not found',
    });
  }

  const deletedCampaign = campaigns.splice(index, 1);
  res.json({
    success: true,
    message: 'Campaign deleted successfully',
    data: deletedCampaign[0],
  });
});

export default router;
