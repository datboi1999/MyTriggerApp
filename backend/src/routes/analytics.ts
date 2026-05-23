import { Router, Request, Response } from 'express';

const router = Router();

// Mock analytics data
interface AnalyticsData {
  period: string;
  totalReach: number;
  engagement: number;
  avgViews: number;
  conversions: number;
  growthPercentage: number;
}

const analyticsData: AnalyticsData[] = [
  {
    period: 'week',
    totalReach: 24500,
    engagement: 3200,
    avgViews: 1200,
    conversions: 156,
    growthPercentage: 12.5,
  },
  {
    period: 'month',
    totalReach: 98000,
    engagement: 12800,
    avgViews: 4500,
    conversions: 589,
    growthPercentage: 18.7,
  },
  {
    period: 'year',
    totalReach: 1200000,
    engagement: 156000,
    avgViews: 54000,
    conversions: 7890,
    growthPercentage: 45.2,
  },
];

// GET analytics by period
router.get('/', (req: Request, res: Response) => {
  const { period = 'month' } = req.query;

  const data = analyticsData.find((a) => a.period === period);
  if (!data) {
    return res.status(404).json({
      success: false,
      message: `No analytics data for period: ${period}`,
    });
  }

  res.json({
    success: true,
    period,
    data,
  });
});

// GET performance metrics
router.get('/performance/metrics', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      totalReach: 24500,
      engagement: 3200,
      avgViews: 1200,
      conversions: 156,
      growthPercentage: 12.5,
      topPostsCount: 5,
      audienceGrowthRate: 8.3,
    },
  });
});

// GET demographic data
router.get('/demographics', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      gender: {
        male: 45,
        female: 40,
        other: 15,
      },
      ageGroups: {
        '13-17': 10,
        '18-24': 35,
        '25-34': 30,
        '35-44': 15,
        '45+': 10,
      },
      locations: {
        Nigeria: 65,
        'United States': 15,
        'United Kingdom': 8,
        Other: 12,
      },
    },
  });
});

// GET engagement trends
router.get('/trends', (req: Request, res: Response) => {
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      date: date.toISOString().split('T')[0],
      reach: Math.floor(Math.random() * 5000) + 500,
      engagement: Math.floor(Math.random() * 800) + 100,
      conversions: Math.floor(Math.random() * 50) + 5,
    };
  });

  res.json({
    success: true,
    data: days.reverse(),
  });
});

// POST custom analytics query
router.post('/query', (req: Request, res: Response) => {
  const { metric, period, filter } = req.body;

  if (!metric) {
    return res.status(400).json({
      success: false,
      message: 'Metric parameter is required',
    });
  }

  // Mock response
  res.json({
    success: true,
    query: { metric, period, filter },
    data: analyticsData.find((a) => a.period === period) || analyticsData[1],
  });
});

export default router;
