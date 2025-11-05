import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const totalUsers = await prisma.user.count();
    const totalDonations = await prisma.donation.count();
    const totalRequests = await prisma.request.count();

    res.status(200).json({
      message: "Dashboard stats fetched successfully",
      data: {
        totalUsers,
        totalDonations,
        totalRequests,
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching dashboard stats' });
  }
};