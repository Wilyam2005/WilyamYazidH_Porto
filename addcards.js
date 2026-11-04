const oM = [
  {
    id: 0,
    name: "Duta Pariwisata 2025",
    description: "Juara 1 Duta Pariwisata Lombok Timur 2025. Mempromosikan potensi pariwisata, seni & budaya daerah secara profesional.",
    image: "images/projects/card-duta-pariwisata.jpg",
    tags: ["juara1", "pariwisata", "lombok", "prestasi"],
    alt: "Juara 1 Duta Pariwisata Lombok Timur 2025",
  },
  {
    id: 1,
    name: "Duta GENRE DIY 2024",
    description: "Juara Harapan 1 Duta GENRE D.I. Yogyakarta 2024. Edukasi remaja mengenai kesehatan reproduksi dan perencanaan masa depan.",
    image: "images/projects/card-duta-genre.jpg",
    tags: ["genre", "bkkbn", "edukasi", "diy"],
    alt: "Juara Harapan 1 Duta GENRE DIY 2024",
  },
  {
    id: 2,
    name: "Video Edukasi KESPRO",
    description: "Juara 2 Kompetisi Video Konten Kawula Muda Edukasi KESPRO BKKBN DIY. Kreativitas edukasi kesehatan reproduksi remaja.",
    image: "images/projects/card-kespro-bkkbn.jpg",
    tags: ["juara2", "videokonten", "kespro", "bkkbn"],
    alt: "Juara 2 Kompetisi Video Konten Kawula Muda Edukasi KESPRO BKKBN DIY",
  },
  {
    id: 3,
    name: "Iklan Layanan Masyarakat",
    description: "Juara 2 JAK Jambore Ajang Kreativitas Kompetisi Iklan Layanan Masyarakat (ILM) GENRE DIY.",
    image: "images/projects/card-jak-genre.jpg",
    tags: ["juara2", "ilm", "jakgenre", "diy"],
    alt: "Juara 2 JAK Jambore Ajang Kreativitas ILM GENRE DIY",
  },
  {
    id: 4,
    name: "Essay Informatika Nasional",
    description: "Peraih Medali Emas OSSI Nasional, Medali Perak ONMIPASA, & Medali Perunggu ONSB/OPSI Nasional bidang essay informatika.",
    image: "images/projects/card-essay-nasional.jpg",
    tags: ["emas", "perak", "informatika", "nasional"],
    alt: "Peraih Medali Emas & Perak Essay Informatika Tingkat Nasional",
  },
];

const aM = {
  juara1: '<div class="work-item-tag" style="background: #f59e0b; color: #111; font-weight: 700;">Juara 1</div>',
  pariwisata: '<div class="work-item-tag" style="background: #0284c7;">Pariwisata</div>',
  lombok: '<div class="work-item-tag" style="background: #2563eb;">Lombok Timur</div>',
  prestasi: '<div class="work-item-tag" style="background: #FF923E; color: #fff;">Prestasi Utama</div>',
  genre: '<div class="work-item-tag" style="background: #10b981; color: #111; font-weight: 700;">Duta GENRE</div>',
  bkkbn: '<div class="work-item-tag" style="background: #0891b2;">BKKBN DIY</div>',
  edukasi: '<div class="work-item-tag" style="background: #8b5cf6;">Edukasi Remaja</div>',
  diy: '<div class="work-item-tag" style="background: #3b82f6;">DIY</div>',
  juara2: '<div class="work-item-tag" style="background: #64748b; color: #fff; font-weight: 700;">Juara 2</div>',
  kespro: '<div class="work-item-tag" style="background: #ec4899;">KESPRO</div>',
  videokonten: '<div class="work-item-tag" style="background: #6366f1;">Video Konten</div>',
  ilm: '<div class="work-item-tag" style="background: #14b8a6;">ILM</div>',
  jakgenre: '<div class="work-item-tag" style="background: #f97316;">JAK GENRE</div>',
  emas: '<div class="work-item-tag" style="background: #eab308; color: #111; font-weight: 700;">Medali Emas</div>',
  perak: '<div class="work-item-tag" style="background: #94a3b8; color: #111; font-weight: 700;">Medali Perak</div>',
  informatika: '<div class="work-item-tag" style="background: #06b6d4;">Informatika</div>',
  nasional: '<div class="work-item-tag" style="background: #dc2626;">Tingkat Nasional</div>',
};

class lM {
  constructor() {
    he(this, "domElements", {
      renderContainer: document.getElementById("work-render-container"),
    });
    (this.experience = new ye()),
      (this.sounds = this.experience.sounds),
      (this.items = oM),
      (this.tags = aM),
      this.renderItems();
  }

  renderItems() {
    this.items.forEach((e) => {
      this.domElements.renderContainer.insertAdjacentHTML(
        "beforeend",
        `
            <div id="work-item-${e.id}" class="work-item-container column">
                <img class="work-item-image" src="${e.image}" alt="${
          e.alt
        }" height="200" width="334" loading="lazy"/>
                <div class="work-item-content-container">
                    <h3>${e.name}</h3>
                    <div class="work-item-tag-container row">
                        ${this.renderTags(e.tags)}
                    </div>
                    <span>${e.description}</span>
                </div>
                <div class="work-item-button-container row center">
                    ${this.renderButtons(e)}
                </div>
                ${e.bannerIcons ? this.renderBanner(e) : ""}
            </div>
            `
      ),
        this.addEventListenersToCard(e);
    });
  }

  renderBanner(e) {
    let t = "";
    return (
      (t = `
            <div class="work-banner-container row center">
                ${e.bannerIcons.map(
                  (n) =>
                    `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                )}
                <span>Prestasi Unggulan</span>
            </div>
        `),
      t
    );
  }

  renderButtons(e) {
    return `
        <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0 auto; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #ffffff;">
            <span style="color: #ffffff !important; font-weight: 700 !important; font-size: 0.96rem; letter-spacing: 0.4px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); line-height: 1;">Selengkapnya</span> <i class="fas fa-chevron-right" style="font-size: 0.85rem; margin-left: 4px; color: #ffffff !important; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));"></i>
        </div>
    `;
  }

  renderTags(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += this.tags[e[n]] || "";
    return t;
  }

  addEventListenersToCard(e) {
    const t = document.getElementById("work-item-" + e.id);
    t.addEventListener("click", () => {
      t.classList.contains("work-inactive-item-container") &&
        document
          .getElementById("work-item-0")
          .classList.contains("work-item-container-transition") &&
        ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
        this.experience.ui.work.cards.updatePositions(),
        this.sounds.play("buttonClick"));
    });

    const btn = document.getElementById("work-item-orange-button-" + e.id);
    if (btn) {
      btn.addEventListener("click", (evt) => {
        evt.stopPropagation();
        if (window.openAchievementsModal) {
          window.openAchievementsModal("tab-awards");
        }
      });
    }
  }
}
