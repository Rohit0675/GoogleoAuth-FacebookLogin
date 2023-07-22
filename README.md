I have successfully integrated Google OAuth and Facebook Login in my React application. <br/>Users can now securely log in using their Google and Facebook accounts. After authentication, the application retrieves the user's information and displays it in encoded form in the browser console.<br/>
I used the google-auth2 library, which provides the GoogleOAuthProvider and GoogleLogin component. By passing the appropriate client ID obtained from the Google Developers Console, the application establishes a connection with Google's OAuth service.<br/><br/>
I used the LoginSocialFacebook component provided by the reactjs-social-login library. <br/>By passing the appropriate Facebook appId obtained from the Facebook Developers Console, the application establishes a secure connection with Facebook for login purposes.
For testing purposes, I have generated an access token using Postman and fetched the information.

![11](https://github.com/Rohit0675/GoogleoAuth-FacebookLogin/assets/122914504/2e73f40a-31f5-47a7-b7b2-1189c06d55f7)
![12](https://github.com/Rohit0675/GoogleoAuth-FacebookLogin/assets/122914504/a6f65880-546f-4612-b926-ca58bb56dece)
![13](https://github.com/Rohit0675/GoogleoAuth-FacebookLogin/assets/122914504/2f3ae802-ca2a-45e8-945e-9cfd34d18713)
![14](https://github.com/Rohit0675/GoogleoAuth-FacebookLogin/assets/122914504/8bcf995d-f89b-497b-b069-912910ead0f0)


