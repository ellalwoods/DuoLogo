/* Copyright 1.5 · Originality. Transcribed from SAMPLE-UNIT.md (checked 11 Nov 2026; see VERIFICATION.md).
   flag: true marks content not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};

  const WJ = '<a href="https://wikijuris.net/ausip/copyrightsubsp3/" target="_blank" rel="noopener">Wikijuris, Copyright: Subject matter</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-5'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'What "original" means',
        cards: [
          {
            kind: 'rule', margin: ['s 32 CA'],
            title: "Original doesn't mean new, clever or good.",
            core: `<p>Copyright subsists in an <em>original</em> literary, dramatic, musical or artistic work (s 32). "Original" sets a low bar. It doesn't mean the work is novel (that's patents), creative, beautiful or worthwhile. A shopping list, an exam paper or a train timetable can all be original.</p>
              <p>It means two things:</p>
              <ol><li>The work <strong>originates with its author</strong>: it wasn't copied.</li><li>It is the product of the author's own <strong>independent intellectual effort</strong>.</li></ol>`,
            deeper: `<p>The classic statement is <i>University of London Press v University Tutorial Press</i> [1916] 2 Ch 601: exam papers set by examiners were original literary works. Peterson J said copyright is "not concerned with the originality of ideas, but with the expression of thought", and requires only "that the work must not be copied from another work — that it should originate from the author" (at 608–609).</p>
              <p>In <i>IceTV</i> the High Court put the Australian requirement the same way: the work must originate "with an author or joint authors from some independent intellectual effort" (French CJ, Crennan and Kiefel JJ at [48]). The arguments are all about point 2: <em>what kind</em> of effort counts?</p>`,
            source: `${CA} s 32(1)–(2). ${WJ}, "Originality".`,
          },
          {
            kind: 'statute', margin: ['s 32 CA', 's 10 CA'],
            title: 'Why the question matters most for factual works',
            core: `<p>For a novel, a song or a painting, originality is rarely in doubt. The hard cases are <strong>factual and functional works</strong>: directories, databases, timetables, TV guides, forms, tables of data, computer-generated output.</p>
              <p>These take enormous <em>effort</em>, but the effort mostly goes into <strong>gathering facts</strong>, and facts aren't protected. So the real question is whether the effort is the kind copyright rewards.</p>`,
            statute: { cite: 's 10(1) CA · definition', text: '<b>literary work</b> includes: <mark>①</mark> (a) a table, or compilation, expressed in words, figures or symbols; and <mark>②</mark> (b) a computer program or compilation of computer programs.', notes: ['① compilations can be literary works, so a directory or schedule is in scope', '② software is a literary work too'] },
            deeper: `<p>So compilations clearly <em>can</em> be protected. The question is always whether the particular compilation is <em>original</em>, and whether what the defendant took was the original part.</p>`,
            source: `${CA} s 10(1), definition of "literary work" (quoted verbatim). ${WJ}, "Compilations and Databases".`,
          },
          {
            kind: 'case', margin: ['(1917) 23 CLR 49 ⚑', '[2002] FCAFC 112'],
            title: 'The old Australian view: "sweat of the brow"',
            core: `<p>For most of the 20th century, Australian law rewarded <strong>skill <em>or</em> labour</strong>. Hard work alone could make a compilation original.</p>
              <ul><li><i>Sands &amp; McDougall v Robinson</i> (1917, HCA): a map compiled from other maps was original because of the work in compiling it. <span class="flag">⚑</span></li>
              <li><b><i>Desktop Marketing v Telstra</i></b> [2002] FCAFC 112: Telstra's White and Yellow Pages were original because of the substantial labour and expense behind them, even though the White Pages involved no selection and their alphabetical arrangement no creativity. The data mostly came in from subscribers: Telstra's effort went into <strong>verifying and storing</strong> it.</li></ul>`,
            deeper: `<p>The Full Court held a compilation is original if it results <em>either</em> from skill, judgement or knowledge in selecting, presenting or arranging the material, <em>or</em> from substantial labour or expense in collecting it. It did not follow <i>Feist v Rural Telephone</i> (US, 1991), which required "some minimal degree of creativity". It noted Desktop could have gathered the same facts by its own inquiries without infringing.</p>
              <p>That made Australia an outlier, and gave database owners something close to a right in the information itself, which is what the High Court went on to question.</p>`,
            source: `${WJ}, <i>Desktop Marketing</i> and <i>Feist</i>. ⚑ <i>Sands &amp; McDougall</i>: not in Wikijuris; judgment not reachable. See VERIFICATION.md.`,
          },
          {
            kind: 'case', margin: ['[2009] HCA 14', '(2009) 239 CLR 458'],
            title: 'IceTV v Nine Network',
            exp: {
              n: 4, cite: '[2009] HCA 14',
              hyp: "Taking the time and title information from Nine's Weekly Schedule infringes copyright in it.",
              method: "IceTV built its IceGuide using time and title information taken from aggregators' published TV guides, which were based on Nine's Weekly Schedule.",
              result: 'Hypothesis rejected · 6–0',
              discussion: 'The time and title information was expressed in a way the facts dictated: "little, if any, choice". A chronological arrangement is "obvious and prosaic". No substantial part was taken.',
              replication: [{ rel: 'doubts', label: "Desktop '02", back: true }, { rel: 'followed', label: "Phone Dir. '10" }],
            },
            core: `<p><b>Facts:</b> Nine prepared a Weekly Schedule of its programs and supplied it to aggregators who published TV guides. IceTV took <strong>time and title</strong> information (which show, which channel, what time) from those guides for its electronic guide.</p>
              <p><b>Issue:</b> Did IceTV reproduce a <strong>substantial part</strong> of the Schedule, a compilation?</p>
              <p><b>Held:</b> No. All six judges agreed, in two joint judgments (French CJ, Crennan and Kiefel JJ; Gummow, Hayne and Heydon JJ). The expression of time and title information "is not a form of expression which requires particular mental effort or exertion".</p>`,
            deeper: `<p>IceTV had <strong>conceded</strong> at trial that the Schedule was an original literary work, so the remarks on originality for subsistence are strictly obiter. But "substantial part" is judged by the originality of what was taken, so the Court still had to say what originality means.</p>
              <p>French CJ, Crennan and Kiefel JJ warned that rewarding skill and labour "without any real consideration of the productive effort directed to coming up with a particular form of expression" can lead to error ([52]). Gummow, Hayne and Heydon JJ said <i>Desktop</i>'s emphasis on "labour and expense" per se must be treated "with some caution". Programming decisions are business decisions, not authorship.</p>`,
            source: `${WJ}, <i>IceTV</i> (facts; the concession; [42]–[43], [48], [52], [152], [157]–[160]).`,
          },
          {
            kind: 'case', margin: ['[2010] FCAFC 149'],
            title: 'Telstra v Phone Directories',
            exp: {
              n: 5, cite: '[2010] FCAFC 149',
              hyp: 'Copyright subsists in the White and Yellow Pages as compilations.',
              method: 'Telstra sued over copying of the same directories protected in Desktop. They were produced largely by automated systems applying "Rules".',
              result: 'Hypothesis rejected · appeal dismissed',
              discussion: 'No identifiable human authors exercised independent intellectual effort directed to the form of the directories. Special leave to the High Court refused.',
              replication: [{ rel: 'applies', label: "IceTV '09", back: true }],
            },
            core: `<p><b>Held:</b> <strong>No copyright subsisted.</strong> Many people contributed, but Telstra couldn't identify the <strong>human authors</strong>, and the people involved hadn't directed independent intellectual effort to the form of the directories. No human authors, no original work.</p>
              <p><b>Why it matters:</b> <i>Desktop</i> hasn't been formally overruled, but its sweat-of-the-brow reasoning must be treated with caution. <strong>Originality is tied to authorship.</strong></p>`,
            deeper: `<p>Gordon J at first instance: "Authorship and originality are correlatives … Start with the work. Find its authors. They must have done something, howsoever defined, that can be considered original" ([344]).</p>
              <p>On appeal Keane CJ said <i>IceTV</i> "authoritatively establish[es]" that the focus is "upon the protection of copyright in literary works which originate from individuals" ([96]), and the effort needed "is not required to rise to the level of 'creativity' or 'inventiveness'" ([58]). Australia hasn't adopted a creativity test as such.</p>`,
            source: `${WJ}, <i>Telstra v Phone Directories</i> (Gordon J [344]; Keane CJ [58], [96]). ⚑ The other appeal judges are not confirmed.`,
          },
          {
            kind: 'test', margin: ['s 32 CA', 'IceTV', 'Phone Directories'],
            title: 'The modern originality test, step by step',
            steps: ['<b>Identify the work</b> and its type (literary, dramatic, musical, artistic; a compilation?)', '<b>Identify the author(s)</b>: human beings whose effort produced it', '<b>Not copied:</b> did the work originate with them?', '<b>Independent intellectual effort:</b> skill, judgement or effort of their own?', '<b>Directed to expression:</b> to the particular form of the work, not just gathering facts or business decisions?'],
            core: `<p>All five met → original. For compilations, the originality often lies in the <strong>selection or arrangement</strong>.</p>`,
            deeper: `<p>The five-step order is a teaching structure for exam answers, not a test any court has stated in these words. Each step is drawn from s 32 and the passages in <i>IceTV</i> and <i>Phone Directories</i>.</p>`,
            source: `${CA} s 32; ${WJ} (<i>IceTV</i> [48], [52]; <i>Phone Directories</i> [344], [58], [96]).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Three classic mistakes',
            core: `<ol><li><b>Saying "original" means "novel" or "creative".</b> Say: originates with the author, independent intellectual effort directed to expression.</li>
              <li><b>Citing <i>Desktop Marketing</i> as current law</b> without flagging that <i>IceTV</i> doubted it and <i>Phone Directories</i> reached the opposite result on the same directories. It isn't formally overruled: say "treated with caution".</li>
              <li><b>Forgetting authorship.</b> No human author, probably no original work.</li></ol>`,
            source: `${WJ}: "While Desktop Marketing has not been explicitly overruled, it must now be treated with caution."`,
          },
        ],
        questions: [
          { type: 'choice', q: 'A lecturer writes a 20-question exam paper using standard textbook questions she rephrased herself. Is it original?', options: ['Yes: it originates with her and reflects her own effort in selecting and expressing the questions', 'No: the questions cover standard textbook material, so nothing in it is new', 'Only if the questions are of high quality', 'No: exam papers are functional documents'], a: 0, explain: 'Quality and novelty are irrelevant. Exam papers were original literary works in <i>University of London Press</i> (1916).' },
          { type: 'tf', q: 'Following Desktop Marketing, the labour of collecting facts is enough to make a compilation original.', a: false, explain: 'False as current law. <i>IceTV</i> doubted <i>Desktop</i>, and <i>Phone Directories</i> found no copyright in the same directories. <i>Desktop</i> has not been formally overruled, so cite it with caution.' },
          { type: 'match', label: 'Citation network', q: 'Connect each case to its role.', pairs: [['Sands & McDougall (1917)', 'Old skill-or-labour approach'], ['Desktop (2002)', 'Sweat of the brow; declines to follow Feist'], ['IceTV (2009)', 'Effort must be directed to expression'], ['Phone Directories (2010)', 'No human author, no original work']], explain: 'The story of the shift: <i>Desktop</i> → <i>IceTV</i> → <i>Phone Directories</i>.', flag: true },
          { type: 'order', q: 'Put the five steps of the originality test in order.', items: ['Identify the work', 'Identify the author(s)', 'Not copied', 'Independent intellectual effort', 'Directed to expression'], explain: 'Work → authors → not copied → independent effort → directed to the form of expression.' },
          { type: 'choice', q: "In IceTV, why didn't Nine's programming decisions count?", options: ['They were business decisions about what to broadcast, not effort directed to expressing the schedule', 'Nine had copied the schedule from the aggregators', 'Program schedules can never be literary works', 'IceTV had a licence from Nine'], a: 0, explain: 'The expression of time and title information was dictated by the facts: "little, if any, choice" (French CJ, Crennan and Kiefel JJ at [42]).' },
          { type: 'choice', label: 'Spot the error', q: '"Telstra\'s directories are protected because Telstra spent millions verifying listings (Desktop)." What\'s wrong?', options: ['It relies on Desktop: in Phone Directories the Full Court held no copyright subsisted in those directories', 'Directories can never be compilations under s 10', 'Verification is a business decision under IceTV, so only selection counts', 'Nothing: Desktop is still the leading authority'], a: 0, explain: 'After <i>IceTV</i>, money spent on the data isn\'t the test. <i>Phone Directories</i> found no identifiable human authors of the directories.' },
          { type: 'choice', q: 'Which is the best one-line definition of originality?', options: ['The work originates with a human author and results from their independent intellectual effort directed to its expression', 'The work is new and shows a creative spark', 'The work required substantial skill, labour or expense', 'The work is not identical to any earlier work'], a: 0, explain: 'Originates with the author + independent intellectual effort directed to the particular form of expression.' },
          { type: 'tf', label: 'From unit 1.4', q: "The facts in Nine's schedule (which show is on at what time) are protected by copyright.", a: false, explain: 'Facts aren\'t protected; only their expression can be.' },
        ],
      },
      {
        title: 'Hard cases',
        cards: [
          {
            kind: 'rule', margin: ['s 10 CA "literary work"'],
            title: 'Compilations: where the originality hides',
            core: `<p>In a compilation, the facts are free. The originality, if any, is in:</p>
              <ul><li><b>Selection:</b> choosing what goes in and what's left out, using judgement.</li><li><b>Arrangement:</b> organising it in a way that reflects choices.</li><li><b>Presentation:</b> the written expression around the facts.</li></ul>
              <p>Anyone may take the facts. Taking the selection, arrangement or presentation may infringe.</p>`,
            deeper: `<p>So the same information can sit in two compilations, one protected and one not, and someone who rebuilds the facts independently usually doesn't infringe (a point made even in <i>Desktop</i>). In <i>IceTV</i>, Gummow, Hayne and Heydon JJ located the Schedule's originality "not in the provision of time and title information, but in the selection and presentation of that information together with additional programme information and synopses" ([152]).</p>`,
            source: `${CA} s 10(1); ${WJ} ("Compilations and Databases"; <i>IceTV</i> [152]).`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'Two Brisbane café lists',
            core: `<p><i>The Brunch List</i> names Brisbane's 50 best brunch spots. Its editor visited 300 cafés, picked 50, ranked them, and wrote a short review of each.</p>
              <p><i>CaféData</i> is a spreadsheet of every licensed café in Brisbane, exported automatically from council records and sorted by postcode.</p>
              <ul><li><i>The Brunch List</i> is <strong>original</strong>: a human author's judgement in selection, ranking and reviews.</li><li><i>CaféData</i> is <strong>probably not</strong>: no human selection, an automatic, obvious arrangement. Like <i>Phone Directories</i>, no human author of the expression.</li></ul>`,
            deeper: `<p>A rival publishing its own top 50 with some of the same cafés takes facts, not the selection, so is unlikely to infringe. Copying the ranking and reviews probably does.</p>`,
            source: 'Fictional facts, applying the cards before it.',
          },
          {
            kind: 'case', margin: ['[2012] FCAFC 16 ⚑'], flag: true,
            title: 'Acohs v Ucorp',
            core: `<p><b>Facts:</b> Acohs's software generated material safety data sheets. When a user entered data, the system automatically produced the HTML <strong>source code</strong> for each sheet.</p>
              <p><b>Held:</b> No copyright in the source code. It was generated by the program, not written by a human. The programmers wrote the <em>program</em>; data-entry staff entered <em>information</em>.</p>
              <p><b>Why it matters:</b> computer-generated material without a human author is not an original work.</p>`,
            deeper: `<p>This is the starting point for the AI question on the next card.</p>`,
            source: '⚑ Unverified: not covered by Wikijuris, and the judgment could not be opened. Check before relying on it.',
          },
          {
            kind: 'rule', margin: ['Phone Directories', 'Acohs', '⚑'], flag: true,
            title: 'What about AI-generated work?',
            core: `<p>No reported Australian decision has yet ruled directly on copyright in generative-AI output (as far as could be checked, November 2026). But the cases point clearly:</p>
              <ul><li><b>Purely AI-generated output</b> probably has <strong>no human author</strong>, so no copyright.</li><li><b>Human contribution directed to expression</b> (substantial editing, selecting and arranging outputs) may be enough, for that contribution.</li><li>A <b>short prompt</b> is unlikely to be enough. A long prompt that dictates the expression is an open question.</li></ul>`,
            deeper: `<p>The Act has no provision deeming anyone the author of computer-generated material (unlike the UK's s 9(3) CDPA ⚑). The <i>Copyright Amendment Act 2026</i> dealt with orphan works and other measures, not AI. On the input side, the government said in October 2025 it would not add a text-and-data-mining exception for AI training ⚑.</p>`,
            source: `${CA}. ⚑ No-decision claim, UK s 9(3) and the TDM announcement are from secondary sources only.`,
          },
          {
            kind: 'case', margin: ['[1989] AC 217 ⚑', '[2010] FCA 984'],
            title: 'Too small, or just copied?',
            core: `<p><b><i>Interlego v Tyco</i></b> (Privy Council) <span class="flag">⚑</span>: LEGO redrew old engineering drawings with small changes, hoping to restart the term. <strong>Not original</strong>: skill and labour in <em>copying</em> doesn't make a new work.</p>
              <p><b><i>Fairfax Media v Reed International</i></b> [2010] FCA 984: headlines, "like titles, [are] simply too insubstantial and too short to qualify for copyright protection as literary works" (Bennett J at [44]).</p>`,
            deeper: `<p>A particular headline might qualify on evidence ([46]), but authorship can't be assumed: "A headline that does no more than repeat a phrase from the article is not an original literary work" ([84]).</p>
              <p><i>Exxon Corp v Exxon Insurance Consultants</i> [1982] Ch 119: although the invented name "Exxon" was original, it wasn't substantial enough for copyright to subsist. Brand names are a job for trade marks.</p>`,
            source: `${WJ} (<i>Fairfax</i> [44], [46], [84]; <i>Exxon</i>). ⚑ <i>Interlego</i>: not in Wikijuris; facts, holding and year unconfirmed.`,
          },
          {
            kind: 'compare', margin: ['COMPARE'],
            title: 'Australia vs elsewhere',
            table: {
              head: ['', 'Australia', 'US', 'EU / UK'],
              rows: [
                ['Test', 'Independent intellectual effort directed to expression', '"Some minimal degree of creativity" (<i>Feist</i>)', 'EU: "author\'s own intellectual creation" (<i>Infopaq</i>, 2009)'],
                ['Sweat of the brow', 'Doubted; <i>Desktop</i> not formally overruled', 'Rejected (1991)', 'Rejected'],
                ['Database right', '<b>None</b>', 'None', 'EU <i>sui generis</i> right for substantial investment (Dir 96/9/EC art 7); UK version ⚑'],
                ['Computer-generated', 'No human author → no copyright', 'Not protected ⚑', 'UK s 9(3) CDPA ⚑'],
              ],
            },
            core: '',
            source: `${WJ}; EUR-Lex: C‑5/08 <i>Infopaq</i> (16 July 2009); Directive 96/9/EC art 7(1). ⚑ US and UK entries not checked against primary sources.`,
          },
          {
            kind: 'critique', margin: ['ESSAY'],
            title: 'Should Australia protect databases?',
            core: `<p><b>For:</b> databases are costly to build and easy to copy; without protection there's less incentive to invest. The EU gives a separate database right for this reason.</p>
              <p><b>Against:</b> information should stay free; a low bar creates monopolies over facts (<i>IceTV</i> warned of "anti-competitive behaviour"). The European Commission's first evaluation (December 2005) found no proven effect of the database right on database production <span class="flag">⚑</span>. Contract, technical measures and confidentiality already protect investment.</p>`,
            deeper: `<p><b>Current position:</b> no Australian database right, and the post-<i>IceTV</i> test leaves many factual compilations unprotected. A good essay weighs both sides and tells the <i>Desktop</i> → <i>IceTV</i> → <i>Phone Directories</i> story.</p>`,
            source: `${WJ} (<i>IceTV</i> [52]); EUR-Lex (Dir 96/9/EC). ⚑ The 2005 evaluation: secondary sources only.`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Separate subsistence from infringement',
            core: `<p>In a problem question about a compilation, always separate:</p>
              <ol><li><b>Subsistence:</b> is the compilation original at all? (Authors? Effort directed to expression?)</li><li><b>Infringement:</b> did the defendant take a <strong>substantial part</strong> of <em>what made it original</em>, or just the facts? (Unit 1.11.)</li></ol>
              <p>Students often merge these. Examiners notice.</p>`,
            source: `${WJ}: "Whether a selection or arrangement of elements constitutes a substantial part of a work depends on the degree of originality of that selection or arrangement" (<i>IceTV</i> [42]–[43]).`,
          },
        ],
        questions: [
          { type: 'sort', label: 'Spectroscopy', q: 'A recipe website. Send each line to the element it reveals.', buckets: ['Original expression', 'Facts (not protected)', 'Original selection', 'Trade mark territory'], items: [{ t: 'A hand-written introduction to each recipe', b: 0 }, { t: 'The ingredients and quantities', b: 1 }, { t: 'A curated "best 20 winter soups" collection', b: 2 }, { t: "The site's name", b: 3 }], explain: 'Ingredients and quantities are largely facts and functional instructions (thin protection at best). Names belong to trade marks.' },
          { type: 'similarity', label: 'Similarity index', q: 'A rival app lists the same 50 cafés as The Brunch List, in a different order, with its own reviews. How likely is this an infringing copy?', lo: 0, hi: 35, ends: ['Coincidence', 'Infringing copy'], explain: '<b>Low.</b> Some overlap in selection, but no ranking or reviews were copied. Facts are free; what was original was the selection, ranking and reviews. You could argue the selection point either way.' },
          { type: 'choice', q: 'Why was the source code in Acohs not protected?', options: ['It was generated by the program, with no human author of the code', 'Source code is not a literary work', 'It was copied from Ucorp', 'Safety data sheets are government documents'], a: 0, explain: 'No human author wrote the code as a work.', flag: true },
          { type: 'tf', q: 'Redrawing old engineering drawings with minor changes creates a new original work.', a: false, explain: 'False (<i>Interlego v Tyco</i>): skill and labour in copying doesn\'t create a new original work.', flag: true },
          { type: 'choice', q: 'A designer types a two-line prompt into an image generator and publishes the first image. Best answer?', options: ['Probably no copyright: no human author directed the expression', 'Copyright belongs to the designer because they wrote the prompt', 'Copyright belongs to the AI company', 'Copyright belongs to whoever made the arrangements, as in the UK'], a: 0, explain: 'Following <i>Phone Directories</i>, a work needs a human author whose effort produced its expression. No Australian decision on AI output yet.', flag: true },
          { type: 'choice', q: 'Which jurisdiction protects computer-generated works by statute?', options: ['The UK (s 9(3) CDPA)', 'Australia (s 32 CA)', 'The US (Feist)', 'The EU (Infopaq)'], a: 0, explain: 'The UK deems the person who made the arrangements to be the author. Australia has no equivalent.', flag: true },
          { type: 'sort', label: 'Essay plan', q: 'Should Australia have a database right? Sort each argument.', buckets: ['For', 'Against'], items: [{ t: 'Databases are costly to build and cheap to copy', b: 0 }, { t: 'Protection gives an incentive to invest', b: 0 }, { t: 'The EU protects substantial investment', b: 0 }, { t: 'Monopolies over facts are anti-competitive', b: 1 }, { t: "The EU's 2005 review found no proven effect on production", b: 1 }, { t: 'Contract and confidentiality already protect investment', b: 1 }], explain: 'Use <i>Desktop</i> → <i>IceTV</i> → <i>Phone Directories</i> as the spine of the essay.' },
          { type: 'tf', label: 'From unit 1.1', q: 'A newspaper headline is usually a literary work.', a: false, explain: 'Usually not: headlines are "too insubstantial and too short" (<i>Fairfax v Reed</i> at [44]).' },
        ],
      },
    ],
    outline: `<p><b>Originality (s 32).</b> Originates with the author + independent intellectual effort directed to the particular form of expression. <i>University of London Press</i> [1916] 2 Ch 601; sweat of the brow (<i>Sands &amp; McDougall</i> 1917 ⚑; <i>Desktop</i> [2002] FCAFC 112) doubted in <i>IceTV</i> [2009] HCA 14 (originality conceded, so obiter on subsistence) and not applied in <i>Telstra v Phone Directories</i> [2010] FCAFC 149: human authorship essential. <i>Desktop</i> not formally overruled: cite with caution. Computer-generated → no author → no work (<i>Acohs</i> [2012] FCAFC 16 ⚑). Copying with skill ≠ original (<i>Interlego</i> ⚑). Headlines usually too small (<i>Fairfax v Reed</i> [2010] FCA 984 at [44]; <i>Exxon</i> [1982] Ch 119). Compilations: originality in selection, arrangement, presentation. No Australian database right. AI: no decision yet ⚑.</p>`,
    treasures: ['IceTV', 'Telstra v Phone Directories'],
  };
})();
