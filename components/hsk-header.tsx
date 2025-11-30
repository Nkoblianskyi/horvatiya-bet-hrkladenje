"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function HskHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[var(--sport-white)] border-b border-[var(--sport-silver)]/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <span className="font-bold text-xl tracking-tight text-[var(--sport-navy)]">HR</span>
              <span className="font-bold text-xl tracking-tight text-[var(--sport-accent)]">Kladenje</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-[var(--sport-slate)] hover:text-[var(--sport-navy)] text-sm font-medium transition-colors"
            >
              O Portalu
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--sport-slate)] hover:text-[var(--sport-navy)]"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--sport-silver)]/30">
            <div className="flex flex-col gap-3">

              <Link
                href="/about"
                className="text-[var(--sport-slate)] hover:text-[var(--sport-navy)] text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                O Portalu
              </Link>

            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
