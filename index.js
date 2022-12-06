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
