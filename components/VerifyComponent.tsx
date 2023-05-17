import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
const VerifyComponent = () => {
    const [isVerified, setIsVerified] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
  
    const handleVerification = async () => {
      const token = await executeRecaptcha!('verification_action');
  
      if (token) {
        // Verification succeeded
        setIsVerified(true);
      } else {
        // Verification failed
        setIsVerified(false);
      }
    };
  
    const handleSendButtonClick = () => {
      if (isVerified) {
        // Code to send the message or perform the desired action
        console.log('Message sent!');
      } else {
        // Handle the case when the user has not completed the verification
        console.log('Please complete the verification.');
      }
    };
  
    return (
      <div>
        {/* Other verification input fields can be added here */}
        <button onClick={handleVerification}>Verify</button>
  
        <button onClick={handleSendButtonClick}>Send Message</button>
      </div>
    );
  };
  
  export default VerifyComponent;