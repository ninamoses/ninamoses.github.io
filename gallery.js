// ── Add your photos to the images/ folder, then list them here ──
// Example: { src: 'images/my-photo.jpg', caption: 'My Caption' }
const photos = [
  { src: 'images/photo1.jpg', caption: '' },
  { src: 'images/photo2.jpg', caption: '' },
  { src: 'images/photo3.jpg', caption: '' },
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
