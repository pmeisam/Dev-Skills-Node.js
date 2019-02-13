const skills = [
    {skill: "JavaScript", done: true},
    {skill: "Python", done: false},
    {skill: "HTML", done: true},
    {skill: "CSS", done: true},
    {skill: "Node.js", done: false},
    {skill: "Express", done: false},
    {skill: "React", done: false},
    {skill: "Django", done: false},
];

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne
}
function deleteOne(id){
    skills.splice(id, 1);
}

function create(skill){
    skills.push(skill);
}

function getAll(){
    return skills;
}
function getOne(id){
    return skills[id]
}