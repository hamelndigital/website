import type { Metadata } from "next";
import { LegalDocument, PendingValue } from "@/components/legal-document";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <LegalDocument title="Datenschutzerklärung">
      <p className="text-muted">
        Hinweis: Die mit <PendingValue>…</PendingValue> markierten Angaben
        müssen vor Veröffentlichung dieser Website ergänzt und rechtlich
        geprüft werden.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {siteConfig.name} <PendingValue>Rechtsform</PendingValue>
        <br />
        <PendingValue>Straße und Hausnummer</PendingValue>
        <br />
        <PendingValue>Postleitzahl und Ort</PendingValue>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      </p>

      <h2>2. Hosting und Server-Logdaten</h2>
      <p>
        Diese Website wird bei <PendingValue>Hosting-Anbieter</PendingValue>{" "}
        gehostet. Beim Aufruf der Website verarbeitet der Hosting-Anbieter
        automatisch Verbindungsdaten — insbesondere IP-Adresse, Datum und
        Uhrzeit des Zugriffs, abgerufene Datei, Referrer-URL und User-Agent —
        in Server-Logdateien. Die Verarbeitung erfolgt auf Grundlage von
        Art. 6 Abs. 1 lit. f DSGVO aufgrund des berechtigten Interesses am
        sicheren und stabilen Betrieb der Website.
      </p>
      <p>
        <PendingValue>
          Speicherdauer der Logdaten, ggf. Auftragsverarbeitungsvertrag und
          ggf. Drittlandtransfer des Hosting-Anbieters ergänzen
        </PendingValue>
      </p>

      <h2>3. Verzicht auf Cookies, Tracking und eingebettete Inhalte</h2>
      <p>Diese Website verwendet:</p>
      <ul>
        <li>keine Cookies und keine vergleichbaren Speichertechnologien,</li>
        <li>keine Analyse- oder Tracking-Werkzeuge,</li>
        <li>
          keine eingebetteten Inhalte von Drittanbietern (z.&nbsp;B. extern
          geladene Schriftarten, Videos, Karten oder Social-Media-Plugins).
        </li>
      </ul>
      <p>
        Sämtliche Schriftarten und sonstigen Dateien werden lokal von dieser
        Website bereitgestellt. Beim Besuch der Website werden daher keine
        Daten an Dritte übermittelt, soweit sie nicht aus dem Hosting
        (Abschnitt&nbsp;2) resultieren.
      </p>
      <p className="text-muted">
        <PendingValue>
          Vor Veröffentlichung prüfen, ob diese Aussagen mit dem tatsächlichen
          technischen Einsatz übereinstimmen
        </PendingValue>
      </p>

      <h2>4. Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen
        übermittelten Daten — insbesondere Ihre E-Mail-Adresse und den Inhalt
        Ihrer Nachricht — zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage mit einem Vertrag
        zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden
        gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind
        und keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben gegenüber dem Verantwortlichen insbesondere folgende Rechte:
      </p>
      <ul>
        <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung der Daten (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
        <li>
          Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), sowie
        </li>
        <li>
          Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO).
        </li>
      </ul>

      <h2>6. Aktualität dieser Erklärung</h2>
      <p>
        Stand: <PendingValue>Datum der letzten Aktualisierung</PendingValue>
      </p>
    </LegalDocument>
  );
}
