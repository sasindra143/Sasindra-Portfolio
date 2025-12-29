import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `Hi Sasindra,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/919959732476?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section className="ai-contact" id="contact">
      <div className="ai-contact-container">

        {/* HEADING */}
        <h1 className="ai-contact-heading">CONTACT</h1>
        <p className="ai-contact-subheading">
          Let’s connect! Feel free to reach out for job opportunities,
          collaborations, or project discussions.
        </p>

        <div className="ai-contact-grid">

          {/* CONTACT FORM */}
          <form className="ai-contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send via WhatsApp
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="ai-contact-info">
            <h3>Contact Details</h3>

            <a href="mailto:sasindragandla@gmail.com">
              📧 sasindragandla@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/sasindra-madduri"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn Profile
            </a>

            <a
              href="https://github.com/sasindra143"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub Profile
            </a>

            <a
              href="https://wa.me/919959732476"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              📱 WhatsApp: +91 99597 32476
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
