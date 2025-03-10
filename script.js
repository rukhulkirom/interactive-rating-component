const ratingState = document.getElementById("rating-state");
const thankyouState = document.getElementById("thank-you-state");
const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");
const ratingResult = document.getElementById("rating-result");

let selectedRating = 0;

ratingBtn.forEach((button) => {
  button.addEventListener("click", () => {
    ratingBtn.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedRating = button.getAttribute("data-value");
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRating > 0) {
    thankyouState.style.display = "flex";
    ratingState.style.display = "none";

    ratingResult.textContent = selectedRating;
  } else {
    thankyouState.style.display = "flex";
    ratingState.style.display = "none";
  }
});
