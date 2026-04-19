import "../styles.css";

const translations = {
  en: {
    nav_company: "Our Company",
    nav_stp: "STP",
    nav_competition: "Competition",
    nav_imc: "IMC Program",
    nav_measurement: "Performance",
    hero_title: "Better Spark, Better Choice",
    hero_subtitle:
      "Sparkla is a balanced-intensity sparkling drink built for urban students and young professionals who want fun without overdoing it.",
    hero_tag_1: "Fun",
    hero_tag_2: "Light",
    hero_tag_3: "Modern",
    stat_1: "Core urban target segment",
    stat_2: "Flavor variants",
    stat_3: "IMC communication pillars",
    company_title: "Our Company",
    tab_about: "About",
    tab_vision: "Vision",
    tab_mission: "Mission",
    product_caption:
      "Sparkla product concept visual: Calming Ginger and Calming Lime.",
    about_title: "Company Overview",
    about_body:
      "PT AGCP Indonesia is a startup in the FMCG industry that develops innovative carbonated beverages through Sparkla. The company focuses on product quality and integrated marketing to build a competitive modern beverage brand.",
    identity_title: "Brand Identity",
    identity_1: "Company: PT AGCP Indonesia",
    identity_2: "Brand: Sparkla",
    identity_3: "Category: Carbonated Soft Drink (CSD)",
    identity_4: "Core concept: Balanced intensity sparkling drink",
    identity_5: "Tagline: Fun without overdoing it",
    product_title: "Product Line",
    product_1: "Sub-positioning: Light intensity sparkling soda",
    product_2: "Variant 1: Sparkla Calming Ginger",
    product_3: "Variant 2: Sparkla Calming Lime",
    product_4: "Low sugar formula",
    product_5: "Controlled carbonation and balanced taste profile",
    vision_title: "Vision",
    vision_1: "Deliver products with quality and comfortable taste.",
    vision_2: "Reach consumers through relevant digital marketing strategies.",
    vision_3: "Build long-term relationships with customers.",
    mission_title: "Mission",
    mission_body:
      "To become an adaptive local FMCG company that offers carbonated drinks relevant to modern lifestyle and a more balanced consumption experience.",
    stp_title: "STP Analysis",
    segment_title: "Segmentation",
    segment_body:
      "Ages 18-35, students and young professionals, male and female, urban and dynamic, medium-to-upper income, open to new drinks, and aware of balance between enjoyment and lighter sugar intake.",
    target_title: "Targeting",
    target_body:
      "Urban young adults and early adopters who enjoy soda moments but prefer less sweetness and better drinkability.",
    persona_1:
      "Alya (22): active student, loves hangouts and new drinks, wants fun soda not too sweet.",
    persona_2:
      "Arga (28): marketing staff, works in office and cafe, wants refreshing soda that stays comfortable all day.",
    position_title: "Positioning",
    position_body:
      "Sparkla is positioned between strong-intensity cola and low-sugar soda options: still fun and sparkling, but lighter and not excessive.",
    competition_title: "Competitive Situation",
    coke_title: "Main Competitor: Coca-Cola",
    coke_body:
      "Strong global equity, iconic bold taste, wide distribution, and high loyalty. Low-sugar variants still keep high intensity character.",
    pepsi_title: "Main Competitor: Pepsi",
    pepsi_body:
      "Youthful and energetic image with strong cola flavor and global recognition. Low-sugar options still retain bold intensity positioning.",
    gap_title: "Market Gap & Opportunity",
    gap_body:
      "Urban health awareness is increasing and demand for lighter, lower-sugar soda alternatives is rising. Sparkla fills this structural opportunity with balanced intensity.",
    mix_title: "Pricing & Distribution Strategy",
    mix_1: "Competitive parity pricing with Coke Zero and Pepsi Black.",
    mix_2: "Strategic goal: build trial without entering a price war.",
    mix_3:
      "Phase 1 channels: urban minimarkets, campus areas, coffee shops, and community events.",
    mix_4:
      "Phase 2 expansion: modern trade growth and e-commerce platform scaling.",
    imc_title: "Integrated Marketing Communication (5 Elements)",
    imc_1_title: "1) Advertising",
    imc_1_body:
      "Sensory storytelling across Instagram Reels/Stories and TikTok with relatable relaxed moments, bright visuals, and refreshing cues.",
    imc_2_title: "2) Sales Promotion",
    imc_2_body:
      "Campus/community sampling booths, first-purchase QR vouchers, launch bundling, buy-1-get-1, and minimarket partner discounts.",
    imc_3_title: "3) Public Relations",
    imc_3_body:
      "Collaborate with light sports communities (running, yoga, cycling) and communicate balanced sugar consumption in positive lifestyle framing.",
    imc_4_title: "4) Direct Marketing",
    imc_4_body:
      "QR-based loyalty points on each package and customer data collection to drive personalized CRM offers and repeat purchases.",
    imc_5_title: "5) Digital Marketing Communication",
    imc_5_body:
      "Micro-influencer partnerships, #SparklaMoment challenge, and user-generated content focused on authentic experience rather than excessive claims.",
    measurement_title: "Promotional Performance Measurement",
    metric_1_title: "Campaign 1: Sparkling Your Routine",
    metric_1_body:
      "Goal: awareness and trial from Instagram video content. KPIs: reach/views and follower growth. Target: 1,000 views in first 2 weeks and 100 new followers per campaign period.",
    metric_2_title: "Campaign 2: Sparkla Pop-up Chill Corner",
    metric_2_body:
      "Goal: direct taste experience in hangout/coworking spaces. KPIs: conversion rate and feedback score. Target: 20% trial-to-purchase and average taste rating of 4.5/5.",
    metric_3_title: "Campaign 3: The Less-Sweet Challenge",
    metric_3_body:
      "Goal: prove lighter taste positioning through TikTok review content. KPIs: engagement rate and saves. Target: minimum 5% engagement and 150 saves per review video.",
    eval_title: "Evaluation, Key Takeaway, and Call to Action",
    eval_body:
      "Run weekly digital reviews (views, engagement, saves) and monthly offline/sales reviews from field activations. Optimize content based on top metrics. Key takeaway: Sparkla is lighter, less sweet, and enjoyable. CTA: stay agile to urban trends so Sparkla remains relevant and trendy.",
    footer_text: "Sparkla - Better Spark, Better Choice"
  },
  id: {
    nav_company: "Perusahaan",
    nav_stp: "STP",
    nav_competition: "Kompetisi",
    nav_imc: "Program IMC",
    nav_measurement: "Performa",
    hero_title: "Better Spark, Better Choice",
    hero_subtitle:
      "Sparkla adalah minuman sparkling dengan intensitas seimbang untuk mahasiswa dan profesional muda urban yang ingin kesenangan tanpa berlebihan.",
    hero_tag_1: "Fun",
    hero_tag_2: "Light",
    hero_tag_3: "Modern",
    stat_1: "Segmen target urban utama",
    stat_2: "Varian rasa",
    stat_3: "Pilar komunikasi IMC",
    company_title: "Perusahaan Kami",
    tab_about: "Tentang",
    tab_vision: "Visi",
    tab_mission: "Misi",
    product_caption:
      "Visual konsep produk Sparkla: varian Calming Ginger dan Calming Lime.",
    about_title: "Gambaran Perusahaan",
    about_body:
      "PT AGCP Indonesia adalah perusahaan rintisan FMCG yang mengembangkan minuman berkarbonasi inovatif melalui Sparkla. Perusahaan berfokus pada kualitas produk dan pemasaran terintegrasi untuk membangun brand minuman modern yang kompetitif.",
    identity_title: "Identitas Brand",
    identity_1: "Perusahaan: PT AGCP Indonesia",
    identity_2: "Brand: Sparkla",
    identity_3: "Kategori: Carbonated Soft Drink (CSD)",
    identity_4: "Konsep inti: minuman sparkling dengan intensitas seimbang",
    identity_5: "Tagline: Fun without overdoing it",
    product_title: "Lini Produk",
    product_1: "Sub-positioning: soda sparkling berintensitas ringan",
    product_2: "Varian 1: Sparkla Calming Ginger",
    product_3: "Varian 2: Sparkla Calming Lime",
    product_4: "Formula rendah gula",
    product_5: "Karbonasi terkontrol dan profil rasa seimbang",
    vision_title: "Visi",
    vision_1: "Menghadirkan produk dengan kualitas dan rasa yang nyaman.",
    vision_2: "Menjangkau konsumen melalui strategi pemasaran digital yang relevan.",
    vision_3: "Membangun hubungan jangka panjang dengan pelanggan.",
    mission_title: "Misi",
    mission_body:
      "Menjadi perusahaan FMCG lokal yang adaptif dalam menghadirkan minuman berkarbonasi yang relevan dengan gaya hidup modern dan pengalaman konsumsi yang lebih seimbang.",
    stp_title: "Analisis STP",
    segment_title: "Segmentasi",
    segment_body:
      "Usia 18-35, mahasiswa dan profesional muda, pria maupun wanita, urban dan dinamis, pendapatan menengah ke atas, terbuka mencoba minuman baru, serta sadar keseimbangan antara kesenangan dan asupan gula lebih ringan.",
    target_title: "Penargetan",
    target_body:
      "Urban young adults dan early adopters yang suka momen minum soda, namun memilih rasa tidak terlalu manis dengan drinkability yang nyaman.",
    persona_1:
      "Alya (22): mahasiswi aktif, suka nongkrong dan mencoba minuman baru, ingin soda yang fun tapi tidak terlalu manis.",
    persona_2:
      "Arga (28): staf marketing, aktif di kantor dan kafe, ingin soda menyegarkan yang tetap nyaman diminum sepanjang hari.",
    position_title: "Pemosisian",
    position_body:
      "Sparkla diposisikan di antara cola berintensitas kuat dan soda rendah gula: tetap fun dan sparkling, namun lebih ringan dan tidak berlebihan.",
    competition_title: "Situasi Kompetitif",
    coke_title: "Kompetitor Utama: Coca-Cola",
    coke_body:
      "Memiliki ekuitas global kuat, rasa bold ikonik, distribusi luas, dan loyalitas tinggi. Varian rendah gula tetap mempertahankan karakter intensitas kuat.",
    pepsi_title: "Kompetitor Utama: Pepsi",
    pepsi_body:
      "Citra youthful dan energetic dengan rasa cola kuat dan pengenalan global. Varian rendah gula juga tetap menonjolkan bold intensity.",
    gap_title: "Market Gap & Peluang",
    gap_body:
      "Kesadaran kesehatan segmen urban meningkat dan permintaan soda rendah gula yang lebih ringan bertumbuh. Sparkla mengisi peluang struktural ini dengan intensitas rasa seimbang.",
    mix_title: "Strategi Harga & Distribusi",
    mix_1: "Harga setara kompetitor (Coke Zero dan Pepsi Black).",
    mix_2: "Tujuan strategis: membangun trial tanpa perang harga.",
    mix_3:
      "Channel fase 1: minimarket urban, area kampus, coffee shop, dan event komunitas.",
    mix_4:
      "Ekspansi fase 2: modern trade dan penguatan platform e-commerce.",
    imc_title: "Integrated Marketing Communication (5 Elemen)",
    imc_1_title: "1) Advertising",
    imc_1_body:
      "Sensory storytelling di Instagram Reels/Stories dan TikTok dengan momen santai yang relatable, visual cerah, dan nuansa menyegarkan.",
    imc_2_title: "2) Sales Promotion",
    imc_2_body:
      "Booth sampling kampus/komunitas, voucher QR pembelian pertama, promo bundling awal, buy-1-get-1, dan diskon minimarket partner.",
    imc_3_title: "3) Public Relations",
    imc_3_body:
      "Kolaborasi komunitas olahraga ringan (lari, yoga, sepeda) dan edukasi konsumsi gula seimbang dengan framing gaya hidup positif.",
    imc_4_title: "4) Direct Marketing",
    imc_4_body:
      "Loyalty berbasis QR di setiap kemasan dan pengumpulan data pelanggan untuk CRM personal serta mendorong repeat purchase.",
    imc_5_title: "5) Digital Marketing Communication",
    imc_5_body:
      "Kolaborasi micro-influencer, #SparklaMoment challenge, dan konten UGC yang fokus pada pengalaman autentik tanpa klaim berlebihan.",
    measurement_title: "Pengukuran Performa Promosi",
    metric_1_title: "Kampanye 1: Sparkling Your Routine",
    metric_1_body:
      "Tujuan: awareness dan trial melalui konten video Instagram. KPI: reach/views dan pertumbuhan followers. Target: 1.000 views dalam 2 minggu pertama dan 100 follower baru per periode kampanye.",
    metric_2_title: "Kampanye 2: Sparkla Pop-up Chill Corner",
    metric_2_body:
      "Tujuan: pengalaman rasa langsung di tempat nongkrong/co-working. KPI: conversion rate dan feedback score. Target: 20% trial-to-purchase dan skor rasa rata-rata 4,5/5.",
    metric_3_title: "Kampanye 3: The Less-Sweet Challenge",
    metric_3_body:
      "Tujuan: membuktikan posisi rasa lebih ringan melalui konten review TikTok. KPI: engagement rate dan saves. Target: minimal 5% engagement dan 150 saves per video review.",
    eval_title: "Evaluasi, Key Takeaway, dan Call to Action",
    eval_body:
      "Lakukan digital review mingguan (views, engagement, saves) dan review offline/sales bulanan dari aktivasi lapangan. Optimalkan konten berdasar metrik tertinggi. Key takeaway: Sparkla lebih ringan, tidak terlalu manis, dan tetap menyenangkan. CTA: bergerak agile mengikuti tren urban agar Sparkla tetap relevan dan trendy.",
    footer_text: "Sparkla - Better Spark, Better Choice"
  }
};

