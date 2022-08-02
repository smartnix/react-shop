import React from 'react';
import '../styles/SendEmail.scss';
import logoYard from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

function SendEmail() {
  return (
      <div className="SendEmail">
          <div className="form-container">
              <img src={logoYard} alt="logo" className="logo" />
              <h1 className="title">Email has been sent!</h1>
              <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
              <div className="email-image">
                  <img src={email} alt="email" />
              </div>
              <button className="primary-button login-button">Login</button>
              <p className="resend">
                  <span>Didn't receive the email?</span>
                  <a href="/">Resend</a>
              </p>
          </div>
      </div>
  )
}

export {SendEmail}