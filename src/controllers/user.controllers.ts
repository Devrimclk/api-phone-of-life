
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import console from 'console';
import user from '../DataBase/models/user';
import { create, updateById, deleteById } from '../services/user.service';

// eslint-disable-next-line consistent-return, @typescript-eslint/no-explicit-any
async function auth(req: any, res: any) {
  console.log(req.query);
  let { username } = req.query;
  let { password } = req.query;

  const Users = {
    username,
    password,
  };

  if (!username) {
    username = 'undefined';
  }
  if (!password) {
    password = 'undefined';
  }

  const User = await user.findOne({ where: { username, password } });
  console.log(User);

  if (!User) {
    console.log(username, password);
    return res.send({ response: 'Username or password are wrong.' });
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const accessToken = jwt.sign({ Users }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '48h' });
  res.send(accessToken);
}

async function getAll(req: Request, res: Response) {
  res.json(await user.findAll({}));
}

async function getById(req: Request, res: Response) {
  const User = await user.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (User) {
    res.json({ User });
  } else {
    res.status(404).send({ error: 'NOT FOUND' });
  }
}
async function register(req: Request, res: Response) {
  create(req, res);
}

export {
  create,
  updateById,
  deleteById,
  getAll,
  getById,
  auth,
  register,
};
