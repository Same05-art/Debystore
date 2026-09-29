const PRODUCTS = [
  {
    id: "hoodie-essential",
    name: "Hoodie oversize Essential",
    price: 14900,
    category: "vetement",
    categoryLabel: "Vêtement",
    description:
      "Hoodie oversize en molleton épais, coupe ample. Logo orange discret sur la poitrine.",
    longDescription:
      "Le Hoodie Essential est la pièce signature Debystore. Coupe oversize volontairement large, molleton 380 g/m² doux et résistant, capuche doublée et poches kangourou profondes. Le logo orange est brodé discrètement sur la poitrine pour un look street épuré. Idéal en ville comme en voyage : il se porte seul ou en layering. Lavable en machine à 30 °C.",
    details: ["Molleton 80 % coton / 20 % polyester", "Coupe oversize unisexe", "Logo brodé orange", "Lavable machine 30 °C"],
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL"],
    image: "hoodie.jpg",
    rating: 4.8,
    reviewCount: 24,
    reviews: [
      { name: "Moussa K.", city: "Dakar", rating: 5, text: "Qualité au top, la coupe est vraiment oversize comme sur les photos. Je recommande." },
      { name: "Awa D.", city: "Abidjan", rating: 5, text: "Très confortable et le molleton est épais. Livraison rapide." },
      { name: "Ibrahim S.", city: "Bamako", rating: 4, text: "Beau hoodie, taille un peu large — prenez une taille en dessous si vous aimez plus ajusté." },
    ],
  },
  {
    id: "sneakers-aero-run",
    name: "Sneakers Aero Run",
    price: 18900,
    category: "chaussure",
    categoryLabel: "Chaussures",
    description:
      "Sneakers légères noir / blanc, détails orange. Confort ville et casual.",
    longDescription:
      "Les Aero Run allient légèreté et maintien pour le quotidien urbain. Semelle en EVA amortie, tige mesh respirante et détails orange Debystore. Parfaites pour marcher toute la journée sans fatigue. Semelle antidérapante et semelle intérieure amovible.",
    details: ["Tige mesh respirante", "Semelle EVA amortie", "Détails orange signature", "Semelle intérieure amovible"],
    colors: ["Noir / Blanc", "Blanc / Orange"],
    sizes: ["40", "41", "42", "43", "44"],
    image: "sneakers.jpg",
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      { name: "Fatou N.", city: "Thiès", rating: 5, text: "Très légères et stylées. Je les porte tous les jours." },
      { name: "Omar B.", city: "Ouagadougou", rating: 4, text: "Bon rapport qualité-prix. Un peu étroites au début, ça s’assouplit." },
      { name: "Khadija M.", city: "Lomé", rating: 5, text: "Confortables dès le premier jour. Design clean." },
    ],
  },
  {
    id: "tshirt-urban-core",
    name: "T-shirt oversize Urban Core",
    price: 8900,
    category: "vetement",
    categoryLabel: "Vêtement",
    description: "T-shirt oversize 100 % coton, imprimé minimaliste noir et orange.",
    longDescription:
      "Le T-shirt Urban Core en coton peigné 180 g/m² offre une coupe oversize moderne et un tombé fluide. Imprimé minimaliste noir et orange, col renforcé et coutures soignées. Une base polyvalente pour tous les looks street Debystore.",
    details: ["100 % coton peigné", "Coupe oversize", "Imprimé sérigraphie", "Col renforcé"],
    colors: ["Noir", "Blanc", "Gris"],
    sizes: ["S", "M", "L", "XL"],
    image: "tshirt.jpg",
    rating: 4.7,
    reviewCount: 31,
    reviews: [
      { name: "Yacine T.", city: "Dakar", rating: 5, text: "Coton doux, coupe parfaite. J’en ai pris deux." },
      { name: "Mariama S.", city: "Conakry", rating: 5, text: "L’imprimé ne part pas au lavage. Super qualité." },
      { name: "Cheikh A.", city: "Saint-Louis", rating: 4, text: "Très beau, un peu transparent en blanc — normal pour du coton léger." },
    ],
  },
  {
    id: "jogger-street-fit",
    name: "Jogger Street Fit",
    price: 12900,
    category: "vetement",
    categoryLabel: "Vêtement",
    description: "Jogger coton stretch, poches cargo et taille élastique.",
    longDescription:
      "Le Jogger Street Fit combine confort sport et look urbain. Coton stretch souple, poches cargo pratiques, taille élastique avec cordon et bas de jambe resserré. Idéal avec un hoodie ou un t-shirt Debystore pour un ensemble cohérent.",
    details: ["Coton stretch", "Poches cargo", "Taille élastique + cordon", "Bas resserré"],
    colors: ["Noir", "Gris chiné"],
    sizes: ["S", "M", "L", "XL"],
    image: "jogger.jpg",
    rating: 4.5,
    reviewCount: 15,
    reviews: [
      { name: "Boubacar D.", city: "Bamako", rating: 5, text: "Confortable et stylé. Les poches cargo sont utiles." },
      { name: "Ndeye F.", city: "Dakar", rating: 4, text: "Bonne qualité, taille fidèle. Je recommande." },
      { name: "Amadou L.", city: "Niamey", rating: 5, text: "Parfait pour la ville. Tombé nickel." },
    ],
  },
  {
    id: "deby-cap",
    name: "Casquette snapback Deby Cap",
    price: 6500,
    category: "accessoire",
    categoryLabel: "Accessoire",
    description: "Snapback structurée, logo orange brodé. Réglable.",
    longDescription:
      "La Deby Cap est une snapback structurée avec visière plate et logo orange brodé. Réglable à l’arrière pour un ajustement précis. Accessoire indispensable pour finaliser un look streetwear Debystore.",
    details: ["Structure fermée", "Logo orange brodé", "Réglable (snapback)", "Taille unique"],
    colors: ["Noir", "Blanc"],
    sizes: ["Unique"],
    image: "cap.jpg",
    rating: 4.9,
    reviewCount: 42,
    reviews: [
      { name: "Saliou M.", city: "Dakar", rating: 5, text: "Broderie nickel, tient bien sur la tête." },
      { name: "Aissatou R.", city: "Abidjan", rating: 5, text: "Très belle finition. Cadeau parfait." },
      { name: "Ibrahima C.", city: "Ziguinchor", rating: 5, text: "Qualité premium pour le prix. Je rachète." },
    ],
  },
];

