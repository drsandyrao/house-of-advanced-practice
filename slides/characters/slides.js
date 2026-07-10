/*
  Editable slide content for The Guides of the House of Advanced Practice.

  Revise wording here without touching the HTML layout.
  Each guide slide can define: room, guide, question, purpose, points, speaks,
  and avatar settings used by the SVG illustration.
*/
const GUIDE_SLIDES = [
  {
    type: "title",
    kicker: "Graduate Social Work Clinical Practice",
    title: "The Guides of the House of Advanced Practice",
    subtitle: "A memory palace for advanced clinical social work judgment",
    caption: "Eight guides, one shared practice of accountable judgment.",
    avatar: { symbol: "house", accent: "#2f5d50", secondary: "#b58a57" }
  },
  {
    type: "intro",
    kicker: "Why the House Exists",
    title: "Return to the same questions. Notice what changes.",
    subtitle:
      "The House helps social workers make accountable clinical decisions by returning to a shared set of professional questions again and again.",
    points: [
      "Clinical judgment becomes teachable when the question is visible.",
      "Each room slows down one part of decision-making.",
      "The guides help students remember what to check before acting.",
      "The goal is deliberate practice, not a collection of disconnected techniques."
    ],
    speaks: "When the House speaks, it asks: what decision are we making, and how will we account for it?",
    caption: "A repeated path through complexity.",
    avatar: { symbol: "map", accent: "#567fb1", secondary: "#2f5d50" }
  },
  {
    room: "The Commons",
    guide: "The Convener",
    question: "Given everything we know, what should happen next?",
    purpose: "integration, clinical judgment, collaborative decision-making, client goals, accountability",
    points: [
      "Gather the thread from every room.",
      "Hold client goals beside professional responsibility.",
      "Translate formulation into a next step.",
      "Make the decision accountable and reviewable."
    ],
    speaks: "When this guide speaks, listen for the next responsible clinical move.",
    avatar: { symbol: "convener", accent: "#2f5d50", secondary: "#b58a57" }
  },
  {
    room: "The Threshold",
    guide: "The Gatekeeper",
    question: "Am I the right person to provide this care?",
    purpose: "scope, authority, competence, consent, consultation, referral",
    points: [
      "Clarify role before intervention.",
      "Check consent, authority, and limits.",
      "Name what requires supervision or consultation.",
      "Refer when another door is safer."
    ],
    speaks: "When this guide speaks, pause at the door before stepping in.",
    avatar: { symbol: "gatekeeper", accent: "#2f5d50", secondary: "#c4865a" }
  },
  {
    room: "The Assessment Studio",
    guide: "The Detective",
    question: "What is happening, and what do I still need to understand?",
    purpose: "assessment, risk, strengths, formulation, diagnosis, goals, social context",
    points: [
      "Separate observation, report, and inference.",
      "Look for strengths, risk, pattern, and context.",
      "Hold more than one possible formulation.",
      "Let assessment remain provisional."
    ],
    speaks: "When this guide speaks, follow the evidence without closing the case too soon.",
    avatar: { symbol: "detective", accent: "#6f8fb4", secondary: "#2f5d50" }
  },
  {
    room: "The Therapy Library",
    guide: "The Librarian",
    question: "What approaches exist, and what is each one designed to do?",
    purpose: "therapy landscape, mechanisms of change, intervention options, history of therapies",
    points: [
      "Choose by purpose, not habit.",
      "Match interventions to mechanisms of change.",
      "Know the assumptions behind each approach.",
      "Keep more than one shelf available."
    ],
    speaks: "When this guide speaks, ask what the intervention is meant to change.",
    avatar: { symbol: "librarian", accent: "#6d7f56", secondary: "#b58a57" }
  },
  {
    room: "The Tailor's Studio",
    guide: "The Tailor",
    question: "What fits this person, in this context, at this time?",
    purpose: "adaptation, culture, race, gender, sexuality, disability, trauma, language, access, feasibility",
    points: [
      "Adapt without diluting purpose.",
      "Treat culture and access as clinical facts.",
      "Check pace, language, and practical feasibility.",
      "Let client goals shape the pattern."
    ],
    speaks: "When this guide speaks, measure the plan against the person's actual life.",
    avatar: { symbol: "tailor", accent: "#b58a57", secondary: "#7aa895" }
  },
  {
    room: "The Evidence Laboratory",
    guide: "The Scientist",
    question: "What supports this decision, and what does the evidence leave out?",
    purpose: "evidence-informed practice, research design, RCTs, qualitative evidence, lived expertise, practice wisdom, outcomes, measurement",
    points: [
      "Weigh research, outcomes, and practice wisdom.",
      "Ask who was included in the evidence.",
      "Notice limits, fit, and uncertainty.",
      "Measure enough to learn while care continues."
    ],
    speaks: "When this guide speaks, respect evidence and keep its blind spots visible.",
    avatar: { symbol: "scientist", accent: "#5f93a5", secondary: "#b58a57" }
  },
  {
    room: "The Hall of Mirrors",
    guide: "The Mirror",
    question: "What am I bringing into this encounter?",
    purpose: "use of self, power, social location, assumptions, bias, countertransference, anti-oppressive practice, critical reflexivity",
    points: [
      "Locate power and social position.",
      "Track assumptions and emotional responses.",
      "Use self with discipline and humility.",
      "Let reflection change the clinical stance."
    ],
    speaks: "When this guide speaks, turn the clinical lens back toward yourself.",
    avatar: { symbol: "mirror", accent: "#7a86a8", secondary: "#2f5d50" }
  },
  {
    room: "The Consultation Garden",
    guide: "The Gardener",
    question: "What do I need to learn, monitor, or seek support for?",
    purpose: "supervision, consultation, continuing competence, evaluation, repair, monitoring, professional growth",
    points: [
      "Use supervision as part of care.",
      "Monitor outcomes and unintended effects.",
      "Repair when the work needs repair.",
      "Keep competence growing over time."
    ],
    speaks: "When this guide speaks, tend the work beyond the session.",
    avatar: { symbol: "gardener", accent: "#6fa77d", secondary: "#b58a57" }
  },
  {
    type: "journey",
    kicker: "The Full Clinical Journey",
    title: "A path students can rehearse.",
    subtitle:
      "Threshold -> Assessment Studio -> Therapy Library -> Tailor's Studio -> Evidence Laboratory -> Hall of Mirrors -> Consultation Garden -> Commons.",
    points: [
      "Begin with authority and fit for service.",
      "Move from assessment to options to adaptation.",
      "Test decisions against evidence and reflexivity.",
      "Return to the Commons for an integrated next step."
    ],
    speaks: "When the guides speak together, clinical judgment becomes a sequence students can practice.",
    caption: "The journey loops back to accountable action.",
    avatar: { symbol: "journey", accent: "#2f5d50", secondary: "#567fb1" }
  },
  {
    type: "closing",
    kicker: "Closing Reflection",
    title: "Good clinical practice is not eclectic.",
    subtitle:
      "It is deliberate, accountable, evidence-informed, critically reflective, and adapted to the person in context.",
    caption: "A disciplined practice of returning, revising, and deciding.",
    avatar: { symbol: "house", accent: "#2f5d50", secondary: "#b58a57" }
  }
];

