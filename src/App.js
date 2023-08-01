import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";


function App() {


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f7f7f7' }}>
  <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '3rem 0', padding: '0.5rem', backgroundColor: '#ffffff' }}>
      Assignment - Integrations
    </h1>

    <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5vh', padding: '0.5rem', backgroundColor: '#ffffff' }}>Login Using Google</h2>
    <div className="social-button" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <GoogleOAuthProvider clientId="">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
          }}
          onError={() => {
            console.log('Google Login Failed');
          }}
          
          style={{ backgroundColor: '#4285f4', color: '#ffffff', border: 'none', padding: '10px 20px', fontSize: '1rem', borderRadius: '4px', cursor: 'pointer' }}
          text="Login with Google"
        />
      </GoogleOAuthProvider>
    </div>

    <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5vh', padding: '0.5rem', backgroundColor: '#ffffff' }}>Login Using Facebook</h2>
    <div className="social-button" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <LoginSocialFacebook
        appId=""
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
        
        style={{ backgroundColor: '#3b5998', color: '#ffffff', border: 'none', padding: '10px 20px', fontSize: '1rem', borderRadius: '4px', cursor: 'pointer' }}
        text="Login with Facebook"
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  </div>
</div>

  );
}

export default App;
