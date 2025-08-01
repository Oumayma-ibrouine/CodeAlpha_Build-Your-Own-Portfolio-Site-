// Animate elements on scroll using simple intersection observer
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

sections.forEach(section => {
  section.classList.add("invisible");
  observer.observe(section);
});
