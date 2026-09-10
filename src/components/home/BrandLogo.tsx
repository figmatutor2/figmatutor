import Image from "next/image";

export function BrandLogo({ compact = false, priority = false }: { compact?: boolean; priority?: boolean }) {
  return <Image src="/logo.svg" alt="High" width={compact ? 42 : 100} height={compact ? 18 : 44} priority={priority} />;
}
