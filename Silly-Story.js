const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const insertX = ["Mr. Fox", "Professor Owl", "Dr. Snake", "Mrs. Cat"]; 
const insertY = ["a small rock outcropping", "a misty clearing", "an abandoned log pile", "the Gruffalo's den"];
const insertZ = ["the Gruffalo attacked" , "the little Mouse ate the Gruffalo", "Russia invaded Ukraine"];
const storyText = "It was a nice :temp: outside, so the Gruffalo went for a walk. Likewise, a little mouse took a stroll through the deep dark wood. :xItem: saw the mouse and the mouse looked good. The mouse ran into :yItem: to try and escape. Suddenly, out of nowhere, :zItem:. :xItem: was mortified and ran away. On an unrelated note, Barrett is a Gruffalo historian and wanted to let you know that :xItem: weighs :weight:.";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
let newStory = storyText;
  
newStory = newStory.replaceAll(":xItem:", xItem).replaceAll(":yItem:", yItem).replaceAll(":zItem:", zItem);
  
  scale = [14, 28, 42, 56, 70, 84, 98];
  heat = [72, 73, 74, 75, 76, 77, 78, 79, 80, 81];

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Barrett", name);
  }
  if(document.getElementById("uk").checked) {
    const weight = ((scale[Math.floor(Math.random() * scale.length)])/14) + " stone";
    const temperature = Math.floor((((heat[Math.floor(Math.random() * heat.length)])-32)*(5/9))) + " centigrade"; // -32 * (5/9)
    newStory = newStory.replaceAll(":temp:", temperature).replaceAll(':weight:', weight);
  }
    if(document.getElementById("us").checked) {
    const weight = scale[Math.floor(Math.random() * scale.length)] + " pounds";
    const temperature = heat[Math.floor(Math.random() * heat.length)] + " degrees Farhenheit";
    newStory = newStory.replaceAll(":temp:", temperature).replaceAll(":weight:", weight);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}