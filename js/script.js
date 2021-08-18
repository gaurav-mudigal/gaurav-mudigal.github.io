console.log("Hello.. js file here!!!!!!!!!!!!")
let element = document.getElementById("years");
console.log(element);
element.innerText = getTotalExperience();

function getTotalExperience() {
    const date = new Date();
    let present = date.getFullYear();
    let totalExperience = present - 2016;
    console.log(totalExperience);
    return totalExperience + "+";
}