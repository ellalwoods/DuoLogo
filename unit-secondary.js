/* Copyright 1.13 · Secondary infringement, TPMs and rights information. Written and checked 11 Nov 2026 against the
   Copyright Act 1968 (Compilation No. 65) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const WJI = '<a href="https://wikijuris.net/ausip/copyrightinfringement/" target="_blank" rel="noopener">Wikijuris, Copyright infringement</a> (CC BY-SA 3.0)';

  D.units['u1-13'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Importing and selling infringing goods',
        cards: [
          {
            kind: 'statute', margin: ['ss 37, 38 CA', 'ss 102, 103 CA'],
            title: 'Dealing in copies someone else made',
            statute: { cite: 's 38(1) CA', text: 'the copyright in a literary, dramatic, musical or artistic work is infringed by a person who, in Australia, and without the licence of the owner of the copyright: (a) <mark>①</mark> sells, lets for hire, or by way of trade offers or exposes for sale or hire, an article; or (b) by way of trade exhibits an article in public; if the person <mark>②</mark> knew, or ought reasonably to have known, that the making of the article constituted an infringement of the copyright or, in the case of an imported article, <mark>③</mark> would, if the article had been made in Australia by the importer, have constituted such an infringement.', notes: ['① commercial dealings', '② actual or constructive knowledge', '③ the "hypothetical maker" test for imports'] },
            core: `<p>The retailer or importer didn't make the copy, so they haven't reproduced anything. Secondary infringement catches them anyway: <b>s 37</b> (importing for sale, hire, trade distribution or trade exhibition) and <b>s 38</b> (selling and trade dealings), with ss 102 and 103 doing the same for recordings, films and broadcasts.</p>
              <p>The extra element is <strong>knowledge</strong>: they knew, or ought reasonably to have known.</p>`,
            deeper: `<p>Distributing for trade, or to an extent that prejudicially affects the owner, counts as a sale (s 38(2)). "Article" includes an electronic copy (s 38(3)).</p>`,
            source: `${CA} ss 37(1), 38 (quoted and checked), 102, 103.`,
          },
          {
            kind: 'case', margin: ['[1997] FCA 370'],
            title: 'Raben Footwear v Polygram: a guarded reply is a warning',
            exp: {
              n: 1, cite: '[1997] FCA 370',
              hyp: 'An importer who asked the supplier about licensing, and got a non-committal answer, didn\'t know the CDs would infringe.',
              method: 'Raben imported 1,000 copies of a Cher CD from Germany. Polygram sued. Raben said it had asked the supplier about licensing and received a guarded reply.',
              result: 'Infringed. The supplier\'s response ought reasonably to have led Raben to assume the true position.',
              ok: false,
              discussion: 'Constructive knowledge: you can\'t avoid "ought reasonably to have known" by asking a question and ignoring an evasive answer.',
            },
            source: `${WJI} (summary of the case; judgment not opened).`,
          },
          {
            kind: 'case', margin: ['(1994) FCA ⚑'], flag: true,
            title: 'Milpurrurru v Indofurn: the carpets case',
            core: `<p>A company imported carpets made in Vietnam that reproduced the artworks of Aboriginal artists without permission. It infringed: the managing director knew or should have known, and one director's knowledge was enough for the company.</p>
              <p>The Court also awarded <strong>additional damages</strong> having regard to the <strong>cultural harm and personal distress</strong> caused (more in Remedies).</p>`,
            source: `${WJI}; Wikijuris, Copyright remedies. ⚑ Wikijuris gives two different citations ([1994] FCA 975 and [1994] FCA 1544) and the judgment couldn't be opened to settle which is right.`,
          },
          {
            kind: 'rule', margin: ['ss 44A–44F CA'],
            title: 'Parallel imports: genuine goods from overseas',
            core: `<p>A <b>parallel import</b> is a genuine copy, legitimately made overseas, brought in without the Australian owner's licence. Under s 37 that can infringe, because the test asks what would have happened <em>if the importer had made it in Australia</em>. The Act carves out big exceptions:</p>
              <ul><li><b>Sound recordings</b> (s 44D), <b>computer programs</b> (s 44E) and <b>electronic books and music</b> (s 44F): importing non-infringing copies doesn't infringe.</li>
              <li><b>Labels and packaging</b> (s 44C): copyright in a non-infringing accessory, such as a label or manual, can't be used to block importing the product.</li>
              <li><b>Printed books</b> (s 44A): only limited exceptions, e.g. where the Australian owner hasn't filled an order within 90 days, or a single copy for a customer who won't resell it.</li></ul>`,
            source: `${CA} ss 44A(2)–(3), 44C, 44D, 44E, 44F (checked); ss 112A, 112C, 112D, 112DA for subject-matter other than works. ${WJI}.`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Retail and e-commerce clients',
            core: `<ul><li>For a reseller, the risk is <b>knowledge</b>. Once the rights holder writes to them, they're on notice for any further sales.</li>
              <li>Get supplier warranties and written evidence that stock is licensed. A vague or evasive answer is a red flag, not a defence (<i>Raben</i>).</li>
              <li>"Grey goods" questions turn on the <b>type of product</b>: music, software and labels are largely free to parallel import; printed books mostly aren't. Check trade marks separately.</li></ul>`,
            source: `${CA} ss 37, 38, 44A–44F; ${WJI}.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A shop selling pirated DVDs it didn\'t make can infringe copyright.', a: true, explain: 'Secondary infringement by sale (s 103 for films; s 38 for works), if it knew or ought reasonably to have known.' },
          { type: 'choice', q: 'What extra element must a copyright owner prove for secondary infringement by selling?', options: ['The seller knew, or ought reasonably to have known, the article was infringing', 'The seller made the copies', 'The seller intended to harm the owner', 'The work is registered'], a: 0, explain: 's 38(1): actual or constructive knowledge.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Can genuine copies made overseas be imported for sale without the Australian owner\'s licence?', buckets: ['Generally yes', 'Only in limited cases'], items: [{ t: 'Music CDs', b: 0 }, { t: 'Software', b: 0 }, { t: 'E-books', b: 0 }, { t: 'A product whose label is copyright', b: 0 }, { t: 'Printed books', b: 1 }], explain: 'ss 44C–44F free up recordings, programs, electronic items and accessories; s 44A has only limited exceptions for printed books.' },
          { type: 'choice', q: 'In Raben Footwear, why did the importer\'s inquiry to its supplier not help?', options: ['The guarded reply should have alerted it to the true position', 'It never asked', 'The CDs were made in Australia', 'Knowledge is irrelevant'], a: 0, explain: 'Constructive knowledge: it ought reasonably to have known.' },
        ],
      },
      {
        title: 'Digital locks and rights information',
        cards: [
          {
            kind: 'statute', margin: ['s 10(1), s 116AN CA'],
            title: 'Circumventing an access control',
            statute: { cite: 's 116AN(1) CA', text: 'An owner or exclusive licensee of the copyright … may bring an action against a person if: (a) the work or other subjectmatter is protected by an <mark>①</mark> access control technological protection measure; and (b) the person does an act that results in the <mark>②</mark> circumvention of the access control technological protection measure; and (c) the person <mark>③</mark> knows, or ought reasonably to know, that the act would have that result.', notes: ['① a lock that controls access, used by or with the permission of the owner', '② no infringing copy needed', '③ knowledge'] },
            core: `<p>A <b>technological protection measure</b> (TPM) is a digital lock: encryption, a password wall, copy protection. Breaking an <b>access control</b> TPM is actionable in itself, even if you never copy anything.</p>
              <p>It's also actionable to make, import, distribute or offer <b>circumvention devices</b> (s 116AO) or provide <b>circumvention services</b> (s 116AP). Doing it for commercial advantage or profit can be a criminal offence (e.g. s 132APC).</p>`,
            deeper: `<p>Region-coding on films and games, and locks on machine software that only restrict which goods or services can be used with a device (e.g. third-party parts or cartridges), are <em>excluded</em> from the definition of access control TPM (s 10(1), paras (c)–(d)).</p>`,
            source: `${CA} s 10(1) (definition), ss 116AN(1) (quoted), 116AO, 116AP, 132APC (checked).`,
          },
          {
            kind: 'rule', margin: ['s 116AN(2)–(9) CA'],
            title: 'Exceptions to the circumvention ban',
            core: `<p>Circumvention isn't actionable where the person has the owner's <b>permission</b>, or for:</p>
              <ul><li><b>interoperability</b>: making an independently created program work with a lawfully obtained one;</li>
              <li><b>encryption research</b>;</li><li><b>computer security testing</b>;</li><li><b>online privacy</b>;</li><li><b>law enforcement and national security</b>;</li><li><b>non-profit libraries, archives and educational institutions</b> deciding whether to acquire the work;</li><li>other <b>prescribed acts</b> listed in the regulations.</li></ul>
              <p>The defendant has to prove the exception applies (s 116AN(10)).</p>`,
            source: `${CA} s 116AN(2)–(9) (headings and s 116AN(3) checked). The prescribed acts are in the <i>Copyright Regulations 2017</i>.`,
          },
          {
            kind: 'statute', margin: ['ss 116B, 116C CA'],
            title: 'Rights management information',
            core: `<p><b>Electronic rights management information</b> (RMI) is electronic information attached to, or appearing with, a copy that identifies the work and its author or owner, or the terms of use (s 10(1)): think image metadata, embedded credits, licence tags.</p>
              <p>Removing or altering it without permission, knowing (or where you ought reasonably to know) it would <strong>induce, enable, facilitate or conceal</strong> an infringement, is actionable (s 116B). So is distributing, importing or communicating copies whose RMI has been stripped (s 116C).</p>
              <p>And the knowledge is <strong>presumed</strong> unless the defendant proves otherwise (ss 116B(3), 116C(3)).</p>`,
            source: `${CA} s 10(1) (definition), ss 116B, 116C (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Stripping metadata is a separate claim',
            core: `<ul><li>A client's content workflow that strips image metadata (credits, licence tags) can expose them to a <b>s 116B/116C</b> claim on top of any infringement claim, and the knowledge element is presumed against them.</li>
              <li>"We bought it legitimately" doesn't answer a <b>circumvention</b> claim: breaking the lock is the wrong, not copying.</li>
              <li>Before advising that a workaround is fine, check whether it fits an <b>exception</b> (interoperability is the one that comes up most in tech work) or falls outside the TPM definition (e.g. region coding).</li></ul>`,
            source: `${CA} ss 10(1), 116AN, 116B, 116C.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Circumventing an access control TPM is actionable even if no copy of the work is made.', a: true, explain: 's 116AN: the act of circumvention is the wrong.' },
          { type: 'tf', q: 'Region-coding on a DVD player is an access control TPM, so bypassing it is actionable.', a: false, explain: 'The s 10(1) definition excludes measures that control geographic market segmentation of films and computer programs.' },
          { type: 'match', label: 'Citation network', q: 'Match each provision to what it targets.', pairs: [['s 116AN', 'Circumventing an access control'], ['s 116AO', 'Making or supplying circumvention devices'], ['s 116B', 'Removing or altering rights information'], ['s 116C', 'Distributing copies with stripped rights information']], explain: 'Part V Division 2A.' },
          { type: 'choice', q: 'Which is an exception to the circumvention ban?', options: ['Achieving interoperability of an independently created program', 'Watching a film you paid for in a different format', 'Saving money', 'The lock was easy to break'], a: 0, explain: 's 116AN(3).' },
          { type: 'tf', q: 'In a s 116B action, the owner must prove the defendant knew removing the information would facilitate infringement.', a: false, explain: 's 116B(3): knowledge is presumed unless the defendant proves otherwise.' },
        ],
      },
    ],
    outline: `<p><b>Secondary infringement, TPMs and RMI.</b> Importing for trade (s 37; s 102) and selling or trade dealings (s 38; s 103) infringe where the person knew or ought reasonably to have known the article was infringing (for imports: would have infringed if made here by the importer). <i>Raben Footwear</i> [1997] FCA 370 (guarded supplier reply = constructive knowledge); <i>Milpurrurru v Indofurn</i> (imported carpets; additional damages for cultural harm) ⚑ citation. Parallel imports permitted for recordings (s 44D), programs (s 44E), electronic literary or music items (s 44F), accessories/labels (s 44C); printed books limited (s 44A). Access control TPMs: circumvention (s 116AN), devices (s 116AO), services (s 116AP), offences (s 132APC); region coding excluded (s 10(1)); exceptions incl. interoperability, security, privacy, prescribed acts. RMI: removal/alteration (s 116B), distribution (s 116C); knowledge presumed.</p>`,
    treasures: ['Raben Footwear'],
  };
})();
