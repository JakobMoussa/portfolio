let currentLanguage = localStorage.getItem('portfolio_lang') || 'EN';

const translations = {
  EN: {
    // Nav & Hero
    navAbout: "About me",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    heroAm: "I am",
    heroRole: "FRONTEND DEVELOPER",
    heroBtn: "Let’s talk!",
    heroScroll: "Scroll down",

    // About
    aboutMeTitle: "About me",
    aboutMeText: "I am interested in IT and especially in programming. Coding is fun for me because I can use it to solve problems and implement my own ideas. I improve myself through practice, tutorials, and personal projects.",
    aboutLocText: "I am currently based in Germany and open to remote work as well as relocation.",
    aboutLearnText: "I am open to new things and love to learn constantly. New technologies motivate me to develop my skills further and continuously improve myself.",
    aboutSolveText: "My approach to problem-solving is based on analytical thinking, creativity, and perseverance. I learn from every challenge and look for the most efficient and elegant solutions possible. Collaboration is also important to me, to incorporate different perspectives.",

    // Skills
    skillsSpecial: "I have a special interest in learning",
    skillsTitle: "My Skills",
    skillsTxt1: "As a frontend developer, I have already worked with<br>modern web technologies and frameworks.",
    skillsTxt2_1: "Looking for ",
    skillsTxt2_2: "another skill?",
    skillsTxt3: "I am passionate about constantly expanding my knowledge<br>and using modern tools in my projects.",
    skillsBtn: "Get in touch",

    // Portfolio
    portfolioTitle: "Portfolio",
    portfolioDesc: "Explore a selection of my work here - Interact with projects to see my skills in action.",
    joinDesc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
    liveTest: "Live test",
    sharkieDesc: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
    crmDesc: "A very simple customer relationship management system working with CRUD functionality.",
    pokeDesc: "Based on the PokeAPI a simple library that provides and catalogues pokemon information.",
    daDesc: "This app is a Slack clone app. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",

    // Contact
    contactTitle: "Contact",
    contactProb: "Got a problem to solve?",
    contactDesc1: "Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.",
    contactDesc2_1: "Need a Frontend developer? ",
    contactDesc2_2: "Contact me!",
    placeholderName: "Your name",
    placeholderEmail: "Your email",
    placeholderMsg: "Your message",
    privacyText: "I've read the ",
    privacyLink: "privacy policy",
    privacyTextEnd: " and agree to the processing of my data.",
    sendBtn: "Send message :)",
    errorName: "Please enter your name",
    errorEmail: "Please enter a valid email address",
    errorMessage: "Please enter your message",
    errorPrivacy: "Please accept the privacy policy",
    
    // Legal & Footer
    legalNoticeLink: "Legal Notice",
    privacyPolicyLink: "Privacy Policy",
    impressumTitle: "Legal Notice",
    datenschutzTitle: "Privacy Policy",

    impressumContent: `
      <h2 class="headline">Imprint</h2>
      <ul>
          <li>Jakob Moussa</li>
          <li>Rathausstraße 46</li>
          <li>56203 Höhr-Grenzhausen</li>
      </ul>
      <p>
          <strong class="headline">Represented by</strong><br>
          Email: jakobmoussa5@gmail.com
      </p>
      <h2 class="headline">Consumer Dispute Resolution</h2>
      <p>
          We do not participate in dispute resolution proceedings before a consumer arbitration body, nor are we obliged to do so.
      </p>
      <p class="legal-date">Date: July 26, 2025</p>
    `,

    datenschutzContent: `
      <h2>Preamble</h2>
      <p>With the following privacy policy, we would like to inform you about the types of your personal data (hereinafter also referred to as "data") we process, for what purposes, and to what extent. The privacy policy applies to all processing of personal data carried out by us, both in the context of providing our services and, in particular, on our websites, in mobile applications, and within external online presences, such as our social media profiles (hereinafter collectively referred to as "online offer").</p>
      <p>The terms used are not gender-specific.</p>
      <p>Status: May 15, 2026</p>

      <h2>Controller</h2>
      <p>Jakob Moussa<br>Rathausstraße 46<br>56203 Höhr-Grenzhausen</p>
      <p>Email address: <a href="mailto:jakobmoussa5@gmail.com">jakobmoussa5@gmail.com</a></p>

      <h2>Overview of Processing</h2>
      <p>The following overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.</p>
      <h3>Types of Processed Data</h3>
      <ul>
          <li>Inventory data.</li>
          <li>Employee data.</li>
          <li>Contact data.</li>
          <li>Content data.</li>
          <li>Usage data.</li>
          <li>Meta, communication, and procedural data.</li>
      </ul>

      <h2>Relevant Legal Bases</h2>
      <p><strong>Relevant legal bases under the GDPR:</strong> Below you will find an overview of the legal bases of the GDPR on which we process personal data. Please note that in addition to the regulations of the GDPR, national data protection regulations may apply in your or our country of residence or domicile.</p>
      <ul>
          <li><strong>Consent (Art. 6 (1) (a) GDPR)</strong> - The data subject has given consent to the processing of their personal data for one or more specific purposes.</li>
          <li><strong>Performance of a contract and prior requests (Art. 6 (1) (b) GDPR)</strong> - Processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.</li>
          <li><strong>Legal obligation (Art. 6 (1) (c) GDPR)</strong> - Processing is necessary for compliance with a legal obligation to which the controller is subject.</li>
          <li><strong>Legitimate interests (Art. 6 (1) (f) GDPR)</strong> - Processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject.</li>
      </ul>

      <h2>General Information on Data Storage and Deletion</h2>
      <p>We delete personal data processed by us in accordance with the legal provisions as soon as the underlying consents are revoked or no further legal bases for processing exist. Exceptions to this rule apply if legal obligations or special interests require a longer retention or archiving of the data.</p>
      <p>In particular, data that must be retained for commercial or tax law reasons or whose storage is necessary for legal prosecution or the protection of the rights of other natural or legal persons must be archived accordingly.</p>

      <h2>Rights of Data Subjects</h2>
      <p>Rights of data subjects under the GDPR: As a data subject, you have various rights under the GDPR, which arise in particular from Art. 15 to 21 GDPR:</p>
      <ul>
          <li><strong>Right to object: You have the right to object, on grounds relating to your particular situation, at any time to the processing of personal data concerning you which is based on Art. 6 (1) (e) or (f) GDPR.</strong></li>
          <li><strong>Right of withdrawal of consent:</strong> You have the right to withdraw given consents at any time.</li>
          <li><strong>Right of access:</strong> You have the right to request confirmation as to whether data in question is being processed and to request information about this data as well as further information and a copy of the data.</li>
          <li><strong>Right to rectification:</strong> You have the right to request the completion or rectification of inaccurate data concerning you.</li>
          <li><strong>Right to erasure and restriction of processing:</strong> You have the right to request that data concerning you be deleted immediately or, alternatively, to request a restriction of the processing of the data.</li>
          <li><strong>Right to data portability:</strong> You have the right to receive the data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format or to request its transmission to another controller.</li>
          <li><strong>Complaint to a supervisory authority:</strong> You have the right to lodge a complaint with a supervisory authority.</li>
      </ul>

      <h2>Use of Cookies</h2>
      <p>Cookies are functions that store information on users' devices and read it from them. Cookies can be used for various purposes, such as ensuring the functionality, security, and convenience of online offers, as well as creating analyses of visitor flows. We use cookies in accordance with legal regulations.</p>
    `
  },
  DE: {
    // Nav & Hero
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navPortfolio: "Portfolio",
    heroAm: "Ich bin",
    heroRole: "FRONTEND ENTWICKLER",
    heroBtn: "Lass uns reden!",
    heroScroll: "Scroll down",

    // About
    aboutMeTitle: "Über mich",
    aboutMeText: "Ich interessiere mich für IT und besonders für Programmierung. Coding macht mir Spaß, weil ich damit Probleme lösen und eigene Ideen umsetzen kann. Ich verbessere mich durch Übung, Tutorials und eigene Projekte.",
    aboutLocText: "Ich bin derzeit in Deutschland ansässig und offen für Remote-Arbeit sowie einen Umzug.",
    aboutLearnText: "Ich bin offen für Neues und lerne gerne ständig dazu. Neue Technologien motivieren mich, meine Fähigkeiten weiterzuentwickeln und mich kontinuierlich zu verbessern.",
    aboutSolveText: "Mein Problemlösungsansatz basiert auf analytischem Denken, Kreativität und Ausdauer. Ich lerne aus jeder Herausforderung und suche nach möglichst effizienten und eleganten Lösungen. Dabei ist mir auch Zusammenarbeit wichtig, um unterschiedliche Perspektiven einzubeziehen.",

    // Skills
    skillsSpecial: "Mein besonderes Interesse gilt dem Lernen",
    skillsTitle: "Fähigkeiten",
    skillsTxt1: "Als Frontend-Entwickler habe ich bereits mit<br>modernen Webtechnologien und Frameworks gearbeitet.",
    skillsTxt2_1: "Suchst du nach ",
    skillsTxt2_2: "einer anderen Fähigkeit?",
    skillsTxt3: "Es begeistert mich, mein Wissen ständig zu erweitern<br>und moderne Tools in meinen Projekten einzusetzen.",
    skillsBtn: "Kontakt aufnehmen",

    // Portfolio
    portfolioTitle: "Portfolio",
    portfolioDesc: "Entdecke hier eine Auswahl meiner Arbeiten - Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.",
    joinDesc: "Ein vom Kanban-System inspirierter Task-Manager. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.",
    liveTest: "Live-Test",
    sharkieDesc: "Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Schwertwal zu kämpfen.",
    crmDesc: "Ein sehr einfaches Customer-Relationship-Management-System, das mit CRUD-Funktionalität arbeitet.",
    pokeDesc: "Basierend auf der PokeAPI, eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.",
    daDesc: "Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit einer intuitiven Benutzeroberfläche, Echtzeit-Nachrichten und einer robusten Kanalorganisation.",

    // Contact
    contactTitle: "Kontakt",
    contactProb: "Hast du ein Problem zu lösen?",
    contactDesc1: "Ermutige Leute, dich zu kontaktieren und beschreibe, an welcher Rolle du interessiert bist. Zeige, dass du ihren Projekten durch deine Arbeit einen Mehrwert bieten wirst.",
    contactDesc2_1: "Brauchst du einen Frontend-Entwickler? ",
    contactDesc2_2: "Kontaktiere mich!",
    placeholderName: "Dein Name",
    placeholderEmail: "Deine E-Mail",
    placeholderMsg: "Deine Nachricht",
    privacyText: "Ich habe die ",
    privacyLink: "Datenschutzrichtlinie",
    privacyTextEnd: " gelesen und stimme der Verarbeitung meiner Daten zu.",
    sendBtn: "Nachricht senden :)",
    errorName: "Bitte gib deinen Namen ein",
    errorEmail: "Bitte gib eine gültige E-Mail-Adresse ein",
    errorMessage: "Bitte gib deine Nachricht ein",
    errorPrivacy: "Bitte akzeptiere die Datenschutzrichtlinie",

    // Legal & Footer
    legalNoticeLink: "Impressum",
    privacyPolicyLink: "Datenschutz",
    impressumTitle: "Impressum",
    datenschutzTitle: "Datenschutzerklärung",

    impressumContent: `
      <h2 class="headline">Impressum</h2>
      <ul>
          <li>Jakob Moussa</li>
          <li>Rathausstraße 46</li>
          <li>56203 Höhr-Grenzhausen</li>
      </ul>
      <p>
          <strong class="headline">Vertretungsberechtigt</strong><br>
          E-Mail: jakobmoussa5@gmail.com
      </p>
      <h2 class="headline">Verbraucherstreitbeilegung</h2>
      <p>
          Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und sind dazu auch nicht verpflichtet.
      </p>
      <p class="legal-date">Datum: 26. Juli 2025</p>
    `,

    datenschutzContent: `
      <h2>Präambel</h2>
      <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").</p>
      <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
      <p>Stand: 15. Mai 2026</p>

      <h2>Verantwortlicher</h2>
      <p>Jakob Moussa<br>Rathausstraße 46<br>56203 Höhr-grenzhausen</p>
      <p>E-Mail-Adresse: <a href="mailto:jakobmoussa5@gmail.com">jakobmoussa5@gmail.com</a></p>

      <h2>Übersicht der Verarbeitungen</h2>
      <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
      <h3>Arten der verarbeiteten Daten</h3>
      <ul>
          <li>Bestandsdaten.</li>
          <li>Beschäftigtendaten.</li>
          <li>Kontaktdaten.</li>
          <li>Inhaltsdaten.</li>
          <li>Nutzungsdaten.</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
      </ul>

      <h2>Maßgebliche Rechtsgrundlagen</h2>
      <p><strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.</p>
      <ul>
          <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
          <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
          <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.</li>
          <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.</li>
      </ul>

      <h2>Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
      <p>Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden.</p>
      <p>Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.</p>

      <h2>Rechte der betroffenen Personen</h2>
      <p>Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
      <ul>
          <li><strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.</strong></li>
          <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
          <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
          <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
          <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden.</li>
          <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
          <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde.</li>
      </ul>

      <h2>Einsatz von Cookies</h2>
      <p>Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften.</p>
    `
  }
};

