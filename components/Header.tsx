import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logos/logo-with-text.png'
import Link from 'components/Link'
import MobileNav from 'components/MobileNav'
import Image from 'next/image'
// import ThemeSwitch from 'components/ThemeSwitch'
// import SearchButton from 'components/SearchButton'

const Header = () => {
  let headerClass =
    'px-4 sm:px-10 flex items-center w-full bg-white dark:bg-gray-950 justify-between py-5 font-header'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Left Section - Logo */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-center">
          <div className="mr-3 flex-shrink-0">
            <Image src={Logo} alt="Logo" height={30} className="block" priority />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            // <div className="flex hidden h-[40px] items-center text-[40px] leading-[40px] font-bold sm:block">
            //   {siteMetadata.headerTitle}
            // </div>
            <></>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      {/* Right Section - Full-width nav and actions */}
      <div className="flex flex-1 items-center justify-end space-x-4 sm:space-x-6">
        {/* Navigation Links */}
        <nav className="hidden flex-wrap items-center gap-x-6 sm:flex lg:gap-x-8">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 transition-colors dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </nav>

        {/* Utility Buttons */}
        <div className="flex items-center space-x-3">
          {/* this search button to be in the blog page */}
          {/* <SearchButton /> */}
          {/* <ThemeSwitch /> */}

          <Link
            href="/#contact-form"
            // href={siteMetadata.volangUrl}
            // target="_blank"
            className="bg-primary-600 hover:bg-primary-500 hidden rounded-lg px-4 py-2 font-medium text-white transition-colors sm:inline-block"
          >
            Conatct Us
          </Link>

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
