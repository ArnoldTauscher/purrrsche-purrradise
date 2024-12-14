import React, { useState } from 'react';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const isSubscribed = () => {
    if (validateEmail(email)) {
      setSubscribe(true);
      setError('');
    } else {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
  };

  const welcome = (
    <div className='header-content__welcome'>
      <p>Seien Sie Teil unserer Purrrsche-Familie - registrieren Sie sich noch heute, um die neuesten Entwicklungen aus unserem Hause hautnah mitzuerleben und gemeinsam mit uns die Zukunft der Mobilität zu feiern.</p>       
      <div className="header-content__input">
        <input
          id="email-input" 
          type="email" 
          placeholder="Ihre E-Mail-Adresse" 
          value={email}
          onChange={handleEmailChange}
        />
        <button type="button" onClick={isSubscribed}>Los geht's</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );

  const subscribed = (
    <div className='header-content__subscribed'>
      <p>Wir freuen uns sehr, dass Sie Interesse an einer Registrierung auf unserer Webseite haben. Leider ist die Registrierung derzeit noch nicht möglich, aber unser Team arbeitet unermüdlich daran, dieses Problem schnellstmöglich zu beheben. Bitte versuchen Sie es in Kürze erneut - wir werden Sie informieren, sobald die Registrierung wieder möglich ist.</p>
    </div>
  );

  return (subscribe ? subscribed : welcome);
}

