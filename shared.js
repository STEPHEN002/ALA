// shared.js — injects navbar and footer into every page

function getActivePage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function injectNavbar() {
  const active = getActivePage();
  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'about.html',    label: 'About Us' },
    { href: 'programs.html', label: 'Programs' },
    { href: 'team.html',     label: 'Our Team' },
    { href: 'contact.html',  label: 'Contact' },
  ];
  const linksHTML = links.map(l =>
    `<a href="${l.href}" class="${active === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const mobileLinks = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="mobile-nav" id="mobileNav">
      <button class="mobile-nav__close" onclick="closeMobileNav()">✕</button>
      ${mobileLinks}
    </div>

    <nav class="navbar">
      <div class="navbar__inner">
        <a class="navbar__brand" href="index.html">
          <img src="assets/logo.jpg" alt="ALA Logo" class="navbar__logo">
          <div class="navbar__name">Absterge Lacrimas Africa <span>Uganda Limited</span></div>
        </a>
        <div class="navbar__links">
          ${linksHTML}
        </div>
        <a href="donate.html" class="btn btn-primary navbar__cta">Donate</a>
        <button class="hamburger" onclick="openMobileNav()" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <img src="assets/logo.jpg" alt="ALA Uganda Logo">
            <p>Absterge Lacrimas Africa Uganda Limited — wiping away the tears of Africa through integrated community development programs.</p>
            <p style="font-size:13px;color:rgba(244,169,0,0.9);font-style:italic;">"Wipping Away the Tears of Africa"</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="programs.html">Programs</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Programs</h4>
            <ul>
              <li><a href="programs.html#education">Child Education</a></li>
              <li><a href="programs.html#youth">Youth Empowerment</a></li>
              <li><a href="programs.html#health">Health &amp; Wellbeing</a></li>
              <li><a href="programs.html#environment">Environment</a></li>
            </ul>
          </div>
          <div class="footer__contact">
            <h4>Contact Us</h4>
            <p><span>📍</span> P.O Box 362020, Gulu City, Uganda</p>
            <p><span>📞</span> +(256) 76 046 4746<br>+(256) 78 290 8747</p>
            <p><span>✉️</span> abstergelacrimasafrica.uganda@gmail.com</p>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© 2026 Absterge Lacrimas Africa Uganda Limited. All rights reserved.</p>
          <p>Incorporated in Uganda · Gulu City</p>
          <p>Designed & Maintained by <a href="mailto:okellostephen002@gmail.com">Okello Stephen</p>
        </div>
      </div>
    </footer>
  `);
}

function openMobileNav()  { document.getElementById('mobileNav').classList.add('open'); }
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }

document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
});
