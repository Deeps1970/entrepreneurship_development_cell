"use client";

import { Menu, X, ArrowUpRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/data/site";

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className="nav">
        {/* Left: Brand with Official Rocket Logo */}
        <a className="brand" href="#home" aria-label="EDC Home">
          <div className="brand-logo-wrap">
            <Image
              src="/edc-logo.png"
              alt="EDC Rocket Logo"
              width={38}
              height={38}
              className="brand-logo"
              priority
            />
          </div>
          <span>EDC<b>.</b></span>
        </a>

        {/* Center: Venturefest'26 Logo on PC */}
        <div className="nav-center-slot">
          <a
            href="https://venturefest.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-vf-pill"
            aria-label="Visit Venturefest 2026 Website"
            title="Explore Venturefest 2026"
          >
            <span className="vf-status-dot" />
            <span className="vf-text-intro">FLAGSHIP FEST</span>
            <Image
              src="/venturefest-logo.png"
              alt="Venturefest '26 Logo"
              width={140}
              height={32}
              className="nav-vf-img"
              priority
            />
            <ExternalLink size={13} className="vf-ext-icon" />
          </a>
        </div>

        {/* Right: Desktop Links + CTA */}
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="join" href="#contact">
          <span>JOIN EDC</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile menu button */}
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <aside className={`mobile-nav ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-brand">
          <Image
            src="/edc-logo.png"
            alt="EDC Logo"
            width={44}
            height={44}
            className="brand-logo"
          />
          <p>ENTREPRENEURSHIP DEVELOPMENT CELL</p>
        </div>

        {/* Mobile Venturefest Highlight */}
        <a
          href="https://venturefest.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-vf-banner"
          onClick={() => setOpen(false)}
        >
          <div className="mobile-vf-top">
            <span className="vf-status-dot" />
            <span>ANNUAL FLAGSHIP 2026</span>
          </div>
          <Image
            src="/venturefest-logo.png"
            alt="Venturefest '26"
            width={160}
            height={36}
            className="mobile-vf-img"
          />
          <span className="mobile-vf-cta">
            EXPLORE FESTIVAL <ArrowUpRight size={14} />
          </span>
        </a>

        <div className="mobile-nav-links">
          {navItems.map((item, i) => (
            <a
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 45}ms` }}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="join" onClick={() => setOpen(false)} href="#contact">
          <span>JOIN EDC</span>
          <ArrowUpRight size={15} />
        </a>

        <small>SRM VADAPALANI · DCSE · EST. 2024</small>
      </aside>
    </>
  );
}
