// var ion = document.getElementById("icon")
// console.log(ion)
// ion.addEventListener('click',function(){
//     var ul = document.getElementById("ul")
//     ul.classList.toggle("active")
//     console.log("done")
// })
function add(){
    var ul = document.querySelector("ul")
    ul.classList.toggle("active")
}
function work (){
var abt = document.getElementById("about");
var btn = document.getElementById("btn");
var theme = document.getElementById("dark");
var skill = document.getElementById("skill");
var project = document.getElementById("project")
btn.classList.toggle("rem")
theme.classList.toggle("change")
skill.classList.toggle("da")
abt.classList.toggle("dan")
project.classList.toggle("dan")
}
function kaam (){
    var li = document.getElementById('li')
    var ul = document.querySelector("ul")
    ul.classList.remove("active")
}
