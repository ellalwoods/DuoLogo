/* Trade marks 2.1–2.3 · Signs, the application, and distinctiveness of words. Written and checked 11 Nov 2026 against
   the Trade Marks Act 1995 (Compilation No. 48, in force 19 Sept 2026), the Trade Marks Regulations 1995 (Compilation
   No. 53) and Wikijuris, Trade Mark Overview and Trade Mark Registration (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const TMA = '<i>Trade Marks Act 1995</i> (Cth), Compilation No. 48';
  const TMR = '<i>Trade Marks Regulations 1995</i> (Cth), Compilation No. 53';
  const WJO = '<a href="https://wikijuris.net/ausip/trade-mark-overview/" target="_blank" rel="noopener">Wikijuris, Trade Mark Overview</a> (CC BY-SA 3.0)';
  const WJR = '<a href="https://wikijuris.net/ausip/trade-mark-registration/" target="_blank" rel="noopener">Wikijuris, Trade Mark Registration</a> (CC BY-SA 3.0)';

  D.units['u2-1'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Trade marks at a glance',
        cards: [
          {
            kind: 'guide', margin: ['CHAPTER 2'],
            title: 'What this chapter covers',
            core: `<p>Trade marks are the IP most junior lawyers and attorneys meet first: clearance searches, filing applications, responding to examination reports, oppositions, and cease-and-desist letters.</p>
              <p>The chapter follows the same five questions as copyright: <b>What</b> can be a trade mark (2.1)? <b>How</b> do you register it (2.2–2.6)? <b>How long</b> does it last, and how is it lost (2.7)? What is <b>infringement</b> (2.8–2.9)? What are the <b>defences</b> (2.10)? Then certification marks and geographical indications (2.11).</p>`,
            source: 'Course structure.',
          },
          {
            kind: 'statute', margin: ['s 17 TMA', 's 6 TMA'],
            title: 'What a trade mark is',
            statute: { cite: 's 17 TMA', text: 'A trade mark is <mark>①</mark> a sign <mark>②</mark> used, or intended to be used, <mark>③</mark> to distinguish goods or services dealt with or provided in the course of trade by a person from goods or services so dealt with or provided by any other person.', notes: ['① s 6: letter, word, name, signature, numeral, device, brand, heading, label, ticket, aspect of packaging, shape, colour, sound or scent, or a combination', '② you can apply before you start using it', '③ the "badge of origin" function'] },
            core: `<p>A trade mark tells customers <strong>who</strong> a product comes from. That's why descriptive words (which tell you <em>what</em> it is) are hard to register, and why using a mark as a mark is the threshold for infringement.</p>`,
            source: `${TMA} ss 6 (definition of "sign", checked), 17 (quoted). ${WJO}.`,
          },
          {
            kind: 'rule', margin: ['s 20 TMA'],
            title: 'What registration gives you',
            core: `<p>The registered owner has the exclusive rights to <b>use</b> the trade mark, and to <b>authorise others</b> to use it, for the goods and services it's registered for, plus the right to sue for <b>infringement</b> (s 20(1)–(2)). The rights date from the <b>date of registration</b>, which is the filing date (or the overseas priority date) (ss 20(3), 72).</p>
              <p>Registration is a property right in the mark itself. Unregistered marks are protected only through passing off and the Australian Consumer Law (chapter 3), where you must prove a reputation.</p>`,
            source: `${TMA} ss 20, 72(1)–(2) (checked). ${WJO} ("Why have a registered trade mark system?").`,
          },
          {
            kind: 'compare', margin: ['ss 17, 162, 169, 185 TMA'],
            title: 'Four kinds of trade mark',
            table: {
              head: ['Kind', 'What it shows', 'Example'],
              rows: [
                ['Standard (s 17)', 'Which trader the goods or services come from', 'Most brand names and logos'],
                ['Collective (s 162)', 'Membership of an association', 'An industry association\'s mark'],
                ['Certification (s 169)', 'That goods or services meet a standard (origin, material, quality)', 'A product certification logo'],
                ['Defensive (s 185)', 'Protects a very well-known mark on goods it isn\'t used for', 'A famous brand on unrelated goods'],
              ],
            },
            core: '<p>Defensive marks don\'t need to be used. Certification and collective marks are covered in unit 2.11.</p>',
            source: `${TMA} ss 17, 162, 169, 185 (definitions referenced in s 6, checked). ${WJO}, "Types of Trade Marks".`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Names aren\'t trade marks',
            core: `<ul><li>Registering a <b>business name</b> or <b>company name</b>, or buying a <b>domain name</b>, gives no trade mark rights, and doesn't stop you infringing someone else's mark.</li>
              <li>Trade marks are <b>territorial</b>: an Australian registration covers Australia only. A US registration gives nothing here.</li>
              <li>A client's first question is usually "can I use this name?". That's a <b>clearance</b> question (search the register and the market), separate from "can I register it?".</li></ul>`,
            source: `${WJR} ("Benefits of Registration": names vs trade marks; territoriality). ${TMA} s 20.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'You can apply to register a trade mark you haven\'t used yet.', a: true, explain: 's 17 ("used, or intended to be used"); s 27(1)(b).' },
          { type: 'tf', q: 'Registering a business name gives you trade mark rights in it.', a: false, explain: 'Business, company and domain names are separate registers; only trade mark registration gives s 20 rights.' },
          { type: 'choice', q: 'What is the core function of a trade mark?', options: ['Distinguishing one trader\'s goods or services from another\'s', 'Describing the goods', 'Protecting the design of a product', 'Recording who created a logo'], a: 0, explain: 's 17: a badge of origin.' },
          { type: 'match', label: 'Citation network', q: 'Match each kind of trade mark to its section.', pairs: [['Standard trade mark', 's 17'], ['Collective trade mark', 's 162'], ['Certification trade mark', 's 169'], ['Defensive trade mark', 's 185']], explain: 'See s 6.' },
        ],
      },
      {
        title: 'Signs: words, shapes, colours, sounds and scents',
        cards: [
          {
            kind: 'rule', margin: ['s 6 "sign" TMA'],
            title: 'Almost anything can be a sign',
            core: `<p>A sign "includes" any letter, word, name, signature, numeral, device, brand, heading, label, ticket, <b>aspect of packaging, shape, colour, sound or scent</b>, or any combination (s 6). The list is inclusive.</p>
              <p>The harder questions come later: is it <b>capable of distinguishing</b> (s 41, units 2.3–2.4) and can it be <b>represented graphically</b> (s 40)?</p>`,
            source: `${TMA} ss 6, 40 (checked). Wikijuris says s 7 in one place; the definition is in s 6.`,
          },
          {
            kind: 'compare', margin: ['Non-traditional marks'],
            title: 'Non-traditional marks: what tends to work',
            table: {
              head: ['Sign', 'Registrable when…', 'Not when…'],
              rows: [
                ['Shape', 'It isn\'t functional and distinguishes (<i>Kenman Kandy</i>: the "millennium bug" lolly)', 'It\'s the best functional design (<i>Philips v Remington</i>: three-headed shaver)'],
                ['Colour', 'It has no functional purpose and is used as a mark (<i>Philmac</i>: terracotta pipe fittings)', 'It\'s only ever used with a logo (<i>Woolworths v BP</i>: BP green)'],
                ['Sound', 'A distinctive audible identifier, represented by notation and a recording', 'It\'s a common functional sound'],
                ['Scent', 'Distinguishes and can be described in writing', 'It\'s the natural smell of the product (coffee for a café)'],
              ],
            },
            core: '<p>Non-traditional marks usually need <b>evidence of use</b> to show they distinguish (unit 2.4).</p>',
            source: `${WJO}, "Non-Traditional Trade Marks"; ${WJR}, "Distinctiveness of Non-Traditional Trade Marks" (<i>Kenman Kandy</i> [2002] FCAFC 273; <i>Philips v Remington</i> [1999] FCA 816; <i>Philmac</i> [2002] FCA 1551; <i>Woolworths v BP</i> [2013] ATMO 61).`,
          },
          {
            kind: 'rule', margin: ['s 19 TMA', 'Sch 1 TMR'],
            title: 'Registration is for goods and services in classes',
            core: `<p>A mark is registered for specified <b>goods and/or services</b>, grouped into the <b>45 classes</b> in Schedule 1 of the Regulations (classes 1–34 goods, 35–45 services). An application can cover several classes (ss 19, 27(3)(b)).</p>
              <p>The <b>specification</b> (the list of goods and services) sets the scope of the monopoly and of infringement under s 120(1). Too narrow and it won't cover the business; too broad and parts may be vulnerable to <b>non-use</b> removal (unit 2.7).</p>`,
            source: `${TMA} ss 19, 27(3)–(5) (checked); ${TMR} reg 2.1 and Sch 1 (45 classes, checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Drafting the specification',
            core: `<ul><li>Cover what the client sells <b>now</b> and what it genuinely plans to sell soon. An intention to use is required (s 27(1)(b)), and an application with no such intention can be opposed (s 59).</li>
              <li>Remember related services: a clothing brand may need class 25 (clothing) <b>and</b> class 35 (retail services).</li>
              <li>Fees are per class, so clients will ask you to justify every class.</li></ul>`,
            source: `${TMA} ss 27(1), 59; ${TMR} Sch 1. Practical drafting points.`,
          },
        ],
        questions: [
          { type: 'sort', label: 'Spectroscopy', q: 'Can this be a "sign" under s 6?', buckets: ['Yes, it can be a sign', 'Not on the s 6 list'], items: [{ t: 'A shape', b: 0 }, { t: 'A colour', b: 0 }, { t: 'A sound', b: 0 }, { t: 'A scent', b: 0 }, { t: 'An aspect of packaging', b: 0 }], explain: 'All are expressly listed in s 6. Whether they distinguish is a separate question.' },
          { type: 'choice', q: 'Why couldn\'t Philips register the three-headed shaver shape?', options: ['The configuration was functional and added nothing to distinguish', 'Shapes can never be trade marks', 'Remington used it first', 'It wasn\'t represented graphically'], a: 0, explain: '<i>Philips v Remington</i>, as summarised by Wikijuris.' },
          { type: 'tf', q: 'There are 45 classes of goods and services.', a: true, explain: 'Regs Sch 1: 34 goods classes and 11 services classes.' },
          { type: 'tf', q: 'BP\'s green was refused in the Woolworths opposition because colours can\'t be trade marks.', a: false, explain: 'Colour can be a sign; BP failed to show it used the green alone as a trade mark, since it always appeared with the BP logo.' },
        ],
      },
    ],
    outline: `<p><b>Signs and what trade marks do.</b> Trade mark: a sign used or intended to be used to distinguish goods or services in the course of trade (s 17). Sign: letter, word, name, signature, numeral, device, brand, heading, label, ticket, aspect of packaging, shape, colour, sound, scent (s 6). Rights: exclusive use and authorising use for the registered goods/services, and relief for infringement, from the filing/priority date (ss 20, 72). Standard, collective (s 162), certification (s 169), defensive (s 185). Non-traditional: <i>Kenman Kandy</i> (bug shape ok), <i>Philips v Remington</i> (functional shaver no), <i>Philmac</i> (terracotta ok), <i>Woolworths v BP</i> (green always with logo). 45 classes (Regs Sch 1); specification sets scope. Names and domains aren't trade marks; territorial.</p>`,
    treasures: ['Kenman Kandy'],
  };

  D.units['u2-2'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'From filing to registration',
        cards: [
          {
            kind: 'test', margin: ['ss 27–79 TMA'],
            title: 'The life of an application',
            steps: [
              '<b>File</b> (s 27): the applicant claims to own the mark and uses, intends to use, or will authorise use of it. The filing date fixes priority.',
              '<b>Examination</b> (s 31): IP Australia reports on any grounds for rejection.',
              '<b>Respond</b>: argue, amend, or file evidence of use. The application <b>lapses</b> unless accepted within 15 months of the first adverse report (reg 4.12).',
              '<b>Acceptance</b> (s 33), then advertised. Anyone can oppose within <b>2 months</b> (s 52; reg 5.6).',
              '<b>Registration</b> (s 68) if there\'s no opposition or it fails, backdated to the filing date (s 72(1)).',
              '<b>Renew</b> every 10 years (ss 72(3), 77), up to 12 months before expiry, or within 6 months after (s 79). Otherwise it\'s removed (s 78).',
            ],
            core: '<p>Each step has deadlines that are the lawyer\'s or attorney\'s responsibility. Diarise them the day you open the file.</p>',
            source: `${TMA} ss 27, 31, 33, 52, 68, 72, 75, 77–79 (checked); ${TMR} regs 4.12, 5.6, and the renewal period for s 75(1) (12 months before expiry) (checked).`,
          },
          {
            kind: 'statute', margin: ['s 33 TMA', 's 41(2) TMA'],
            title: 'The Registrar must accept unless satisfied otherwise',
            statute: { cite: 's 33(1) TMA', text: 'The Registrar must, after the examination, <mark>①</mark> accept the application unless he or she is satisfied that: (a) the application has not been made in accordance with this Act; or (b) there are grounds under this Act for rejecting it.', notes: ['① the default is acceptance'] },
            core: `<p>This is often called the "presumption of registrability": the Registrar must be <em>satisfied</em> a ground exists before rejecting. s 41(2) reinforces it for distinctiveness: a mark is taken not to be capable of distinguishing <b>only if</b> s 41(3) or (4) applies.</p>`,
            source: `${TMA} ss 33 (quoted), 41(2) (checked). ${WJR} (presumption of registrability).`,
          },
          {
            kind: 'rule', margin: ['s 12, s 29 TMA'],
            title: 'Priority: first to file, with a 6-month overseas window',
            core: `<ul><li>The <b>priority date</b> is the date registration takes effect (s 12): normally the Australian <b>filing date</b>.</li>
              <li>A client that filed in a <b>Convention country</b> first can claim that earlier date if it files in Australia within <b>6 months</b> (s 29, the Paris Convention right).</li>
              <li>Priority decides conflicts under s 44: an earlier-filed similar mark blocks a later one, subject to honest concurrent use and prior continuous use (s 44(3)–(4), unit 2.5).</li></ul>`,
            source: `${TMA} ss 12, 29, 44 (checked). See unit 0.4 for the Paris Convention.`,
          },
          {
            kind: 'rule', margin: ['Part 17A TMA'],
            title: 'Going international: the Madrid Protocol',
            core: `<p>Through the <b>Madrid Protocol</b>, an applicant can file one international application designating many countries, based on a home application or registration. A foreign owner's designation of Australia becomes a <b>protected international trade mark</b> here, examined much like a local application (Part 17A and Part 17A of the Regulations).</p>`,
            source: `${TMA} Part 17A, s 189A (checked); ${TMR} Part 17A and reg 4.15A (headings checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Deadlines and searches',
            core: `<ul><li><b>Search before filing.</b> An earlier similar mark for similar goods is the most common reason for rejection.</li>
              <li><b>15 months</b> to get an application accepted after the first adverse report; extensions are possible but limited.</li>
              <li><b>2 months</b> after acceptance is advertised for anyone to oppose. Watch clients' competitors' new filings to catch them in time.</li>
              <li><b>Renewal:</b> missing it isn't instantly fatal (6 months' grace), but the mark is removed after that.</li></ul>`,
            source: `${TMA} ss 44, 52, 78–79; ${TMR} regs 4.12, 5.6.`,
          },
        ],
        questions: [
          { type: 'order', q: 'Put the stages of a trade mark application in order.', items: ['Filing', 'Examination report', 'Acceptance and advertisement', 'Opposition period', 'Registration', 'Renewal'], explain: 'ss 27, 31, 33, 52, 68, 77.' },
          { type: 'choice', q: 'How long does a third party have to oppose after acceptance is advertised?', options: ['2 months', '3 months', '6 months', '12 months'], a: 0, explain: 'reg 5.6(1) for s 52(2).' },
          { type: 'tf', q: 'A registered trade mark lasts 10 years from the date it is entered on the Register.', a: false, explain: 's 72(3): it expires 10 years after the filing date (and can be renewed indefinitely).' },
          { type: 'choice', q: 'A client filed in the US on 1 March. By when must it file in Australia to claim that date?', options: ['1 September', '1 June', '1 March next year', 'It can\'t claim the US date'], a: 0, explain: 's 29: within 6 months.' },
          { type: 'tf', q: 'If a renewal is missed, the registration can still be renewed within 6 months after it expires.', a: true, explain: 's 79.' },
        ],
      },
    ],
    outline: `<p><b>The application.</b> File (s 27: claim ownership; use or intended use); examination (s 31); accept unless satisfied of a ground (s 33; s 41(2)); lapse 15 months after first adverse report (reg 4.12); advertised, 2 months to oppose (s 52; reg 5.6); register (s 68), effective from filing date (s 72(1)) or Convention priority date (s 72(2); s 29: 6 months). 10-year term from filing (s 72(3)); renew within 12 months before expiry (s 75; regs) or 6 months after (s 79); else removed (s 78). Madrid Protocol: Part 17A.</p>`,
    treasures: ['The 2-month opposition window'],
  };

  D.units['u2-3'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Inherent adaptation to distinguish',
        cards: [
          {
            kind: 'statute', margin: ['s 41 TMA'],
            title: 'Is the mark capable of distinguishing?',
            statute: { cite: 's 41(3)–(4) TMA', text: '(3) … if: (a) the trade mark is <mark>①</mark> not to any extent inherently adapted to distinguish …; and (b) the applicant has not used the trade mark before the filing date … to such an extent that the trade mark does in fact distinguish …. (4) … if: (a) the trade mark is, <mark>②</mark> to some extent, but not sufficiently, inherently adapted to distinguish …; and (b) the trade mark does not and will not distinguish … having regard to the combined effect of … <mark>③</mark> the extent to which [it] is inherently adapted …; the use, or intended use, of the trade mark by the applicant; any other circumstances.', notes: ['① purely descriptive: needs proof it already distinguishes', '② partly descriptive: use and other circumstances can tip it over', '③ weigh it all together'] },
            core: `<p>Three bands: <b>inherently adapted</b> (registrable without evidence); <b>to some extent</b> adapted (s 41(4): may need evidence of use or intended use); and <b>not to any extent</b> adapted (s 41(3): only registrable with evidence it already distinguishes in fact, from <em>before</em> the filing date).</p>`,
            deeper: `<p>Note 1 to s 41: marks that aren't inherently adapted are mostly those consisting wholly of a sign ordinarily used to indicate kind, quality, quantity, intended purpose, value, geographical origin or another characteristic, or the time of production.</p>`,
            source: `${TMA} s 41 (quoted and checked). ${WJR}, "Not Capable of Distinguishing".`,
          },
          {
            kind: 'case', margin: ['[1964] HCA 55'],
            title: 'Clark Equipment: the "other traders" test',
            core: `<p>Clark applied to register MICHIGAN for earthmoving equipment. Kitto J framed the question that's still used:</p>
              <blockquote>"…the likelihood that other persons, trading in goods of the relevant kind and being actuated by only proper motives … will think of the word and want to use it in connexion with similar goods in any manner which would infringe a registered trade mark granted in respect of it."</blockquote>
              <p>If honest competitors would naturally want to use the word (a place name, a description, a laudatory term), giving one trader a monopoly over it isn't appropriate.</p>`,
            source: `<i>Clark Equipment Co v Registrar of Trade Marks</i> [1964] HCA 55, Kitto J, as quoted in ${WJR}.`,
          },
          {
            kind: 'compare', margin: ['Word marks'],
            title: 'Words on the spectrum',
            table: {
              head: ['Type of word', 'Example from the cases', 'Usually'],
              rows: [
                ['Invented', 'Coined words with no meaning', 'Inherently adapted'],
                ['Allusive or remote', 'TUB HAPPY for clothing (<i>Mark Foy\'s</i>, 1956)', 'Inherently adapted: any reference to the goods is "very remote"'],
                ['Partly descriptive', 'FINEFORM for lingerie (<i>Gazal</i>, 1999 ATMO)', 'Registrable with evidence (s 41(4))'],
                ['Descriptive or laudatory', 'WHOPPER (<i>Burger King</i>, 1973); CRANBERRY CLASSIC (<i>Ocean Spray</i>, 2000)', 'Not inherently adapted; s 41(3)'],
                ['Geographical', 'MICHIGAN (<i>Clark</i>); OREGON (<i>Blount</i>, 1998)', 'Not inherently adapted if other traders may want it'],
              ],
            },
            core: '<p>In <i>Ocean Spray</i>, 2.5 years of pre-filing use still wasn\'t enough to show CRANBERRY CLASSIC distinguished in fact.</p>',
            source: `${WJR} (<i>Burger King</i> [1973] HCA 15; <i>Ocean Spray</i> [2000] FCA 177; <i>Blount</i> [1998] FCA 440; <i>Gazal</i> [1999] ATMO 90); <i>Mark Foy's v Davies Co-op</i> [1956] HCA 41, Williams J, as quoted in Wikijuris, Trade Mark Infringement.`,
          },
          {
            kind: 'case', margin: ['[2014] HCA 48 ⚑'], flag: true,
            title: 'Cantarella: foreign words',
            core: `<p>Cantarella registered ORO ("gold" in Italian) and CINQUE STELLE ("five stars") for coffee. The High Court held they were <b>inherently adapted to distinguish</b>: the question is the ordinary signification of the word to people in Australia who would buy or deal in the goods, not its translation. A foreign word that those people don't understand as descriptive can be registered.</p>`,
            source: '⚑ <i>Cantarella Bros Pty Ltd v Modena Trading Pty Ltd</i> [2014] HCA 48. Not in Wikijuris and the judgment couldn\'t be opened; summary from secondary sources. Check before relying on it.',
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Clients love descriptive names',
            core: `<ul><li>Marketing teams pick names that say what the product does. Explain early that <b>descriptive names are weak</b>: hard to register, and hard to enforce even if registered (the descriptive-use defence, unit 2.10).</li>
              <li>Suggest adding a distinctive element (an invented word, a logo), but know a logo only protects the logo, not the descriptive word inside it.</li>
              <li>If the client has used a descriptive name for years, gather <b>evidence of use</b> before filing: sales, advertising spend, surveys, dated examples.</li></ul>`,
            source: `${TMA} ss 41, 122(1)(b); ${WJR}.`,
          },
        ],
        questions: [
          { type: 'order', q: 'Order these from most to least inherently distinctive.', items: ['An invented word', 'An allusive phrase like TUB HAPPY', 'A partly descriptive word like FINEFORM', 'A purely descriptive phrase like CRANBERRY CLASSIC'], explain: 'The distinctiveness spectrum under s 41.' },
          { type: 'choice', q: 'What is the Clark Equipment test about?', options: ['Whether honest traders would want to use the word for similar goods', 'Whether consumers have heard of the mark', 'Whether the mark is attractive', 'Whether the applicant used it first'], a: 0, explain: 'Kitto J in <i>Clark Equipment</i>.' },
          { type: 'tf', q: 'For a mark that is not to any extent inherently adapted, use after the filing date can save the application.', a: false, explain: 's 41(3)(b): the use must be before the filing date.' },
          { type: 'tf', q: 'A foreign word is automatically descriptive if it translates to a description of the goods.', a: false, explain: '<i>Cantarella</i>: it depends on its ordinary meaning to Australian buyers and traders.', flag: true },
          { type: 'similarity', label: 'Distinctiveness index', q: 'SPEEDY CLEAN for a cleaning service: how inherently distinctive is it? (0 = purely descriptive, 100 = invented)', lo: 0, hi: 30, ends: ['Descriptive', 'Invented'], explain: 'It describes the service\'s qualities; likely needs evidence of use (s 41(3) or (4)).' },
        ],
      },
    ],
    outline: `<p><b>Distinctiveness: words.</b> s 41: rejected if not capable of distinguishing, which applies only if s 41(3) (not to any extent inherently adapted + no pre-filing use distinguishing in fact) or s 41(4) (partly adapted + won't distinguish given inherent adaptation, use/intended use, other circumstances). <i>Clark Equipment</i> [1964] HCA 55 (MICHIGAN: would honest traders want to use it?); <i>Mark Foy's</i> [1956] HCA 41 (TUB HAPPY ok); <i>Burger King</i> (WHOPPER), <i>Ocean Spray</i> (CRANBERRY CLASSIC; 2.5 years' use not enough), <i>Blount</i> (OREGON); <i>Cantarella</i> [2014] HCA 48 (ORO, CINQUE STELLE ok: meaning to Australian buyers) ⚑.</p>`,
    treasures: ['Clark Equipment'],
  };
})();
