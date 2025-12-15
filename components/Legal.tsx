import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Impressum</h1>
      <div className="prose prose-slate prose-sm md:prose-base">
        <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
        <p className="mb-4">
          Tatortreinigung & Entrümpelung 24<br />
          Hauptstraße 197<br />
          55120 Mainz
        </p>

        <h2 className="text-xl font-bold mb-2">Kontakt</h2>
        <p className="mb-4">
          Telefon: 0177 2458195<br />
          E-Mail: info@tatortreinigung-entruempelung24.de
        </p>

        <h2 className="text-xl font-bold mb-2">Umsatzsteuer-ID</h2>
        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 123 456 789 (Muster)
        </p>

        <h2 className="text-xl font-bold mb-2">EU-Streitschlichtung</h2>
        <p className="mb-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </div>
    </div>
  );
};

export const Datenschutz: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Datenschutzerklärung</h1>
      <div className="prose prose-slate prose-sm md:prose-base space-y-6">
        <p>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.</p>

        <h3 className="text-xl font-bold">1. Zugriffsdaten und Hosting</h3>
        <p>Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert.</p>

        <h3 className="text-xl font-bold">2. Datenerhebung und -verwendung zur Vertragsabwicklung</h3>
        <p>Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Kontaktaufnahme (z.B. per Kontaktformular oder E-Mail) freiwillig mitteilen. Pflichtfelder werden als solche gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur Bearbeitung Ihrer Kontaktaufnahme benötigen.</p>

        <h3 className="text-xl font-bold">3. Kontaktmöglichkeiten und Ihre Rechte</h3>
        <p>Als Betroffener haben Sie folgende Rechte:</p>
        <ul className="list-disc pl-5">
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
        </ul>
        <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte direkt an uns über die Kontaktdaten in unserem Impressum.</p>
      </div>
    </div>
  );
};

export const AGB: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
      <div className="prose prose-slate prose-sm md:prose-base space-y-6">
        <p className="text-slate-500 italic">Stand: {new Date().getFullYear()}</p>
        
        <h3 className="text-xl font-bold">1. Geltungsbereich</h3>
        <p>Für alle Aufträge an Tatortreinigung & Entrümpelung 24 gelten die nachfolgenden AGB. Abweichende Bedingungen des Auftraggebers erkennen wir nicht an, es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.</p>

        <h3 className="text-xl font-bold">2. Vertragsabschluss</h3>
        <p>Der Vertrag kommt durch die Annahme des Angebots durch den Kunden zustande. Angebote sind freibleibend, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.</p>

        <h3 className="text-xl font-bold">3. Leistungsumfang</h3>
        <p>Der Umfang der vertraglichen Leistungen ergibt sich aus dem schriftlichen Angebot bzw. der Auftragsbestätigung. Nachträgliche Änderungen bedürfen der Schriftform.</p>

        <h3 className="text-xl font-bold">4. Preise und Zahlungsbedingungen</h3>
        <p>Es gelten die vereinbarten Preise. Sofern nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar.</p>

        <h3 className="text-xl font-bold">5. Gewährleistung und Haftung</h3>
        <p>Wir führen unsere Arbeiten mit größter Sorgfalt und nach aktuellen Hygienestandards durch. Sollten dennoch Mängel auftreten, sind diese unverzüglich anzuzeigen.</p>
        
        <p className="text-xs text-slate-400 mt-8">* Dies ist ein Mustertext für AGB. Bitte lassen Sie Ihre AGB anwaltlich prüfen.</p>
      </div>
    </div>
  );
};