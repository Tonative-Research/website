import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logos/logo-with-text.png'
import Link from 'components/Link'
import MobileNav from 'components/MobileNav'
import NavDropdown from 'components/NavDropdown'
import Image from 'next/image'
// import ThemeSwitch from 'components/ThemeSwitch'
// import SearchButton from 'components/SearchButton'

const Header = () => {
  let headerClass = ''
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  let innerHeaderClass =
    'px-4 sm:px-10  w-full bg-white dark:bg-gray-950 justify-between py-5 font-header flex items-center'

  return (
    <header className={headerClass}>
      <div className="from-accent-600 via-accent-500 to-accent-600 flex items-center justify-center gap-3 border-b border-white/10 bg-gradient-to-r px-4 py-2.5 text-white shadow-lg">
        <span className="hidden rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide sm:inline-block">
          🎓 2nd Cohort
        </span>
        <span className="text-xs font-medium sm:text-base">
          Learn how to curate African language data for AI. Applications now open
        </span>
        <Link href="/services/data-academy" className="shrink-0">
          <button className="text-accent-600 ml-1 shrink-0 rounded-full bg-white px-4 py-1 text-xs font-semibold whitespace-nowrap shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:text-sm">
            Apply Now
          </button>
        </Link>
      </div>
      <div className={innerHeaderClass}>
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
              .map((link) =>
                link.subLinks ? (
                  <NavDropdown key={link.title} link={link} />
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 transition-colors dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                )
              )}
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
      </div>
    </header>
    /*  </section>*/
  )
}

export default Header
