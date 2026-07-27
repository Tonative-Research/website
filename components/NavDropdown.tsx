'use client'
import { useState, useRef } from 'react'
import Link from 'components/Link'
import type { NavLink } from 'data/headerNavLinks'

type Props = {
  link: NavLink
}

export default function NavDropdown({ link }: Props) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      {/* Trigger */}
      <Link
        href={link.href}
        className="hover:text-primary-500 dark:hover:text-primary-400 inline-flex items-center gap-1 font-medium text-gray-900 transition-colors dark:text-gray-100"
      >
        {link.title}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full left-1/2 z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-gray-100 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-900">
          {/* Arrow notch */}
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-l border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-900" />

          {link.subLinks?.map((sub) =>
            sub.comingSoon ? (
              <div
                key={sub.href}
                className="flex cursor-not-allowed items-start gap-3 px-4 py-3 opacity-50"
              >
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {sub.title}
                    <span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-gray-500 uppercase dark:bg-gray-700 dark:text-gray-400">
                      Soon
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{sub.description}</p>
                </div>
              </div>
            ) : (
              <a
                key={sub.href}
                href={sub.href}
                target={sub.external ? '_blank' : undefined}
                rel={sub.external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-3 px-4 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="min-w-0 flex-1">
                  <p className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {sub.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{sub.description}</p>
                </div>
                {sub.external && (
                  <svg
                    className="group-hover:text-primary-500 mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </a>
            )
          )}

          {/* Footer link to /product overview */}
          <div className="mx-4 mt-1 border-t border-gray-100 pt-2 dark:border-gray-700">
            <Link
              href={link.href}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-xs font-medium"
            >
              View all products →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
