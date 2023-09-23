const subButton = document.getElementById("subButton");
const feedbackCard = document.getElementById("feedback-card");
const responseCard = document.getElementById("response-card");
const rating = document.getElementsByClassName("rating")[0].children;
const ratingList = document.getElementsByClassName("num");

function clickEvent() {
  // console.log(feedbackCard);
  feedbackCard.style.display = "none";
  responseCard.style.display = "block";
}

function customFun(e) {
  ratingList[e].style.backgroundColor = "var(--light-grey)";
  ratingList[e].style.color = "white";
}

console.log(rating);
