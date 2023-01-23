
import { Request, Response } from 'express';
import category_of_products from '../DataBase/models/category_of_products';

async function create(req: Request, res: Response) {
    const Newcategory=req.query;
    const Category_of_products = await category_of_products.create({
      id: Newcategory.id,
      name: Newcategory.name,
      createdAt: new Date(),
      updateAt: new Date(),
      });
    res.send({ Category_of_products });
  }
  
  async function updateById(req: Request, res: Response) {
    const Category_of_products = await category_of_products.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (Category_of_products) {
      res.send({ Category_of_products });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  async function deleteById(req: Request, res: Response) {
    const Category_of_products = await category_of_products.destroy({ where: { id: req.params.id } });
    if (Category_of_products) {
      res.send({ Category_of_products});
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  export {
    create,
    updateById,
    deleteById,
  };