import { showDateUtility } from "./utils/date.js";
import { showMathUtility } from "./utils/math.js";
const contentDiv = document.getElementById("content");
const dateBtn = document.getElementById("date-btn");
const mathBtn = document.getElementById("math-btn");
dateBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  showDateUtility(contentDiv);
});
mathBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  showMathUtility(contentDiv);
});
// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("ServiceWorker registration failed:", error);
      });
  });
}
// ! Hva foregår i app js?
//! vi impoterer for å hente fra modulene våre.
//!  const- hvilke ting vi henter. 
//!  eventListener- sender til utils. 
//! akkurat det samme med math bare at den henter fra den andre utils 


// !MÅ VÆRE MED I APP JS  service worker:
//! sjekekr om vi har tilgang til en serviceworker i nettleseren. 
//! heter ofte /sw.js.
//! sjekker om vi har tilgang. eventlisner. vi regisrerer en service worker.




// ! manifest.json.
//! kan definere iconer(kan være favicon filen din også), ha shortname, name,start url på dette eks er det index.html, display som sier noe om hvordan appen skal kjøre. background color og theme color.
//! Manifest.Json er det beste navnet å bruke selvom den kan hete andre ting.
