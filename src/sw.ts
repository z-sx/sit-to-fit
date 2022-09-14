/// <reference lib="webworker" />
import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()
self.addEventListener('push', (event) => {
  console.log(event)
  let notification = event.data?.text();
  self.registration.showNotification(
    notification!
  );
});
