/* eslint-disable import/prefer-default-export */
import sgMail from '@sendgrid/mail';
import config from '../config';

sgMail.setApiKey(config.sendGridApiKey);

export const sendMail = (req, res) => {
  const contactForm = req.body;

  const msg = {
    to: 'hello@hallux.io',
    from: contactForm.email,
    subject: 'HALLUX.IO: CONTACT',
    text: contactForm.message,
    html: `<strong>NEW REQUEST</strong><p>${contactForm.message}</p>`,
  };

  if (config.isProduction) {
    sgMail.send(msg).then(() => {
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(200);
  }
};
