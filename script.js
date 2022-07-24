const input = document.querySelector("#input");

const grid = document.querySelector(".grid-4-col");
let str = "";
let copystr = "";

grid.addEventListener("click", function (e) {
  input.style.backgroundColor = "black";
  if (e.target.classList.contains("btn")) {
    console.log(e.target);
    let buttonValues = e.target.innerHTML;
    switch (buttonValues) {
      case "c":
        str = copystr = "";

        input.value = copystr;
        break;
      case "←":
        console.log(buttonValues);
        str = str.slice(0, -1);
        copystr = copystr.slice(0, -1);
        input.value = copystr;
        break;
      case "÷":
        copystr += buttonValues;
        input.value = copystr;
        str += "/";
        break;
      case "×":
        copystr += buttonValues;
        input.value = copystr;
        str += "*";
        break;
      case "=":
        try {
          let result = eval(str);
          if (Number.isInteger(result)) {
            copystr = str = "" + result;
            input.value = copystr;
          } else {
            copystr = str = "" + parseFloat(result).toFixed(2);
            input.value = copystr;
          }
        } catch (error) {
          input.style.backgroundColor = "red";
          // console.log
        }

        break;

      default:
        if (str === "0" && buttonValues === "×") {
          str += buttonValues;
          copystr += buttonValues;
          input.value = copystr;
        } else if (str === "0" && buttonValues === "+") {
          str += buttonValues;
          copystr += buttonValues;
          input.value = copystr;
        } else if (str === "0" && buttonValues === "-") {
          str += buttonValues;
          copystr += buttonValues;
          input.value = copystr;
        } else if (str === "0") {
          str = buttonValues;
          copystr = buttonValues;
          input.value = copystr;
        } else {
          str += buttonValues;
          copystr += buttonValues;
          input.value = copystr;
          break;
        }
    }
  }
});
