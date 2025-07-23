const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
//Página para cadastro de pacientes
router.get('/cadastro', (req, res) => {
  res.render('cadastro', {title: 'Cadastro de Paciente', action:""})
})

router.get('/cadastromed', (req, res) => {
  res.render('cadastromed', {title: 'Cadastro de Medicos', action:""})
})

module.exports = router;