const languageButton = document.getElementById("langToggle");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const companyTabs = document.querySelectorAll(".company-tab");
const companyTrack = document.getElementById("companyTrack");
const revealElements = document.querySelectorAll(".section, .hero");
const statNodes = document.querySelectorAll(".stat-number[data-count]");
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");

function applyTranslations(language) {
  const dictionary = translations[language];
  translatableNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = language;
  languageButton.textContent = language === "en" ? "ID" : "EN";
  localStorage.setItem("sparklaLanguage", language);
}

function getInitialLanguage() {
  const saved = localStorage.getItem("sparklaLanguage");
  if (saved === "en" || saved === "id") {
    return saved;
  }
  return "id";
}

function selectCompanyTab(index) {
  companyTabs.forEach((tab) => tab.classList.remove("active"));
  const chosenTab = companyTabs[index];
  if (!chosenTab) return;
  chosenTab.classList.add("active");
  companyTrack.style.transform = `translateX(-${index * (100 / 3)}%)`;
}

function animateCount(node) {
  const target = Number(node.dataset.count || "0");
  const prefix = node.dataset.prefix || "";
  const suffix = node.dataset.suffix || "";
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 36));

  const timer = window.setInterval(() => {
    current += increment;
    if (current >= target) {
      node.textContent = `${prefix}${target}${suffix}`;
      window.clearInterval(timer);
      return;
    }
    node.textContent = `${prefix}${current}${suffix}`;
  }, 18);
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("hero")) {
          statNodes.forEach((node) => animateCount(node));
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );
  revealElements.forEach((el) => observer.observe(el));
}

