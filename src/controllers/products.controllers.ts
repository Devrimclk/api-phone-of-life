
import { Request, Response } from 'express';
import products from '../DataBase/models/product';
import {create, updateById, deleteById } from '../services/products.service';

async function getAll(req: Request, res: Response) {
  res.json(await products.findAll({}));
}

async function getById(req: Request, res: Response) {
  const Products = await products.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (Products) {
    res.json({ Products });
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