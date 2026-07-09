const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const accordions = [...document.querySelectorAll("[data-accordion], [data-faq]")];
const intentionButtons = [...document.querySelectorAll("[data-intention]")];
const intentionResult = document.querySelector("[data-intention-result]");
const accessForm = document.querySelector("[data-access-form]");
const formError = document.querySelector("[data-form-error]");
const formSuccess = document.querySelector("[data-form-success]");
const reveals = [...document.querySelectorAll(".reveal")];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const scrollProgress = document.querySelector("[data-scroll-progress]");
const roomKicker = document.querySelector("[data-room-kicker]");
const roomName = document.querySelector("[data-room-name]");

let currentLanguage = "en";

const copy = {
  en: {
    lang: "en",
    title: "Katerina Noir Panama | Private House Noir Access",
    description: "The Katerina Noir is a private House Noir portal for screened access, etiquette, tribute-based consideration, discretion, and curated social experiences in Panama.",
    ui: {
      skip: "Skip to content",
      languageLabel: "Language",
      navRules: "Rules",
      navOfferings: "Offerings",
      navScreening: "Screening",
      navApply: "Apply",
      heroEyebrow: "Private threshold",
      heroLede: "A screened House Noir portal for private audience, etiquette, offerings, and discretion.",
      ctaApply: "Apply for Access",
      ctaRules: "Read the Rules",
      stripOne: "18+ only",
      stripTwo: "Screened access",
      stripThree: "Discretion required",
      manifestoEyebrow: "The House Noir",
      manifestoTitle: "Not casual. Not owed. Not for everyone.",
      manifestoCopy: "This is a private doorway for composed adults who understand manners, privacy, generosity, and boundaries.",
      rulesEyebrow: "House Rules",
      rulesTitle: "The door opens only for the composed.",
      rulesCopy: "If this feels excessive, the House has already answered you.",
      ruleOneLabel: "Rule I",
      ruleOneTitle: "Approach with intention",
      ruleOneCopy: "Introduce yourself clearly. Empty messages are ignored.",
      ruleTwoLabel: "Rule II",
      ruleTwoTitle: "Screening is required",
      ruleTwoCopy: "No verification, no private details. Safety comes before access.",
      ruleThreeLabel: "Rule III",
      ruleThreeTitle: "Tribute is not entitlement",
      ruleThreeCopy: "Offerings signal seriousness. They never guarantee approval, intimacy, contact, or outcomes.",
      ruleFourLabel: "Rule IV",
      ruleFourTitle: "The House protects its peace",
      ruleFourCopy: "Pressure, false information, intoxication, or boundary testing ends access.",
      offeringsEyebrow: "Offerings",
      offeringsTitle: "Seriousness has a language.",
      firstTributeTitle: "First Tribute",
      firstTributeCopy: "Required before qualifying. It signals respect for private attention.",
      accessGiftTitle: "Access Gift",
      accessGiftCopy: "May follow approval before planning continues. Approval never creates entitlement.",
      sponsorshipTitle: "Sponsorships",
      sponsorshipCopy: "Beauty, wardrobe, certificates, dinner preparation, and thoughtful gifts are considered privately.",
      intentionEyebrow: "Choose your door",
      intentionTitle: "What brings you here?",
      intentAttention: "Court attention",
      intentDate: "Request a dinner date",
      intentSponsor: "Sponsor a mood",
      intentGift: "Send a gift",
      screeningEyebrow: "The Veil Check",
      screeningTitle: "Read. Apply. Verify. Await instruction.",
      processRead: "Read rules",
      processApply: "Apply",
      processVerify: "Verify if requested",
      processAwait: "Await reply",
      privacyEyebrow: "Boundaries",
      privacyTitle: "The ritual has limits.",
      privacyCopy: "No pressure. No surprise guests. No intoxication. No false information. Katerina may decline or end any interaction.",
      applyEyebrow: "Request Entry",
      applyTitle: "Apply only if you understand.",
      applyCopy: "This form sends through Formspree. Do not upload sensitive documents here.",
      noticeTitle: "Before submitting",
      noticeCopy: "Access is considered, never owed. Gifts are for time, attention, consideration, and preparation only.",
      fieldName: "Name or alias",
      fieldAge: "Age confirmation",
      fieldCity: "City",
      fieldInstagram: "Instagram handle",
      fieldSource: "How did you find me?",
      fieldSeeking: "What are you seeking?",
      fieldMessage: "Message",
      required: "Required",
      selectOne: "Select one",
      ageConfirm: "I confirm I am 18+",
      sourceReferral: "Referral",
      sourceOther: "Other",
      seekAttention: "To court your attention",
      seekDate: "To request a dinner date by application",
      seekSponsor: "To sponsor a look or ritual preparation",
      seekGift: "To send a thoughtful gift",
      confirmations: "Confirmations",
      confirmRules: "I have read the House Rules.",
      confirmNoGuarantee: "I understand gifts do not guarantee approval, intimacy, contact, or outcomes.",
      confirmTruth: "False information means immediate disqualification.",
      submit: "Submit Application",
      faqTitle: "Before you ask",
      faqOneQ: "Does tribute guarantee access?",
      faqOneA: "No. Tribute begins consideration. Chemistry and discretion decide the rest.",
      faqTwoQ: "Is screening required?",
      faqTwoA: "Yes. Screening protects both sides before private details are discussed.",
      faqThreeQ: "Are flowers preferred?",
      faqThreeA: "Flowers are not preferred. Certificates, perfume, beauty rituals, books, candles, jewelry, wardrobe tributes, or dinner experiences align better with The House.",
      closingEyebrow: "The final door",
      closingTitle: "Offerings open the door. Chemistry decides the rest.",
      ctaRequestEntry: "Request Entry",
      footerCopy: "Private details are shared at my discretion."
    },
    attrs: {
      brandHome: "The Katerina Noir home",
      languageSelector: "Language selector",
      openNavigation: "Open navigation",
      primaryNavigation: "Primary navigation",
      houseJourney: "House journey",
      primaryActions: "Primary actions",
      principles: "House access principles",
      intentionChoices: "Intention choices",
      messagePlaceholder: "Introduce yourself with clarity, manners, and purpose."
    },
    intentions: {
      attention: {
        label: "The proper door",
        title: "Begin with etiquette.",
        copy: "Read the rules, apply with clarity, and understand that attention is considered through screening."
      },
      date: {
        label: "Dinner by application",
        title: "Private planning follows screening.",
        copy: "Dinner consideration requires an aligned request, discretion, tribute culture, and mutual chemistry."
      },
      sponsor: {
        label: "Ritual sponsorship",
        title: "You may sponsor a mood.",
        copy: "Approved admirers may sponsor styling, beauty rituals, or preparation. Final presentation remains Katerina's."
      },
      gift: {
        label: "Thoughtful gift",
        title: "Send with refinement.",
        copy: "Certificates, perfume, beauty rituals, books, candles, jewelry, wardrobe tributes, or dinner experiences are more aligned than flowers."
      }
    },
    messages: {
      processed: "The application could not be processed.",
      invalid: "Complete every required field and confirmation before requesting access.",
      submitting: "Submitting...",
      sent: "Your application has been sent. Private details are shared at my discretion.",
      failed: "The application could not be sent. Please try again, or send your introduction privately on Instagram."
    }
  },
  es: {
    lang: "es",
    title: "Katerina Noir Panama | Acceso Privado House Noir",
    description: "The Katerina Noir es un portal privado House Noir para acceso filtrado, etiqueta, consideración por tributo, discreción y experiencias sociales curadas en Panamá.",
    ui: {
      skip: "Saltar al contenido",
      languageLabel: "Idioma",
      navRules: "Reglas",
      navOfferings: "Offerings",
      navScreening: "Filtro",
      navApply: "Solicitud",
      heroEyebrow: "Umbral privado",
      heroLede: "Un portal House Noir filtrado para audiencia privada, etiqueta, offerings y discreción.",
      ctaApply: "Solicitar acceso",
      ctaRules: "Leer las Reglas",
      stripOne: "Solo 18+",
      stripTwo: "Acceso filtrado",
      stripThree: "Discreción requerida",
      manifestoEyebrow: "The House Noir",
      manifestoTitle: "No es casual. No se debe. No es para todos.",
      manifestoCopy: "Una puerta privada para adultos serenos que entienden modales, privacidad, generosidad y límites.",
      rulesEyebrow: "Reglas de la Casa",
      rulesTitle: "La puerta se abre solo para quien sabe componerse.",
      rulesCopy: "Si esto se siente excesivo, la Casa ya te respondió.",
      ruleOneLabel: "Regla I",
      ruleOneTitle: "Acércate con intención",
      ruleOneCopy: "Preséntate con claridad. Los mensajes vacíos se ignoran.",
      ruleTwoLabel: "Regla II",
      ruleTwoTitle: "El filtro es obligatorio",
      ruleTwoCopy: "Sin verificación, no hay detalles privados. La seguridad va antes del acceso.",
      ruleThreeLabel: "Regla III",
      ruleThreeTitle: "El tributo no es derecho adquirido",
      ruleThreeCopy: "Los offerings señalan seriedad. Nunca garantizan aprobación, intimidad, contacto ni resultados.",
      ruleFourLabel: "Regla IV",
      ruleFourTitle: "La Casa protege su paz",
      ruleFourCopy: "La presión, la información falsa, la intoxicación o probar límites cierran el acceso.",
      offeringsEyebrow: "Offerings",
      offeringsTitle: "La seriedad tiene un lenguaje.",
      firstTributeTitle: "Primer tributo",
      firstTributeCopy: "Requerido antes de calificar. Señala respeto por la atención privada.",
      accessGiftTitle: "Regalo de acceso",
      accessGiftCopy: "Puede seguir tras la aprobación, antes de continuar la planificación. La aprobación no crea derecho adquirido.",
      sponsorshipTitle: "Patrocinios",
      sponsorshipCopy: "Belleza, vestuario, certificados, preparación de cena y regalos con intención se consideran en privado.",
      intentionEyebrow: "Elige tu puerta",
      intentionTitle: "¿Qué te trae aquí?",
      intentAttention: "Cortejar atención",
      intentDate: "Solicitar una cena",
      intentSponsor: "Patrocinar un mood",
      intentGift: "Enviar un regalo",
      screeningEyebrow: "The Veil Check",
      screeningTitle: "Lee. Aplica. Verifica. Espera instrucción.",
      processRead: "Lee reglas",
      processApply: "Solicita acceso",
      processVerify: "Verifica si se solicita",
      processAwait: "Espera respuesta",
      privacyEyebrow: "Límites",
      privacyTitle: "El ritual tiene límites.",
      privacyCopy: "Sin presión. Sin invitados sorpresa. Sin intoxicación. Sin información falsa. Katerina puede rechazar o terminar cualquier interacción.",
      applyEyebrow: "Solicitar entrada",
      applyTitle: "Aplica solo si entiendes.",
      applyCopy: "Este formulario se envía por Formspree. No subas documentos sensibles aquí.",
      noticeTitle: "Antes de enviar",
      noticeCopy: "El acceso se considera; nunca se debe. Los regalos son solo por tiempo, atención, consideración y preparación.",
      fieldName: "Nombre o alias",
      fieldAge: "Confirmación de edad",
      fieldCity: "Ciudad",
      fieldInstagram: "Usuario de Instagram",
      fieldSource: "¿Cómo me encontraste?",
      fieldSeeking: "¿Qué buscas?",
      fieldMessage: "Mensaje",
      required: "Obligatorio",
      selectOne: "Selecciona una opción",
      ageConfirm: "Confirmo que tengo 18+",
      sourceReferral: "Referencia",
      sourceOther: "Otro",
      seekAttention: "Cortejar tu atención",
      seekDate: "Solicitar una cena mediante evaluación",
      seekSponsor: "Patrocinar un look o preparación ritual",
      seekGift: "Enviar un regalo con intención",
      confirmations: "Confirmaciones",
      confirmRules: "He leído las Reglas de la Casa.",
      confirmNoGuarantee: "Entiendo que los regalos no garantizan aprobación, intimidad, contacto ni resultados.",
      confirmTruth: "La información falsa significa descalificación inmediata.",
      submit: "Enviar solicitud",
      faqTitle: "Antes de preguntar",
      faqOneQ: "¿El tributo garantiza acceso?",
      faqOneA: "No. El tributo inicia la consideración. La química y la discreción deciden el resto.",
      faqTwoQ: "¿El filtro es obligatorio?",
      faqTwoA: "Sí. El filtro protege a ambas partes antes de hablar de detalles privados.",
      faqThreeQ: "¿Se prefieren flores?",
      faqThreeA: "Las flores no son preferidas. Certificados, perfume, rituales de belleza, libros, velas, joyería, tributos de vestuario o experiencias de cena van más con The House.",
      closingEyebrow: "La puerta final",
      closingTitle: "Los offerings abren la puerta. La química decide el resto.",
      ctaRequestEntry: "Solicitar entrada",
      footerCopy: "Los detalles privados se comparten a mi discreción."
    },
    attrs: {
      brandHome: "Inicio de The Katerina Noir",
      languageSelector: "Selector de idioma",
      openNavigation: "Abrir navegación",
      primaryNavigation: "Navegación principal",
      houseJourney: "Recorrido de la Casa",
      primaryActions: "Acciones principales",
      principles: "Principios de acceso",
      intentionChoices: "Opciones de intención",
      messagePlaceholder: "Preséntate con claridad, modales y propósito."
    },
    intentions: {
      attention: {
        label: "La puerta correcta",
        title: "Comienza con etiqueta.",
        copy: "Lee las reglas, solicita acceso con claridad y entiende que la atención se considera mediante el filtro."
      },
      date: {
        label: "Cena por evaluación",
        title: "La planificación privada viene después del filtro.",
        copy: "La consideración para una cena requiere solicitud alineada, discreción, cultura de tributo y química mutua."
      },
      sponsor: {
        label: "Patrocinio ritual",
        title: "Puedes patrocinar un mood.",
        copy: "Los admiradores aprobados pueden patrocinar styling, belleza o preparación. La presentación final queda en manos de Katerina."
      },
      gift: {
        label: "Regalo con intención",
        title: "Envía con refinamiento.",
        copy: "Certificados, perfume, belleza, libros, velas, joyería, vestuario o cenas van más alineados que flores."
      }
    },
    messages: {
      processed: "La solicitud no pudo procesarse.",
      invalid: "Completa todos los campos y confirmaciones obligatorias antes de solicitar acceso.",
      submitting: "Enviando...",
      sent: "Tu solicitud fue enviada. Los detalles privados se comparten a mi discreción.",
      failed: "La solicitud no pudo enviarse. Intenta de nuevo o envía tu presentación privada por Instagram."
    }
  }
};

