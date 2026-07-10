/*
  Editable course data for The House of Advanced Practice.

  Most routine updates can happen in this file:
  - Change room text, prompts, scenarios, standards, and colours.
  - Add or remove notebook summary headings.
  - Add a room by copying an existing room object and adding a matching mapSite.
*/
window.HOUSE_DATA = {
  site: {
    eyebrow: "Graduate Social Work Clinical Practice",
    title: "The House of Advanced Practice",
    subtitle: "A memory palace for accountable clinical decision-making.",
    mapTitle: "Top-down illustrated map of The House of Advanced Practice",
    mapDescription:
      "A casual puzzle-style educational world map organized around The Commons, with clickable destinations for clinical decision-making.",
    storageKey: "house-of-advanced-practice-notes-v2",
    legacyStorageKey: "house-of-advanced-practice-notes"
  },

  theme: {
    cream: "#f8f6f2",
    paper: "#fdfbf7",
    charcoal: "#353535",
    forest: "#2f5d50",
    bronze: "#b58a57",
    sage: "#e8efe8",
    blue: "#e8eef5"
  },

  notebookHeadings: [
    "Scope, authority, and competence",
    "Assessment and formulation",
    "Therapeutic options",
    "Client fit and adaptation",
    "Evidence and limitations",
    "Power, identity, and use of self",
    "Consultation, evaluation, and next steps",
    "Integrated clinical decision"
  ],

  worldDecor: [
    { type: "circle", className: "sweet-dot pink", cx: 90, cy: 306, r: 18 },
    { type: "circle", className: "sweet-dot gold", cx: 164, cy: 296, r: 13 },
    { type: "circle", className: "sweet-dot blue", cx: 1040, cy: 308, r: 17 },
    { type: "circle", className: "sweet-dot mint", cx: 1098, cy: 620, r: 20 },
    { type: "circle", className: "sweet-dot pink", cx: 744, cy: 676, r: 14 },
    { type: "path", className: "sweet-star", d: "M300 86 l10 22 24 3 -18 16 5 24 -21 -12 -21 12 5 -24 -18 -16 24 -3z" },
    { type: "path", className: "sweet-star small", d: "M1046 88 l7 14 16 2 -12 11 3 16 -14 -8 -14 8 3 -16 -12 -11 16 -2z" },
    { type: "path", className: "candy-swirl", d: "M736 54 c28 0 48 18 48 40 s-18 36 -40 36 -36 -14 -36 -32 12 -28 28 -28 24 10 24 22 -8 18 -18 18" }
  ],

  mapSites: [
    {
      roomId: "commons",
      levelLabel: "Central quest",
      icon: "commons",
      shape: "M452 252 H752 Q786 252 806 280 L840 356 Q854 388 840 420 L806 500 Q786 532 752 532 H452 Q418 532 398 500 L364 420 Q350 388 364 356 L398 280 Q418 252 452 252 Z",
      hit: { x: 364, y: 252, width: 476, height: 280 },
      label: { x: 602, y: 404 },
      level: { x: 602, y: 358 },
      plaque: { x: 482, y: 370, width: 240, height: 58, rx: 20, large: true },
      enterPlaque: { x: 534, y: 438, width: 136, height: 34, rx: 14 },
      enter: { x: 602, y: 461, text: "Enter room" },
      colours: { fill: "#fff0a8" }
    },
    {
      roomId: "assessment",
      levelLabel: "Room 01",
      icon: "assessment",
      shape: "M116 118 H346 Q368 118 368 140 V238 Q368 260 346 260 H116 Q94 260 94 238 V140 Q94 118 116 118 Z",
      hit: { x: 94, y: 118, width: 274, height: 142 },
      label: { x: 231, y: 197 },
      level: { x: 231, y: 154 },
      plaque: { x: 122, y: 166, width: 218, height: 48, rx: 18 },
      enterPlaque: { x: 173, y: 218, width: 116, height: 30, rx: 13 },
      enter: { x: 231, y: 239, text: "Enter" },
      colours: { fill: "#ffdca8" }
    },
    {
      roomId: "library",
      levelLabel: "Room 02",
      icon: "library",
      shape: "M484 76 H716 Q744 76 760 100 L780 130 Q794 152 780 174 L760 204 Q744 228 716 228 H484 Q456 228 440 204 L420 174 Q406 152 420 130 L440 100 Q456 76 484 76 Z",
      hit: { x: 406, y: 76, width: 388, height: 152 },
      label: { x: 600, y: 163 },
      level: { x: 600, y: 120 },
      plaque: { x: 492, y: 132, width: 216, height: 48, rx: 18 },
      enterPlaque: { x: 542, y: 184, width: 116, height: 30, rx: 13 },
      enter: { x: 600, y: 205, text: "Enter" },
      colours: { fill: "#bfe4ff" }
    },
    {
      roomId: "tailor",
      levelLabel: "Room 03",
      icon: "tailor",
      shape: "M864 108 H1082 Q1108 108 1108 134 V246 Q1108 272 1082 272 H864 Q838 272 838 246 V134 Q838 108 864 108 Z",
      hit: { x: 838, y: 108, width: 270, height: 164 },
      label: { x: 973, y: 197 },
      level: { x: 973, y: 154 },
      plaque: { x: 862, y: 166, width: 222, height: 48, rx: 18 },
      enterPlaque: { x: 915, y: 218, width: 116, height: 30, rx: 13 },
      enter: { x: 973, y: 239, text: "Enter" },
      colours: { fill: "#bff0a8" }
    },
    {
      roomId: "mirrors",
      levelLabel: "Room 04",
      icon: "mirrors",
      shape: "M106 348 H340 Q368 348 382 372 L402 432 Q412 462 390 486 L350 530 H106 Q76 530 76 500 V378 Q76 348 106 348 Z",
      hit: { x: 76, y: 348, width: 326, height: 182 },
      label: { x: 221, y: 455 },
      level: { x: 221, y: 412 },
      plaque: { x: 112, y: 424, width: 218, height: 48, rx: 18 },
      enterPlaque: { x: 163, y: 476, width: 116, height: 30, rx: 13 },
      enter: { x: 221, y: 497, text: "Enter" },
      colours: { fill: "#cdf5ff" }
    },
    {
      roomId: "laboratory",
      levelLabel: "Room 05",
      icon: "lab",
      shape: "M858 344 H1082 Q1110 344 1118 372 L1142 470 Q1150 500 1128 522 L1082 568 H858 Q830 568 822 540 L798 442 Q790 412 812 390 L858 344 Z",
      hit: { x: 798, y: 344, width: 344, height: 224 },
      label: { x: 968, y: 468 },
      level: { x: 968, y: 424 },
      plaque: { x: 840, y: 436, width: 256, height: 50, rx: 18 },
      enterPlaque: { x: 910, y: 494, width: 116, height: 30, rx: 13 },
      enter: { x: 968, y: 515, text: "Enter" },
      colours: { fill: "#cfe1ff" }
    },
    {
      roomId: "garden",
      levelLabel: "Room 06",
      icon: "garden",
      shape: "M116 574 H378 Q410 574 424 604 L438 634 Q450 666 424 690 H116 Q84 690 70 660 L58 630 Q46 598 74 582 Q92 574 116 574 Z",
      hit: { x: 58, y: 574, width: 380, height: 116 },
      label: { x: 248, y: 644 },
      level: { x: 248, y: 600 },
      plaque: { x: 100, y: 612, width: 296, height: 50, rx: 18 },
      enterPlaque: { x: 190, y: 668, width: 116, height: 30, rx: 13 },
      enter: { x: 248, y: 689, text: "Enter" },
      colours: { fill: "#bff0a8" }
    },
    {
      roomId: "threshold",
      levelLabel: "Room 00",
      icon: "threshold",
      shape: "M480 580 H720 Q748 580 762 604 L780 638 Q794 666 770 688 H430 Q406 666 420 638 L438 604 Q452 580 480 580 Z",
      hit: { x: 420, y: 580, width: 360, height: 108 },
      label: { x: 600, y: 650 },
      level: { x: 600, y: 606 },
      plaque: { x: 488, y: 618, width: 224, height: 50, rx: 18 },
      enterPlaque: { x: 542, y: 672, width: 116, height: 30, rx: 13 },
      enter: { x: 600, y: 693, text: "Enter" },
      colours: { fill: "#ffdca8" }
    }
  ],

  rooms: [
    {
      id: "threshold",
      name: "The Threshold",
      guide: "The consulting gatekeeper, a principled practitioner who pauses at the front door to clarify role, consent, competence, and authority.",
      question: "Am I the right person to provide this care?",
      explanation:
        "The Threshold asks students to establish the frame before intervening. It holds scope of practice, authority, competence, informed consent, consultation, and referral as active clinical decisions rather than administrative afterthoughts.",
      scene: "You are at the front entrance. Before the work begins, unlock the frame: role, consent, authority, competence, and when to consult.",
      scenario: "A client asks for trauma therapy during an intake, but your placement role is limited and supervision is not available until tomorrow. What can you responsibly offer today?",
      reward: "A clear practice boundary and a safer first step.",
      summaryCategory: "Scope, authority, and competence",
      prompts: [
        "Name the service being requested and the authority under which you would provide it.",
        "Identify consent, confidentiality, mandated reporting, and role boundaries.",
        "Decide what consultation or referral may be needed before proceeding.",
        "State what you can responsibly offer today and what sits outside your competence."
      ],
      standards: [
        { label: "OCSWSSW Scope of Practice for Social Work", url: "https://www.ocswssw.org/sop/scope-of-practice-for-social-work/" },
        { label: "OCSWSSW Principle II: Competence and Integrity", url: "https://www.ocswssw.org/sop/principle-ii-competence-and-integrity/" },
        { label: "Ontario Regulation 383/00: Registration", url: "https://www.ontario.ca/laws/regulation/000383" }
      ]
    },
    {
      id: "assessment",
      name: "The Assessment Studio",
      guide: "Dr. Formulation, an attentive scholar-practitioner who studies the client, the context, and the pattern between them.",
      question: "What is happening, and what do I still need to understand?",
      explanation:
        "The Assessment Studio turns information into a provisional formulation. It includes presenting concerns, strengths, risk, diagnosis, goals, social context, and the humility to keep revising what we think we know.",
      scene: "Clues are spread across the desk. Your task is to sort what is known, what is inferred, what is urgent, and what still needs discovery.",
      scenario: "A client reports panic, housing instability, and conflict with a partner. Which information changes your immediate formulation, and what must be assessed before choosing an intervention?",
      reward: "A provisional formulation that can change as new evidence appears.",
      summaryCategory: "Assessment and formulation",
      prompts: [
        "Separate client report, observation, collateral information, and inference.",
        "List strengths, risks, stressors, identities, goals, and social context.",
        "Draft one formulation and one plausible alternative explanation.",
        "Identify what is urgent and what still requires assessment."
      ],
      standards: [
        { label: "OCSWSSW Principle I: Relationship with Clients", url: "https://www.ocswssw.org/sop/principle-i-relationship-with-clients/" },
        { label: "OCSWSSW Principle III: Responsibility to Clients", url: "https://www.ocswssw.org/sop/principle-iii-responsibility-to-clients/" },
        { label: "CASW Code of Ethics 2024", url: "https://www.casw-acts.ca/en/casw-code-ethics-2024" }
      ]
    },
    {
      id: "library",
      name: "The Therapy Library",
      guide: "The intervention librarian, who knows many shelves but never chooses a manual before understanding the clinical purpose.",
      question: "What approaches exist, and what is each one designed to do?",
      explanation:
        "The Therapy Library maps therapeutic traditions, mechanisms of change, intervention options, historical assumptions, and clinical techniques so choices become deliberate rather than habitual.",
      scene: "Shelves of possible approaches are open. Choose tools by mechanism, not habit: what is each approach meant to shift?",
      scenario: "Your formulation points to avoidance, grief, and isolation. Which approaches would you compare, and what would each be designed to change?",
      reward: "A shortlist of intervention options with a reason for each one.",
      summaryCategory: "Therapeutic options",
      prompts: [
        "Name at least three approaches that could fit the formulation.",
        "Describe the intended mechanism of change for each approach.",
        "Identify likely benefits, burdens, contraindications, and sequencing issues.",
        "Choose a first intervention that could test the clinical direction."
      ],
      standards: [
        { label: "CASW Social Work Scope of Practice", url: "https://www.casw-acts.ca/en/what-social-work/casw-social-work-scope-practice" },
        { label: "CASW Scope of Practice Statement 2020", url: "https://www.casw-acts.ca/files/attachements/Scope_of_Practice_Statement_2020_0.pdf" },
        { label: "CASW Standards of Practice for Social Work 1995", url: "https://www.casw-acts.ca/en/canadian-association-social-workers-standards-practice-social-work-1995" },
        { label: "CASWE Accreditation", url: "https://caswe-acfts.ca/our-activities/accreditation/" }
      ]
    },
    {
      id: "tailor",
      name: "The Tailor's Studio",
      guide: "The clinical tailor, who measures fit with humility and adapts without cutting away the client's culture, agency, or values.",
      question: "What fits this person, in this context, at this time?",
      explanation:
        "The Tailor's Studio centers client goals, culture, race, gender, sexuality, disability, neurodivergence, trauma, language, access, and practical feasibility. It asks whether the plan can actually be lived.",
      scene: "The pattern is not finished until it fits the person. Adjust the plan for goals, identity, access, pacing, language, and daily life.",
      scenario: "A client likes the therapy idea but cannot complete between-session tasks because of work, caregiving, and transportation. What would you adapt without weakening the clinical purpose?",
      reward: "A plan the client can actually use.",
      summaryCategory: "Client fit and adaptation",
      prompts: [
        "Ask what the client most wants to be different in daily life.",
        "Check language, accessibility, transportation, finances, caregiving, and time.",
        "Adapt pace, format, examples, and tasks to the client's context.",
        "Define success in the client's own terms."
      ],
      standards: [
        { label: "OCSWSSW Principle I: Relationship with Clients", url: "https://www.ocswssw.org/sop/principle-i-relationship-with-clients/" },
        { label: "CASW Code of Ethics 2024", url: "https://www.casw-acts.ca/en/casw-code-ethics-2024" },
        { label: "OCSWSSW Code of Ethics", url: "https://www.ocswssw.org/sop/code-of-ethics/" }
      ]
    },
    {
      id: "laboratory",
      name: "The Evidence Laboratory",
      guide: "The evidence scientist, precise but not rigid, who weighs research, lived expertise, practice wisdom, and measurement together.",
      question: "What supports this decision, and what does the evidence leave out?",
      explanation:
        "The Evidence Laboratory supports evidence-informed practice while keeping limits visible. Randomized trials, qualitative findings, lived expertise, outcome data, and equity concerns all belong on the bench.",
      scene: "The lab bench is ready. Weigh research, lived expertise, practice wisdom, fit, and outcome signals before treating evidence as certainty.",
      scenario: "A manualized intervention has strong research support, but the studies excluded clients with similar identities and constraints. How will you use the evidence without overstating it?",
      reward: "A decision backed by evidence and honest about its limits.",
      summaryCategory: "Evidence and limitations",
      prompts: [
        "Identify the strongest available evidence for the chosen direction.",
        "Ask whether the research population resembles this client and setting.",
        "Name gaps, harms, limitations, or exclusions in the evidence base.",
        "Choose an outcome, feedback signal, or measure to monitor."
      ],
      standards: [
        { label: "OCSWSSW Principle II: Competence and Integrity", url: "https://www.ocswssw.org/sop/principle-ii-competence-and-integrity/" },
        { label: "OCSWSSW Code of Ethics and Standards of Practice PDF", url: "https://www.ocswssw.org/wp-content/uploads/Code-of-Ethics-and-Standards-of-Practice-September-7-2018.pdf" },
        { label: "CASW Standards of Practice for Social Work 1995", url: "https://www.casw-acts.ca/en/canadian-association-social-workers-standards-practice-social-work-1995" },
        { label: "CASWE Accreditation", url: "https://caswe-acfts.ca/our-activities/accreditation/" }
      ]
    },
    {
      id: "mirrors",
      name: "Reflection Room",
      guide: "The reflective supervisor, who notices power, social location, bias, countertransference, and institutional echoes without shame or defensiveness.",
      question: "What am I bringing into this encounter?",
      explanation:
        "The Reflection Room makes use of self, anti-oppressive practice, assumptions, power, and critical reflexivity part of clinical reasoning. It asks students to examine how the practitioner is already in the room.",
      scene: "The room reflects more than the client. Notice your reactions, assumptions, role power, social location, and the institution behind you.",
      scenario: "You feel unusually protective of a client and impatient with another professional. What might be countertransference, bias, role pressure, or useful clinical information?",
      reward: "A more accountable use of self.",
      summaryCategory: "Power, identity, and use of self",
      prompts: [
        "Name relevant identities, power differences, and institutional roles.",
        "Notice emotional responses, urges, avoidance, assumptions, and bias.",
        "Consider how agency policies or social systems are shaping the encounter.",
        "Plan one transparent and accountable use of self."
      ],
      standards: [
        { label: "CASW Code of Ethics 2024", url: "https://www.casw-acts.ca/en/casw-code-ethics-2024" },
        { label: "OCSWSSW Principle I: Relationship with Clients", url: "https://www.ocswssw.org/sop/principle-i-relationship-with-clients/" },
        { label: "OCSWSSW Code of Ethics", url: "https://www.ocswssw.org/sop/code-of-ethics/" }
      ]
    },
    {
      id: "garden",
      name: "The Consultation Garden",
      guide: "The practice gardener, patient and observant, who checks what is growing, what needs support, and when the plan needs repair.",
      question: "What do I need to learn, monitor, or seek support for?",
      explanation:
        "The Consultation Garden connects clinical work to supervision, consultation, continuing competence, evaluation, professional development, monitoring, repair, and learning over time.",
      scene: "The path continues outside the room. Decide what needs supervision, what needs monitoring, and when the plan should be revised.",
      scenario: "After two sessions, the client is attending but reports no change and more strain at home. What would you monitor, repair, or bring to consultation?",
      reward: "A next-step plan with support, review, and repair built in.",
      summaryCategory: "Consultation, evaluation, and next steps",
      prompts: [
        "Set a near-term next step and a review point.",
        "Decide what should be brought to supervision or consultation.",
        "Choose signs of progress, strain, rupture, or risk escalation.",
        "Document the rationale, alternatives considered, and client collaboration."
      ],
      standards: [
        { label: "OCSWSSW Principle II: Competence and Integrity", url: "https://www.ocswssw.org/sop/principle-ii-competence-and-integrity/" },
        { label: "OCSWSSW Principle III: Responsibility to Clients", url: "https://www.ocswssw.org/sop/principle-iii-responsibility-to-clients/" },
        { label: "OCSWSSW Legislation and Regulations", url: "https://www.ocswssw.org/about-us/legislation-and-regulations/" }
      ]
    },
    {
      id: "commons",
      name: "The Commons",
      guide: "The integrative practice chair, who gathers client goals, clinical judgment, evidence, ethics, and accountability around one table.",
      question: "Given everything we know, what should happen next?",
      explanation:
        "The Commons is the shared center of clinical judgment. It integrates assessment, intervention options, fit, evidence, reflexivity, consultation, client goals, and collaborative care planning into an accountable next step.",
      scene: "All paths return to the table. Combine the clues, options, evidence, fit, ethics, and consultation needs into one accountable move.",
      scenario: "The client wants relief now, the formulation is still incomplete, and the evidence suggests several options. What is the next decision you can explain and monitor?",
      reward: "An integrated clinical decision the client, supervisor, and record can all understand.",
      summaryCategory: "Integrated clinical decision",
      prompts: [
        "State the decision that needs to be made now.",
        "Name the client goal, clinical rationale, and ethical considerations.",
        "Identify what remains uncertain and how it will be monitored.",
        "Write the next step in language the client could understand."
      ],
      standards: [
        { label: "OCSWSSW Code of Ethics", url: "https://www.ocswssw.org/sop/code-of-ethics/" },
        { label: "CASW Social Work Scope of Practice", url: "https://www.casw-acts.ca/en/what-social-work/casw-social-work-scope-practice" },
        { label: "CASW Standards of Practice for Social Work 1995", url: "https://www.casw-acts.ca/en/canadian-association-social-workers-standards-practice-social-work-1995" },
        { label: "Ontario Social Work and Social Service Work Act Regulation", url: "https://www.ontario.ca/laws/regulation/000383" }
      ]
    }
  ]
};
