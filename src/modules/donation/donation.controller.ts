import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createDonation = async (req: Request, res: Response) => {
  try {
    const { name, contact, city, bloodGroup, hospital, cost, quantity } = req.body;

    const newDonation = await prisma.donation.create({
      data: {
        donorName: name,
        contactNumber: contact,
        city,
        bloodGroup,
        hospital,
        cost,
        quantity: parseInt(quantity, 10), 
      },
    });

    res.status(201).json({ message: 'Donation Submitted Successfully', data: newDonation });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating donation' });
  }
};

export const getAllDonations = async (req: Request, res: Response) => {
  try {
    const allDonations = await prisma.donation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({ data: allDonations });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching donations' });
  }
};