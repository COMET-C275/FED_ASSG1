// The following code will be my Javascript for the main website. 
// innerHTML is a property that allows web developer to use the html content as a string, or 
// to set or change elements in the html?

// Javascript for the Search Bar
let availableKeywords = [
    "UNIFORMS",
    "G3",
    "G4",
    "SPECIALTY UNIFORM",
    "JOINT PROTECTION",
    "VESTS",
    "JPC",
    "LVS",
    "AVS",
    "CPC",
    "SPC",
    "ARMOR ADD-ONS",
    "ACCESSORIES",
    "OUTERWEAR",
    "JACKETS",
    "PANTS",
    "BASELAYERS",
    "ACCESSORIES",
    "HEADBORNE SYSTEMS",
    "AIRFRAME",
    "ACCESSORIES",
    "BELTS",
    "STRUCTURAL BELTS",
    "MODULAR BELTS",
    "ACCESSORIES",
    "PACKS & POUCHES",
    "PACKS",
    "POUCHES",
    "ZIP-ON PANELS",
    "SPS",
    "MARITIME",
    "ACCESSORIES",
    "BRAND ITEMS",
    "T-SHIRTS",
    "HATS",
    "ACCESSORIES",
    "CLOSEOUT"
];

// This line of code is for where our search results will be displayed
const resultBox = document.querySelector(".result-box");

// This is for the input field where we will type our input
const inputBox = document.getElementById("input-box")

// Adding onkeyup means that the function will be executed when we start typing.
inputBox.onkeyup = function(){
    // Creating an empty array to store the keywords found above and filter it according to 
    //the input found.
    let result = [];
    let input = inputBox.value;
    // If the input has values, it would store the filtered words in the result array
    // The keyword in the filter section will get the keywords in the availableKeywords and
    // filter the array according to the input provided.
    if (input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);
    }
    // Since we need to display results whenever we type something, we will place the 
    // function here
    display(result);

    // To remove that white line after you search your results and try to search again
    if (!result.length){
        resultBox.innerHTML = '';
    }
}

// The function below will be used to display the contents of the search bar.
// The map will get each data from the array then add the li tags which will be returned
// and stored in the const content
// The onclick would allow us to paste the clicked suggestions on the input field
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    // The .join is there to remove the comma on the result box
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

// We have to define the selectInput
function selectInput(list) {
    inputBox.value  = list.innerHTML;
    // After selecting a chosen topic, the other results would disappear
    resultBox.innerHTML = '';
}

