"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Plus,
  Sparkles,
  ExternalLink,
  Flame,
} from "lucide-react";
import { LoadingScreen } from "@/components/loading-screen";
import { Navigation } from "@/components/navigation";
import { Cursor } from "@/components/cursor";
import { Motion } from "@/components/motion";
import { TeamSection } from "@/components/team-section";
import { ecosystem, stats } from "@/data/site";
import { initiatives } from "@/data/initiatives";
import { events } from "@/data/events";
import { archive } from "@/data/archive";

const ledger = [
  [
    "2026",
    "Venturefest'26 & EDC Summit",
    "SRM Vadapalani's flagship entrepreneurship fest bringing 1,500+ student founders, angel investors, and industry leaders together.",
  ],
  [
    "2025",
    "Incubation Program Introduced",
    "A dedicated launchpad taking student prototypes from ideation to seed-ready validation.",
  ],
  [
    "2025",
    "1,200+ Students Impacted",
    "Empowering undergraduate innovators across engineering and management with zero-cost mentorship.",
  ],
  [
    "2024",
    "EDC DCSE Ecosystem Established",
    "Founded with a vision to build SRM Vadapalani's most dynamic hub for entrepreneurial minds.",
  ],
];

export default function Home() {
  const [node, setNode] = useState(0);
  const [filter, setFilter] = useState("ALL");

  const filteredArchive = useMemo(
    () =>
      archive.filter(
        (a) =>
          filter === "ALL" ||
          a.year === filter ||
          a.category.toUpperCase() === filter
      ),
    [filter]
  );

  return (
    <main className="main-wrapper">
      <LoadingScreen />
      <Cursor />
      <Motion />
      <Navigation />

      {/* Hero Section */}
      <section className="hero" id="home">
        {/* Top Kicker */}
        <div className="hero-kicker">
          <span>01 — ENTREPRENEURSHIP DEVELOPMENT CELL</span>
          <span className="hero-kicker-est">DCSE · SRM VADAPALANI</span>
        </div>

        {/* Small Screens Center Hero Banner: Venturefest'26 */}
        <div className="hero-mobile-vf-container">
          <a
            href="https://venturefest.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-mobile-vf-card"
            title="Go to Venturefest 2026 Official Site"
          >
            <div className="hero-vf-badge-line">
              <span className="vf-status-dot" />
              <span>OFFICIAL FLAGSHIP FESTIVAL 2026</span>
            </div>
            <div className="hero-mobile-vf-logo-wrap">
              <Image
                src="/venturefest-logo.png"
                alt="Venturefest 2026"
                width={260}
                height={55}
                className="hero-vf-image"
                priority
              />
            </div>
            <span className="hero-vf-cta-text">
              ENTER FESTIVAL PORTAL <ExternalLink size={13} />
            </span>
          </a>
        </div>

        {/* Cosmic 3D-Style Orb & Art */}
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orb-core" />
          <i className="hero-satellite sat-1" />
          <b className="hero-satellite sat-2" />
        </div>

        {/* Main Headline */}
        <div className="hero-statement">
          <p>TURN</p>
          <p>IDEAS</p>
          <p>
            INTO <em>IMPACT.</em>
          </p>
        </div>

        {/* Floating Hero Info Card with Official Rocket Logo */}
        <aside className="hero-note">
          <div className="hero-note-brand">
            <Image
              src="/edc-logo.png"
              alt="EDC Logo"
              width={42}
              height={42}
              className="hero-note-rocket"
            />
            <div>
              <strong>EDC</strong>
              <small>SRM VDP</small>
            </div>
          </div>
          <span>
            ENTREPRENEURSHIP<br />
            INNOVATION<br />
            LEADERSHIP
          </span>
          <div className="hero-note-pill">
            <Sparkles size={11} />
            <span>EST. 2024</span>
          </div>
        </aside>

        {/* Scroll Indicator */}
        <a className="scroll" href="#about">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>

        {/* Coordinates Footer */}
        <div className="hero-foot">
          13°04&apos;N / 80°16&apos;E <span>IDEAS NEED ROOM TO EXPAND.</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <span className="section-number">01</span>
        <div className="about-title reveal">
          WE DON&apos;T<br />
          JUST TALK<br />
          ABOUT<br />
          <em>ENTREPRENEURSHIP.</em>
        </div>
        <div className="about-copy reveal">
          <span className="line" />
          <p>
            We are a student-led engine for innovators willing to see the world
            differently—and bold enough to build something that lasts.
          </p>
          <h3>
            WE BUILD<br />
            <i>AROUND IT.</i>
          </h3>
          <a href="#initiatives">
            OUR APPROACH <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="ecosystem section">
        <header>
          <span className="section-kicker">02 — ECOSYSTEM</span>
          <h2>
            THE EDC<br />
            <em>ECOSYSTEM</em>
          </h2>
        </header>
        <div className="system">
          <div className="system-list">
            {ecosystem.map((e, i) => (
              <button
                className={node === i ? "active" : ""}
                onMouseEnter={() => setNode(i)}
                onFocus={() => setNode(i)}
                onClick={() => setNode(i)}
                key={e.id}
              >
                <b>0{i + 1}</b>
                <span>{e.name}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
          <div className="system-view">
            <span>ACTIVE MODULE / 0{node + 1}</span>
            <div className="orb" aria-hidden="true">
              <i />
              <i />
              <i />
              <Image
                src="/edc-logo.png"
                alt="EDC Orb Logo"
                width={36}
                height={36}
                className="orb-logo"
              />
            </div>
            <h3>{ecosystem[node].name}</h3>
            <p>{ecosystem[node].copy}</p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="initiatives section" id="initiatives">
        <header>
          <span className="section-kicker">03 — INITIATIVES</span>
          <h2>
            WHAT WE<br />
            <em>BUILD</em>
          </h2>
          <p>Multiple paths in. One shared commitment: make progress matter.</p>
        </header>
        <div className="initiative-grid">
          {initiatives.map((x, i) => (
            <article
              className={`initiative ${x.shape.replace("red", "blue-glow")} reveal`}
              key={x.id}
            >
              <div className="init-top">
                <span>{x.tag}</span>
                <ArrowUpRight size={18} className="init-arrow" />
              </div>
              <h3>
                {x.title.split("\n").map((line, lineIndex) => (
                  <span
                    className="initiative-line"
                    key={`${x.id}-${lineIndex}`}
                  >
                    {line}
                    {lineIndex < x.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p>{x.copy}</p>
              <div className="card-wire">0{i + 1}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="impact">
        <span className="section-kicker">04 — THE NUMBERS</span>
        <div className="impact-grid">
          {stats.map((s) => (
            <article key={s.id} className="impact-card reveal">
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="events section" id="events">
        <header>
          <span className="section-kicker">05 — EVENTS</span>
          <h2>
            EVENTS<br />
            THAT <em>MOVE</em><br />
            PEOPLE.
          </h2>
          <p>DRAG OR SCROLL TO BROWSE →</p>
        </header>
        <div className="event-track">
          {events.map((e, i) => (
            <article className={`event-card ${e.hue}`} key={e.id}>
              <div className="event-image">
                <span>
                  EDC<br />0{i + 1}
                </span>
                <i />
              </div>
              <small>
                {e.date} · {e.category}
              </small>
              <h3>{e.title}</h3>
              <p>{e.copy}</p>
              <a href="#contact">
                VIEW EVENT <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Event: Venturefest 2026 */}
      <section className="featured">
        <span className="section-kicker">06 — ANNUAL FLAGSHIP EVENT</span>
        <div className="summit-globe" aria-hidden="true" />
        <article>
          <div className="featured-vf-header">
            <span className="featured-tag">
              <Flame size={12} /> VENTUREFEST 2026
            </span>
          </div>
          <h2>
            THE ROOM<br />
            WHERE <em>NEXT</em><br />
            HAPPENS.
          </h2>
          <p className="featured-desc">
            Venturefest 2026: Root to Shoot. The definitive gathering for startup
            founders, early builders, innovators, and investors hosted by EDC SRM Vadapalani.
          </p>
          <div className="featured-actions">
            <div>
              <span>
                14–15 FEB 2026<br />
                SRM VADAPALANI, CHENNAI
              </span>
            </div>
            <a
              className="button"
              href="https://venturefest.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EXPLORE VENTUREFEST 2026 <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </section>

      {/* Team / BOD Section */}
      <TeamSection />

      {/* Archive Section */}
      <section className="archive section" id="archive">
        <header>
          <span className="section-kicker">08 — DIGITAL LIBRARY</span>
          <h2>
            THE <em>ARCHIVE</em>
          </h2>
          <p>
            A living record of the experiments, summits, and publications that
            fuel our journey.
          </p>
        </header>
        <div className="filters" role="tablist">
          {["ALL", "2026", "2025", "2024", "EVENTS", "PUBLICATIONS"].map(
            (f) => (
              <button
                onClick={() => setFilter(f)}
                className={filter === f ? "selected" : ""}
                key={f}
                role="tab"
                aria-selected={filter === f}
              >
                {f}
              </button>
            )
          )}
        </div>
        <div className="archive-grid">
          {filteredArchive.map((a, i) => (
            <article key={a.id} className="archive-card">
              <div className={`archive-thumb t${i % 6}`}>
                <span>{a.year}</span>
              </div>
              <small>
                {a.category} / {a.type}
              </small>
              <h3>{a.title}</h3>
              <a href="#contact">
                OPEN <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Ledger Section */}
      <section className="ledger section">
        <header>
          <span className="section-kicker">09 — RECORDS</span>
          <h2>
            EDC <em>LEDGER</em>
          </h2>
        </header>
        <div>
          {ledger.map((x) => (
            <article className="reveal" key={x[0] + x[1]}>
              <b>{x[0]}</b>
              <div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
              <Plus size={18} />
            </article>
          ))}
        </div>
      </section>

      {/* Voices Testimonial */}
      <section className="voices section">
        <span className="section-kicker">10 — TESTIMONIAL</span>
        <h2>
          “EDC didn&apos;t just give me a platform to pitch. It gave me the
          framework, the peers, and the courage to build a venture that
          mattered.”
        </h2>
        <p>STUDENT FOUNDER · SRM VADAPALANI DCSE</p>
        <div aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <span className="section-kicker">11 — START HERE</span>
        <h2>
          HAVE AN IDEA?<br />
          <em>BUILD IT</em><br />
          WITH US.
        </h2>
        <div>
          <a className="button" href="mailto:hello@edc.edu">
            JOIN EDC <ArrowUpRight size={16} />
          </a>
          <a className="text-link" href="mailto:hello@edc.edu">
            PARTNER WITH US <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer with EDC Rocket Logo */}
      <footer>
        <div className="footer-brand">
          <div className="footer-brand-title">
            <Image
              src="/edc-logo.png"
              alt="EDC Rocket Logo"
              width={38}
              height={38}
              className="footer-logo"
            />
            <span>EDC<b>.</b></span>
          </div>
          <p>ENTREPRENEURSHIP DEVELOPMENT CELL · SRM VADAPALANI</p>
        </div>
        <div>
          <span className="footer-col-title">NAVIGATION</span>
          <a href="#about">ABOUT</a>
          <a href="#initiatives">INITIATIVES</a>
          <a href="#events">EVENTS</a>
        </div>
        <div>
          <span className="footer-col-title">DISCOVER</span>
          <a href="#team">BOD TEAM</a>
          <a href="#archive">ARCHIVE</a>
          <a
            href="https://venturefest.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VENTUREFEST &apos;26 ↗
          </a>
        </div>
        <div>
          <span className="footer-col-title">CONNECT</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a href="mailto:hello@edc.edu">EMAIL</a>
        </div>
        <small>
          © 2026 ENTREPRENEURSHIP DEVELOPMENT CELL (EDC) · SRM INSTITUTE OF SCIENCE &amp; TECHNOLOGY, VADAPALANI. ALL RIGHTS RESERVED.
          <i />
        </small>
      </footer>
    </main>
  );
}
