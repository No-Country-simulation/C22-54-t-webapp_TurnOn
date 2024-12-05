import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

app.use(cors());
app.use(bodyParser.json());



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
