const gparng = document.querySelector("#gpa-rng");
const dispgp = document.querySelector("#display-rnggpa");
/*
const dispgp1 = document.querySelector("#display-rnggpa1");
const dispgp2 = document.querySelector("#display-rnggpa2");
const dispgp3 = document.querySelector("#display-rnggpa3");*/


gparng.addEventListener("click",() =>{

  rnggp= (Math.random() * (4.000 - 0.000) + 0.000).toFixed(4);

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
