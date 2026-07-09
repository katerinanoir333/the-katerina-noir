const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const accordion = document.querySelector("[data-accordion]");
const intentionButtons = [...document.querySelectorAll("[data-intention]")];
const intentionResult = document.querySelector("[data-intention-result]");
const accessForm = document.querySelector("[data-access-form]");
const formError = document.querySelector("[data-form-error]");
const formSuccess = document.querySelector("[data-form-success]");
const reveals = [...document.querySelectorAll(".reveal")];

const intentionCopy = {
  attention: {
    label: "The Proper Door",
    title: "Begin with a First Offering.",
    copy: "Show intention before requesting time."
  },
  date: {
    label: "Private Date",
    title: "Qualifying comes first.",
    copy: "Private dates require qualifying, an Access Gift, planning, discretion, and mutual chemistry."
  },
  look: {
    label: "Sponsorship",
    title: "You may sponsor a mood.",
    copy: "Approved admirers may sponsor a mood, but the final presentation remains mine."
  },
  gift: {
    label: "Thoughtful Gift",
    title: "Gifts are appreciated with grace.",
    copy: "Thoughtful gifts are always appreciated. Wishlist details are shared privately."
  }
};

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function showIntention(key) {
  const selected = intentionCopy[key];

  intentionButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.intention === key);
  });

  intentionResult.innerHTML = `
    <p class="eyebrow">${selected.label}</p>
    <h3>${selected.title}</h3>
    <p>${selected.copy}</p>
  `;
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((item) => observer.observe(item));
}

function validateForm(event) {
  event.preventDefault();
  formError.textContent = "";
  formSuccess.textContent = "";

  const requiredFields = [...accessForm.querySelectorAll("[required]")];
  const firstInvalid = requiredFields.find((field) => {
    if (field.type === "checkbox") return !field.checked;
    return !field.value.trim();
  });

  if (firstInvalid) {
    formError.textContent = "Please complete every required field and confirmation before requesting access.";
    firstInvalid.focus();
    return;
  }

  formSuccess.textContent = "Your request has been prepared. Private details are shared at my discretion.";
  accessForm.reset();

  // No real data is sent while hosted as a static GitHub Pages site.
  // To connect later, replace this success state with Formspree, Tally,
  // Google Forms, Netlify Forms, or a private backend endpoint.
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeNav();
});

accordion.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const item = button.closest(".accordion-item");
  const isOpen = item.classList.toggle("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
});

intentionButtons.forEach((button) => {
  button.addEventListener("click", () => showIntention(button.dataset.intention));
});

accessForm.addEventListener("submit", validateForm);
revealOnScroll();
