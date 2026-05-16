// ── Your 500px photos (ninajg26) ──
const photos = [
  { src: 'https://drscdn.500px.org/photo/227334561/q%3D50_h%3D450/v2?sig=0a27a51ddf1c8fddb0e4964f7777c0e02fd8d0d7dbc95955fa184a247c0f308b', caption: 'Taken on the backwaters of Kerala' },
  { src: 'https://drscdn.500px.org/photo/227274575/q%3D50_h%3D450/v2?sig=af53ce99a02b2547a77b0921c7500a7ac5d75f60a939563efb4cc91dd3792a5f', caption: 'Sunset' },
  { src: 'https://drscdn.500px.org/photo/227270925/q%3D50_h%3D450/v2?sig=ed8da28d5944b72c67ea96a7b76db5d642b06882f3ccab17ef9fa90696a71c21', caption: 'Shangamugham Beach' },
  { src: 'https://drscdn.500px.org/photo/227268189/q%3D50_h%3D450/v2?sig=fa1bd70a6bbc46e52d8337f2997b9e06ca68bd4961ac789cf30de3ab6c7c7485', caption: 'Vavubeli Season in Shangumukham Beach' },
  { src: 'https://drscdn.500px.org/photo/227267557/q%3D50_h%3D450/v2?sig=86ac9650fb15177f75211fd3123cbac8770fa46cbd232393b9fd2a7299b21d04', caption: 'Abandoned House' },
  { src: 'https://drscdn.500px.org/photo/227266323/q%3D50_h%3D450/v2?sig=7504323fd7224af9d4c1ee423baf933ac3f4d1449670a16dd9287c550de16d8e', caption: 'Evenings on the Backwaters' },
  { src: 'https://drscdn.500px.org/photo/227263763/q%3D50_h%3D450/v2?sig=c3d9da6fdbc9594a53b896a9a148aa0535187fa9e3cab9a205bd7d79da83bbdc', caption: 'Hanging Gooseberries' },
  { src: 'https://drscdn.500px.org/photo/193153487/q%3D50_h%3D450/v2?sig=04bff373dd41d11df6578c1a5de2eef62315777793fd22cb3c09fd276a279c28', caption: 'Tulips from Garden' },
  { src: 'https://drscdn.500px.org/photo/192362415/q%3D50_h%3D450/v2?sig=cfb95e483fcebc60e584c3b3819ec6795290c22ba1357cff30b88e1f5c1dcbfc', caption: 'Bay Bridge, MD' },
  { src: 'https://drscdn.500px.org/photo/192362413/q%3D50_h%3D450/v2?sig=dbec016812a36d5d49fcd9775064d6c9831b5b83922b57977cbf4f03857b13f7', caption: 'Delmarva' },
  { src: 'https://drscdn.500px.org/photo/192362411/q%3D50_h%3D450/v2?sig=dcc2ae5eb11781f6dbe4530e2b2a1437550afd131f70ab2361de2acaad81f28e', caption: 'Delmarva' },
  { src: 'https://drscdn.500px.org/photo/232737285/q%3D50_h%3D450/v2?sig=9097b19bf784f1e7b25154efe50f9ad149f28c74eb2efe13536a33aec299b021', caption: '' },
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
