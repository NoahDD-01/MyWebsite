import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { createContact } from '../services/ContactService'; // API service ကို import လုပ်ပါ
import { toast } from 'react-toastify';

const ContactUs = () => {
  // ၁။ Form State သတ်မှတ်ခြင်း
  const [formData, setFormData] = useState({
    name: '',         // User ရိုက်ထည့်မယ့် နာမည်
    phone_number: '',  // Django က 'phone_number' လို့ပေးထားရင် ဒီမှာလည်း အဲလိုပေးပါ
    email: '',        // User ရိုက်ထည့်မယ့် email
    message: ''       // User ရိုက်ထည့်မယ့် message
  });

  const [loading, setLoading] = useState(false);

  // ၂။ Input ပြောင်းလဲမှုကို Handle လုပ်ခြင်း
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ၃။ Form Submit လုပ်ခြင်း
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createContact(formData);

      // Alert အစား Toast သုံးခြင်း
      toast.success("Message Sent Successfully!", {
        position: "top-right",
        style: { borderRadius: '15px', background: '#1e293b', color: '#fff' }
      });

      setFormData({ name: '', phone_number: '', email: '', message: '' });
    } catch (error) {
      // Error အတွက်လည်း toast ပြလို့ရတယ်
      toast.error("Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-white ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase tracking-[0.2em] mb-2">Get In Touch</h2>
        <p className="text-gray-500 text-sm">Have a project in mind? Let's build it together.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="hidden md:block space-y-6 border-r border-white/5 pr-10">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            I'm currently available for freelance work or full-time positions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300 group">
              <div className="w-auto h-auto rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="text-sm">phyozawhein2000@email.com</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com/NoahDD-01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/phyozaw-hein-768164385/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right: Modern Form Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Phone Number</label>
            <input
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              type="tel"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-sm"
              placeholder="09 xxx xxx xxx"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-sm"
              placeholder="email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-sm resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group`}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xs" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;