"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVEAL_START = "top 88%";

export function PageAnimations() {
  useGSAP(() => {
    // ---------------------------------------------------------------------
    // Scroll Chrome: Progress bar and Header attribute
    // ---------------------------------------------------------------------
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const header = document.querySelector<HTMLElement>("[data-header]");

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (bar) gsap.set(bar, { scaleX: self.progress });
      },
    });

    ScrollTrigger.create({
      start: "top -10",
      end: "max",
      onToggle: (self) => {
        if (header) header.toggleAttribute("data-scrolled", self.isActive);
      },
    });

    // ---------------------------------------------------------------------
    // Scoped to prefers-reduced-motion: no-preference
    // ---------------------------------------------------------------------
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const all = <T extends HTMLElement>(
        sel: string,
        root: ParentNode = document,
      ) => Array.from(root.querySelectorAll<T>(sel));
      
      const inHero = (el: Element) => !!el.closest("[data-hero]");

      const heroReveals = all("[data-hero] [data-r]");
      const reveals = all("[data-r]").filter((el) => !inHero(el));

      // Initial states
      gsap.set(heroReveals, { opacity: 0, y: 20 });
      gsap.set(reveals, { opacity: 0, y: 24 });

      // Hero timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl.to(
        heroReveals,
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        0.1,
      );

      // Below the fold reveals in batches
      ScrollTrigger.batch(reveals, {
        start: REVEAL_START,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.06,
          }),
      });

      if (typeof document !== "undefined" && document.fonts) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }
    });
  }, []);

  return null;
}

