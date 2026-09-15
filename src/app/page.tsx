import { DraftStudioLogo } from "@/components/DraftStudioLogo";
import { MemberCard } from "@/components/MemberCard";
import { BNI_DIRECTORY_URL, DRAFT_STUDIO_URL, MEMBERS } from "@/lib/constants";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <header className="flex justify-center border-b border-rule px-6 py-6">
        <DraftStudioLogo />
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 py-12 text-center sm:py-16">
        <p className="t-caption text-cobalto">BNI Metamorfosis · León</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tightest text-ink sm:text-5xl">
          Directorio · Capítulo Metamorfosis
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-graphite sm:text-lg">
          Conoce a los miembros de BNI Guanajuato, capítulo León y alrededores.
        </p>

        <section
          aria-label="Miembros del capítulo"
          className="mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </section>
        <p className="mt-6 t-caption text-graphite-300">
          El directorio oficial es la fuente viva — consúltalo para ver altas, bajas y cambios recientes
        </p>

        <a
          href={BNI_DIRECTORY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-ink px-8 py-4 text-base font-medium text-paper transition-colors hover:bg-ink-700 sm:text-lg"
        >
          Ver directorio oficial
        </a>
      </main>

      <footer className="border-t border-rule px-6 py-6 text-center">
        <p className="t-caption text-graphite">
          Hecho por{" "}
          <a
            href={DRAFT_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-2 hover:text-cobalto"
          >
            Draft Studio
          </a>{" "}
          · {year}
        </p>
      </footer>
    </div>
  );
}
