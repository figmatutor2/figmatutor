"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gallery from "@/data/gallery.json";
import styles from "./lecture-gallery.module.css";

const photos = gallery.photos;

export function LectureGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) dialog.showModal();
  }, [index]);

  const step = (delta: number) =>
    setIndex((i) =>
      i === null ? i : (i + delta + photos.length) % photos.length,
    );

  return (
    <div className={styles.gallery}>
      <div className={styles.intro}>
        <h3>강의 현장</h3>
        <p>
          직접 진행한 강의의 현장 기록입니다.
          <br />
          수강생 얼굴은 블러 처리했습니다.
        </p>
      </div>
      <ul className={styles.strip} aria-label="강의 현장 사진">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              className={styles.thumb}
              onClick={() => setIndex(i)}
              aria-label={`${photo.organization} ${photo.period} 사진 크게 보기`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 540px) 72vw, 320px"
              />
            </button>
            <p className={styles.caption}>
              <strong>{photo.organization}</strong>
              <span>{photo.period}</span>
            </p>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="강의 현장 사진 크게 보기"
        onClose={() => setIndex(null)}
        onClick={(event) =>
          event.target === event.currentTarget && setIndex(null)
        }
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {current && (
          <figure className={styles.figure}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
            />
            <figcaption>
              <strong>{current.organization}</strong>
              <span>{current.period}</span>
              <span className={styles.count}>
                {index! + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button
          type="button"
          className={`${styles.control} ${styles.close}`}
          onClick={() => setIndex(null)}
          aria-label="닫기"
        >
          <X size={20} />
        </button>
        <button
          type="button"
          className={`${styles.control} ${styles.prev}`}
          onClick={() => step(-1)}
          aria-label="이전 사진"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          className={`${styles.control} ${styles.next}`}
          onClick={() => step(1)}
          aria-label="다음 사진"
        >
          <ChevronRight size={22} />
        </button>
      </dialog>
    </div>
  );
}
