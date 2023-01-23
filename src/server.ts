/* eslint-disable @typescript-eslint/no-explicit-any */

import {route as apiroute} from '../src/routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.disable('x-powered-by'); // retirer la visibilité de la v d'express dans header

app.use('/', apiroute);

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.post('/', (req:any, res:any) => {
  res.send('I am a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
