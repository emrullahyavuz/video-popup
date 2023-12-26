
const cardButton = document.querySelector(".cardButton");
const videoContent = document.querySelector(".videoContent");
const video = document.querySelector("video");


cardButton.addEventListener("click", () => {
    videoContent.classList.toggle("active")
})

const closeIcon = videoContent.querySelector(".closeIcon");

closeIcon.addEventListener("click", () => {
    videoContent.classList.toggle("active")
    video.pause();
    video.currentTime = 0;
})


