// get elementes
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".menu a");
let header_menu = document.querySelector(".header_menu");
let btn_menu = document.getElementById("btn_menu");
let menu = document.querySelector(".menu");
let about_section = document.querySelector(".about");
let about_img = document.querySelector(".about_img");
let about_info = document.querySelector(".about_info");
let spans = document.querySelectorAll(".skills span");
let Percentages = document.querySelectorAll(".Percentage .num");
let started = false;

// click on btn_menu
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    btn_menu.classList.replace("fa-bars", "fa-xmark");
    menu.style.left = "0%";
  } else {
    btn_menu.classList.replace("fa-xmark", "fa-bars");
    menu.style.left = "-200%";
  }
});

// window scroll event
window.onscroll = () => {
  // fixed header_menu
  if (scrollY >= header_menu.offsetTop + 50) {
    header_menu.style.backgroundColor = "#ffffff";
  } else {
    header_menu.style.backgroundColor = "transparent";
  }
  // add & remove activ class from links
  if (scrollY >= 50) {
    links.forEach((link) => {
      let href = link.getAttribute("href");
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 50) {
          let id = `#${section.id}`;
          if (id === href) {
            remove_activ();
            link.classList.add("activ");
          }
        }
      });
    });
  }
  // about skills
  if (scrollY >= about_section.offsetTop - 50) {
    position_zero()
    if(scrollY >= about_info.offsetTop - 250){
      spans.forEach((span) => {
        span.style.width = span.dataset.goal;
        if (!started) {
          counter_skills();
          started = true;
        }
      });
    }
  }
};
// remov class activ
const remove_activ = () => {
  links.forEach((link) => {
    link.classList.remove("activ");
  });
};
// translate about_img & aboutg_info
const position_zero = () => {
  about_img.style.right = "0"
  about_info.style.left = "0";
  about_img.style.opacity = "1";
  about_info.style.opacity = "1";
};

// conter Percentages skills function
const counter_skills = () => {
  Percentages.forEach((Percentage) => {
    let goal = Percentage.dataset.goal;
    let counter = setInterval(() => {
      Percentage.textContent++;
      if (Percentage.textContent == goal) {
        clearInterval(counter);
      }
    }, 1000 / goal);
  });
};
