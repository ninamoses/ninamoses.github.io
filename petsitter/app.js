// ── Sitter seed data ──
const SITTERS = [
  {
    id: 's1', name: 'Amara Johnson', emoji: '👩🏾',
    location: 'Capitol Hill, DC', rating: 4.9, reviews: 87,
    rate: '$25/visit', available: true,
    services: ['Drop-in Visit', 'Dog Walking', 'Overnight Stay'],
    bio: 'Lifelong animal lover with 5+ years of pet sitting experience. I treat every pet like my own and send daily photo updates. Background checked and pet first aid certified.',
    pets: ['Dogs', 'Cats', 'Small Animals'],
  },
  {
    id: 's2', name: 'Marcus Lee', emoji: '👨🏻',
    location: 'Bethesda, MD', rating: 4.8, reviews: 62,
    rate: '$22/visit', available: true,
    services: ['Dog Walking', 'Doggy Day Care', 'Drop-in Visit'],
    bio: 'Former veterinary technician with a deep understanding of animal health and behavior. Specializing in high-energy and large breeds. Your dog will get the exercise they need!',
    pets: ['Dogs'],
  },
  {
    id: 's3', name: 'Sofia Rivera', emoji: '👩🏽',
    location: 'Silver Spring, MD', rating: 5.0, reviews: 34,
    rate: '$30/visit', available: false,
    services: ['Overnight Stay', 'House Sitting', 'Drop-in Visit'],
    bio: 'I provide a home-away-from-home experience. Your pet stays comfortable in their own environment while you\'re away. I\'m available for weekend and extended trips.',
    pets: ['Dogs', 'Cats', 'Birds'],
  },
  {
    id: 's4', name: 'David Park', emoji: '👨🏻',
    location: 'Arlington, VA', rating: 4.7, reviews: 118,
    rate: '$20/visit', available: true,
    services: ['Dog Walking', 'Drop-in Visit', 'Doggy Day Care'],
    bio: 'Professional dog trainer and walker with certifications in positive reinforcement. Great for pets that need extra patience or behavioral support during your absence.',
    pets: ['Dogs', 'Cats'],
  },
  {
    id: 's5', name: 'Priya Nair', emoji: '👩🏽',
    location: 'Rockville, MD', rating: 4.9, reviews: 45,
    rate: '$28/visit', available: true,
    services: ['Drop-in Visit', 'Overnight Stay', 'House Sitting'],
    bio: 'Cat specialist and small animal expert. I have a quiet, calm home perfect for anxious pets. Experienced with administering medications and special dietary needs.',
    pets: ['Cats', 'Rabbits', 'Birds', 'Small Animals'],
  },
  {
    id: 's6', name: 'James Carter', emoji: '👨🏿',
    location: 'Alexandria, VA', rating: 4.6, reviews: 73,
    rate: '$18/visit', available: false,
    services: ['Dog Walking', 'Drop-in Visit'],
    bio: 'Reliable and punctual dog walker available mornings and evenings. GPS-tracked walks with photo updates after every visit. Great for busy professionals.',
    pets: ['Dogs'],
  },
];

const SPECIES_EMOJI = { Dog: '🐶', Cat: '🐱', Bird: '🐦', Rabbit: '🐰', Other: '🐾' };

// ── Storage helpers ──
function getPets()     { return JSON.parse(localStorage.getItem('ps_pets') || '[]'); }
function savePets(p)   { localStorage.setItem('ps_pets', JSON.stringify(p)); }
function getBookings() { return JSON.parse(localStorage.getItem('ps_bookings') || '[]'); }
function saveBookings(b){ localStorage.setItem('ps_bookings', JSON.stringify(b)); }

function genId() { return '_' + Math.random().toString(36).slice(2, 9); }

// ── Tab navigation ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    if (btn.dataset.tab === 'dashboard') renderDashboard();
    if (btn.dataset.tab === 'pets') renderPets();
    if (btn.dataset.tab === 'sitters') renderSitters();
    if (btn.dataset.tab === 'bookings') renderBookings();
  });
});

// ── Stars helper ──
function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + ` ${rating}`;
}

