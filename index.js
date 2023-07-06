import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docentesRoutes from './src/routes/docentes.js';
import cursosRoutes from './src/routes/cursos.js';
import universidadesRoutes from './src/routes/universidades.js';
import rolesRoutes from './src/routes/roles.js'

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/universidad", universidadesRoutes);
app.use("/rol", rolesRoutes);
app.use("/docentes", docentesRoutes);
app.use("/cursos", cursosRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.');
})