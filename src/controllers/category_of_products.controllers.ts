
import { Request, Response } from 'express';
import category_of_products from '../DataBase/models/category_of_products';
import {create, updateById,deleteById } from '../services/category.service';

async function getAll(req: Request, res: Response) {
  res.json(await category_of_products.findAll({}));
}

async function getById(req: Request, res: Response) { 
  const Category_of_products = await category_of_products.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (Category_of_products) {
    res.json({ Category_of_products });
  } else {
    res.status(404).send({ error: 'NOT FOUND' });
  }
}
export {
  deleteById,
  create,
  updateById,
  getAll,
  getById,
};