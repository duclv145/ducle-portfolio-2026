"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const rafId = useRef<number | null>(null);
  const isHidden = useRef(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        const current = window.scrollY;
        const goingDown = current > lastY.current + 8 && current > 80;
        const goingUp = current < lastY.current - 4;

        if (goingDown && !isHidden.current) {
          isHidden.current = true;
          header.style.transform = "translateY(-100%)";
          lastY.current = current;
        } else if (goingUp && isHidden.current) {
          isHidden.current = false;
          header.style.transform = "translateY(0)";
          lastY.current = current;
        } else if (!goingDown && !goingUp) {
          lastY.current = current;
        }

        rafId.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            padding: "0 clamp(20px, 4vw, 40px)",
          }}
        >
          <a
            href="/"
            aria-label="Duc Le — Home"
            style={{
              fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
              fontSize: 15,
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Duc Le
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "none",
              border: "none",
              padding: "8px 0",
              color: "rgba(255,255,255,0.65)",
              cursor: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "lowercase",
              }}
            >
              menu
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 1,
                  background: "currentColor",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 13,
                  height: 1,
                  background: "currentColor",
                }}
              />
            </span>
          </button>
        </div>

        {/* Full-width hairline */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "#070707",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
                padding: "0 clamp(20px, 4vw, 40px)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <a
                href="/"
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Duc Le
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.55)",
                  cursor: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "lowercase",
                }}
              >
                close ×
              </button>
            </div>

            {/* Nav links */}
            <nav
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 clamp(20px, 6vw, 60px)",
                gap: 0,
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.07 }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    fontSize: "clamp(52px, 12vw, 100px)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    display: "block",
                    borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    padding: "clamp(14px, 2.5vw, 24px) 0",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div
              style={{
                padding: "20px clamp(20px, 4vw, 40px)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                duclv145@gmail.com
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Hanoi · Vietnam
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
