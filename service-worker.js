self.addEventListener("install", (event) => {
    console.log("Service Worker установлен");
  });
  
  self.addEventListener("fetch", (event) => {
    console.log("Intercepting fetch request for:", event.request.url);
  });
  