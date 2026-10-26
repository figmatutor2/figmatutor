import styles from "./floating-cta.module.css";

const HUDDLING_CLUB_WAITLIST_URL = "https://tally.so/r/aQVM9q";

export function FloatingCta() {
  return (
    <a
      className={styles.cta}
      href={HUDDLING_CLUB_WAITLIST_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="허들링 클럽 4기 알림 신청하기 (새 창)"
    >
      <span className={styles.label}>
        허들링
        <br />
        클럽
      </span>
      <span className={styles.badge}>4기 알림 신청</span>
    </a>
  );
}
