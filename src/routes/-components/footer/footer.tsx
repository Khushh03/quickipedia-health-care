import { Mail, Linkedin, Github, Youtube } from 'lucide-react'

const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'Chest X-ray Reporting' },
      { name: 'TB Care Cascades' },
      { name: 'Lung Nodule Management' },
      { name: 'Stroke & TBI' },
      { name: 'MSK X-Ray Reporting' },
      { name: 'Heart Failure' },
      { name: 'Qure AI App' },
      { name: 'Aira' },
    ],
  },
  {
    title: 'Focus Areas',
    links: [
      { name: 'Global Health' },
      { name: 'Life Sciences' },
      { name: 'Channel Partners' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Insights' },
      { name: 'News and Press' },
      { name: 'Impact' },
      { name: 'Evidence' },
      { name: 'Blogs' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About Us' },
      { name: 'Our Team' },
      { name: 'Our Investors' },
      { name: 'Client Success' },
      { name: 'Contact Us' },
      { name: 'Careers' },
    ],
  },
  {
    title: 'Partnerships',
    links: [
      { name: 'India Health Fund' },
      { name: 'CaritasKlinikum Saarbrücken' },
      { name: 'AWS' },
    ],
  },
]

const socialLinks = [
  { icon: Mail, label: 'Email', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Sections Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-slate-100"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo and Description */}
          <div className="space-y-3">
            <div className="text-2xl font-bold text-orange-500">qure.ai</div>
            <div>
              <p className="text-sm font-semibold text-slate-300">
                Qure.ai Technologies Private Limited
              </p>
              <p className="max-w-xs text-sm text-slate-400">
                Qure.ai was founded in 2016. Our mission is to use artificial
                intelligence to make healthcare more accessible and affordable.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm font-semibold text-slate-300">Follow us</p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="rounded-lg bg-slate-800 p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-100"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-700"></div>

        {/* Legal Footer */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <a href="#" className="transition-colors hover:text-slate-100">
              Privacy Notice
            </a>
            <a href="#" className="transition-colors hover:text-slate-100">
              Security and Regulatory
            </a>
            <a href="#" className="transition-colors hover:text-slate-100">
              Legal
            </a>
          </div>
          <p className="text-xs text-slate-500">
            CCIN U74999MH2016PTC283891 | © 2023 Qure.ai
          </p>
        </div>
      </div>
    </footer>
  )
}
