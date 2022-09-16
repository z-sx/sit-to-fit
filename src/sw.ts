// @ts-nocheck
import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()
self.addEventListener('push', (event) => {
  console.log(event)
  let notification = event.data?.text();
  self.registration.showNotification(
    notification!
  );
});
