

let row = "";
let column = "";
let headName = [];

// take row and column input and validate
document.getElementById("row").addEventListener("click", ()=>{
    document.getElementById("row").style.borderColor = "#dde1e5";
})
document.getElementById("column").addEventListener("click", ()=>{
    document.getElementById("column").style.borderColor = "#dde1e5";
})
document.getElementById("row").addEventListener("focus", ()=>{
    document.getElementById("row").style.borderColor = "#dde1e5";
})
document.getElementById("column").addEventListener("focus", ()=>{
    document.getElementById("column").style.borderColor = "#dde1e5";
})


// onlick action 
document.getElementById("btn").addEventListener("click", getData);

function getData() {
  let r = document.getElementById("row").value;
  let c = document.getElementById("column").value;
  if (r > 0 && r <= 10 && c > 0 && c <= 10) {
    document.getElementById("row").style.borderColor = "#dde1e5";
    row = r;
    document.getElementById("row").style.borderColor = "#dde1e5";
    column = c;
  } else {
    if (r <= 0 || r > 10)
      document.getElementById("row").style.borderColor = "red";
    if (c <= 0 || c > 10)
      document.getElementById("column").style.borderColor = "red";
    alert("value must be 1-10");
  }


  console.log("row-" + row + " column-" + column);// test row and column
  // if(row != "" && column != "" && document.getElementById("tHeader").innerHTML == "")
  //   createHeader();
  if(row != "" && column != ""){
    if(document.getElementById("tHeader").innerHTML == ""){
      createHeader();
    }
    if(document.getElementById("tHeader").innerHTML != ""){
      document.getElementById("tHeader").innerHTML = "";
      document.getElementById("divtable").innerHTML = "";
      createHeader();
    }
  }
}


//_________taking header name by user_________________//
function createHeader() {
  const currDiv = document.getElementById("tHeader");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "divHead");

  for (let i = 0; i < column; i++) {
    const inputhead = document.createElement("input");
    inputhead.setAttribute("type", "text");
    inputhead.setAttribute("placeholder", "Enter header name");
    inputhead.setAttribute(`id`, `head${i}`);
    inputhead.setAttribute("class", "m-1 p-2")
    inputhead.setAttribute("style","border-radius: 5px; borderColor: #dde1e5;")
    newDiv.appendChild(inputhead);
  }
  const hbutton = document.createElement("button");
  hbutton.setAttribute("type", "button");
  hbutton.setAttribute("id", "hbutton");
  hbutton.setAttribute("class","btn btn-primary")
  hbutton.innerText = "Submit";
  newDiv.appendChild(hbutton);

  currDiv.appendChild(newDiv);

  //check onlcick next div empty or not.
  document.getElementById("hbutton").addEventListener("click", ()=>{
      document.getElementById("divtable").innerHTML = "";
      createTable();
  });
}

//______________Creating table_________________//
function createTable() {
  for (let i = 0; i < column; i++) {
    headName[i] = document.getElementById(`head${i}`).value;
  }

 let havDuplicate = true;

  for (let i = 0; i < column; i++) {
    if(headName[i] == ""){
      alert("Input-field is empty.");
      return;
    }
    for (j = i + 1; j < column; j++) {
      if (headName[i].toUpperCase() == headName[j].toUpperCase()) {
        alert("Doublicate header entered.");
        return;
      }else {
        havDuplicate = false;
      }
    }
  }
  if(havDuplicate == false){
      makeTable();
  }
}

function makeTable() {
  const table = document.createElement("table");
  table.setAttribute("class", "table shadow");
  table.setAttribute("style","border-collapse: collapse; border: 1px solid black; border-radius: 5px;");
  //create header of table
  const thead = document.createElement("thead");
  const theadRow = document.createElement("tr");
  for (let i = 0; i < column; i++) {
    const theadName = document.createElement("th");
    theadName.innerText = headName[i];
    theadName.setAttribute("scope", "col");
    theadRow.appendChild(theadName);
  }
  thead.appendChild(theadRow);
  table.appendChild(thead);
  //create body of table
  const tbody = document.createElement("tbody");

  for (let k = 0; k < row; k++) {
    //row
    const tbrow = document.createElement("tr");
    tbrow.setAttribute("scope", "row");
    // console.log(k);
    tbody.appendChild(tbrow);
    // column
    for (let j = 0; j < column; j++) {
      const tbcolumn = document.createElement("td");
      tbcolumn.innerText = "data";
      tbrow.appendChild(tbcolumn);
    }
  }

  table.appendChild(tbody);
  const currentDiv = document.getElementById("divtable");
  currentDiv.appendChild(table);
}
