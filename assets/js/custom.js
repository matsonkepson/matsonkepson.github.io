function addGoogleAnalyticsTag(trackingId) {
    // Load the gtag.js script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize the dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    
    // Initialize gtag
    gtag('js', new Date());
    gtag('config', trackingId);
}

// Call the function with your tracking ID
addGoogleAnalyticsTag('G-81E77KGMGF');
