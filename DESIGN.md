---
# 디자인 토큰 — 원본은 src/app/tokens.css. 값이 바뀌면 이 파일도 함께 고친다.
name: Figmatutor (HighStand.)
colors:
  canvas: "oklch(1 0 0)" # --color-canvas
  paper: "oklch(0.979 0 250)" # --color-paper
  ink: "oklch(0.235 0 260)" # --color-ink (본문 글자)
  muted: "oklch(0.47 0 260)" # --color-muted (보조 글자)
  action: "oklch(0.244 0 0)" # --color-action (버튼 등 실행 요소)
  brand: "oklch(0.494 0.285 266.6)" # --color-brand (강조·링크 전용)
  line: "oklch(0.86 0 255)" # --color-line
  line-soft: "oklch(0.929 0.005 264)" # --color-line-soft
typography:
  font-family: "Pretendard" # --font-sans
  body: { size: 15px, line-height: 1.6, weight: 400 } # --text-body / --leading-normal
  heading: { size: "clamp(28px, 3vw, 40px)", line-height: 1.25, weight: 700 } # --text-display
  min-size: 12px # --text-fine
spacing: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] # px, --spacing-* 토큰만
radius: { sm: 8px, lg: 18px, xl: 24px, pill: 9999px, full: 50% } # --radius-*
shadow:
  float: "0 10px 24px oklch(0.235 0 260 / 0.28)" # --shadow-float, 이것 하나뿐
---

# DESIGN.md

UI를 만들거나 고치기 전에 이 파일을 읽는다. 규칙과 다르게 해야 하면 먼저 묻는다.

## 개요

- 누가 쓰나: 디자이너·PM·개발자 등 IT 실무자, 팀 교육·컨설팅을 검토하는 리더
- 브랜드 느낌: 명료한, 실무적인, 주도적인
- 레퍼런스: Apple (절제된 여백, 정돈된 위계). 다른 레퍼런스는 쓰지 않는다.

## 색

- **색은 `var(--color-*)` 토큰만 쓴다. hex·rgb·hsl·oklch 값을 직접 쓰지 않는다.**
  Why: "토큰을 사용해야 해." 반복해서 한 지적
  <!-- 2026-11-23 · "토큰을 사용해야해" -->
- **`--color-brand`(파랑)는 강조 점과 링크에만 쓴다. 버튼 배경·넓은 면·아이콘 채우기에는 쓰지 않는다.**
  Why: 브랜드 파랑은 포인트 역할. 실행 버튼은 `--color-action`(검정)
  <!-- 2026-11-23 · "강조 및 링크에만" -->
- **토큰 팔레트에 없는 색(보라·하늘색 등)은 쓰지 않는다.**
  Why: 사용자가 "없애야 함"으로 확인. 장식적인 AI 그래픽을 피한다는 PRODUCT.md와도 같다.
  <!-- 2026-11-23 · "없애야 함" -->

## 글자

- **폰트는 Pretendard(`var(--font-sans)`)만 쓴다.**
  Why: 프로젝트 기본 폰트. 다른 폰트로 바뀌면 브랜드 인상이 흐려진다.
- **글자 크기·자간·행간은 `--text-*`, `--tracking-*`, `--leading-*` 토큰만 쓴다.**
  Why: "토큰을 사용해야 해"
- **본문은 15px(`--text-body`) 이상, 어떤 글자도 12px(`--text-fine`)보다 작게 쓰지 않는다.**
  Why: "글자 너무 작아." 반복해서 한 지적
  <!-- 2026-11-23 · "글자 너무 작아" -->

## 간격과 레이아웃

- **여백·간격은 `--spacing-*` 토큰만 쓴다. px 값을 직접 쓰지 않는다.**
  Why: "토큰을 사용해야 해"
- **내용을 카드(배경색이나 테두리가 있는 박스)로 감싸지 않는다. 묶음은 여백·제목·구분선(`--color-line-soft`)으로 나눈다.**
  Why: "카드로 감싸지 마." 반복해서 한 지적. PRODUCT.md에도 "모든 내용을 동일한 카드로 감싸는 레이아웃"을 피할 것으로 적혀 있다.
  <!-- 2026-11-23 · "카드로 감싸지마" -->

## 컴포넌트

- **모서리는 `--radius-*` 토큰만 쓴다. 버튼은 `--radius-pill`.**
  Why: 현재 코드에서 버튼이 pill 형태로 통일되어 있다.
- **그림자는 `--shadow-float` 하나만, 떠 있는 요소(플로팅 버튼 등)에만 쓴다.**
  Why: Apple식 절제. 현재 코드에서 그림자를 쓰는 곳이 한 군데뿐이다.

## 접근성

- **글자 대비는 4.5:1 이상(WCAG AA). 큰 글자(24px 이상 또는 19px 굵게)는 3:1 이상.**
  Why: 사용자가 기준으로 확정
  <!-- 2026-11-23 · "기준으로 둬" -->
- **누를 수 있는 요소는 `--size-touch`(44px) 이상. 키보드 포커스는 항상 보이게, 모션 줄이기 설정을 지킨다.**
  Why: PRODUCT.md 접근성 항목

## 하지 말 것

- 그라데이션, 장식적인 AI 그래픽(파동·빛번짐 배경 등)
- 근거 없는 성과 숫자, 출처 확인 안 된 고객 로고
- 툴 사용법만 나열한 강좌 쇼핑몰식 구성

## 학습된 규칙

<!-- 기억 모드가 승인받은 규칙을 여기에 추가한다 -->
