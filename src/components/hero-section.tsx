"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactDialog } from "@/components/contact-dialog";
import { WavyBackground } from "@/components/ui/wavy-background";

/* ── Inline Icons (client component needs its own) ── */

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ── Data ── */

const enterpriseClients = [
  "배달의민족",
  "현대자동차",
  "키움증권",
  "SK텔레콤",
  "호텔신라",
  "삼성SDS",
  "NHN",
  "NHN ad",
  "NH투자증권",
  "카카오 스타일",
  "데이온 컴퍼니",
  "버킷 플레이스",
  "에스티유니타스",
  "SBS",
  "NEXON",
];

/* ── Component ── */

export function HeroSection() {
  return (
    <WavyBackground
      containerClassName="relative overflow-hidden min-h-[90vh]"
      className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center"
      colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9", "#6366f1"]}
      waveOpacity={0.3}
      speed="slow"
      blur={12}
    >
      <Badge
        variant="secondary"
        className="gap-1.5 border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
      >
        <SparklesIcon className="h-3.5 w-3.5" />
        대기업이 선택한 Figma 강사
      </Badge>

      <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        실무에서 바로 쓰는
        <br />
        Figma 실전 교육
      </h1>

      <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
        10년차 프로덕트 디자이너가 직접 가르치는 실습 중심 Figma 교육.
        배달의민족, 현대자동차, 삼성SDS 등 15개+ 대기업 출강 경험으로 검증된
        커리큘럼을 만나보세요.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <ContactDialog>
          <Button
            size="lg"
            className="bg-white text-black shadow-lg hover:bg-white/90"
          >
            <MailIcon className="mr-2 h-5 w-5" />
            교육 문의하기
          </Button>
        </ContactDialog>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white/30 text-white hover:bg-white/10"
        >
          <a href="#career">
            강의 이력 보기
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* enterprise logo strip */}
      <div className="mt-8 w-full max-w-3xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/40">
          함께한 기업들
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {enterpriseClients.map((client) => (
            <span
              key={client}
              className="text-sm font-medium text-white/30"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </WavyBackground>
  );
}
