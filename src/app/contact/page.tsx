import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { InquiryForm } from "@/components/home/InquiryForm";

const title = "기업/기관 강의 신청 | 하이스탠드";
const description =
  "기업·기관 맞춤 AI & Figma 실무 교육과 컨설팅을 신청하세요. 남겨주신 내용을 바탕으로 상담 후 상세 커리큘럼을 제안 드립니다.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://figmatutor.info/contact" },
  openGraph: {
    title,
    description,
    url: "https://figmatutor.info/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <HomeNavigation />
      <main id="main-content">
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
