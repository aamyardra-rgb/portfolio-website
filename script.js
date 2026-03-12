document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  // Animate skill bars
  const skillFills = document.querySelectorAll(".skill-fill");
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.getAttribute("data-fill");
        entry.target.style.width = fill;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(bar => skillObserver.observe(bar));

  // Scroll Progress Indicator
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });

  // Dark Mode Toggle with localStorage
  const toggleBtn = document.getElementById("dark-toggle");

  // Check saved preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleBtn.textContent = "🌙";
    }
  });
});