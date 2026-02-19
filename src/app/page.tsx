import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ContactDialog } from "@/components/contact-dialog";
import { HeroSection } from "@/components/hero-section";
import Image from "next/image";

/* ───────────────────── Icon Components ───────────────────── */

function InstagramIcon({ className }: { className?: string }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function FigmaIcon({ className }: { className?: string }) {
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22.54 12.43-1.42-.65-8.28 3.76a2 2 0 0 1-1.66 0l-8.29-3.76-1.42.65a1 1 0 0 0 0 1.84l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.85Z" />
      <path d="m22.54 16.43-1.42-.65-8.28 3.76a2 2 0 0 1-1.66 0l-8.29-3.76-1.42.65a1 1 0 0 0 0 1.84l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.85Z" />
    </svg>
  );
}

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

function UsersIcon({ className }: { className?: string }) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

/* ───────────────────── Data ───────────────────── */

const services = [
  {
    icon: FigmaIcon,
    title: "Figma 실무 튜토리얼",
    description:
      "초보부터 실무자까지, 현장에서 바로 쓸 수 있는 Figma 워크플로우를 가르칩니다. Auto Layout, Components, Variables 등 실무 핵심 기능을 실습 중심으로 마스터하세요.",
  },
  {
    icon: LayersIcon,
    title: "디자인 시스템 구축",
    description:
      "실제 프로젝트 기반으로 확장 가능한 디자인 시스템을 함께 만듭니다. 토큰, 컴포넌트, 문서화까지 실무에 바로 적용할 수 있는 실습형 교육입니다.",
  },
  {
    icon: PaletteIcon,
    title: "UI/UX 디자인 실습",
    description:
      "이론이 아닌 실전. 실제 서비스 케이스 스터디를 기반으로 사용자 중심의 인터페이스 디자인 원칙과 노하우를 실습합니다.",
  },
  {
    icon: SparklesIcon,
    title: "AI 디자인 교육",
    description:
      "실무에서 바로 활용할 수 있는 AI 기반 디자인 워크플로우를 교육합니다. AI 도구와 Figma를 결합하여 디자인 생산성을 극대화하는 방법을 배웁니다.",
  },
];

const careerHistory = [
  {
    category: "enterprise",
    icon: BuildingIcon,
    title: "대기업 & 기업 출강",
    description:
      "배달의민족, 현대자동차, 삼성SDS, SK텔레콤, NHN, NEXON 등 국내 주요 기업에서 Figma 실무 교육을 진행했습니다. UX/UI 디자이너, 콘텐츠 디자이너, 기획자, 마케터 대상 맞춤 클래스를 운영합니다.",
    highlights: ["15개+ 대기업 출강", "실무 진행 경험 다수"],
  },
  {
    category: "online",
    icon: MicIcon,
    title: "온라인 강좌 & 멘토링",
    description:
      "Fast Campus, Coloso 등 주요 교육 플랫폼에서 Figma 온라인 강좌를 출시하여 판매 중입니다. 실무 코칭 전문 플랫폼에서 3개월간 멘토로 활동했습니다.",
    highlights: [
      "Fast Campus Figma 강좌 (2022~)",
      "Coloso Figma 강좌 (2022~)",
      "실무코칭 플랫폼 멘토 활동",
    ],
  },
  {
    category: "community",
    icon: UsersIcon,
    title: "Figmapedia & 커뮤니티",
    description:
      "2023년부터 Figma 학습 플랫폼 Figmapedia(figmapedia.com)를 운영하고 있으며, 4,000명 가까운 국내 최대 규모의 Figma & 디자인 커뮤니티를 이끌고 있습니다.",
    highlights: [
      "Figmapedia 운영 (2023~)",
      "4,000명+ 국내 최대 Figma 커뮤니티",
      "디자이너 네트워크 & 지식 공유",
    ],
  },
  {
    category: "books",
    icon: BookIcon,
    title: "피그마 전문 서적 출간",
    description:
      "Figma의 모든 것을 담은 전문 서적을 집필하여 출간했습니다. 입문부터 실무 활용까지, 읽는 것만으로 실습이 되는 책을 지향합니다.",
    highlights: [
      "\"Figma 핵심만 빠르게\" (2021, 전자책)",
      "\"피그마로 시작하는 UI디자인\" (2023)",
      "\"피그마 레시피북\" (2026)",
    ],
  },
];

const workExperience = [
  { role: "UI/UX Product Designer / 대표", company: "high stand", period: "2024~" },
  { role: "UI/UX Product Designer", company: "Grip company", period: "2022~2023" },
  { role: "UI/UX Product Designer", company: "AViD ENF", period: "2021~2022" },
  { role: "UI/UX Product Designer", company: "STunitas", period: "2019~2020" },
  { role: "Web Designer", company: "Thepr communication", period: "2014~2019" },
];

const skills = [
  "Figma",
  "UI Design",
  "UX Design",
  "AI Design",
  "Design System",
  "Auto Layout",
  "Components",
  "Variables",
  "Design Tokens",
  "Wireframing",
  "Responsive Design",
  "Interaction Design",
];

