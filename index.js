// document.addEventListener("click", function handleClickOutsideBox(event) {
//   const sidebar = document.getElementById("sidebar");
//   if (sidebar.classList.contains("active-sidebar")) {
//     sidebar.classList.remove("active-sidebar");
//   }
// });

const makeActive = (id) => {
  const activeButtons = document.querySelectorAll(".active-company-name");
  if (activeButtons.length > 0) {
    activeButtons.forEach((elem) => {
      elem.classList.remove("active-company-name");
      elem.classList.add("company-name");
    });
  }

  const button = document.getElementById(id);

  button.classList.add("active-company-name");
  button.classList.remove("company-name");
};

const showCompaniesExperience = (id) => {
  makeActive(id);

  const activeButtons = document.querySelectorAll(".active-experience");
  if (activeButtons.length > 0) {
    activeButtons.forEach((elem) => {
      elem.classList.remove("active-experience");
      elem.classList.add("experience-company");
    });
  }

  const button = document.getElementById(id + "-company");

  button.classList.add("active-experience");
  button.classList.remove("experience-company");
};

const toggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("active-sidebar")) {
    sidebar.classList.remove("active-sidebar");
  } else {
    sidebar.classList.add("active-sidebar");
  }

  const navLine = document.getElementById("nav-line");

  if (navLine.classList.contains("active-nav-line")) {
    navLine.classList.remove("active-nav-line");
  } else {
    navLine.classList.add("active-nav-line");
  }

  const navLine1 = document.getElementById("nav-line-1");

  if (navLine1.classList.contains("active-nav-line-1")) {
    navLine1.classList.remove("active-nav-line-1");
  } else {
    navLine1.classList.add("active-nav-line-1");
  }

  const navLine2 = document.getElementById("nav-line-2");

  if (navLine2.classList.contains("active-nav-line-2")) {
    navLine2.classList.remove("active-nav-line-2");
  } else {
    navLine2.classList.add("active-nav-line-2");
  }

  const centerContents = document.querySelectorAll(".center-content");
  centerContents.forEach((elem) => {
    if (elem.classList.contains("blur-content")) {
      elem.classList.remove("blur-content");
    } else {
      elem.classList.add("blur-content");
    }
  });

  const html = document.querySelector("html");
  if (html.classList.contains("sidebar-open")) {
    html.classList.remove("sidebar-open");
  } else {
    html.classList.add("sidebar-open");
  }
};

const imageContainer = document.getElementById("image");

const fakeBorder = document.getElementById("image-fake-border");

window.addEventListener("load", () => {
  const about = document.getElementById("about-menu");
  const experience = document.getElementById("experience-menu");
  const contact = document.getElementById("contact-menu");
  const resume = document.getElementById("resume-menu");
  const myNameIs = document.getElementById("my-name-is");
  const fullName = document.getElementById("fullname");
  const buildThings = document.getElementById("build-things");
  const selfIntro = document.getElementById("self-intro");

  if (about.classList.contains("initial-about")) {
    about.classList.add("final-about");
    about.classList.remove("initial-about");
  }

  if (experience.classList.contains("initial-experience")) {
    experience.classList.add("final-experience");
    experience.classList.remove("initial-experience");
  }

  if (contact.classList.contains("initial-contact")) {
    contact.classList.add("final-contact");
    contact.classList.remove("initial-contact");
  }

  if (resume.classList.contains("initial-resume")) {
    resume.classList.add("final-resume");
    resume.classList.remove("initial-resume");
  }

  if (myNameIs.classList.contains("initial-my-name-is")) {
    myNameIs.classList.remove("initial-my-name-is");
    myNameIs.classList.add("final-my-name-is");
  }

  if (fullName.classList.contains("initial-fullname")) {
    fullName.classList.remove("initial-fullname");
    fullName.classList.add("final-fullname");
  }

  if (buildThings.classList.contains("initial-build-things")) {
    buildThings.classList.remove("initial-build-things");
    buildThings.classList.add("final-build-things");
  }

  if (selfIntro.classList.contains("initial-self-intro")) {
    selfIntro.classList.remove("initial-self-intro");
    selfIntro.classList.add("final-self-intro");
  }
});

window.addEventListener("unload", () => {
  const about = document.getElementById("about-menu");
  const experience = document.getElementById("experience-menu");
  const contact = document.getElementById("contact-menu");
  const resume = document.getElementById("resume-menu");
  const myNameIs = document.getElementById("my-name-is");
  const fullName = document.getElementById("fullname");
  const buildThings = document.getElementById("build-things");
  const selfIntro = document.getElementById("self-intro");

  about.classList.remove("final-about");
  about.classList.add("initial-about");

  experience.classList.remove("final-experience");
  experience.classList.add("initial-experience");

  contact.classList.remove("final-contact");
  contact.classList.add("initial-contact");

  resume.classList.remove("final-resume");
  resume.classList.add("initial-resume");

  myNameIs.classList.remove("final-my-name-is");
  myNameIs.classList.add("initial-my-name-is");

  fullName.classList.remove("final-fullname");
  fullName.classList.add("initial-fullname");

  buildThings.classList.remove("final-build-things");
  buildThings.classList.add("initial-build-things");

  selfIntro.classList.remove("final-self-intro");
  selfIntro.classList.add("initial-self-intro");
});

const onscroll = (id) => {
  var elem = document.querySelectorAll(".center-content");
};
