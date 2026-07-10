/*
  The House of Advanced Practice app script.

  This file renders the map from assets/data/site-data.js and manages:
  - Room opening/closing
  - Keyboard interaction
  - Clinical Decision Notebook notes in localStorage
  - Summary generation, printing, and download
  - Mobile zoom controls
*/
(function () {
  const data = window.HOUSE_DATA;
  const svgNS = "http://www.w3.org/2000/svg";

  const rooms = data.rooms;
  const roomById = new Map(rooms.map((room) => [room.id, room]));
  const siteByRoomId = new Map(data.mapSites.map((site) => [site.roomId, site]));
  const storageKey = data.site.storageKey;
  const legacyStorageKey = data.site.legacyStorageKey;

  const planShell = document.querySelector("#plan-shell");
  const planCanvas = document.querySelector("#plan-canvas");
  const mapSites = document.querySelector("#map-sites");
  const worldDecor = document.querySelector("#world-decor");
  const directoryList = document.querySelector("#room-directory-list");
  const notebookRoomList = document.querySelector("#notebook-room-list");
  const detailPanel = document.querySelector("#detail-panel");
  const roomTitle = document.querySelector("#room-title");
  const roomGuide = document.querySelector("#room-guide");
  const roomQuestion = document.querySelector("#room-question");
  const roomScene = document.querySelector("#room-scene");
  const roomScenario = document.querySelector("#room-scenario");
  const roomReward = document.querySelector("#room-reward");
  const roomLevelPanel = document.querySelector("#room-level-panel");
  const roomMoveCount = document.querySelector("#room-move-count");
  const roomStandardCount = document.querySelector("#room-standard-count");
  const roomExplanation = document.querySelector("#room-explanation");
  const roomPrompts = document.querySelector("#room-prompts");
  const roomStandards = document.querySelector("#room-standards");
  const roomNote = document.querySelector("#room-note");
  const activeRoomName = document.querySelector("#active-room-name");
  const legendRoom = document.querySelector("#legend-room");
  const legendQuestion = document.querySelector("#legend-question");
  const saveStatus = document.querySelector("#save-status");
  const summaryContent = document.querySelector("#summary-content");
  const notebook = document.querySelector("#notebook");
  const notebookToggle = document.querySelector(".notebook-toggle");
  const notebookClose = document.querySelector(".notebook-close");

  let activeRoomId = "commons";
  let lastFocusedRoom = null;
  let notes = loadNotes();
  let zoom = 1;

  initialize();

  function initialize() {
    applySiteCopy();
    renderWorldDecor();
    renderMapSites();
    renderDirectory();
    renderNotebookRoomList();
    attachEventHandlers();

    const initialRoomId = location.hash.replace("#", "");
    if (roomById.has(initialRoomId)) {
      openRoom(initialRoomId, { updateFocus: false });
    } else {
      setActiveRoom("commons", { activate: true, loadNote: true });
    }
  }

  function applySiteCopy() {
    document.title = data.site.title;
    document.querySelector("[data-site='eyebrow']").textContent = data.site.eyebrow;
    document.querySelector("[data-site='title']").textContent = data.site.title;
    document.querySelector("[data-site='subtitle']").textContent = data.site.subtitle;
    document.querySelector("#plan-title").textContent = data.site.mapTitle;
    document.querySelector("#plan-description").textContent = data.site.mapDescription;
  }

  function loadNotes() {
    try {
      const current = JSON.parse(localStorage.getItem(storageKey));
      if (current) return current;
      return JSON.parse(localStorage.getItem(legacyStorageKey)) || {};
    } catch (error) {
      return {};
    }
  }

  function persistNotes() {
    localStorage.setItem(storageKey, JSON.stringify(notes));
  }

  function setStatus(message) {
    saveStatus.textContent = message;
    window.clearTimeout(setStatus.timeout);
    setStatus.timeout = window.setTimeout(() => {
      saveStatus.textContent = "";
    }, 2600);
  }

  function svgElement(name, attributes = {}) {
    const element = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined && value !== null) element.setAttribute(key, value);
    });
    return element;
  }

  function renderWorldDecor() {
    data.worldDecor.forEach((item) => {
      const element = svgElement(item.type, {
        class: item.className,
        cx: item.cx,
        cy: item.cy,
        r: item.r,
        d: item.d
      });
      worldDecor.append(element);
    });
  }

  function renderMapSites() {
    data.mapSites.forEach((site) => {
      const room = roomById.get(site.roomId);
      if (!room) return;

      const group = svgElement("g", {
        class: `room-group map-site site-${site.roomId}`,
        "data-room-id": site.roomId,
        tabindex: "0",
        role: "button",
        "aria-label": `${room.name}: ${room.question}`
      });

      const ground = svgElement("path", {
        class: "site-ground",
        d: site.shape,
        fill: site.colours?.fill
      });

      group.append(ground, renderIcon(site.icon));
      group.append(svgElement("rect", {
        class: `label-plaque${site.plaque.large ? " large" : ""}`,
        x: site.plaque.x,
        y: site.plaque.y,
        width: site.plaque.width,
        height: site.plaque.height,
        rx: site.plaque.rx
      }));
      group.append(svgElement("text", {
        class: "room-level",
        x: site.level.x,
        y: site.level.y
      }));
      group.lastChild.textContent = site.levelLabel;

      group.append(svgElement("text", {
        class: "map-label",
        x: site.label.x,
        y: site.label.y
      }));
      group.lastChild.textContent = room.name;

      group.append(svgElement("rect", {
        class: "enter-plaque",
        x: site.enterPlaque.x,
        y: site.enterPlaque.y,
        width: site.enterPlaque.width,
        height: site.enterPlaque.height,
        rx: site.enterPlaque.rx
      }));
      group.append(svgElement("text", {
        class: "enter-label",
        x: site.enter.x,
        y: site.enter.y
      }));
      group.lastChild.textContent = site.enter.text;

      group.append(svgElement("rect", {
        class: "hit-area",
        x: site.hit.x,
        y: site.hit.y,
        width: site.hit.width,
        height: site.hit.height
      }));

      mapSites.append(group);
    });
  }

  function renderIcon(iconName) {
    const group = svgElement("g", { class: `icon-token icon-${iconName}`, "aria-hidden": "true" });
    const add = (name, attributes) => group.append(svgElement(name, attributes));

    const icons = {
      commons: () => {
        add("circle", { cx: 602, cy: 326, r: 34 });
        add("circle", { class: "token-cut", cx: 602, cy: 326, r: 17 });
        add("path", { d: "M602 292 v68 M568 326 h68 M578 302 l48 48 M626 302 l-48 48" });
      },
      assessment: () => {
        add("circle", { cx: 231, cy: 142, r: 24 });
        add("path", { d: "M218 142 h26 M231 129 v26" });
      },
      library: () => {
        add("rect", { x: 568, y: 94, width: 20, height: 32, rx: 5 });
        add("rect", { x: 592, y: 88, width: 20, height: 38, rx: 5 });
        add("rect", { x: 616, y: 98, width: 20, height: 28, rx: 5 });
      },
      tailor: () => {
        add("path", { d: "M948 130 q25 -22 50 0 l-18 36 h-14z" });
        add("circle", { cx: 943, cy: 161, r: 10 });
        add("circle", { cx: 1003, cy: 161, r: 10 });
      },
      mirrors: () => {
        add("path", { d: "M194 384 q27 -30 54 0 v38 q-27 18 -54 0z" });
        add("path", { d: "M204 396 q18 -14 36 0" });
      },
      lab: () => {
        add("path", { d: "M948 372 h40 v16 l24 50 q8 16 -10 16 h-68 q-18 0 -10 -16 l24 -50z" });
        add("path", { d: "M944 428 h48" });
      },
      garden: () => {
        add("circle", { cx: 226, cy: 598, r: 15 });
        add("circle", { cx: 248, cy: 590, r: 15 });
        add("circle", { cx: 270, cy: 598, r: 15 });
        add("path", { d: "M248 604 v24" });
      },
      threshold: () => {
        add("path", { d: "M576 604 h48 v44 h-48z" });
        add("path", { d: "M600 648 v-44" });
        add("circle", { cx: 612, cy: 628, r: 4 });
      }
    };

    icons[iconName]?.();
    return group;
  }

  function setActiveRoom(roomId, options = {}) {
    const room = roomById.get(roomId);
    if (!room) return;

    if (options.revealLegend) {
      document.querySelector(".floor-plan-section").classList.add("has-room-focus");
    }

    activeRoomId = room.id;
    activeRoomName.textContent = room.name;
    legendRoom.textContent = room.name;
    legendQuestion.textContent = room.question;

    if (options.activate !== false) {
      document.querySelectorAll(".room-group").forEach((group) => {
        group.classList.toggle("is-active", group.dataset.roomId === room.id);
      });
    }

    if (options.loadNote !== false) {
      roomNote.value = notes[room.id] || "";
    }
  }

  function openRoom(roomId, options = {}) {
    const room = roomById.get(roomId);
    if (!room) return;

    if (!detailPanel.classList.contains("is-open")) {
      lastFocusedRoom = document.activeElement;
    } else {
      saveActiveNote();
    }

    const site = siteByRoomId.get(room.id);
    setActiveRoom(room.id, { revealLegend: true });
    detailPanel.dataset.roomId = room.id;

    roomTitle.textContent = room.name;
    roomGuide.textContent = room.guide;
    roomQuestion.textContent = room.question;
    roomScene.textContent = room.scene;
    roomScenario.textContent = room.scenario;
    roomReward.textContent = room.reward;
    roomLevelPanel.textContent = site?.levelLabel || "Room";
    roomMoveCount.textContent = `${room.prompts.length} moves`;
    roomStandardCount.textContent = `${room.standards.length} standards`;
    roomExplanation.textContent = room.explanation;

    renderList(roomPrompts, room.prompts, (prompt, item, index) => {
      item.style.setProperty("--move-number", `"${index + 1}"`);
      item.textContent = prompt;
    });

    renderList(roomStandards, room.standards, (standard, item) => {
      const link = document.createElement("a");
      link.href = standard.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = standard.label;
      item.append(link);
    });

    detailPanel.classList.add("is-open");
    detailPanel.setAttribute("aria-hidden", "false");
    document.body.classList.add("panel-open");
    history.replaceState(null, "", `#${room.id}`);

    if (options.updateFocus !== false) {
      detailPanel.querySelector("[data-close-room]").focus();
    }
  }

  function closeRoomPanel() {
    saveActiveNote();
    detailPanel.classList.remove("is-open");
    detailPanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("panel-open");
    history.replaceState(null, "", "#house");

    if (lastFocusedRoom && typeof lastFocusedRoom.focus === "function") {
      lastFocusedRoom.focus();
    }
  }

  function saveActiveNote() {
    notes[activeRoomId] = roomNote.value.trim();
    persistNotes();
    renderNotebookRoomList();
    setStatus("Note saved.");
  }

  function renderList(container, items, buildItem) {
    container.innerHTML = "";
    items.forEach((entry, index) => {
      const item = document.createElement("li");
      buildItem(entry, item, index);
      container.append(item);
    });
  }

  function renderDirectory() {
    directoryList.innerHTML = "";
    rooms.forEach((room) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.roomId = room.id;
      button.innerHTML = `<strong>${room.name}</strong><span>${room.question}</span>`;
      button.addEventListener("click", () => openRoom(room.id));
      button.addEventListener("focus", () => setActiveRoom(room.id, { revealLegend: true }));
      directoryList.append(button);
    });
  }

  function renderNotebookRoomList() {
    notebookRoomList.innerHTML = "";
    rooms.forEach((room) => {
      const entry = document.createElement("button");
      entry.type = "button";
      entry.dataset.roomId = room.id;
      entry.className = notes[room.id] ? "has-note" : "";
      entry.innerHTML = `<span>${room.name}</span><small>${notes[room.id] ? "Note saved" : "No note yet"}</small>`;
      entry.addEventListener("click", () => openRoom(room.id));
      notebookRoomList.append(entry);
    });
  }

  function generateSummaryText() {
    const grouped = Object.fromEntries(data.notebookHeadings.map((heading) => [heading, []]));

    rooms.forEach((room) => {
      const note = notes[room.id];
      if (note) grouped[room.summaryCategory].push({ room: room.name, note });
    });

    return grouped;
  }

  function generateSummary() {
    saveActiveNote();
    const grouped = generateSummaryText();
    summaryContent.innerHTML = "";

    data.notebookHeadings.forEach((heading) => {
      const section = document.createElement("section");
      section.className = "summary-section";

      const title = document.createElement("h4");
      title.textContent = heading;
      section.append(title);

      if (grouped[heading].length === 0) {
        const empty = document.createElement("p");
        empty.className = "summary-empty";
        empty.textContent = "No note yet.";
        section.append(empty);
      } else {
        grouped[heading].forEach((entry) => {
          const wrapper = document.createElement("div");
          wrapper.className = "summary-entry";
          const label = document.createElement("strong");
          label.textContent = entry.room;
          const text = document.createElement("p");
          text.textContent = entry.note;
          wrapper.append(label, text);
          section.append(wrapper);
        });
      }

      summaryContent.append(section);
    });

    setStatus("Summary generated.");
  }

  function downloadSummary() {
    generateSummary();
    const grouped = generateSummaryText();
    const lines = [data.site.title, "Clinical Decision Summary", ""];

    data.notebookHeadings.forEach((heading) => {
      lines.push(heading, "-".repeat(heading.length));
      if (grouped[heading].length === 0) {
        lines.push("No note yet.");
      } else {
        grouped[heading].forEach((entry) => lines.push(`${entry.room}: ${entry.note}`));
      }
      lines.push("");
    });

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "clinical-decision-summary.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  function resetNotes() {
    const confirmed = window.confirm("Reset all Clinical Decision Notebook notes? This cannot be undone.");
    if (!confirmed) return;

    notes = {};
    roomNote.value = "";
    persistNotes();
    renderNotebookRoomList();
    generateSummary();
    setStatus("Notes reset.");
  }

  function setNotebookOpen(isOpen) {
    notebook.classList.toggle("is-open", isOpen);
    notebookToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) notebook.querySelector(".notebook-close").focus();
  }

  function setZoom(nextZoom) {
    zoom = Math.min(1.7, Math.max(0.85, nextZoom));
    planCanvas.style.setProperty("--plan-zoom", zoom.toFixed(2));
  }

  function attachEventHandlers() {
    mapSites.addEventListener("click", (event) => {
      const group = event.target.closest(".room-group");
      if (group) openRoom(group.dataset.roomId);
    });

    mapSites.addEventListener("focusin", (event) => {
      const group = event.target.closest(".room-group");
      if (group) setActiveRoom(group.dataset.roomId, { revealLegend: true, loadNote: false });
    });

    mapSites.addEventListener("keydown", (event) => {
      const group = event.target.closest(".room-group");
      if (!group) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRoom(group.dataset.roomId);
      }
    });

    document.querySelector("[data-close-room]").addEventListener("click", closeRoomPanel);
    document.querySelector("#save-note").addEventListener("click", saveActiveNote);
    roomNote.addEventListener("blur", saveActiveNote);

    notebookToggle.addEventListener("click", () => setNotebookOpen(!notebook.classList.contains("is-open")));
    notebookClose.addEventListener("click", () => setNotebookOpen(false));
    document.querySelector("#summary-button").addEventListener("click", generateSummary);
    document.querySelector("#print-button").addEventListener("click", () => {
      generateSummary();
      window.print();
    });
    document.querySelector("#download-button").addEventListener("click", downloadSummary);
    document.querySelector("#reset-notes").addEventListener("click", resetNotes);

    document.querySelectorAll("[data-zoom]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.zoom;
        if (action === "in") setZoom(zoom + 0.15);
        if (action === "out") setZoom(zoom - 0.15);
        if (action === "reset") {
          setZoom(1);
          planShell.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (detailPanel.classList.contains("is-open")) closeRoomPanel();
        if (notebook.classList.contains("is-open")) setNotebookOpen(false);
      }
    });
  }
})();
