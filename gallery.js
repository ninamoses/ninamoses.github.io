// ── Photo data ──
// To use your own photos:
//   1. Create an "images/" folder in the project root
//   2. Add your photos there
//   3. Replace the src values below with e.g. "images/my-photo.jpg"
const photos = [
  { src: 'https://picsum.photos/seed/forest/800/600',   caption: 'Forest' },
  { src: 'https://picsum.photos/seed/city/600/900',     caption: 'City' },
  { src: 'https://picsum.photos/seed/ocean/900/600',    caption: 'Ocean' },
  { src: 'https://picsum.photos/seed/portrait/600/800', caption: 'Portrait' },
  { src: 'https://picsum.photos/seed/mountain/800/500', caption: 'Mountain' },
  { src: 'https://picsum.photos/seed/street/700/900',   caption: 'Street' },
  { src: 'https://picsum.photos/seed/flower/600/600',   caption: 'Flower' },
  { src: 'https://picsum.photos/seed/sunset/900/500',   caption: 'Sunset' },
  { src: 'https://picsum.photos/seed/rain/600/800',     caption: 'Rain' },
];

// ── Render grid ──
const grid = document.getElementById('gallery-grid');

photos.forEach((photo, index) => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.innerHTML = `
    <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
    <div class="gallery-item-overlay">
      <span class="gallery-item-caption">${photo.caption}</span>
    </div>
  `;
  item.addEventListener('click', () => openLightbox(index));
  grid.appendChild(item);
});

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
let current = 0;

function openLightbox(index) {
  current = index;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const photo = photos[current];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.caption;
  lightboxCaption.textContent = photo.caption;
}

function showPrev() {
  current = (current - 1 + photos.length) % photos.length;
  updateLightbox();
}

function showNext() {
  current = (current + 1) % photos.length;
  updateLightbox();
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', showPrev);
document.getElementById('lightbox-next').addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});
