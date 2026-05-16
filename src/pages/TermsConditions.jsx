import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  BadgeCheck,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  Globe2,
  Lock,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'

const sections = [
  {
    title: 'Acceptance of Terms',
    icon: BadgeCheck,
    content: [
      'By accessing and using the OpenLens website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use this website.',
      'These terms apply to all visitors, users, clients, and others who access or use our website and services.',
    ],
  },
  {
    title: 'Services',
    icon: BriefcaseBusiness,
    content: [
      'OpenLens provides digital marketing, SEO, Google Ads, social media marketing, performance marketing, public relations, review management, website development, app development, CRM/ERP, UI/UX, API development, and support services.',
      'The scope, timeline, deliverables, pricing, and responsibilities for any service will be defined separately through proposals, quotations, contracts, invoices, or written communication.',
    ],
  },
  {
    title: 'Use of Website',
    icon: Globe2,
    content: [
      'You agree to use this website only for lawful purposes. You must not use the website in any way that may damage, disable, overburden, or impair the website or interfere with any other user’s access.',
      'You must not attempt to gain unauthorized access to any part of the website, server, systems, or data connected with OpenLens.',
    ],
  },
  {
    title: 'Client Information',
    icon: UserCheck,
    content: [
      'When you submit a contact form, inquiry, or project request, you agree to provide accurate and complete information.',
      'OpenLens may use the provided information to contact you, understand your requirements, prepare proposals, provide services, and communicate project-related updates.',
    ],
  },
  {
    title: 'Payments and Project Terms',
    icon: CreditCard,
    content: [
      'Payments, milestones, refunds, cancellation terms, and delivery timelines will be governed by the agreed proposal, invoice, or written agreement between OpenLens and the client.',
      'Work may begin only after confirmation of scope and receipt of any applicable advance payment, unless otherwise agreed in writing.',
    ],
  },
  {
    title: 'Intellectual Property',
    icon: FileText,
    content: [
      'All website content, branding, design elements, text, graphics, visuals, layouts, and other materials on this website are owned by or licensed to OpenLens unless otherwise stated.',
      'You may not copy, reproduce, distribute, modify, or commercially use any content from this website without prior written permission from OpenLens.',
    ],
  },
  {
    title: 'Confidentiality',
    icon: Lock,
    content: [
      'OpenLens respects client confidentiality. Any confidential business information shared with us during inquiries, proposals, or project execution will be handled responsibly.',
      'Both parties may be required to maintain confidentiality for project details, strategies, credentials, data, and business information shared during the engagement.',
    ],
  },
  {
    title: 'Third-Party Tools and Platforms',
    icon: ShieldCheck,
    content: [
      'Some services may involve third-party platforms such as Google, Meta, LinkedIn, hosting providers, analytics tools, email tools, CRM systems, payment gateways, or software integrations.',
      'OpenLens is not responsible for downtime, policy changes, account restrictions, pricing changes, or service interruptions caused by third-party platforms.',
    ],
  },
  {
    title: 'Limitation of Liability',
    icon: Scale,
    content: [
      'OpenLens makes reasonable efforts to provide accurate information and quality services, but we do not guarantee specific business outcomes unless clearly stated in a written agreement.',
      'We shall not be liable for indirect, incidental, special, or consequential damages arising from use of this website or services.',
    ],
  },
]

export default function TermsConditions({ dark }) {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.terms-hero > *', {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.terms-card', {
        y: 36,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power2.out',
      })

      gsap.to('.terms-icon', {
        y: -8,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={pageRef}
      className={`min-h-screen ${
        dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-950'
      }`}
    >
      <section className="relative overflow-hidden">
        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-[radial-gradient(70%_55%_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]'
          }`}
        />

        <div className="terms-hero relative mx-auto max-w-5xl px-4 pb-10 pt-16 text-center sm:px-6">
          <div className="terms-icon mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white shadow-lg">
            <FileText className="h-7 w-7" />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e81c7e]">
            OpenLens
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>

          <p className={`mx-auto mt-5 max-w-3xl leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Please read these Terms and Conditions carefully before using the
            OpenLens website or engaging with our services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="space-y-5">
          {sections.map((section) => {
            const Icon = section.icon

            return (
              <article
                key={section.title}
                className={`terms-card rounded-3xl border p-6 sm:p-8 ${
                  dark
                    ? 'border-white/10 bg-white/5'
                    : 'border-black/10 bg-white shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black">{section.title}</h2>

                    {section.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}

          <article
            className={`terms-card rounded-3xl border p-6 sm:p-8 ${
              dark
                ? 'border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10'
                : 'border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-black">Contact Us</h2>
                <p className={`mt-4 leading-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  If you have any questions about these Terms and Conditions,
                  please contact us at{' '}
                  <a href="mailto:info@openlens.in" className="font-bold text-[#e81c7e]">
                    info@openlens.in
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+918271084686" className="font-bold text-[#e81c7e]">
                    +91 8271084686
                  </a>.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
