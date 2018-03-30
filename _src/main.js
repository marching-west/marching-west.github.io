(function (window) {
  'use strict'

  const AWS = require('aws-sdk')

  window.onSignIn = onSignIn

  function onSignIn (googleUser) {
    // const profile = googleUser.getBasicProfile()
    if (googleUser.isSignedIn()) {
      const idToken = googleUser.getAuthResponse().id_token
      AWS.config.region = 'eu-west-1'
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-west-1:dd4941dc-c3d8-47d7-a735-eaebae9327fe',
        Logins: {
          'accounts.google.com': idToken
        }
      })

      // Obtain AWS credentials
      AWS.config.credentials.get(function () {
        console.log('logged in')
      })
    }
  }
})(window)
