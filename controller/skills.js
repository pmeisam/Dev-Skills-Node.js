var Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res){
    console.log(req.body);
    req.body.don = false;
    Skill.create(req.body);
    res.redirect('/skills')
}

function newSkill(req, res){
    res.render('skills/new');
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
}