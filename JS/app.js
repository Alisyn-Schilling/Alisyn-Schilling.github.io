const homeButton = document.getElementById("home-button");
const homeName = document.getElementById("name");

const aboutMeButton = document.getElementById("about-me-button");
const aboutMeContainer = document.getElementById("about-me-container");

const projectsButton = document.getElementById("projects-button");
const projectsContainer = document.getElementById("projects-container");

aboutMeButton.addEventListener("click", () => {
  if (aboutMeContainer.style.display === "block") {
    homeName.style.display = "block";
    aboutMeContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else {
    homeName.style.display = "none";
    aboutMeContainer.style.display = "block";
    projectsContainer.style.display = "none";
  }
});

homeButton.addEventListener("click", () => {
  homeName.style.display = "block";
  aboutMeContainer.style.display = "none";
  projectsContainer.style.display = "none";
});

projectsButton.addEventListener("click", () => {
  if (projectsContainer.style.display === "flex") {
    homeName.style.display = "block";
    aboutMeContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else {
    homeName.style.display = "none";
    aboutMeContainer.style.display = "none";
    projectsContainer.style.display = "flex";
  }
});
