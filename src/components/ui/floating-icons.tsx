"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

// 원본: floating-icons-hero-section (framer-motion) — 아이콘 레이어만 옮김.
// 로고 출처: GitHub·Claude Code·Figma·Cursor·Supabase·Vercel은 simple-icons(CC0),
// Codex는 openai.com 공식 마크, Higgsfield는 higgsfield.ai 공식 로고.
// 브랜드 고유색(hex)은 DESIGN.md 예외 규칙에 따름. 검정 계열 로고는 --color-ink를 쓴다.

export interface FloatingIcon {
  id: string;
  label: string;
  viewBox: string;
  /** 단색 로고 경로 */
  path?: string;
  /** 여러 색 로고 경로 (Figma 등). 있으면 path·color 대신 쓴다 */
  paths?: { d: string; fill: string }[];
  /** 브랜드 고유색. 없으면 --color-ink */
  color?: string;
  /** 위치 (Tailwind 위치 클래스) */
  className: string;
}

export const toolStackIcons: FloatingIcon[] = [
  {
    id: "github",
    label: "GitHub",
    viewBox: "0 0 24 24",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    color: undefined,
    className: "top-[18%] left-[8%]",
  },
  {
    id: "claudecode",
    label: "Claude Code",
    viewBox: "0 0 24 24",
    path: "M21 10.5h3v3h-3v3h-1.5v3H18v-3h-1.5v3H15v-3H9v3H7.5v-3H6v3H4.5v-3H3v-3H0v-3h3v-6h18Zm-15 0h1.5v-3H6Zm10.5 0H18v-3h-1.5z",
    color: "#D97757",
    className: "top-[16%] right-[10%]",
  },
  {
    id: "figma",
    label: "Figma",
    viewBox: "0 0 38 57",
    // Figma 공식 5색 로고
    paths: [
      { d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z", fill: "#1ABCFE" },
      { d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z", fill: "#0ACF83" },
      { d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z", fill: "#FF7262" },
      { d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z", fill: "#F24E1E" },
      { d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z", fill: "#A259FF" },
    ],
    color: undefined,
    className: "top-[48%] left-[14%]",
  },
  {
    id: "codex",
    label: "Codex",
    viewBox: "29.5 29.9 121 120",
    path: "M75.91 73.628V62.232c0-.96.36-1.68 1.199-2.16l22.912-13.194c3.119-1.8 6.838-2.639 10.676-2.639 14.394 0 23.511 11.157 23.511 23.032 0 .839 0 1.799-.12 2.758l-23.752-13.914c-1.439-.84-2.879-.84-4.318 0L75.91 73.627Zm53.499 44.383v-27.23c0-1.68-.72-2.88-2.159-3.719L97.142 69.55l9.836-5.638c.839-.48 1.559-.48 2.399 0l22.912 13.195c6.598 3.839 11.035 11.995 11.035 19.912 0 9.116-5.397 17.513-13.915 20.992v.001Zm-60.577-23.99-9.836-5.758c-.84-.48-1.2-1.2-1.2-2.16v-26.39c0-12.834 9.837-22.55 23.152-22.55 5.039 0 9.716 1.679 13.676 4.678L70.993 55.516c-1.44.84-2.16 2.039-2.16 3.719v34.787-.002Zm21.173 12.234L75.91 98.339V81.546l14.095-7.917 14.094 7.917v16.793l-14.094 7.916Zm9.056 36.467c-5.038 0-9.716-1.68-13.675-4.678l23.631-13.676c1.439-.839 2.159-2.038 2.159-3.718V85.863l9.956 5.757c.84.48 1.2 1.2 1.2 2.16v26.389c0 12.835-9.957 22.552-23.27 22.552v.001Zm-28.43-26.75L47.72 102.778c-6.599-3.84-11.036-11.996-11.036-19.913 0-9.236 5.518-17.513 14.034-20.992v27.35c0 1.68.72 2.879 2.16 3.718l29.989 17.393-9.837 5.638c-.84.48-1.56.48-2.399 0Zm-1.318 19.673c-13.555 0-23.512-10.196-23.512-22.792 0-.959.12-1.919.24-2.879l23.63 13.675c1.44.84 2.88.84 4.32 0l30.108-17.392v11.395c0 .96-.361 1.68-1.2 2.16l-22.912 13.194c-3.119 1.8-6.837 2.639-10.675 2.639Zm29.748 14.274c14.515 0 26.63-10.316 29.39-23.991 13.434-3.479 22.071-16.074 22.071-28.91 0-8.396-3.598-16.553-10.076-22.43.6-2.52.96-5.039.96-7.557 0-17.153-13.915-29.99-29.989-29.99-3.239 0-6.358.48-9.477 1.56-5.398-5.278-12.835-8.637-20.992-8.637-14.515 0-26.63 10.316-29.39 23.991-13.434 3.48-22.07 16.074-22.07 28.91 0 8.396 3.598 16.553 10.075 22.431-.6 2.519-.96 5.038-.96 7.556 0 17.154 13.915 29.989 29.99 29.989 3.238 0 6.357-.479 9.476-1.559 5.397 5.278 12.835 8.637 20.992 8.637Z",
    color: undefined,
    className: "top-[50%] right-[8%]",
  },
  {
    id: "higgsfield",
    label: "Higgsfield",
    viewBox: "0 0 20 20",
    path: "M18.3498 9.83713L18.3339 9.65759C18.1831 7.93447 17.0963 4.69261 14.0816 4.69261C11.8445 4.69261 10.1545 6.97097 8.66311 8.97967C7.47302 10.5883 6.4419 11.9683 5.3073 11.9683C5.00574 11.9357 4.61708 11.7805 4.3792 11.4294C4.16497 11.1108 4.10948 10.7026 4.22046 10.2126C4.39489 9.43684 5.39463 8.7182 6.44963 7.95063C7.02864 7.54238 7.6238 7.10955 8.03634 6.69311C9.22643 5.5091 9.82932 4.65164 9.82932 3.2717C9.82932 1.89176 9.09157 1.20565 8.47276 0.911636C7.23514 0.323844 5.41851 0.666781 4.26026 1.69583C4.08583 1.85922 3.91117 2.01418 3.75243 2.16119C2.58622 3.23097 1.80094 3.95781 0 3.40232V5.63972C2.38791 6.72588 4.39512 4.65164 5.15675 3.69633C5.74372 3.06758 6.36253 2.70006 6.82283 2.70006H6.84671C7.05298 2.70825 7.22741 2.78995 7.35454 2.93696C7.56081 3.18204 7.64018 3.46786 7.60038 3.78622C7.51305 4.45594 6.83875 5.23967 5.60113 6.09713C4.14928 7.10159 1.7218 8.78374 1.53122 10.8987C1.3884 12.4177 2.15003 13.9365 3.34012 14.5243C6.11669 15.8798 7.80665 13.5444 9.5994 11.0783C10.9719 9.1756 12.273 7.37103 14.0818 7.37103C15.7081 7.37103 16.311 8.75916 16.311 9.63301V9.80459L16.1523 9.83713C12.2095 10.5558 10.0595 14.3611 10.0595 16.1167C10.0595 17.8724 11.5034 19.375 13.2804 19.375C15.359 19.375 17.9293 17.5458 18.3419 12.4013L18.3578 12.2136H20V9.83737H18.3498V9.83713ZM16.1998 12.4746C15.8826 15.5531 14.3513 16.9904 13.4232 16.9904C13.0027 16.9904 12.4158 16.631 12.4158 15.9615C12.4158 15.2104 13.5026 12.932 15.946 12.2543L16.2316 12.1808L16.1998 12.4748V12.4746Z",
    color: undefined,
    className: "bottom-[12%] left-[9%]",
  },
  {
    id: "cursor",
    label: "Cursor",
    viewBox: "0 0 24 24",
    path: "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23",
    color: undefined,
    className: "bottom-[10%] right-[14%]",
  },
  {
    id: "supabase",
    label: "Supabase",
    viewBox: "0 0 24 24",
    path: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
    color: "#3FCF8E",
    className: "top-[24%] left-[26%]",
  },
  {
    id: "vercel",
    label: "Vercel",
    viewBox: "0 0 24 24",
    path: "m12 1.608 12 20.784H0Z",
    color: undefined,
    className: "bottom-[16%] right-[30%]",
  },
];

function LogoPaths({ iconData }: { iconData: FloatingIcon }) {
  if (iconData.paths) {
    return iconData.paths.map((p) => <path key={p.d} d={p.d} fill={p.fill} />);
  }
  return <path d={iconData.path} />;
}

const REPEL_RADIUS = 150;
const REPEL_FORCE = 50;

function Icon({ iconData, index }: { iconData: FloatingIcon; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    if (reduceMotion) return;
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If the cursor is close enough, repel the icon
      if (distance < REPEL_RADIUS) {
        const angle = Math.atan2(dy, dx);
        // The closer the cursor, the stronger the repulsion
        const force = (1 - distance / REPEL_RADIUS) * REPEL_FORCE;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        // Return to original position when cursor is away
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, reduceMotion]);

  // 원본은 Math.random()이라 서버/브라우저 값이 달라짐 → 순번으로 고정
  const floatDuration = 5 + ((index * 37) % 50) / 10;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("absolute", iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation */}
      <motion.div
        className="flex size-[var(--spacing-3xl)] items-center justify-center rounded-[var(--radius-xl)] border border-[var(--color-line-soft)] bg-[var(--color-canvas)] shadow-[var(--shadow-float)] md:size-[var(--spacing-4xl)]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -8, 0, 8, 0], x: [0, 6, 0, -6, 0], rotate: [0, 5, 0, -5, 0] }
        }
        transition={{ duration: floatDuration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      >
        <svg
          viewBox={iconData.viewBox}
          fill="currentColor"
          role="img"
          aria-label={iconData.label}
          className="size-[var(--spacing-xl)] md:size-[var(--spacing-2xl)]"
          style={{ color: iconData.color ?? "var(--color-ink)" }}
        >
          <LogoPaths iconData={iconData} />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function FloatingIcons({
  icons = toolStackIcons,
  className,
}: {
  icons?: FloatingIcon[];
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {icons.map((iconData, index) => (
        <Icon key={iconData.id} iconData={iconData} index={index} />
      ))}
    </div>
  );
}

/** 모바일(767px 이하)용: 버튼 아래 4×2 고정 그리드. 위아래로 아주 약하게만 움직인다.
 *  바깥 여백·정렬·표시 여부는 부모(CSS 모듈)에서 정한다. 기존 CSS가 레이어 밖이라 Tailwind 여백 유틸리티를 덮기 때문. */
export function ToolStackGrid({
  icons = toolStackIcons,
  className,
}: {
  icons?: FloatingIcon[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <ul
      aria-label="다루는 툴"
      className={cn(
        "grid w-fit list-none grid-cols-4 gap-[var(--spacing-sm)] p-0",
        className,
      )}
    >
      {icons.map((iconData, index) => (
        <motion.li
          key={iconData.id}
          className="flex size-[var(--spacing-xxl)] items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-line-soft)] bg-[var(--color-canvas)]"
          animate={reduceMotion ? undefined : { y: [0, -4, 0, 4, 0] }}
          transition={{
            duration: 4 + ((index * 37) % 20) / 10,
            delay: index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox={iconData.viewBox}
            fill="currentColor"
            role="img"
            aria-label={iconData.label}
            className="size-[var(--spacing-lg)]"
            style={{ color: iconData.color ?? "var(--color-ink)" }}
          >
            <LogoPaths iconData={iconData} />
          </svg>
        </motion.li>
      ))}
    </ul>
  );
}
