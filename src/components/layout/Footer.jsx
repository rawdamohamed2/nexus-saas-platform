import React from 'react'
import { MdLanguage, MdMailOutline } from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-ring border border-t pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 pb-16 md:grid-cols-4">
        <div className="space-y-6">
          <h3 className="font-icon text-text-main text-xl font-bold">Nexus</h3>
          <p className="max-w-[200px] text-sm leading-relaxed text-[#44474E]">
            The modern standard for field service management software.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-text-main font-bold">Platform</h4>
          <ul className="text-muted-foreground space-y-4 text-sm">
            <li className="hover:text-primary cursor-pointer">Features</li>
            <li className="hover:text-primary cursor-pointer">Pricing</li>
            <li className="hover:text-primary cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-text-main font-bold">Support</h4>
          <ul className="text-muted-foreground space-y-4 text-sm">
            <li className="hover:text-primary cursor-pointer">Contact</li>
            <li className="hover:text-primary cursor-pointer">Documentation</li>
            <li className="hover:text-primary cursor-pointer">Help Center</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-text-main font-bold">Legal</h4>
          <ul className="text-muted-foreground space-y-4 text-sm">
            <li className="hover:text-primary cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-primary cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-muted border-t">
        <div className="text-accent-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
          <p>© {currentYear} Nexus SaaS Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <MdLanguage
              size={22}
              className="hover:text-text-main cursor-pointer transition-colors"
            />
            <MdMailOutline
              size={22}
              className="hover:text-text-main cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
