// The following code will be my Javascript for the language selector in the Header.

// First we define all the variables
const dropdown = document.querySelector('.drop-down');
const list = document.querySelector(".list");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selectedImg");

// Add animation for the drop down box, allowing you to expand and minimize the drop down 
// fields.
dropdown.addEventListener('click', ()=> {
    list.classList.toggle('show');
})


// This is used to select another language 
list.addEventListener('click', (event) => {
    let item = event.target;

    // If the user clicks on the image, it will now act the same as if the person click the
    // words
    if (!item.classList.contains('item')) {
        item = item.closest('.item');
    }

    // Check if '.item' was found
    if (item) {
        const img = item.querySelector('img');
        const text = item.querySelector('.text');

        // This is used to select another language and add it to the current language choice 
        if (img && text) {
            selectedImg.src = img.src;
            selected.innerHTML = text.textContent;
        }
    }
});