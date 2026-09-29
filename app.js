const PRODUCTS = [
  {
    id: "hoodie-essential",
    name: "Hoodie oversize Essential",
    price: 14900,
    category: "vetement",
    categoryLabel: "Vêtement",
    description:
      "Hoodie oversize en molleton épais, coupe ample. Logo orange discret sur la poitrine.",
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL"],
    image: "hoodie.jpg",
  },
  {
    id: "sneakers-aero-run",
    name: "Sneakers Aero Run",
    price: 18900,
    category: "chaussure",
    categoryLabel: "Chaussures",
    description:
      "Sneakers légères noir / blanc, détails orange. Confort ville et casual.",
    colors: ["Noir / Blanc", "Blanc / Orange"],
    sizes: ["40", "41", "42", "43", "44"],
    image: "sneakers.jpg",
  },
  {
    id: "tshirt-urban-core",
    name: "T-shirt oversize Urban Core",
    price: 8900,
    category: "vetement",
    categoryLabel: "Vêtement",
    description: "T-shirt oversize 100 % coton, imprimé minimaliste noir et orange.",
    colors: ["Noir", "Blanc", "Gris"],
    sizes: ["S", "M", "L", "XL"],
    image: "tshirt.jpg",
  },
  {
    id: "jogger-street-fit",
    name: "Jogger Street Fit",
    price: 12900,
    category: "vetement",
    categoryLabel: "Vêtement",
    description: "Jogger coton stretch, poches cargo et taille élastique.",
    colors: ["Noir", "Gris chiné"],
    sizes: ["S", "M", "L", "XL"],
    image: "jogger.jpg",
  },
  {
    id: "deby-cap",
    name: "Casquette snapback Deby Cap",
    price: 6500,
    category: "accessoire",
    categoryLabel: "Accessoire",
    description: "Snapback structurée, logo orange brodé. Réglable.",
    colors: ["Noir", "Blanc"],
    sizes: ["Unique"],
    image: "cap.jpg",
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

function renderProducts() {
  const list =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  document.getElementById("grid").innerHTML = list
    .map(
      (p) => `
      <article class="card">
        <div class="thumb" onclick="openProduct('${p.id}')">
          <img src="${p.image}" alt="${p.name}">
          <span class="tag">${p.categoryLabel}</span>
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="price">${money(p.price)}</p>
          <button class="btn" onclick="addFromCard('${p.id}')">Ajouter au panier</button>
        </div>
      </article>`,
    )
    .join("");
  document.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.filter === filter);
  });
}

function addFromCard(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  add(p, p.sizes[0], p.colors[0]);
}

function openProduct(id) {
  selected = PRODUCTS.find((x) => x.id === id);
  selSize = selected.sizes[0];
  selColor = selected.colors[0];
  document.getElementById("modal").classList.add("open");
  drawModal();
}

function drawModal() {
  const p = selected;
  document.getElementById("modal").innerHTML = `
    <div class="modal-card">
      <div class="modal-grid">
        <img src="${p.image}" alt="${p.name}">
        <div class="modal-info">
          <button class="close" onclick="closeModal()" aria-label="Fermer">✕</button>
          <p class="kicker">${p.categoryLabel}</p>
          <h2>${p.name}</h2>
          <p class="price">${money(p.price)}</p>
          <p>${p.description}</p>
          <p style="font-weight:600;margin:16px 0 8px">Couleur</p>
          <div class="filters">
            ${p.colors
              .map(
                (c) =>
                  `<button class="chip ${c === selColor ? "active" : ""}" onclick="selColor='${c}';drawModal()">${c}</button>`,
              )
              .join("")}
          </div>
          <p style="font-weight:600;margin:16px 0 8px">Taille</p>
          <div class="filters">
            ${p.sizes
              .map(
                (s) =>
                  `<button class="chip ${s === selSize ? "active" : ""}" onclick="selSize='${s}';drawModal()">${s}</button>`,
              )
              .join("")}
          </div>
          <button class="btn btn-accent" style="width:100%;margin-top:20px" onclick="add(selected, selSize, selColor); closeModal();">Ajouter au panier</button>
        </div>
      </div>
    </div>`;
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

function renderCart() {
  const n = count();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = n;
    el.style.display = n ? "grid" : "none";
  });
  const box = document.getElementById("cart-items");
  const form = document.getElementById("order-form");
  if (!cart.length) {
    box.innerHTML = '<p style="text-align:center;color:var(--muted);padding:48px 0">Votre panier est vide.</p>';
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
              <button onclick="changeQty('${keyOf(i)}',-1)">−</button>
              <span>${i.qty}</span>
              <button onclick="changeQty('${keyOf(i)}',1)">+</button>
            </div>
          </div>
        </div>`,
      )
      .join("");
    if (form) form.style.display = "flex";
  }
  document.getElementById("cart-total").textContent = money(total());
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
  document.getElementById("cart").classList.toggle("open", open);
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
  // Sauvegarde optionnelle de la dernière commande (affichage sur la page merci)
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
  document.getElementById("mobile-nav").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  document.querySelectorAll(".chip[data-filter]").forEach((c) => {
    c.addEventListener("click", () => {
      filter = c.dataset.filter;
      renderProducts();
    });
  });
});
