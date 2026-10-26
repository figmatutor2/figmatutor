import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { Footer } from "@/components/home/Footer";
import { HomeNavigation } from "@/components/home/HomeNavigation";

const title = "대표 소개 · 피그마 튜터 하이서 | 하이스탠드";
const description = "하이스탠드 대표이자 UI/UX 프로덕트 디자이너 피그마 튜터 하이서의 경력, 저서, 학력과 온라인 강의를 소개합니다.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://figmatutor.info/about" },
  openGraph: { title, description, url: "https://figmatutor.info/about", type: "profile", images: [{ url: "https://figmatutor.info/images/about/profile.webp", width: 860, height: 1076, alt: "피그마 튜터 하이서 프로필 사진" }] },
};

export default function AboutPage() {
  return <><HomeNavigation /><main id="main-content"><About /></main><Footer /></>;
}
