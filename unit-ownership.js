/* Copyright 1.7 · Ownership. Written and checked 11 Nov 2026 against the Copyright Act 1968 (Compilation No. 65) and
   Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJO = '<a href="https://wikijuris.net/ausip/copyrightownership/" target="_blank" rel="noopener">Wikijuris, Copyright ownership</a> (CC BY-SA 3.0)';
  const WJC = '<a href="https://wikijuris.net/ausip/crowncopyright/" target="_blank" rel="noopener">Wikijuris, Crown copyright</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-7'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Authors and employers',
        cards: [
          {
            kind: 'statute', margin: ['s 35(2), (6) CA'],
            title: 'The rule, and the employee exception',
            statute: { cite: 's 35(6) CA', text: 'Where a literary, dramatic or artistic work …, or a musical work, is made by the author <mark>①</mark> in pursuance of the terms of his or her employment by another person <mark>②</mark> under a contract of service or apprenticeship, <mark>③</mark> that other person is the owner of any copyright subsisting in the work…', notes: ['① made as part of the job, not just during working hours', '② an employee, not an independent contractor', '③ the employer owns from the start: no assignment needed'] },
            core: `<p>The starting point is s 35(2): the <strong>author</strong> is the first owner. The biggest exception is s 35(6): works made by an <strong>employee</strong> in the course of employment belong to the <strong>employer</strong>.</p>
              <p>The line is between a contract <em>of</em> service (employee) and a contract <em>for</em> services (independent contractor). Contractors and consultants keep copyright unless they agree otherwise.</p>`,
            deeper: `<p>A consultant retains copyright in what they produce, subject to an express agreement to the contrary (<i>Oceanroutes v Lamond</i> (1984) AIPC 90). Students own their own work unless they're specifically employed to produce it.</p>`,
            source: `${CA} s 35(2), (6) (quoted). ${WJO}, "Work Produced in the Course of Employment" (<i>Oceanroutes</i>; students).`,
          },
          {
            kind: 'case', margin: ['[1973] FSR 33'],
            title: 'Beloff v Pressdram',
            exp: {
              n: 2, cite: '[1973] FSR 33',
              hyp: 'A journalist owns copyright in an internal memo she wrote at work, so she can sue Private Eye for publishing it.',
              method: 'The Observer\'s political correspondent wrote a sensitive internal memo about the Prime Minister to the editor and senior staff. Private Eye published it in full.',
              result: 'Hypothesis rejected',
              discussion: 'She was employed under a contract of service, so copyright in the memo belonged to the Observer\'s owners, not to her.',
            },
            core: `<p>The memo was written as part of her job. So the employer, not the author, owned the copyright, and only the employer could sue.</p>`,
            source: `${WJO}, <i>Beloff v Pressdram</i>.`,
          },
          {
            kind: 'statute', margin: ['s 35(4) CA'],
            title: 'Employed journalists: a split',
            core: `<p>For a work made by an employee of a newspaper or magazine proprietor, for inclusion in a newspaper or magazine (s 35(4)):</p>
              <ul><li>the <strong>journalist</strong> owns the copyright only for reproducing the work for inclusion in a <b>book</b>, and for <b>hard copy facsimiles</b> made from a paper edition (photocopies, basically);</li>
              <li>the <strong>proprietor</strong> owns it for every other purpose.</li></ul>`,
            deeper: `<p>A "hard copy facsimile" is one in material form "from which the work is visible to a human being without the use of any device" (s 35(7)). So the proprietor controls online and digital uses.</p>`,
            source: `${CA} s 35(4), (7) (text checked). ${WJO}, "Journalists".`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Employee or contractor?',
            core: `<ol><li><b>Don't assume the business owns what it paid for.</b> If the creator was a contractor, the creator owns the copyright unless there's a written assignment (s 196(3), unit 1.8).</li>
              <li><b>Check "in pursuance of the terms of employment".</b> An employee's weekend novel isn't the employer's.</li>
              <li><b>Remember s 35(3):</b> the employee, journalist and commission rules can be excluded or modified by agreement.</li></ol>`,
            source: `${CA} ss 35(3), (6), 196(3) (text checked). ${WJO}.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'An in-house graphic designer creates a logo as part of her job. Who first owns the copyright?', options: ['Her employer (s 35(6))', 'The designer, until she assigns it', 'Whoever registers it first', 'The designer and employer jointly'], a: 0, explain: 'Made in pursuance of her employment under a contract of service: the employer owns it from the start.' },
          { type: 'choice', q: 'A freelance designer creates a logo for a café and is paid in full. No written agreement mentions copyright. Who owns it?', options: ['The freelancer: a contractor keeps copyright unless it is assigned in writing', 'The café, because it paid', 'The café, under s 35(6)', 'Nobody: logos aren\'t protected'], a: 0, explain: 's 35(6) only covers employees. Assignment must be in writing (s 196(3)). The café will usually have an implied licence to use it as intended (unit 1.8).' },
          { type: 'tf', q: 'In Beloff v Pressdram, the journalist could sue for infringement of copyright in her memo.', a: false, explain: 'She was an employee under a contract of service: copyright belonged to the Observer\'s owners.' },
          { type: 'sort', label: 'Spectroscopy', q: 'An employed newspaper journalist\'s article. Who owns each use?', buckets: ['Journalist', 'Newspaper proprietor'], items: [{ t: 'Reprinting it in a book', b: 0 }, { t: 'A photocopy from the paper edition', b: 0 }, { t: 'Publishing it on the newspaper\'s website', b: 1 }, { t: 'Syndicating it to another newspaper', b: 1 }], explain: 's 35(4): the journalist keeps book and hard copy facsimile rights; the proprietor owns the rest.' },
          { type: 'tf', q: 'The employer exception in s 35(6) can be changed by agreement.', a: true, explain: 's 35(3): the operation of s 35(4)–(6) may be excluded or modified by agreement.' },
        ],
      },
      {
        title: 'Commissions, makers and the Crown',
        cards: [
          {
            kind: 'statute', margin: ['s 35(5), (7) CA'],
            title: 'Commissioned photos, portraits and engravings',
            statute: { cite: 's 35(5) CA', text: 'where: (a) a person makes, <mark>①</mark> for valuable consideration, an agreement with another person for <mark>②</mark> the taking of a photograph for a private or domestic purpose, the painting or drawing of a portrait or the making of an engraving…; and (b) the work is made in pursuance of the agreement; the first-mentioned person is the owner…, but, if … that person made known … the purpose for which the work was required, <mark>③</mark> the author is entitled to restrain the doing, otherwise than for that purpose, of any act comprised in the copyright…', notes: ['① a paid commission', '② only these three kinds of work', '③ the artist keeps a veto over other uses'] },
            core: `<p>"Private or domestic purpose" includes "a portrait of family members, a wedding party or children" (s 35(7)). So the couple who pay for their wedding photos own the copyright in them, not the photographer.</p>
              <p>For every <strong>other</strong> commissioned work, the author owns the copyright, unless there's an agreement.</p>`,
            source: `${CA} s 35(5), (7) (quoted). ${WJO}, "Commissioned Artistic Works". Note: Wikijuris omits the "for valuable consideration" requirement; the Act has it.`,
          },
          {
            kind: 'case', margin: ['(1982) 64 FLR 145'],
            title: 'Blackwell v Wadsworth',
            core: `<p>An artist was commissioned to draw a hotel. Two years later, newspaper ads for the hotel's sale reproduced the drawing.</p>
              <p><b>Held:</b> infringement. A drawing of a hotel isn't a portrait, photo or engraving within s 35(5), so the <strong>artist</strong> owned the copyright, and there was no implied licence to reproduce it in the sale ads.</p>`,
            deeper: `<p>Implied licences do arise from commissions: the commissioner can usually use the work for the purposes contemplated (unit 1.8). Advertising the sale two years later went beyond that.</p>`,
            source: `${WJO}, <i>Blackwell v Wadsworth</i>. Wikijuris, "Assignments and Licences" (implied licences for commissioned material).`,
          },
          {
            kind: 'rule', margin: ['ss 97–100 CA'],
            title: 'Part IV owners',
            core: `<ul><li><b>Sound recordings:</b> the maker owns (s 97(2)); owners of a live recording hold "as tenants in common in equal shares" (s 97(2A)).</li>
              <li><b>Commissioned recordings and films:</b> if made for valuable consideration, the person who commissioned them owns, absent agreement (ss 97(3), 98(3)).</li>
              <li><b>Films:</b> the maker owns; for films that aren't commissioned, directors are included, but only for the right to include the film in a <b>retransmission</b> of a free-to-air broadcast (s 98(4)–(6)).</li>
              <li><b>Broadcasts:</b> the maker (s 99). <b>Published editions:</b> the publisher (s 100).</li></ul>`,
            source: `${CA} ss 97–100 (text checked; s 97(2A) quoted).`,
          },
          {
            kind: 'statute', margin: ['ss 176–180 CA'],
            title: 'Crown copyright',
            core: `<p>The Commonwealth or a State owns copyright in:</p>
              <ul><li>original works made by, or under the direction or control of, the Crown (s 176);</li><li>original works first published in Australia by, or under the direction or control of, the Crown (s 177);</li><li>recordings and films made by, or under its direction or control (s 178).</li></ul>
              <p>These rules can be changed by agreement (s 179). Crown copyright lasts until <strong>50 years after the year the material was made</strong> (s 180).</p>`,
            deeper: `<p>The Copyright Law Review Committee recommended abolishing the Crown's special position in its report <i>Crown Copyright</i> (2005); the government didn't implement it. Note that s 176(1) can even create copyright that wouldn't otherwise subsist. Finkelstein J described s 176 as attributing the author's act of making the work to the Crown: "we are necessarily dealing with a fiction".</p>`,
            source: `${CA} ss 176–180 (text checked). ${WJC} (CLRC report; Finkelstein J in <i>Copyright Agency v NSW</i>, as quoted there).`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'Who owns what at the wedding?',
            core: `<p>Priya and Tom pay a photographer to shoot their wedding. They also pay a painter for a portrait of the two of them. The venue's employed events manager writes a speech for the evening, and a guest films the speeches on her phone.</p>
              <ul><li><b>Photos:</b> paid, private or domestic purpose (a wedding party): <strong>Priya and Tom</strong> (s 35(5), (7)).</li>
              <li><b>Portrait:</b> paid portrait: <strong>Priya and Tom</strong>, but the painter can restrain uses beyond the purpose made known (s 35(5)).</li>
              <li><b>Speech:</b> written as part of the manager's job: <strong>the venue</strong> (s 35(6)).</li>
              <li><b>The guest's video:</b> she made it, not commissioned: <strong>the guest</strong> owns the film (s 98(2)).</li></ul>`,
            source: 'Fictional facts, applying ss 35 and 98 of the Act.',
          },
        ],
        questions: [
          { type: 'choice', q: 'A couple pays a photographer to take family portraits at home. Who owns the copyright?', options: ['The couple (s 35(5))', 'The photographer', 'The photographer and couple jointly', 'Nobody until it is published'], a: 0, explain: 'A paid commission for a photograph for a private or domestic purpose, which includes portraits of family members (s 35(7)).' },
          { type: 'choice', q: 'Why did the artist in Blackwell v Wadsworth own the copyright in his commissioned drawing of a hotel?', options: ['A drawing of a hotel isn\'t a photograph, portrait or engraving within s 35(5), so the general rule applied', 'He had registered it', 'The commission was unpaid', 'He was the hotel\'s employee'], a: 0, explain: 'Outside the s 35(5) categories, the author owns commissioned work. And there was no implied licence to use it in sale ads.' },
          { type: 'tf', q: 'A company that commissions and pays for a corporate video owns the copyright in the film, unless agreed otherwise.', a: true, explain: 's 98(3): commissioned films made for valuable consideration belong to the commissioner, absent agreement.' },
          { type: 'choice', q: 'How long does Crown copyright in a work last?', options: ['Until 50 years after the year the material was made (s 180)', 'Life of the author plus 70 years', 'Forever', '25 years after first publication'], a: 0, explain: 's 180.' },
          { type: 'match', label: 'Citation network', q: 'Connect each owner to the section.', pairs: [['Employer', 's 35(6)'], ['Commissioner of a family photo', 's 35(5)'], ['Publisher of an edition', 's 100'], ['The Crown', 's 176']], explain: 'The main exceptions to "the author owns".' },
        ],
      },
    ],
    outline: `<p><b>Ownership.</b> Author is first owner (s 35(2)). Employees: employer owns works made in pursuance of a contract of service (s 35(6); <i>Beloff v Pressdram</i> [1973] FSR 33); contractors and consultants keep copyright (<i>Oceanroutes</i>). Employed journalists keep book and hard-copy facsimile rights only (s 35(4), (7)). Paid commissions of private or domestic photos, portraits and engravings: commissioner owns; author can restrain other uses (s 35(5), (7)); otherwise author owns (<i>Blackwell v Wadsworth</i> (1982) 64 FLR 145). s 35(4)–(6) can be varied by agreement (s 35(3)). Part IV: maker owns (ss 97–100); commissioned recordings and films → commissioner (ss 97(3), 98(3)); directors: retransmission right only (s 98(4)–(6)); live recordings: tenants in common in equal shares (s 97(2A)). Crown: ss 176–179; 50 years from making (s 180).</p>`,
    treasures: ['Beloff v Pressdram'],
  };
})();
