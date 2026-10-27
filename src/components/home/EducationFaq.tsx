"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { educationFaqs } from "./education-content";
import styles from "./workflow-home.module.css";

export function EducationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();
  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-heading">
      <div className={styles.sectionHeading}>
        <h2 id="faq-heading">AI 교육 하기 전에<br />궁금한 점이 있으신가요?</h2>
      </div>
      <div className={styles.faqList}>
        {educationFaqs.map(({ question, answer, href, linkLabel }, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${id}-question-${index}`;
          const panelId = `${id}-answer-${index}`;

          return (
            <article className={styles.faqItem} key={question}>
              <h3>
                <button
                  id={triggerId}
                  className={styles.faqTrigger}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(current => current === index ? null : index)}
                >
                  <span>{question}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </button>
              </h3>
              <div id={panelId} className={styles.faqPanel} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
                <p>{answer}</p>
                {href && <Link href={href}>{linkLabel}</Link>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
