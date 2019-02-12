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
    getOne
}

function getAll(){
    return skills;
}
function getOne(id){
    return skills[id]
}