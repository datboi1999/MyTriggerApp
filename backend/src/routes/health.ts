import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

router.get('/ready', (req: Request, res: Response) => {
  res.json({
    ready: true,
    timestamp: new Date().toISOString(),
  });
});

export default router;
