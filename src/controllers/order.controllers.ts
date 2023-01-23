
import { Request, Response } from 'express';
import order from '../DataBase/models/order';
import {create, updateById, deleteById } from '../services/order.service';
async function getAll(req: Request, res: Response) {
  res.json(await order.findAll({}));
}

async function getById(req: Request, res: Response) {
  const Order = await order.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (Order) {
    res.json({ Order });
  } else {
    res.status(404).send({ error: 'NOT FOUND' });
  }
}

export {
  create,
  updateById,
  deleteById,
  getAll,
  getById,
};