// ── Booking status ──
function bookingStatus(start, end) {
  const now = new Date(); now.setHours(0,0,0,0);
  const s = new Date(start + 'T00:00:00');
  const e = new Date(end   + 'T00:00:00');
  if (e < now)  return { label: 'Completed', cls: 'status-past' };
  if (s <= now) return { label: 'Active',    cls: 'status-active' };
  return           { label: 'Upcoming',   cls: 'status-upcoming' };
}

// ── DASHBOARD ──
function renderDashboard() {
  const pets = getPets();
  const bookings = getBookings();
  const now = new Date(); now.setHours(0,0,0,0);
  const upcoming = bookings.filter(b => new Date(b.end + 'T00:00:00') >= now);

  document.getElementById('stats-grid').innerHTML = `
    <div class="stat-card"><div class="stat-value">${pets.length}</div><div class="stat-label">Pets Registered</div></div>
    <div class="stat-card"><div class="stat-value">${bookings.length}</div><div class="stat-label">Total Bookings</div></div>
    <div class="stat-card"><div class="stat-value">${upcoming.length}</div><div class="stat-label">Upcoming / Active</div></div>
    <div class="stat-card"><div class="stat-value">${SITTERS.filter(s=>s.available).length}</div><div class="stat-label">Sitters Available</div></div>
  `;

  const upcomingEl = document.getElementById('upcoming-bookings');
  if (upcoming.length === 0) {
    upcomingEl.innerHTML = '<div class="empty-state">No upcoming bookings.<br>Head to <strong>Bookings</strong> to schedule one!</div>';
  } else {
    upcomingEl.innerHTML = upcoming.slice(0, 3).map(b => {
      const pet    = pets.find(p => p.id === b.petId);
      const sitter = SITTERS.find(s => s.id === b.sitterId);
      const st     = bookingStatus(b.start, b.end);
      return `
        <div class="booking-card">
          <div class="booking-icon">${pet ? SPECIES_EMOJI[pet.species] : '🐾'}</div>
          <div class="booking-info">
            <div class="booking-title">${pet?.name ?? 'Unknown Pet'} with ${sitter?.name ?? 'Unknown Sitter'}</div>
            <div class="booking-meta">${b.service} · ${b.start} → ${b.end}</div>
          </div>
          <span class="booking-status ${st.cls}">${st.label}</span>
        </div>`;
    }).join('');
  }

  const dashPets = document.getElementById('dashboard-pets');
  if (pets.length === 0) {
    dashPets.innerHTML = '<div class="empty-state">No pets yet.<br>Go to <strong>My Pets</strong> to add one!</div>';
  } else {
    dashPets.innerHTML = pets.slice(0, 4).map(p => `
      <div class="booking-card">
        <div class="booking-icon">${SPECIES_EMOJI[p.species]}</div>
        <div class="booking-info">
          <div class="booking-title">${p.name}</div>
          <div class="booking-meta">${p.species}${p.breed ? ' · ' + p.breed : ''}${p.age ? ' · ' + p.age + ' yrs' : ''}</div>
        </div>
      </div>`).join('');
  }
}

// ── PETS ──
function renderPets() {
  const pets = getPets();
  const grid = document.getElementById('pet-grid');
  if (pets.length === 0) {
    grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1">You haven\'t added any pets yet. Click <strong>+ Add Pet</strong> to get started!</div>';
    return;
  }
  grid.innerHTML = pets.map(p => `
    <div class="pet-card">
      <span class="pet-emoji">${SPECIES_EMOJI[p.species]}</span>
      <div class="pet-name">${p.name}</div>
      <div class="pet-meta">${p.species}${p.breed ? ' · ' + p.breed : ''}${p.age ? ' · ' + p.age + ' years old' : ''}</div>
      ${p.care ? `<div class="pet-care-preview">📋 ${p.care}</div>` : ''}
      <div class="pet-actions">
        <button class="btn btn-outline btn-sm" onclick="editPet('${p.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deletePet('${p.id}')">Delete</button>
      </div>
    </div>`).join('');
}

