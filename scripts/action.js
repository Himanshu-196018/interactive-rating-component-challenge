const subButton = document.getElementById("subButton");
const feedbackCard = document.getElementById("feedback-card");
const responseCard = document.getElementById("response-card");
const ratingList = document.getElementsByClassName("rating")[0].children;
const rated = document.getElementById("rated");

function clickEvent() {
  // console.log(feedbackCard);
  feedbackCard.style.display = "none";
  responseCard.style.display = "block";
}

function resetRest() {
  for (let i = 0; i < ratingList.length; i++) {
    ratingList[i].style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    ratingList[i].style.color = "var(--light-grey)";
  }
}

for (let i = 0; i < ratingList.length; i++) {
  ratingList[i].onclick = function customFun() {
    resetRest();
    ratingList[i].style.backgroundColor = "var(--light-grey)";
    ratingList[i].style.color = "white";
    rated.innerHTML = i + 1;
  };
}
