var express = require('express');
var router = express.Router();


const config = require('../API/experiences')
const DadosManager = require('../utilities/utilities')


let dadosManager = new DadosManager()//cria um novo objeto
dadosManager.carregarDadosExistentes(config);//carrega os dados do json



/* GET home page. */
router.get('/', async (req, res, next) => {
    dadosManager.limitarQuantidade(6)//limitando a quantidade de dados
    res.render('layout/main', { title: 'ManexTech | Home', body: 'home', activePage: 'home',  dados:dadosManager.obterDados() });
   
});

/* GET about page. */
router.get('/about', async (req, res, next) => {
    res.render('layout/main', { title: 'ManexTech | Sobre', body: 'about', activePage: 'about'});
});

/* GET experiences page. */
router.get('/experiences', async (req, res, next) => {
    res.render('layout/main', { title: 'ManexTech | Experiências', body: 'experiences', activePage: 'experiences', dados:dadosManager.obterDados() });
});

/* GET experiences_details page. */
router.get('/experiences_details/:id', async (req, res, next) => {
    const name = req.params.id;//obtem os dados passados na url
    const elemento = await obterDadosPorId(name); // Obtém o elemento pelo ID

    res.render('layout/main', {title: 'ManexTech | Detalhes', body: 'experiences_details', activePage: 'experiences_details', elemento: elemento,}); 
});

/* GET courses page. */
router.get('/courses', async (req, res, next) => {
    res.render('layout/main', { title: 'ManexTech | Cursos', body: 'courses', activePage: 'courses' });
});

/* GET courses_details page. */

/* GET contact page. */
router.get('/contact', async (req, res, next) => {
    res.render('layout/main', { title: 'ManexTech | Contato', body: 'contact', activePage: 'contact'});
});


module.exports = router;
