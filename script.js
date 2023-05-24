function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var email = profile.getEmail();
    
    // Redirect to next page or display email
    // Example: Redirect to next.html and pass email as query parameter
    window.location.href = 'next.html?email=' + encodeURIComponent(email);
  }
  