"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SiteHeader } from "./site-header";
import { MobileDrawer } from "./mobile-drawer";

gsap.registerPlugin(useGSAP);

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(menuOpen);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  // The timeline is built once, at mount, while the drawer is still hidden.
  useGSAP(
    () => {
      const drawer = drawerRef.current;
      if (!drawer) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions as {
            motion: boolean;
            reduced: boolean;
          };
          reducedRef.current = reduced;
          if (reduced) {
            timelineRef.current = null;
            return;
          }

          const q = gsap.utils.selector(drawer);

          const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power4.inOut" },
            onReverseComplete: () => {
              drawer.style.visibility = "hidden";
              drawer.style.pointerEvents = "none";
            },
            onComplete: () => {
              gsap.set(q("[data-drawer-accent],[data-drawer-bg]"), {
                willChange: "auto",
              });
            },
          });

          tl
            .fromTo(
              q("[data-drawer-accent]"),
              { clipPath: "inset(0 0 100% 0)" },
              { clipPath: "inset(0 0 0% 0)", duration: 0.4 },
              0,
            )
            .fromTo(
              q("[data-drawer-bg]"),
              { clipPath: "inset(0 0 100% 0)" },
              { clipPath: "inset(0 0 0% 0)", duration: 0.5 },
              0.08,
            )
            .fromTo(
              q("[data-drawer-deco]"),
              { opacity: 0 },
              { opacity: 1, duration: 0.4, ease: "power2.out" },
              0.4,
            )
            .fromTo(
              q("[data-drawer-top]"),
              { y: -16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
              0.45,
            )
            .fromTo(
              q("[data-drawer-eyebrow]"),
              { opacity: 0, x: -10 },
              { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
              0.5,
            )
            .fromTo(
              q("[data-drawer-line]"),
              { yPercent: 100, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.55,
                stagger: 0.05,
                ease: "expo.out",
              },
              0.55,
            )
            .fromTo(
              q("[data-drawer-foot]"),
              { y: 16, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
              },
              0.75,
            );

          tl.pause(0);
          timelineRef.current = tl;

          return () => {
            timelineRef.current = null;
          };
        },
      );
    },
    { scope: drawerRef },
  );

  const setMenu = useCallback((open: boolean) => {
    setMenuOpen(open);
    document.body.style.overflow = open ? "hidden" : "";

    const drawer = drawerRef.current;
    if (!drawer) return;

    const tl = timelineRef.current;

    if (!tl) {
      drawer.style.visibility = open ? "visible" : "hidden";
      drawer.style.pointerEvents = open ? "auto" : "none";
      return;
    }

    if (open) {
      drawer.style.visibility = "visible";
      drawer.style.pointerEvents = "auto";
      gsap.set(
        drawer.querySelectorAll("[data-drawer-accent],[data-drawer-bg]"),
        { willChange: "clip-path" },
      );
      tl.timeScale(1).play();
    } else {
      tl.timeScale(1.5).reverse();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpenRef.current) setMenu(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900 && menuOpenRef.current) setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [setMenu]);

  return (
    <>
      <SiteHeader
        menuOpen={menuOpen}
        onToggleMenu={() => setMenu(!menuOpen)}
      />
      <MobileDrawer
        rootRef={drawerRef}
        onClose={() => setMenu(false)}
      />
    </>
  );
}
