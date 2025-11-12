<article>
  <header>
    <h1>Redaktionelles Beispiel „KI-Eichhörnchenfütterung“</h1>
    <p>Offizielles BSFZ-Beispiel für die textliche Ausarbeitung eines FZL-Antrags.</p>
  </header>

  <section>
    <h2>1. Titel des Vorhabens (max. 200 Zeichen)</h2>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div class="highlight-block">
        <strong>Gute Beschreibung</strong>
        <p>KI-basierter Fütterungsautomat zur Erkennung und Fütterung einzelner Individuen von Eichhörnchen.</p>
      </div>
      <div class="highlight-block bg-brand-soft/80">
        <strong>Schlechte Beschreibung</strong>
        <p>Entwicklung der Futterstation TX108A.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>2. Ziel des Vorhabens (max. 1.500 Zeichen)</h2>
    <p>
      Frage im Antrag: „Was ist das Ziel Ihres Vorhabens? Welche Herausforderung soll gelöst bzw. welche Wissenslücke geschlossen werden?“
    </p>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="highlight-block">
        <strong>Gute Beschreibung</strong>
        <p>
          KI-basierte Eichhörnchen-Fütterungsstation, die Individuen erkennt und gezielt Spezialfutter ausgibt.
          Aufbau inkl. Sensoren, Kameras, Steuerung wird neu konzipiert; YOLO-Modelle werden angepasst,
          um trotz minimaler äußerer Unterschiede eine schnelle Erkennung zu ermöglichen.
        </p>
        <p>
          Hardware: Wildtierkamera (Tag) + IR-Kamera (Dämmerung) mit Bewegungssensoren.
          Ablauf: Bewegungsdetektion → Bildaufnahme → Server → Deep-Learning-Auswertung →
          Futterfreigabe bei ≥ 90 % Erkennungssicherheit.
        </p>
      </div>
      <div class="highlight-block bg-brand-soft/80">
        <strong>Schlechte Beschreibung</strong>
        <p>
          Allgemeine Projektbeschreibung ohne technische Details; Fokus auf Beliebtheit von Eichhörnchen und Marktziele.
          Fehlende Darstellung der KI-Methodik (nur Schlagworte, keine Lösung der Wissenslücke).
        </p>
      </div>
    </div>
  </section>

  <section>
    <h2>3. Abgrenzung vom Stand der Technik (max. 500 Zeichen)</h2>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div class="highlight-block">
        <strong>Gute Beschreibung</strong>
        <p>
          Mechanische Futterstationen öffnen nur bei Bedarf, unterscheiden keine Individuen.
          Die Kombination aus Sensorik, Station und KI-Steuerung hebt sich deutlich ab.
        </p>
      </div>
      <div class="highlight-block bg-brand-soft/80">
        <strong>Schlechte Beschreibung</strong>
        <p>
          Allgemeine Marketingaussagen („hoch innovativ“), kein Vergleich zum Stand der Technik,
          keine Beschreibung der eingesetzten Technologien.
        </p>
      </div>
    </div>
  </section>

  <section>
    <h2>4. Beschreibung aller Arbeiten (max. 1.000 Zeichen)</h2>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div class="highlight-block">
        <strong>Gute Beschreibung</strong>
        <p>
          Konzeption und Aufbau der Station; Testbilder mit Wildtierkamera + IR-Kamera,
          Sensor-/Parameteroptimierung; Aufnahme und Annotation von 1.000 Bildern;
          Entwicklung der YOLO-Modellelemente; Training/Validierung; Live-Tests; Anpassungen
          unter verschiedenen Licht-/Wetterbedingungen.
        </p>
      </div>
      <div class="highlight-block bg-brand-soft/80">
        <strong>Schlechte Beschreibung</strong>
        <p>
          Allgemeine Aussagen („agile Entwicklung“, „zukunftsweisende KI-Software“),
          keine konkreten Methoden oder Arbeitsschritte; Marketingformulierung statt technischer Beschreibung.
        </p>
      </div>
    </div>
  </section>

  <section>
    <h2>5. Wissenschaftliche, technische, methodische Risiken (max. 1.000 Zeichen)</h2>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div class="highlight-block">
        <strong>Gute Beschreibung</strong>
        <p>
          Geringe Unterschiede zwischen Individuen erschweren die KI-Erkennung.
          Fell/Ohrenpinsel ändern sich saisonal; Nachtaufnahmen liefern weniger Merkmale; Tiere verweilen < 5 s – System muss extrem schnell sein.
        </p>
      </div>
      <div class="highlight-block bg-brand-soft/80">
        <strong>Schlechte Beschreibung</strong>
        <p>
          Aufzählung unrealistischer Anforderungen (99 % Genauigkeit, CPU-Lernzeit etc.) ohne Bezug zum Projekt;
          Risiken nach Projektabschluss; keine Verbindung zu den tatsächlichen Komponenten.
        </p>
      </div>
    </div>
  </section>

  <section>
    <h2>6. Tabellarischer Arbeitsplan (Gantt)</h2>
    <p><em>Gute Struktur (Auszug, jeweils &lt; 100 Zeichen):</em></p>
    <table>
      <thead>
        <tr>
          <th>Arbeitspaket</th>
          <th>Zeitraum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Konzeption &amp; Aufbau Fütterungsstation</td>
          <td>04.2020 – 07.2020</td>
        </tr>
        <tr>
          <td>Testbilder aufnehmen (IR + Wildtierkamera)</td>
          <td>07.2020 – 08.2020</td>
        </tr>
        <tr>
          <td>Sensorparameter anpassen</td>
          <td>08.2020 – 10.2020</td>
        </tr>
        <tr>
          <td>1.000 Bilder von 50 Eichhörnchen aufnehmen</td>
          <td>10.2020 – 12.2020</td>
        </tr>
        <tr>
          <td>Bildannotation</td>
          <td>10.2020 – 12.2020</td>
        </tr>
        <tr>
          <td>YOLO-Modellelemente entwickeln</td>
          <td>07.2020 – 12.2020</td>
        </tr>
        <tr>
          <td>Training &amp; Validierung (Identifikation)</td>
          <td>01.2021 – 04.2021</td>
        </tr>
        <tr>
          <td>Live-Test Algorithmus</td>
          <td>05.2021 – 07.2021</td>
        </tr>
        <tr>
          <td>Gewichtungsanpassungen (Merkmale)</td>
          <td>05.2021 – 07.2021</td>
        </tr>
        <tr>
          <td>Station Tests (Wetter/Tag/Nacht)</td>
          <td>07.2021 – 08.2021</td>
        </tr>
        <tr>
          <td>Anpassungen an Bedingungen</td>
          <td>08.2021 – 12.2021</td>
        </tr>
      </tbody>
    </table>
    <p><em>Schlechte Struktur:</em> Projektmanagement, Vermarktung, Patentierung etc. ohne FuE-Bezug; kryptische Abkürzungen; fehlende Methodik.</p>
  </section>
</article>
