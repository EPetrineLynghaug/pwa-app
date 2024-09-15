# 	Lecture Notes: Progressive Web App (PWA). 


## Description
This project is a Progressive Web App (PWA) that can be installed and run on your computer. The main goal is to provide an experience that feels like a native application, with fast performance and support for offline functionality. The application works best in Chrome, but has partial support in Firefox and Safari, with some limitations.

## Key Features of Web Workers

<details>
  <summary><strong>Click to read more</strong></summary>

  - **Save as an app:** The application can be installed and stored on your device, allowing you to use it without opening a browser.
  - **Offline functionality:** The PWA downloads the necessary resources the first time you use the app and stores them locally (via cache). This allows you to use the app even when you are offline.
  - **Push notifications:** The application supports push notifications, which can be received even if the app is not open. Push notifications run in the background and keep you updated with new information.
  - **Fast performance:** Since the application is cached locally, it starts up quickly and is available almost immediately.
  - **Native-like experience:** The goal is to provide the user with an experience similar to a native mobile or desktop app, with minimal wait time and seamless use.

</details>

## Limitations
<details>
  <summary><strong>Click to read more</strong></summary>

1. **Browser Support:** The application works optimally in Chrome but has limited support in Firefox and Safari due to restrictions in these browsers. Features such as installation and push notifications are best supported in Chrome.
2. **Installation:** The “Install this app” feature generally works only in Chrome, allowing you to save the app directly to your computer. 
3. **Untested with API Calls:** The application has not yet been tested with API calls, as implementing this will require additional time.

</details>
 
## Technology

<details>
  <summary><strong>Click to read more</strong></summary>

  - **Service Workers:** Used to cache the app’s resources and enable offline functionality.
  - **App Manifest:** Defines how the app should behave when installed, including the icon and other visual elements.

</details>

  ## Project Structure

<details>
  <summary><strong>Click to read more</strong></summary>
  To set up the project, you can use the following structure:


  - **index.html:** The main file for the app’s user interface.
  -  **style.css:** Contains the styling for the app.
  - **app.js:** Handles the app’s functionality and logic.
  - sw.js: The Service Worker file that manages caching and offline functionality.
  - **manifest.json:** The application’s manifest file that describes the app’s behavior upon installation.
  - **utils:** A folder for utility functions, such as date handling and mathematical operations.


</details>



## Netlify:
https://main–pwa-app-demo1.netlify.app/




```
