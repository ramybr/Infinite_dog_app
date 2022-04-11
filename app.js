// Functions
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json();
    console.log(data);
    createBreedList(data.message);
}
start();

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `<select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList).map(function(breed){
return `<option>${breed}</option>`
    }).join('')}
    </select>
    `
}