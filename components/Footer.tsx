import Link from 'components/Link'
import Logo from '@/data/images/Tonative-logo-white-with-text.png'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="px-4 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Image src={Logo} alt="Logo" height={50} className="mb-4" />
            <p className="text-sm text-gray-300">Language technology for a more connected world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/product" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog/01-our-story" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white">
                  Research
                </Link>
              </li>
              <li>
                <Link href="mailto:amol@tonative.org" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Connect</h4>
            <div className="mb-3 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
              <SocialIcon kind="huggingFace" href={siteMetadata.huggingFace} size={6} />
              <SocialIcon kind="x" href={siteMetadata.x} size={6} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
              {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}{' '}
              {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} /> */}
              {/* <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
              {/* <SocialIcon kind="medium" href={siteMetadata.medium} size={6} /> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-200">
          <p>© {new Date().getFullYear()} Tonative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
