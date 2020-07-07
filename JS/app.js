const homeButton = document.getElementById("home-button");

const aboutMeButton = document.getElementById("about-me-button");
const aboutMeSection = document.getElementById("about-me-content");
const aboutMeContainer = document.getElementById("about-me-container");

const projectsButton = document.getElementById("projects-button");
const projectsSection = document.getElementById("projects");
const projectsContainer = document.getElementById("projects-container");

aboutMeButton.addEventListener("click", () => {
  projectsSection.style.transform = "scale(0)";
  projectsContainer.style.transform = "scale(0)";
  if (aboutMeSection.style.transform === "scale(1)") {
    aboutMeSection.style.transform = "scale(0)";
    aboutMeContainer.style.transform = "scale(0)";
  } else {
    aboutMeSection.style.transform = "scale(1)";
    aboutMeContainer.style.transform = "scale(1)";
  }
});

homeButton.addEventListener("click", () => {
  aboutMeSection.style.transform = "scale(0)";
  aboutMeContainer.style.transform = "scale(0)";
  projectsSection.style.transform = "scale(0)";
  projectsContainer.style.transform = "scale(0)";
});

projectsButton.addEventListener("click", () => {
  aboutMeSection.style.transform = "scale(0)";
  aboutMeContainer.style.transform = "scale(0)";
  if (projectsSection.style.transform === "scale(1)") {
    projectsSection.style.transform = "scale(0)";
    projectsContainer.style.transform = "scale(0)";
  } else {
    projectsSection.style.transform = "scale(1)";
    projectsContainer.style.transform = "scale(1)";
  }
});