const money = (n) => n.toLocaleString("fr-FR") + " FCFA";
const keyOf = (i) => i.id + "__" + i.size + "__" + i.color;

let filter = "all";
let cart = JSON.parse(localStorage.getItem("debystore-cart-static") || "[]");
let selected = null;
let selSize = "";
let selColor = "";

function save() {
  localStorage.setItem("debystore-cart-static", JSON.stringify(cart));
}

function count() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function total() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function add(p, size, color) {
  const k = keyOf({ id: p.id, size, color });
  const found = cart.find((i) => keyOf(i) === k);
  if (found) found.qty += 1;
  else
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      size,
      color,
      qty: 1,
    });
  save();
  renderCart();
  openCart(true);
}

function stars(n) {
  const full = Math.floor(n);
  const half = n - full >= 0.5 ? 1 : 0;
  let s = "★".repeat(full);
  if (half) s += "½";
  s += "☆".repeat(5 - full - half);
  return s;
}

function renderProducts() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  const list =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  grid.innerHTML = list
    .map(
      (p) => `
      <article class="card">
        <a class="thumb" href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}">
          <span class="tag">${p.categoryLabel}</span>
        </a>
        <div class="card-body">
          <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
          <p class="card-rating"><span class="stars">${stars(p.rating)}</span> <span class="muted">${p.rating} (${p.reviewCount})</span></p>
          <p class="price">${money(p.price)}</p>
          <a class="btn" href="product.html?id=${p.id}">Voir le produit</a>
        </div>
      </article>`,
    )
    .join("");
  document.querySelectorAll(".chip[data-filter]").forEach((c) => {
    c.classList.toggle("active", c.dataset.filter === filter);
  });
}

function addFromCard(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (p) add(p, p.sizes[0], p.colors[0]);
}

function openProduct(id) {
  window.location.href = "product.html?id=" + encodeURIComponent(id);
}

function closeModal() {
  const m = document.getElementById("modal");
  if (m) m.classList.remove("open");
}

function renderCart() {
  const n = count();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = n;
    el.style.display = n ? "grid" : "none";
  });
  const box = document.getElementById("cart-items");
  const form = document.getElementById("order-form");
  if (!box) return;
  if (!cart.length) {
    box.innerHTML =
      '<p style="text-align:center;color:var(--muted);padding:48px 0">Votre panier est vide.</p>';
    if (form) form.style.display = "none";
  } else {
    box.innerHTML = cart
      .map(
        (i) => `
        <div class="line-item">
          <img src="${i.image}" alt="">
          <div>
            <strong>${i.name}</strong>
            <div style="font-size:12px;color:var(--muted)">${i.color} · ${i.size}</div>
            <div class="price">${money(i.price)}</div>
            <div class="qty">
              <button type="button" onclick="changeQty('${keyOf(i)}',-1)">−</button>
              <span>${i.qty}</span>
              <button type="button" onclick="changeQty('${keyOf(i)}',1)">+</button>
            </div>
          </div>
        </div>`,
      )
      .join("");
    if (form) form.style.display = "flex";
  }
  const tot = document.getElementById("cart-total");
  if (tot) tot.textContent = money(total());
}

function changeQty(k, d) {
  const item = cart.find((i) => keyOf(i) === k);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter((i) => keyOf(i) !== k);
  save();
  renderCart();
}

function openCart(open) {
  const el = document.getElementById("cart");
  if (el) el.classList.toggle("open", open);
}

