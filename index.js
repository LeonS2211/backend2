import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docentesERoutes from './src/routes/docentesE.js';
import cursosERoutes from './src/routes/cursosE.js';

import universidadesRoutes from './src/routes/universidades.js';
import rolesRoutes from './src/routes/roles.js'
import carrerasRoutes from './src/routes/carreras.js'
import personasRoutes from './src/routes/personas.js'
import horariosRoutes from './src/routes/horarios.js'
import cursosRoutes from './src/routes/cursos.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/persona", personasRoutes)
app.use("/universidad", universidadesRoutes);
app.use("/rol", rolesRoutes);
app.use("/carrera", carrerasRoutes);
app.use("/horario", horariosRoutes);
app.use("/curso", cursosRoutes);

app.use("/docentes", docentesERoutes);
app.use("/cursos", cursosERoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.');
})