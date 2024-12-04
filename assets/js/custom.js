function addGoogleAnalyticsTag() {
    const script = document.createElement('script');
    const trackingID = 'G-81E77KGMGF';
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingID;
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', trackingID);
    };
}

// Call the function to add the Google Analytics tag
addGoogleAnalyticsTag();
