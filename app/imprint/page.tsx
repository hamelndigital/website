import type { Metadata } from "next";
import { LegalDocument, PendingValue } from "@/components/legal-document";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name}.`,
};

export default function ImprintPage() {
  return (
    <LegalDocument title="Impressum">
      <p className="text-muted">
        Hinweis: Die mit <PendingValue>…</PendingValue> markierten Angaben sind
        Pflichtangaben, die vor Veröffentlichung dieser Website ergänzt und
        geprüft werden müssen.
      </p>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {siteConfig.name} <PendingValue>Rechtsform</PendingValue>
        <br />
        <PendingValue>Straße und Hausnummer</PendingValue>
        <br />
        <PendingValue>Postleitzahl und Ort</PendingValue>
        <br />
        <PendingValue>Land</PendingValue>
      </p>

      <h2>Vertretung</h2>
      <p>
        Vertretungsberechtigt:{" "}
        <PendingValue>
          Name der vertretungsberechtigten Person(en), z.&nbsp;B.
          Geschäftsführung
        </PendingValue>
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        <br />
        Telefon: <PendingValue>Telefonnummer, falls vorhanden</PendingValue>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Eintragung im Handelsregister.
        <br />
        Registergericht: <PendingValue>Registergericht</PendingValue>
        <br />
        Registernummer: <PendingValue>Registernummer</PendingValue>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a
        Umsatzsteuergesetz: <PendingValue>USt-IdNr.</PendingValue>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        <PendingValue>Name</PendingValue>
        <br />
        <PendingValue>Anschrift</PendingValue>
      </p>
    </LegalDocument>
  );
}
