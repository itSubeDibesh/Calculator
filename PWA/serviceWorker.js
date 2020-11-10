const calculatorPWA = "calculator-v1.0"
const assets = [
    "./",
    "./index.html",

    "./Assets/Images/favicon-16.png",
    "./Assets/Images/favicon-32.png",
    "./Assets/Images/favicon-64.png",
    "./Assets/Images/favicon-512.png",
    "./Assets/Images/favicon.png",
    "./Assets/Images/favicon.ico",

    "./Assets/Css/app.min.css",
    "./Assets/Css/bootstrap.min.css",
    "./Assets/Css/bootstrap.min.css.map",

    "./Scripts/App/App.min.js",
    "./Scripts/App/appDetails.min.js",
]

// Triggers the install event of application and caches the assets file
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(calculatorPWA).then(cache => {
            cache.addAll(assets)
        })
    );
})

// Fetch Assets or Update Assets
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})