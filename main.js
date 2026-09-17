import './style.css'

// ============================================================
//  DARK MODE TOGGLE
// ============================================================
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;

// Persist preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.classList.add('dark');
}

darkToggle?.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// ============================================================
//  SCROLL ANIMATIONS (IntersectionObserver)
// ============================================================
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger effect based on order in parent
      const delay = (i % 4) * 80;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeElements.forEach(el => observer.observe(el));

// ============================================================
//  CONTACT FORM WITH VALIDATION
// ============================================================
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitLabel = document.getElementById('submit-label');
const submitSpinner = document.getElementById('submit-spinner');
const formSuccess = document.getElementById('form-success');

function showError(id, message) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = message;
    el.classList.remove('hidden');
  }
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Clear previous errors
  hideError('name-error');
  hideError('email-error');
  hideError('message-error');
  formSuccess?.classList.add('hidden');

  if (!name) { showError('name-error', 'Please enter your name.'); valid = false; }
  if (!email || !validateEmail(email)) { showError('email-error', 'Please enter a valid email address.'); valid = false; }
  if (!message) { showError('message-error', 'Please enter a message.'); valid = false; }

  if (!valid) return;

  // Simulate submission
  submitBtn.disabled = true;
  submitLabel.classList.add('hidden');
  submitSpinner.classList.remove('hidden');

  await new Promise(resolve => setTimeout(resolve, 1500));

  submitBtn.disabled = false;
  submitLabel.classList.remove('hidden');
  submitSpinner.classList.add('hidden');
  formSuccess?.classList.remove('hidden');
  contactForm.reset();
});

// Real-time input clearing of errors
['name', 'email', 'message'].forEach(field => {
  document.getElementById(field)?.addEventListener('input', () => hideError(`${field}-error`));
});