function openPetModal(pet = null) {
  document.getElementById('pet-id').value   = pet?.id ?? '';
  document.getElementById('pet-name').value = pet?.name ?? '';
  document.getElementById('pet-species').value = pet?.species ?? 'Dog';
  document.getElementById('pet-breed').value = pet?.breed ?? '';
  document.getElementById('pet-age').value   = pet?.age ?? '';
  document.getElementById('pet-care').value  = pet?.care ?? '';
  document.getElementById('pet-modal-title').textContent = pet ? 'Edit Pet' : 'Add a Pet';
  document.getElementById('pet-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePetModal() {
  document.getElementById('pet-modal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('pet-form').reset();
}

function editPet(id) {
  const pet = getPets().find(p => p.id === id);
  if (pet) openPetModal(pet);
}

function deletePet(id) {
  if (!confirm('Remove this pet?')) return;
  savePets(getPets().filter(p => p.id !== id));
  renderPets();
}

document.getElementById('add-pet-btn').addEventListener('click', () => openPetModal());
document.getElementById('close-pet-modal').addEventListener('click', closePetModal);
document.getElementById('cancel-pet').addEventListener('click', closePetModal);
document.getElementById('pet-modal').addEventListener('click', e => { if (e.target === document.getElementById('pet-modal')) closePetModal(); });

document.getElementById('pet-form').addEventListener('submit', e => {
  e.preventDefault();
  const pets = getPets();
  const id   = document.getElementById('pet-id').value;
  const pet  = {
    id:      id || genId(),
    name:    document.getElementById('pet-name').value.trim(),
    species: document.getElementById('pet-species').value,
    breed:   document.getElementById('pet-breed').value.trim(),
    age:     document.getElementById('pet-age').value,
    care:    document.getElementById('pet-care').value.trim(),
  };
  if (id) {
    const idx = pets.findIndex(p => p.id === id);
    pets[idx] = pet;
  } else {
    pets.push(pet);
  }
  savePets(pets);
  closePetModal();
  renderPets();
});

// ── SITTERS ──
function renderSitters() {
  document.getElementById('sitter-grid').innerHTML = SITTERS.map(s => `
    <div class="sitter-card" onclick="openSitterModal('${s.id}')">
      <div class="sitter-avatar">${s.emoji}</div>
      <div class="sitter-name">${s.name}</div>
      <div class="sitter-location">📍 ${s.location}</div>
      <div class="stars">${stars(s.rating)} <span style="color:#aaa;font-size:0.8rem">(${s.reviews} reviews)</span></div>
      <div class="sitter-rate">${s.rate}</div>
      <div class="sitter-tags">${s.services.map(sv => `<span class="sitter-tag">${sv}</span>`).join('')}</div>
      <span class="availability-badge ${s.available ? 'available' : 'unavailable'}">${s.available ? '✓ Available' : '✗ Unavailable'}</span>
    </div>`).join('');
}

function openSitterModal(id) {
  const s = SITTERS.find(x => x.id === id);
  document.getElementById('sitter-detail').innerHTML = `
    <div class="sitter-detail-header">
      <div class="sitter-detail-avatar">${s.emoji}</div>
      <div>
        <div class="sitter-name" style="font-size:1.3rem">${s.name}</div>
        <div class="sitter-location">📍 ${s.location}</div>
        <div class="stars">${stars(s.rating)} (${s.reviews} reviews)</div>
        <div class="sitter-rate">${s.rate}</div>
      </div>
    </div>
    <p class="sitter-bio">${s.bio}</p>
    <div class="sitter-detail-section">
      <div class="sitter-detail-label">Services Offered</div>
      <div class="sitter-tags">${s.services.map(sv => `<span class="sitter-tag">${sv}</span>`).join('')}</div>
    </div>
    <div class="sitter-detail-section" style="margin-top:1rem">
      <div class="sitter-detail-label">Accepts</div>
      <div class="sitter-tags">${s.pets.map(p => `<span class="sitter-tag">${p}</span>`).join('')}</div>
    </div>
    <div style="margin-top:1.5rem;display:flex;gap:0.75rem;align-items:center">
      <span class="availability-badge ${s.available ? 'available' : 'unavailable'}">${s.available ? '✓ Available Now' : '✗ Currently Unavailable'}</span>
      ${s.available ? `<button class="btn btn-primary btn-sm" onclick="goToBooking('${s.id}')">Book This Sitter →</button>` : ''}
    </div>`;
  document.getElementById('sitter-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function goToBooking(sitterId) {
  closeSitterModal();
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelector('[data-tab="bookings"]').classList.add('active');
  document.getElementById('tab-bookings').classList.add('active');
  renderBookings();
  openBookingModal(sitterId);
}

function closeSitterModal() {
  document.getElementById('sitter-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('close-sitter-modal').addEventListener('click', closeSitterModal);
document.getElementById('sitter-modal').addEventListener('click', e => { if (e.target === document.getElementById('sitter-modal')) closeSitterModal(); });

// ── BOOKINGS ──
function renderBookings() {
  const bookings = getBookings();
  const pets = getPets();
  const el = document.getElementById('bookings-list');

  if (bookings.length === 0) {
    el.innerHTML = '<div class="empty-state">No bookings yet. Click <strong>+ New Booking</strong> to schedule a sitter!</div>';
    return;
  }

  const sorted = [...bookings].sort((a, b) => new Date(b.start) - new Date(a.start));
  el.innerHTML = sorted.map(b => {
    const pet    = pets.find(p => p.id === b.petId);
    const sitter = SITTERS.find(s => s.id === b.sitterId);
    const st     = bookingStatus(b.start, b.end);
    return `
      <div class="booking-card">
        <div class="booking-icon">${pet ? SPECIES_EMOJI[pet.species] : '🐾'}</div>
        <div class="booking-info">
          <div class="booking-title">${pet?.name ?? 'Unknown Pet'} with ${sitter?.name ?? 'Unknown Sitter'}</div>
          <div class="booking-meta">${b.service} · ${b.start} → ${b.end}</div>
          ${b.notes ? `<div class="booking-meta" style="margin-top:0.25rem">📝 ${b.notes}</div>` : ''}
        </div>
        <span class="booking-status ${st.cls}">${st.label}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteBooking('${b.id}')">Cancel</button>
      </div>`;
  }).join('');
}

function openBookingModal(preselectSitterId = null) {
  const pets = getPets();
  const petSel = document.getElementById('booking-pet');
  petSel.innerHTML = pets.length
    ? pets.map(p => `<option value="${p.id}">${SPECIES_EMOJI[p.species]} ${p.name}</option>`).join('')
    : '<option disabled>No pets added yet</option>';

  const sitterSel = document.getElementById('booking-sitter');
  sitterSel.innerHTML = SITTERS.filter(s => s.available)
    .map(s => `<option value="${s.id}" ${s.id === preselectSitterId ? 'selected' : ''}>${s.emoji} ${s.name}</option>`).join('');

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('booking-start').min = today;
  document.getElementById('booking-end').min   = today;
  document.getElementById('booking-start').value = '';
  document.getElementById('booking-end').value   = '';
  document.getElementById('booking-notes').value = '';

  if (pets.length > 0 && pets[0].care) {
    document.getElementById('booking-notes').value = pets[0].care;
  }

  document.getElementById('booking-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('booking-form').reset();
}

function deleteBooking(id) {
  if (!confirm('Cancel this booking?')) return;
  saveBookings(getBookings().filter(b => b.id !== id));
  renderBookings();
}

document.getElementById('add-booking-btn').addEventListener('click', () => openBookingModal());
document.getElementById('close-booking-modal').addEventListener('click', closeBookingModal);
document.getElementById('cancel-booking').addEventListener('click', closeBookingModal);
document.getElementById('booking-modal').addEventListener('click', e => { if (e.target === document.getElementById('booking-modal')) closeBookingModal(); });

document.getElementById('booking-start').addEventListener('change', function() {
  document.getElementById('booking-end').min = this.value;
});

document.getElementById('booking-form').addEventListener('submit', e => {
  e.preventDefault();
  const start = document.getElementById('booking-start').value;
  const end   = document.getElementById('booking-end').value;
  if (end < start) { alert('End date must be on or after start date.'); return; }

  const booking = {
    id:       genId(),
    petId:    document.getElementById('booking-pet').value,
    sitterId: document.getElementById('booking-sitter').value,
    start,
    end,
    service:  document.getElementById('booking-service').value,
    notes:    document.getElementById('booking-notes').value.trim(),
  };
  saveBookings([...getBookings(), booking]);
  closeBookingModal();
  renderBookings();
});

// ── Keyboard close ──
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closePetModal();
  closeSitterModal();
  closeBookingModal();
});

// ── Init ──
renderDashboard();
renderSitters();
