import "../index.css";
import background from "../assest/background.jpg";

const Contact = () => {
  return (
    <section
      className="contact"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.65)
          ),
          url(${background})
        `,
        backgroundSize:"contain"
      }}
    >
      <div className="about">
        <h2>About</h2>

        <p>
          This application was created by <strong>Mysr</strong> for educational
          purposes. It was built using HTML, CSS, JavaScript, React, and
          Material UI.
        </p>
      </div>

      <div className="contact-info">
        <h2>Contact Info</h2>

        <p>For more information, feel free to contact me.</p>

        <a href="mailto:mysrtaseety@gmail.com">
          📧 mysrtaseety@gmail.com
        </a>

        <a href="tel:0123534161">
          📞 0123534161
        </a>
      </div>
    </section>
  );
};

export default Contact;