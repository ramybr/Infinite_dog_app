// Functions
async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        createBreedList(data.message);
    } catch (e) {
        console.log('An error has occured fetching the breed list')
    }
}

start();

function createBreedList(breedList) {
    document.getElementById(
        "breed"
    ).innerHTML = `<select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList).map(function(breed) {
return `<option>${breed}</option>`
    }).join('')}
    </select>`
}

async function loadByBreed(breed){
    if( breed != "Choose a dog breed"){
const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
const data = await response.json();
createSlideshow(data.message)
    }
}
function createSlideshow(photos){
    let currentPos = 0;
const slideshow = document.querySelector(".slideshow");
slideshow.innerHTML = `
<div class="slide" style="background-image: url('${photos[0]}')"></div>
<div class="slide" style="background-image: url('${photos[1]}')"></div>
`
currentPos += 2;
setInterval(nextSlide, 3000);

function nextSlide(){
    slideshow.insertAdjacentHTML("beforeend", ` 
<div class="slide" style="background-image: url('${photos[currentPos]}')"></div>
`)
setTimeout(function(){
    document.querySelector(".slide").remove()
}, 1000);
if(currentPos + 1 >= photos.length){
currentPos = 0;
} else {
currentPos++
}
}
}