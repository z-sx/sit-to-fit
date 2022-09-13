self.skipWaiting()
self.addEventListener('push', (event) => {
  console.log(event)
  let notification = event.data.text();
  self.registration.showNotification(
    notification
  );
});