const testimonials = {
  EN: [
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: "V. Schuster - Team Partner",
      image: "assets/images/profile.png"
    },
    {
      text: "Jakob's attention to detail and problem-solving skills are outstanding. He delivers high-quality code and is a pleasure to work with.",
      author: "M. Bauer - Project Lead",
      image: "assets/images/profile.png"
    },
    {
      text: "His expertise in frontend development helped us achieve our goals faster. Great communication and a true team player.",
      author: "S. Klein - Colleague",
      image: "assets/images/profile.png"
    }
  ],
  DE: [
    {
      text: "Michael hat das Team mit seiner großartigen Organisation und klaren Kommunikation wirklich zusammengehalten. Ohne sein Engagement wären wir nicht so weit gekommen.",
      author: "V. Schuster - Teamkollege",
      image: "assets/images/profile.png"
    },
    {
      text: "Jakobs Liebe zum Detail und seine Problemlösungsfähigkeiten sind herausragend. Er liefert qualitativ hochwertigen Code und es ist eine Freude, mit ihm zu arbeiten.",
      author: "M. Bauer - Projektleiter",
      image: "assets/images/profile.png"
    },
    {
      text: "Seine Expertise in der Frontend-Entwicklung hat uns geholfen, unsere Ziele schneller zu erreichen. Großartige Kommunikation und ein echter Teamplayer.",
      author: "S. Klein - Kollege",
      image: "assets/images/profile.png"
    }
  ]
};

// Global function to change language and trigger an event
function switchLanguage(lang) {
  if (lang === currentLanguage) return;
  currentLanguage = lang;
  localStorage.setItem('portfolio_lang', lang);
  
  // Dispatch a custom event so other scripts can re-render
  document.dispatchEvent(new Event('languageChanged'));
}

// Function to translate static elements using data-translate attribute
function updateStaticTranslations() {
  const t = translations[currentLanguage];
  
  // Update elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update active state of language switch buttons
  document.querySelectorAll('.language-switch button').forEach(btn => {
    if (btn.textContent.trim() === currentLanguage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Automatically bind click events to all language switchers
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.language-switch').forEach(switcher => {
    switcher.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        switchLanguage(e.target.textContent.trim());
      }
    });
  });
  
  // Apply static translations initially
  updateStaticTranslations();
});

// Update static translations whenever language changes
document.addEventListener('languageChanged', updateStaticTranslations);