function submitOrder(e) {
  e.preventDefault();
  if (!cart.length) {
    alert("Votre panier est vide.");
    return false;
  }
  const name = document.getElementById("order-name").value.trim();
  const address = document.getElementById("order-address").value.trim();
  const phone = document.getElementById("order-phone").value.trim();
  if (!name || !address || !phone) {
    alert("Veuillez remplir tous les champs.");
    return false;
  }
  try {
    sessionStorage.setItem(
      "debystore-last-order",
      JSON.stringify({
        name,
        address,
        phone,
        total: total(),
        items: cart,
        date: new Date().toISOString(),
      }),
    );
  } catch (_) {}
  cart = [];
  save();
  renderCart();
  openCart(false);
  window.location.href = "merci.html";
  return false;
}

function toggleMenu() {
  const nav = document.getElementById("mobile-nav");
  if (nav) nav.classList.toggle("open");
}

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PRODUCTS.find((x) => x.id === id);
  const root = document.getElementById("product-root");
  if (!root) return;
  if (!p) {
    root.innerHTML = `
      <div class="wrap" style="padding:64px 0;text-align:center">
        <h1>Produit introuvable</h1>
        <p style="color:var(--muted)">Ce produit n’existe pas ou a été retiré.</p>
        <a class="btn btn-accent" href="index.html#produits" style="margin-top:20px">Retour à la boutique</a>
      </div>`;
    return;
  }
  document.title = p.name + " — Debystore";
  selSize = p.sizes[0];
  selColor = p.colors[0];
  selected = p;
  drawProductPage(p);
}

function drawProductPage(p) {
  const root = document.getElementById("product-root");
  const related = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 3);
  root.innerHTML = `
    <div class="wrap product-page">
      <nav class="breadcrumb">
        <a href="index.html">Accueil</a>
        <span>/</span>
        <a href="index.html#produits">Boutique</a>
        <span>/</span>
        <span>${p.name}</span>
      </nav>
      <div class="product-hero">
        <div class="product-gallery">
          <img src="${p.image}" alt="${p.name}" id="product-main-img">
        </div>
        <div class="product-info">
          <p class="kicker">${p.categoryLabel}</p>
          <h1>${p.name}</h1>
          <p class="product-rating">
            <span class="stars">${stars(p.rating)}</span>
            <span>${p.rating} · ${p.reviewCount} avis</span>
          </p>
          <p class="price product-price">${money(p.price)}</p>
          <p class="product-desc">${p.longDescription || p.description}</p>
          <p class="opt-label">Couleur</p>
          <div class="filters" id="color-opts">
            ${p.colors
              .map(
                (c) =>
                  `<button type="button" class="chip ${c === selColor ? "active" : ""}" data-color="${c}">${c}</button>`,
              )
              .join("")}
          </div>
          <p class="opt-label">Taille</p>
          <div class="filters" id="size-opts">
            ${p.sizes
              .map(
                (s) =>
                  `<button type="button" class="chip ${s === selSize ? "active" : ""}" data-size="${s}">${s}</button>`,
              )
              .join("")}
          </div>
          <button type="button" class="btn btn-accent product-add" id="add-to-cart-btn">Ajouter au panier</button>
          <ul class="product-details">
            ${(p.details || []).map((d) => `<li>${d}</li>`).join("")}
          </ul>
        </div>
      </div>

      <section class="reviews-section">
        <h2>Avis clients</h2>
        <p class="reviews-summary">${stars(p.rating)} <strong>${p.rating}/5</strong> — basé sur ${p.reviewCount} avis</p>
        <div class="reviews-list">
          ${(p.reviews || [])
            .map(
              (r) => `
            <article class="review-card">
              <div class="review-head">
                <strong>${r.name}</strong>
                <span class="muted">${r.city}</span>
                <span class="stars">${stars(r.rating)}</span>
              </div>
              <p>${r.text}</p>
            </article>`,
            )
            .join("")}
        </div>
      </section>

      ${
        related.length
          ? `
      <section class="related-section">
        <h2>Vous aimerez aussi</h2>
        <div class="grid related-grid">
          ${related
            .map(
              (r) => `
            <article class="card">
              <a class="thumb" href="product.html?id=${r.id}">
                <img src="${r.image}" alt="${r.name}">
                <span class="tag">${r.categoryLabel}</span>
              </a>
              <div class="card-body">
                <h3><a href="product.html?id=${r.id}">${r.name}</a></h3>
                <p class="price">${money(r.price)}</p>
                <a class="btn" href="product.html?id=${r.id}">Voir</a>
              </div>
            </article>`,
            )
            .join("")}
        </div>
      </section>`
          : ""
      }
    </div>`;

  document.querySelectorAll("#color-opts .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      selColor = btn.dataset.color;
      document.querySelectorAll("#color-opts .chip").forEach((c) =>
        c.classList.toggle("active", c.dataset.color === selColor),
      );
    });
  });
  document.querySelectorAll("#size-opts .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      selSize = btn.dataset.size;
      document.querySelectorAll("#size-opts .chip").forEach((c) =>
        c.classList.toggle("active", c.dataset.size === selSize),
      );
    });
  });
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    add(p, selSize, selColor);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("grid")) {
    renderProducts();
    document.querySelectorAll(".chip[data-filter]").forEach((c) => {
      c.addEventListener("click", () => {
        filter = c.dataset.filter;
        renderProducts();
      });
    });
  }
  if (document.getElementById("product-root")) {
    initProductPage();
  }
  renderCart();
});
