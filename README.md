
# Progressive Web App (PWA) 

## Forklaring

Dette prosjektet er en Progressive Web App (PWA) som kan installeres og kjøres på datamaskinen din. Hovedmålet er å gi en opplevelse som føles som en native applikasjon, med rask ytelse og støtte for offline-funksjonalitet. Applikasjonen fungerer best i Chrome, men har delvis støtte i Firefox og Safari, med noen begrensninger.

## Funksjoner

	•	Lagre som applikasjon: Applikasjonen kan installeres og lagres på din
           enhet, slik at du kan bruke den uten å åpne en nettleser.
	•	Offline-funksjonalitet: PWA-en laster ned nødvendige ressurser første gang
         du bruker appen, og lagrer dem lokalt (via cache). Dette gjør at du kan bruke appen selv når du er offline.
	•	Push-varsler: Applikasjonen støtter push-varsler, som kan mottas selv om 
        appen ikke er åpen. Push-varsler kjører i bakgrunnen og holder deg oppdatert med ny informasjon.
	•	Rask ytelse: Ettersom applikasjonen er cachet lokalt, starter den opp raskt
         og er tilgjengelig nesten umiddelbart.
	•	Native-lignende opplevelse: Målet er å gi brukeren en opplevelse som ligner 
        på en native mobil- eller desktop-app, med minimal ventetid og sømløs bruk.

## Begrensninger

	•	Støtte i nettlesere: Applikasjonen fungerer optimalt i Chrome, men har 
        begrenset støtte i Firefox og Safari på grunn av restriksjoner i disse nettleserne. Funksjonaliteter som installasjon og push-varsler er best støttet i Chrome.
	•	Installasjon: Funksjonen “Install this app” fungerer stort sett bare i 
        Chrome, og lar deg lagre appen direkte på datamaskinen din.
	•	Ikke testet med API-kall: Applikasjonen er foreløpig ikke testet med 
        API-kall, da dette vil ta ekstra tid å implementere.

## Teknologi

	•	Service Workers: Brukes for å cache appens ressurser og muliggjøre 
        offline-funksjonalitet.
	•	App Manifest: Definerer hvordan appen skal oppføre seg når den er 
         installert, inkludert ikon og andre visuelle elementer.

## Prosjektstruktur
For å sette opp prosjektet kan du bruke følgende struktur:

	•	index.html: Hovedfilen for appens brukergrensesnitt.
	•	style.css: Inneholder styling for appen.
	•	app.js: Håndterer appens funksjonalitet og logikk.
	•	sw.js: Service Worker-filen som styrer caching og offline-funksjonalitet.
	•	manifest.json: Applikasjonens manifestfil som beskriver appens oppførsel
        ved installasjon.
	•	utils: En mappe for hjelpefunksjoner, som for eksempel datohåndtering og 
        matematiske operasjoner.


## Netlify:
https://main--pwa-app-demo1.netlify.app/




   




```