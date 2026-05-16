console.log ("Hello All for tuning in")

// ── Weather Widget (Open-Meteo, no API key required) ──
async function loadWeather() {
  const icon = document.getElementById('weather-icon');
  const text = document.getElementById('weather-text');
  if (!icon || !text) return;

  const weatherDescriptions = {
    0: ['☀️', 'Clear sky'],
    1: ['🌤️', 'Mainly clear'], 2: ['⛅', 'Partly cloudy'], 3: ['☁️', 'Overcast'],
    45: ['🌫️', 'Foggy'], 48: ['🌫️', 'Icy fog'],
    51: ['🌦️', 'Light drizzle'], 53: ['🌦️', 'Drizzle'], 55: ['🌧️', 'Heavy drizzle'],
    61: ['🌧️', 'Light rain'], 63: ['🌧️', 'Rain'], 65: ['🌧️', 'Heavy rain'],
    71: ['🌨️', 'Light snow'], 73: ['🌨️', 'Snow'], 75: ['❄️', 'Heavy snow'],
    80: ['🌦️', 'Rain showers'], 81: ['🌧️', 'Showers'], 82: ['⛈️', 'Heavy showers'],
    95: ['⛈️', 'Thunderstorm'], 96: ['⛈️', 'Thunderstorm'], 99: ['⛈️', 'Thunderstorm'],
  };

  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=38.9072&longitude=-77.0369' +
      '&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );
    const data = await res.json();
    const { temperature_2m: temp, weather_code: code, wind_speed_10m: wind } = data.current;
    const [emoji, desc] = weatherDescriptions[code] ?? ['🌡️', 'Unknown'];
    icon.textContent = emoji;
    text.textContent = `Washington, DC — ${Math.round(temp)}°F · ${desc} · ${Math.round(wind)} mph`;
  } catch {
    text.textContent = 'Washington, DC — weather unavailable';
  }
}

loadWeather();



// ── Dark / Light Mode Toggle ──
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');

if (saved) {
  document.documentElement.setAttribute('data-theme', saved);
  toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => observer.observe(s));
