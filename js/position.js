//Waits for page to load then executes the function
window.addEventListener('load', ()=> {

//getRandomInt chooses the position
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//all possible positions
//hides unneeded buttons 
  switch (getRandomInt(8)) {
      case 0:
        document.getElementById("0").style.display = "block";
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        break; 
      case 1:
        document.getElementById("0").style.display = "none";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        break;
      case 2:
        document.getElementById("0").style.display = "none"; 
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        break;
      case 3:
        document.getElementById("0").style.display = "none"; 
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        break;
      case 4:
        document.getElementById("0").style.display = "none"; 
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        break;
      case 5:
        document.getElementById("0").style.display = "none"; 
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "block";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        break;
      case 6:
        document.getElementById("0").style.display = "none"; 
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "none";
        break;
      case 7:
        document.getElementById("0").style.display = "none"; 
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "block";
        break;
  }
});