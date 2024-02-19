
let totalPrice = 0;
let sitCount = 0;

const cards = document.querySelectorAll(".card");

for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  card.addEventListener("click", function () {
    if (sitCount < 4 && !card.classList.contains("selected")) {
      const title = card.innerText;
      const price = 550;

      const titleContainer = document.getElementById("title-container");
      const p = document.createElement("p");
      
      p.innerText = title;
      titleContainer.appendChild(p);
      

      totalPrice += price;
      document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

      card.classList.add("selected");
      sitCount++;
      document.getElementById("sit-count").innerText = sitCount;
      card.style.backgroundColor = "#1DD100";
      
      const availableSeat = document.getElementById("left-seat");
      const seatNum = availableSeat.innerText;
      const leftSeat = parseInt(seatNum);
      const newSeat = leftSeat - 1;
      availableSeat.innerText = newSeat;
    }
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement;

  if (couponCode === "NEW15") {
    const grandPriceElement = document.getElementById("grand-price");
    const grandPrice = totalPrice - totalPrice * 0.15;
    grandPriceElement.innerText = grandPrice.toFixed(2);
    document.querySelector(".couponInput").style.display = "none";

  } else if (couponCode === "Couple 20") {
    const grandPriceElement = document.getElementById("grand-price");
    const grandPrice = totalPrice - totalPrice * 0.2;
    grandPriceElement.innerText = grandPrice.toFixed(2);
    document.querySelector(".couponInput").style.display = "none";

  } else {
    alert("Please enter a valid coupon code.");
  }
});


const seatButtons = document.querySelectorAll("#sit");
const nextButton = document.getElementById("nextButton");
const numberInput = document.getElementById("number");

function isSeatSelected() {
  for (const button of seatButtons) {
    if (button.classList.contains("selected")) {
      return true;
    }
  }
  return false;
}

function updateNextButton() {
  if (isSeatSelected() && numberInput.value.length > 0) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}


seatButtons.forEach(button => button.addEventListener("click", updateNextButton));
numberInput.addEventListener("keyup", updateNextButton);


updateNextButton();


