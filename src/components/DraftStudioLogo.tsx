import Link from "next/link";
import Image from "next/image";
import { DRAFT_STUDIO_URL } from "@/lib/constants";

export function DraftStudioLogo({ variant = "color" }: { variant?: "color" | "blanco" }) {
  const src =
    variant === "blanco"
      ? "/draftstudio-logo-horizontal-blanco.svg"
      : "/draftstudio-logo-horizontal-color.svg";

  return (
    <Link
      href={DRAFT_STUDIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Draft Studio — abre draftstudio.mx en una nueva pestaña"
      className="inline-flex opacity-90 transition-opacity hover:opacity-100"
    >
      <Image src={src} alt="Draft Studio" width={140} height={35} priority />
    </Link>
  );
}
