/* Copyright 1.14 · Fair dealing. Written and checked 11 Nov 2026 against the Copyright Act 1968 (Compilation No. 65)
   and Wikijuris, Copyright limitations and exceptions (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const WJD = '<a href="https://wikijuris.net/ausip/copyrightdefences/" target="_blank" rel="noopener">Wikijuris, Copyright limitations and exceptions</a> (CC BY-SA 3.0)';

  D.units['u1-14'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Fair dealing: purpose first, then fairness',
        cards: [
          {
            kind: 'test', margin: ['ss 40–43, 103A–104, 113E CA'],
            title: 'Two questions, in this order',
            steps: ['<b>Purpose:</b> is the dealing for one of the listed purposes? If not, no fair dealing defence (Australia has no general "fair use").', '<b>Conditions:</b> any extra condition met, such as a sufficient acknowledgement?', '<b>Fairness:</b> is the dealing fair in all the circumstances? If yes, no infringement.'],
            core: `<p>The purposes: <b>research or study</b> (s 40; s 103C), <b>criticism or review</b> (s 41; s 103A), <b>parody or satire</b> (s 41A; s 103AA), <b>reporting news</b> (s 42; s 103B), <b>professional advice</b> by a lawyer, patent attorney or trade marks attorney (s 43(2); s 104), and <b>access by people with a disability</b> (s 113E).</p>`,
            source: `${CA} ss 40, 41, 41A, 42, 43, 103A, 103AA, 103B, 103C, 104, 113E (checked). ${WJD}.`,
          },
          {
            kind: 'compare', margin: ['FAIR USE ≠ FAIR DEALING'],
            title: 'Fair dealing is not US fair use',
            table: {
              head: ['', 'US fair use', 'Australian fair dealing'],
              rows: [
                ['Starting point', 'Any use can be fair', 'Must fit a listed purpose first'],
                ['Then', 'Four fairness factors', 'Is it fair in the circumstances?'],
                ['"Transformative" use', 'Central', 'Not a purpose in itself'],
              ],
            },
            core: '<p>Plenty of Australian creators and clients assume "fair use" applies here. It doesn\'t: an American blog post about fair use is not advice on Australian law.</p>',
            source: WJD,
          },
          {
            kind: 'statute', margin: ['s 40(2) CA'],
            title: 'The fairness factors (research or study)',
            statute: { cite: 's 40(2) CA', text: 'the matters to which regard shall be had … include: (a) the purpose and character of the dealing; (b) the nature of the work or adaptation; (c) <mark>①</mark> the possibility of obtaining the work or adaptation within a reasonable time at an ordinary commercial price; (d) <mark>②</mark> the effect of the dealing upon the potential market for, or value of, the work or adaptation; and (e) in a case where part only of the work or adaptation is reproduced—<mark>③</mark> the amount and substantiality of the part copied taken in relation to the whole work or adaptation.', notes: ['① could you just buy it?', '② does it substitute for a sale?', '③ how much, and how important'] },
            core: `<p>These factors are written into the research or study defence (and s 113E has a similar list), but they're a sensible guide to fairness for the other purposes too.</p>`,
            source: `${CA} s 40(2) (quoted), s 113E(2). ${WJD} (fairness considered holistically).`,
          },
          {
            kind: 'rule', margin: ['s 40(3)–(5) CA'],
            title: 'Research or study: the "10%" safe zone',
            core: `<p>For research or study, some copying is <em>taken to be</em> fair:</p>
              <ul><li>a whole <b>article</b> in a periodical (but not if you also copy another article on a different subject for different research, s 40(4));</li>
              <li>a <b>reasonable portion</b> of other works: 10% of the pages of a published edition of at least 10 pages, or 10% of the words of a published electronic literary or dramatic work, <em>or</em> a single chapter (s 40(5)).</li></ul>
              <p>Outside those bright lines, it can still be fair, but you're back to the factors.</p>`,
            deeper: `<p>You can't take a reasonable portion, then come back for another part of the same work and claim the deeming again (s 40(7)).</p>`,
            source: `${CA} s 40(3)–(7) (checked). Wikijuris refers to s 10(2)–(2A) for reasonable portion; the current Act sets it out in the s 40(5) table, and s 40(8) says s 10(2)–(2C) don't affect it.`,
          },
          {
            kind: 'case', margin: ['(1990) 18 IPR 292'],
            title: 'De Garis: whose purpose counts?',
            exp: {
              n: 1, cite: '(1990) 18 IPR 292',
              hyp: 'A press-clipping service that copies articles for paying clients is dealing for "research", because its clients use the copies for research.',
              method: 'A media monitoring bureau supplied photocopies of published articles to clients for a fee and relied on s 40.',
              result: 'Not research or study. The relevant purpose is that of the person making the dealing, not what the copies are later used for.',
              ok: false,
              discussion: 'A business copying for its customers can\'t borrow their purpose. Media monitoring and content-curation services need licences.',
            },
            source: `${WJD} (summary of the case).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'The "10% rule" myth',
            core: `<ul><li>The 10% / one chapter rule is only a deeming rule for <b>research or study</b>. It doesn't make 10% of anything automatically fine for other purposes.</li>
              <li>Research or study covers <b>your own</b> study. Copying for other people (a teacher handing out copies, a firm circulating articles to the team) generally isn't covered; that's what licences and statutory schemes are for.</li></ul>`,
            source: `${CA} s 40; ${WJD}.`,
          },
        ],
        questions: [
          { type: 'order', q: 'Put the fair dealing analysis in order.', items: ['Is it for a listed purpose?', 'Is any extra condition met, such as acknowledgement?', 'Is the dealing fair in the circumstances?'], explain: 'Purpose first, conditions, then fairness.' },
          { type: 'tf', q: 'Australia has a general "fair use" defence like the US.', a: false, explain: 'Australia has purpose-specific fair dealing only.' },
          { type: 'choice', q: 'Under s 40(5), how much of a 200-page textbook without chapters is taken to be a fair dealing for study?', options: ['20 pages', '50 pages', 'The whole book', 'Nothing: you need a licence'], a: 0, explain: '10% of the number of pages in the edition.' },
          { type: 'tf', q: 'In De Garis, a press-clipping bureau could rely on its customers\' research purpose.', a: false, explain: 'The purpose that counts is the purpose of the person making the dealing.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Is this one of the fair dealing purposes in the Act?', buckets: ['A listed purpose', 'Not a listed purpose'], items: [{ t: 'Parody or satire', b: 0 }, { t: 'Reporting news', b: 0 }, { t: 'Professional advice by a lawyer', b: 0 }, { t: 'Making a "transformative" new work', b: 1 }, { t: 'Advertising a product', b: 1 }, { t: 'Training staff', b: 1 }], explain: 'ss 40–43, 103A–104, 113E list the purposes.' },
        ],
      },
      {
        title: 'Criticism, parody, news and advice',
        cards: [
          {
            kind: 'statute', margin: ['s 41 CA', 's 10(1) CA'],
            title: 'Criticism or review: acknowledge the work',
            statute: { cite: 's 41 CA', text: 'A fair dealing with a literary, dramatic, musical or artistic work … does not constitute an infringement of the copyright in the work if it is for the purpose of criticism or review, <mark>①</mark> whether of that work or of another work, and <mark>②</mark> a sufficient acknowledgement of the work is made.', notes: ['① you can quote work A to criticise work B', '② title (or description) and author'] },
            core: `<p>A <b>sufficient acknowledgement</b> identifies the work by its title or other description and, unless it's anonymous or pseudonymous or the author agreed otherwise, the author (s 10(1)).</p>`,
            source: `${CA} ss 41 (quoted), 10(1) (definition checked).`,
          },
          {
            kind: 'case', margin: ['[2002] FCAFC 146'],
            title: 'The Panel case: genuine criticism or dressed-up taking?',
            core: `<p>Network Ten's <i>The Panel</i> used clips from Channel Nine programs. The courts held that criticism and review are words of "wide and indefinite scope which should be interpreted liberally"; criticism can be strongly expressed and needn't be balanced, if it's genuine (Conti J).</p>
              <p>The Full Court's test: is the program "a genuine piece of criticism or review, or is it something else, such as an attempt to dress up the infringement of another's copyright in the guise of criticism, and so profit unfairly from another's work?" (Hely J, quoting Lord Denning: "it is not fair dealing for a rival in the trade to take copyright material and use it for its own benefit").</p>
              <p>News reported with humour can still be news.</p>`,
            source: `<i>TCN Channel Nine Pty Ltd v Network Ten Ltd</i> [2001] FCA 108 at [66]; (2002) 118 FCR 417 at [115], as quoted in ${WJD}.`,
          },
          {
            kind: 'rule', margin: ['ss 41A, 103AA CA'],
            title: 'Parody or satire',
            core: `<p>Since 2006 there's a fair dealing for <b>parody or satire</b> (s 41A; s 103AA for audiovisual items). The Act doesn't define either word, and unlike criticism and review, <strong>no acknowledgement is required</strong>.</p>
              <p>It's still a <em>fair</em> dealing: the parody or satire must be genuine, not a pretext for taking the work.</p>`,
            deeper: `<p>US courts distinguish parody (commenting on the original) from satire (using it to target something else). Australia covers both, and there's little Australian case law on where the limits are.</p>`,
            source: `${CA} ss 41A, 103AA (checked). ${WJD} (no definition, no acknowledgement requirement; US distinction). Inserted by the <i>Copyright Amendment Act 2006</i> (No. 158, 2006), per the CA endnotes.`,
          },
          {
            kind: 'rule', margin: ['ss 42, 43, 104 CA'],
            title: 'News, court and advice',
            core: `<ul><li><b>Reporting news</b> (s 42): in a newspaper, magazine or similar periodical <em>with</em> sufficient acknowledgement; by communication or in a film (no acknowledgement needed). But music played in a news report that isn't part of the news isn't covered (s 42(2)): background music added to a news story needs a licence.</li>
              <li><b>Judicial proceedings</b> (s 43(1)): <em>anything</em> done for the purposes of a judicial proceeding or a report of one doesn't infringe copyright in a work.</li>
              <li><b>Professional advice</b> (s 43(2)): a fair dealing for the purpose of advice by a <b>legal practitioner, patent attorney or trade marks attorney</b>. For audiovisual items, s 104 covers seeking or giving that advice.</li></ul>`,
            source: `${CA} ss 42, 43, 104 (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Using copyright material in your own work',
            core: `<ul><li>Copying a document into a <b>court book</b> or affidavit is covered by s 43(1). Copying it into a <b>client advice</b> must be a <em>fair</em> dealing for that purpose (s 43(2)).</li>
              <li>A firm's <b>marketing</b>, newsletters or social posts aren't advice and usually aren't news or criticism. Get a licence or use your own images.</li>
              <li>When a client relies on criticism, review or news in print, check they gave a <b>sufficient acknowledgement</b>. Missing it sinks the defence.</li></ul>`,
            source: `${CA} ss 10(1), 41, 42, 43.`,
          },
          {
            kind: 'critique', margin: ['POLICY'],
            title: 'Should Australia adopt fair use?',
            core: `<p>The <b>ALRC</b> (2014) and the <b>Productivity Commission</b> (2016) both recommended replacing the purpose-based fair dealing defences with an open-ended fair use test. Supporters say it's technology-neutral and leaves room for innovation and transformative use; opponents worry it weakens owners' control and revenue, and adds uncertainty.</p>
              <p>For now, the law is fair dealing plus a long list of specific exceptions (next unit).</p>`,
            source: `${WJD}, citing ALRC, <i>Copyright and the Digital Economy</i>, Report No 122 (2014) and Productivity Commission, <i>Intellectual Property Arrangements</i> (2016).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A fair dealing for parody or satire requires a sufficient acknowledgement.', a: false, explain: 's 41A has no acknowledgement requirement.' },
          { type: 'choice', q: 'What does a sufficient acknowledgement identify?', options: ['The work (title or description) and, usually, the author', 'The copyright owner\'s address', 'The licence fee', 'The date of publication'], a: 0, explain: 's 10(1).' },
          { type: 'tf', q: 'Background music added to a TV news story is covered by the news reporting defence.', a: false, explain: 's 42(2): music that doesn\'t form part of the news being reported isn\'t a fair dealing.' },
          { type: 'match', label: 'Citation network', q: 'Match each purpose to its section for works.', pairs: [['Research or study', 's 40'], ['Criticism or review', 's 41'], ['Parody or satire', 's 41A'], ['Reporting news', 's 42']], explain: 'Part III Division 3.' },
          { type: 'choice', q: 'What was the Full Court\'s question in the Panel case?', options: ['Is it genuine criticism or review, or infringement dressed up as criticism?', 'Was the criticism balanced?', 'Did Ten pay a licence fee?', 'Was the program funny?'], a: 0, explain: '(2002) 118 FCR 417 at [115].' },
          { type: 'tf', q: 'Copying documents for the purposes of court proceedings doesn\'t infringe copyright in a work.', a: true, explain: 's 43(1): anything done for the purposes of a judicial proceeding.' },
        ],
      },
    ],
    outline: `<p><b>Fair dealing.</b> Purpose first, then fairness; no general fair use. Purposes: research or study (s 40; s 103C), criticism or review with sufficient acknowledgement (s 41; s 103A), parody or satire (s 41A; s 103AA; no acknowledgement), news (s 42; s 103B; acknowledgement in print; s 42(2) background music not covered), professional advice by lawyers, patent and trade marks attorneys (s 43(2); s 104), disability access (s 113E). Judicial proceedings: anything done (s 43(1)). Fairness factors s 40(2): purpose and character, nature, availability at ordinary commercial price, market effect, amount. Research or study deemed fair: whole periodical article (s 40(3)); 10% of pages / words or one chapter (s 40(5)). <i>De Garis</i> (1990) 18 IPR 292: the dealer's own purpose counts. <i>Panel case</i> [2001] FCA 108; (2002) 118 FCR 417: genuine criticism vs dressed-up taking. ALRC 2014 and PC 2016 recommended fair use.</p>`,
    treasures: ['The Panel case'],
  };
})();
