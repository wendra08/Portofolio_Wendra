import { setScrollMotionPaused } from './scroll-animations';

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-navigation');
function closeMenu() {
  if (!menuButton || !mobileNav) return;
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton?.addEventListener('click', () => {
  if (!mobileNav) return;
  const willOpen = mobileNav.hidden;
  mobileNav.hidden = !willOpen;
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute(
    'aria-label',
    willOpen ? 'Close navigation' : 'Open navigation',
  );
});
mobileNav
  ?.querySelectorAll('a')
  .forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileNav && !mobileNav.hidden) {
    closeMenu();
    menuButton?.focus();
  }
});
document.addEventListener('click', (event) => {
  if (
    event.target instanceof Node &&
    !document.querySelector('.site-header')?.contains(event.target)
  )
    closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton =
  document.querySelector<HTMLButtonElement>('.motion-toggle');
let userPaused = false;
function updateMotion() {
  const paused = motionPreference.matches || userPaused;
  setScrollMotionPaused(userPaused);
  document.documentElement.classList.toggle('motion-paused', paused);
  if (motionButton) {
    motionButton.disabled = motionPreference.matches;
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute(
      'aria-label',
      motionPreference.matches
        ? 'Reduced motion enabled'
        : paused
          ? 'Resume animations'
          : 'Pause animations',
    );
    const label = motionButton.querySelector('span');
    if (label)
      label.textContent = motionPreference.matches
        ? 'Reduced motion'
        : paused
          ? 'Resume motion'
          : 'Pause motion';
    const path = motionButton.querySelector('path');
    path?.setAttribute('d', paused ? 'm8 4 12 8-12 8V4Z' : 'M8 5v14M16 5v14');
  }
}
motionButton?.addEventListener('click', () => {
  userPaused = !userPaused;
  updateMotion();
});
motionPreference.addEventListener('change', updateMotion);
updateMotion();

const navLinks = document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a');
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }
  },
  { rootMargin: '-15% 0px -65% 0px' },
);
document
  .querySelectorAll('main section[id]')
  .forEach((section) => observer.observe(section));
