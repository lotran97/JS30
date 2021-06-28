var audioA = new Audio("sounds/clap.wav");
var audioS = new Audio("sounds/hihat.wav");
var audioD = new Audio("sounds/kick.wav");
var audioF = new Audio("sounds/openhat.wav");
var audioG = new Audio("sounds/boom.wav");
var audioH = new Audio("sounds/ride.wav");
var audioJ = new Audio("sounds/snare.wav");
var audioK = new Audio("sounds/tom.wav");
var audioL = new Audio("sounds/tink.wav");

var mesDivs = document.querySelectorAll(".key");


document.addEventListener("keydown", function(event) {
  if (event.code == "KeyQ") {
    console.log('Tu as appuyer sur la touche A!');
    mesDivs[0].classList.add("playing");
    audioA.play();
  }
  else if (event.code == "KeyS"){
      console.log('Tu as appuyer sur la touche S!');
      mesDivs[1].classList.add("playing");
      audioS.play();
  }
   else if (event.code == "KeyD"){
      console.log('Tu as appuyer sur la touche D!');
      mesDivs[2].classList.add("playing");
      audioD.play();
  }
   else if (event.code == "KeyF"){
      console.log('Tu as appuyer sur la touche F!');
      mesDivs[3].classList.add("playing");
      audioF.play();
  }
   else if (event.code == "KeyG"){
      console.log('Tu as appuyer sur la touche G!');
      mesDivs[4].classList.add("playing");
      audioG.play();
  }
   else if (event.code == "KeyH"){
      console.log('Tu as appuyer sur la touche H!');
      mesDivs[5].classList.add("playing");
      audioH.play();
  }
   else if (event.code == "KeyJ"){
      console.log('Tu as appuyer sur la touche J!');
      mesDivs[6].classList.add("playing");
      audioJ.play();
  }
   else if (event.code == "KeyK"){
      console.log('Tu as appuyer sur la touche K!');
      mesDivs[7].classList.add("playing");
      audioK.play();
  }
   else if (event.code == "KeyL"){
      console.log('Tu as appuyer sur la touche L!');
      mesDivs[8].classList.add("playing");
      audioL.play();
  }

});


document.addEventListener("keyup", function(event) {
  if (event.code == "KeyQ") {
    console.log('Tu as lache la touche A!');
    mesDivs[0].classList.remove("playing");
  }
  else if (event.code == "KeyS"){
      console.log('Tu as lache la touche S!');
      mesDivs[1].classList.remove("playing");
  }
   else if (event.code == "KeyD"){
      console.log('Tu as lache la touche D!');
      mesDivs[2].classList.remove("playing");
  }
   else if (event.code == "KeyF"){
      console.log('Tu as lache la touche F!');
      mesDivs[3].classList.remove("playing");
  }
   else if (event.code == "KeyG"){
      console.log('Tu as lache la touche G!');
      mesDivs[4].classList.remove("playing");
  }
   else if (event.code == "KeyH"){
      console.log('Tu as lache la touche H!');
      mesDivs[5].classList.remove("playing");
  }
   else if (event.code == "KeyJ"){
      console.log('Tu as lache la touche J!');
      mesDivs[6].classList.remove("playing");
  }
   else if (event.code == "KeyK"){
      console.log('Tu as lache la touche K!');
      mesDivs[7].classList.remove("playing");
  }
   else if (event.code == "KeyL"){
      console.log('Tu as laché la touche L!');
      mesDivs[8].classList.remove("playing");
  }

});