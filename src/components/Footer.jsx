import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Globe,
} from 'lucide-react'


const quickLinks = [
  { name: 'Lead Generation & Performance Marketing', path: '/services/performance-marketing' },
  { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
  { name: 'Google Ads', path: '/services/google-ads' },
  { name: 'Search Engine Optimization', path: '/services/seo' },
  { name: 'Review and Services', path: '/services/review-and-services' },
  { name: 'Public Relations', path: '/services/public-relations' },
  { name: 'Software Development & Management', path: '/services/web-development' },
]

const socials = [
  { name: 'f', label: 'Facebook' },
  { name: 'X', label: 'Twitter' },
  { name: 'in', label: 'LinkedIn' },
  { name: '◎', label: 'Instagram' },
]

export default function Footer({ dark }) {
  const footerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 88%',
        },
      })

      gsap.to('.footer-glow', {
        scale: 1.08,
        opacity: 0.75,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const go = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden border-t ${dark
        ? 'border-white/10 bg-[#050811] text-white'
        : 'border-black/10 bg-[#fbfaf7] text-gray-950'
        }`}
    >
      <div
        className={`footer-glow pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full blur-3xl ${dark ? 'bg-[#e81c7e]/18' : 'bg-[#e81c7e]/10'
          }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full blur-3xl ${dark ? 'bg-indigo-500/14' : 'bg-indigo-300/16'
          }`}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1.25fr_1.15fr_1fr] lg:py-14">
        <div className="footer-col">
          <button onClick={() => go('/')} className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 4C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8zm0 9a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
            </div>
            <span className="text-2xl font-black">
              Open<span className="text-[#e81c7e]">Lens</span>
            </span>
          </button>

          <p className={`mt-5 max-w-sm leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Transform your brand with digital strategy, performance marketing,
            SEO, social media, PR, and software development. Let’s create your
            growth story.
          </p>

          <div className="mt-6 space-y-3">
            <a href="tel:+917479737131" className="flex items-center gap-3 text-[#6b5cff] transition hover:text-[#e81c7e]">
              <Phone className="h-5 w-5" />
              +91 747 973 7131
            </a>
            <a href="tel:+918271084686" className="flex items-center gap-3 text-[#6b5cff] transition hover:text-[#e81c7e]">
              <MessageCircle className="h-5 w-5" />
              +91 827 108 4686
            </a>
            <a href="mailto:info@openlens.com" className="flex items-center gap-3 text-[#6b5cff] transition hover:text-[#e81c7e]">
              <Mail className="h-5 w-5" />
              info@openlens.com
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="text-2xl font-black">Quick Links</h3>

          <div className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className={`group flex w-full items-start gap-3 text-left text-[15px] transition ${dark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
              >
                <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 transition group-hover:translate-x-1 group-hover:text-[#e81c7e]" />
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3 className="text-2xl font-black">Corporate Office</h3>

          <div className="mt-5 flex gap-3">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#e81c7e]" />
            <p className={`leading-8 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
              204, Jagdamba Palace, Sheikhpura Bagicha, Patna-800014
            </p>
          </div>

        </div>

        <div className="footer-col">
          <h3 className="text-2xl font-black">Newsletter</h3>

          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              placeholder="enter your email here"
              className={`h-12 w-full rounded-lg border px-4 outline-none transition focus:border-[#e81c7e] ${dark
                ? 'border-white/10 bg-white/5 text-white placeholder:text-gray-500'
                : 'border-gray-300 bg-white text-gray-950 placeholder:text-gray-500'
                }`}
            />

            <button
              type="submit"
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-black px-7 font-black text-white transition hover:bg-[#e81c7e] dark:bg-white dark:text-black dark:hover:bg-[#e81c7e] dark:hover:text-white"
            >
              SUBSCRIBE
              <Send className="h-4 w-4" />
            </button>
          </form>

          <h3 className="mt-8 text-2xl font-black">Stay Connected</h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((social) => (
              <button
                key={social.label}
                aria-label={social.label}
                className={`grid h-11 w-11 place-items-center rounded-full border text-sm font-black transition hover:-translate-y-1 hover:border-[#e81c7e] hover:bg-[#e81c7e] hover:text-white ${dark
                  ? 'border-white/20 text-gray-300'
                  : 'border-gray-300 text-gray-600'
                  }`}
              >
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`relative border-t py-5 ${dark ? 'border-white/10' : 'border-black/10'}`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm sm:px-6 md:flex-row">
          <p className={dark ? 'text-gray-500' : 'text-gray-500'}>
            © {new Date().getFullYear()} OpenLens. All rights reserved.
          </p>
          <div className="flex gap-5">
            <button onClick={() => go('/privacy-policy')} className="transition hover:text-[#e81c7e]">
              Privacy Policy
            </button>
            <button onClick={() => go('/terms-and-conditions')} className="transition hover:text-[#e81c7e]">
              Terms & Conditions
            </button>

            <button onClick={() => go('/contact')} className="transition hover:text-[#e81c7e]">
              Contact
            </button>
            <button onClick={() => go('/services')} className="transition hover:text-[#e81c7e]">
              Services
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
