import styles from "./floating-cta.module.css";

const HUDDLING_CLUB_URL = "https://www.huddling.club/shop_view?idx=14";

export function FloatingCta() {
  return <a className={styles.cta} href={HUDDLING_CLUB_URL} target="_blank" rel="noopener noreferrer" aria-label="허들링 클럽 3기 모집 안내 보기 (새 창)">
    <span className={styles.label}>허들링<br />클럽</span>
    <span className={styles.badge}>3기 모집</span>
  </a>;
}
