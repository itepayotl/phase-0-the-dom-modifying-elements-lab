const elementToRemove = document.getElementById("main");
elementToRemove.remove();
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
const yourName = 'John'; 
newHeader.textContent = `${yourName} is the champion`;
