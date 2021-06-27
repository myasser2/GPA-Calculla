const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const credithour = document.querySelector("#credit-hour");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
let gpArry = [];





add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    credithour.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong input,check and try again");
  } else {
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
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      credithour: credithour.value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.value = "";
    credithour.value = "";
    grade.selectedIndex = "0";
  }
});

calcGp.addEventListener("click", () => {
  let credithours = 0,
    productOfcredithoursAndGrades = 0,
    sumOfProductOfcredithoursAndGrades = 0;

  gpArry.forEach((result) => {
    credithours += parseInt(result.credithour);
    productOfcredithoursAndGrades =
      parseInt(result.credithour) * parseInt(result.grade);
    sumOfProductOfcredithoursAndGrades += productOfcredithoursAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalcredithour = document.createElement("td");
  tdTotalcredithour.innerHTML = `your total credithours is ${credithours}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your GPA is ${(
    sumOfProductOfcredithoursAndGrades / credithours
  ).toFixed(2)} `;

  tr.appendChild(tdTotalcredithour);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
});

