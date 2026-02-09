import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-intro">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-description">
              Tell us what you are building and we will put together a plan that fits your goals and timeline.
            </p>
          </div>

          <div className="form-container contact-card">
            <p className="title">Get in touch</p>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-item-label">Phone</span>
                <a className="contact-item-value" href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
              </div>
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <a className="contact-item-link" href="mailto:hello@algoka.ai">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m3.5 7.5 8.5 6 8.5-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="contact-item-text">hello@algoka.ai</span>
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Instagram</span>
              <a className="contact-item-link" href="https://instagram.com/algoka" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </span>
                <span className="contact-item-text">@algoka</span>
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Twitter</span>
              <a className="contact-item-link" href="https://x.com/algoka" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M4.5 4.5h4.2l3.1 4.2 3.8-4.2h3.9l-5.6 6.3 6.1 8.7h-4.2l-3.9-5.3-4.8 5.3H4.1l6.5-7.1-6.1-7.9Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="contact-item-text">@algoka</span>
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">WhatsApp</span>
              <a className="contact-item-link" href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 4.5a7 7 0 0 0-6.1 10.5L5 19.5l4.7-1.6A7 7 0 1 0 12 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9.4 9.2c.2-.2.5-.2.7 0l1.1 1.1c.2.2.2.5 0 .7l-.5.5c.5.9 1.2 1.6 2.1 2.1l.5-.5c.2-.2.5-.2.7 0l1.1 1.1c.2.2.2.5 0 .7l-.5.5c-.4.4-1 .6-1.6.4-1.1-.3-2.1-.9-3-1.8s-1.5-1.9-1.8-3c-.2-.6 0-1.2.4-1.6l.5-.5Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="contact-item-text">Chat on WhatsApp</span>
              </a>
            </div>
              <div className="contact-item">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
