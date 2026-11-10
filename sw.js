const C='mi-0.3.17';self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.add('./')));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin||e.request.mode!=='navigate')return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put('./',k));return r}).catch(()=>caches.match('./')))});