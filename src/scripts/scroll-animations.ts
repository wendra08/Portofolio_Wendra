import { animate, inView } from 'motion';

const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const compactScreen = window.matchMedia('(max-width: 700px)');
let paused = false;
let printing = false;
const enabled = () => !preference.matches && !paused && !printing;

type RunningReveal = {
  animation: ReturnType<typeof animate>;
  opacity: string;
  transform: string;
  willChange: string;
};
const running = new Map<HTMLElement, RunningReveal>();

function finish(element: HTMLElement) {
  const reveal = running.get(element);
  if (!reveal) return;
  running.delete(element);
  reveal.animation.cancel();
  element.style.opacity = reveal.opacity;
  element.style.transform = reveal.transform;
  element.style.willChange = reveal.willChange;
}

function syncPreference() {
  document.documentElement.classList.toggle(
    'scroll-motion-disabled',
    !enabled(),
  );
  if (!enabled()) [...running.keys()].forEach(finish);
}

export function setScrollMotionPaused(value: boolean) {
  paused = value;
  syncPreference();
}

// Select visible content units, never a whole long page section. Existing
// component markers are preserved; children of an animated unit are excluded.
const selectors = [
  '[data-reveal]',
  '.hero-copy > *',
  '.hero-portrait',
  '.hero-bottom',
  '.section-kicker',
  '.section-heading > *',
  '.about-grid > h2',
  '.achievement-showcase > div:first-child > *',
  '.contact-layout > div',
  '.case-hero > *',
  '.case-screenshot',
  '.case-nav',
  '.overview > *',
  '.case-section-lead > *',
  '.challenge-grid > article',
  '.feature-grid > article',
  '.results-grid > article',
  '.document-grid > article',
  '.workflow-panel > h3',
  '.workflow-panel > p',
  '.workflow > li',
  '.document-workflows > .eyebrow',
  '.document-workflows > h3',
  '.stack-layout > div',
  '.stack-table',
  '.impact-note',
  '.screenshot-description',
  '.case-bottom',
];
const targets = [
  ...document.querySelectorAll<HTMLElement>(selectors.join(',')),
].filter((element) => {
  if (element.parentElement?.closest('[data-scroll-reveal]')) return false;
  element.dataset.scrollReveal = '';
  return true;
});
const staggerGroups =
  '.disciplines, .skill-groups, .project-grid, .achievement-gallery, .challenge-grid, .feature-grid, .results-grid, .document-grid, .workflow, .hero-copy';

inView(
  targets,
  (element, entry) => {
    if (!(element instanceof HTMLElement)) return;
    const leave = () => finish(element);
    if (!enabled() || element.contains(document.activeElement)) return leave;
    finish(element);
    const parent = element.parentElement;
    const siblings = parent?.matches(staggerGroups)
      ? [...parent.children].filter((child) =>
          child.hasAttribute('data-scroll-reveal'),
        )
      : [];
    const index = Math.max(0, siblings.indexOf(element));
    const saved = {
      opacity: element.style.opacity,
      transform: element.style.transform,
      willChange: element.style.willChange,
    };
    // Keep the translated element inside the observed area so it cannot
    // repeatedly enter/leave solely because of its own entrance animation.
    const availableRoom = Math.max(
      0,
      window.innerHeight - 20 - entry.boundingClientRect.top,
    );
    const distance = Math.min(
      compactScreen.matches ? 16 : 28,
      availableRoom / 2,
    );
    element.style.willChange = 'opacity, transform';
    const animation = animate(
      element,
      {
        opacity: [0.18, 1],
        transform: [
          `translate3d(0, ${distance}px, 0)`,
          saved.transform || 'none',
        ],
      },
      {
        duration: compactScreen.matches ? 0.55 : 0.7,
        delay: (index % 4) * 0.065,
        ease: [0.22, 1, 0.36, 1],
      },
    );
    const reveal = { ...saved, animation };
    running.set(element, reveal);
    animation.then(() => {
      if (running.get(element) === reveal) finish(element);
    });
    // Returning a leave callback keeps observing, so scrolling back replays it.
    // Offscreen content stays readable instead of being reset to opacity: 0.
    return leave;
  },
  { margin: '0px 0px -20px 0px', amount: 'some' },
);

document.addEventListener('focusin', (event) => {
  if (event.target instanceof Element) {
    const element = event.target.closest<HTMLElement>('[data-scroll-reveal]');
    if (element) finish(element);
  }
});
preference.addEventListener('change', syncPreference);
window.addEventListener('beforeprint', () => {
  printing = true;
  syncPreference();
});
window.addEventListener('afterprint', () => {
  printing = false;
  syncPreference();
});
syncPreference();

// A lightweight reading-progress line, updated at most once per animation frame.
const progress = document.createElement('div');
progress.className = 'scroll-progress';
progress.setAttribute('aria-hidden', 'true');
document.body.append(progress);
let scheduled = false;
function updateProgress() {
  const length = document.documentElement.scrollHeight - window.innerHeight;
  const fraction =
    length > 0 ? Math.min(1, Math.max(0, window.scrollY / length)) : 0;
  progress.style.transform = `scaleX(${fraction})`;
  scheduled = false;
}
function scheduleProgress() {
  if (scheduled) return;
  scheduled = true;
  window.requestAnimationFrame(updateProgress);
}
window.addEventListener('scroll', scheduleProgress, { passive: true });
window.addEventListener('resize', scheduleProgress);
new ResizeObserver(scheduleProgress).observe(document.body);
updateProgress();
