/* Duo Logo · The Lab. Vanilla JS, no build step (the DuoVino architecture). */
(() => {
  'use strict';
  const D = window.DUOLOGO;
  const STORE = 'duologo.v1';
  const DAY = 864e5;
  const HALF_LIVES = [1, 3, 7, 16, 35, 90]; // days; each correct review moves one step up, a miss moves one down
  const app = document.getElementById('app');
  const overlay = document.getElementById('overlay');
  const qs = new URLSearchParams(location.search);
  const SHIFT = (+qs.get('shift') || 0) * DAY; // ?shift=3 pretends it's 3 days later (testing decay)
  const now = () => Date.now() + SHIFT;

  /* ---------- state (localStorage, as in DuoVino) ---------- */
  const defaults = () => ({ v: 1, items: {}, units: {}, days: {}, ret: {}, settings: {} });
  const load = () => {
    try { const s = JSON.parse(localStorage.getItem(STORE)); return s ? { ...defaults(), ...s } : defaults(); }
    catch { return defaults(); }
  };
  let S = load();
  const save = () => { S._updated = Date.now(); try { localStorage.setItem(STORE, JSON.stringify(S)); } catch { /* private mode */ } };

  const key = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const todayKey = () => key(new Date(now()));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const strip = s => String(s).replace(/<[^>]+>/g, '');
  const buzz = p => { try { navigator.vibrate && navigator.vibrate(p); } catch { /* no haptics */ } };

  /* ---------- sound: a small synthesised lab (Web Audio, no files, works offline) ---------- */
  let actx = null;
  const audio = () => { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); return actx; };
  const soundOn = () => S.settings.sound !== false;
  // one enveloped oscillator: freq (or [from, to] for a glide), start offset, length, peak gain, wave type
  function tone(f, at = 0, len = 0.2, vol = 0.1, type = 'sine') {
    const a = audio(), t = a.currentTime + at, o = a.createOscillator(), g = a.createGain();
    o.type = type;
    if (Array.isArray(f)) { o.frequency.setValueAtTime(f[0], t); o.frequency.exponentialRampToValueAtTime(f[1], t + len); } else o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + len + 0.02);
  }
  // filtered noise: swishes, fizz and hiss
  function noise(at = 0, len = 0.1, vol = 0.2, type = 'bandpass', freq = 1200, q = 0.8) {
    const a = audio(), t = a.currentTime + at, n = Math.floor(a.sampleRate * len), buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf; f.type = type; f.frequency.value = freq; f.Q.value = q; g.gain.value = vol;
    src.connect(f).connect(g).connect(a.destination); src.start(t);
  }
  // an oscillator through a low-pass filter: buzzers and deflating tones
  function voice(f, at = 0, len = 0.2, vol = 0.1, type = 'sawtooth', lp = 800) {
    const a = audio(), t = a.currentTime + at, o = a.createOscillator(), fl = a.createBiquadFilter(), g = a.createGain();
    o.type = type; fl.type = 'lowpass'; fl.frequency.value = lp;
    if (Array.isArray(f)) { o.frequency.setValueAtTime(f[0], t); o.frequency.exponentialRampToValueAtTime(f[1], t + len); } else o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(fl).connect(g).connect(a.destination); o.start(t); o.stop(t + len + 0.02);
  }
  // FM synthesis: a metallic, instrument-like chime (nothing like DuoVino's glass)
  function fm(f, at = 0, len = 0.5, vol = 0.07, ratio = 3.5, index = 1.2) {
    const a = audio(), t = a.currentTime + at, c = a.createOscillator(), m = a.createOscillator(), mg = a.createGain(), g = a.createGain();
    c.frequency.value = f; m.frequency.value = f * ratio;
    mg.gain.setValueAtTime(f * index, t); mg.gain.exponentialRampToValueAtTime(f * index * 0.05, t + len);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    m.connect(mg).connect(c.frequency); c.connect(g).connect(a.destination);
    m.start(t); c.start(t); m.stop(t + len + 0.02); c.stop(t + len + 0.02);
  }
  const drop = (at, from, to, vol = 0.07) => tone([from, to], at, 0.06, vol);  // a pipette droplet: a fast upward glide
  // Duo Logo's palette: lab electronics and liquids (relays, droplets, analyser chimes, buzzers, radar).
  const SOUNDS = {
    tick: () => noise(0, 0.012, 0.22, 'highpass', 4200, 0.7),                                          // a button: a tiny relay click
    tab: () => { noise(0, 0.01, 0.28, 'bandpass', 2600, 2); noise(0.035, 0.012, 0.2, 'bandpass', 1500, 2); }, // a toggle switch: click-clack
    page: () => { noise(0, 0.18, 0.06, 'bandpass', 5200, 0.4); noise(0.02, 0.08, 0.08, 'lowpass', 500, 0.7); }, // graph paper slides over the bench
    place: () => drop(0, 380, 1500),                                                                    // a pipette drop lands in the slot
    ok: () => { fm(1319, 0, 0.35, 0.06); fm(1976, 0.09, 0.7, 0.055); },                                  // the analyser's "result ready" chime
    bad: () => { voice(98, 0, 0.3, 0.06, 'sawtooth', 700); voice(104, 0, 0.3, 0.06, 'sawtooth', 700); }, // a detuned buzzer
    fizz: () => {                                                                                       // a contaminant effervesces
      for (let i = 0; i < 26; i++) noise(Math.random() * 0.5, 0.008, 0.25, 'highpass', 6000, 0.5);
      for (let i = 0; i < 4; i++) drop(Math.random() * 0.4, 1800, 3200, 0.025);
    },
    fizzle: () => { voice([260, 55], 0, 0.7, 0.08, 'sawtooth', 500); drop(0.15, 500, 700, 0.03); drop(0.4, 400, 520, 0.02); }, // it deflates
    react: () => {                                                                                      // bubbling, then a soft electric chord
      for (let i = 0; i < 10; i++) drop(i * 0.065, 300 + Math.random() * 400, 1000 + Math.random() * 800, 0.05);
      [523, 659, 784, 1047].forEach((f, i) => fm(f, 0.75 + i * 0.025, 1.6, 0.05, 1.4, 0.6));
    },
    discover: () => {                                                                                   // a rising sweep, then a bright bell chord
      tone([330, 990], 0, 0.5, 0.05);
      [1047, 1568, 2093].forEach((f, i) => fm(f, 0.45 + i * 0.04, 1.4, 0.05, 2, 2));
    },
    stable: () => { [0, 0.18, 0.36, 0.54].forEach((at, i) => fm(1760, at, 0.45, 0.06 / (i * 1.8 + 1), 1, 0.3)); }, // a radar ping and its echoes
    geiger: () => { for (let i = 0; i < 7; i++) noise(i * 0.06 + Math.random() * 0.12, 0.012, 0.35, 'highpass', 2000, 0.3); }, // decay, faintly
  };
  const sfx = name => { if (!soundOn()) return; try { SOUNDS[name](); } catch { /* no audio */ } };

  /* ---------- course model ---------- */
  const GROUP = Object.fromEntries(D.groups.map(g => [g.id, g]));
  const EL = Object.fromEntries(D.elements.map(e => [e.id, e]));
  const RX = Object.fromEntries((D.reactions || []).map(r => [r.id, r]));
  const colourOf = e => (GROUP[e.block] || {}).colour || D.graphite;
  const playable = e => !!D.units[e.id];

  // ?demo: a lived-in lab. Originality learned 2 days ago (now decaying) and the passing-off reaction 4 days ago.
  if (qs.has('demo') && !S.demo) {
    const t = now();
    S = defaults(); S.demo = true;
    S.units['u1-5'] = { best: 88, plays: 1, done: t - 2 * DAY };
    S.items['u1-5'] = { stage: 0, last: t - 2 * DAY, reviews: 0, lapses: 0, born: t - 2 * DAY };
    S.items['rx-passing-off'] = { stage: 1, last: t - 4 * DAY, reviews: 1, lapses: 0, born: t - 5 * DAY };
    S.days[key(new Date(t - 2 * DAY))] = 1;
    S.ret[key(new Date(t - 7 * DAY))] = 52;
    save();
  }

  /* ---------- half-life spaced repetition ---------- */
  // Recall probability follows the forgetting curve: p = 2^(−elapsed / half-life). Due once p falls to 50%.
  const halfLife = it => HALF_LIVES[Math.min(it.stage, HALF_LIVES.length - 1)];
  const recall = (it, t = now()) => Math.pow(2, -Math.max(0, t - it.last) / (halfLife(it) * DAY));
  const isDue = it => recall(it) <= 0.5;
  const isStable = it => it.stage >= 4;
  function learn(id) {
    const t = now();
    if (!S.items[id]) S.items[id] = { stage: 0, last: t, reviews: 0, lapses: 0, born: t };
    else S.items[id].last = t;
  }
  function review(id, ok) {
    const it = S.items[id]; if (!it) return;
    if (ok) { it.stage = Math.min(HALF_LIVES.length - 1, it.stage + 1); it.reviews++; }
    else { it.stage = Math.max(0, it.stage - 1); it.lapses++; }
    it.last = now();
  }
  const learned = () => Object.entries(S.items);
  const dueList = () => learned().filter(([, it]) => isDue(it)).sort((a, b) => recall(a[1]) - recall(b[1]));
  const retention = () => { const l = learned(); return l.length ? Math.round(100 * l.reduce((s, [, it]) => s + recall(it), 0) / l.length) : 0; };
  function snapshotRetention() { if (learned().length) { S.ret[todayKey()] = retention(); save(); } }
  function weekTrend() {
    const d = new Date(now() - 7 * DAY), ks = Object.keys(S.ret).filter(k => k <= key(d)).sort();
    return ks.length ? retention() - S.ret[ks[ks.length - 1]] : null;
  }
  const fmtDays = d => d < 1 ? `${Math.max(1, Math.round(d * 24))}h` : `${Math.round(d)}d`;
  const itemName = id => EL[id] ? EL[id].name : RX[id] ? `Reaction: ${RX[id].product.toLowerCase()}` : id;

  /* ---------- tiles ---------- */
  function tileState(e) {
    const it = S.items[e.id];
    if (it) return isDue(it) ? 'decay' : isStable(it) ? 'stable' : 'found';
    return playable(e) ? 'ready' : 'un';
  }
  function tile(e, { now: isNow = false, more = 0, tag = 'button', small = false } = {}) {
    if (!e) return '<div class="el empty"></div>';
    const st = tileState(e), it = S.items[e.id];
    const p = it ? recall(it) : 0;
    // Decay is desaturation: knowledge you're losing literally greys out.
    const style = `--c:${colourOf(e)};${it ? `filter:saturate(${(0.2 + 0.8 * p).toFixed(2)}) brightness(${(1 + 0.15 * (1 - p)).toFixed(2)})` : ''}`;
    const cls = ['el', st === 'un' ? 'un' : st === 'ready' ? 'ready' : '', st === 'decay' ? 'decay' : '', st === 'stable' ? 'stable' : '', isNow ? 'now' : ''].join(' ');
    const label = `${e.name} (${e.unit}): ${st === 'un' ? 'not yet written' : st === 'ready' ? 'ready to discover' : `${Math.round(p * 100)}% recall`}`;
    return `<${tag} class="${cls}" style="${style}" ${tag === 'button' ? `data-act="cell" data-id="${e.id}"` : ''} aria-label="${esc(label)}">
      <div class="n"><span>${e.z}</span></div>${more ? `<span class="more">${esc(more)}</span>` : ''}
      <div class="s">${st === 'un' ? '?' : e.sym}</div>
      ${it && !small ? `<div class="bar"><i style="width:${Math.round(p * 100)}%"></i></div>` : ''}</${tag}>`;
  }
  const nextElement = () => D.elements.find(e => playable(e) && !S.items[e.id]);

  /* ---------- tabs ---------- */
  const tabs = on => `<nav class="tabs">${[['#table', 'TABLE'], ['#notebook', 'NOTEBOOK'], ['#halflife', 'HALF-LIFE']].map(([h, t]) => `<a href="${h}" class="${on === h ? 'on' : ''}"><span>${t}</span></a>`).join('')}</nav>`;

  /* ---------- HOME: the periodic table ---------- */
  function table() {
    snapshotRetention();
    const found = Object.keys(S.items).filter(id => EL[id]).length;
    const nx = nextElement(), due = dueList();
    const ret = retention(), tr = weekTrend();
    const cell = (g, p) => D.elements.filter(e => e.block === g && e.period === p);
    const lead = list => list.find(e => S.items[e.id] && isDue(S.items[e.id])) || list.find(e => e === nx) || list.find(e => S.items[e.id]) || list.find(playable) || list[0];
    let grid = '';
    D.sticks.forEach(st => {
      grid += `<div class="rh" title="${esc(st.long)}">${st.n}</div>`;
      D.groups.forEach(g => {
        const list = cell(g.id, st.n), e = lead(list);
        // a cell holding several elements shows how many are discovered ("2/3"), or how many wait there ("+2")
        const got = list.filter(x => S.items[x.id]).length, more = list.length > 1 ? (got ? `${got}/${list.length}` : `+${list.length - 1}`) : '';
        grid += e ? tile(e, { now: e === nx, more }) : '<div class="el empty"></div>';
      });
    });
    const block = b => D.elements.filter(e => e.block === b).map(e => tile(e, { now: e === nx, small: true })).join('');
    let cta;
    if (due.length) cta = `<a class="btn" href="#stabilise">Stabilise ${due.length} element${due.length > 1 ? 's' : ''}</a>`;
    else if (nx) cta = `<a class="btn" href="#unit-${nx.id}"><b>${nx.sym}</b>Continue · ${esc(nx.name)}</a>`;
    else cta = `<a class="btn" href="#${D.reactions[0].id}">Run a reaction</a>`;
    app.className = 'has-cta';
    app.innerHTML = `
      <div class="top"><span>The Table</span><span>${found} / ${D.elements.length} discovered</span></div>
      <div class="stat"><span class="big">${learned().length ? ret + '%' : '—'}</span><span class="lab">Course retention<br>${tr == null ? (learned().length ? 'measuring…' : 'discover an element to start') : `${tr >= 0 ? '▲' : '▼'} ${Math.abs(tr)}% this week`}</span></div>
      <div class="ptable">
        <div class="blk-h">Foundations</div>
        <div class="blk">${block('fnd')}</div>
        <div class="colh"><span></span>${D.groups.map(g => `<span style="color:${g.colour}">${g.short}</span>`).join('')}</div>
        <div class="grid">${grid}</div>
        <div class="blk-h">Culture, specialist rights &amp; enforcement</div>
        <div class="blk">${block('low')}</div>
        <div class="blk-h">Field work · IP in practice</div>
        <div class="blk">${block('fld')}</div>
      </div>
      <div class="legend"><span>▮ discovered</span><span class="d">◉ decaying</span><span>⬚ undiscovered</span></div>
      <div class="cta">${cta}</div>
      ${tabs('#table')}`;
  }

  /* element / cell sheet */
  function cellSheet(id) {
    const e0 = EL[id];
    const list = ['fnd', 'low', 'fld'].includes(e0.block) ? [e0] : D.elements.filter(e => e.block === e0.block && e.period === e0.period);
    const g = GROUP[e0.block];
    const where = g ? `${g.name} · Stick ${e0.period}: ${D.sticks[e0.period - 1].q}` : (e0.block === 'fnd' ? 'Foundations' : e0.block === 'fld' ? 'Field work · IP in practice' : 'Culture, specialist rights & enforcement');
    const rows = list.map(e => {
      const it = S.items[e.id];
      const status = it ? `${Math.round(recall(it) * 100)}% · t½ ${fmtDays(halfLife(it))}` : playable(e) ? 'Ready' : 'Not yet written';
      const btn = playable(e) ? `<a class="btn ghost" style="width:auto;margin:0;padding:8px 12px;font-size:13px" href="#unit-${e.id}">${it ? 'Re-read' : 'Discover'}</a>` : '';
      return `<div class="row">${tile(e, { tag: 'div', small: true })}<div class="t">${esc(e.name)}<small>Unit ${e.unit}${e.sec ? ' · ' + esc(e.sec) : ''} · ${status}</small></div>${btn}</div>`;
    }).join('');
    overlay.innerHTML = `<div class="scrim" data-act="close"><div class="panel" style="--g:${colourOf(e0)}" data-stop>
      <button class="x" data-act="close" aria-label="Close">✕</button>
      <p class="eyebrow">${esc(where)}</p><h2>${list.length > 1 ? `${list.length} elements` : esc(e0.name)}</h2>
      ${rows}
      ${list.some(playable) ? '' : '<p class="note" style="color:var(--muted)">Mendeleev left gaps for elements not yet found. These units are in the syllabus but not written yet.</p>'}
    </div></div>`;
  }

  /* ---------- NOTEBOOK ---------- */
  function notebook() {
    const outlines = D.elements.filter(e => S.items[e.id] && D.units[e.id] && D.units[e.id].outline);
    app.className = '';
    app.innerHTML = `
      <div class="top"><span>Notebook</span><span>${D.chapters.length} sections</span></div>
      <p class="sect">Your outline</p>
      ${outlines.length ? outlines.map(e => `<div class="outline" style="border-left-color:${colourOf(e)}">${D.units[e.id].outline}</div>`).join('') : '<div class="empty-msg">Each element you discover adds its tests, sections and cases here. By the end it\'s your exam outline.</div>'}
      <p class="sect">Experiments to run</p>
      <div class="rows">${D.reactions.map(r => `<a class="row" style="text-decoration:none" href="#${r.id}"><div class="el" style="--c:${GROUP[r.group].colour}"><div class="s">→</div></div><div class="t">Reaction: ${r.product.toLowerCase()}<small>Balance the equation · ${S.items[r.id] ? Math.round(recall(S.items[r.id]) * 100) + '% recall' : 'not yet run'}</small></div><span class="p">▸</span></a>`).join('')}</div>
      <p class="sect">Sections</p>
      ${D.chapters.map(ch => {
        const els = D.elements.filter(e => e.ch === ch.n), f = els.filter(e => S.items[e.id]).length;
        return `<details class="chap" ${els.some(playable) ? 'open' : ''}><summary><span>${ch.n} · ${esc(ch.name)}</span><span class="mono">${f}/${els.length}</span></summary>
          <div class="units">${els.map(e => `<button class="row" data-act="cell" data-id="${e.id}">${tile(e, { tag: 'div', small: true })}<div class="t">${esc(e.name)}<small>Unit ${e.unit}${playable(e) ? '' : ' · not yet written'}</small></div></button>`).join('')}</div></details>`;
      }).join('')}
      <p class="sect">Lab equipment</p>
      <div class="rows">
        <button class="row" data-act="sound"><div class="t">Sound<small>Pings, fizzes and the odd Geiger click</small></div><span class="p">${soundOn() ? 'ON' : 'OFF'}</span></button>
        <button class="row" data-act="export"><div class="t">Export backup<small>Copy or download your progress</small></div></button>
        <button class="row" data-act="import"><div class="t">Import backup<small>Restore on a new phone</small></div></button>
        <button class="row" data-act="reset"><div class="t">Reset the lab<small>Forget everything on this device</small></div></button>
      </div>
      <p class="note mono" style="margin:16px;font-size:10.5px;color:var(--muted)">Content checked against legislation.gov.au, Wikijuris (CC BY-SA 3.0) and EUR-Lex on 11 Nov 2026. ⚑ marks anything not yet confirmed against a primary source. Study aid, not legal advice.</p>
      ${tabs('#notebook')}`;
  }

  /* ---------- HALF-LIFE ---------- */
  function halflife() {
    snapshotRetention();
    const l = learned(), due = dueList();
    if (due.length && actx) setTimeout(() => sfx('geiger'), 150);
    const W = 320, H = 170, x0 = 38, x1 = 300, y0 = 14, y1 = 132, span = 14;
    const X = t => x0 + (x1 - x0) * (1 - (now() - t) / (span * DAY));
    const Y = p => y1 - (y1 - y0) * p;
    let paths = '', dots = '';
    l.forEach(([id, it]) => {
      const c = EL[id] ? colourOf(EL[id]) : GROUP[RX[id].group].colour;
      const start = Math.max(it.last, now() - span * DAY);
      let d = '';
      for (let k = 0; k <= 30; k++) { const t = start + (now() - start) * k / 30; d += `${k ? 'L' : 'M'}${X(t).toFixed(1)} ${Y(recall(it, t)).toFixed(1)}`; }
      paths += `<path d="${d}" stroke="${c}" stroke-width="2" fill="none"/>`;
      dots += `<circle cx="${X(now()).toFixed(1)}" cy="${Y(recall(it)).toFixed(1)}" r="3.5" fill="${c}"/>`;
    });
    const chart = `<svg class="chart" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Decay chart: recall of each element over the last 14 days">
      <g font-family="IBM Plex Mono, monospace" font-size="8" fill="#5b6670"><text x="6" y="${y0 + 4}">100%</text><text x="20" y="${y1}">0</text><text x="${x0}" y="${y1 + 14}">−14d</text><text x="${(x0 + x1) / 2 - 8}" y="${y1 + 14}">−7d</text><text x="${x1 - 26}" y="${y1 + 14}">today</text></g>
      <line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="#9aa6ab"/><line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="#9aa6ab"/>
      <line x1="${x0}" y1="${Y(0.5)}" x2="${x1}" y2="${Y(0.5)}" stroke="#111418" stroke-dasharray="4 3"/><text x="${x0 + 4}" y="${Y(0.5) - 4}" font-family="IBM Plex Mono, monospace" font-size="8">recall threshold</text>
      <line x1="${X(now())}" y1="${y0}" x2="${X(now())}" y2="${y1}" stroke="#D9F25C" stroke-width="4" opacity=".85"/>
      ${paths}${dots}</svg>`;
    const row = ([id, it]) => {
      const e = EL[id], r = RX[id];
      const t = e ? tile(e, { tag: 'div', small: true }) : `<div class="el" style="--c:${GROUP[r.group].colour}"><div class="s">→</div></div>`;
      return `<a class="row" style="text-decoration:none" href="${e ? `#review-${id}` : `#${id}`}">${t}<div class="t">${esc(itemName(id))}<small>${e ? esc(e.sec) + ' · ' : ''}t½ ${fmtDays(halfLife(it))}${isDue(it) ? ' · decaying' : ` · next check in ${fmtDays((halfLife(it) * DAY - (now() - it.last)) / DAY)}`}</small></div><span class="p">${Math.round(recall(it) * 100)}%</span></a>`;
    };
    const rest = l.filter(([, it]) => !isDue(it)).sort((a, b) => recall(a[1]) - recall(b[1]));
    app.className = '';
    app.innerHTML = `
      <div class="top"><span>Half-life</span><span>${due.length} decaying</span></div>
      ${l.length ? chart : ''}
      ${l.length ? '' : '<div class="empty-msg">Nothing to measure yet. Discover an element on the Table and its forgetting curve starts here: a half-life of about a day at first, longer with every successful review (1 → 3 → 7 → 16 → 35 → 90 days).</div>'}
      ${due.length ? `<p class="sect">Below threshold</p><div class="rows">${due.map(row).join('')}</div>` : ''}
      ${rest.length ? `<p class="sect">Stable for now</p><div class="rows">${rest.map(row).join('')}</div>` : ''}
      <div style="height:16px"></div>
      ${due.length ? `<a class="btn" href="#stabilise">Stabilise ${due.length} element${due.length > 1 ? 's' : ''}</a>` : l.length ? '<button class="btn" disabled>Everything is stable</button>' : ''}
      ${tabs('#halflife')}`;
  }

  /* ---------- PLAYER ---------- */
  let P = null;
  const KIND = { rule: 'Rule', statute: 'Statute', case: 'Case', test: 'Test', trap: 'Trap', example: 'Worked example', compare: 'Compare', critique: 'Peer review' };
  const QLABEL = { choice: 'Multiple choice', tf: 'True or false', match: 'Citation network', order: 'Put in order', sort: 'Sort it', similarity: 'Similarity index' };

  function startUnit(id) {
    const e = EL[id], u = D.units[id];
    if (!e || !u) { location.hash = '#table'; return; }
    P = { kind: 'unit', id, e, u, L: 0, phase: 'cards', card: 0, i: 0, correct: 0, total: 0, misses: [] };
    renderCard();
  }
  const lesson = () => P.u.lessons[P.L];
  const allCards = () => P.u.lessons.reduce((n, l) => n + l.cards.length, 0);
  const cardNo = () => P.u.lessons.slice(0, P.L).reduce((n, l) => n + l.cards.length, 0) + P.card + 1;
  const qList = () => P.kind === 'unit' ? lesson().questions : P.questions;

  function shell(label, inner, foot, pct) {
    app.className = 'player-mode';
    app.style.setProperty('--g', colourOf(P.e || EL[P.id] || { block: (RX[P.id] || {}).group }));
    return `<header class="p-top"><button class="quit" data-act="quit" aria-label="Leave">✕</button><span class="lbl">${label}</span><span class="g">● ${esc((GROUP[(P.e || {}).block] || GROUP[(RX[P.id] || {}).group] || { name: '' }).name)}</span></header>
      <div class="prog"><i style="width:${pct}%"></i></div>
      <div class="p-body">${inner}</div>
      ${foot ? `<div class="p-foot"><div class="inner">${foot}</div></div>` : ''}`;
  }

  function cardHTML(c) {
    const fig = `<div class="fig"><span>${c.kind === 'trap' ? '<span class="hazard">!</span>' : ''}Fig. ${cardNo()} · ${KIND[c.kind]}${c.flag ? ' <span class="flag">⚑ unverified</span>' : ''}</span><span class="m">${c.margin.map(m => `<span>${esc(m)}</span>`).join('')}</span></div>`;
    let main = '';
    if (c.exp) {
      const x = c.exp;
      main = `<div class="mono" style="font-size:9.5px;color:var(--g);letter-spacing:1px;margin-top:8px">EXPERIMENT ${x.n} · ${esc(x.cite)}</div>
        <h3>${esc(c.title)}</h3>
        <div class="k">HYPOTHESIS</div><div class="v">${x.hyp}</div>
        <div class="k">METHOD</div><div class="v">${x.method}</div>
        <div class="k">RESULT</div><div class="res ${x.ok ? 'ok' : ''}">${x.ok ? '✓' : '✗'} ${esc(x.result.toUpperCase())}</div>
        <div class="k">DISCUSSION</div><div class="v">${x.discussion}</div>
        ${x.replication ? `<div class="k">REPLICATION</div>${replication(x)}` : ''}`;
    } else {
      main = `<h3>${esc(c.title)}</h3>`;
      if (c.statute) main += `<div class="specimen"><div class="cite">${esc(c.statute.cite)}</div><p>${c.statute.text}</p><ul>${c.statute.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul></div>`;
      if (c.steps) main += `<ol class="flow">${c.steps.map(s => `<li>${s}</li>`).join('')}</ol>`;
      if (c.table) main += `<table class="cmp"><tr>${c.table.head.map(h => `<th>${h}</th>`).join('')}</tr>${c.table.rows.map(r => `<tr>${r.map(d => `<td>${d}</td>`).join('')}</tr>`).join('')}</table>`;
      main += c.core;
    }
    const deep = c.exp ? c.core + (c.deeper || '') : c.deeper;
    return `<article class="paper k-${c.kind}">${fig}${main}
      ${deep ? `<button class="deeper-btn" data-act="deeper" aria-expanded="false">TAP ▸ GO DEEPER</button><div class="deeper" hidden>${deep}</div>` : ''}
      <div class="src"><b>SOURCE</b> ${c.source}</div></article>`;
  }
  function replication(x) {
    const n = x.replication.length;
    return `<svg width="260" height="${Math.max(36, n * 26 + 8)}" style="margin-top:4px" aria-hidden="true">${x.replication.map((r, i) => {
      const y = 14 + i * 26, back = r.back, col = r.rel === 'doubts' ? '#b53b26' : 'var(--g)';
      return `<line x1="40" y1="${8 + n * 13}" x2="${back ? 0 : 110}" y2="${back ? y : y}" stroke="${col}" stroke-width="1.5" ${r.rel === 'doubts' ? 'stroke-dasharray="3 2"' : ''}/>
        ${back ? '' : `<circle cx="114" cy="${y}" r="6" fill="#fff" stroke="${col}" stroke-width="1.5"/>`}
        <text x="${back ? 4 : 126}" y="${back ? y - 4 : y + 3}" font-family="IBM Plex Mono, monospace" font-size="9" fill="${col}">${esc(r.rel)} · ${esc(r.label)}</text>`;
    }).join('')}<circle cx="40" cy="${8 + n * 13}" r="9" fill="var(--g)"/><text x="40" y="${11 + n * 13}" font-family="IBM Plex Mono, monospace" font-size="8" fill="#fff" text-anchor="middle">${esc(x.cite.match(/\d{4}/)[0].slice(2))}</text></svg>`;
  }

  function renderCard(dir = 1) {
    const L = lesson(), c = L.cards[P.card], last = P.card === L.cards.length - 1;
    P.phase = 'cards';
    app.innerHTML = shell(`<span class="sym">${P.e.sym}</span> · ${esc(P.e.name)} · card ${cardNo()} / ${allCards()}`,
      `<p class="eyebrow" style="margin:2px 2px 8px">Lesson ${String.fromCharCode(65 + P.L)} · ${esc(L.title)}</p>${cardHTML(c).replace('class="paper', `class="paper${dir < 0 ? ' back' : ''}`)}
       <div class="dots">${L.cards.map((_, i) => `<i class="${i <= P.card ? 'on' : ''}"></i>`).join('')}</div>`,
      `<button class="btn ghost" data-act="prev" ${P.card ? '' : 'disabled'}>Back</button><button class="btn" data-act="nextcard">${last ? 'Run the tests' : 'Next card'}</button>`,
      100 * cardNo() / allCards());
    window.scrollTo(0, 0);
    let x0 = null;
    const body = app.querySelector('.paper');
    body.addEventListener('pointerdown', e => { x0 = e.clientX; });
    body.addEventListener('pointerup', e => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (dx < -60) { sfx('page'); step(1); } else if (dx > 60 && P.card) { sfx('page'); step(-1); } });
  }
  function step(d) {
    if (d > 0 && P.card === lesson().cards.length - 1) { P.i = 0; return renderQ(); }
    P.card = Math.max(0, P.card + d); buzz(5); renderCard(d);
  }

  /* questions */
  function renderQ() {
    const list = qList(), q = list[P.i];
    P.phase = 'qs'; P.locked = false;
    let body = `<p class="q-k">${esc(q.label || QLABEL[q.type])}${q.flag ? ' <span class="flag">⚑ unverified</span>' : ''}</p><h2 class="q-t">${esc(q.q)}</h2>`;
    let foot = '';
    if (q.type === 'choice') body += `<div class="opts">${shuffle(q.options.map((_, i) => i)).map(i => `<button class="opt" data-act="choose" data-i="${i}">${esc(q.options[i])}</button>`).join('')}</div>`;
    if (q.type === 'tf') body += `<div class="opts tf"><button class="opt" data-act="tf" data-v="1">TRUE</button><button class="opt" data-act="tf" data-v="0">FALSE</button></div>`;
    if (q.type === 'order') { P.seq = []; P.pool = shuffle(q.items); body += `<div class="order">${orderUI(q)}</div>`; }
    if (q.type === 'sort') { P.sort = { items: shuffle(q.items), k: 0, placed: [] }; body += `<div class="sort">${sortUI(q)}</div>`; }
    if (q.type === 'match') { P.match = { left: shuffle(q.pairs.map((_, i) => i)), right: shuffle(q.pairs.map((_, i) => i)), sel: null, done: [], miss: 0 }; body += `<div class="matchw">${matchUI(q)}</div>`; }
    if (q.type === 'similarity') { body += `<div class="simi"><div class="read" id="sv">50</div><input type="range" min="0" max="100" value="50" id="sr" aria-label="Similarity reading"><div class="ends"><span>${esc(q.ends[0])}</span><span>${esc(q.ends[1])}</span></div><div class="gauge" hidden><div class="zone" style="left:${q.lo}%;width:${q.hi - q.lo}%"></div><div class="pin"></div></div></div>`; foot = '<button class="btn" data-act="simcheck">Take the reading</button>'; }
    const label = P.kind === 'unit' ? `<span class="sym">${P.e.sym}</span> · Lesson ${String.fromCharCode(65 + P.L)} tests · ${P.i + 1} / ${list.length}` : `Stabilise · ${P.i + 1} / ${list.length}`;
    app.innerHTML = shell(label, body, foot, 100 * P.i / list.length);
    window.scrollTo(0, 0);
    if (q.type === 'similarity') { const r = app.querySelector('#sr'); r.addEventListener('input', () => { app.querySelector('#sv').textContent = r.value; }); }
  }
  const orderUI = q => `<ol class="slots">${q.items.map((_, i) => `<li class="slot ${P.seq[i] ? 'filled' : ''}" data-act="unslot" data-i="${i}"><span class="mono">${i + 1}</span>${P.seq[i] ? `<b>${esc(P.seq[i])}</b>` : ''}</li>`).join('')}</ol>
    <div>${P.pool.map(t => `<button class="chip ${P.seq.includes(t) ? 'used' : ''}" data-act="slot" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div>`;
  const sortUI = q => {
    const s = P.sort, cur = s.items[s.k];
    return `<div class="sort-stage">${cur ? `<div class="card">${esc(cur.t)}</div><span class="mono">${s.k + 1} of ${s.items.length} · tap where it belongs</span>` : '<span class="mono">All sorted</span>'}</div>
      <div class="buckets">${q.buckets.map((b, i) => `<button class="bucket" data-act="bucket" data-b="${i}"><strong>${esc(b)}</strong>${s.placed.filter(p => p.b === i).map(p => `<em class="${p.ok ? '' : 'no'}">${esc(p.t)}</em>`).join('')}</button>`).join('')}</div>`;
  };
  const PAIR_COLOURS = ['#2F6FDB', '#E08A1E', '#1E9E6A', '#8A5CD6', '#E0614A'];
  const matchUI = q => {
    const m = P.match;
    const chip = (side, i) => {
      const di = m.done.indexOf(i);
      return `<button class="chip ${di >= 0 ? 'done' : ''} ${m.sel && m.sel.side === side && m.sel.i === i ? 'sel' : ''}" style="--pc:${PAIR_COLOURS[di % PAIR_COLOURS.length]}" data-act="pair" data-side="${side}" data-i="${i}">${esc(q.pairs[i][side === 'l' ? 0 : 1])}</button>`;
    };
    return `<div class="match"><div class="col">${m.left.map(i => chip('l', i)).join('')}</div><div class="col">${m.right.map(i => chip('r', i)).join('')}</div></div><p class="mono" style="font-size:10px;color:var(--muted);margin-top:8px">Tap a case, then its role.</p>`;
  };

  function answer(ok, correction = '') {
    if (P.locked) return;
    P.locked = true;
    const q = qList()[P.i];
    if (ok) { P.correct++; buzz(15); sfx('ok'); } else { buzz([30, 40, 30]); sfx('bad'); P.misses.push(q); }
    P.total++;
    if (P.kind === 'review') P.scores[q._item] = (P.scores[q._item] || 0) + (ok ? 1 : 0);
    const sheet = document.createElement('div');
    sheet.className = `ans ${ok ? '' : 'bad'}`;
    sheet.innerHTML = `<div class="in"><h3>${ok ? '✓ RESULT CONFIRMED' : '✗ RESULT DOESN\'T REPLICATE'}</h3>${correction ? `<p class="corr">${correction}</p>` : ''}<p>${q.explain}</p><button class="btn" data-act="nextq">${P.i + 1 < qList().length ? 'Next' : 'Finish'}</button></div>`;
    app.appendChild(sheet);
    requestAnimationFrame(() => sheet.classList.add('up'));
  }
  function nextQ() {
    P.i++;
    if (P.i < qList().length) return renderQ();
    if (P.kind === 'review') return finishReview();
    if (P.L < P.u.lessons.length - 1) { P.L++; P.card = 0; return interlude(); }
    finishUnit();
  }
  function interlude() {
    P.phase = 'interlude';
    sfx('stable');
    app.innerHTML = shell(`<span class="sym">${P.e.sym}</span> · ${esc(P.e.name)}`, `<div class="result"><p class="eyebrow">Lesson ${String.fromCharCode(64 + P.L)} written up</p><h2>Next: ${esc(lesson().title)}</h2><p class="note">${lesson().cards.length} cards, then ${lesson().questions.length} tests.</p></div>`,
      '<button class="btn" data-act="startlesson">Open the notebook</button>', 100 * (cardNo() - 1) / allCards());
  }
  function finishUnit() {
    const pct = Math.round(100 * P.correct / P.total), first = !S.items[P.id];
    learn(P.id);
    const rec = S.units[P.id] || { best: 0, plays: 0 };
    S.units[P.id] = { best: Math.max(rec.best, pct), plays: rec.plays + 1, done: now() };
    S.days[todayKey()] = (S.days[todayKey()] || 0) + 1;
    save(); snapshotRetention();
    buzz([20, 60, 20]);
    sfx('discover');
    app.innerHTML = shell(`<span class="sym">${P.e.sym}</span> · complete`, `<div class="result">
      <p class="eyebrow">${first ? 'New element discovered' : 'Element re-read'}</p>
      <div class="found">${tile(P.e, { tag: 'div' }).replace('class="el', 'class="el drop')}</div>
      <h2>${esc(P.e.name)}</h2>
      <div class="score">${pct}%</div><p class="mono" style="font-size:11px">${P.correct} of ${P.total} tests passed</p>
      ${P.u.treasures ? `<p class="note" style="margin-top:16px">Case treasures: ${P.u.treasures.map(t => `<span class="treasure">${esc(t)}</span>`).join('')}</p>` : ''}
      <p class="note">Half-life: ${fmtDays(halfLife(S.items[P.id]))}. It starts to decay now; Half-life will tell you when to stabilise it.</p>
      <p class="note">Your outline has a new entry in the Notebook.</p>
    </div>`, `<a class="btn" href="#table">Back to the Table</a>`, 100);
  }

  /* ---------- STABILISE: review decaying elements ---------- */
  function startReview(ids) {
    const els = ids.filter(id => EL[id] && D.units[id]);
    const rxs = ids.filter(id => RX[id]);
    if (!els.length && rxs.length) { location.hash = `#${rxs[0]}`; return; }
    if (!els.length) { location.hash = '#halflife'; return; }
    const questions = [];
    els.forEach(id => {
      const pool = D.units[id].lessons.flatMap(l => l.questions);
      shuffle(pool).slice(0, 3).forEach(q => questions.push({ ...q, _item: id }));
    });
    P = { kind: 'review', id: els[0], e: EL[els[0]], items: els, rx: rxs, questions: shuffle(questions), i: 0, correct: 0, total: 0, misses: [], scores: {} };
    renderQ();
  }
  function finishReview() {
    let up = 0;
    const rows = P.items.map(id => {
      const n = P.questions.filter(q => q._item === id).length, sc = P.scores[id] || 0, ok = sc >= Math.ceil(n * 2 / 3);
      review(id, ok); if (ok) up++;
      return `<div class="row">${tile(EL[id], { tag: 'div', small: true })}<div class="t">${esc(EL[id].name)}<small>${sc}/${n} · ${ok ? 'stabilised' : 'still unstable'} · t½ now ${fmtDays(halfLife(S.items[id]))}</small></div><span class="p">${ok ? '▲' : '▼'}</span></div>`;
    }).join('');
    S.days[todayKey()] = (S.days[todayKey()] || 0) + 1;
    save(); snapshotRetention();
    sfx(up ? 'stable' : 'bad');
    const more = P.rx.length ? `<a class="btn" href="#${P.rx[0]}">Next: re-run a reaction</a>` : `<a class="btn" href="#halflife">Back to Half-life</a>`;
    app.innerHTML = shell('Stabilise · complete', `<div class="result"><p class="eyebrow">Measurements taken</p><h2>${P.correct} of ${P.total} tests passed</h2></div><div>${rows}</div>`, more, 100);
  }

  /* ---------- REACTION ---------- */
  function startReaction(id) {
    const r = RX[id]; if (!r) { location.hash = '#table'; return; }
    P = { kind: 'rx', id, r, eq: [], bad: [], tray: shuffle([...r.reactants, ...r.contaminants].map(x => x.t)), hint: '', checked: false };
    renderReaction();
  }
  function renderReaction(state = '') {
    const r = P.r, n = r.reactants.length;
    const slots = [];
    for (let i = 0; i < n; i++) slots.push(P.eq[i] ? `<button class="chip on" data-act="rxout" data-t="${esc(P.eq[i])}">${esc(P.eq[i])}</button>` : '<span class="chip gap">?</span>');
    const eq = slots.map((s, i) => (i ? '<span class="plus">+</span>' : '') + s).join('');
    app.innerHTML = shell(`Reaction · ${esc(r.product.toLowerCase())}`, `
      <h2 class="q-t" style="margin-top:4px">${esc(r.q)}</h2>
      <div class="eq">${eq}<div class="arrow ${state}"><i></i></div><div class="prod ${state === 'go' ? 'made' : ''}">${esc(r.product)}</div></div>
      <p class="tray-h">REACTANTS · TAP ONE IN</p>
      <div>${P.tray.map(t => `<button class="chip ${P.eq.includes(t) ? 'used' : ''} ${P.bad.includes(t) ? 'bad' : ''}" data-act="rxin" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div>
      ${P.hint ? `<div class="hint">${P.hint}</div>` : ''}`,
      P.checked ? '' : `<button class="btn" data-act="rxcheck" ${P.eq.length ? '' : 'disabled'}>Check</button>`, 100 * P.eq.length / n);
  }
  function rxIn(t) {
    const r = P.r; if (P.checked) return;
    const c = r.contaminants.find(x => x.t === t);
    if (c) { P.bad.push(t); P.hint = `⚠ Contaminant: ${esc(c.why)}`; buzz([30, 40, 30]); sfx('fizz'); }
    else if (P.eq.length < r.reactants.length && !P.eq.includes(t)) { P.eq.push(t); P.hint = ''; buzz(8); sfx('place'); }
    renderReaction();
  }
  function rxCheck() {
    const r = P.r, full = P.eq.length === r.reactants.length, ok = full && !P.bad.length;
    P.checked = true;
    renderReaction(full ? 'go' : 'fizz');
    sfx(ok ? 'react' : 'fizzle');
    const first = !S.items[P.id];
    if (first) learn(P.id); else review(P.id, ok);
    if (first && !ok) S.items[P.id].stage = 0;
    save(); snapshotRetention();
    const missing = r.reactants.filter(x => !P.eq.includes(x.t));
    const sheet = document.createElement('div');
    sheet.className = `ans ${ok ? '' : 'bad'}`;
    sheet.innerHTML = `<div class="in"><h3>${ok ? '✓ BALANCED: ' + esc(r.product) : full ? '✗ BALANCED, BUT CONTAMINATED' : '✗ THE REACTION FIZZLES'}</h3>
      ${missing.length ? `<p class="corr">Missing reactant${missing.length > 1 ? 's' : ''}: ${missing.map(x => esc(x.t)).join(', ')}</p>` : ''}
      ${P.bad.length ? `<p class="corr">Contaminants added: ${P.bad.map(esc).join(', ')}</p>` : ''}
      <p>${r.explain}</p>
      <p style="font-size:12.5px">${r.reactants.map(x => `<b>${esc(x.t)}:</b> ${esc(x.why)}`).join('<br>')}</p>
      <p class="src" style="margin-top:0"><b>SOURCE</b> ${r.source}</p>
      <button class="btn" data-act="go" data-h="#halflife">Done</button><button class="link" data-act="rxagain">Run it again</button></div>`;
    setTimeout(() => { app.appendChild(sheet); requestAnimationFrame(() => sheet.classList.add('up')); }, 1100); // let the reaction run first
    buzz(ok ? [20, 60, 20] : [30, 40, 30]);
  }

  /* ---------- backup (as in DuoVino) ---------- */
  const backupText = () => JSON.stringify({ app: 'duologo', version: 1, exported: new Date().toISOString(), state: S });
  function modal(inner) { overlay.innerHTML = `<div class="scrim" data-act="close"><div class="panel" data-stop><button class="x" data-act="close" aria-label="Close">✕</button>${inner}</div></div>`; }
  function exportBackup() {
    const txt = backupText();
    let url = ''; try { url = URL.createObjectURL(new Blob([txt], { type: 'application/json' })); } catch { /* no blob */ }
    modal(`<p class="eyebrow">Backup</p><h2>Export your lab</h2><p class="note">Copy this text somewhere safe, or download it as a file.</p>
      <textarea class="textbox" readonly>${esc(txt)}</textarea>
      <button class="btn ghost" data-act="copy" style="width:100%;margin:0 0 8px">Copy</button>${url ? `<a class="btn" style="width:100%;margin:0" href="${url}" download="duologo-backup-${todayKey()}.json">Download file</a>` : ''}<p class="mono copied" hidden>Copied ✓</p>`);
  }
  function importBackup() {
    modal(`<p class="eyebrow">Backup</p><h2>Import a backup</h2><p class="note">Paste the backup text or choose the file. This replaces the progress in this browser.</p>
      <textarea class="textbox" placeholder='{"app":"duologo", …}'></textarea><input type="file" class="bfile" accept=".json,application/json"><p class="err" hidden></p>
      <button class="btn" data-act="restore" style="width:100%;margin:12px 0 0">Restore</button>`);
    overlay.querySelector('.bfile').addEventListener('change', async e => { const f = e.target.files[0]; if (f) overlay.querySelector('.textbox').value = await f.text(); });
  }
  function restoreBackup() {
    const err = overlay.querySelector('.err');
    let data; try { data = JSON.parse(overlay.querySelector('.textbox').value.trim()); } catch { data = null; }
    if (!data || data.app !== 'duologo' || !data.state || typeof data.state.items !== 'object') { err.textContent = "That doesn't look like a Duo Logo backup."; err.hidden = false; return; }
    S = { ...defaults(), ...data.state }; save(); overlay.innerHTML = ''; go('#table');
  }

  /* ---------- events ---------- */
  const go = h => { if (location.hash === h) route(); else location.hash = h; };
  // Actions that make their own sound (or none): everything else gets a soft tick.
  const SELF_SOUNDING = new Set(['choose', 'tf', 'slot', 'bucket', 'pair', 'simcheck', 'rxin', 'rxcheck', 'nextcard', 'prev', 'sound', 'close']);
  document.addEventListener('click', ev => {
    const link = ev.target.closest('a[href^="#"]');
    if (link) sfx(link.closest('.tabs') ? 'tab' : 'tick');
    const t = ev.target.closest('[data-act]');
    if (!t) return;
    if (!SELF_SOUNDING.has(t.dataset.act) && !t.disabled) sfx('tick');
    if (t.dataset.act === 'close' && ev.target.closest('[data-stop]') && !ev.target.closest('.x')) return;
    const a = t.dataset.act;
    if (a === 'close') { overlay.innerHTML = ''; return; }
    if (a === 'cell') return cellSheet(t.dataset.id);
    if (a === 'quit') { const back = P && (P.kind === 'rx' || P.kind === 'review') ? '#halflife' : '#table'; P = null; go(back); return; }
    if (a === 'go') { overlay.innerHTML = ''; go(t.dataset.h); return; }
    if (a === 'deeper') { const d = t.nextElementSibling; d.hidden = !d.hidden; t.textContent = d.hidden ? 'TAP ▸ GO DEEPER' : 'TAP ▾ LESS'; t.setAttribute('aria-expanded', String(!d.hidden)); return; }
    if (a === 'nextcard') { sfx('page'); return step(1); }
    if (a === 'prev') { sfx('page'); return step(-1); }
    if (a === 'sound') { S.settings.sound = !soundOn(); save(); sfx('ok'); return notebook(); }
    if (a === 'startlesson') return renderCard();
    if (a === 'nextq') return nextQ();
    const q = P && P.phase === 'qs' ? qList()[P.i] : null;
    if (a === 'choose' && q && !P.locked) {
      const i = +t.dataset.i, ok = i === q.a;
      t.classList.add(ok ? 'right' : 'wrong');
      if (!ok) app.querySelector(`.opt[data-i="${q.a}"]`).classList.add('right');
      return answer(ok);
    }
    if (a === 'tf' && q && !P.locked) {
      const v = t.dataset.v === '1', ok = v === q.a;
      t.classList.add(ok ? 'right' : 'wrong');
      if (!ok) app.querySelector(`.opt[data-v="${q.a ? 1 : 0}"]`).classList.add('right');
      return answer(ok, ok ? '' : `It's ${q.a ? 'true' : 'false'}.`);
    }
    if (a === 'slot' && q && !P.locked) {
      P.seq.push(t.dataset.t); app.querySelector('.order').innerHTML = orderUI(q); buzz(5); if (P.seq.length < q.items.length) sfx('place');
      if (P.seq.length === q.items.length) {
        const ok = P.seq.every((s, i) => s === q.items[i]);
        app.querySelectorAll('.slot').forEach((el, i) => el.classList.add(P.seq[i] === q.items[i] ? 'right' : 'wrong'));
        answer(ok, ok ? '' : 'Correct order: ' + q.items.map(esc).join(' → '));
      }
      return;
    }
    if (a === 'unslot' && q && !P.locked) { const i = +t.dataset.i; if (P.seq[i]) { P.seq.splice(i, 1); app.querySelector('.order').innerHTML = orderUI(q); } return; }
    if (a === 'bucket' && q && !P.locked) {
      const s = P.sort, cur = s.items[s.k]; if (!cur) return;
      const b = +t.dataset.b, ok = b === cur.b;
      s.placed.push({ t: cur.t, b, ok }); s.k++;
      app.querySelector('.sort').innerHTML = sortUI(q);
      app.querySelector(`.bucket[data-b="${b}"]`).classList.add(ok ? 'pulse' : 'shake');
      buzz(ok ? 8 : [20, 30, 20]);
      if (s.k < s.items.length) sfx(ok ? 'place' : 'bad');
      if (s.k >= s.items.length) { const wrong = s.placed.filter(p => !p.ok); answer(!wrong.length, wrong.length ? 'Should be: ' + wrong.map(p => `${esc(p.t)} → ${esc(q.buckets[q.items.find(i => i.t === p.t).b])}`).join(' · ') : ''); }
      return;
    }
    if (a === 'pair' && q && !P.locked) {
      const m = P.match, side = t.dataset.side, i = +t.dataset.i;
      if (!m.sel || m.sel.side === side) { m.sel = { side, i }; app.querySelector('.matchw').innerHTML = matchUI(q); return; }
      if (m.sel.i === i) { m.done.push(i); buzz(8); } else { m.miss++; buzz([20, 30, 20]); }
      if (m.done.length < q.pairs.length) sfx(m.sel.i === i ? 'place' : 'bad');
      const missed = m.sel.i !== i; m.sel = null;
      app.querySelector('.matchw').innerHTML = matchUI(q);
      if (missed) app.querySelector(`.chip[data-side="${side}"][data-i="${i}"]`).classList.add('miss');
      if (m.done.length === q.pairs.length) answer(m.miss === 0, m.miss ? `All connected, with ${m.miss} wrong link${m.miss > 1 ? 's' : ''} on the way.` : '');
      return;
    }
    if (a === 'simcheck' && q && !P.locked) {
      const v = +app.querySelector('#sr').value, ok = v >= q.lo && v <= q.hi;
      const g = app.querySelector('.gauge'); g.hidden = false; g.querySelector('.pin').style.left = `calc(${v}% - 1px)`;
      app.querySelector('#sr').disabled = true;
      return answer(ok, `Your reading: ${v}. Expected range: ${q.lo}–${q.hi}.`);
    }
    if (a === 'rxin') return rxIn(t.dataset.t);
    if (a === 'rxout') { if (!P.checked) { P.eq = P.eq.filter(x => x !== t.dataset.t); renderReaction(); } return; }
    if (a === 'rxcheck') return rxCheck();
    if (a === 'rxagain') return startReaction(P.id);
    if (a === 'export') return exportBackup();
    if (a === 'import') return importBackup();
    if (a === 'restore') return restoreBackup();
    if (a === 'copy') { const ta = overlay.querySelector('.textbox'); ta.select(); (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).catch(() => document.execCommand('copy')).finally(() => { overlay.querySelector('.copied').hidden = false; }); return; }
    if (a === 'reset') {
      modal(`<p class="eyebrow">Reset</p><h2>Forget everything?</h2><p class="note">This clears your elements, half-lives and outline on this device. Export a backup first if you might want them back.</p><button class="btn" data-act="reset-yes" style="width:100%;margin:0">Reset the lab</button>`);
      return;
    }
    if (a === 'reset-yes') { S = defaults(); save(); overlay.innerHTML = ''; go('#table'); }
  });
  document.addEventListener('keydown', e => {
    if (!P || P.phase !== 'cards' || overlay.innerHTML) return;
    if (e.key === 'ArrowRight') { sfx('page'); step(1); } else if (e.key === 'ArrowLeft' && P.card) { sfx('page'); step(-1); }
  });

  /* ---------- router ---------- */
  function route() {
    overlay.innerHTML = '';
    window.scrollTo(0, 0);
    const h = location.hash.slice(1);
    if (h.startsWith('unit-')) return startUnit(h.slice(5));
    if (h.startsWith('review-')) return startReview([h.slice(7)]);
    if (h.startsWith('rx-')) return startReaction(h);
    if (h === 'stabilise') return startReview(dueList().map(([id]) => id));
    P = null;
    if (h === 'notebook') return notebook();
    if (h === 'halflife') return halflife();
    table();
  }
  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(r => r.update()).catch(() => {});
})();
