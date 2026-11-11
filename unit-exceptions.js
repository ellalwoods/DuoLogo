/* Copyright 1.15 · Other exceptions and statutory licences. Written and checked 11 Nov 2026 against the Copyright Act
   1968 (Compilation No. 65) and Wikijuris, Copyright limitations and exceptions (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const WJD = '<a href="https://wikijuris.net/ausip/copyrightdefences/" target="_blank" rel="noopener">Wikijuris, Copyright limitations and exceptions</a> (CC BY-SA 3.0)';

  D.units['u1-15'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Private copying and everyday technology',
        cards: [
          {
            kind: 'compare', margin: ['ss 43C, 47J, 109A, 110AA, 111 CA'],
            title: 'The private copying exceptions',
            table: {
              head: ['Section', 'What you can copy', 'Key limits'],
              rows: [
                ['s 111', '<b>Time shifting:</b> recording a broadcast to watch or listen later', 'Solely for private and domestic use at a more convenient time'],
                ['s 43C', 'A book, newspaper or magazine you own, into a different form (e.g. scan it)', 'Private use instead of the original; one copy per form'],
                ['s 47J', 'A photo you own: print to digital, or digital to print', 'Private use instead of the original'],
                ['s 109A', 'A music recording you own, onto a device you own', 'Not from an internet download of a radio program; not from a pirated copy'],
                ['s 110AA', 'A film on <b>videotape</b> you own into electronic form', 'Analog videotape only'],
              ],
            },
            core: `<p>These are narrow, technology-specific exceptions for <b>private and domestic use</b>. The copy loses protection if it's sold, hired, or otherwise dealt with: the Act treats the exception as never having applied (e.g. ss 110AA(3), 111(3)).</p>`,
            source: `${CA} ss 43C, 47J, 109A, 110AA, 111 (checked). ${WJD}, "Private Copying".`,
          },
          {
            kind: 'statute', margin: ['s 43B CA'],
            title: 'Temporary copies in technical processes',
            statute: { cite: 's 43B(1) CA', text: 'the copyright in a work is not infringed by the making of a <mark>①</mark> temporary reproduction of the work if the reproduction is <mark>②</mark> incidentally made as a necessary part of a technical process of using a copy of the work.', notes: ['① e.g. a copy in RAM or a browser cache', '② a by-product, not the point'] },
            core: `<p>Not available if the copy being used is infringing, or the use itself infringes (s 43B(2)). The software equivalent is s 47B: running a program necessarily copies it, and that's not infringement for its owner or licensee.</p>`,
            source: `${CA} ss 43B (quoted), 47B (checked).`,
          },
          {
            kind: 'rule', margin: ['ss 47B–47F CA'],
            title: 'Computer programs',
            core: `<p>The owner or licensee of a copy of a program can, without infringing:</p>
              <ul><li>make copies incidental to <b>running</b> it, or to <b>studying</b> how it works (s 47B), unless from an infringing copy or (for running) contrary to an express licence term given on acquisition;</li>
              <li>make a <b>backup</b> copy (s 47C);</li>
              <li>reproduce or adapt it to get information needed for <b>interoperability</b>, if not readily available elsewhere (s 47D);</li>
              <li>fix <b>errors</b> where a working copy isn't available at an ordinary commercial price (s 47E);</li>
              <li>do good-faith <b>security testing</b> (s 47F).</li></ul>`,
            deeper: `<p>You can't contract out of the study (s 47B(3)), backup, interoperability, error-correction or security-testing exceptions: an agreement that excludes or limits them has no effect (s 47H). Running a program (s 47B(1)) <em>can</em> be limited by an express licence term.</p>`,
            source: `${CA} ss 47B–47F, 47H (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: '"I bought it, so I can copy it" isn\'t the law',
            core: `<ul><li>Private copying exceptions are <b>for the owner</b>, for <b>private and domestic use</b>. A business ripping CDs for its shop's music system or scanning books for a staff library isn't covered.</li>
              <li>Each exception has its own technology and format limits. Check the precise section, not the general idea.</li>
              <li>For tech clients, ss 47B–47F and the TPM interoperability exception (unit 1.13) are the sections that come up.</li></ul>`,
            source: `${CA} ss 43C, 47B–47F, 109A, 111.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Recording a TV broadcast to watch at a more convenient time, for private use, doesn\'t infringe copyright.', a: true, explain: 's 111.' },
          { type: 'tf', q: 'A café can copy its owner\'s CDs to a phone to play music to customers under the private copying exception.', a: false, explain: 's 109A is for the owner\'s private and domestic use only (and playing to customers is a separate public performance).' },
          { type: 'match', label: 'Citation network', q: 'Match each private copying exception to its section.', pairs: [['Time shifting broadcasts', 's 111'], ['Format shifting books and magazines', 's 43C'], ['Format shifting music', 's 109A'], ['Videotape to digital', 's 110AA']], explain: 'Part III Div 4 and Part IV Div 6.' },
          { type: 'choice', q: 'Which of these is a computer program exception in the Act?', options: ['Making a backup copy', 'Selling a copy you\'ve modified', 'Sharing a licence key with a colleague', 'Installing it on unlimited machines'], a: 0, explain: 's 47C.' },
          { type: 'tf', q: 'The temporary copy exception in s 43B protects caching a pirated copy.', a: false, explain: 's 43B(2): not if made from an infringing copy.' },
        ],
      },
      {
        title: 'Public art, institutions and government',
        cards: [
          {
            kind: 'rule', margin: ['ss 65–68 CA'],
            title: 'Art and buildings in public',
            core: `<ul><li><b>Sculptures and works of artistic craftsmanship</b> permanently in a public place or premises open to the public: painting, drawing, photographing or filming them doesn't infringe (s 65).</li>
              <li><b>Buildings and models of buildings</b>: anyone can paint, draw, photograph or film them (s 66).</li>
              <li><b>Incidental inclusion</b> of an artistic work in a film or TV broadcast doesn't infringe (s 67).</li>
              <li>And you can then <b>publish</b> those paintings, photos or films (s 68).</li></ul>`,
            deeper: `<p>s 65 doesn't cover paintings, murals or other two-dimensional artistic works in public; and s 67 covers film and TV, not still photos used in, say, an advertisement.</p>`,
            source: `${CA} ss 65–68 (checked).`,
          },
          {
            kind: 'statute', margin: ['s 200AB CA'],
            title: 'The "flexible dealing" exception',
            core: `<p>s 200AB lets <b>libraries, archives and educational institutions</b> (and a few others) use copyright material where:</p>
              <ol><li>the circumstances amount to a <b>special case</b>;</li><li>the use is for a listed purpose (e.g. maintaining or operating a library, giving educational instruction) and not partly for commercial advantage or profit;</li><li>it doesn't <b>conflict with a normal exploitation</b> of the work; and</li><li>it doesn't <b>unreasonably prejudice</b> the owner's legitimate interests.</li></ol>
              <p>Those three phrases are the TRIPS Article 13 "three-step test", and s 200AB(7) gives them the same meaning. It's a <b>last resort</b>: it doesn't apply where another provision covers the use (s 200AB(6)).</p>`,
            source: `${CA} s 200AB(1)–(3), (6)–(7) (checked).`,
          },
          {
            kind: 'rule', margin: ['s 28 CA', 'Part IVA Div 4 CA', 's 183 CA'],
            title: 'Schools, statutory licences and the Crown',
            core: `<ul><li><b>Classroom performance</b> (s 28): performing or playing works, recordings and films in class, to an audience of people taking part in non-profit instruction, isn't a performance "in public". Since 2 April 2026 it also covers <b>remote learning</b>, in person or by technology, but only for people taking part at the same time, or substantially the same time, as the instruction (s 28(9)–(10)). Recorded lessons watched later aren't covered.</li>
              <li><b>Education statutory licence</b> (s 113P, unit 1.8): institutions can copy and communicate works for educational purposes if they've given a remuneration notice to the collecting society and pay equitable remuneration.</li>
              <li><b>Government use</b> (s 183): the Commonwealth or a State (or someone it authorises in writing) doesn't infringe by doing acts "for the services of" the Crown, but must pay on terms agreed or fixed by the Copyright Tribunal, or under a collecting-society arrangement (s 183A).</li></ul>`,
            source: `${CA} ss 28(1), 113P, 113Q, 183(1), (4)–(5), 183A (checked). s 28(9)–(10) inserted by the <i>Copyright Amendment Act 2026</i> Sch 2 item 17 (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Which exception, and does someone still have to pay?',
            core: `<p>When a client wants to use material without permission, check in this order:</p>
              <ol><li>Is it a <b>substantial part</b> at all (unit 1.11)?</li><li>A <b>fair dealing</b> purpose (1.14)?</li><li>A <b>specific exception</b> (this unit)?</li><li>A <b>statutory licence</b> (paid, not free)?</li><li>The <b>orphan works</b> scheme, if the owner can't be found (1.9)?</li></ol>
              <p>If none fits, they need a licence.</p>`,
            source: `${CA} Part III Div 3–4, Part IVA, Part V Div 2AAA; course cross-references.`,
          },
          {
            kind: 'critique', margin: ['POLICY'],
            title: 'A patchwork of exceptions',
            core: `<p>The specific exceptions are drafted around particular technologies (videotape, broadcasts, books), so the law often lags behind how people actually use content. Critics, including the ALRC (2014), argue for a technology-neutral fair use; rights holders argue the specific approach gives certainty and protects licensing markets.</p>`,
            source: `${WJD}, "Reform for Australian Copyright Defences and Exceptions".`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Photographing a building and publishing the photo doesn\'t infringe copyright in the building.', a: true, explain: 'ss 66 and 68.' },
          { type: 'tf', q: 's 65 lets you freely photograph a mural painted on a public wall.', a: false, explain: 's 65 covers sculptures and works of artistic craftsmanship, not paintings.' },
          { type: 'order', q: 'Order the conditions of s 200AB(1).', items: ['A special case', 'A use covered by s 200AB(2) or (3)', 'No conflict with normal exploitation', 'No unreasonable prejudice to the owner'], explain: 's 200AB(1)(a)–(d).' },
          { type: 'choice', q: 'When can a State government use copyright material under s 183?', options: ['For the services of the State, with terms agreed or fixed by the Copyright Tribunal', 'Never', 'Only with the owner\'s prior consent', 'Only for national defence'], a: 0, explain: 's 183(1), (5).' },
          { type: 'sort', label: 'Spectroscopy', q: 'Free exception, or paid statutory licence?', buckets: ['Free exception', 'Paid scheme'], items: [{ t: 'Time shifting a broadcast', b: 0 }, { t: 'Photographing a public sculpture', b: 0 }, { t: 'A university copying readings for students under s 113P', b: 1 }, { t: 'Government copying for the services of the Crown', b: 1 }], explain: 'ss 111 and 65 are free; s 113P and s 183 require payment.' },
        ],
      },
    ],
    outline: `<p><b>Other exceptions and statutory licences.</b> Private copying: time shifting (s 111), books/periodicals (s 43C), photos (s 47J), music to own device (s 109A), videotape (s 110AA); lost if the copy is sold or hired. Temporary technical copies (s 43B). Programs: running/studying (s 47B), backup (s 47C), interoperability (s 47D), error correction (s 47E), security testing (s 47F). Public art: sculptures in public (s 65), buildings (s 66), incidental filming (s 67), publication (s 68). s 200AB flexible dealing: special case, listed use, no conflict with normal exploitation, no unreasonable prejudice (TRIPS three-step); last resort. Classroom performance (s 28; live remote learning since 2026, s 28(9)–(10)). Education licence (s 113P); government use (ss 183, 183A).</p>`,
    treasures: ['s 200AB three-step test'],
  };
})();
