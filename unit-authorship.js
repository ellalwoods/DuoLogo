/* Copyright 1.6 · Authorship and connecting factors. Written and checked 11 Nov 2026 against the Copyright Act 1968
   (Compilation No. 65), the Copyright (International Protection) Regulations 1969 (Compilation No. 16) and Wikijuris
   (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJ = '<a href="https://wikijuris.net/ausip/copyrightsubsp3/" target="_blank" rel="noopener">Wikijuris, Copyright: Subject matter</a> (CC BY-SA 3.0)';
  const WJO = '<a href="https://wikijuris.net/ausip/copyrightownership/" target="_blank" rel="noopener">Wikijuris, Copyright ownership</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const REGS = '<i>Copyright (International Protection) Regulations 1969</i>, Compilation No. 16 (in force 1 Jan 2026)';

  D.units['u1-6'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Who is the author?',
        cards: [
          {
            kind: 'rule', margin: ['s 35(2) CA', 's 10 CA "author"'],
            title: 'The author is the person who created the work',
            core: `<p>The <strong>author</strong> is the person who uses their own intellectual effort to create the work: the writer, composer, artist. The Act uses "author" broadly, so a painter or a songwriter is an author too.</p>
              <p>Authorship matters because the author is generally the <strong>first owner</strong> of copyright (s 35(2)), and because subsistence and duration are tied to the author.</p>`,
            deeper: `<p>The Act defines one case directly: the author of a photograph "means the person who took the photograph" (s 10(1)). The people in the photograph have no copyright interest in it.</p>
              <p>After <i>Phone Directories</i> (unit 1.5), authors must be identifiable human beings: "authorship and originality are correlatives".</p>`,
            source: `${CA} s 35(2), s 10(1) "author, in relation to a photograph" (quoted). ${WJO}, introduction and "Ownership of Original (Part III) Works".`,
          },
          {
            kind: 'case', margin: ['[1938] Ch 106'],
            title: 'Donoghue v Allied Newspapers',
            exp: {
              n: 1, cite: '[1938] Ch 106',
              hyp: 'A person who supplies the ideas and stories for a newspaper article is an author of the article.',
              method: 'One person communicated ideas to a writer, who clothed them in the form of articles.',
              result: 'Hypothesis rejected',
              discussion: 'Copyright in the articles belonged to the person who wrote them: the author of the expression, not the source of the ideas.',
            },
            core: `<p><b>Held:</b> where a person communicates an idea to an author, and the author "clothes the idea in the form of an article", the copyright belongs to the author.</p>
              <p>This is the idea/expression rule (unit 1.4) applied to authorship: supplying ideas, stories or information doesn't make you an author of the expression.</p>`,
            source: `${WJO}, "Joint Ownership" (<i>Donoghue</i>).`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA'],
            title: 'Joint authorship',
            statute: { cite: 's 10(1) CA · definition', text: '<b>work of joint authorship</b> means a work that has been produced by <mark>①</mark> the collaboration of <mark>②</mark> two or more authors and in which <mark>③</mark> the contribution of each author is not separate from the contribution of the other author or the contributions of the other authors.', notes: ['① collaboration: working together on the work', '② each must be an author: contributing expression, not just ideas', '③ contributions can\'t be separated out'] },
            core: `<p>Not every jointly produced work is a work of joint authorship. If each person supplies a <strong>distinct part</strong>, they don't own the whole jointly: each owns copyright in their own part.</p>`,
            deeper: `<p>Joint owners hold as tenants in common: each has title to sue, and they can sue each other. <span class="flag">⚑</span> Wikijuris attributes this to <i>Prior v Sheldon</i>, which couldn't be checked.</p>`,
            source: `${CA} s 10(1), "work of joint authorship" (quoted). ${WJO}, "Joint Ownership". ⚑ The tenants-in-common point is unverified.`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'Three collaborations',
            core: `<ul><li><b>Two playwrights</b> write a script together, passing drafts back and forth and rewriting each other's lines. Their contributions can't be separated: <strong>joint authorship</strong>.</li>
              <li><b>An edited book</b> where each of ten academics writes one chapter. Each chapter is distinct: <strong>separate copyrights</strong> in each chapter, not joint authorship of the whole.</li>
              <li><b>A founder</b> tells a ghostwriter her life story over coffee; the ghostwriter writes the memoir. Supplying the stories isn't contributing expression (<i>Donoghue</i>): the <strong>ghostwriter</strong> is the author, unless the founder also shaped the words themselves.</li></ul>`,
            deeper: `<p>In practice, the founder would deal with this by contract: an assignment of copyright must be in writing (unit 1.8). Authorship and ownership are different questions.</p>`,
            source: `Fictional facts, applying ${CA} s 10(1) and ${WJO} (<i>Donoghue</i>; separate parts owned separately).`,
          },
          {
            kind: 'rule', margin: ['s 22(3)–(5) CA'],
            title: 'Films, recordings and broadcasts have makers, not authors',
            core: `<p>For Part IV subject matter (unit 1.3), the Act asks who the <strong>maker</strong> is, not the author:</p>
              <ul><li><b>Sound recording:</b> the person who owned the first record embodying it when it was produced (s 22(3)).</li>
              <li><b>Recording of a live performance:</b> the owner of the record <em>and</em> the performers (s 22(3A)), unless a performer was performing as an employee, in which case the employer takes their place (s 22(3B)).</li>
              <li><b>Film:</b> "the person by whom the arrangements necessary for the making of the film were undertaken" (s 22(4)), usually the producer.</li>
              <li><b>Broadcast:</b> the person who provided the broadcasting service (s 22(5)).</li></ul>`,
            deeper: `<p>So a film's director, or a recording's sound engineer, isn't the "maker" just by doing the creative work. Who owns these rights is unit 1.7.</p>`,
            source: `${CA} s 22(3)–(5) (quoted and checked). ${WJO}, "Ownership of Copyright in Part IV".`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Author ≠ owner',
            core: `<p>The author is usually the <em>first</em> owner (s 35(2)), but:</p>
              <ul><li>copyright can be assigned, and often is (in writing: unit 1.8);</li><li>the Act makes exceptions for employees, some journalists and some commissioned works (s 35(4)–(6), unit 1.7), and those exceptions can themselves be excluded or modified by agreement (s 35(3)).</li></ul>
              <p>In a problem question, name the <strong>author</strong> first, then work out who <strong>owns</strong> it now.</p>`,
            source: `${CA} s 35(2)–(3) (text checked). ${WJO}, "Ownership of Original (Part III) Works" (ownership is often transferred by assignment).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Who is the author of a photograph?', options: ['The person who took the photograph', 'The person who owns the camera', 'The people in the photograph', 'The person who commissioned it'], a: 0, explain: 's 10(1): the author of a photograph "means the person who took the photograph".' },
          { type: 'tf', q: 'A source who gives a journalist the facts and ideas for a story is a joint author of the article.', a: false, explain: 'Supplying ideas doesn\'t make you an author of the expression (<i>Donoghue v Allied Newspapers</i>).' },
          { type: 'order', q: 'Put the elements of a "work of joint authorship" (s 10) in the order they appear.', items: ['Produced by collaboration', 'Of two or more authors', 'Contributions not separate'], explain: 'Collaboration, two or more authors, and contributions that can\'t be separated.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Joint authorship or separate copyrights?', buckets: ['Joint authorship', 'Separate copyrights'], items: [{ t: 'Two writers rewriting each other\'s lines in one script', b: 0 }, { t: 'A duo co-writing every line of a poem together', b: 0 }, { t: 'An anthology of chapters by different authors', b: 1 }, { t: 'A photo book where each photographer supplies their own photos', b: 1 }], explain: 'Joint authorship needs collaboration with contributions that can\'t be separated. Distinct parts are owned separately.' },
          { type: 'choice', q: 'Under s 35(2), who first owns copyright in an original literary work?', options: ['The author, subject to the rest of s 35', 'Whoever first publishes it', 'Whoever paid for the paper or the computer', 'The Crown'], a: 0, explain: 'The author is first owner (s 35(2)), subject to the exceptions in s 35(4)–(6) for some journalists, commissioned works and employees.' },
          { type: 'choice', q: 'Who is the maker of a cinematograph film?', options: ['The person by whom the arrangements necessary for making the film were undertaken', 'The director', 'The lead actor', 'Whoever owns the camera'], a: 0, explain: 's 22(4)(b). Usually the producer, not the director.' },
          { type: 'tf', label: 'From unit 1.5', q: 'A work with no identifiable human author can still be an original work.', a: false, explain: '<i>Phone Directories</i>: "authorship and originality are correlatives".' },
        ],
      },
      {
        title: 'Connecting factors: the link to Australia',
        cards: [
          {
            kind: 'statute', margin: ['s 32(1) CA'],
            title: 'Unpublished works: a qualified author',
            statute: { cite: 's 32(1) CA', text: 'copyright subsists in an original literary, dramatic, musical or artistic work that is <mark>①</mark> unpublished and of which the author: (a) was <mark>②</mark> a qualified person at the time when the work was made; or (b) if the making of the work extended over a period—was a qualified person for <mark>③</mark> a substantial part of that period.', notes: ['① not yet published (s 29)', '② citizen or resident (s 32(4))', '③ long projects: most of the making will do'] },
            core: `<p>s 32(4): a <strong>qualified person</strong> "means an Australian citizen or a person resident in Australia".</p>
              <p>Note it's the <em>author</em> who must qualify, at the time the work was <em>made</em> (s 22, unit 1.4).</p>`,
            source: `${CA} s 32(1), (4) (quoted). Note: older texts, including Wikijuris, also list an "Australian protected person"; the current s 32(4) doesn't.`,
          },
          {
            kind: 'statute', margin: ['s 32(2) CA'],
            title: 'Published works: three routes',
            core: `<p>Once an original work is published, copyright subsists (or continues) if, but only if, one of these is true (s 32(2)):</p>
              <ol><li>its <strong>first publication</strong> took place in Australia;</li><li>the author was a <strong>qualified person</strong> when it was first published; or</li><li>the author <strong>died before</strong> then, but was a qualified person immediately before death.</li></ol>`,
            deeper: `<p>Buildings have their own rule: copyright subsists in an original artistic work that is a building situated in Australia, or attached to or part of one (s 32(3)), whoever the architect.</p>`,
            source: `${CA} s 32(2)–(3) (text checked).`,
          },
          {
            kind: 'rule', margin: ['s 29 CA'],
            title: 'What counts as "published"?',
            core: `<p>A literary, dramatic, musical or artistic work is published "if, but only if, reproductions of the work … have been supplied (whether by sale or otherwise) to the public" (s 29(1)(a)).</p>
              <p>So these are <strong>not</strong> publication (s 29(3)): performing a work, exhibiting an artwork, constructing a building, or supplying records of a work.</p>`,
            deeper: `<ul><li><b>The 30-day rule</b> (s 29(5)): an Australian publication still counts as first publication if it happens within 30 days of an earlier publication elsewhere.</li>
              <li><b>Colourable publication</b> (s 29(4)): a token publication "not intended to satisfy the reasonable requirements of the public" is disregarded.</li>
              <li><b>Unauthorised publication</b> is disregarded (s 29(6)).</li></ul>`,
            source: `${CA} s 29(1)(a), (3)–(6) (quoted and checked).`,
          },
          {
            kind: 'rule', margin: ['s 184 CA', 'Regs reg 4'],
            title: 'Foreign works: national treatment',
            core: `<p>Most foreign works are protected in Australia, not because of s 32, but because s 184 lets the regulations extend the Act to other countries.</p>
              <p>Under reg 4 of the <i>Copyright (International Protection) Regulations 1969</i>, a work first published in a <strong>Berne Convention, UCC, WCT or WTO country</strong> (and, for some subject matter, a Rome Convention or WPPT country) is treated "as if" it were first published in Australia. Citizens and residents of those countries are treated like Australian citizens and residents.</p>`,
            deeper: `<p>This is <strong>national treatment</strong> (unit 0.4): Australia gives foreign authors the same protection as its own, and they do the same for Australian authors. Berne also means no formalities: there's no copyright registration in Australia.</p>
              <p>Wikijuris says this applies only to Berne countries. The current regulations are wider (Berne, UCC, WCT, WTO, and Rome and WPPT for some subject matter).</p>`,
            source: `${CA} s 184(1) (text checked). ${REGS}, reg 4(1)–(5) (text checked). ${WJ}, "Connection with Australia".`,
          },
          {
            kind: 'test', margin: ['s 32 CA', 'Regs reg 4'],
            title: 'The connecting-factor checklist',
            steps: ['<b>Published?</b> Have reproductions been supplied to the public (s 29)?', '<b>If unpublished:</b> was the author a qualified person when the work was made (s 32(1))?', '<b>If published:</b> first published in Australia, or author qualified at first publication (or at death) (s 32(2))?', '<b>Building?</b> Situated in Australia (s 32(3))?', '<b>If none of these:</b> does reg 4 extend protection (treaty country of first publication, citizenship or residence)?'],
            core: `<p>If any route works, the connecting-factor requirement is met. Then check the other subsistence requirements: a work (1.1–1.2), material form (1.4), originality (1.5).</p>`,
            source: `${CA} ss 29, 32; ${REGS}, reg 4. The checklist order is our teaching structure.`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Connecting-factor traps',
            core: `<ol><li><b>Testing the wrong time.</b> Unpublished: when the work was <em>made</em>. Published: at <em>first publication</em>.</li>
              <li><b>Calling a performance or an exhibition "publication".</b> It isn't (s 29(3)).</li>
              <li><b>Stopping at s 32.</b> A foreign author who fails s 32 will usually be protected through s 184 and reg 4.</li></ol>`,
            source: `${CA} ss 29(3), 32, 184; ${REGS}, reg 4.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Under s 32(4), who is a "qualified person"?', options: ['An Australian citizen or a person resident in Australia', 'Anyone who first publishes in Australia', 'Only Australian citizens', 'Anyone who registers the work'], a: 0, explain: 's 32(4). (Older texts also mention an "Australian protected person"; the current section doesn\'t.)' },
          { type: 'tf', q: 'Performing a song at a sold-out concert is "publication" of the musical work.', a: false, explain: 'Performance isn\'t publication (s 29(3)). Publication needs reproductions supplied to the public (s 29(1)(a)).' },
          { type: 'choice', q: 'An author who is neither an Australian citizen nor resident first publishes a novel in a WTO member country. Is it protected in Australia?', options: ['Yes: reg 4 treats it as if first published in Australia', 'No: s 32(2) isn\'t satisfied', 'Only if it is later published in Australia', 'Only if registered with IP Australia'], a: 0, explain: 's 184 and reg 4 of the International Protection Regulations extend the Act to works first published in Berne, UCC, WCT and WTO countries.' },
          { type: 'choice', q: 'A book is first published in London, then in Sydney 20 days later. Can the Sydney publication count as first publication?', options: ['Yes: publications within 30 days of each other don\'t displace each other (s 29(5))', 'No: London was first', 'Only if the author is Australian', 'Only if the Sydney edition is longer'], a: 0, explain: 's 29(5): a publication isn\'t treated as other than first publication merely because of an earlier publication elsewhere within 30 days.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Which time do you test the author\'s status at?', buckets: ['When the work was made', 'At first publication'], items: [{ t: 'An unpublished diary', b: 0 }, { t: 'A song that has only ever been performed live', b: 0 }, { t: 'A novel on sale in bookshops', b: 1 }, { t: 'A poem printed and sold in a magazine', b: 1 }], explain: 'Unpublished works: s 32(1), at the time of making. Published works: s 32(2), at first publication. A live performance isn\'t publication.' },
          { type: 'tf', q: 'Copyright in a building in Melbourne depends on the architect being Australian.', a: false, explain: 's 32(3): copyright subsists in an original artistic work that is a building situated in Australia.' },
        ],
      },
    ],
    outline: `<p><b>Authorship and connecting factors.</b> Author = creator; usually first owner (s 35(2)); photograph's author = person who took it (s 10). Supplying ideas ≠ authorship (<i>Donoghue v Allied Newspapers</i> [1938] Ch 106). Work of joint authorship (s 10): collaboration + two or more authors + contributions not separate; otherwise separate copyrights in separate parts. Part IV has makers: sound recording = owner of first record (s 22(3)), live recordings add performers (s 22(3A)); film = person who made the arrangements (s 22(4)); broadcast = service provider (s 22(5)). Connecting factors (s 32): unpublished → author qualified when made (s 32(1)); published → first published in Australia, or author qualified at first publication or death (s 32(2)); buildings in Australia (s 32(3)). Qualified person = Australian citizen or resident (s 32(4)). Published = reproductions supplied to the public (s 29(1)(a)); performance/exhibition isn't (s 29(3)); 30-day rule (s 29(5)). Foreign works: s 184 + International Protection Regs reg 4 (Berne, UCC, WCT, WTO; Rome, WPPT).</p>`,
    treasures: ['Donoghue v Allied Newspapers'],
  };
})();
