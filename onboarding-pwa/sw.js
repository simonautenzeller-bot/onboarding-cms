/* Service Worker: App-Shell + Inhalte offline verfügbar.
   Strategie: Precache beim Install, danach stale-while-revalidate – Änderungen an den
   Markdown-Dateien kommen so beim nächsten Start automatisch an.
   Bei größeren Änderungen VERSION erhöhen. */
const VERSION = 'onb-v1.0.1';
const SHELL = [
  './', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest',
  'content/modules.js', 'content/team.md', 'content/zeiten.md', 'content/briefing.md', 'content/vorlauf.md',
  'content/leitfaeden.md', 'content/aem.md', 'content/tipps.md', 'content/namen.md', 'content/qm.md',
  'content/glossar.md', 'content/links.md',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') return (await cache.match('index.html')) || Response.error();
    return Response.error();
  })());
});
