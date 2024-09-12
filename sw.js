const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/manifest.json",
  "/icon.png",
  "/utils/date.js",
  "/utils/math.js",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

//! Hva foregår i sw.js?
//! gir cachen et navn, for den kan brukes flere steder.
//! sier hvilke filer du vil cache. for å kjøre appen må du ha alle filen. 
//! når vi kjører denne for første gang fyres det et event som heter install- vi bruker en waituntil, vent til vi åpner cachen. vi forteller cachen at dette er de filen du skal holde et øye med. 
//! Handeling:  når vi kjører denne siden neste gang, ønsker vi å vite om vi skal hente filene på nytt. bruker en fetch for å se om vi kan hente noe lokalt og matcher catchen. om ikke henter vi den på en annen måte. 


//! ikke alle elementer, kjører på alle eventer. 


//! Filen som gjør grovarbeidet.
//! Dette er en service worker. en type av web worker. en js fil som sier noe om hva som er lov å gjøre, det som er spesielt er at den ligger seg i bakrunden å kjører hele tiden. være litt obs for det laster ned og kjører ting i bakrunden(sikkerhet). kjører none blocking.
//! background sync, hente ting fra bakrunden. 



// ! service og web worker forskjeller.
//! service worker, chache og offline support, background task. kan kjøre selvom websiden er lukket. kan håndere mye mer. eventdriven.
//! web serveren mulitihreading. kan ikke kjøre i bakrunden om websiden er lukket.  er drevet av en messagin. kjører også stort sett på en helt enkel side. lever og dør med den siden som skapte den.