const roomOrder = ["threshold", "rules", "offerings", "intention", "screening", "privacy", "apply", "faq"];

function t(key) {
  return copy[currentLanguage].ui[key] || key;
}

function translatePage(language) {
  currentLanguage = language;
  document.documentElement.lang = copy[language].lang;
  document.title = copy[language].title;

  const metaDescription = document.querySelector("meta[name='description']");
  const ogTitle = document.querySelector("meta[property='og:title']");
  const ogDescription = document.querySelector("meta[property='og:description']");
  const twitterTitle = document.querySelector("meta[name='twitter:title']");
  const twitterDescription = document.querySelector("meta[name='twitter:description']");

  if (metaDescription) metaDescription.setAttribute("content", copy[language].description);
  if (ogTitle) ogTitle.setAttribute("content", copy[language].title);
  if (ogDescription) ogDescription.setAttribute("content", copy[language].description);
  if (twitterTitle) twitterTitle.setAttribute("content", copy[language].title);
  if (twitterDescription) twitterDescription.setAttribute("content", copy[language].description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", copy[language].attrs[element.dataset.i18nPlaceholder]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[language].attrs[element.dataset.i18nAria]);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  showIntention(activeIntention());
  updateScrollUI();
}

function activeIntention() {
  return document.querySelector(".intention-button.is-active")?.dataset.intention || "attention";
}

function showIntention(key) {
  const selected = copy[currentLanguage].intentions[key];

  intentionButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.intention === key);
  });

  intentionResult.innerHTML = `
    <p class="eyebrow">${selected.label}</p>
    <h3>${selected.title}</h3>
    <p>${selected.copy}</p>
  `;
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function currentRoomId() {
  let activeId = roomOrder[0];
  let bestVisibleArea = 0;

  roomOrder.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
    const visibleArea = Math.max(0, visibleBottom - visibleTop);

    if (visibleArea > bestVisibleArea) {
      bestVisibleArea = visibleArea;
      activeId = id;
    }
  });

  return activeId;
}

