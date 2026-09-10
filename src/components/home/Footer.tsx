import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const socialLinks = [
  { label: "인스타그램", href: "https://www.instagram.com/figma_tutor", icon: "instagram" },
  { label: "유튜브", href: "https://www.youtube.com/@figma_tutor", icon: "youtube" },
  { label: "쓰레드", href: "https://www.threads.com/@figma_tutor", icon: "threads" },
  { label: "링크드인", href: "https://www.linkedin.com/in/figmatutor", icon: "linkedin" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.branding}>
          <Link href="/" aria-label="HighStand 홈" className={styles.logo}>
            <Image src="/images/footer/logo.svg" alt="HighStand" width={164} height={28} />
          </Link>
          <dl className={styles.details}>
            <div><dt>대표자</dt><dd>하이서</dd></div>
            <div><dt>사업장 주소</dt><dd><address>경기도 성남시 중원구 광명로 377 신구대학교 창업관 808호</address></dd></div>
            <div><dt>사업자 등록번호</dt><dd>430-36-01441</dd></div>
          </dl>
        </div>
        <div className={styles.meta}>
          <nav className={styles.social} aria-label="SNS 링크">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={icon} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (새 탭)`}>
                <Image src={`/images/footer/${icon}.svg`} alt="" width={40} height={40} />
              </a>
            ))}
          </nav>
          <p className={styles.copyright}>©2026 Highstand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
