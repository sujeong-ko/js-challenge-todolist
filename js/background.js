const body = document.body;
const bgBtn = document.querySelector(".article-sec__btn:first-child");
const colors = [
    "#cdb4db",
    "#ffc8dd",
    "#ffafcc",
    "#bde0fe",
    "#a2d2ff",
    "#b3dee2",
    "#f2f5ff", 
    "#d1d1d1",
    "#e1dbd6",
    "#e2e2e2",
    "#f9f6f2",
    "#809bce",
    "#95b8d1",
    "#b8e0d2",
    "#d6eadf",
    "#e8dff5",
    "#fce1e4",
    "#fcf4dd",
    "#ddedea",
    "#daeaf6"
  ];

  function handleBgColor(){
    const firstColor = colors[Math.floor(Math.random() * colors.length)]
    const secondColor = colors[Math.floor(Math.random() * colors.length)]
    const gradient = `(45deg, ${firstColor}, ${secondColor})`
    if (firstColor !== secondColor){
        body.style = "background: linear-gradient" + gradient;
    } else {handleBgColor()}
  };

  handleBgColor()
  
bgBtn.addEventListener("click", handleBgColor);


const darkBtn = document.querySelector(".article-sec__btn:nth-child(2)");
const DARK_MODE = "dark-mode";

function handleDarkMode(){
  body.classList.toggle(DARK_MODE);
  const icon = document.querySelector(".mode-change i");
  if(body.classList.contains(DARK_MODE)){
    body.style = "";
    icon.className = "fa-solid fa-sun fa-2x";
    bgBtn.classList.add("hidden");
  } else {
    handleBgColor();
    icon.className = "fa-solid fa-moon fa-2x";
    bgBtn.classList.remove("hidden");
  }
}

darkBtn.addEventListener("click", handleDarkMode);

