const PortfolioController = require('../controllers/portfolio-controller');
module.exports = function(app){
    // app.get('/api', PortfolioController.index);
    app.get('/api/projects', PortfolioController.getAllProjects);
    app.get('/api/projects/:id', PortfolioController.getProject);
    app.post('/api/create/project', PortfolioController.createProject);
    app.put('/api/projects/:id', PortfolioController.updateProject);
    app.delete('/api/projects/:id', PortfolioController.deleteProject);
}