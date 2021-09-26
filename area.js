const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector(".output");

function calculateBaseMultHeight(a, b) {
  const baseMultHeight = a * b;
  return baseMultHeight;
}

function calculateArea() {
  const baseMultHeight = calculateBaseMultHeight(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const area = baseMultHeight / 2;
  outputEl.innerText = "The area of Triangle is " + area + " cm².";
}

hypotenuseBtn.addEventListener("click", calculateArea);
