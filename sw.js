// Network-first service worker (as in DuoVino): works offline, always picks up new versions when online.
const CACHE = 'duologo-v12';
const ASSETS = ['./', 'index.html', 'styles.css', 'course.js', 'unit-foundations.js', 'unit-literary.js', 'unit-dma.js', 'unit-part-iv.js', 'unit-ideas.js', 'unit-originality.js', 'unit-authorship.js', 'unit-ownership.js', 'unit-dealings.js', 'unit-duration.js', 'unit-rights.js', 'unit-substantial-part.js', 'unit-authorisation.js', 'unit-secondary.js', 'unit-fair-dealing.js', 'unit-exceptions.js', 'unit-moral-rights.js', 'unit-design-ai.js', 'unit-tm-basics.js', 'unit-tm-registration.js', 'unit-tm-infringement.js', 'reactions.js', 'app.js', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(a => new Request(a, { cache: 'reload' }))))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request)));
});
