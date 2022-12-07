const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    title: {
		type: String,
		//3char min
		required: [true, "Title must be included!"],
		minlength: [3, "Title must be at least 3 characters	long!"]
    },
	col: {
		type:String
	},
    imgurl: {
		type: String
	},
	giturl: {
		type: String
	},
	projecturl: {
		type: String
	},
	short : {
		type: String,
	},
    description: {
		type: String,
		//10char min
		required: [true, "Description must be included!"],
		minlength: [10, "Description must be at least 10 characters long!"]
	},
	technologies: {
		type: [String]
	}
}, { timestamps: true });
module.exports.Project = mongoose.model('Project', ProjectSchema);