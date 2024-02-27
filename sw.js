// sw.js - Basic Service Worker setup

self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Perform install steps
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');  
    // Perform activation steps
});

self.addEventListener('fetch', event => {
    // Optional: respond to requests for fetching resources from the network
    console.log('Fetching:', event.request.url);
});
  