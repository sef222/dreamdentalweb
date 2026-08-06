"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVEAL_START = "top 88%";

export function PageAnimations() {
  useGSAP(() => {
    // ---------------------------------------------------------------------
    // Scroll chrome. Both of these run off ScrollTrigger rather than a raw
    // scroll listener, and neither touches layout: the progress bar is a
    // scaleX transform (not width) and the header swaps a CSS attribute
    // instead of having three style properties written per frame.
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
    // Everything below is motion, so it is scoped to a matchMedia condition.
    // gsap.matchMedia reverts the whole branch — including every initial
    // gsap.set — if the user prefers reduced motion, so there is no ordering
    // in which someone ends up staring at a page left at opacity 0.
    // ---------------------------------------------------------------------
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const all = <T extends HTMLElement>(
        sel: string,
        root: ParentNode = document,
      ) => Array.from(root.querySelectorAll<T>(sel));
      const inHero = (el: Element) => !!el.closest("[data-hero]");

      const heroReveals = all("[data-hero] [data-r]");
      const heroTiles = all("[data-hero] [data-tile]");
      const heroTeeth = all("[data-hero] [data-teeth] > div > div");
      const heroBars = all("[data-hero] [data-bars] > div");
      const heroBar = document.querySelector<HTMLElement>(
        "[data-hero] [data-bar]",
      );

      const reveals = all("[data-r]").filter((el) => !inHero(el));
      const tiles = all("[data-tile]").filter((el) => !inHero(el));

      // Initial states are written ONCE, up front. The old build called
      // gsap.from() per element from an IntersectionObserver callback, which
      // forced a style read for every element mid-scroll — that was the jank.
      // With set + to, nothing is measured while scrolling.
      gsap.set([...heroReveals, ...reveals], { opacity: 0, y: 26 });
      gsap.set([...heroTiles, ...tiles], { opacity: 0, y: 32, scale: 0.975 });
      gsap.set(heroTeeth, {
        opacity: 0,
        scaleY: 0.2,
        transformOrigin: "center",
      });
      gsap.set(heroBars, { scaleY: 0, transformOrigin: "bottom" });
      if (heroBar)
        gsap.set(heroBar, { scaleX: 0, transformOrigin: "left center" });

      tiles.forEach((tile) => {
        const teeth = all(`[data-teeth] > div > div`, tile);
        const rows = all("[data-row]", tile);
        const bar2 = tile.querySelector<HTMLElement>("[data-bar2]");
        if (teeth.length)
          gsap.set(teeth, {
            opacity: 0,
            scaleY: 0.2,
            transformOrigin: "center",
          });
        if (rows.length) gsap.set(rows, { opacity: 0, x: -14 });
        if (bar2) gsap.set(bar2, { scaleX: 0, transformOrigin: "left center" });
      });

      // Hero is above the fold: one timeline, no triggers.
      const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
      hero
        .to(heroReveals, { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, 0)
        .to(
          heroTiles,
          { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.085 },
          0.18,
        )
        .to(
          heroTeeth,
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.022,
          },
          0.7,
        )
        .to(
          heroBars,
          { scaleY: 1, duration: 0.7, ease: "power2.out", stagger: 0.05 },
          0.8,
        );
      if (heroBar)
        hero.to(
          heroBar,
          { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
          0.9,
        );

      // Below the fold: batched, so elements entering together share one tween
      // instead of each spawning its own.
      ScrollTrigger.batch(reveals, {
        start: REVEAL_START,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08,
          }),
      });

      ScrollTrigger.batch(tiles, {
        start: REVEAL_START,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08,
          });

          batch.forEach((el, i) => {
            const at = i * 0.08;
            const teeth = all("[data-teeth] > div > div", el);
            const rows = all("[data-row]", el);
            const bar2 = el.querySelector<HTMLElement>("[data-bar2]");

            if (teeth.length)
              gsap.to(teeth, {
                opacity: 1,
                scaleY: 1,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.018,
                delay: at + 0.25,
              });
            if (rows.length)
              gsap.to(rows, {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.06,
                delay: at + 0.18,
              });
            if (bar2)
              gsap.to(bar2, {
                scaleX: 1,
                duration: 1.1,
                ease: "power2.inOut",
                delay: at + 0.25,
              });
          });
        },
      });

      // The statement block brightens word by word as it is read. Opacity
      // rather than colour: over #0A1416, opacity .22 on #E8EDEE is the same
      // pixel as the design's rgba(232,237,238,.22), but it composites instead
      // of repainting 50 spans.
      const words = document.querySelector<HTMLElement>("[data-words]");
      let wordsHtml: string | null = null;

      if (words) {
        wordsHtml = words.innerHTML;
        const text = (words.textContent ?? "").trim();
        words.textContent = "";
        const spans = text.split(/\s+/).map((word) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          words.appendChild(span);
          return span;
        });
        gsap.set(spans, { opacity: 0.22 });
        gsap.to(spans, {
          opacity: 1,
          duration: 0.5,
          ease: "none",
          stagger: 0.028,
          scrollTrigger: { trigger: words, start: "top 78%", once: true },
        });
      }

      // Poppins lands after first paint and shifts everything below it, so
      // trigger positions measured before that are stale.
      if (typeof document !== "undefined" && document.fonts) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => {
        if (words && wordsHtml !== null) words.innerHTML = wordsHtml;
      };
    });
  }, []);

  return null;
}
