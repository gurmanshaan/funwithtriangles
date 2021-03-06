const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function calculateSumofAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumofAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    outputEl.innerText = "Yay, The angles form a Triangle!";
  } else {
    outputEl.innerText = "Oh Oh ! The angles don't form a Triangle.";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
