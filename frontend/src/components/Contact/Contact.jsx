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
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {

    e.preventDefault();

    try{

        setLoading(true);

        const { data } = await sendContactMessage(formData);

        toast.success(data.message);

        setFormData({

            name:"",
            company:"",
            email:"",
            subject:"",
            message:""

        });

    }catch(error){

        toast.error(

            error.response?.data?.message ||

            "Unable to send message."

        );

    }finally{

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

        <div className="contact-info">

          <div className="info-item">
            <h4>Email</h4>
            <p>sumitsalmuthe509@gmail.com</p>
          </div>

          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 9699167534</p>
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
              rel="noreferrer"
            >
              github.com/sumitsalmuthe
            </a>
          </div>

          <div className="info-item">
            <h4>LinkedIn</h4>
            <a
              href="https://linkedin.com/in/sumit-salmuthe-85627927b"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sumit-salmuthe-85627927b
            </a>
          </div>

        </div>

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
    required
/>

<input
    type="text"
    name="company"
    placeholder="Company (Optional)"
    value={formData.company}
    onChange={handleChange}
/>

          <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={formData.email}
    onChange={handleChange}
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
>
    {loading ? "Sending..." : "Send Message"}
</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;