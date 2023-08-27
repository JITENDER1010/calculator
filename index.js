let displayValue = "0";

    function appendToDisplay(value) {
      if (displayValue === "0" && value !== '.') {
        displayValue = value;
      } else {
        displayValue += value;
      }
      updateDisplay();
    }

    function removeLastDigit() {
      displayValue = displayValue.slice(0, -1);
      if (displayValue === "") {
        displayValue = "0";
      }
      updateDisplay();
    }

    function updateDisplay() {
      document.getElementById("display").innerText = displayValue;
    }

    function clearDisplay() {
      displayValue = "0";
      updateDisplay();
    }

    function calculate() {
      try {
        displayValue = eval(displayValue).toString();
      } catch (error) {
        displayValue = "Error";
      }
      updateDisplay();
    }

    // Keyboard input handler
    document.addEventListener("keydown", (event) => {
        const key = event.key;
        const keyCode = event.keyCode;
        if (/^[0-9+\-*/.=]$/.test(key) || keyCode === 13 || keyCode === 8) {
          event.preventDefault();
          if (key === "=" || keyCode === 13) {
            calculate();
          } else if (key === "Backspace" || keyCode === 8) {
            removeLastDigit();
          } else if (key === "Escape") {
            clearDisplay();
          } else {
            appendToDisplay(key);
          }
        }
      });

  
  
  
  
