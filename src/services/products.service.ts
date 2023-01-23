/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import products from '../DataBase/models/product';

async function create(req: Request, res: Response) {
    const Newproducts=req.query;
    const Products = await products.create({
    name: Newproducts.name,
    price: Newproducts.price,
    createdAt: new Date(),
    updatedAt: new Date(),
    });
    res.send({ Products });
  }
  
  async function updateById(req: Request, res: Response) {
    const Products = await products.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (products) {
      res.send({ products });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  async function deleteById(req: Request, res: Response) {
    const Products = await products.destroy({ where: { id: req.params.id } });
    if (Products) {
      res.status(200).json({ Products });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  export {
    create,
    updateById,
    deleteById,
  };