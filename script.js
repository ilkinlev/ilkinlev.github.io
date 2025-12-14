// Language translations
const translations = {
  en: {
    h1: "Ilkin Hajiyev",
    hTitle: "Frontend Developer",
    title: "Ilkin Hajiyev - Frontend Developer",
    tagline:
      "Building web experiences with passion and precision. Based in Baku, Azerbaijan.",
    aboutBtn: "About",
    experienceBtn: "Experience",
    projectsBtn: "Projects",
    contactBtn: "Contact",
    aboutTitle: "About Me",
    aboutText1:
      "Hi! I'm Ilkin Hajiyev, a passionate Frontend developer. I love building websites and exploring new technologies.",
    aboutSubtitle1: "What I Do",
    aboutText2:
      "I specialize in frontend development, crafting beautiful and interactive user interfaces. I focus on creating responsive, accessible, and performant web applications using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and TypeScript.",
    aboutSubtitle2: "Skills",
    aboutText3:
      "When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, and sharing my knowledge with the developer community.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    educationSchool: "Odlar Yurdu Colleague",
    educationDegree: "Computer Systems Maintenance and Service",
    educationYears: "2020 - 2024",
    technicalSkills: "Technical Skills",
    workExperience: "Work Experience",
    workTitle: "Customer Service Representative",
    workCompany: "Positive Call Center Solutions",
    workDuration: "Aug 2025 - Dec 2025 · 5 mos",
    downloadCV: "📄 Download Full CV",
    projectsTitle: "Projects",
    contactTitle: "Get In Touch",
    contactText:
      "I'm always open to new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out!",
    mailMe: "Mail Me!",
    linkedinProfile: "LinkedIn Profile",
    githubProfile: "GitHub Profile",
    location: "Baku, Azerbaijan",
  },
  az: {
    h1: "Ilkin Hacıyev",
    hTitle: "Frontend Developer",
    title: "Ilkin Hacıyev - Frontend Developer",
    tagline: "Istifadəçi dostu və müasir web təcrübələr yaradıram.",
    aboutBtn: "Haqqımda",
    experienceBtn: "Təcrübə",
    projectsBtn: "Layihələr",
    contactBtn: "Əlaqə",
    aboutTitle: "Haqqımda",
    aboutText1:
      "Salam! Mən İlkin Hacıyev, Frontend tərtibatçısıyam. Web saytlar yaratmağı və yeni texnologiyaları öyrənməyi sevirəm.",
    aboutSubtitle1: "Nə Edirəm",
    aboutText2:
      "Gözəl və interaktiv istifadəçi interfeyslərini yaratmaqla frontend development üzrə ixtisaslaşıram. HTML, CSS, JavaScript və React və TypeScript kimi freymvorklar istifadə edərək responsiv, əlçatan və performanslı veb tətbiqlər yaradıram.",
    aboutSubtitle2: "Bacarıqlar",
    aboutText3:
      "Kod yazmadığım zaman yeni texnologiyalar öyrənməyi, açıq mənbə layihələrə töhfə verməyi və biliyimi tərtibatçı icması ilə bölüşməyi sevirəm.",
    experienceTitle: "Təcrübə",
    educationTitle: "Təhsil",
    educationSchool: "Odlar Yurdu Kolleci",
    educationDegree: "Kompüter Sistemlərinin Təmiri və Xidməti",
    educationYears: "2020 - 2024",
    technicalSkills: "Texniki Bacarıqlar",
    workExperience: "İş Təcrübəsi",
    workTitle: "Müştəri Xidmətləri Nümayəndəsi",
    workCompany: "Positive Call Center Solutions",
    workDuration: "Avq 2025 - Dek 2025 · 5 ay",
    downloadCV: "📄 CV Yüklə",
    projectsTitle: "Layihələr",
    contactTitle: "Əlaqə Saxlayın",
    contactText:
      "Yeni imkanlar, əməkdaşlıq və ya sadəcə texnologiya haqqında söhbət üçün həmişə açığam. Çəkinmədən əlaqə saxlayın!",
    mailMe: "Mənə yazın!",
    linkedinProfile: "LinkedIn Profili",
    githubProfile: "GitHub Profili",
    location: "Bakı, Azərbaycan",
  },
};

let currentLang = "en";

// Open modal function
function openModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal function
function closeModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  const modalContent = modal.querySelector(".modal-content");

  // Add close animation
  modalContent.classList.add("closing");

  // After animation close modal
  modalContent.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("active");
      modalContent.classList.remove("closing");
      document.body.style.overflow = "auto";
    },
    { once: true } // Listen just once
  );
}

