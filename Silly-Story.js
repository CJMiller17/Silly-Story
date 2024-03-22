//These lines connect JS variables to HTML elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Creates indices that the generator pulls from to fill the <p> element 
const insertX = ["Mr. Fox", "Professor Owl", "Dr. Snake", "Mrs. Cat"]; 
const insertY = ["a small rock outcropping", "a misty clearing", "an abandoned log pile", "the Gruffalo's den"];
const insertZ = ["the Gruffalo attacked" , "the little Mouse ate the Gruffalo", "Russia invaded Ukraine"];
const storyText = "It was a nice :temp: outside, so the Gruffalo went for a walk. Likewise, a little mouse took a stroll through the deep dark wood. :xItem: saw the mouse and the mouse looked good. The mouse ran into :yItem: to try and escape. Suddenly, out of nowhere, :zItem:. :xItem: was mortified and ran away. On an unrelated note, Barrett is a Gruffalo historian and wanted to let you know that :xItem: weighs :weight:.";

//Function that selects random array index
function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Function that is initiated when the button is pressed
randomize.addEventListener('click', result);

function result() {

//Variable set to a value that changes, depending on the outcome of the function previously mentioned  
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
let newStory = storyText;
 
//Set to itself so that it can continually be changed. Otherwise the new variable would only allow one change
newStory = newStory.replaceAll(":xItem:", xItem).replaceAll(":yItem:", yItem).replaceAll(":zItem:", zItem);
  
  //Indices that allow for variable temperatures and weights
  scale = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 98];
  heat = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81];

  //Replaces generic name with personalized name enters into text box
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Barrett", name);
  }
  //Sets equations to output British versions of inputs
  if(document.getElementById("uk").checked) {
    //Weight doesn't have 2nd Math.Floor to allow for half stones
    const weight = ((scale[Math.floor(Math.random() * scale.length)]) / 14) + " stone";
    //Temp can handle any numeric input, not just a static number
    const temperature = Math.floor((((heat[Math.floor(Math.random() * heat.length)]) - 32) * (5 / 9))) + " centigrade";
    newStory = newStory.replaceAll(":temp:", temperature).replaceAll(':weight:', weight);
  }
    if(document.getElementById("us").checked) {
    const weight = scale[Math.floor(Math.random() * scale.length)] + " pounds";
    const temperature = heat[Math.floor(Math.random() * heat.length)] + " degrees Farhenheit";
    newStory = newStory.replaceAll(":temp:", temperature).replaceAll(":weight:", weight);
    }
  //Fills the Div with the content and changes visibility
  story.textContent = newStory;
  story.style.visibility = 'visible';
}