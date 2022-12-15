const navigation = document.querySelector(".navigation");
const navigationToggle = document.querySelector(".toggle-mobile-nav");

navigationToggle.addEventListener("click", () => {
  const visible = navigation.getAttribute("data-visible");
  if (visible === "false") {
    navigation.setAttribute("data-visible", true);
    navigationToggle.setAttribute("aria-expanded", true);
  } else {
    navigation.setAttribute("data-visible", false);
    navigationToggle.setAttribute("aria-expanded", false);
  }
});
