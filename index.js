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

  console.log(button);
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

  console.log(button);
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
};
