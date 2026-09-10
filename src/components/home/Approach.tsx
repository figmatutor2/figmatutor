"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { TitlePeriod } from "./TitlePeriod";
import styles from "./approach.module.css";

const concerns = [
  { role: "기획자", image: "planner", text: "“아이디어를 빠르게 프로토타이핑으로 구현해보고 싶은데, 우리 서비스 톤에 맞게 하기가 어려워요...”" },
  { role: "마케터", image: "marketer", text: "“SNS콘텐츠처럼 반복 업무를 자동화하고 더 중요한 일에 집중하고 싶어요.”" },
  { role: "디자이너", image: "designer", text: "“AI를 내 작업에 어떻게 반영해야 할지 막막해요”" },
];

export function Approach() {
  const bubblesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = bubblesRef.current;
    if (!list) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    list.dataset.animation = "pending";
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        list.dataset.animation = "revealed";
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    const reduceMotion = () => {
      if (motion.matches) {
        list.dataset.animation = "revealed";
        observer.disconnect();
      }
    };
    observer.observe(list);
    motion.addEventListener("change", reduceMotion);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", reduceMotion);
    };
  }, []);

  return (
    <section id="approach" className={styles.section} aria-labelledby="approach-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="approach-heading">새로운 도구를 배우는 일을 넘어<br />내 업무가 달라지는 경험으로<TitlePeriod /></h2>
          <div className={styles.description}>
            <p>기능을 아는 것과 현업에서 활용하는 것 사이에는 간격이 있습니다. 어떤 업무를 줄이고 싶은지, 어느 단계에서 협업이 막히는지부터 함께 살펴봅니다.</p>
            <p>교육의 출발점은 여러분의 실제 업무입니다. 팀의 역할과 숙련도에 맞춰 배우고, 직접 적용하고, 계속 사용할 수 있는 방법을 정리합니다.</p>
          </div>
          <SocialLinks className={styles.social} />
        </div>
        <ul ref={bubblesRef} className={styles.bubbles} aria-label="직군별 업무 고민">
          {concerns.map(({ role, image, text }, index) => (
            <li key={role} className={styles.bubble} style={{ animationDelay: `${index * 350}ms` }}>
              <span className={styles.avatar}><Image src={`/images/approach/${image}.png`} alt="" width={98} height={98} /></span>
              <div><p>{text}</p><span className={styles.role}>{role}</span></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
