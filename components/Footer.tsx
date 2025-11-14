import Link from 'components/Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="bg-primary-600 mt-10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Tonative</h3>
            <p className="text-sm text-gray-300">Language technology for a connected world.</p>
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
                <Link href="/about" className="text-gray-300 hover:text-white">
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
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
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
