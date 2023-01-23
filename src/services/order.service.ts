
import { Request, Response } from 'express';
import order from '../DataBase/models/order';

async function create(req: Request, res: Response) {
    const Neworder=req.query;
    const Order = await order.create({
      id: Neworder.id,
      adress: Neworder.adress,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send({ Order });
  }
  
  async function updateById(req: Request, res: Response) {
    const Order = await order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (Order) {
      res.send({ Order });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  async function deleteById(req: Request, res: Response) {
    const Order = await order.destroy({ where: { id: req.params.id } });
    if (Order) {
      res.send({ Order });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  export {
    create,
    updateById,
    deleteById,
  };