import { useState, useEffect, useRef } from 'react'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    // Loading animation
    setTimeout(() => setIsLoaded(true), 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Particle system
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + 'vw'
      particle.style.width = Math.random() * 4 + 2 + 'px'
      particle.style.height = particle.style.width
      particle.style.animationDelay = Math.random() * 4 + 's'
      document.body.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 4000)
    }

    const particleInterval = setInterval(createParticle, 300)
    return () => clearInterval(particleInterval)
  }, [])

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.text-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      {/* Animated cursor follower */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(0,102,255,0.8) 0%, rgba(0,204,255,0.4) 100%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease'
        }}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
      >
        {/* Parallax background layers */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 50% 50%, rgba(0,102,255,0.1) 0%, transparent 50%)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
              <span className="gradient-text glow-text">EyeSky</span>
              <br />
              <span className="text-4xl md:text-6xl font-light text-gray-300">
                Autonomous Aircraft Inspection
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Revolutionary AI-powered drone technology that transforms aviation safety through 
              <span className="gradient-text font-semibold"> precision visual assessment</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="morph-btn glass px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Discover EyeSky</span>
              </button>
              <button className="morph-btn border-2 border-white/30 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="float absolute top-1/4 left-1/4 w-20 h-20 glass rounded-full opacity-30" />
          <div className="float absolute top-1/3 right-1/4 w-16 h-16 glass rounded-lg opacity-20" style={{animationDelay: '1s'}} />
          <div className="float absolute bottom-1/4 left-1/3 w-24 h-24 glass rounded-full opacity-25" style={{animationDelay: '2s'}} />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="pulse">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
          <p className="text-sm mt-2 text-white/50">Scroll to explore</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-dark to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-reveal text-6xl md:text-7xl font-bold mb-8 gradient-text">
              Our Mission
            </h2>
            <p className="text-reveal text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Since 2019, we've been revolutionizing aviation safety through cutting-edge autonomous drone technology. 
              Our mission is to enhance operational efficiency while maintaining the highest standards of precision and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: '2019', title: 'Idea Born', desc: 'Revolutionary concept emerges' },
              { year: '2020–2022', title: 'Deep Research', desc: 'Extensive R&D and validation' },
              { year: '2023', title: 'Prototype Testing', desc: 'Controlled environment trials' },
              { year: '2024–2025', title: 'Market Launch', desc: 'Strategic partnerships & deployment' }
            ].map((item, index) => (
              <div key={index} className="text-reveal hover-3d">
                <div className="glass p-8 rounded-3xl text-center h-full hover:bg-white/5 transition-all duration-500">
                  <h3 className="text-4xl font-bold gradient-text mb-4">{item.year}</h3>
                  <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-reveal text-6xl md:text-7xl font-bold mb-8 gradient-text">
              Cutting-Edge Technology
            </h2>
            <p className="text-reveal text-xl text-gray-300 max-w-4xl mx-auto">
              Our proprietary AI-driven system combines advanced computer vision, autonomous navigation, 
              and real-time analytics to deliver unparalleled inspection accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Autonomous Navigation',
                desc: 'Advanced flight control systems with geo-fencing capabilities ensure precise, safe operations around aircraft.',
                icon: '🚁'
              },
              {
                title: 'AI Computer Vision',
                desc: 'Deep learning algorithms detect micro-damages, corrosion, and structural anomalies with 99.7% accuracy.',
                icon: '👁️'
              },
              {
                title: 'Real-time Analytics',
                desc: 'Instant data processing and cloud integration provide immediate insights and actionable reports.',
                icon: '📊'
              },
              {
                title: 'Automated Reporting',
                desc: 'Comprehensive technical documentation generated automatically, compliant with aviation regulations.',
                icon: '📋'
              }
            ].map((item, index) => (
              <div key={index} className="text-reveal hover-3d">
                <div className="glass p-10 rounded-3xl hover:bg-white/5 transition-all duration-500">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-3xl font-bold mb-6 gradient-text">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.7%', label: 'Detection Accuracy' },
              { number: '75%', label: 'Time Reduction' },
              { number: '24/7', label: 'Availability' },
              { number: '100+', label: 'Aircraft Inspected' }
            ].map((stat, index) => (
              <div key={index} className="text-reveal">
                <div className="text-6xl font-black mb-2 text-white">{stat.number}</div>
                <div className="text-xl font-medium text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-dark to-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-reveal text-6xl md:text-7xl font-bold mb-8 gradient-text">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-reveal text-xl text-gray-300 max-w-3xl mx-auto">
              Join the future of aviation safety. Partner with EyeSky to experience the next generation of aircraft inspection technology.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="text-reveal">
            <div className="glass p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-lg font-medium mb-3 text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell us about your inspection needs..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full morph-btn bg-gradient-to-r from-primary to-secondary py-6 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Send Message</span>
              </button>
            </div>
          </form>
          
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Or reach us directly at{' '}
              <a href="mailto:hello@eyesky.ai" className="gradient-text font-semibold hover:underline">
                hello@eyesky.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-4">EyeSky</div>
          <p className="text-gray-400 text-lg">
            The future of autonomous aircraft inspection is here.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App