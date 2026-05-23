import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Mock data for demo
interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

const users: User[] = [];

// GET all users
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: users,
    count: users.length,
  });
});

// GET user by ID
router.get('/:id', (req: Request, res: Response) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }
  res.json({
    success: true,
    data: user,
  });
});

// CREATE new user
router.post('/', (req: Request, res: Response) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({
      success: false,
      message: 'Username and email are required',
    });
  }

  const newUser: User = {
    id: uuidv4(),
    username,
    email,
    createdAt: new Date(),
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser,
  });
});

// UPDATE user
router.put('/:id', (req: Request, res: Response) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  const { username, email } = req.body;
  if (username) user.username = username;
  if (email) user.email = email;

  res.json({
    success: true,
    message: 'User updated successfully',
    data: user,
  });
});

// DELETE user
router.delete('/:id', (req: Request, res: Response) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  const deletedUser = users.splice(index, 1);
  res.json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser[0],
  });
});

export default router;
