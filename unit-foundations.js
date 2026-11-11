/* Foundations 0.1–0.4: the introductory lessons. Written and checked 11 Nov 2026 against the Constitution, the current
   IP Acts and regulations on legislation.gov.au, and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md.
   flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WI = '<a href="https://wikijuris.net/ausip/intro-ip/" target="_blank" rel="noopener">Wikijuris, Introduction to IP</a> (CC BY-SA 3.0)';
  const WB = '<a href="https://wikijuris.net/ausip/copyrightbackground/" target="_blank" rel="noopener">Wikijuris, Copyright introduction</a> (CC BY-SA 3.0)';
  const WD = '<a href="https://wikijuris.net/ausip/copyrightduration/" target="_blank" rel="noopener">Wikijuris, Duration of copyright</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const CONST = '<i>Commonwealth of Australia Constitution Act</i> (Compilation No. 6)';

  /* ---------- 0.1 Why have IP at all? ---------- */
  D.units['u0-1'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Start here',
        cards: [
          {
            kind: 'guide', margin: ['START'],
            title: 'How this course works',
            core: `<p>The whole course is laid out as a <strong>periodic table</strong> on the home screen. Every element is one unit of the course.</p>
              <ul><li><b>Follow the numbers.</b> Each element has a number in its top-left corner. That's the course order: <strong>1, 2, 3 … 81</strong>.</li>
              <li><b>The route:</b> the four Foundations elements along the top first (1–4). Then <strong>down the Copyright column</strong> (5–21), then down Trade marks, Passing off, Patents, Designs and Confidential information, then the blocks below.</li>
              <li><b>One at a time.</b> Each element unlocks when you finish the one before. The next one is always highlighted in green.</li></ul>`,
            deeper: `<p><b>Columns</b> are the rights. <b>Rows</b> are the same five questions asked of every right: 1 What does it protect? 2 How do you get it? 3 Who owns it, and for how long? 4 What infringes it? 5 What are the defences? Reading across a row compares the rights; that's how exams often test you.</p>
              <p>Some cells hold several elements. Tap a cell to see them all, in order.</p>`,
            source: 'About this app. The structure follows the course syllabus.',
          },
          {
            kind: 'guide', margin: ['START'],
            title: 'Each lesson: read, then test, then remember',
            core: `<ol><li><b>Cards.</b> Each card is one idea, with the section or case in the corner. Tap <b>Go deeper</b> for the detail you'd want for an exam.</li>
              <li><b>Tests.</b> After the cards come questions. Every answer explains the law behind it.</li>
              <li><b>Half-life.</b> Once you finish an element, it starts to fade. The Half-life tab tells you when to review it, at growing intervals: 1, 3, 7, 16, 35, then 90 days.</li></ol>
              <p>Every card ends with its <b>source</b>. A <span class="flag">⚑</span> means something hasn't yet been confirmed against a primary source.</p>`,
            source: 'About this app.',
          },
          {
            kind: 'rule', margin: ['Wikijuris'],
            title: 'What intellectual property is',
            core: `<p>Intellectual property is a kind of legal property in things you can't touch: <strong>intangible</strong> property. It protects the products of intellectual and creative effort: books, songs, inventions, brands, product designs, secrets.</p>
              <p>It does <strong>not</strong> protect ideas, facts or concepts as such. Copyright protects the way the Harry Potter books are written, not the idea of a school for young wizards. Facts, pure data and mathematical equations stay free for everyone.</p>`,
            source: `${WI}, "What is Intellectual Property?" and "IP does not protect ideas".`,
          },
          {
            kind: 'rule', margin: ['public goods'],
            title: 'Why intangibles need law: public goods',
            core: `<p>Ideas and expression behave like <strong>public goods</strong>:</p>
              <ul><li><b>Non-rival:</b> my use of a song doesn't use it up for you.</li><li><b>Hard to exclude:</b> once it's out, anyone can copy it.</li></ul>
              <p>So without legal help, a creator can't stop copying, and may never recoup the time and money spent creating. IP law steps in by giving <strong>exclusive rights</strong> for a limited time.</p>`,
            source: `${WI}, "The Economic (Utilitarian) Justification".`,
          },
          {
            kind: 'case', margin: ['(1937) 58 CLR 479'],
            title: 'Victoria Park Racing v Taylor',
            core: `<p>A High Court case about the limits of property in intangibles. On copyright, the Court held that copyright gives no one an exclusive right over facts:</p>
              <p>"The law of copyright does not operate to give any person an exclusive right to state or to describe particular facts. A person cannot by first announcing that a man fell off a bus or that a particular horse won a race prevent other people from stating those facts."</p>`,
            deeper: `<p>The lesson for the whole course: there's no general property right in information or spectacles. You only get the specific rights the law creates (copyright, patents and so on), with their limits.</p>`,
            source: `${WB}, timeline, 1937 (<i>Victoria Park Racing &amp; Recreation Grounds v Taylor</i> (1937) 58 CLR 479, quoted).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Which element should you study first in this course?', options: ['Element 1, the first Foundations element', 'Whichever copyright element looks easiest', 'The bottom row of the table', 'Any element: the order doesn\'t matter'], a: 0, explain: 'Follow the numbers: Foundations 1–4, then down the Copyright column from 5. Each element unlocks the next.' },
          { type: 'tf', q: 'IP law protects ideas, as long as they are new.', a: false, explain: 'IP protects expression, inventions, brands and designs, not ideas, facts or concepts as such.' },
          { type: 'choice', q: 'Why are ideas and expression called "public goods"?', options: ['They are non-rival and hard to exclude others from', 'They are owned by the government', 'They are always free to use', 'They can only be used in public'], a: 0, explain: 'One person\'s use doesn\'t diminish another\'s, and copying is hard to stop without law.' },
          { type: 'tf', q: 'Following Victoria Park Racing, the first person to announce which horse won a race can stop others reporting it.', a: false, explain: '"A person cannot by first announcing … that a particular horse won a race prevent other people from stating those facts."' },
        ],
      },
      {
        title: 'Theories and costs',
        cards: [
          {
            kind: 'rule', margin: ['incentive', 'Statute of Anne'],
            title: 'The incentive theory',
            core: `<p>The dominant justification is <strong>utilitarian</strong>: IP encourages creation and invention by letting creators profit from their work. IP law, especially copyright and patent law, is thought to have a predominantly instrumental function.</p>
              <p>The idea is old. The stated purpose of the first English copyright statute, the <i>Statute of Anne</i> (1710), was to "encourage learning". The US Constitution lets Congress grant rights "to promote the progress of science and useful arts".</p>`,
            source: `${WI}, "Why do we have Intellectual Property?" and "The Economic (Utilitarian) Justification" (quoted).`,
          },
          {
            kind: 'rule', margin: ['Locke', 'natural rights'],
            title: 'The natural rights theory, and its critics',
            core: `<p>A second view: creators <strong>deserve</strong> property in their work, as the fruits of their labour (a Lockean argument). It's less often stated openly, and contested.</p>
              <p>Thomas Jefferson's objection: an idea, once shared, "forces itself into the possession of every one". "He who lights his taper at mine, receives light without darkening me."</p>`,
            deeper: `<p>Benjamin Kaplan put the counter-argument sharply: "if man has any 'natural' rights, not the least must be a right to imitate his fellows, and thus to reap where he has not sown". Other theories (personality, reward) appear in essay questions too.</p>`,
            source: `${WI}, "The Natural Rights Justification" (Jefferson and Kaplan quoted).`,
          },
          {
            kind: 'critique', margin: ['ESSAY', 'PC 2016'],
            title: 'The costs: monopoly, access, the public domain',
            core: `<p>Exclusive rights make access <strong>more expensive</strong>, and they make future creation more expensive too, because new authors and inventors build on the past. So IP law always <strong>balances</strong> incentive against access.</p>
              <p>That's why every right has <strong>limits</strong>: it expires, it doesn't protect ideas, and it has exceptions such as fair dealing.</p>`,
            deeper: `<p>A live example: the Productivity Commission's 2016 inquiry into IP arrangements said that while an optimal copyright term is "arguably elusive", it is "likely to be considerably less than 70 years after death" (unit 1.9).</p>`,
            source: `${WI}, "Why do we have Intellectual Property?" and "The Economic (Utilitarian) Justification". ${WD} (Productivity Commission, quoted).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Name the theory you\'re using',
            core: `<p>In essay questions, say which justification an argument relies on. "Authors deserve it" is natural rights; "we'll get less of it otherwise" is incentive. Then test it: would the incentive argument justify <em>this much</em> protection, for <em>this long</em>?</p>`,
            source: `${WI}.`,
          },
        ],
        questions: [
          { type: 'sort', label: 'Spectroscopy', q: 'Which theory does each argument rely on?', buckets: ['Incentive (utilitarian)', 'Natural rights'], items: [{ t: 'Without protection, studios won\'t fund films', b: 0 }, { t: 'The Statute of Anne: to "encourage learning"', b: 0 }, { t: 'An author deserves the fruits of her labour', b: 1 }, { t: 'Creation is an extension of the self, so it\'s mine', b: 1 }], explain: 'Incentive arguments are about consequences; natural rights arguments are about desert.' },
          { type: 'choice', q: 'What was the stated purpose of the Statute of Anne (1710)?', options: ['To encourage learning', 'Raising tax revenue', 'Protecting printers\' guilds', 'Censoring the press'], a: 0, explain: 'The first copyright statute was framed as encouraging learning.' },
          { type: 'tf', q: 'Stronger IP protection always means more creativity overall.', a: false, explain: 'Exclusive rights also make access, and future creation that builds on existing work, more expensive. The law balances the two.' },
          { type: 'choice', q: '"He who lights his taper at mine, receives light without darkening me." Whose argument, and against what?', options: ['Jefferson, against treating ideas as natural property', 'Locke, for the labour theory', 'The High Court, in Victoria Park', 'The Productivity Commission, on duration'], a: 0, explain: 'Jefferson\'s point: ideas are non-rival, so they\'re poorly suited to exclusive ownership.' },
        ],
      },
    ],
    outline: `<p><b>Why IP?</b> IP = intangible property in creative and intellectual effort; protects expression, inventions, brands, designs; not ideas, facts, data. Ideas are public goods (non-rival, hard to exclude), so law gives limited exclusive rights. No property in facts or spectacle (<i>Victoria Park Racing v Taylor</i> (1937) 58 CLR 479). Theories: incentive/utilitarian (dominant; <i>Statute of Anne</i> 1710: to "encourage learning"); natural rights (Locke; critics Jefferson, Kaplan). Costs: access, future creation; hence limits and balance (PC 2016 on term).</p>`,
    treasures: ['Victoria Park Racing v Taylor'],
  };

  /* ---------- 0.2 The map of rights ---------- */
  D.units['u0-2'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'The rights at a glance',
        cards: [
          {
            kind: 'compare', margin: ['MAP'],
            title: 'Six rights, one table',
            table: {
              head: ['Right', 'Protects', 'How you get it', 'How long'],
              rows: [
                ['Copyright', 'Expression: works, recordings, films, broadcasts', 'Automatically, no registration', 'Usually life + 70 (CA s 33)'],
                ['Trade marks', 'Signs that identify a trader\'s goods or services', 'Registration', '10 years, renewable for 10 at a time (TMA ss 72(3), 77)'],
                ['Passing off & ACL', 'Reputation, against misrepresentation', 'Unregistered: trading reputation', 'As long as the reputation lasts'],
                ['Patents', 'Inventions: products and processes', 'Registration after examination', '20 years (PA s 67)'],
                ['Designs', 'A product\'s appearance', 'Registration', '5 years, renewable to 10 (DA s 46)'],
                ['Confidential info', 'Secrets imparted in confidence', 'Unregistered: equity', 'As long as it stays secret'],
              ],
            },
            core: '<p>These six are the columns of the table. Each has its own Act or body of case law (unit 0.3).</p>',
            deeper: `<p>There are also specialist rights: plant breeder's rights (<i>Plant Breeder's Rights Act 1994</i>), circuit layouts (<i>Circuit Layouts Act 1989</i>) and geographical indications (<i>Trade Marks Act</i> and <i>Wine Australia Act 2013</i>), in the block below the table.</p>`,
            source: `${CA} s 33; <i>Trade Marks Act 1995</i> ss 72(3), 77; <i>Patents Act 1990</i> s 67; <i>Designs Act 2003</i> s 46 (all text checked). ${WI}, "Types of IP" and "Sources of IP law".`,
          },
          {
            kind: 'rule', margin: ['registered vs unregistered'],
            title: 'Registered and unregistered rights',
            core: `<ul><li><b>Registered rights</b> (patents, trade marks, designs) exist only once granted. You apply to IP Australia; patents, for example, are examined before they're granted.</li>
              <li><b>Unregistered rights</b> (copyright, passing off, confidential information) arise automatically from creating, trading or confiding. There's no copyright register in Australia, and you don't need a © symbol.</li></ul>`,
            deeper: `<p>The trade-off: registered rights are certain and searchable but cost money and effort; unregistered rights are free but must be proved when you sue (who created it, when, what reputation you had).</p>`,
            source: `${WI}, "Patents" (registration). ${WB}, "Copyright is automatic". Wikijuris, Patent registration (IP Australia examines patents).`,
          },
          {
            kind: 'rule', margin: ['idea · expression · function · look · badge'],
            title: 'Five things a product can have',
            core: `<p>A quick way to spot which right is in play:</p>
              <ul><li><b>Expression</b> (words, images, code, music) → <strong>copyright</strong></li>
              <li><b>Function</b> (how it works) → <strong>patents</strong></li>
              <li><b>Look</b> (shape, pattern, ornament) → <strong>designs</strong></li>
              <li><b>Badge</b> (the name or logo that says who it's from) → <strong>trade marks</strong>, <strong>passing off</strong></li>
              <li><b>Secrets</b> (a recipe, a process) → <strong>confidential information</strong></li></ul>
              <p>And the <b>idea</b> itself? Usually nothing.</p>`,
            source: `${WI}, "Types of IP" (copyright, patents, trade marks, designs). The five-way split is our teaching structure.`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'A business name isn\'t a trade mark',
            core: `<p>Registering a <b>company name</b>, <b>business name</b> or <b>domain name</b> doesn't give you the right to stop others using the same or a similar name. Only a <strong>registered trade mark</strong> (or a passing-off reputation) does that.</p>`,
            source: `${WI}, "Trademarks" (tip box).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'You must register copyright with IP Australia to be protected.', a: false, explain: 'Copyright is automatic. There\'s no register, and no © symbol is needed.' },
          { type: 'choice', q: 'How long does a standard patent last?', options: ['20 years (PA s 67)', 'Life of the inventor + 70', '10 years, renewable forever', '5 years, renewable to 10'], a: 0, explain: '20 years from the date of the patent.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Registered or unregistered right?', buckets: ['Registered', 'Unregistered'], items: [{ t: 'Patent', b: 0 }, { t: 'Trade mark', b: 0 }, { t: 'Design', b: 0 }, { t: 'Copyright', b: 1 }, { t: 'Passing off', b: 1 }, { t: 'Confidential information', b: 1 }], explain: 'Patents, trade marks and designs are granted on application; the others arise without registration.' },
          { type: 'tf', q: 'Registering a business name lets you stop competitors using a similar name.', a: false, explain: 'Only a registered trade mark (or a reputation protected by passing off) can do that.' },
          { type: 'choice', q: 'Which right can last indefinitely if you keep renewing it?', options: ['A trade mark (10 years at a time)', 'A patent', 'A design', 'Copyright'], a: 0, explain: 'Trade mark registration expires 10 years after filing but can be renewed for 10 years at a time (TMA ss 72(3), 77).' },
        ],
      },
      {
        title: 'One product, many rights',
        cards: [
          {
            kind: 'example', margin: ['APPLY', 'ISSUE SPOTTING'],
            title: 'The smart water bottle',
            core: `<p>A startup sells <i>Gulp</i>, a water bottle with a patented self-cleaning lid, a distinctive teardrop shape, an app that tracks how much you drink, a secret antibacterial coating formula and a cartoon droplet mascot.</p>
              <ul><li>The lid's mechanism: <strong>patent</strong> (function).</li>
              <li>The teardrop shape: <strong>registered design</strong> (look).</li>
              <li>The app's code, the instruction booklet, the mascot drawing: <strong>copyright</strong> (expression).</li>
              <li>The name <i>Gulp</i> and the logo: <strong>trade mark</strong>; and <strong>passing off</strong> once it has a reputation (badge).</li>
              <li>The coating formula: <strong>confidential information</strong>, while it stays secret.</li></ul>`,
            deeper: `<p>Notice the choices: patenting the coating would publish the formula (patents are a bargain: protection in exchange for disclosure), so the startup might prefer secrecy. You'll meet that trade-off again in units 4.1 and 6.2.</p>`,
            source: 'Fictional facts, applying the map of rights in this unit.',
          },
          {
            kind: 'rule', margin: ['overlaps'],
            title: 'Rights overlap, and sometimes cancel out',
            core: `<p>Most products carry several rights at once, owned by different people and lasting different times. But the regimes also interact: for example, mass-producing an artistic design can affect its copyright protection, which pushes designers towards registering designs (unit 1.17).</p>
              <p>So an IP answer always asks: which rights exist, who owns each, how long each lasts, and which one gives the best remedy here.</p>`,
            source: `${WI}, "Designs" (tip box on copyright and mass production). Details in unit 1.17.`,
          },
        ],
        questions: [
          { type: 'sort', label: 'Spectroscopy', q: 'A new running shoe. Send each feature to the right that protects it.', buckets: ['Copyright', 'Patent', 'Design', 'Trade mark'], items: [{ t: 'The illustrated care booklet', b: 0 }, { t: 'A new sole-cushioning mechanism', b: 1 }, { t: 'The shoe\'s distinctive overall look', b: 2 }, { t: 'The brand name on the tongue', b: 3 }], explain: 'Expression → copyright; function → patent; look → design; badge → trade mark.' },
          { type: 'choice', q: 'Gulp\'s coating formula is valuable and hard to reverse-engineer. Why might it stay a trade secret instead of being patented?', options: ['Patenting would publish the formula; secrecy can last as long as it\'s kept', 'Formulas can\'t be patented', 'Trade secrets last 20 years', 'Confidential information is registered'], a: 0, explain: 'A patent is a bargain: protection for disclosure. Confidential information lasts as long as it stays secret.' },
          { type: 'tf', q: 'One product can be protected by copyright, a patent, a design and a trade mark at the same time.', a: true, explain: 'Different features, different rights, often different owners and terms.' },
        ],
      },
    ],
    outline: `<p><b>Map of rights.</b> Copyright (automatic; usually life + 70); trade marks (registered; 10 years, renewable); passing off and ACL (reputation; unregistered); patents (registered after examination; 20 years); designs (registered; 5 + 5); confidential information (equity; while secret). Specialist: PBR, circuit layouts, GIs. Registered (IP Australia) vs unregistered. Expression → copyright; function → patent; look → design; badge → TM / passing off; secrets → confidence; ideas → nothing. Business or domain names ≠ trade marks. Rights overlap (design/copyright interaction: 1.17).</p>`,
    treasures: [],
  };

  /* ---------- 0.3 Constitution, institutions and courts ---------- */
  D.units['u0-3'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Where IP law comes from',
        cards: [
          {
            kind: 'statute', margin: ['s 51(xviii) Constitution'],
            title: 'The Commonwealth\'s IP power',
            statute: { cite: 's 51 Constitution', text: 'The Parliament shall … have power to make laws for the peace, order, and good government of the Commonwealth with respect to: … <mark>①</mark> (xviii.) Copyrights, patents of inventions and designs, and trade marks', notes: ['① the source of the federal IP Acts'] },
            core: `<p>Because of s 51(xviii), Australia's main IP laws are <strong>Commonwealth</strong> Acts, the same across the country:</p>
              <ul><li><i>Copyright Act 1968</i></li><li><i>Trade Marks Act 1995</i></li><li><i>Patents Act 1990</i></li><li><i>Designs Act 2003</i></li><li>plus the <i>Plant Breeder's Rights Act 1994</i> and the <i>Circuit Layouts Act 1989</i>.</li></ul>`,
            source: `${CONST} s 51(xviii) (quoted). ${WI}, "Sources of IP law" (table of Acts).`,
          },
          {
            kind: 'statute', margin: ['s 51(xxxi) Constitution'],
            title: '"Just terms": IP is property',
            statute: { cite: 's 51 Constitution', text: '(xxxi.) The acquisition of property <mark>①</mark> on just terms from any State or person for any purpose in respect of which the Parliament has power to make laws', notes: ['① if a law acquires property, it must provide just terms'] },
            core: `<p>IP rights are property, so a Commonwealth law that takes them away can raise a "just terms" question. Parliament is alert to this: when it repealed the IP licensing exemption from competition law in 2019, it added a saving rule so the repeal doesn't apply to the extent it would acquire property "otherwise than on just terms".</p>`,
            deeper: `<p>The syllabus cases on the IP power and s 51(xxxi) (<i>Nintendo v Centronics</i>, <i>Grain Pool v Commonwealth</i>, <i>Phonographic Performance Co v Commonwealth</i>, and <i>JT International</i> on plain packaging) will be added once they can be checked against the judgments. <span class="flag">⚑</span></p>`,
            source: `${CONST} s 51(xxxi) (quoted). <i>Treasury Laws Amendment (2018 Measures No. 5) Act 2019</i> Sch 4, inserting CCA s 186(3) (text checked).`,
          },
          {
            kind: 'rule', margin: ['common law', 'equity'],
            title: 'Not everything is in an Act',
            core: `<p>Two important parts of the course come from judge-made law, not statutes:</p>
              <ul><li><b>Passing off:</b> a common law action protecting a trader's reputation (chapter 3).</li>
              <li><b>Breach of confidence:</b> an equitable doctrine that binds the conscience of someone who receives a secret (chapter 6).</li></ul>
              <p>And the <b>Australian Consumer Law</b> (in Schedule 2 of the <i>Competition and Consumer Act 2010</i>) prohibits misleading or deceptive conduct, which often runs alongside passing off.</p>`,
            source: `${WI}, "Sources of IP law" (trade secrets: common law, breach of confidence). Wikijuris, Breach of confidence ("As an equitable doctrine"). Wikijuris, Copyright subject matter (<i>McWilliam's Wines</i>: misleading conduct, now ACL s 18).`,
          },
          {
            kind: 'rule', margin: ['history'],
            title: 'Copyright\'s Australian history in four steps',
            core: `<ol><li><b>1828:</b> English law, including copyright statutes, was received into the Australian colonies (<i>Australian Courts Act 1828</i> (UK)).</li>
              <li><b>1905:</b> the first Commonwealth copyright statute, the <i>Copyright Act 1905</i>.</li>
              <li><b>1912:</b> the <i>Copyright Act 1912</i> adopted the UK's <i>Copyright Act 1911</i>, which then applied here for decades.</li>
              <li><b>1968:</b> after the Spicer Report (1959), the <i>Copyright Act 1968</i>: assented to on 27 June 1968, in force from <strong>1 May 1969</strong>. It's still the Act today, amended many times.</li></ol>`,
            source: `${WB}, "International and Historical Context" and timeline. ${CA}, endnotes (assent and commencement dates checked).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Which part of the Constitution gives the Commonwealth power over IP?', options: ['s 51(xviii): copyrights, patents of inventions and designs, and trade marks', 's 51(xxxi): acquisition of property', 's 92: free trade between the States', 's 51(i): trade and commerce'], a: 0, explain: 's 51(xviii).' },
          { type: 'sort', label: 'Spectroscopy', q: 'Statute or judge-made law?', buckets: ['Commonwealth Act', 'Common law or equity'], items: [{ t: 'Copyright', b: 0 }, { t: 'Patents', b: 0 }, { t: 'Passing off', b: 1 }, { t: 'Breach of confidence', b: 1 }], explain: 'The registered and copyright regimes are statutory; passing off and confidence come from the courts.' },
          { type: 'order', q: 'Put Australian copyright history in order.', items: ['English law received into the colonies', 'Copyright Act 1905 (Cth)', 'Copyright Act 1912 adopts the UK 1911 Act', 'Copyright Act 1968 in force (1 May 1969)'], explain: '1828, 1905, 1912, 1968–69.' },
          { type: 'tf', q: 'The Copyright Act 1968 came into force on the day it was passed.', a: false, explain: 'Assented to on 27 June 1968; commenced on 1 May 1969.' },
        ],
      },
      {
        title: 'Institutions and courts',
        cards: [
          {
            kind: 'rule', margin: ['IP Australia'],
            title: 'IP Australia and its officers',
            core: `<p><strong>IP Australia</strong> is the government agency that examines and registers patents, trade marks, designs and plant breeder's rights. The Acts give the key decisions to statutory officers:</p>
              <ul><li>the <b>Commissioner of Patents</b> (<i>Patents Act</i>);</li><li>the <b>Registrar of Trade Marks</b> (<i>Trade Marks Act</i>);</li><li>the <b>Registrar of Designs</b> (<i>Designs Act</i>).</li></ul>
              <p>Copyright has no registry, because there's nothing to register.</p>`,
            source: `Wikijuris, Patent registration ("Patents are examined by IP Australia") (CC BY-SA 3.0). <i>Patents Act 1990</i>, <i>Trade Marks Act 1995</i>, <i>Designs Act 2003</i> (offices checked). ${WB}.`,
          },
          {
            kind: 'statute', margin: ['PA s 154', 'TMA ss 191, 191A', 'CA ss 131A–131D'],
            title: 'Which courts hear IP cases',
            core: `<ul><li><b>Federal Court of Australia:</b> jurisdiction under every IP Act (PA s 154(1); TMA s 191(1); DA s 83(1); CA s 131C). Most big IP cases start here.</li>
              <li><b>Federal Circuit and Family Court (Division 2):</b> also has jurisdiction for trade marks, designs and copyright (TMA s 191A; DA s 83A; CA s 131D, except site-blocking under s 115A).</li>
              <li><b>State and Territory Supreme Courts:</b> can hear copyright actions (CA s 131A).</li></ul>`,
            deeper: `<p>Appeals from the Commissioner of Patents or the Registrars go to the Federal Court, whose jurisdiction is exclusive except for the High Court's (PA s 154(2); TMA s 191(2), which also allows the Division 2 court; DA s 83(2)). Some decisions can instead be reviewed on their merits by the <b>Administrative Review Tribunal</b>, which replaced the AAT on 14 October 2024 (e.g. PA s 224; DA s 136).</p>`,
            source: `<i>Patents Act 1990</i> ss 154–155, 224; <i>Trade Marks Act 1995</i> ss 191–191A; <i>Designs Act 2003</i> ss 83–83A, 136; ${CA} ss 131A, 131C–131D; <i>Administrative Review Tribunal Act 2024</i> s 2 (all text checked).`,
          },
          {
            kind: 'example', margin: ['APPLY', 'PATH'],
            title: 'The life of a trade mark dispute',
            core: `<ol><li>A café applies to register its name. The <b>Registrar of Trade Marks</b> examines and accepts it.</li>
              <li>A rival <b>opposes</b> registration; the Registrar decides the opposition.</li>
              <li>The loser <b>appeals to the Federal Court</b> (or the Division 2 court).</li>
              <li>From a single judge, an appeal to the <b>Full Court</b> of the Federal Court.</li>
              <li>Rarely, with <b>special leave</b>, the <b>High Court</b>: many of the course's leading cases came this way.</li></ol>`,
            source: `<i>Trade Marks Act 1995</i> ss 191–191A (text checked). Special leave as described throughout Wikijuris (e.g. <i>Phone Directories</i>, <i>The Panel</i>). Fictional facts.`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Registry decisions are not the last word',
            core: `<p>An IP Australia decision (say, refusing a trade mark) can be appealed to the courts, and courts decide infringement and validity. In a problem question, don't stop at "the Registrar would refuse it": say what happens next.</p>`,
            source: '<i>Trade Marks Act 1995</i> s 191(2); <i>Patents Act 1990</i> s 154(2) (text checked).',
          },
        ],
        questions: [
          { type: 'choice', q: 'Who examines and registers trade marks in Australia?', options: ['The Registrar of Trade Marks, at IP Australia', 'The Federal Court', 'ASIC', 'The Copyright Tribunal'], a: 0, explain: 'IP Australia; the Act gives the decisions to the Registrar.' },
          { type: 'tf', q: 'You can register copyright with IP Australia if you want extra certainty.', a: false, explain: 'There is no copyright register in Australia.' },
          { type: 'choice', q: 'Which court has jurisdiction under every one of the main IP Acts?', options: ['The Federal Court of Australia', 'Only the High Court', 'Local Courts', 'The Administrative Review Tribunal'], a: 0, explain: 'PA s 154(1); TMA s 191(1); DA s 83(1); CA s 131C.' },
          { type: 'order', q: 'Order the path of a trade mark dispute.', items: ['Registrar examines the application', 'A rival opposes', 'Appeal to the Federal Court', 'Appeal to the Full Court', 'High Court, with special leave'], explain: 'Registry → opposition → Federal Court → Full Court → (rarely) High Court.' },
          { type: 'tf', q: 'The Administrative Appeals Tribunal still reviews IP decisions.', a: false, explain: 'The Administrative Review Tribunal replaced it on 14 October 2024.' },
        ],
      },
    ],
    outline: `<p><b>Constitution and institutions.</b> s 51(xviii): "Copyrights, patents of inventions and designs, and trade marks" → Commonwealth Acts (CA 1968; TMA 1995; PA 1990; DA 2003; PBRA 1994; Circuit Layouts Act 1989). s 51(xxxi): acquisition of property on just terms. Passing off (common law), breach of confidence (equity), ACL (CCA Sch 2). History: received English law (1828); Copyright Act 1905; 1912 adopts UK 1911 Act; CA 1968 in force 1 May 1969. IP Australia: Commissioner of Patents, Registrars of Trade Marks and Designs. Courts: Federal Court (all Acts); FCFCOA (Div 2) (TM, designs, copyright); State Supreme Courts (copyright); appeals from registry to Federal Court; ART (from 14 Oct 2024) for some reviews.</p>`,
    treasures: [],
  };

  /* ---------- 0.4 The international framework ---------- */
  D.units['u0-4'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'The treaties',
        cards: [
          {
            kind: 'rule', margin: ['Paris 1883', 'Berne 1886'],
            title: 'The two founding conventions',
            core: `<ul><li><b>Paris Convention</b> (1883): the first major treaty helping people in one country get IP protection in another. Mainly patents, also trade marks and industrial designs.</li>
              <li><b>Berne Convention</b> (1886): copyright. It aims to let creators control and be paid for their works internationally, following a campaign by Victor Hugo.</li></ul>
              <p>Both rest on <strong>national treatment</strong>: each member protects other members' nationals as it protects its own.</p>`,
            source: `${WI}, "International Context and International Agreements" (timeline). ${WB}, timeline (Berne, Victor Hugo).`,
          },
          {
            kind: 'rule', margin: ['WIPO', 'TRIPS'],
            title: 'WIPO and TRIPS',
            core: `<ul><li><b>WIPO</b> (World Intellectual Property Organization): an intergovernmental organisation in Geneva that grew out of BIRPI (1893); its founding convention came into force in 1970. It administers the Paris and Berne Conventions and around twenty other treaties, but can't force compliance.</li>
              <li><b>TRIPS</b> (1995): part of the World Trade Organization deal. It sets <strong>minimum standards</strong> of IP protection that every WTO member must meet, and enforce, with the WTO's dispute settlement behind it.</li></ul>`,
            source: `${WI}, timeline and "International Context" (WIPO, BIRPI, WTO, TRIPS).`,
          },
          {
            kind: 'rule', margin: ['AUSFTA 2005'],
            title: 'Free trade agreements reshape Australian IP',
            core: `<p>The <b>Australia–United States Free Trade Agreement</b> (signed 2004, in force 1 January 2005) changed Australian copyright law. The best-known change: the term went from life + 50 to life + <strong>70</strong>, by the <i>US Free Trade Agreement Implementation Act 2004</i> (unit 1.9).</p>
              <p>Other agreements matter too: Korea, Japan, China, the CPTPP, and the Australia–EU agreement concluded in 2026 <span class="flag">⚑</span>.</p>`,
            deeper: `<p>The Australia–EU deal, concluded on 24 March 2026 and not yet in force, includes geographical indication commitments such as Prosecco (unit 2.11). That's from secondary reports only.</p>`,
            source: `${WI}, timeline (AUSFTA dates; list of agreements). <i>US Free Trade Agreement Implementation Act 2004</i> Sch 9 item 120 (text checked). ⚑ Australia–EU agreement: secondary sources only (see VERIFICATION.md).`,
          },
        ],
        questions: [
          { type: 'order', q: 'Put these in date order.', items: ['Paris Convention', 'Berne Convention', 'WIPO established', 'TRIPS', 'AUSFTA in force'], explain: '1883, 1886, 1970, 1995, 2005.' },
          { type: 'match', label: 'Citation network', q: 'Match each agreement to what it does.', pairs: [['Paris Convention', 'Patents, trade marks, designs abroad'], ['Berne Convention', 'Copyright internationally'], ['TRIPS', 'Minimum standards for WTO members'], ['AUSFTA', 'Copyright term to life + 70']], explain: 'The four agreements you\'ll cite most.' },
          { type: 'tf', q: 'WIPO can enforce compliance with the treaties it administers.', a: false, explain: 'WIPO administers treaties but lacks power to ensure compliance; TRIPS brought WTO enforcement.' },
          { type: 'choice', q: 'What is "national treatment"?', options: ['Protecting other members\' nationals as you protect your own', 'Only protecting your own nationals', 'Applying the same IP law in every country', 'Requiring foreigners to register first'], a: 0, explain: 'The core principle of Paris and Berne.' },
        ],
      },
      {
        title: 'Territory and priority',
        cards: [
          {
            kind: 'rule', margin: ['territoriality', 's 36 CA'],
            title: 'IP rights stop at the border',
            core: `<p>IP rights are <strong>territorial</strong>: an Australian patent or trade mark protects you in Australia only. Even copyright infringement under the Act means doing an act "in Australia" (s 36(1)).</p>
              <p>To protect a product abroad, you need rights in each country. The treaties make that easier, but they don't create a single world right.</p>`,
            source: `${CA} s 36(1) (quoted). ${WI}, "International Context".`,
          },
          {
            kind: 'compare', margin: ['Paris priority'],
            title: 'Priority: how long you have to file abroad',
            table: {
              head: ['Right', 'File in Australia within…', 'of your first overseas application'],
              rows: [
                ['Patents', '<b>12 months</b>', 'Patents Regulations 1991 reg 3.11'],
                ['Trade marks', '<b>6 months</b>', 'Trade Marks Act 1995 s 29'],
                ['Designs', '<b>6 months</b>', 'Designs Regulations 2004 reg 3.06(2)'],
              ],
            },
            core: '<p>Under the Paris Convention system, if you file first in one member country, you can file in another within the priority period and be treated as if you had filed on the first date. Anything published in between doesn\'t count against you.</p>',
            deeper: `<p>Copyright needs no priority: under Berne it arises automatically in every member, with no formalities. For foreign works in Australia, see unit 1.6 (s 184 and the <i>Copyright (International Protection) Regulations 1969</i>).</p>`,
            source: `<i>Patents Regulations 1991</i> reg 3.11; <i>Trade Marks Act 1995</i> s 29(1); <i>Designs Regulations 2004</i> reg 3.06(2) (all text checked).`,
          },
          {
            kind: 'rule', margin: ['PCT', 'Madrid', 'Hague'],
            title: 'International filing systems',
            core: `<ul><li><b>PCT</b> (Patent Cooperation Treaty): one international patent application, then a "national phase" in each country you choose.</li>
              <li><b>Madrid Protocol</b>: one international trade mark application covering chosen countries.</li>
              <li><b>Hague Agreement</b>: the designs equivalent. Australia is <strong>not</strong> a party <span class="flag">⚑</span>.</li></ul>`,
            source: `<i>Patents Act 1990</i> and <i>Patents Regulations 1991</i> (PCT applications, e.g. reg 3.13A, checked). ⚑ Hague status from secondary sources only (see VERIFICATION.md).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Priority and grace periods aren\'t the same',
            core: `<p><b>Priority</b> lets a later foreign filing take an earlier date. A <b>grace period</b> forgives your <em>own</em> disclosures before filing (12 months for patents and designs in Australia: units 4.6 and 5.3). Many inventors lose rights by talking first and filing later: always ask what happened before the filing date.</p>`,
            source: `<i>Designs Act 2003</i> s 17(1); <i>Patents Act 1990</i> s 24(1) and <i>Patents Regulations 1991</i> reg 2.2C(3) (12 months) (all text checked).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'An inventor files a patent application in Germany on 1 March. By when must she file in Australia to claim priority?', options: ['Within 12 months: by 1 March next year', 'Within 6 months', 'Within 30 days', 'There\'s no deadline'], a: 0, explain: 'Patents Regulations 1991 reg 3.11: 12 months from the first Convention application.' },
          { type: 'choice', q: 'What is the Paris priority period for trade marks?', options: ['6 months (TMA s 29)', '12 months', '18 months', '3 months'], a: 0, explain: 'TMA s 29(1).' },
          { type: 'tf', q: 'An Australian trade mark registration stops infringements in New Zealand.', a: false, explain: 'IP rights are territorial.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Which international filing system?', buckets: ['PCT', 'Madrid', 'Hague'], items: [{ t: 'One application for a patent in many countries', b: 0 }, { t: 'One application for a trade mark in many countries', b: 1 }, { t: 'One application for a design in many countries', b: 2 }], explain: 'PCT for patents, Madrid for trade marks, Hague for designs (Australia isn\'t in Hague).' },
          { type: 'tf', q: 'Copyright owners must file in each Berne country within 12 months to be protected there.', a: false, explain: 'Berne has no formalities: copyright arises automatically across members.' },
        ],
      },
    ],
    outline: `<p><b>International framework.</b> Paris (1883: patents, TMs, designs) and Berne (1886: copyright), both national treatment. WIPO (from BIRPI 1893; established 1970) administers but can't enforce. TRIPS (1995, WTO): minimum standards, enforceable. AUSFTA (in force 1 Jan 2005): term to life + 70. Territoriality: rights are national (CA s 36(1): "in Australia"). Priority: patents 12 months (Patents Regs reg 3.11); TMs 6 months (TMA s 29); designs 6 months (Designs Regs reg 3.06(2)). PCT, Madrid; Hague (Australia not a party ⚑). Priority ≠ grace period.</p>`,
    treasures: [],
  };
})();