function setupCursorAnimation() {
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsFinePointer || !cursorDot || !cursorRing) {
    return;
  }

  document.body.classList.add("cursor-enhanced");
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let ringX = pointerX;
  let ringY = pointerY;

  const interactiveSelector = "a, button, .card, .company-tab, .lang-toggle, .product-shot";

  function onMove(event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursorDot.style.transform = `translate(${pointerX}px, ${pointerY}px)`;
    document.body.classList.add("cursor-active");
  }

  function onHoverState(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const isInteractive = Boolean(target.closest(interactiveSelector));
    document.body.classList.toggle("cursor-hover", isInteractive);
  }

  function followRing() {
    ringX += (pointerX - ringX) * 0.18;
    ringY += (pointerY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
    window.requestAnimationFrame(followRing);
  }

  window.addEventListener("mousemove", onMove);
  document.addEventListener("mouseover", onHoverState);
  document.addEventListener("mouseout", onHoverState);
  window.requestAnimationFrame(followRing);
}

function setupNavScrollAnimation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector) return;
      const targetElement = document.querySelector(targetSelector);
      if (!(targetElement instanceof HTMLElement)) return;

      event.preventDefault();
      const topbar = document.querySelector(".topbar");
      const headerHeight =
        topbar instanceof HTMLElement ? topbar.offsetHeight : 0;
      const targetTop =
        targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });

      targetElement.classList.remove("section-focus");
      window.setTimeout(() => {
        targetElement.classList.add("section-focus");
      }, 280);
      window.setTimeout(() => {
        targetElement.classList.remove("section-focus");
      }, 1300);
    });
  });
}

let activeLanguage = getInitialLanguage();
applyTranslations(activeLanguage);
setupRevealObserver();
setupCursorAnimation();
setupNavScrollAnimation();

languageButton.addEventListener("click", () => {
  document.body.classList.add("lang-switching");
  languageButton.classList.add("is-switching");
  activeLanguage = activeLanguage === "en" ? "id" : "en";
  applyTranslations(activeLanguage);
  window.setTimeout(() => {
    document.body.classList.remove("lang-switching");
    languageButton.classList.remove("is-switching");
  }, 320);
});

companyTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = Number(tab.getAttribute("data-tab-target")) || 0;
    selectCompanyTab(index);
  });
});

window.setInterval(() => {
  const currentIndex = [...companyTabs].findIndex((tab) =>
    tab.classList.contains("active")
  );
  const nextIndex = (currentIndex + 1) % companyTabs.length;
  selectCompanyTab(nextIndex);
}, 7000);
