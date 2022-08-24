let projectSection = document.getElementById("projects");
const y = projectSection
  ? projectSection.getBoundingClientRect().top + window.scrollY
  : 0;

const scrollToProjects = () => {
  window.scroll({
    top: y - 150,
    behavior: "smooth",
  });
};

const nav = document.querySelector("#navbar");
let navTop = nav.offsetTop;

const fixedNav = () => {
  if (window.scrollY >= navTop + 10) {
    nav.classList.add("sticky");
    mobileNavBar.children[0].style.position = "fixed";
    mobileNavBar.children[0].style.top = `${nav.offsetHeight}px`;
  } else {
    nav.classList.remove("sticky");
    mobileNavBar.children[0].classList.remove("sticky");
    mobileNavBar.children[0].style.position = "";
    mobileNavBar.children[0].style.top = ``;
  }
};

window.addEventListener("scroll", fixedNav);

const onRedirectAbout = () => {
  window.location.replace("/about.html");
};
