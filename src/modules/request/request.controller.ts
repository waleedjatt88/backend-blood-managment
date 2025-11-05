import { Request as ExpressRequest, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createRequest = async (req: ExpressRequest, res: Response) => {
  try {
    const { patientName, contact, city, hospital, bloodGroup, quantity } = req.body;

    const newRequest = await prisma.request.create({
      data: {
        patientName,
        contactNumber: contact,
        city,
        hospital,
        bloodGroup,
        quantity: parseInt(quantity, 10), 
      },
    });

    res.status(201).json({ message: 'Blood Request Submitted Successfully', data: newRequest });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating request' });
  }
};


export const getAllRequests = async (req: ExpressRequest, res: Response) => {
  try {
    const allRequests = await prisma.request.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({ data: allRequests });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching requests' });
  }
};