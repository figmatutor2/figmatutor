import styles from "./floating-cta.module.css";

const HUDDLING_CLUB_APPLY_URL = "https://www.huddling.club/shop_view?idx=15";

export function FloatingCta() {
  return (
    <a
      className={styles.cta}
      href={HUDDLING_CLUB_APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="허들링 클럽 4기 모집 중, 신청하기 (새 창)"
    >
      <span className={styles.label}>
        허들링
        <br />
        클럽
      </span>
      <span className={styles.badge}>4기 모집중</span>
    </a>
  );
}