// Toggle dark mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("theme-icon");
  const isDark = document.body.classList.contains("dark-mode");
  icon.textContent = isDark ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Toggle language
function toggleLanguage() {
  currentLang = currentLang === "en" ? "az" : "en";
  document.getElementById("lang-text").textContent =
    currentLang === "en" ? "AZ" : "EN";
  updateLanguage();

  // Save preference
  localStorage.setItem("language", currentLang);
}

// Update page language
function updateLanguage() {
  const t = translations[currentLang];

  // Hero section
  document.querySelector(".hero p").textContent = t.title;
  document.querySelector(".hero .tagline").textContent = t.tagline;
  document.querySelector(".hero h1").textContent = t.h1;
  document.querySelector(".hero .hTitle").textContent = t.hTitle;
  document.title = t.title;

  // Navigation buttons
  const navButtons = document.querySelectorAll(".nav-btn-title");
  navButtons[0].textContent = t.aboutBtn;
  navButtons[1].textContent = t.experienceBtn;
  navButtons[2].textContent = t.projectsBtn;
  navButtons[3].textContent = t.contactBtn;

  // About modal
  document.querySelector("#about-modal .modal-title").textContent =
    t.aboutTitle;
  const aboutBody = document.querySelector("#about-modal .modal-body");
  aboutBody.querySelector("p:first-child").textContent = t.aboutText1;
  aboutBody.querySelectorAll("h3")[0].textContent = t.aboutSubtitle1;
  aboutBody.querySelectorAll("p")[1].textContent = t.aboutText2;
  aboutBody.querySelectorAll("h3")[1].textContent = t.aboutSubtitle2;
  aboutBody.querySelector("p:last-child").textContent = t.aboutText3;

  // Experience modal
  document.querySelector("#experience-modal .modal-title").textContent =
    t.experienceTitle;
  const expBody = document.querySelector("#experience-modal .modal-body");
  expBody.querySelectorAll("h3")[0].textContent = t.educationTitle;

  // Update education details
  const eduP = expBody.querySelector("p");
  eduP.innerHTML = `<strong>${t.educationSchool}</strong><br />${t.educationDegree}<br />${t.educationYears}`;

  expBody.querySelectorAll("h3")[1].textContent = t.technicalSkills;
  expBody.querySelectorAll("h3")[2].textContent = t.workExperience;

  // Update work experience
  const workP = expBody.querySelectorAll("p")[1];
  workP.innerHTML = `<strong>${t.workTitle}</strong> - ${t.workCompany}<br />${t.workDuration}<br />`;

  expBody.querySelector(".project-link").textContent = t.downloadCV;

  // Projects modal
  document.querySelector("#projects-modal .modal-title").textContent =
    t.projectsTitle;

  // Contact modal
  document.querySelector("#contact-modal .modal-title").textContent =
    t.contactTitle;
  document.querySelector("#contact-modal .modal-body > p").textContent =
    t.contactText;

  // Contact items
  const contactItems = document.querySelectorAll(".contact-item a");
  contactItems[0].textContent = t.mailMe;
  contactItems[1].textContent = t.linkedinProfile;
  contactItems[2].textContent = t.githubProfile;

  // Location
  const locationSpan = document.querySelector(
    ".contact-item:last-child span:last-child"
  );
  locationSpan.textContent = t.location;
}

// Load saved preferences
window.addEventListener("DOMContentLoaded", () => {
  // Load theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-icon").textContent = "☀️";
  }

  // Load language
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    currentLang = savedLang;
    document.getElementById("lang-text").textContent =
      currentLang === "en" ? "AZ" : "EN";
    updateLanguage();
  }
});

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      // Boşluğa tıklandıysa
      const modalContent = modal.querySelector(".modal-content");
      modalContent.classList.add("closing");

      modalContent.addEventListener(
        "animationend",
        () => {
          modal.classList.remove("active");
          modalContent.classList.remove("closing");
          document.body.style.overflow = "auto";
        },
        { once: true }
      );
    }
  });
});

// Close modal with Escape key
// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      const modalContent = modal.querySelector(".modal-content");
      modalContent.classList.add("closing");

      modalContent.addEventListener(
        "animationend",
        () => {
          modal.classList.remove("active");
          modalContent.classList.remove("closing");
          document.body.style.overflow = "auto";
        },
        { once: true }
      );
    });
  }
});
