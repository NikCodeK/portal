export type CardIconName =
  | 'Building2'
  | 'Users'
  | 'ClipboardCheck'
  | 'Lightbulb'
  | 'ListChecks'
  | 'PieChart'
  | 'PenSquare'
  | 'Workflow'
  | 'FileText'
  | 'CalendarClock'
  | 'Award';

export type StepVisual = {
  type: 'image' | 'abstract';
  caption: string;
  src?: string;
  accent: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  accent: string;
  visual: StepVisual;
};

export type CardContent = {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: CardIconName;
  href?: string;
};

export type TabContent = {
  id: 'allgemein' | 'vor-antrag' | 'bescheid-erhalten' | 'abruf';
  label: string;
  cards: CardContent[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const heroContent = {
  title: 'Herzlich Willkommen',
};

export const processIntro =
  'Auf dieser Informationsseite findest Du eine kompakte Übersicht zu allen Schritten des Antragsverfahrens. Von der gemeinsamen Vorbereitung über die Einreichung bei der Bescheinigungsstelle bis hin zur Auszahlung der Forschungszulage siehst Du, welche Aufgaben als Nächstes anstehen und welche Unterlagen benötigt werden.';

export const processSteps: ProcessStep[] = [
  {
    id: 'vorbereiten',
    title: 'Vorbereiten',
    description:
      'Zusammen identifizieren wir die förderfähigen Projekte und bereiten die notwendige Dokumentation vor.',
    accent: '#F38B1B',
    visual: {
      type: 'image',
      src: '/images/step-vorbereiten.svg',
      caption: 'Vorbereiten – Materialien und Projektideen bündeln',
      accent: '#F38B1B',
    },
  },
  {
    id: 'beantragen',
    title: 'Beantragen',
    description:
      'Ein Antrag wird bei der Bescheinigungsstelle Forschungszulage eingereicht.',
    accent: '#2563EB',
    visual: {
      type: 'image',
      src: '/images/step-beantragen.svg',
      caption: 'Beantragen – Einreichung bei der BSFZ',
      accent: '#2563EB',
    },
  },
  {
    id: 'freuen',
    title: 'Freuen',
    description:
      'Nach 3 Monaten kann mit der Bewilligung die Steuererstattung beim Finanzamt eingeholt werden.',
    accent: '#16A34A',
    visual: {
      type: 'image',
      src: '/images/step-freuen.svg',
      caption: 'Freuen – Bewilligung und Steuererstattung sichern',
      accent: '#16A34A',
    },
  },
];

export const tabsData: TabContent[] = [
  {
    id: 'allgemein',
    label: 'Allgemein',
    cards: [
      {
        id: 'unternehmen-in-schwierigkeiten',
        badge: 'Generelle Information',
        title: 'Unternehmen in Schwierigkeiten',
        description:
          'Checkliste und Definitionen, wann ein Unternehmen als „in Schwierigkeiten“ gilt und welche Auswirkungen das für die Forschungszulage hat.',
        icon: 'Building2',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/mDeWt5-6j_J9hseoEm4tpg/aEqgCpKI8BfCSt5HVQSUssL3XnKu7fanjDpEg7XMy2tNmpagYKvOBs3erQm7EoWsBJx3DP9ZrDNTkT5ENfmPKR1y0YqRVaTPw_nEM9LQkCw0Fj-Me6T9r60OR5q2P_NdCmCepxPUqK5MMbumGFVUzNAc1YgmpGs9eEHjsygXoGezC5QC4j7oOItNXugkN204sdBR04qqoz4F0IkuJraTrg/OlXLbCA6tJEKBGZDp09s2a4EcYiG59zvDSI3dOZPTAg',
      },
      {
        id: 'verbundunternehmen',
        badge: 'Generelle Information',
        title: 'Verbundunternehmen',
        description:
          'Übersicht zu verbundenen Unternehmen und wie sie innerhalb der Antragstellung bewertet und dargestellt werden.',
        icon: 'Users',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/qhgMKKpDIkzUxH5d4dLp3A/KCjkn9aaoowSMQMsa1OJc-XZ0v2x2FxrWq8zecdInKS6nR6sUmKW0de4udZ0epMzWly6hc29g0qPgfMQZTOtyxxMgljANv1RHIbJOpZ2pf66BNbl8FKnlTXgRNgDus9nYyhvucgZdW7_iK-gLYnZZfOEH04ggZLCnGu-_W4tMJtPjj4K_QpI6GbCapi73LTjgJYJh0DXNrPaTJHYlLLuYg/aDwnUn51QcHOW7jZ0JUWa2MZui8zgjfC_VoxF4FnLF4',
      },
    ],
  },
  {
    id: 'vor-antrag',
    label: 'Vor Antrag',
    cards: [
      {
        id: 'bsfz-registrierung',
        badge: 'Information vor Antrag',
        title: 'BSFZ Registrierung durchführen',
        description:
          'Schritt-für-Schritt-Anleitung zur Einrichtung des Accounts bei der Bescheinigungsstelle Forschungszulage.',
        icon: 'ClipboardCheck',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/24hMKWxX3t78zQRjs7ZXPw/TOA7mROyA_JW0jtrUtJDIDhlauiCfiOuXm9gQusiK6vBRGLaH45ZhQDnG3wSEgNt_7MLLRefsRkc6udL_UClM3z8_EKzhYwAup_0cKric_95YOX4KfaX57UmVt7P_0JACAB-x7g4ex-_fqP0cnsTPLE_n_OfNqKXUezd0djFGt1Z6pjp6C9xWsr9NaYrJ_dq/xtUZB2xtx6xK99uS0uJ1ssVx2hCO6BF9qHNbvlAFnpA',
      },
      {
        id: 'fzl-intro',
        badge: 'Information vor Antrag',
        title: 'FZL – Intro',
        description:
          'Einordnung des Förderprogramms sowie Voraussetzungen für Unternehmen aller Größenordnungen.',
        icon: 'Lightbulb',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/_Rzv3dr7vJzhuzSa-fmMAw/JbjnPF879-kgDdAmQOXa3CqkN4AqipiTtVouQ4bKNzMIcdSJmnWsn1sJTuhMT2V1Fg8tZ_dfJGSjULN3n5P1QqsDWOrzW28-LoqWHyvh03WmNsn8zXN8V91Dy2P13-PUl4MF8C4sGBUflYWYWlQuZ_aYrFlxVZCzrmwhF-C8budSelXslQv7iedN46METuqJ/boDWopK0pPkHAvuet7wt2j6xhlMXDe_g7BN-n5_OJkc',
      },
      {
        id: 'nicht-foerderfaehig',
        badge: 'Information vor Antrag',
        title: 'Liste nicht förderfähiger Leistungen',
        description:
          'Komprimierte Übersicht aller Leistungen, die laut Richtlinie nicht in die Forschungszulage eingebracht werden können.',
        icon: 'ListChecks',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/4OLZVsiI28opcwQmU8eV3w/_lFx7sUPOSeoKtUhUBrY1xdFMORfi0K3uWepezM2UxJhFtVzzPVB4v2Dyx46RsNTiyWqHz5bC4nlBme2lfD39pBxv953MvIoG4v1Je55nBUZyGGDG9QSQVWlq82EjYFCUiAI4wNhnPzbzip-sPksM3ysMXj6qWr7C4LIRbT8br814SvwdetJQV80FdD8Xojp2ew_Fub5QatFw1gxS2YsHw/sl-OIR-SrLj-icrWUUv8BiEOHQXB3kbLLLVykvhoffg',
      },
      {
        id: 'foerderquote',
        badge: 'Information vor Antrag',
        title: 'Förderquotenübersicht',
        description:
          'Tabellarische Darstellung der Förderquoten für verschiedene Unternehmensgrößen und Projektarten.',
        icon: 'PieChart',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/2-RI10l_pvodfE8XlF-yNg/bykdlog_fG9waA3N9Ye2G7ZOOWgIT3QN66G7r3Fhzr4G5tFDhLtx8xgQmn3FqjLmse9wEN8e1J6-85V0sD04u0cxUxZUBckGMqUx_qY9Q0sJB-uTxAOozmTEyu6FVL6eb_m8Wu3NtD7WKoMi0VrMTQDBa3k8Z2uaLKc8E4uyuIxXbdHso72fE4TxEO6noNr-/Q7J-m_kIrm21Na4kdBMUkc--h-2VV5FUmuw6IXhjyFo',
      },
      {
        id: 'grafikbriefing',
        badge: 'Information vor Antrag',
        title: 'Grafikbriefing',
        description:
          'Template zur visuellen Aufbereitung der Projektidee, um Stakeholder schnell abzuholen.',
        icon: 'PenSquare',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/8MykyRJysMi4TRiOIrbt4w/rw-gGN0JohvI5c2GKR0V4AFaax0n6f4CmEciV6s85AVvbzHkxRLaR84lZgoEEOFDaEJNf1pHqNWrXwlqdIJNe78nZagUEJmfZa-8JxjM1ZggtsDm32PqjYIjywIFTnOov0pNVYAeHfqvKlRlHMS2NvMkfwzjD_7Ix1cf-zTaWtJAUQVTRJ5ScRlw8WQFM3ce/pWI0GRwA5IGxoNlPxAK2U59IoRKkodHzqd-BKSGKYzA',
      },
      {
        id: 'inhaltliches-beispielprojekt',
        badge: 'Information vor Antrag',
        title: 'Inhaltliches Beispielprojekt',
        description:
          'Beispielhafte Projektdokumentation inklusive Zielen, Arbeitspaketen und Aufwandsschätzung.',
        icon: 'Workflow',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/6hXFdZU8Pg8-qjEQcu3DmQ/FehBxeXalOIpw4sXGxywiftO8RBE3IGh1npdKbKvsXh_I-2tQEzzusAVGS_m9NabM35NIMpaUKTdQ3h5G8pi4HBfUeEOYkRHL8SKTY2frpj_l9eXgZIBBHJXTX2QD_SH62tJdr8QlT7OWo-wd-_V1VmtjW4a90sjIDLpjqvFMu68AiqIG4dorJh-vYDor11H3RV1W2AHYsdRRqTKYy2LhQ/F5a7CIJMJHaXO8WZk8naDRSc0f8FHhoo3iMZngO6aM0',
      },
      {
        id: 'projektprofil-dokument',
        badge: 'Information vor Antrag',
        title: 'Beispiel eines Projektprofil-Dokuments',
        description:
          'Vorlage zur Beschreibung des Projektprofils inklusive aller Pflichtfelder für die Beantragung.',
        icon: 'FileText',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/Ql6luT_ffC2FMH5mBNneig/dGrxer8vtnZ5vV-PPba4jHNlguRRHsLDO4Qhtkao_2GecE6ks_sGmSPSNhP-0VrHBJmEw0FZSfImelSGAnZJB4edTyb5ggqyCrY-5Q99SpEgxdmZQkWOTnf2yXddj1BU1yifZV2zqglD9r_SaIsCpUp5d6-dbAoNY8kjN_-V0WMqhZ_FtkQuOCVK-bc3mW1fxPQG38PBx9vkEq2xUD3nyQQqsA21YHGreRBj7rHHPl8/zldDSvzdPEcvtNRIo9KdoIvN0ZZuelNZQaD0BSbyqxA',
      },
      {
        id: 'zeitablauf',
        badge: 'Information vor Antrag',
        title: 'Zeitablauf Antragseinreichung FZL',
        description:
          'Timeline mit allen Schritten bis zur Einreichung inklusive Verantwortlichkeiten.',
        icon: 'CalendarClock',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/57BJ0IXPyMobQcKCXNhaaQ/UQ6SeVKE9lZHB2I0Vdo911JG7kkwkgs5rANfhrWy55u4-K2K7aDJlqc-I6Vdsv52pgrg_puWsY3W4BZ4R3rXWiSMWjpUkG09Hdd0p7Zm4f7CKkHaq9GgOFrtSYzsFk6DrPezekDMyWEM0khsooq-BXlnT3G4if0GPHdXCrML7HGIkGfZA6QmTtjQ1yAmjyGy/cXLfKDHePUrWRoSxLWFAlaZhywo29sVytSR0Ex6eGMo',
      },
    ],
  },
  {
    id: 'bescheid-erhalten',
    label: 'Bescheid erhalten',
    cards: [
      {
        id: 'bsfz-siegel',
        badge: 'Information nach Bescheid',
        title: 'Benutzung BSFZ-Siegel',
        description:
          'Richtlinien zur Verwendung des Siegels für Kommunikation und Marketing nach erteilter Bescheinigung.',
        icon: 'Award',
        href: 'https://v5.airtableusercontent.com/v3/u/47/47/1762862400000/7t8-mlraekJF8B3ClpYvIg/WNUxJ92hKLvdxz29o0kC1F8tC8pRj-iQofRRF6hchvoUpHdiBWTA-2ttxW2iMacDYU_VVa9ucuGNsK1hnCEzwssocui5lTyn5oL2l_tJM1gNfH3iVhjlbZdzkMMqmZbD8XVtJdcyBd1yHK8pt6cAFqGSTNY8O5ZdeK7UmNMbuEt7F0bE-Mp5dzU1nvydAX5J0JXcPSjsoH5tFLqwDgk_rA/i4Pin-Axese5Op2wozRXz8ZjRulwYVPE2vvr9ZEnpL8',
      },
    ],
  },
  {
    id: 'abruf',
    label: 'Abruf',
    cards: [],
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-kosten',
    question: 'Welche Kosten können über die Forschungszulage gefördert werden?',
    answer:
      'Über die Forschungszulage können Aufwendungen in zertifizierten Vorhaben für FuE-Personalkosten, externe Dienstleistungen für FuE-Entwicklungen sowie seit März 2024 auch die Abschreibungen für Investitionen gefördert werden, sofern sie direkt mit dem Forschungsprojekt verbunden sind.',
  },
  {
    id: 'faq-rueckwirkend',
    question: 'Können auch bereits begonnene oder eingestellte Projekte rückwirkend gefördert werden?',
    answer:
      'Ja, es können Aufwendungen rückwirkend für Projekte mit Projektstart ab dem 2. Januar 2020 gefördert werden. Die Antragstellung kann somit auch für bereits in der Vergangenheit gestartete Projekte erfolgen.',
  },
  {
    id: 'faq-kombination',
    question: 'Kann die Forschungszulage mit anderen Förderprogrammen kombiniert werden?',
    answer:
      'Ja, eine Kombination mit anderen Förderprogrammen ist möglich, solange keine Doppelförderung derselben Aufwendungen erfolgt. Die förderfähigen Kosten müssen klar voneinander abgegrenzt werden.',
  },
  {
    id: 'faq-innovation',
    question: 'Ist mein Projekt innovativ genug für die Forschungszulage?',
    answer:
      'Ein Projekt erfüllt die Kriterien des FZulG, wenn es auf die Schaffung neuen Wissens oder die Entwicklung völlig neuer Produkte, Prozesse oder Dienstleistungen abzielt. Reine Weiterentwicklungen bestehender Lösungen sind nicht förderfähig. Wesentliche neue Forschungs- und Entwicklungsanteile, ein klarer Innovationsgrad sowie nachvollziehbare Entwicklungsrisiken und ein planmäßiges Vorgehen sind entscheidend.',
  },
  {
    id: 'faq-erfolg',
    question: 'Wie hoch ist meine Erfolgswahrscheinlichkeit bei der Beantragung der Forschungszulage?',
    answer:
      'Die Erfolgswahrscheinlichkeit hängt stark von der Qualität und Vollständigkeit der Unterlagen sowie vom Innovationsgrad des Projekts ab. Unternehmen, die mit erfahrenen Berater:innen arbeiten, erhöhen ihre Chancen erheblich – unsere Erfolgsquote liegt beispielsweise bei 95 %.',
  },
  {
    id: 'faq-dauer',
    question: 'Wie lange dauert die Bearbeitung eines Antrags auf Forschungszulage?',
    answer:
      'Ohne externe Unterstützung dauert die Antragserarbeitung je nach interner Kapazität häufig mehrere Monate. Nach Einreichung benötigt die BSFZ bis zu 12 Wochen für die Prüfung; in dieser Zeit können Nachforderungen entstehen, die meist innerhalb von zwei Wochen beantwortet werden müssen. Mit Thierhoff Consulting lässt sich die Antragserarbeitung – je nach Kapazität des Teams – oft in 6–8 Wochen abschließen. Auch Nachforderungen sowie der Abruf der Mittel können effizienter organisiert werden, wodurch der interne Aufwand sinkt.',
  },
];

export const tabsDescription =
  'Alle Dokumente gebündelt an einem Ort: Filtere nach Themenbereichen oder nutze die Suche, um schnell das richtige Material zu finden.';
