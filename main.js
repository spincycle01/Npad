// document.addEventListener('DOMContentLoaded', () => {
  console.log("hi");

  let noteyContainer = document.createElement("div");
  noteyContainer.id = "mydiv";
  noteyContainer.style.position = "fixed";
  noteyContainer.style.left = "50px";
  noteyContainer.style.top = "50px";

  noteyContainer.style.zIndex = 9;
  noteyContainer.style.backgroundColor = "#f1f1f1";
  noteyContainer.style.textAlign = "center";
  noteyContainer.style.border = "1px solid #d3d3d3";
  let noteyHeader = document.createElement("div");
  noteyHeader.id="mydivheader";
  noteyHeader.style.padding = "10px";
  noteyHeader.style.cursor = "move";
  noteyHeader.style.zIndex = 10;
  noteyHeader.style.backgroundColor = "#2196F3";
  noteyHeader.style.color = "#fff";

  let noteyMin = document.createElement('button');
  noteyMin.id = "minimizeBtn";
  noteyMin.innerHTML = 'min';
  noteyMin.style.position = 'absolute';
  noteyMin.style.left = '5px';
  noteyMin.style.backgroundColor = "#2196F3";
  noteyMin.style.borderRadius = "10px";
  noteyMin.style.border = "solid 1px";
  noteyMin.style.fontSize = "1em";

  let saveBtn = document.createElement('button');
  saveBtn.id = '#noteypad-save-button'
  saveBtn.innerHTML = 'save';
  saveBtn.style.position = 'absolute';
  saveBtn.style.right = '5px';
  saveBtn.style.backgroundColor = "#2196F3";
  saveBtn.style.borderRadius = "10px";
  saveBtn.style.border = "solid 1px";
  saveBtn.style.fontSize = "1em";

  noteyHeader.innerHTML = 'NoteyPad'
  let newEl = document.createElement("textarea");
  newEl.setAttribute("rows", 40);
  newEl.setAttribute("cols", 40);
  
 
  noteyHeader.appendChild(noteyMin);
  noteyHeader.appendChild(saveBtn);
  noteyContainer.appendChild(noteyHeader);
  noteyContainer.appendChild(newEl);
  
  const body = document.querySelector("body");
  body.appendChild(noteyContainer);
  
  //Make the DIV element draggagle:
  // dragElement(document.getElementById("mydiv"));
  dragElement(noteyContainer);
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    noteyHeader.onmousedown = dragMouseDown;
    // if (document.getElementById(elmnt.id + "header")) {
    //   /* if present, the header is where you move the DIV from:*/
    //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    // } else {
    //   /* otherwise, move the DIV from anywhere inside the DIV:*/
     // elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  

  saveBtn.addEventListener('click', () => {
    window.localStorage.setItem(`${window.location.href}`,newEl.value)
  });
// })














//stretch feats:
//get random api photos or quotes                   















// let vpWidth = document.documentElement.clientWidth;
// let vpHeight = document.documentElement.clientHeight;

// newEl.style.position = 'fixed';
// newEl.style.left = (vpWidth)/2 + 'px';
// newEl.style.top = (vpHeight)/2 +
//                    window.pageYOffset + 'px';

//<div id="mydiv">
//   <div id="mydivheader">NoteyPad</div>
//   <textarea rows=40 cols=40>Hello</textarea>



// let body = document.querySelector('body');


// </div>