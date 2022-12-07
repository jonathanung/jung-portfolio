// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello World"
//     });
// }

const { Project } = require('../models/project-model');


module.exports.createProject = (req, res) => {
    const { title, col, imgurl, giturl, projecturl, short, description, technologies } = req.body;
    Project.create({
        title, col, imgurl, giturl, projecturl, short, description, technologies
    })
        .then(project => res.json(project))
        .catch(err => res.json( {message: "Something went wrong", error: err} ));
}

module.exports.getAllProjects = (req, res) => {
    Project.find({})
        .then(projects => res.json(projects))
        .catch(err => res.json( {message: "Something went wrong", error: err} ))
}

module.exports.getProject = (req, res) => {
    Project.find({_id:req.params.id})
        .then(project => res.json(project))
        .catch(err => res.json( {message: "Something went wrong", error: err} ))
}

module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProject => res.json(updatedProject))
        .catch(err => res.json( {message: "Something went wrong", error: err} ))
}

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => res.json( {message: "Something went wrong", error: err} ))
}