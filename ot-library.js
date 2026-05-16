const exercises = [
  // ── Fine Motor ──
  {
    name: 'Pinch & Release',
    category: 'Fine Motor',
    difficulty: 'Easy',
    duration: '5 min',
    description: 'Strengthen pinch grip by picking up and releasing small objects using a three-jaw chuck or lateral pinch pattern.',
    instructions: [
      'Gather a set of small objects (coins, buttons, or dried beans).',
      'Using your thumb and index finger, pick up each object one at a time.',
      'Place each object into a small cup or container.',
      'Repeat 10–15 times per hand.',
      'Rest 30 seconds, then switch hands.',
    ],
    materials: ['Small objects (coins, beans)', 'Small cup or container'],
    tip: 'Encourage a relaxed wrist position throughout. Avoid compensating with wrist flexion.',
    goals: 'Improve lateral and three-jaw chuck pinch strength and precision.',
  },
  {
    name: 'Therapeutic Putty Exercises',
    category: 'Fine Motor',
    difficulty: 'Moderate',
    duration: '10 min',
    description: 'Use therapeutic putty to build hand and finger strength through a variety of resistance-based exercises.',
    instructions: [
      'Select putty resistance appropriate for the client (soft, medium, or firm).',
      'Full squeeze: squeeze the entire putty ball 10 times.',
      'Finger extension: flatten putty, place fingers on top, spread fingers apart to stretch putty.',
      'Pinch pull: pinch a small section of putty and pull away from the main mass.',
      'Thumb opposition: press thumb into putty to form an imprint, repeat 10 times.',
    ],
    materials: ['Therapeutic putty (soft, medium, or firm resistance)'],
    tip: 'Warm the putty slightly before use to improve pliability, especially for clients with arthritis.',
    goals: 'Increase intrinsic hand muscle strength, pinch and grip force.',
  },
  {
    name: 'Coin Sorting',
    category: 'Fine Motor',
    difficulty: 'Easy',
    duration: '5–8 min',
    description: 'Sort mixed coins by denomination to improve in-hand manipulation, fine motor precision, and visual discrimination.',
    instructions: [
      'Place a mix of coins (pennies, nickels, dimes, quarters) on a flat surface.',
      'Using only one hand, pick up coins one at a time.',
      'Sort each coin into its correct labeled cup or section.',
      'Challenge: attempt to move coins to fingertips from palm without table surface.',
      'Complete 2–3 rounds per hand.',
    ],
    materials: ['Assorted coins', 'Sorting cups or muffin tin'],
    tip: 'Progress to using a coin purse or wallet to increase functional relevance.',
    goals: 'Develop in-hand manipulation, translation, and shift skills.',
  },
  {
    name: 'Lace Threading',
    category: 'Fine Motor',
    difficulty: 'Moderate',
    duration: '10 min',
    description: 'Thread a lace through holes in a card or board to develop bilateral coordination and fine motor dexterity.',
    instructions: [
      'Provide a lacing card or shoe with lace removed.',
      'Ask the client to thread the lace through each hole in sequence.',
      'Encourage use of both hands — one to hold, one to thread.',
      'Progress to tying a bow at the end once threading is mastered.',
      'Repeat with eyes closed for additional proprioceptive challenge.',
    ],
    materials: ['Lacing card or shoe', 'Shoelace or thick cord'],
    tip: 'Stiffen the lace tip with tape if the client struggles with the threading action.',
    goals: 'Improve bilateral coordination, hand-eye coordination, and ADL readiness (shoe tying).',
  },
  {
    name: 'Scissor Skills Practice',
    category: 'Fine Motor',
    difficulty: 'Challenging',
    duration: '10–15 min',
    description: 'Practice cutting along lines of varying complexity to develop hand strength and bilateral hand use.',
    instructions: [
      'Begin with straight lines on paper, progressing to curves and zigzags.',
      'Ensure scissors fit the client\'s hand correctly (loop scissors for limited grip).',
      'Hold paper with non-dominant hand, maintaining a vertical orientation.',
      'Cut continuously without stopping along the line.',
      'Progress to cutting out shapes and simple pictures.',
    ],
    materials: ['Scissors (adapted if needed)', 'Printed line worksheets', 'Paper'],
    tip: 'Teach "thumbs up" orientation of scissors to promote forearm supination.',
    goals: 'Develop hand dominance, bilateral coordination, and scissor grip strength.',
  },

  // ── Gross Motor ──
  {
    name: 'Seated Reaching',
    category: 'Gross Motor',
    difficulty: 'Easy',
    duration: '5 min',
    description: 'Improve shoulder range of motion and trunk stability by reaching for objects placed at varying distances and heights.',
    instructions: [
      'Seat the client in a stable chair with feet flat on the floor.',
      'Place objects at forward, lateral, and overhead reach distances.',
      'Ask the client to reach and retrieve each object one at a time.',
      'Encourage trunk rotation and weight shifting for lateral reaches.',
      'Complete 10 reaches in each direction per side.',
    ],
    materials: ['Chair', 'Lightweight objects or cones'],
    tip: 'Monitor for trunk compensation — encourage active trunk extension, not leaning.',
    goals: 'Improve shoulder ROM, postural control, and dynamic sitting balance.',
  },
  {
    name: 'Wall Push-Ups',
    category: 'Gross Motor',
    difficulty: 'Easy',
    duration: '5 min',
    description: 'A modified push-up performed against a wall to build upper extremity strength and proprioceptive awareness.',
    instructions: [
      'Stand arm\'s length from a smooth wall.',
      'Place both palms flat on the wall at shoulder height and width.',
      'Slowly bend elbows to bring chest toward the wall.',
      'Hold for 2 seconds, then push back to start.',
      'Complete 3 sets of 10 repetitions.',
    ],
    materials: ['Clear wall space'],
    tip: 'Keep the body in a straight line from head to heels throughout the movement.',
    goals: 'Build shoulder and arm strength for functional pushing and reaching tasks.',
  },
  {
    name: 'Ball Toss & Catch',
    category: 'Gross Motor',
    difficulty: 'Moderate',
    duration: '10 min',
    description: 'Improve bilateral coordination, reaction time, and upper extremity strength through tossing and catching activities.',
    instructions: [
      'Seat or stand client facing a partner at a comfortable distance.',
      'Toss a soft ball underhand, aiming for the client\'s chest.',
      'Progress from two-handed catch to dominant hand only.',
      'Increase distance gradually as accuracy improves.',
      'Introduce a balloon for slower, easier tracking if needed.',
    ],
    materials: ['Soft foam ball or balloon', 'Partner or rebound wall'],
    tip: 'Use a brightly colored ball to support visual tracking. Verbal cues ("ready, catch!") help with reaction time.',
    goals: 'Develop bilateral coordination, visual tracking, and UE strength.',
  },
  {
    name: 'Standing Balance Challenges',
    category: 'Gross Motor',
    difficulty: 'Moderate',
    duration: '8–10 min',
    description: 'Progressive standing balance activities to improve postural stability and lower extremity strength.',
    instructions: [
      'Begin with two-foot standing near a sturdy surface for support.',
      'Progress to tandem stance (one foot in front of the other).',
      'Advance to single-leg stance: hold for up to 30 seconds each side.',
      'Add a head turn or arm reach to increase challenge.',
      'Close eyes for maximum proprioceptive challenge (with supervision).',
    ],
    materials: ['Sturdy chair or counter for support', 'Non-slip mat'],
    tip: 'Always ensure the environment is safe and supervision is present for falls prevention.',
    goals: 'Improve static and dynamic standing balance for functional mobility.',
  },
  {
    name: 'Shoulder Pendulum Exercises',
    category: 'Gross Motor',
    difficulty: 'Challenging',
    duration: '10 min',
    description: 'Gentle gravity-assisted shoulder ROM exercise used in post-surgical or injury rehabilitation.',
    instructions: [
      'Client leans forward at the hip, supporting body weight with non-affected arm on a table.',
      'Allow the affected arm to hang freely and relaxed.',
      'Gently sway the body to initiate a small circular motion in the arm.',
      'Progress to forward/back and side-to-side pendulum patterns.',
      'Perform 20 circles clockwise, 20 counterclockwise.',
    ],
    materials: ['Sturdy table or chair back for support'],
    tip: 'Arm movement should be passive — driven by body sway, not active shoulder muscles.',
    goals: 'Restore shoulder ROM and reduce pain and stiffness post-injury or surgery.',
  },

  // ── Sensory ──
  {
    name: 'Deep Pressure Input',
    category: 'Sensory',
    difficulty: 'Easy',
    duration: '5 min',
    description: 'Apply firm, steady pressure to the body to promote calming and sensory regulation.',
    instructions: [
      'Use a firm pillow, therapy ball, or hands to apply deep pressure.',
      'Apply steady downward pressure on shoulders for 10 seconds.',
      'Move to forearms and hands: squeeze firmly and release.',
      'Apply a weighted blanket or lap pad if available.',
      'Encourage slow, deep breathing throughout.',
    ],
    materials: ['Weighted blanket or lap pad', 'Therapy ball (optional)'],
    tip: 'Deep pressure is typically calming. Monitor the client\'s response — some individuals may find it alerting.',
    goals: 'Support sensory modulation and promote a calm, regulated state.',
  },
  {
    name: 'Texture Exploration Bin',
    category: 'Sensory',
    difficulty: 'Easy',
    duration: '8–10 min',
    description: 'Explore a variety of textures to build tactile tolerance and desensitize hypersensitive hands.',
    instructions: [
      'Fill a bin with a neutral base material (dry rice, dried beans, or sand).',
      'Hide several small objects of varying textures within the bin.',
      'Ask the client to find each hidden object using only touch.',
      'Describe each texture found (rough, smooth, bumpy, soft).',
      'Grade activity: begin with tolerated textures and slowly introduce challenging ones.',
    ],
    materials: ['Plastic bin', 'Filler material (rice, sand, beans)', 'Small hidden objects'],
    tip: 'Never force contact with a texture — use a graded desensitization approach with client buy-in.',
    goals: 'Increase tactile tolerance, improve sensory discrimination, and reduce tactile defensiveness.',
  },
  {
    name: 'Sensory Obstacle Course',
    category: 'Sensory',
    difficulty: 'Moderate',
    duration: '15 min',
    description: 'A multi-sensory movement circuit designed to provide proprioceptive, vestibular, and tactile input.',
    instructions: [
      'Set up 4–5 stations: crawling tunnel, stepping stones, balance board, textured floor tiles, and a squeeze station.',
      'Guide client through each station in sequence.',
      'Encourage heavy work at each station (pushing, pulling, carrying).',
      'Repeat the circuit 2–3 times.',
      'End with a calming activity (deep pressure or quiet sitting).',
    ],
    materials: ['Crawling tunnel', 'Balance board', 'Stepping stones or tape lines', 'Textured mats'],
    tip: 'Observe the client\'s arousal level throughout. Adjust pacing and input intensity as needed.',
    goals: 'Provide full-body sensory integration, improve body awareness and motor planning.',
  },
  {
    name: 'Proprioceptive Heavy Work',
    category: 'Sensory',
    difficulty: 'Moderate',
    duration: '10 min',
    description: 'Engage muscles and joints with resistive "heavy work" activities to provide organizing proprioceptive input.',
    instructions: [
      'Wall push-ups: 3 sets of 10 (press palms firmly into wall).',
      'Carry a weighted bag or backpack across the room and back.',
      'Push or pull a loaded laundry basket across the floor.',
      'Chair push-ups: lift body off seat using armrests, hold 5 seconds.',
      'Log roll: roll a therapy ball across a table with firm pressure.',
    ],
    materials: ['Weighted bag or backpack', 'Laundry basket', 'Therapy ball'],
    tip: 'Heavy work is most effective when done consistently. Recommend a sensory diet schedule for the home environment.',
    goals: 'Increase body awareness, improve self-regulation, and reduce sensory seeking behaviors.',
  },
  {
    name: 'Vestibular Swinging',
    category: 'Sensory',
    difficulty: 'Challenging',
    duration: '10–15 min',
    description: 'Structured swinging activity to provide linear and rotary vestibular input for sensory integration.',
    instructions: [
      'Ensure client is safely secured in a therapy swing.',
      'Begin with slow, linear forward-back movement.',
      'Gradually increase arc as tolerated.',
      'Introduce side-to-side and diagonal patterns.',
      'Follow with proprioceptive heavy work to help organize the nervous system.',
    ],
    materials: ['Therapy swing (platform or net swing)', 'Safety mat below'],
    tip: 'Rotary input is powerful — limit to brief exposure and watch closely for signs of over-stimulation (pallor, nausea, yawning).',
    goals: 'Improve vestibular processing, postural tone, bilateral coordination, and sensory modulation.',
  },

  // ── Cognitive ──
  {
    name: 'Memory Card Matching',
    category: 'Cognitive',
    difficulty: 'Easy',
    duration: '10 min',
    description: 'A classic matching game to improve short-term memory, visual scanning, and attention.',
    instructions: [
      'Lay 10–20 cards face down in rows (5 matched pairs minimum).',
      'Client turns over two cards per turn, trying to find matching pairs.',
      'If matched, cards are removed; if not, they are turned back over.',
      'Continue until all pairs are found.',
      'Grade difficulty by increasing the number of pairs or using less distinct images.',
    ],
    materials: ['Memory card set or homemade picture cards'],
    tip: 'Use personally relevant images (family photos, familiar objects) to increase motivation and engagement.',
    goals: 'Strengthen visual memory, concentration, and attention span.',
  },
  {
    name: 'Sequencing Daily Tasks',
    category: 'Cognitive',
    difficulty: 'Easy',
    duration: '8 min',
    description: 'Arrange picture cards showing steps of a familiar task in the correct sequence.',
    instructions: [
      'Select a familiar ADL (brushing teeth, making a sandwich, getting dressed).',
      'Shuffle 4–6 picture cards showing each step out of order.',
      'Ask the client to arrange the cards in the correct order.',
      'Discuss why each step comes before or after another.',
      'Progress to longer sequences or less familiar tasks.',
    ],
    materials: ['Printed picture card sequences', 'Table surface'],
    tip: 'Use tasks from the client\'s daily routine for maximum functional carry-over.',
    goals: 'Improve executive function, task initiation, and procedural memory.',
  },
  {
    name: 'Category Sorting',
    category: 'Cognitive',
    difficulty: 'Moderate',
    duration: '10 min',
    description: 'Sort a collection of objects or pictures into semantic categories to build cognitive organization skills.',
    instructions: [
      'Gather 20–30 pictures or objects from 3–4 categories (food, tools, clothing, animals).',
      'Mix all items together on the table.',
      'Ask the client to sort items into their correct category group.',
      'Label each category verbally and explain sorting decisions.',
      'Grade difficulty by using overlapping or ambiguous categories.',
    ],
    materials: ['Picture cards or small objects', 'Sorting trays or labeled boxes'],
    tip: 'Encourage self-correction before providing cues — allow processing time.',
    goals: 'Build semantic organization, executive function, and cognitive flexibility.',
  },
  {
    name: 'Attention to Detail — Spot the Difference',
    category: 'Cognitive',
    difficulty: 'Moderate',
    duration: '10 min',
    description: 'Compare two similar images to find differences, targeting sustained attention and visual scanning.',
    instructions: [
      'Present two nearly identical pictures side by side.',
      'Ask the client to identify all the differences between them.',
      'Encourage systematic scanning (top to bottom, left to right).',
      'Record time taken and number of differences found.',
      'Progress to more complex images with subtle differences.',
    ],
    materials: ['Printed "spot the difference" worksheets or app'],
    tip: 'Teach a systematic scanning strategy — random scanning leads to missed items and frustration.',
    goals: 'Improve sustained attention, visual scanning, and concentration.',
  },
  {
    name: 'Dual-Task Challenge',
    category: 'Cognitive',
    difficulty: 'Challenging',
    duration: '10–15 min',
    description: 'Perform a cognitive task simultaneously with a motor task to challenge divided attention and processing speed.',
    instructions: [
      'Choose a motor task: walking, folding towels, or stacking blocks.',
      'Add a simultaneous cognitive task: counting backwards by 3s, naming animals, or answering questions.',
      'Begin separately, then combine both tasks.',
      'Monitor for decline in performance of either task.',
      'Increase difficulty by using more complex cognitive or motor demands.',
    ],
    materials: ['Varies by chosen tasks'],
    tip: 'Dual-tasking is highly functional — link it directly to the client\'s goals (e.g., talking while cooking).',
    goals: 'Improve divided attention, cognitive-motor integration, and processing speed.',
  },
];

