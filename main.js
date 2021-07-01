//declaring variables 
const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const credithour = document.querySelector("#credit-hour");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
//creating array that holds credit hours and grades
let gpArry = [];



//add button
add.addEventListener("click", () => {
  //give error message if required fields are empty
  if (
    courseCode.value === "" ||
    credithour.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong input,check and try again");
  } else {
    //declaring variables
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdcredithour = document.createElement("td");
    tdcredithour.innerHTML = credithour.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdcredithour);
    tr.appendChild(tdGrade);
    //assigning variables to the table body
    tbody.appendChild(tr);
    //make the table and calculate and clear buttons visible which is invisible by default
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    //putting values in the array
    gpArry.push({
      credithour: credithour.value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    //resitting input fields
    courseCode.value = "";
    credithour.value = "";
    grade.selectedIndex = "0";
  }
});

// calculate button
calcGp.addEventListener("click", () => {
      //declaring variables
  let credithours = 0,
    productOfcredithoursAndGrades = 0,
    sumOfProductOfcredithoursAndGrades = 0;
//gpa calculations
  gpArry.forEach((result) => {
    //total number of credit hours(Denominator)
    credithours += parseInt(result.credithour);
    //getting Numerator
    productOfcredithoursAndGrades =
      parseInt(result.credithour) * parseInt(result.grade);
    sumOfProductOfcredithoursAndGrades += productOfcredithoursAndGrades;
  });
  //declaring variables
  const tr = document.createElement("tr");

  tdTotalcredithour = document.createElement("td");
   // total value show output
  tdTotalcredithour.innerHTML = `your total credithours is ${credithours}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
   // total value show output
  tdGpa.innerHTML = `your GPA is ${(
    sumOfProductOfcredithoursAndGrades / credithours
  ).toFixed(2)} `;

  tr.appendChild(tdTotalcredithour);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
    //putting ouput to table foot
  tfoot.appendChild(tr);
});
//clear button
clear.addEventListener("click", () => {
  //resiting array and table
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }
//making the table and clculate and clear button invisible again
  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
});

