// simple alert for menu items
const donuts = document.querySelectorAll(".donut-card img");

donuts.forEach(img => {
  img.addEventListener("click", () => {
    const name = img.nextElementSibling.textContent;
    alert(`🍩 You chose ${name}!`);
  });
});
