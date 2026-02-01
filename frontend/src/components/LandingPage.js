import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Volume2, Waves, Zap, Award, Mail, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1615135902020-f499dc74b655?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMG5pZ2h0JTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTkzMjkzMHww&ixlib=rb-4.1.0&q=85"
          alt="Luxury car interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow"
              data-testid="hero-title"
            >
              SONIC ATELIER
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              data-testid="hero-subtitle"
            >
              Where precision meets passion. Crafting immersive sound experiences for the discerning audiophile.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 justify-center"
          >
            <a 
              href="#booking" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 font-bold tracking-wide uppercase text-sm transition-all duration-300"
              data-testid="hero-book-btn"
            >
              Book Session
            </a>
            <a 
              href="#work" 
              className="bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5 px-8 py-4 font-bold tracking-wide uppercase text-sm transition-all duration-300"
              data-testid="hero-work-btn"
            >
              Our Work
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40 text-xs tracking-widest uppercase"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
};

const StorySection = ({ icon: Icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-md"
    >
      <div className="mb-6 flex justify-center">
        <div className="p-6 border border-white/10 glow-blue">
          <Icon className="w-12 h-12 text-blue-400" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="philosophy" className="py-32 px-6 bg-[#0A0A0A]" data-testid="philosophy-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" data-testid="philosophy-title">Our Philosophy</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't install audio systems. We architect acoustic experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          <StorySection
            icon={Volume2}
            title="Sound"
            description="Every frequency matters. From the deepest bass to the crispest highs, we tune for emotional impact."
            delay={0.1}
          />
          <StorySection
            icon={Waves}
            title="Precision"
            description="RTA 7-microphone tuning ensures every seat is the sweet spot. Technical mastery meets artistry."
            delay={0.2}
          />
          <StorySection
            icon={Zap}
            title="Emotion"
            description="Music should move you. We tune for the feeling, the chills, the moment when sound becomes experience."
            delay={0.3}
          />
          <StorySection
            icon={Award}
            title="Craft"
            description="Each car is a unique acoustic project. Custom solutions for discerning audiophiles who demand excellence."
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[500px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1653579656806-b290ca2efd83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxoaWdoJTIwZW5kJTIwYXVkaW8lMjBzcGVha2VyJTIwY2xvc2UlMjB1cCUyMG1hY3JvJTIwZGV0YWlsfGVufDB8fHx8MTc2OTkzMjkzNnww&ixlib=rb-4.1.0&q=85"
              alt="High-end audio equipment"
              className="w-full h-full object-cover image-scale"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Advanced Tuning Concepts</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold mb-2">RTA Calibration</h4>
                <p className="text-gray-400">Real-time acoustic analysis with 7-microphone array for perfect frequency response across all seating positions.</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold mb-2">VCP Technology</h4>
                <p className="text-gray-400">Virtual Center Point creates a coherent soundstage, eliminating the typical left-right bias in car audio.</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold mb-2">Imaging & Staging</h4>
                <p className="text-gray-400">Precise time alignment and phase correction for lifelike instrument placement and spatial depth.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Mercedes-AMG GT",
      category: "Complete System Build",
      image: "https://images.unsplash.com/photo-1768024175212-98eb7cd5ca46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMG5pZ2h0JTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTkzMjkzMHww&ixlib=rb-4.1.0&q=85",
      description: "18-speaker custom array with DSP tuning"
    },
    {
      title: "Porsche 911",
      category: "DSP Calibration",
      image: "https://images.unsplash.com/photo-1610698517225-78fcfe40aceb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMG5pZ2h0JTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTkzMjkzMHww&ixlib=rb-4.1.0&q=85",
      description: "RTA 7-mic tuning for concert hall acoustics"
    },
    {
      title: "Audi RS6",
      category: "System Upgrade",
      image: "https://images.unsplash.com/photo-1597183739841-5ca26ab0a604?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxoaWdoJTIwZW5kJTIwYXVkaW8lMjBzcGVha2VyJTIwY2xvc2UlMjB1cCUyMG1hY3JvJTIwZGV0YWlsfGVufDB8fHx8MTc2OTkzMjkzNnww&ixlib=rb-4.1.0&q=85",
      description: "Premium component speakers & subwoofer integration"
    },
    {
      title: "BMW M5",
      category: "Complete System Build",
      image: "https://images.unsplash.com/photo-1615135902020-f499dc74b655?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMG5pZ2h0JTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTkzMjkzMHww&ixlib=rb-4.1.0&q=85",
      description: "Multi-amplifier setup with VCP imaging"
    },
    {
      title: "Tesla Model S",
      category: "Sound Design",
      image: "https://images.unsplash.com/photo-1655931546508-9f948f52e079?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHw0fHxzb3VuZCUyMGVuZ2luZWVyJTIwaGFuZHMlMjB0dW5pbmclMjBhdWRpbyUyMG1peGVyJTIwZGFyayUyMHN0dWRpb3xlbnwwfHx8fDE3Njk5MzI5NDB8MA&ixlib=rb-4.1.0&q=85",
      description: "Acoustic consultation & tuning optimization"
    },
    {
      title: "Range Rover",
      category: "Premium Install",
      image: "https://images.unsplash.com/photo-1653579656806-b290ca2efd83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxoaWdoJTIwZW5kJTIwYXVkaW8lMjBzcGVha2VyJTIwY2xvc2UlMjB1cCUyMG1hY3JvJTIwZGV0YWlsfGVufDB8fHx8MTc2OTkzMjkzNnww&ixlib=rb-4.1.0&q=85",
      description: "Luxury sound system with custom fabrication"
    }
  ];

  return (
    <section id="work" className="py-32 px-6" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" data-testid="gallery-title">Our Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each project is a testament to obsessive attention to detail and uncompromising sound quality.
          </p>
        </motion.div>

        <div className="tetris-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`tetris-item-${(index % 6) + 1} group relative h-[400px] overflow-hidden border border-white/10 card-hover`}
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover image-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-blue-400 text-sm uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Custom Audio Builds",
      description: "Complete system design and installation from the ground up. Premium components, custom fabrication, and meticulous attention to detail.",
      features: ["Component Selection", "Custom Fabrication", "Professional Installation"]
    },
    {
      title: "DSP Tuning & Calibration",
      description: "RTA 7-microphone tuning for perfect frequency response. Time alignment, phase correction, and VCP imaging.",
      features: ["RTA Analysis", "Time Alignment", "VCP Technology"]
    },
    {
      title: "System Upgrades",
      description: "Transform your existing setup with strategic component upgrades and professional tuning optimization.",
      features: ["Speaker Upgrades", "Amplifier Integration", "Subwoofer Addition"]
    },
    {
      title: "Consultation & Sound Design",
      description: "Expert guidance on system planning, acoustic analysis, and custom sound signature development.",
      features: ["System Planning", "Acoustic Analysis", "Sound Signature Design"]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0A0A0A]" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" data-testid="services-title">Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive audio solutions tailored to your vehicle and listening preferences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A0A0A] border border-white/10 p-8 card-hover"
              data-testid={`service-card-${index}`}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <div className="w-1 h-1 bg-blue-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-32 px-6" data-testid="team-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" data-testid="team-title">The Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We're not technicians. We're music lovers who happen to be obsessed with technical perfection.
          </p>
          <div className="prose prose-invert max-w-none text-gray-400 space-y-6 text-left">
            <p className="text-lg leading-relaxed">
              Every member of our team shares the same obsession: creating sound experiences that move people. 
              We're audiophiles first, installers second. We spend our weekends at concerts, our evenings 
              lost in music, and our workdays crafting the systems that bring those emotions into your vehicle.
            </p>
            <p className="text-lg leading-relaxed">
              Technical mastery is our foundation. RTA analysis, DSP programming, acoustic modeling—these are 
              our tools. But our true expertise lies in understanding how music should feel. The weight of a 
              kick drum. The shimmer of a cymbal. The presence of a vocalist. These are the details we obsess over.
            </p>
            <p className="text-lg leading-relaxed">
              When you work with Sonic Atelier, you're not hiring installers. You're partnering with people 
              who care about your listening experience as much as you do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="py-32 px-6 bg-[#0A0A0A]" data-testid="booking-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center" data-testid="booking-title">Book a Session</h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Let's discuss your vision for the perfect audio experience.
          </p>

          <form className="space-y-6" data-testid="booking-form">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#121212] border border-white/10 focus:border-blue-400 h-14 px-4 text-white placeholder:text-white/20 transition-all outline-none"
                  placeholder="Your name"
                  data-testid="booking-name-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#121212] border border-white/10 focus:border-blue-400 h-14 px-4 text-white placeholder:text-white/20 transition-all outline-none"
                  placeholder="your@email.com"
                  data-testid="booking-email-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#121212] border border-white/10 focus:border-blue-400 h-14 px-4 text-white placeholder:text-white/20 transition-all outline-none"
                  placeholder="(555) 123-4567"
                  data-testid="booking-phone-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="vehicle">Vehicle</label>
                <input
                  type="text"
                  id="vehicle"
                  className="w-full bg-[#121212] border border-white/10 focus:border-blue-400 h-14 px-4 text-white placeholder:text-white/20 transition-all outline-none"
                  placeholder="Year, Make, Model"
                  data-testid="booking-vehicle-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="service">Service Interest</label>
              <select
                id="service"
                className="w-full bg-[#121212] border border-white/10 focus:border-blue-400 h-14 px-4 text-white transition-all outline-none"
                data-testid="booking-service-select"
              >
                <option value="">Select a service</option>
                <option value="custom-build">Custom Audio Build</option>
                <option value="dsp-tuning">DSP Tuning & Calibration</option>
                <option value="system-upgrade">System Upgrade</option>
                <option value="consultation">Consultation & Sound Design</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#121212] border border-white/10 focus:border-blue-400 px-4 py-4 text-white placeholder:text-white/20 transition-all outline-none resize-none"
                placeholder="Tell us about your audio goals..."
                data-testid="booking-message-textarea"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 px-8 py-4 font-bold tracking-wide uppercase text-sm transition-all duration-300"
              data-testid="booking-submit-btn"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" data-testid="contact-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Ready to transform your vehicle into a concert hall? Let's talk.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border border-white/10 p-8">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-400">123 Audio Drive<br/>Los Angeles, CA 90210</p>
            </div>
            <div className="border border-white/10 p-8">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-400">(555) 123-4567</p>
            </div>
            <div className="border border-white/10 p-8">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-400">hello@sonicatelier.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight" data-testid="nav-logo">SONIC ATELIER</a>
        <div className="hidden md:flex gap-8">
          <a href="#philosophy" className="text-sm tracking-wider hover:text-blue-400 transition-colors" data-testid="nav-philosophy">PHILOSOPHY</a>
          <a href="#work" className="text-sm tracking-wider hover:text-blue-400 transition-colors" data-testid="nav-work">WORK</a>
          <a href="#services" className="text-sm tracking-wider hover:text-blue-400 transition-colors" data-testid="nav-services">SERVICES</a>
          <a href="#team" className="text-sm tracking-wider hover:text-blue-400 transition-colors" data-testid="nav-team">TEAM</a>
          <a href="#booking" className="text-sm tracking-wider hover:text-blue-400 transition-colors" data-testid="nav-booking">BOOK</a>
          <a href="#contact" className="text-sm tracking-wider hover:text-blue-400 transition-colors" data-testid="nav-contact">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 px-6" data-testid="main-footer">
      <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
        <p>© 2025 Sonic Atelier. All rights reserved.</p>
        <p className="mt-2">Crafting immersive sound experiences for discerning audiophiles.</p>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <GallerySection />
      <ServicesSection />
      <TeamSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
