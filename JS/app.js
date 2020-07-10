const homeButton = document.getElementById("home-button");
const homeName = document.getElementById("name");
const body = document.getElementById("body");

const aboutMeButton = document.getElementById("about-me-button");
const aboutMeContainer = document.getElementById("about-me-container");

const projectsButton = document.getElementById("projects-button");
const projectsContainer = document.getElementById("projects-container");

aboutMeButton.addEventListener("click", () => {
  if (aboutMeContainer.style.opacity === "100") {
    homeName.style.opacity = "100";
    setTimeout(()=>{
      aboutMeContainer.style.transform = "scale(0)"
      projectsContainer.style.transform = "scale(0)"
    }, 750)
    aboutMeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "0";
    body.classList.remove("stretch");
    body.classList.remove("about-me-stretch");
    projectsContainer.style.pointerEvents = "none";
    aboutMeContainer.style.pointerEvents = "none";
  } else {
    aboutMeContainer.style.display = "block"
    homeName.style.opacity = "0";
    aboutMeContainer.style.transform = "scale(1)"
    setTimeout(()=>{
      projectsContainer.style.transform = "scale(0)"
    }, 750)
    aboutMeContainer.style.opacity = "100";
    projectsContainer.style.opacity = "0";
    body.classList.remove("stretch");
    body.classList.add("about-me-stretch");
    projectsContainer.style.pointerEvents = "none";
    aboutMeContainer.style.pointerEvents = "auto";
  }
});

homeButton.addEventListener("click", () => {
  homeName.style.opacity = "100";
  aboutMeContainer.style.opacity = "0";
  projectsContainer.style.opacity = "0";
  body.classList.remove("stretch");
  body.classList.remove("about-me-stretch");
  aboutMeContainer.style.pointerEvents = "none";
  projectsContainer.style.pointerEvents = "none";
  setTimeout(()=>{
    aboutMeContainer.style.transform = "scale(0)"
    projectsContainer.style.transform = "scale(0)"
  }, 750)
});

projectsButton.addEventListener("click", () => {
  if (projectsContainer.style.opacity === "100") {
    homeName.style.opacity = "100";
    aboutMeContainer.style.opacity = "0";
    setTimeout(()=>{
      aboutMeContainer.style.transform = "scale(0)"
      projectsContainer.style.transform = "scale(0)"
    }, 750)
    projectsContainer.style.opacity = "0";
    body.classList.remove("stretch");
    body.classList.remove("about-me-stretch");
    projectsContainer.style.pointerEvents = "none";
    aboutMeContainer.style.pointerEvents = "none";
  } else {
    projectsContainer.style.opacity = "0";
    homeName.style.opacity = "0";
    aboutMeContainer.style.opacity = "0";
    projectsContainer.style.transform = "scale(1)"
    projectsContainer.style.opacity = "100";
    setTimeout(()=>{
      aboutMeContainer.style.transform = "scale(0)"
    }, 750)
    body.classList.add("stretch");
    body.classList.remove("about-me-stretch");
    projectsContainer.style.pointerEvents = "auto";
    aboutMeContainer.style.pointerEvents = "none";
  }
});
