import "./Contact.css";
import { useState } from "react";
import { toast } from "react-toastify";

import SectionTitle from "../SectionTitle/SectionTitle";
import { sendContactMessage } from "../../services/contactService";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const { data } = await sendContactMessage(formData);

      toast.success(
        data?.message || "Message sent successfully."
      );

      setFormData({
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      const validationErrors = error.response?.data?.errors;

      if (
        Array.isArray(validationErrors) &&
        validationErrors.length > 0
      ) {
        toast.error(validationErrors[0].msg);
      } else {
        toast.error(
          error.response?.data?.message ||
            "Unable to send message. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <SectionTitle
        title="Let's Work Together"
        subtitle="Have a project, internship opportunity or just want to connect? Feel free to reach out."
      />

      <div className="contact-grid">

        {/* Contact Information */}
        <div className="contact-info">

          <div className="info-item">
            <h4>Email</h4>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sumitsalmuthe509@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              sumitsalmuthe509@gmail.com
            </a>
          </div>

          <div className="info-item">
            <h4>Phone</h4>

            <a
              href="tel:+919699167534"
              className="contact-link"
            >
              +91 9699167534
            </a>
          </div>

          <div className="info-item">
            <h4>Location</h4>

            <p>Nashik, Maharashtra, India</p>
          </div>

          <div className="info-item">
            <h4>GitHub</h4>

            <a
              href="https://github.com/sumitsalmuthe"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/sumitsalmuthe
            </a>
          </div>

          <div className="info-item">
            <h4>LinkedIn</h4>

            <a
              href="https://linkedin.com/in/sumit-salmuthe-85627927b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/sumit-salmuthe-85627927b
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;