(function () {
  const stage = document.querySelector("#slide-stage");
  const kicker = document.querySelector("#slide-kicker");
  const title = document.querySelector("#slide-title");
  const subtitle = document.querySelector("#slide-subtitle");
  const guideMeta = document.querySelector("#guide-meta");
  const question = document.querySelector("#core-question");
  const points = document.querySelector("#teaching-points");
  const speaks = document.querySelector("#guide-speaks");
  const avatarArt = document.querySelector("#avatar-art");
  const avatarCaption = document.querySelector("#avatar-caption");
  const previous = document.querySelector("#previous-slide");
  const next = document.querySelector("#next-slide");
  const progressLabel = document.querySelector("#progress-label");
  const progressBar = document.querySelector("#progress-bar");
  const dotList = document.querySelector("#dot-list");
  const printDeck = document.querySelector("#print-deck");
  let current = getInitialIndex();

  initialize();

  function initialize() {
    GUIDE_SLIDES.forEach((slide, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Go to slide ${index + 1}: ${slide.title || slide.room}`);
      button.addEventListener("click", () => goTo(index));
      dotList.append(button);
    });

    previous.addEventListener("click", () => goTo(current - 1));
    next.addEventListener("click", () => goTo(current + 1));
    document.addEventListener("keydown", handleKeys);
    renderPrintDeck();
    render();
  }

  function getInitialIndex() {
    const raw = Number.parseInt(location.hash.replace("#slide-", ""), 10);
    return Number.isInteger(raw) && raw > 0 && raw <= GUIDE_SLIDES.length ? raw - 1 : 0;
  }

  function goTo(index) {
    current = Math.max(0, Math.min(GUIDE_SLIDES.length - 1, index));
    history.replaceState(null, "", `#slide-${current + 1}`);
    render();
  }

  function handleKeys(event) {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      goTo(current + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goTo(current - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(GUIDE_SLIDES.length - 1);
    }
  }

  function render() {
    const slide = GUIDE_SLIDES[current];
    stage.dataset.slideType = slide.type || "guide";
    kicker.textContent = slide.kicker || slide.room;
    title.textContent = slide.title || slide.guide;
    subtitle.textContent = slide.subtitle || slide.purpose;
    question.textContent = slide.question ? `Core question: ${slide.question}` : "";
    question.hidden = !slide.question;
    guideMeta.innerHTML = slide.guide
      ? `<span>${slide.room}</span><span>${slide.guide}</span>`
      : "";
    points.innerHTML = "";
    (slide.points || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      points.append(li);
    });
    points.hidden = !slide.points?.length;
    speaks.textContent = slide.speaks || "";
    speaks.hidden = !slide.speaks;
    avatarArt.innerHTML = renderAvatar(slide.avatar || {});
    avatarCaption.textContent = slide.caption || `${slide.guide} of ${slide.room}`;
    previous.disabled = current === 0;
    next.disabled = current === GUIDE_SLIDES.length - 1;
    progressLabel.textContent = `${current + 1} / ${GUIDE_SLIDES.length}`;
    progressBar.style.inlineSize = `${((current + 1) / GUIDE_SLIDES.length) * 100}%`;
    [...dotList.children].forEach((button, index) => {
      button.classList.toggle("is-active", index === current);
      button.setAttribute("aria-current", index === current ? "step" : "false");
    });
  }

  function renderAvatar({ symbol = "house", accent = "#2f5d50", secondary = "#b58a57" }) {
    const base = `
      <svg viewBox="0 0 520 520" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="avatarGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#f0ebe2"/>
          </linearGradient>
        </defs>
        <circle class="halo" cx="260" cy="260" r="212"/>
        <path class="floor-line" d="M102 382 C176 426 336 426 420 382"/>
        <g class="figure">
          <path class="robe" d="M178 392 C190 306 216 244 260 244 C304 244 330 306 342 392 Z" fill="${accent}"/>
          <circle class="head" cx="260" cy="176" r="48"/>
          <path class="shoulders" d="M202 260 C230 282 290 282 318 260"/>
        </g>
        ${renderSymbol(symbol, accent, secondary)}
      </svg>
    `;
    return base;
  }

  function renderPrintDeck() {
    printDeck.innerHTML = GUIDE_SLIDES.map((slide, index) => {
      const pointsMarkup = (slide.points || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      const meta = slide.guide
        ? `<p class="print-meta">${escapeHtml(slide.room)} | ${escapeHtml(slide.guide)}</p>`
        : "";
      const questionMarkup = slide.question
        ? `<p class="print-question">Core question: ${escapeHtml(slide.question)}</p>`
        : "";
      const speaksMarkup = slide.speaks ? `<p class="print-speaks">${escapeHtml(slide.speaks)}</p>` : "";
      return `
        <article class="print-slide">
          <p class="eyebrow">${escapeHtml(slide.kicker || slide.room || `Slide ${index + 1}`)}</p>
          <h2>${escapeHtml(slide.title || slide.guide)}</h2>
          <p>${escapeHtml(slide.subtitle || slide.purpose || "")}</p>
          ${meta}
          ${questionMarkup}
          ${pointsMarkup ? `<ul>${pointsMarkup}</ul>` : ""}
          ${speaksMarkup}
        </article>
      `;
    }).join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSymbol(symbol, accent, secondary) {
    const symbols = {
      house: `<path class="object" d="M138 252 L260 142 L382 252 V380 H138 Z" fill="#fdfbf7"/><path class="object-line" d="M198 380 V286 H322 V380 M138 252 L260 142 L382 252"/>`,
      map: `<path class="object" d="M144 154 L226 128 L300 154 L382 128 V364 L300 390 L226 364 L144 390 Z" fill="#fdfbf7"/><path class="object-line" d="M226 128 V364 M300 154 V390 M174 322 C220 268 270 282 332 212"/>`,
      convener: `<circle class="object" cx="260" cy="332" r="72" fill="#fdfbf7"/><path class="object-line" d="M260 260 V404 M188 332 H332 M210 282 L310 382 M310 282 L210 382"/><circle class="small-seat" cx="164" cy="306" r="18" fill="${secondary}"/><circle class="small-seat" cx="356" cy="306" r="18" fill="${secondary}"/><circle class="small-seat" cx="260" cy="438" r="18" fill="${secondary}"/>`,
      gatekeeper: `<path class="object" d="M190 232 H330 V402 H190 Z" fill="#fdfbf7"/><path class="object-line" d="M260 232 V402 M190 232 H330 V402 H190 Z"/><circle class="small-seat" cx="294" cy="318" r="10" fill="${secondary}"/><path class="object-line" d="M178 414 H342"/>`,
      detective: `<circle class="object" cx="242" cy="286" r="62" fill="#fdfbf7"/><path class="object-line" d="M286 330 L348 392 M212 286 H272 M242 256 V316"/><path class="object-line" d="M178 148 H342 M198 176 H322"/>`,
      librarian: `<path class="object" d="M150 178 H370 V374 H150 Z" fill="#fdfbf7"/><path class="object-line" d="M178 178 V374 M222 178 V374 M266 178 V374 M310 178 V374 M150 242 H370 M150 306 H370"/><path class="accent-line" d="M356 186 L298 374" stroke="${secondary}"/>`,
      tailor: `<path class="object" d="M260 146 C322 194 322 306 260 380 C198 306 198 194 260 146 Z" fill="#fdfbf7"/><path class="object-line" d="M260 146 V380 M220 222 C242 242 278 242 300 222 M206 338 H314"/><path class="accent-line" d="M158 404 C230 354 306 354 378 404" stroke="${secondary}"/>`,
      scientist: `<path class="object" d="M224 176 H296 V238 L352 376 C362 400 346 416 320 416 H200 C174 416 158 400 168 376 L224 238 Z" fill="#fdfbf7"/><path class="object-line" d="M224 176 H296 M206 324 H314 M224 238 H296"/><circle class="small-seat" cx="314" cy="376" r="14" fill="${secondary}"/>`,
      mirror: `<path class="object" d="M198 142 C244 110 320 128 340 194 V334 C302 372 234 372 196 334 V194 C196 174 196 158 198 142 Z" fill="#fdfbf7"/><path class="object-line" d="M220 204 C246 184 292 184 318 204 M224 310 C256 330 284 330 316 310"/><path class="accent-line" d="M178 414 H342" stroke="${secondary}"/>`,
      gardener: `<path class="object-line" d="M160 388 C198 332 232 318 260 252 C288 318 322 332 360 388"/><circle class="object" cx="210" cy="316" r="28" fill="#fdfbf7"/><circle class="object" cx="310" cy="316" r="28" fill="#fdfbf7"/><path class="accent-line" d="M132 408 C214 374 306 374 388 408" stroke="${secondary}"/>`,
      journey: `<path class="object-line" d="M124 330 C178 198 326 198 384 330"/><path class="accent-line" d="M384 330 l-38 -4 24 -30" stroke="${secondary}"/><circle class="object" cx="150" cy="332" r="20" fill="#fdfbf7"/><circle class="object" cx="260" cy="202" r="20" fill="#fdfbf7"/><circle class="object" cx="370" cy="332" r="20" fill="#fdfbf7"/>`
    };
    return symbols[symbol] || symbols.house;
  }
})();
