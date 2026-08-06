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
  // That is the whole fix for "text appears before the animation ends": a
  // paused fromTo renders its from-state immediately, so by the time the
  // drawer is ever shown every line is already masked, every rule collapsed
  // and both curtains retracted. The old build passed immediateRender:false,
  // so the first frame after opening was fully-formed text that then jumped
  // back and re-animated.
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
              // release the compositor hints once the curtains have landed
              gsap.set(q("[data-drawer-accent],[data-drawer-bg]"), {
                willChange: "auto",
              });
            },
          });

          tl
            // Curtains sweep down, accent leading, background trailing.
            .fromTo(
              q("[data-drawer-accent]"),
              { clipPath: "inset(0 0 100% 0)" },
              { clipPath: "inset(0 0 0% 0)", duration: 0.5 },
              0,
            )
            .fromTo(
              q("[data-drawer-bg]"),
              { clipPath: "inset(0 0 100% 0)" },
              { clipPath: "inset(0 0 0% 0)", duration: 0.62 },
              0.1,
            )
            .fromTo(
              q("[data-drawer-deco]"),
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.out" },
              0.5,
            )
            .fromTo(
              q("[data-drawer-top]"),
              { y: -20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
              0.62,
            )
            .fromTo(
              q("[data-drawer-eyebrow]"),
              { opacity: 0, x: -10 },
              { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
              0.66,
            )
            // Lines start only once the background curtain has fully landed
            // (0.1 + 0.62 = 0.72), so nothing is ever legible over a moving
            // curtain. They rise out of their masks, not out of nowhere.
            .fromTo(
              q("[data-drawer-line]"),
              { yPercent: 110 },
              {
                yPercent: 0,
                duration: 0.78,
                stagger: 0.075,
                ease: "expo.out",
              },
              0.72,
            )
            .fromTo(
              q("[data-drawer-rule]"),
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 0.6,
                stagger: 0.075,
                ease: "power3.out",
              },
              0.8,
            )
            .fromTo(
              q("[data-drawer-foot] > *"),
              { y: 22, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.07,
                ease: "power3.out",
              },
              0.95,
            );

          // A paused timeline does not render its from-states until something
          // first ticks it, which would put one frame of finished-looking
          // content on screen at the moment the drawer becomes visible.
          // pause(0) seeks and renders synchronously, here at mount, so the
          // masked/collapsed state is already committed long before opening.
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
      // Closing runs the same choreography backwards but quicker — dwelling on
      // the exit is what makes a menu feel sluggish. onReverseComplete hides
      // the drawer; no guard timeout can strand it mid-animation any more.
      tl.timeScale(1.5).reverse();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpenRef.current) setMenu(false);
    };
    // close the drawer if the viewport grows past the mobile breakpoint
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
      <SiteHeader menuOpen={menuOpen} onToggleMenu={() => setMenu(!menuOpen)} />
      <MobileDrawer rootRef={drawerRef} onClose={() => setMenu(false)} />
    </>
  );
}
