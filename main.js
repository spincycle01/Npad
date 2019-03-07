
  console.log("hey, you looking to takes some note? NoteyPad");

  let noteyContainer = document.createElement("div");
  noteyContainer.id = "mydiv";
  noteyContainer.style.position = "fixed";

  let vpWidth = document.documentElement.clientWidth;
  let vpHeight = document.documentElement.clientHeight;

  // newEl.style.position = 'fixed';
  // noteyContainer.style.left = vpWidth/2 + 'px';
  // noteyContainer.style.top = vpHeight/5 + 'px';

  noteyContainer.style.left = "50%";
  noteyContainer.style.top = "40%";
  noteyContainer.style.minWidth = "350px";

  noteyContainer.style.zIndex = 9;
  noteyContainer.style.backgroundColor = "#f1f1f1";
  noteyContainer.style.textAlign = "center";
  noteyContainer.style.border = "1px solid #d3d3d3";
  let noteyHeader = document.createElement("div");
  noteyHeader.id="mydivheader";
  noteyHeader.style.padding = "8px";
  noteyHeader.style.cursor = "move";
  noteyHeader.style.zIndex = 20;
  noteyHeader.style.backgroundColor = "#2196F3";
  noteyHeader.style.color = "#fff";
  noteyHeader.style.fontSize = "16px";

  let noteyMin = document.createElement('button');
  noteyMin.id = "minimizeBtn";
  noteyMin.innerHTML = 'min ';
  noteyMin.style.position = 'absolute';
  noteyMin.style.left = '5px';
  noteyMin.style.backgroundColor = "#2196F3";
  noteyMin.style.borderRadius = "10px";
  noteyMin.style.border = "solid white 1px";
  noteyMin.style.fontSize = "10px";
  noteyMin.style.color = "#fff";
  
  let closeBtn = document.createElement('button');
  closeBtn.id = "closeBtn";
  closeBtn.innerHTML = 'close';
  closeBtn.style.position = 'absolute';
  closeBtn.style.left = '40px';
  closeBtn.style.backgroundColor = "#2196F3";
  closeBtn.style.borderRadius = "10px";
  closeBtn.style.border = "solid white 1px";
  closeBtn.style.fontSize = "10px";
  closeBtn.style.color = "#fff";


  let premiumBtn = document.createElement('button');
  premiumBtn.id = "premium-button";
  premiumBtn.innerHTML = 'pro';
  premiumBtn.style.position = 'absolute';
  premiumBtn.style.right = '83px';
  premiumBtn.style.backgroundColor = "#2196F3";
  premiumBtn.style.borderRadius = "10px";
  premiumBtn.style.border = "solid white 1px";
  premiumBtn.style.fontSize = "10px";
  premiumBtn.style.color = "#fff";

  let saveBtn = document.createElement('button');
  saveBtn.id = '#noteypad-save-button'
  saveBtn.innerHTML = 'save';
  saveBtn.style.position = 'absolute';
  saveBtn.style.right = '5px';
  saveBtn.style.backgroundColor = "#2196F3";
  saveBtn.style.borderRadius = "10px";
  saveBtn.style.border = "solid white 1px";
  saveBtn.style.fontSize = "10px";
  saveBtn.style.color = "#fff";

  let loadBtn = document.createElement('button');
  loadBtn.id = "load-button";
  loadBtn.innerHTML = 'load';
  loadBtn.style.position = 'absolute';
  loadBtn.style.right = '45px';
  loadBtn.style.backgroundColor = "#2196F3";
  loadBtn.style.borderRadius = "10px";
  loadBtn.style.border = "solid white 1px";
  loadBtn.style.fontSize = "10px";
  loadBtn.style.color = "#fff";


  noteyHeader.innerHTML = 'NoteyPad'
  let newEl = document.createElement("textarea");
  newEl.setAttribute("rows", 20);
  newEl.setAttribute("cols", 40);
  newEl.style.minWidth = "350px";
  newEl.style.zIndex = 20;
  newEl.style.display = "initial"
  
 
  




  noteyHeader.appendChild(noteyMin);
  noteyHeader.appendChild(closeBtn);
  noteyHeader.appendChild(premiumBtn);
  noteyHeader.appendChild(saveBtn);
  noteyHeader.appendChild(loadBtn);
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
  
    noteyMin.addEventListener("click", function() {
      if (newEl.style.display === "initial") {
        console.log("minimize");  
        newEl.style.display = "none";
        noteyMin.innerHTML = 'max';
      } else {
      console.log("maximize");  
      newEl.style.display = "initial";
      noteyMin.innerHTML = 'min';
      }
    });


  saveBtn.addEventListener('click', () => {
    window.localStorage.setItem(`${window.location.href}`,newEl.value)
  });

  loadBtn.addEventListener('click', () => {
    console.log('getting...')
    if (window.localStorage.getItem(`${window.location.href}`)){
      console.log('getting: ',window.localStorage.getItem(`${window.location.href}`),'should be: ',newEl.val)
      newEl.value = window.localStorage.getItem(`${window.location.href}`)
    }
  });


  closeBtn.addEventListener('click', () => {
    noteyContainer.style.display = 'none'
  })
  
  closeBtn.onmouseover = function () {
    
    this.style.opacity = .4;
  }
  closeBtn.onmouseleave = function () {
    this.style.opacity = 1;
    
  }

  saveBtn.onmouseover = function () {
    
    this.style.opacity = .4;
  }
  saveBtn.onmouseleave = function () {
    this.style.opacity = 1;
    
  }
  noteyMin.onmouseover = function () {
    
    this.style.opacity = .4;
  }
  noteyMin.onmouseleave = function () {
    this.style.opacity = 1;
    
  }

  loadBtn.onmouseover = function () {
    
    this.style.opacity = .4;
  }
  loadBtn.onmouseleave = function () {
    this.style.opacity = 1;
    
  }

  premiumBtn.onmouseover = function () {
    
    this.style.opacity = .4;
  }
  premiumBtn.onmouseleave = function () {
    this.style.opacity = 1;
    
  }



  //must have Moesif cors chrome extension installed
  fetch('https://www.metaweather.com/api/location/2459115/')
  .then(response => response.json())
  .then(res => {
    let date = res['consolidated_weather'][0]['applicable_date']
    let weather = res['consolidated_weather'][0]['weather_state_name']
    newEl.setAttribute('placeholder',"New York \nDate: " + date + '\n' + weather)
  })



  premiumBtn.addEventListener('click', () => {
    function premiumTrial(){
      noteyHeader.style.backgroundColor = 'rgb(0,32,102)'
      noteyMin.style.backgroundColor = 'rgb(0,32,102)'
      premiumBtn.style.backgroundColor = 'rgb(0,32,102)'
      loadBtn.style.backgroundColor = 'rgb(0,32,102)'
      saveBtn.style.backgroundColor = 'rgb(0,32,102)'
      closeBtn.style.backgroundColor = 'rgb(0,32,102)'

      noteyHeader.style.color = 'white'
      noteyMin.style.color = 'white'
      premiumBtn.style.color = 'white'
      loadBtn.style.color = 'white'
      saveBtn.style.color = 'white'
      closeBtn.style.color = 'white'

      newEl.style.backgroundImage = 'url(https://i.imgur.com/OvbGwwI.jpg)'
      newEl.style.opacity = 0.2;
    }
    function endPremiumTrial(){
      alert('Your NoteyPad Pro (TM) trial subscription has expired. Special offer of $49.99 (CAD) for 1 FULL hour of Pro!')
      noteyHeader.style.backgroundColor = '#2196F3'
      noteyMin.style.backgroundColor = '#2196F3'
      premiumBtn.style.backgroundColor = '#2196F3'
      loadBtn.style.backgroundColor = '#2196F3'
      saveBtn.style.backgroundColor = '#2196F3'
      closeBtn.style.backgroundColor = '#2196F3'

      newEl.style.backgroundImage = ''
      newEl.style.background = 'white'
      newEl.style.opacity = 1;


    }
    premiumTrial()
    setTimeout(endPremiumTrial,3000)
  })










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