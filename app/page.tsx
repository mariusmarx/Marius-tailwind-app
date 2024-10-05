import React from 'react';
import Header from '../components/header'; // Import the Header component

const Home: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header />  {/* Use the Header component */}

      {/* Hero Section */}
      <section id="hero" className="h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Alaris
          </h1>
          <p className="text-xl font-light mb-8">
            Cutting-edge cybersecurity solutions to safeguard your digital assets.
          </p>
          <a href="#features" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold">
            Learn More
          </a>
        </div>
      </section>

      {/* Section 1: Features */}
      <section id="features" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Why Choose Alaris?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img src="/images/cybersecurity1.webp" alt="Advanced Threat Detection" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">Advanced Threat Detection</h3>
              <p>
                Alaris leverages AI and machine learning to identify and neutralize security threats in real-time.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img src="/images/cybersecurity2.webp" alt="Data Encryption" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">Data Encryption</h3>
              <p>
                State-of-the-art encryption ensures that your sensitive data remains secure and out of reach.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img src="/images/cybersecurity3.webp" alt="24/7 Monitoring" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">24/7 Monitoring</h3>
              <p>
                Our team provides around-the-clock monitoring to ensure your systems are always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/cybersecurity4.webp" alt="Client Testimonial 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Jane Doe, Tech Inc.</h3>
              <p className="italic">"Alaris transformed the way we handle cybersecurity. The advanced threat detection has been a game-changer for our business!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/cybersecurity3.webp" alt="Client Testimonial 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">John Smith, SecureTech</h3>
              <p className="italic">"Their 24/7 monitoring and support gave us peace of mind knowing our data is safe at all times."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-5xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-lg mb-8">
            Don't leave your digital security to chance. Get Alaris and experience the future of cybersecurity.
          </p>
          <a href="#contact" className="bg-black hover:bg-gray-900 px-6 py-3 rounded-full text-lg font-semibold">
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 bg-gray-900 text-gray-400">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Alaris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;