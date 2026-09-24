"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function Motion() { useEffect(() => { if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.registerPlugin(ScrollTrigger); const lenis = new Lenis({ lerp: .09 }); const raf = (time:number) => { lenis.raf(time); requestAnimationFrame(raf); }; requestAnimationFrame(raf); gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => gsap.fromTo(el,{y:45,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%"}})); gsap.to(".hero-statement", { scale: .75, opacity: .2, y: -100, scrollTrigger: { trigger: ".hero", start: "35% top", end: "bottom top", scrub: true }}); return () => { lenis.destroy(); ScrollTrigger.getAll().forEach(t=>t.kill()); }; }, []); return null; }
