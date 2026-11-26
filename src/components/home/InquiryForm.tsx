"use client";

import { useState, type FormEvent } from "react";
import { TitlePeriod } from "./TitlePeriod";
import styles from "./inquiry-form.module.css";

type Status = "idle" | "sending" | "success" | "error";

const field = (data: FormData, key: string) =>
  String(data.get(key) ?? "").trim();

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // 숨김 필드가 채워졌다면 봇으로 보고 저장하지 않는다.
    if (field(data, "website")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const { supabase } = await import("@/lib/supabase");
      const { error } = await supabase.from("inquiries").insert({
        company: field(data, "company"),
        headcount: field(data, "headcount"),
        curriculum: field(data, "curriculum"),
        meeting_date: field(data, "meeting_date"),
        custom_material: field(data, "custom_material"),
        custom_examples: field(data, "custom_examples"),
        contact: field(data, "contact"),
      });
      if (error) throw error;
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("inquiry insert failed", error);
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} aria-labelledby="inquiry-heading">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>교육·컨설팅 문의</span>
        <h1 id="inquiry-heading">
          기업/기관 강의 신청
          <TitlePeriod />
        </h1>

        {status === "success" ? (
          <div className={styles.done} role="status">
            <p className={styles.doneTitle}>신청이 접수되었습니다.</p>
            <p>남겨주신 연락처로 빠르게 회신 드리겠습니다.</p>
            <a className={styles.button} href="/">
              홈으로 돌아가기
            </a>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>1. 소속 기업을 알려주세요.</span>
              <input
                name="company"
                required
                maxLength={200}
                autoComplete="organization"
              />
            </label>
            <label className={styles.field}>
              <span>2. 수강 인원을 알려주세요.</span>
              <input name="headcount" required maxLength={100} />
            </label>
            <label className={styles.field}>
              <span>
                3. 희망하는 커리큘럼, 구성이 있다면 간단히 공유해 주세요. 간단히
                적어주시면 상담 후 상세 커리큘럼을 제안 드립니다.
              </span>
              <input name="curriculum" required maxLength={2000} />
            </label>
            <label className={styles.field}>
              <span>4. 온라인 미팅 희망 일정을 선택해주세요.</span>
              <input name="meeting_date" type="date" required />
            </label>
            <label className={styles.field}>
              <span>
                5. 강의 자료는 기업 맞춤형으로 진행됩니다. 맞춤형 제작이
                필요하신가요?
              </span>
              <input name="custom_material" required maxLength={500} />
            </label>
            <label className={styles.field}>
              <span>
                6. 수업 자료는 맞춤형 예제로 제작 및 진행됩니다. 맞춤형 제작이
                필요하신가요?
              </span>
              <select name="custom_examples" required defaultValue="">
                <option value="" disabled>
                  선택해주세요
                </option>
                <option value="네">네</option>
                <option value="아니오">아니오</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>
                7. 연락드릴 담당자님 연락처를 남겨주세요.(이메일/전화번호)
              </span>
              <textarea name="contact" required maxLength={500} rows={4} />
            </label>

            <input
              className={styles.honeypot}
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {status === "error" && (
              <p className={styles.error} role="alert">
                전송에 실패했습니다. 다시 시도하거나{" "}
                <a href="mailto:yiseo@figmatutor.info">yiseo@figmatutor.info</a>
                로 직접 메일을 보내주세요.
              </p>
            )}

            <button
              className={styles.button}
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "전송 중..." : "신청하기"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
