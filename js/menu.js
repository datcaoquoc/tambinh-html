function toggleMenu() {
    const menu = document.querySelector("nav ul.level-1");
    menu.classList.toggle("active");
  }

  const toggleButton = document.getElementById("menu-toggle");
  toggleButton.addEventListener("click", toggleMenu);

  const btnShowMenu = document.getElementsByClassName("hiden-list");
  const header = document.getElementById("header");
  const itemMenus = document.querySelectorAll("#nav li a[href*='#']");

  const openMenu = () => {
    if (
      header.style.overflow === "" ||
      header.style.overflow === "hidden"
    ) {
      header.style.height = "auto";
      header.style.overflow = "visible";
    } else {
      header.style.height = "46.5px";
      header.style.overflow = "hidden";
    }
  };

  for (const itemMenu of itemMenus) {
    itemMenu.addEventListener("click", function (event) {
      if (itemMenu.attributes.href.value != "#") {
        openMenu();
      } else {
        return;
      }
    });
  }

  btnShowMenu[0].addEventListener("click", openMenu);