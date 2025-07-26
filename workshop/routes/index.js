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
    //Parte que receberá a incorporação com SGBD
    res.redirect('/cadastro?cadastro=true') //Confirmação em tela de cadastro bem-sucedido
  } catch (error) {
    res.redireci('/erro=' + error); //Aviso em tela caso cadastro mal-sucedido
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
    //Parte que receberá a incorporação com SGBD
    res.redirect('/cadastromed?cadastromed=true') //Confirmação em tela de cadastro bem-sucedido
  } catch (error) {
    res.redirect('/erro=' + error); //Aviso em tela caso cadastro mal-sucedido
  }
})
//Página de cadastro do plano de saúde
router.get('/cadastroplano', (req, res) => {
  res.render('cadastroplano', {title: 'Cadastro de Plano de Saúde', action:""})
})
//POST para cadastro de plano de saúde
router.post('/cadastroplano', (req, res) => {
  const plano = req.body.plano;
  const cobertura = req.body.cobertura;
  const validade = req.body.validade;
  try {
    //Parte que receberá a incorporação com SGBD
    res.redirect('/cadastroplano?cadastroplano=true') //Confirmação em tela de cadastro bem-sucedido
  } catch (error) {
    res.redirect('/erro=' + error); //Aviso em tela caso cadastro mal-sucedido
  }
})
//Página para agendadmento da consulta
router.get('/agendamento', (req, res) => {
  res.render('agendamento', {title: 'Agendamento de consulta', action:""})
})
//POST para o agendamento de consulta
router.post('/agendamento', (req, res) => {
  const data = req.body.data;
  const medico = req.body.medico;
  const valor = req.body.valor;
  const especialidade = req.body.especialidade;
  const plano = req.body.plano;
  if(data < /*fução que chama a data do plano selecionado*/a){
    try {
      //Parte que receberá a incorporação com SGBD
      res.redirect('/agendamento?agendamento=true') //Confirmação na tela caso o agendamento tenha sido feito
    } catch (error) {
      res.redirect('/erro=' + error);
    }
  }else{
    res.redirect('/erro=' + error); //Informação na teda de que o validade do plano já expirou
  }
})
//Página de resulmo financeiro
router.get('/financeiro', (req, res) => {
  try {
    const resulmo = //Chamada da função ligada ao gbds que lista o resulmo financeiro;
    console.log(resulmo);
    res.render('finaceiro', {title: 'Resulmo Financeiro', action:""});
  } catch (error) {
    res.render('/erro=' + error);
  }
})
//Página de view de consultas
router.get('/consultas', (req, res) => {
  try {
    const consultas = //Chamada da função ligada ao gbds que lista as consultas;
    console.log(consultas);
    res.render('consultas', {title: 'Lista de Consultas', action:""});
  } catch (error) {
    res.render('/erro=' + error);
  }
})


module.exports = router;
