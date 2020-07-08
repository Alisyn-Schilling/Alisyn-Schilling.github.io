const homeButton = document.getElementById("home-button");
const homeName = document.getElementById("name");

const aboutMeButton = document.getElementById("about-me-button");
const aboutMeContainer = document.getElementById("about-me-container");

const projectsButton = document.getElementById("projects-button");
const projectsContainer = document.getElementById("projects-container");

aboutMeButton.addEventListener("click", () => {
  if (aboutMeContainer.style.opacity === "100") {
    homeName.style.opacity = "100";
    aboutMeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "0";
  } else {
    homeName.style.opacity = "0";
    aboutMeContainer.style.opacity = "100";
    aboutMeContainer.style.zIndex = "1";
    projectsContainer.style.opacity = "0";
  }
});

homeButton.addEventListener("click", () => {
  homeName.style.opacity = "100";
  aboutMeContainer.style.opacity = "0";
  projectsContainer.style.opacity = "0";
});

projectsButton.addEventListener("click", () => {
  if (projectsContainer.style.opacity === "100") {
    homeName.style.opacity = "100";
    aboutMeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "0";
  } else {
    homeName.style.opacity = "0";
    aboutMeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "100";
  }
});
