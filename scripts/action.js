const subButton = document.getElementById('subButton');
const feedbackCard = document.getElementById('feedback-card');
const responseCard = document.getElementById('response-card');
const ratingList = document.getElementsByClassName('num');

function clickEvent() {
    // console.log(feedbackCard);
    feedbackCard.style.display = "none";
    responseCard.style.display = "block";
}
