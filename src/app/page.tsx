import { FloatingCta } from "@/components/home/FloatingCta";
import { EducationStructuredData } from "@/components/home/EducationStructuredData";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { WorkflowHome } from "@/components/home/WorkflowHome";

export default function HomePage() {
  return (
    <>
      <EducationStructuredData />
      <HomeNavigation />
      <main id="main-content"><WorkflowHome /></main>
      <FloatingCta />
    </>
  );
}
