//declaring variables
const gparng = document.querySelector("#gpa-rng");
const dispgp = document.querySelector("#display-rnggpa");

//giving function to button on the wheel gif
gparng.addEventListener("click",() =>{

    //generating random number from 0.0000 to 4.0000
  rnggp= (Math.random() * (4.000 - 0.000) + 0.000).toFixed(4);

  //if statment to display the rng gpa with a sutiable image according to the gpa level
  if (rnggp>3.000) {
    dispgp.innerHTML =`your next semester lucky GPA is  ${rnggp}`;
    var img = document.createElement("img");
 
img.src = "images/lessthan4.png";
var src = document.getElementById("less4");
 
src.appendChild(img);

} else if (rnggp<3.000 && rnggp>=2.000) {
    dispgp.innerHTML =`your next semester lucky GPA is  ${rnggp}`;
    var img = document.createElement("img");
 
    img.src = "images/lessthan3.jpg";
    var src = document.getElementById("less3");
     
    src.appendChild(img);
}
else if (rnggp<2.000 && rnggp>=1.000) {
        dispgp.innerHTML =`your next semester lucky GPA is  ${rnggp}`;
        var img = document.createElement("img");
 
        img.src = "images/lessthan2.jpg";
        var src = document.getElementById("less2");
         
        src.appendChild(img);
}
else if (rnggp<1.000){
      dispgp.innerHTML =`your next semester lucky GPA is  ${rnggp}`;
      var img = document.createElement("img");
 
img.src = "images/lessthan1.png";
var src = document.getElementById("less1");
 
src.appendChild(img);
}
else{
    null;
}
});
