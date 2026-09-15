import Image from "next/image";
import type { Member } from "@/lib/constants";
import { telHref } from "@/lib/phone";

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8C16.6 4.8 15.6 4.7 14.4 4.7c-2.5 0-4.1 1.5-4.1 4.2V11H7.8v3H10.3v7h3.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function MemberCard({ member }: { member: Member }) {
  const { name, company, category, phone, photo, website, facebook, instagram } = member;
  const hasSocial = website || facebook || instagram;

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-rule bg-paper-200/50 p-5 text-center">
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 64 64"
          width="48"
          height="48"
          fill="none"
          aria-hidden="true"
          className="text-graphite-300"
        >
          <circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="26" r="11" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 56c3.5-11 12-16.5 22-16.5S50.5 45 54 56"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      <div className="space-y-1">
        <p className="text-sm font-medium text-ink">{name}</p>
        {company && <p className="text-xs text-graphite">{company}</p>}
        <p className="t-caption text-cobalto">{category}</p>
      </div>

      <a
        href={`tel:${telHref(phone)}`}
        className="text-xs text-graphite underline decoration-rule underline-offset-2 hover:text-ink"
      >
        {phone}
      </a>

      {hasSocial && (
        <div className="flex items-center gap-3 text-graphite">
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sitio web de ${name}`}
              className="hover:text-cobalto"
            >
              <GlobeIcon />
            </a>
          )}
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook de ${name}`}
              className="hover:text-cobalto"
            >
              <FacebookIcon />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${name}`}
              className="hover:text-cobalto"
            >
              <InstagramIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
