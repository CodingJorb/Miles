//Waits for page to load then executes the function
window.addEventListener('load', ()=> {

//getRandomInt chooses the position
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//all possible positions
//hides unneeded buttons 
  switch (getRandomInt(3)) {
      case 0:
        document.getElementById("a").style.display = "block";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        break; 
      case 1:
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "block";
        document.getElementById("c").style.display = "none";
        break;
      case 2:
        document.getElementById("a").style.display = "none"; 
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "block";
        break;
  }
});