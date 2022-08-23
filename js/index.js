let mobileNav = document.getElementById("mobileNav");
let mobileNavBar = document.getElementById("mobileNavBar");
let section = document.getElementsByTagName("section");
const nav = document.querySelector("#navbar");
let navTop = nav.offsetTop;

function fixedNav() {
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
}

window.addEventListener("scroll", fixedNav);

let menuItems = document.querySelectorAll(".menu-item");
let silder = document.getElementById("slider");
let menuBox = document.getElementById("menuBox");
let widthArr = [];

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseover", (event) => {
    silder.style.width = `${menuItems[i].offsetWidth}px`;
    silder.style.background =
      menuItems[i].dataset.attr === "0"
        ? `#5C62EC`
        : "linear-gradient(270deg, #85BFD1 -44.33%, #7C5ADE 121.17%)";
    silder.style.left = `${menuItems[i].offsetLeft}px`;
    widthArr.concat(menuItems[i].offsetWidth);
  });
}

menuBox.addEventListener("mouseover", () => {
  silder.style.width = `${widthArr[0]}px`;
});

menuBox.addEventListener("mouseleave", () => {
  silder.style.width = `0`;
});

let toggleOpenIcon = "./img/menu-alt-3.svg";
let toggleCloseIcon = "./img/close-icon.svg";
mobileNav.children[0].src = toggleOpenIcon;
let toggle = false;
mobileNav.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    mobileNav.children[0].src = toggleCloseIcon;
    mobileNavBar.classList.add("active");
    document.body.style.overflow = "hidden";
    section[0].style.opacity = "0.5";
    section[1].style.opacity = "0.5";
    section[2].style.opacity = "0.5";
  } else {
    mobileNav.children[0].src = toggleOpenIcon;
    mobileNavBar.classList.remove("active");
    document.body.style.overflow = "auto";
    section[0].style.opacity = "1";
    section[1].style.opacity = "1";
    section[2].style.opacity = "1";
  }
});

const projectData = [
  {
    id: 1,
    name: "Project1",
    link: "",
    img: "https://storage.googleapis.com/prd-engineering-asset/2021/12/e46ebeca-react-logo.png",
  },
  {
    id: 1,
    name: "Project1",
    link: "",
    img: "https://storage.googleapis.com/prd-engineering-asset/2021/12/e46ebeca-react-logo.png",
  },
  {
    id: 1,
    name: "Project1",
    link: "",
    img: "https://storage.googleapis.com/prd-engineering-asset/2021/12/e46ebeca-react-logo.png",
  },
];

let dataContain = document.getElementById("listItem");

projectData.slice(0, 2).map((e) => {
  dataContain.innerHTML += `
  <div class="box-item">
    <a href="${e.link}">${e.name}</a>
    <a href="">
      <img
        src="${e.img}"
        alt="${e.name}"
      />
    </a>
  </div>
  `;
});

let projectSection = document.getElementById("projects");
const y = projectSection.getBoundingClientRect().top + window.scrollY;

const scrollToProjects = () => {
  console.log(y);
  window.scroll({
    top: y - 150,
    behavior: "smooth",
  });
};
