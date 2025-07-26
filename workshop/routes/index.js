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
//POST para a cadastro de usuário
router.post('/cadastro', (req, resp) => {
  const nome = req.body.nome;
  const nascimento = !req.body.nascimento?null:req.body.nascimento;
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
//POST  para o cadastro de médicos
router.post('/cadastromed', (req, res) => {
  const nome = req.body.nome;
  const nascimento = !req.body.nascimento?null:req.body.nascimento;
  const endereco = req.body.endereco;
  const fone = parseInt(req.body.telefone);
  const crm = req.body.crm;
  const especialidade = req.body.especialidade;
  try {
    //Parte que receberá a incorporação com BDS
  } catch (error) {
    res.redirect('/erro=' + error);
  }
})
//Página de cadastro do plano de saúde
router.get('/cadastroplano', (req, res) => {
  res.render('cadastroplano', {title: 'Cadastro de Plano de Saúde', action:""})
})

module.exports = router;
