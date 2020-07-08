const homeButton = document.getElementById("home-button");
const homeName = document.getElementById("name");

const aboutMeButton = document.getElementById("about-me-button");
const aboutMeSection = document.getElementById("about-me-content");
const aboutMeContainer = document.getElementById("about-me-container");

const projectsButton = document.getElementById("projects-button");
const projectsSection = document.getElementById("projects");
const projectsContainer = document.getElementById("projects-container");

aboutMeButton.addEventListener("click", () => {
  homeName.style.display = "none";
  aboutMeContainer.style.display = "block";
  projectsContainer.style.display = "none";
  //   homeName.style.opacity = "0";
  //   projectsSection.style.transform = "scale(0)";
  //   projectsContainer.style.transform = "scale(0)";
  //   if (aboutMeSection.style.transform === "scale(1)") {
  //     aboutMeSection.style.transform = "scale(0)";
  //     aboutMeContainer.style.transform = "scale(0)";
  //   } else {
  //     aboutMeSection.style.transform = "scale(1)";
  //     aboutMeContainer.style.transform = "scale(1)";
  //   }
});

homeButton.addEventListener("click", () => {
  homeName.style.display = "block";
  aboutMeContainer.style.display = "none";
  aboutMeContainer.style.display = "none";
  //   homeName.style.opacity = "100";
  //   aboutMeSection.style.transform = "scale(0)";
  //   aboutMeContainer.style.transform = "scale(0)";
  //   projectsSection.style.transform = "scale(0)";
  //   projectsContainer.style.transform = "scale(0)";
});

projectsButton.addEventListener("click", () => {
  homeName.style.display = "none";
  projectsContainer.style.display = "flex";
  aboutMeContainer.style.display = "none";
  //   homeName.style.opacity = "0";
  //   aboutMeSection.style.transform = "scale(0)";
  //   aboutMeContainer.style.transform = "scale(0)";
  //   if (projectsSection.style.transform === "scale(1)") {
  //     projectsSection.style.transform = "scale(0)";
  //     projectsContainer.style.transform = "scale(0)";
  //   } else {
  //     projectsSection.style.transform = "scale(1)";
  //     projectsContainer.style.transform = "scale(1)";
  //   }
});
