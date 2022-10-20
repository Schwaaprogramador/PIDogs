const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogsRouter.js");
const temperamentsRouter = require("./temperamentsRouter.js");
const { Raza, Temperamento } = require ("../db.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentsRouter);

module.exports = router;
