const input = document.querySelector("#input");

const grid = document.querySelector(".grid-4-col");
let str = "";

grid.addEventListener("click", function (e) {
  input.style.backgroundColor = "black";
  if (e.target.classList.contains("btn")) {
    console.log(e.target);
    let buttonValues = e.target.innerHTML;
    switch (buttonValues) {
      case "c":
        str = "";
        input.value = str;
        break;
      case "←":
        console.log(buttonValues);
        str = str.slice(0, -1);
        input.value = str;
        break;
      case "=":
        try {
          let result = eval(str);
          if (Number.isInteger(result)) {
            str = "" + result;
            input.value = str;
          } else {
            str = "" + parseFloat(result).toFixed(2);
            input.value = str;
          }
        } catch (error) {
          input.style.backgroundColor = "red";
          // console.log
        }

        break;

      default:
        if (str === "0" && buttonValues === "*") {
          str += buttonValues;
          input.value = str;
        } else if (str === "0" && buttonValues === "-") {
          str += buttonValues;
          input.value = str;
        } else if (str === "0" && buttonValues === "/") {
          str += buttonValues;
          input.value = str;
        } else if (str === "0" && buttonValues === "+") {
          str += buttonValues;
          input.value = str;
        } else if (str === "0") {
          str = buttonValues;
          input.value = str;
        } else {
          str += buttonValues;
          input.value = str;
          break;
        }
    }
  }
});
