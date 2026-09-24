"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X, ArrowUpRight, ShieldCheck, ChevronRight, UserCheck, Layers } from "lucide-react";
import { teamMembers, TeamMember } from "@/data/team";

type CategoryFilter = "ALL" | "FACULTY" | "DIRECTOR" | "EXECUTIVE" | "AMBASSADOR";

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const filteredMembers = useMemo(() => {
    if (activeCategory === "ALL") return teamMembers;
    return teamMembers.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="people section" id="team">
      <header>
        <span className="section-kicker">07 — BOARD OF DIRECTORS</span>
        <h2>
          THE PEOPLE<br />
          BEHIND THE<br />
          <em>MOVEMENT.</em>
        </h2>
        <p>
          Meet the visionary directors, faculty coordinators, executives, and ambassadors driving EDC SRM Vadapalani.
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div className="team-filters" role="tablist" aria-label="BOD categories">
        {(
          [
            { id: "ALL", label: "ALL MEMBERS", count: teamMembers.length },
            { id: "FACULTY", label: "FACULTY", count: 2 },
            { id: "DIRECTOR", label: "DIRECTORS", count: 2 },
            { id: "EXECUTIVE", label: "EXECUTIVES", count: 6 },
            { id: "AMBASSADOR", label: "AMBASSADORS", count: 6 },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeCategory === tab.id}
            className={`team-filter-tab ${activeCategory === tab.id ? "active" : ""}`}
            onClick={() => setActiveCategory(tab.id)}
          >
            <span>{tab.label}</span>
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* BOD Portrait Grid */}
      <div className="team-portrait-grid">
        {filteredMembers.map((member, idx) => (
          <article
            key={member.id}
            className="bod-portrait-card"
            onClick={() => setSelectedMember(member)}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            aria-label={`View details and responsibilities for ${member.name}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedMember(member);
              }
            }}
          >
            {/* Portrait Image Frame */}
            <div className="bod-image-wrapper">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="bod-portrait-img"
                priority={idx < 4}
              />
              <div className="bod-image-overlay" />
              <div className="bod-card-top-tags">
                <span className={`bod-cat-tag ${member.category.toLowerCase()}`}>
                  {member.category}
                </span>
                <span className="bod-index">0{idx + 1}</span>
              </div>
              <div className="bod-hover-cta">
                <span>VIEW RESPONSIBILITIES</span>
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Card Footer Info */}
            <div className="bod-card-info">
              <div className="bod-role-badge">{member.role}</div>
              <h3 className="bod-name">{member.name}</h3>
              {member.designation && (
                <p className="bod-designation">{member.designation}</p>
              )}
              <div className="bod-domains-preview">
                {member.domains.slice(0, 2).map((d) => (
                  <span key={d} className="domain-pill">
                    {d}
                  </span>
                ))}
                {member.domains.length > 2 && (
                  <span className="domain-pill more">
                    +{member.domains.length - 2}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Detail Modal / Pop-up Window */}
      {selectedMember && (
        <div
          className="bod-modal-backdrop"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div
            className="bod-modal-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-member-name"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              className="bod-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close details modal"
            >
              <X size={20} />
            </button>

            <div className="bod-modal-content">
              {/* Modal Left Column: Portrait & Quick Badges */}
              <div className="bod-modal-sidebar">
                <div className="bod-modal-portrait">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="bod-modal-img"
                  />
                  <div className="bod-modal-img-gradient" />
                </div>

                <div className="bod-modal-meta">
                  <span className={`bod-cat-badge ${selectedMember.category.toLowerCase()}`}>
                    {selectedMember.category} BOARD
                  </span>
                  <div className="bod-meta-block">
                    <span className="bod-meta-label">
                      <Layers size={12} /> ASSIGNED DOMAINS
                    </span>
                    <div className="bod-meta-tags">
                      {selectedMember.domains.map((dom) => (
                        <span key={dom} className="domain-tag">
                          {dom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedMember.reportingTo && (
                    <div className="bod-meta-block">
                      <span className="bod-meta-label">
                        <UserCheck size={12} /> REPORTING HIERARCHY
                      </span>
                      <p className="bod-meta-value">
                        Reports to: <b>{selectedMember.reportingTo}</b>
                      </p>
                    </div>
                  )}

                  {selectedMember.managingAmbassadors && (
                    <div className="bod-meta-block">
                      <span className="bod-meta-label">
                        <ShieldCheck size={12} /> MANAGING AMBASSADORS
                      </span>
                      <p className="bod-meta-value">
                        {selectedMember.managingAmbassadors}
                      </p>
                    </div>
                  )}

                  <div className="bod-sop-badge">
                    <ShieldCheck size={14} />
                    <span>EDC SOP 2026-2027 PROTOCOL</span>
                  </div>
                </div>
              </div>

              {/* Modal Right Column: Full Details & Responsibilities */}
              <div className="bod-modal-body">
                <div className="bod-modal-header">
                  <span className="bod-modal-role-pill">
                    {selectedMember.role}
                  </span>
                  <h2 id="modal-member-name" className="bod-modal-title">
                    {selectedMember.name}
                  </h2>
                  {selectedMember.designation && (
                    <p className="bod-modal-sub">{selectedMember.designation}</p>
                  )}
                </div>

                {selectedMember.generalLeadership && (
                  <div className="bod-leadership-box">
                    <h4>GENERAL LEADERSHIP MANDATE</h4>
                    <p>{selectedMember.generalLeadership}</p>
                  </div>
                )}

                <div className="bod-responsibilities-section">
                  <h3>ROLES & RESPONSIBILITIES</h3>
                  <div className="bod-resp-groups">
                    {selectedMember.responsibilities.map((grp, gIdx) => (
                      <div key={gIdx} className="bod-resp-group">
                        <h4 className="bod-resp-group-title">
                          <ChevronRight size={16} />
                          <span>{grp.section}</span>
                        </h4>
                        <ul className="bod-resp-list">
                          {grp.items.map((item, iIdx) => (
                            <li key={iIdx} className="bod-resp-item">
                              <span className="resp-bullet" />
                              <span className="resp-text">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
