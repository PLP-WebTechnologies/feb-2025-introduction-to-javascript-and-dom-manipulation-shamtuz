// Function to change text content dynamically
function changeText() {
    const description = document.getElementById('description');
    description.textContent = "The text has been changed dynamically!";
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    const description = document.getElementById('description');
    description.style.color = 'blue';
    description.style.fontWeight = 'bold';
}

// Function to add a new element
function addElement() {
    const dynamicContent = document.getElementById('dynamicContent');
    const newElement = document.createElement('p');
    newElement.textContent = "A new paragraph has been added!";
    dynamicContent.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const dynamicContent = document.getElementById('dynamicContent');
    const lastElement = dynamicContent.lastElementChild;
    if (lastElement) {
        dynamicContent.removeChild(lastElement);
    } else {
        alert("No elements to remove!");
    }
}

// Event listeners for buttons
document.getElementById('changeTextButton').addEventListener('click', changeText);
document.getElementById('changeStyleButton').addEventListener('click', changeStyle);
document.getElementById('addElementButton').addEventListener('click', addElement);
document.getElementById('removeElementButton').addEventListener('click', removeElement);