function updateRoomName() {
  const section = document.getElementById(currentRoomId());
  const index = roomOrder.indexOf(section.id) + 1;
  const label = currentLanguage === "es" ? section.dataset.roomLabelEs : section.dataset.roomLabel;
  roomKicker.textContent = String(index).padStart(2, "0");
  roomName.textContent = label;
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function updateScrollUI() {
  updateHeader();
  updateScrollProgress();
  updateRoomName();
}

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function revealOnScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((item) => observer.observe(item));
}

function findFirstInvalidField() {
  return [...accessForm.querySelectorAll("[required]")].find((field) => {
    if (field.type === "checkbox") return !field.checked;
    return !field.value.trim();
  });
}

async function validateForm(event) {
  event.preventDefault();
  formError.textContent = "";
  formSuccess.textContent = "";

  if (accessForm.querySelector("input[name='company']")?.value) {
    formError.textContent = copy[currentLanguage].messages.processed;
    return;
  }

  const firstInvalid = findFirstInvalidField();
  if (firstInvalid) {
    formError.textContent = copy[currentLanguage].messages.invalid;
    firstInvalid.focus();
    return;
  }

  const submitButton = accessForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = copy[currentLanguage].messages.submitting;

  try {
    const response = await fetch(accessForm.action, {
      method: "POST",
      body: new FormData(accessForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error("Formspree rejected the request.");

    formSuccess.textContent = copy[currentLanguage].messages.sent;
    accessForm.reset();
  } catch (error) {
    formError.textContent = copy[currentLanguage].messages.failed;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t("submit");
  }
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeNav();
});

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const item = button.closest(".accordion-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

intentionButtons.forEach((button) => {
  button.addEventListener("click", () => showIntention(button.dataset.intention));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => translatePage(button.dataset.language));
});

accessForm.addEventListener("submit", validateForm);
translatePage("en");
revealOnScroll();
