"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "./Hero";
import { LectureHistory } from "./LectureHistory";
import history from "@/data/lectures.json";
import { Footer } from "./Footer";
import { CONTACT_URL } from "./contact";
import { TitlePeriod } from "./TitlePeriod";
import styles from "./workflow-home.module.css";

const programs = [
  { number: "01", title: "AI를 일의 흐름 안으로", topic: "AI 워크플로우 · 업무 자동화", description: "리서치, 아이디어 정리, 문서 작성. 반복되는 업무를 찾아 AI를 연결하고, 결과를 검토하는 기준까지 함께 설계합니다.", audience: "디자이너 · PM · IT 실무자", output: "업무별 AI 활용 흐름과 검토 체크리스트" },
  { number: "02", title: "다시 만들지 않는 디자인", topic: "Figma · 디자인 시스템", description: "개별 화면 제작을 넘어 컴포넌트와 변수, 라이브러리 운영 방식을 정리합니다. 팀이 함께 쓰고 유지할 수 있는 작업 기준을 만듭니다.", audience: "디자이너 · 디자인 리드", output: "재사용 가능한 컴포넌트 구조와 운영 기준" },
  { number: "03", title: "전달에서 끊기지 않는 협업", topic: "기획 · 디자인 · 개발 연결", description: "요구사항부터 프로토타입, 개발 전달까지. 직군 사이에서 반복되는 설명과 수정 요청을 살펴보고 협업 과정을 정리합니다.", audience: "PM · 디자이너 · 개발자", output: "핸드오프 체크리스트와 팀 협업 가이드" },
];
const resources = [
  ["AI & Figma 실무 팁", "막히는 작업에서 바로 찾아보는 Q&A", "/figma-info"],
  ["프롬프트 피디아", "업무에 맞게 바꿔 쓰는 프롬프트", "/prompt-pedia"],
  ["디자인 리소스", "템플릿과 튜토리얼로 시작하는 실습", "/figma-resource"],
  ["UX/UI 스터디", "설계의 근거를 넓히는 아티클과 용어", "/uxui-study"],
  ["AI 리포트", "실무에 연결해 읽는 AI 소식", "/ai-report"],
  ["키오스크 레퍼런스", "실제 사용 맥락을 살펴보는 화면 사례", "/kiosk-food"],
];

export function WorkflowHome() {
  return (
    <div className={styles.home}>
      <Hero />

      <div className={styles.clientStrip}><p>삼성SDS · 카카오 · NHN · 현대자동차 · 카카오뱅크 등<br /><strong>{history.lectures.length}개 조직의 강의 진행 이력</strong></p><a href="#experience">강의·자문 이력 보기 <ArrowDown size={16} /></a></div>

      <section id="approach" className={styles.approach} aria-labelledby="approach-heading">

        <div><h2 id="approach-heading">새로운 도구를 배우는 일을 넘어<br />내 업무가 달라지는 경험으로<TitlePeriod /></h2><p>기능을 아는 것과 현업에서 활용하는 것 사이에는 간격이 있습니다. 어떤 업무를 줄이고 싶은지, 어느 단계에서 협업이 막히는지부터 함께 살펴봅니다.</p><p>교육의 출발점은 여러분의 실제 업무입니다. 팀의 역할과 숙련도에 맞춰 배우고, 직접 적용하고, 계속 사용할 수 있는 방법을 정리합니다.</p><div className={styles.signature}><Image src="/images/team/figma_tutor.png" alt="피그마 튜터 프로필" width={48} height={48} /><div><strong>피그마 튜터</strong><span>워크플로우 교육 · 컨설팅</span></div></div></div>
      </section>

      <section id="programs" className={styles.programs} aria-labelledby="programs-heading">
        <div className={styles.sectionHeading}><div><h2 id="programs-heading">디자이너와 IT 팀을 위한 실무 맞춤 교육<TitlePeriod /></h2></div><p>팀의 과제와 숙련도에 따라<br />교육과 컨설팅의 범위를 함께 정합니다.</p></div>
        <div>{programs.map(program => <article className={styles.program} key={program.number}><span className={styles.programNumber}>{program.number}</span><div><span className={styles.topic}>{program.topic}</span><h3>{program.title}</h3><p>{program.description}</p></div><div className={styles.programDetails}><span>함께하는 대상</span><p>{program.audience}</p><span>함께 만들 결과물</span><p>{program.output}</p><a href={CONTACT_URL}>이 주제로 문의하기 <ArrowUpRight size={16} /></a></div></article>)}</div>
      </section>

      <LectureHistory />

      <section className={styles.process} aria-labelledby="process-heading"><div className={styles.sectionHeading}><div><h2 id="process-heading">배운 다음 날에도<br />이어지는 변화<TitlePeriod /></h2></div><p>한 번의 강의부터 팀 단위 컨설팅까지.<br />필요한 깊이에 맞춰 함께합니다.</p></div><ol className={styles.processSteps}>{[
        ["진단", "지금의 업무를 이해합니다", "참여 직군, 사용하는 도구, 반복되는 작업과 협업의 어려움을 살펴봅니다."],
        ["설계와 교육", "우리 팀의 사례로 배웁니다", "실제 과제를 바탕으로 커리큘럼을 구성하고, 적용 방법을 함께 실습합니다."],
        ["적용과 정리", "계속 쓸 수 있게 남깁니다", "실습 결과를 검토하고 템플릿과 가이드로 정리합니다. 후속 지원 범위는 협의합니다."],
      ].map(([label, title, description], i) => <li key={label}><div className={styles.processLabel}><span>0{i + 1} / {label}</span>{i < 2 && <ArrowRight size={20} />}</div><h3>{title}</h3><p>{description}</p></li>)}</ol></section>

      <section id="resources" className={styles.resources} aria-labelledby="resources-heading"><div className={styles.sectionHeading}><div><h2 id="resources-heading">오늘의 업무부터, 한 걸음 더<TitlePeriod /></h2></div><p>실무에서 바로 꺼내 쓰는 지식과 도구.<br />필요한 정보를 찾아보세요.</p></div><a className={styles.resourceCta} href="https://huddling.ai/">실무자료실에서 검색하기 <ArrowUpRight size={19} /></a><div className={styles.resourceList}>{resources.map(([title, description, href]) => <a key={href} href={`https://huddling.ai${href}`}><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={20} /></a>)}</div><div className={styles.community}><p>함께 배우고 실험하는 동료가 필요하다면</p><a href="https://huddling.club/">허들링 클럽 둘러보기 <ArrowUpRight size={17} /></a></div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-heading"><h2 id="contact-heading">진짜 일을 잘 하는 팀은<br />늘 더 잘하는 방법을 고민합니다<TitlePeriod /></h2><p>지금 겪고 있는 업무의 어려움을 들려주세요.<br />팀에 맞는 교육과 컨설팅의 방향을 함께 찾겠습니다.</p><a href={CONTACT_URL} className={styles.contactButton}>교육·컨설팅 문의하기 <ArrowUpRight size={21} /></a><div className={styles.contactNote}><span>참여 직군 · 개선하고 싶은 업무 · 희망 일정</span><span>문의 폼에 남겨주시면 구체적으로 논의할 수 있습니다.</span></div><a className={styles.email} href="mailto:yiseo@figmatutor.info">yiseo@figmatutor.info</a></section>
      <Footer />
    </div>
  );
}
