const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Login' });
});
//Página para cadastro de pacientes
router.get('/cadastro', (req, res) => {
  res.render('cadastro', {title: 'Cadastro de Paciente', action:""})
})
router.post('/cadastro', (req, resp) => {
  const nome = req.body.nome;
  const idade = !req.body.nascimento?null:req.body.nascimento;
  const fone = parseInt(req.body.telefone);
  const endereco = req.body.endereco;
  try {
    //Parte que receberá a incorporação com BDS
  } catch (error) {
    res.redireci('/erro=' + error);
  }
})
//Página de cadastro de médicos
router.get('/cadastromed', (req, res) => {
  res.render('cadastromed', {title: 'Cadastro de Medicos', action:""})
})
//Página de cadastro do plano de saúde
router.get('/cadastroplano', (req, res) => {
  res.render('cadastroplano', {title: 'Cadastro de Plano de Saúde', action:""})
})

module.exports = router;
