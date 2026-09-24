"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Network, X } from "lucide-react";
import { teamMembers, type TeamMember } from "@/data/team";

type Domain = string;

const domains = Array.from(new Set(teamMembers.flatMap((member) => member.domains)));

function Card({ leader, onSelect }: { leader: TeamMember; onSelect: (leader: TeamMember) => void }) {
  return <article className="leader-card" role="button" tabIndex={0} aria-label={`View ${leader.name}'s role and responsibilities`} onClick={() => onSelect(leader)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(leader); } }}>
    <div className="portrait"><img src={leader.image} alt={`${leader.name} - ${leader.role}`}/><span>{leader.role}</span><i/></div>
    <div className="leader-meta"><p>{leader.role}</p><h3>{leader.name}</h3><div className="domain-badges">{leader.domains.map(domain => <span key={`${leader.id}-${domain}`}>{domain}</span>)}</div>{leader.reportingTo && <dl><dt>REPORTS TO</dt><dd>{leader.reportingTo}</dd></dl>}<span className="leader-details">VIEW DETAILS <ArrowUpRight size={14}/></span></div>
  </article>;
}

function ResponsibilityDialog({ leader, onClose }: { leader: TeamMember; onClose: () => void }) {
  useEffect(() => { const previousOverflow = document.body.style.overflow; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; document.body.style.overflow = "hidden"; window.addEventListener("keydown", onKeyDown); return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); }; }, [onClose]);
  return <div className="leadership-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="leadership-dialog" role="dialog" aria-modal="true" aria-labelledby="leader-dialog-title"><button className="dialog-close" type="button" onClick={onClose} aria-label="Close role and responsibilities"><X size={20}/></button><div className="dialog-profile"><img src={leader.image} alt=""/><div><p>{leader.role}</p><h2 id="leader-dialog-title">{leader.name}</h2><div className="domain-badges">{leader.domains.map(domain => <span key={`dialog-${leader.id}-${domain}`}>{domain}</span>)}</div></div></div><div className="dialog-meta">{leader.reportingTo && <div><strong>REPORTS TO</strong><p>{leader.reportingTo}</p></div>}{leader.managingAmbassadors && <div><strong>MANAGES</strong><p>{leader.managingAmbassadors}</p></div>}</div><div className="dialog-responsibilities"><span>ROLE &amp; RESPONSIBILITIES</span>{leader.responsibilities.map(({ section, items }) => <section key={`${leader.id}-${section}`}><h3>{section}</h3><ul>{items.map((entry, index) => <li key={`${leader.id}-${section}-${index}`}>{entry}</li>)}</ul></section>)}</div></section></div>;
}

export function Leadership() { const [filter, setFilter] = useState<"ALL" | Domain>("ALL"); const [selected, setSelected] = useState<TeamMember | null>(null); const visible = teamMembers.filter(member => member.category !== "FACULTY" && (filter === "ALL" || member.domains.includes(filter))); const tiers = ["DIRECTOR", "EXECUTIVE", "AMBASSADOR"] as const; return <section className="people section" id="team"><header><span>07 — LEADERSHIP &amp; DOMAINS</span><h2>THE PEOPLE<br/>BEHIND THE<br/><em>MOVEMENT.</em></h2><p>EDC 2026–2027 operates through a clear chain of approval and execution.</p></header><div className="org-flow"><Network size={16}/><span>DIRECTORS</span><i/><span>EXECUTIVES</span><i/><span>AMBASSADORS</span><i/><span>WORKING COMMITTEE</span></div><div className="domain-filters" aria-label="Filter leadership by domain"><button className={filter === "ALL" ? "selected" : ""} onClick={() => setFilter("ALL")}>ALL</button>{domains.map(domain => <button className={filter === domain ? "selected" : ""} onClick={() => setFilter(domain)} key={domain}>{domain}</button>)}</div><div className="leadership-groups">{tiers.map(tier => { const members = visible.filter(member => member.category === tier); return members.length ? <section className="leadership-tier" key={tier}><h3>{tier === "DIRECTOR" ? "CELL DIRECTORS" : tier === "EXECUTIVE" ? "CELL EXECUTIVES" : "CELL AMBASSADORS"}</h3><div className="leadership-grid">{members.map(member => <Card leader={member} onSelect={setSelected} key={member.id}/>)}</div></section> : null; })}</div>{selected && <ResponsibilityDialog leader={selected} onClose={() => setSelected(null)}/>}</section>; }
