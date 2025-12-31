import { Mail, Linkedin, Github, MapPin, Send, Instagram, X, Phone } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anoophanchate12@gmail.com',
    link: 'mailto:anoophanchate12@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9663411731',
    link: 'tel:+919663411731',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/anoop-hanchate',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: 'Follow on Instagram',
    link: 'https://www.instagram.com/anoop.hanchate',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View Code Repositories',
    link: 'https://github.com/AnoopHanchate',
    color: 'from-gray-700 to-gray-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karnataka, India',
    link: null,
    color: 'from-red-500 to-orange-500',
  },
];

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        'Anoop1212', // Your Service ID
        'template_8puso24', // Replace with your Template ID from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'anoophanchate12@gmail.com',
        },
        'rSYrgioFqRXkBqMQZ' // Replace with your Public Key from EmailJS dashboard
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-[#1BB896] overflow-hidden">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 left-1/4 w-24 h-24 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-18 h-18 border-2 border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-white/8 rounded-full"></div>
        <div className="absolute bottom-1/3 left-10 w-16 h-16 border-2 border-white/12 rounded-full"></div>
        
        {/* Squares */}
        <div className="absolute top-1/2 left-10 w-18 h-18 border-2 border-white/10 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rotate-12"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 border-2 border-white/12 rotate-[35deg]"></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-white/8 rotate-[48deg]"></div>
        
        {/* Rectangles */}
        <div className="absolute top-1/4 right-1/4 w-24 h-14 border-2 border-white/10 rotate-[20deg]"></div>
        <div className="absolute bottom-1/2 left-1/4 w-20 h-12 bg-white/8 rotate-[-15deg]"></div>
        <div className="absolute top-2/3 right-1/3 w-18 h-10 border-2 border-white/12 rotate-[28deg]"></div>
        
        {/* Triangles */}
        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[48px] border-b-white/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-white/12"></div>
        <div className="absolute top-1/3 right-10 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[41px] border-b-white/8"></div>
        <div className="absolute bottom-40 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-white/15"></div>
        <div className="absolute top-20 left-1/2 w-0 h-0 border-l-[26px] border-l-transparent border-r-[26px] border-r-transparent border-b-[45px] border-b-white/10"></div>
        
        {/* Pentagons */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 border-2 border-white/12" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-2/3 right-1/4 w-14 h-14 bg-white/8" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars */}
        <div className="absolute bottom-20 right-10 w-7 h-7 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/4 left-10 w-8 h-8 bg-white/12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute bottom-1/2 right-1/4 w-6 h-6 bg-white/8" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-40 right-1/3 w-9 h-9 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12 md:px-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#FF9966] mx-auto rounded-full"></div>
          <p className="text-white/90 mt-6 text-lg">
            Let's collaborate on your next VLSI project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/70 text-sm mb-1">{method.label}</p>
                      <p className="text-white">{method.value}</p>
                    </div>
                  </div>
                </div>
              );

              if (method.link) {
                return (
                  <a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={method.label}>{content}</div>;
            })}
          </div>

          {/* Right - CTA */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-white text-3xl">Ready to Build Something Amazing?</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                I'm actively seeking opportunities in RTL design and verification. 
                Let's discuss how I can contribute to your team.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full text-center px-6 py-3 bg-[#FF9966] text-white rounded-full hover:bg-[#ff8547] transition-all shadow-lg hover:shadow-xl hover:shadow-[#FF9966]/30 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Me a Message
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-1">Response Time</p>
                  <p className="text-white text-lg font-semibold">Within 24h</p>
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-1">Availability</p>
                  <p className="text-white text-lg font-semibold">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80">
            © 2025 Anoop Amaresh Hanchate. Building the future of digital systems.
          </p>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl text-[#1f2937] mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#6b7280] mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB896] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6b7280] mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB896] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6b7280] mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB896] focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6b7280] mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB896] focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#1BB896] text-white rounded-lg hover:bg-[#159f7e] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-sm text-green-500 mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-500 mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}