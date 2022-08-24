import { projectData } from "./projects.mjs";
import { knowledge } from "./skills.mjs";

let mobileNav = document.getElementById("mobileNav");
let mobileNavBar = document.getElementById("mobileNavBar");
let section = document.getElementsByTagName("section");

let menuItems = document.querySelectorAll(".menu-item");
let silder = document.getElementById("slider");
let menuBox = document.getElementById("menuBox");
let widthArr = [];

const customBar = (e) => {
  silder.style.width = `${menuItems[e].offsetWidth}px`;
  silder.style.background =
    "linear-gradient(270deg, #85BFD1 -44.33%, #7C5ADE 121.17%)";
  silder.style.left = `${menuItems[e].offsetLeft}px`;
  widthArr.concat(menuItems[e].offsetWidth);
};

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseover", (event) => {
    customBar(i);
  });
}
const url = window.location.pathname;
console.log(url);
const urlAbout = () => {
  if (url === "/about.html") {
    customBar(0);
  }
};
const urlProjects = () => {
  if (url === "/projects.html") {
    customBar(1);
  }
};
const urlContact = () => {
  if (url === "/contact.html") {
    customBar(2);
  }
};
menuBox.addEventListener("mouseover", () => {
  silder.style.width = `${widthArr[0]}px`;
});

menuBox.addEventListener("mouseleave", () => {
  if (url === "/") {
    silder.style.width = `0`;
  } else {
    urlAbout();
    urlProjects();
    urlContact();
  }
});
urlAbout();
urlProjects();
urlContact();

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
    if (section.length > 1) {
      section[1].style.opacity = "0.5";
      section[2].style.opacity = "0.5";
    }
  } else {
    mobileNav.children[0].src = toggleOpenIcon;
    mobileNavBar.classList.remove("active");
    document.body.style.overflow = "auto";
    section[0].style.opacity = "1";
    if (section.length > 1) {
      section[1].style.opacity = "1";
      section[2].style.opacity = "1";
    }
  }
});

let dataContain = document.getElementById("listItem");

projectData.slice(0, 2).map((e) => {
  dataContain
    ? (dataContain.innerHTML += `
  <div class="box-item">
    <a href="${e.link}">${e.name}</a>
    <a href="">
      <img
        src="${e.img}"
        alt="${e.name}"
      />
    </a>
  </div>
  `)
    : null;
});

let abilities = document.getElementById("abilities");
let skills = document.getElementById("skills");
let tools = document.getElementById("tools");

if (abilities || skills || tools) {
  knowledge
    .filter((e) => e.type === "abilities")
    .map((e) => {
      return (abilities.innerHTML += `
    <div class="card">
    <img src="${e.icon}" alt="" />
    <h2>${e.name}</h2>
    <span>
        ${e.exp}
    </span>
  </div>
    `);
    });

  knowledge
    .filter((e) => e.type === "skills")
    .map((e) => {
      return (skills.innerHTML += `
    <div class="card">
    <img src="${e.icon}" alt="" />
    <h2>${e.name}</h2>
    <span>
        ${e.exp}
    </span>
  </div>
    `);
    });
  knowledge
    .filter((e) => e.type === "tools")
    .map((e) => {
      return (tools.innerHTML += `
    <div class="card">
    <img src="${e.icon}" alt="" />
    <h2>${e.name}</h2>
    <span>
        ${e.exp}
    </span>
  </div>
    `);
    });
}
