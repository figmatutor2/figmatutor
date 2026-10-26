import Image from "next/image";
import profile from "@/data/profile.json";
import { SocialLinks } from "./SocialLinks";
import { TitlePeriod } from "./TitlePeriod";
import styles from "./about.module.css";

export function About() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.inner}>
        <figure className={styles.portrait}>
          <Image
            src="/images/about/profile.webp"
            alt={`${profile.name} 대표 프로필 사진`}
            width={860}
            height={1076}
            sizes="(max-width: 900px) min(100vw - 48px, 420px), 400px"
          />
        </figure>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>대표 소개</span>
          <h1 id="about-heading">
            {profile.alias}
            <br />
            {profile.name}
            <TitlePeriod />
          </h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <SocialLinks className={styles.social} />
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <h3>경력</h3>
          <ul className={styles.list}>
            {profile.career.map((item) => (
              <li key={item.organization}>
                <span>{item.period}</span>
                <strong>{item.organization}</strong>
                <span>{item.role}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>저서</h3>
          <ul className={styles.list}>
            {profile.books.map((book) => (
              <li key={book.title}>
                <span>{book.year}</span>
                <strong>{book.title}</strong>
                <span>{book.publisher}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>학력 · 온라인 강의</h3>
          <ul className={styles.list}>
            <li>
              <span>학력</span>
              <strong>{profile.education}</strong>
            </li>
            <li>
              <span>온라인 강의</span>
              <strong>{profile.courses.join(" · ")}</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
