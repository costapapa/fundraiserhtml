// ! Elements
// amount span
const amountSpan = document.querySelector(".amount");
// Amount remaining span
const remainingSpan = document.querySelector(".remaining");
// target span
const targetSpan = document.querySelector("#total");
// Progress bar
const progressBar = document.querySelector(".progress-inner");
// Donation buttons
const donationButtons = document.querySelectorAll("button");
// Raised <p>
const raisedParagraph = document.querySelector(".raised");

// ! Variables
// Target amount
const targetAmount = 50;
// Current donations amount
let donations = 0;
// Remaining amount
let remaining = targetAmount;
// Completion percentage
let completion = 0;

// ! Page load
remainingSpan.innerText = remaining; // Show remaining amount on page load
targetSpan.innerText = targetAmount; // Show target amount on page load

// ! Executions (functions)
// This function is going to accept donations and increase the donation amount
function donateAmount(e) {
  const donationAmount = parseInt(e.target.value);
  // take the donation amount and add it to the donations variable
  donations += donationAmount;
  // update the html with the donation amount
  amountSpan.innerText = donations;

  // calculate the completion percentage and update the variable
  completion = (donations / targetAmount) * 100;
  // update the progressBar width with the completion percentage
  progressBar.style.width = `${completion}%`;

  // calculate the amount remaining by minusing the donations from the total
  remaining = targetAmount - donations;
  // update the remaining amount in the html
  remainingSpan.innerText = remaining;

  // disable buttons if the button value is greater than the remaining
  donationButtons.forEach((btn) => {
    btn.disabled = btn.value > remaining;
  });

  if (completion === 100) {
    // show the goal as being reached
    raisedParagraph.innerHTML = "GOAL REACHED!!!";
    // Add pulse class to progressBar
    progressBar.classList.add("pulse");
  }
}

// ! Events
// add click events to each button that will increase the donation amount
donationButtons.forEach((btn) => btn.addEventListener("click", donateAmount));
