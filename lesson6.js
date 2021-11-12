  let select = document.getElementById("selectForm");
  let activeElem;
  let activeColor;

  select.addEventListener("change", function() {
    if (activeElem) {
      hideElement(activeElem);
    }
    activeElem = document.getElementById(select.value);
    displayElement(activeElem); 
  });
  
  function displayElement() {
    activeElem.style.display = 'flex';
    activeElem.style.background = activeColor;
  }

  function hideElement() {
    activeElem.style.display = 'none';
  }

  colorBtn.addEventListener("click", function() {
    let color = document.getElementById("colorPicker").value;
    changeColor(color);
  })

  function changeColor(color) {
    if (activeElem) {
      activeElem.style.background = color;
    }
    activeColor = color;
  }
    
 