/* ───────────────────── Page ───────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold">
            Figma tutor
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              소개
            </a>
            <a
              href="#career"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              강의이력
            </a>
            <a
              href="#services"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              서비스
            </a>
            <a
              href="#skills"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              전문분야
            </a>
            <a
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              연락하기
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="ghost">
              <a
                href="https://www.youtube.com/channel/UCd7KZCoLd9JK_wNuLHQBPOA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </Button>
            <ContactDialog>
              <Button size="sm">
                <MailIcon className="mr-2 h-4 w-4" />
                문의하기
              </Button>
            </ContactDialog>
          </div>
        </nav>
      </header>

      {/* ── Hero Section ── */}
      <HeroSection />

      <Separator />

      {/* ── About Section ── */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            {/* profile image */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 blur-2xl" />
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-background shadow-2xl md:h-56 md:w-56">
                <Image
                  src="/profile.jpg"
                  alt="피그마튜터 하이서 프로필"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* bio */}
            <div className="flex flex-col gap-6 text-center md:text-left">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-500">
                  About Me
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  피그마튜터 하이서
                </h2>
                <p className="mt-1 text-muted-foreground">
                  @figma_tutor &middot; Product Designer
                </p>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                2014년부터 디자인 실무를 시작하여, 현재는 high stand 대표이자 Figma
                전문 에듀케이터로 활동하고 있습니다. 복잡한 도구를 쉽게, 이론보다는
                실습으로, 현장에서 바로 쓸 수 있는 교육을 지향합니다. Figma 전문
                서적 3권을 출간했으며, 2023년부터{" "}
                <a
                  href="https://www.figmapedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-500 underline underline-offset-4 hover:text-violet-400"
                >
                  Figmapedia
                </a>
                를 운영하고, 4,000명 규모의 국내 최대 Figma &
                디자인 커뮤니티를 이끌고 있습니다.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-start">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">10년+</span>
                  <span className="text-muted-foreground">디자인 실무 경력</span>
                </div>
                <Separator
                  orientation="vertical"
                  className="hidden h-12 md:block"
                />
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">15개+</span>
                  <span className="text-muted-foreground">대기업 출강</span>
                </div>
                <Separator
                  orientation="vertical"
                  className="hidden h-12 md:block"
                />
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">4,000+</span>
                  <span className="text-muted-foreground">커뮤니티 멤버</span>
                </div>
                <Separator
                  orientation="vertical"
                  className="hidden h-12 md:block"
                />
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">3권</span>
                  <span className="text-muted-foreground">Figma 전문 서적</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Career / Lecture History Section ── */}
      <section id="career" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-500">
              Track Record
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              검증된 강의 이력
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              대기업부터 온라인 플랫폼, 전문 서적까지 &mdash; 다양한 채널에서 실무
              중심의 Figma 교육을 제공합니다
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {careerHistory.map((item) => (
              <Card
                key={item.title}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 transition-colors group-hover:bg-violet-500/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Work Experience Timeline */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-xl font-semibold">
              실무 경력
            </h3>
            <div className="mx-auto max-w-2xl space-y-0">
              {workExperience.map((exp, i) => (
                <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-violet-500 bg-background" />
                    {i < workExperience.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  {/* content */}
                  <div className="-mt-0.5 flex-1">
                    <p className="font-semibold">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} &middot; {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Services Section ── */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-500">
              Services
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              실습 중심의 교육
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              듣기만 하는 강의는 그만. 실제 프로젝트 기반의 핸즈온 교육으로
              현장에서 바로 적용할 수 있는 스킬을 익힙니다.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 transition-colors group-hover:bg-violet-500/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Skills Section ── */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-500">
              Skills
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">전문 분야</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              10년 이상의 실무 경험에서 쌓아온 전문 역량입니다
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-5 py-2.5 text-sm font-medium transition-colors hover:bg-violet-500/10 hover:text-violet-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── CTA / Contact Section ── */}
      <section id="contact" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 text-center">
          <MailIcon className="mx-auto mb-6 h-10 w-10 text-violet-500" />
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            교육 문의 & 협업
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            기업 출강, 온라인 강의 협업, 또는 디자인 관련 문의가 있으시면
            이메일로 편하게 연락주세요.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ContactDialog>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                <MailIcon className="mr-2 h-5 w-5" />
                메일 보내기
              </Button>
            </ContactDialog>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.instagram.com/figma_tutor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="mr-2 h-4 w-4" />
                Instagram DM
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Footer ── */}
      <footer className="py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Figma tutor
          </span>
          <p>
            Figma 교육 전문가 &middot; Product Designer &middot; 실습 중심 교육
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/figma_tutor/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCd7KZCoLd9JK_wNuLHQBPOA/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <ContactDialog>
              <button className="transition-colors hover:text-foreground">
                <MailIcon className="h-5 w-5" />
              </button>
            </ContactDialog>
          </div>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Figma tutor. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
