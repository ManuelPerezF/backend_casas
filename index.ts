import express from 'express';
//import casassRoutes from './src/routes/casas';

const app = express();
app.use(express.json());

//app.use('/api/casas', casasRoutes)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('Server running'))