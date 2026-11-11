/* Copyright 1.8 · Dealings. Written and checked 11 Nov 2026 against the Copyright Act 1968 (Compilation No. 65) and
   Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJA = '<a href="https://wikijuris.net/ausip/assignlicence/" target="_blank" rel="noopener">Wikijuris, Assignments and licences</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-8'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Assignments',
        cards: [
          {
            kind: 'statute', margin: ['s 196(1)–(3) CA'],
            title: 'Copyright is property, and assignment needs writing',
            statute: { cite: 's 196 CA', text: '(1) Copyright is <mark>①</mark> personal property and … is transmissible by assignment, by will and by devolution by operation of law.<br>(3) An assignment of copyright (whether total or partial) <mark>②</mark> does not have effect unless it is in writing signed by or on behalf of the assignor.', notes: ['① it can be sold, left in a will, or pass on bankruptcy', '② an oral "you can have the copyright" doesn\'t transfer it'] },
            core: `<p>An <strong>assignment</strong> transfers ownership. The assignee becomes the owner: they can license it, assign it on, and sue for infringement. The assignor keeps nothing, and can even be sued by the assignee.</p>`,
            source: `${CA} s 196(1), (3) (quoted). ${WJA}, "Assignments".`,
          },
          {
            kind: 'statute', margin: ['s 196(2) CA'],
            title: 'Slicing up copyright',
            core: `<p>An assignment "may be limited in any way" (s 196(2)), including:</p>
              <ul><li><b>by right:</b> one or more of the owner's exclusive acts (say, film rights but not book rights);</li><li><b>by place:</b> "a place in or part of Australia";</li><li><b>by time:</b> part of the copyright term.</li></ul>
              <p>So one novel's copyright can be held by several owners, each for a different slice.</p>`,
            source: `${CA} s 196(2) (text checked). ${WJA}, "Assignments".`,
          },
          {
            kind: 'rule', margin: ['s 197 CA', 'APRA'],
            title: 'Assigning copyright that doesn\'t exist yet',
            core: `<p>You can assign <strong>future copyright</strong>: copyright in a work not yet made, like an unwritten book. When the work comes into existence, the copyright vests in the assignee (s 197).</p>
              <p>That's how <strong>APRA</strong> works: songwriters who join assign it the performing rights in all their present and future works, so it can license venues and broadcasters and collect fees for them.</p>`,
            source: `${CA} s 197(1) (text checked). ${WJA}, "Assignments" (APRA example).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: '"We paid for it, so we own it"',
            core: `<p>The most common real-world mistake, and a favourite exam fact pattern:</p>
              <ol><li>A business pays a <b>contractor</b> to make something (a logo, website, report).</li><li>Nobody signs anything about copyright.</li><li>The contractor still <strong>owns</strong> it (s 35(2); s 35(6) only covers employees), and there's no assignment without signed writing (s 196(3)).</li></ol>
              <p>The business usually has an <strong>implied licence</strong> to use the work for its intended purpose (Lesson B), but not ownership.</p>`,
            source: `${CA} ss 35(2), (6), 196(3). ${WJA}, "Implied licenses".`,
          },
        ],
        questions: [
          { type: 'tf', q: 'An oral agreement can assign copyright if both sides clearly agree.', a: false, explain: 's 196(3): an assignment "does not have effect unless it is in writing signed by or on behalf of the assignor".' },
          { type: 'sort', label: 'Spectroscopy', q: 'Can an assignment be limited this way (s 196(2))?', buckets: ['Yes', 'No (not an assignment)'], items: [{ t: 'Only the film rights in a novel', b: 0 }, { t: 'Only in Western Australia', b: 0 }, { t: 'Only for the next ten years', b: 0 }, { t: 'A handshake deal with no writing', b: 1 }], explain: 'Assignments can be limited by right, place and time, but must be in signed writing.' },
          { type: 'choice', q: 'A songwriter assigns copyright in "all songs I write in future" to a publisher. When does the publisher own a new song?', options: ['As soon as the song comes into existence (s 197)', 'Only after a second, separate assignment', 'Never: future copyright can\'t be assigned', 'Only once the song is published'], a: 0, explain: 'Future copyright vests in the assignee when it comes into existence.' },
          { type: 'tf', q: 'After assigning copyright, the original owner can still sue infringers.', a: false, explain: 'The assignee becomes owner and has title to sue; the assignor keeps nothing, and could even be sued by the assignee.' },
        ],
      },
      {
        title: 'Licences',
        cards: [
          {
            kind: 'statute', margin: ['s 10 CA', 's 119 CA'],
            title: 'Exclusive and non-exclusive licences',
            statute: { cite: 's 10(1) CA · definition', text: '<b>exclusive licence</b> means <mark>①</mark> a licence in writing, signed by or on behalf of the owner or prospective owner of copyright, authorizing the licensee, <mark>②</mark> to the exclusion of all other persons, to do an act that … the owner … would, but for the licence, have the exclusive right to do.', notes: ['① writing and signature, like an assignment', '② even the owner is excluded'] },
            core: `<p>A <strong>licence</strong> is permission, not ownership. An <strong>exclusive licensee</strong> can sue infringers in their own right: "except against the owner", they have the same rights of action and remedies as if the licence were an assignment, concurrent with the owner's (s 119).</p>
              <p>A <strong>non-exclusive</strong> licensee just has permission: others may be licensed too, and they can't sue.</p>`,
            deeper: `<p>A licence "binds every successor in title" of the person who granted it (s 196(4)): if the owner sells the copyright, the buyer takes it subject to existing licences. A gratuitous (unpaid) licence can be revoked at any time (<i>Trumpet Winsock v Ozemail</i> [1996] FCA 560).</p>`,
            source: `${CA} s 10(1) "exclusive licence" (quoted), ss 119, 196(4) (text checked). ${WJA}, "Licences".`,
          },
          {
            kind: 'case', margin: ['(1963) WN (NSW) 1578'],
            title: 'Implied licences: Beck v Montana Constructions',
            core: `<p>Architects were commissioned to draw plans for units on a block. The owners sold the land and gave the buyer the plans. The buyer used a different architect, whose plans substantially reproduced the first.</p>
              <p><b>Held:</b> there was an <strong>implied licence</strong> in favour of the buyer to use the plans for that land.</p>`,
            deeper: `<p>Other implied licences: a newspaper editor may publish letters to the editor (subject to contrary directions), and a commissioner may use commissioned material for the purposes contemplated. But an implied licence only goes as far as the purpose: in <i>Blackwell v Wadsworth</i> (unit 1.7), reusing a drawing in sale ads two years later went too far.</p>`,
            source: `${WJA}, "Implied licenses" (<i>Beck v Montana</i>).`,
          },
          {
            kind: 'compare', margin: ['Creative Commons'],
            title: 'Creative Commons: four building blocks',
            table: {
              head: ['Element', 'What the licensee must do'],
              rows: [
                ['<b>BY</b> Attribution', 'Credit the author or licensor as specified'],
                ['<b>SA</b> Share-alike', 'License derivative works only under an identical licence'],
                ['<b>NC</b> Non-commercial', 'Use only for non-commercial purposes'],
                ['<b>ND</b> No derivatives', 'Share only verbatim copies, no remixes'],
              ],
            },
            core: '<p>Creative Commons licences are free, standard public licences anyone can apply to their work. Wikijuris itself is CC BY-SA 3.0: anyone may adapt it, with credit, if they share the result on the same terms.</p>',
            source: `${WJA}, "Creative Commons Licensing" (table adapted).`,
          },
          {
            kind: 'rule', margin: ['ss 113N–113U CA'],
            title: 'Statutory licences: permission by law, for payment',
            core: `<p>A <strong>statutory licence</strong> lets a defined group use copyright material without asking, but the owner is entitled to be paid. The main one lets educational institutions copy and communicate works and broadcasts (Part IVA Div 4, ss 113N–113U), with payment through a collecting society.</p>
              <p>In December 2017 the old educational licences in Parts VA and VB were replaced by this simplified licence.</p>`,
            deeper: `<p>The 2026 amendments (unit 1.9) adjusted how the education licence interacts with the new orphan-works rules: copying covered by an orphan-works notice isn't "licensed copying" (s 113Q(2A)).</p>`,
            source: `${CA} ss 113N–113U, 113Q(2A) (checked); <i>Copyright Amendment Act 2026</i> Sch 1 item 1B. ${WJA}, "Statutory Licences".`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Licence or assignment?',
            core: `<ul><li><b>Who can sue?</b> Owner and assignee, yes. Exclusive licensee, yes (s 119). Non-exclusive licensee, no.</li>
              <li><b>Formalities?</b> Assignment and exclusive licence: signed writing. Non-exclusive licences can be oral or implied.</li>
              <li><b>Does it survive a sale?</b> Licences bind the buyer (s 196(4)).</li></ul>`,
            source: `${CA} ss 10(1), 119, 196(3)–(4). ${WJA}.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Which licensee can sue an infringer in their own right?', options: ['An exclusive licensee (s 119)', 'Any licensee', 'A non-exclusive licensee', 'Only a licensee under Creative Commons'], a: 0, explain: 'Except against the owner, an exclusive licensee has the same rights of action as if the licence were an assignment.' },
          { type: 'tf', q: 'An exclusive licence can be granted orally.', a: false, explain: 'By definition it\'s "a licence in writing, signed by or on behalf of the owner" (s 10(1)).' },
          { type: 'choice', q: 'In Beck v Montana Constructions, why could the buyer use the original architects\' plans?', options: ['There was an implied licence to use the plans for that land', 'Architectural plans aren\'t protected', 'The architects had assigned copyright in writing', 'The plans were in the public domain'], a: 0, explain: 'The plans were handed over with the land; an implied licence covered building on that land.' },
          { type: 'match', label: 'Citation network', q: 'Match each Creative Commons element to its condition.', pairs: [['BY', 'Give credit'], ['SA', 'Same licence for derivatives'], ['NC', 'Non-commercial use only'], ['ND', 'No remixes or adaptations']], explain: 'Mix and match: CC BY-SA, CC BY-NC-ND, and so on.' },
          { type: 'tf', q: 'If the copyright owner sells the copyright, existing licences end.', a: false, explain: 'A licence binds every successor in title (s 196(4)).' },
          { type: 'choice', label: 'From unit 1.7', q: 'A café paid a freelancer for a logo, with nothing in writing. What does the café most likely have?', options: ['An implied licence to use the logo as intended', 'Ownership of the copyright', 'An exclusive licence', 'No rights at all'], a: 0, explain: 'No written assignment (s 196(3)) and no written exclusive licence; but an implied licence for the contemplated purpose.' },
        ],
      },
    ],
    outline: `<p><b>Dealings.</b> Copyright is personal property, transmissible by assignment, will, operation of law (s 196(1)). Assignment needs signed writing (s 196(3)); may be limited by right, place, time (s 196(2)); future copyright assignable (s 197; APRA). Exclusive licence = signed writing, excludes everyone incl. owner (s 10); exclusive licensee can sue (s 119). Licences bind successors (s 196(4)); gratuitous licences revocable (<i>Trumpet Winsock</i>). Implied licences for contemplated purposes (<i>Beck v Montana</i>; letters to the editor), not beyond (<i>Blackwell</i>). Creative Commons: BY, SA, NC, ND. Statutory educational licence (ss 113N–113U, since Dec 2017).</p>`,
    treasures: ['Beck v Montana Constructions'],
  };
})();