// ── State ──
let activeCategory = 'all';
let activeDifficulty = 'all';
let searchQuery = '';

// ── Badge helpers ──
function categoryBadge(cat) {
  const key = cat.toLowerCase().replace(' ', '-');
  return `<span class="badge badge-${key}">${cat}</span>`;
}

function difficultyBadge(diff) {
  return `<span class="badge badge-${diff.toLowerCase()}">${diff}</span>`;
}

// ── Render ──
const grid = document.getElementById('exercise-grid');
const resultsCount = document.getElementById('results-count');

function render() {
  const q = searchQuery.toLowerCase();
  const filtered = exercises.filter((ex) => {
    const matchCat  = activeCategory === 'all' || ex.category === activeCategory;
    const matchDiff = activeDifficulty === 'all' || ex.difficulty === activeDifficulty;
    const matchQ    = ex.name.toLowerCase().includes(q) || ex.description.toLowerCase().includes(q);
    return matchCat && matchDiff && matchQ;
  });

  resultsCount.textContent = `${filtered.length} exercise${filtered.length !== 1 ? 's' : ''} found`;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results"><p>No exercises match your filters. Try adjusting your search.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map((ex, i) => {
    const idx = exercises.indexOf(ex);
    return `
      <div class="exercise-card" data-index="${idx}" tabindex="0" role="button" aria-label="View ${ex.name}">
        <div class="card-top">
          <div class="card-name">${ex.name}</div>
          ${categoryBadge(ex.category)}
        </div>
        <p class="card-desc">${ex.description}</p>
        <div class="card-meta">
          ${difficultyBadge(ex.difficulty)}
          <span class="badge" style="background:#f1f5f9;color:#64748b">${ex.duration}</span>
        </div>
        <div class="card-footer">View details →</div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.exercise-card').forEach((card) => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.index)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(parseInt(card.dataset.index));
    });
  });
}

// ── Filters ──
document.getElementById('category-filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.filter;
  render();
});

document.getElementById('difficulty-filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('#difficulty-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeDifficulty = btn.dataset.filter;
  render();
});

document.getElementById('search').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  render();
});

// ── Modal ──
const modal = document.getElementById('modal');

function openModal(index) {
  const ex = exercises[index];
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-header">
      <div class="modal-title">${ex.name}</div>
      <div class="modal-badges">
        ${categoryBadge(ex.category)}
        ${difficultyBadge(ex.difficulty)}
        <span class="badge" style="background:#f1f5f9;color:#64748b">${ex.duration}</span>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Overview</div>
      <p>${ex.description}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Instructions</div>
      <ol>${ex.instructions.map(s => `<li>${s}</li>`).join('')}</ol>
    </div>

    ${ex.materials.length ? `
    <div class="modal-section">
      <div class="modal-section-title">Materials Needed</div>
      <div class="modal-materials">
        ${ex.materials.map(m => `<span class="material-tag">${m}</span>`).join('')}
      </div>
    </div>` : ''}

    <div class="modal-section">
      <div class="modal-section-title">Goals</div>
      <p>${ex.goals}</p>
    </div>

    <div class="modal-tip">💡 <strong>Therapist Tip:</strong> ${ex.tip}</div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ── Init ──
render();
