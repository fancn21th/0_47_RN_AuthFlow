## How RN Authentication Flow Works

* Every securied screen has a container wrapper responsible for
  * check login status
  * navigate to either current screen or login/signup screen

* Login Screen
  * navigate to last securied screen if redirected
  * navigate to user center screen if not redirected
  * navigate back to last screen if cancelled

* Signup Screen
  * navigate to login screen if succeed
  * navigate back to last screen if cancelled

* Navigation State Design
  ~~~ javascript

  {
    app: {
      status: {
        logined: false,
      },
      navigation: {
        lastScreen: 'Home'
      }
    },

    me: {

    }
  }

  ~~~

  * logined
    * user open app -> load default state from local storage
    * user login -> login succeed
    * user logout -> logout succeed

  * lastScreen
    * user navigate to a securied screen without login ->
    redirect to login screen
