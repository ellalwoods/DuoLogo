/* Trade marks 2.4–2.6 · Shapes, colours and acquired distinctiveness; other grounds and comparing marks; opposition and
   ownership. Written and checked 11 Nov 2026 against the Trade Marks Act 1995 (Compilation No. 48), the Trade Marks
   Regulations 1995 (Compilation No. 53) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const TMA = '<i>Trade Marks Act 1995</i> (Cth), Compilation No. 48';
  const TMR = '<i>Trade Marks Regulations 1995</i> (Cth), Compilation No. 53';
  const WJR = '<a href="https://wikijuris.net/ausip/trade-mark-registration/" target="_blank" rel="noopener">Wikijuris, Trade Mark Registration</a> (CC BY-SA 3.0)';

  D.units['u2-4'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Shapes, colours and proving distinctiveness',
        cards: [
          {
            kind: 'case', margin: ['[2002] FCAFC 273'],
            title: 'Kenman Kandy: the bug-shaped lolly',
            exp: {
              n: 1, cite: '[2002] FCAFC 273',
              hyp: 'The shape of a lolly can\'t be inherently adapted to distinguish: shapes are just what the product looks like.',
              method: 'Kenman applied to register the 3D shape of an imaginary six-legged creature (a "millennium bug") for confectionery.',
              result: 'Capable of registration: the shape had no functional significance, was distinctive, and wasn\'t based on a real bug.',
              ok: false,
              discussion: 'A fanciful shape can work like an invented word. A shape that copies nature, or that the product needs in order to work, is much weaker.',
            },
            source: `${WJR} and Wikijuris, Trade Mark Overview (summary of the case).`,
          },
          {
            kind: 'compare', margin: ['Shapes and colours'],
            title: 'Why some shape and colour marks fail',
            table: {
              head: ['Case', 'Mark', 'Problem'],
              rows: [
                ['<i>Philips v Remington</i> [1999] FCA 816', 'Three-headed rotary shaver', 'Functional: the best design, adding nothing to distinguish'],
                ['<i>Guylian v Registrar</i> [2009] FCA 891', 'Seahorse-shaped chocolates', 'Guylian used its <b>name</b>, not the shape, as its badge of origin, despite consumer association'],
                ['<i>Smith Kline &amp; French</i> [1967] HCA 42', 'Colour scheme of a capsule with visible pellets', 'Couldn\'t be described apart from the capsule itself'],
                ['<i>Woolworths v BP</i> [2013] ATMO 61', 'A shade of green for service stations', 'Always used with the BP logo, so not shown to distinguish alone'],
                ['<i>Philmac</i> [2002] FCA 1551 (success)', 'Terracotta on pipe fittings', 'No functional purpose: registered'],
              ],
            },
            core: '<p>The recurring lessons: no functional purpose, and evidence that the shape or colour <b>itself</b> is used and recognised as the badge of origin.</p>',
            source: `${WJR}, "Distinctiveness of Non-Traditional Trade Marks" (case summaries).`,
          },
          {
            kind: 'rule', margin: ['s 41(3)–(4) TMA'],
            title: 'Evidence of use',
            core: `<p>For marks that aren't inherently adapted, registration turns on evidence:</p>
              <ul><li><b>s 41(3)</b> (not to any extent adapted): use <b>before the filing date</b> so extensive that the mark <em>does in fact</em> distinguish.</li>
              <li><b>s 41(4)</b> (partly adapted): the combined effect of inherent adaptation, use or <b>intended</b> use, and other circumstances.</li></ul>
              <p>Use by a predecessor in title, and authorised use by licensees, counts as the applicant's use (ss 41(5), 7(3), 8).</p>`,
            source: `${TMA} ss 7(3), 8, 41(3)–(5) (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Building an evidence of use declaration',
            core: `<ul><li>Gather <b>dated</b> material from <b>before the filing date</b>: packaging, advertising, website captures, sales figures by year and state, advertising spend.</li>
              <li>Show the mark used <b>alone</b>, as a badge of origin. <i>Guylian</i> and <i>BP</i> failed because the shape or colour always appeared with a word mark.</li>
              <li>For shape and colour clients, advise using <b>"look for the…"</b> style advertising that teaches consumers to treat the shape or colour as the brand.</li></ul>`,
            source: `${TMA} s 41; ${WJR} (<i>Guylian</i>, <i>Woolworths v BP</i>). Practical checklist.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Why did Guylian\'s seahorse shape fail?', options: ['Guylian used its name, not the shape, as its badge of origin', 'Seahorses are a natural shape', 'The shape was functional', 'It wasn\'t represented graphically'], a: 0, explain: '<i>Guylian v Registrar</i> [2009] FCA 891.' },
          { type: 'tf', q: 'For a mark that is not to any extent inherently adapted, intended future use can be enough.', a: false, explain: 's 41(3) requires actual pre-filing use that in fact distinguishes. Intended use is relevant under s 41(4).' },
          { type: 'sort', label: 'Spectroscopy', q: 'Registered, or refused?', buckets: ['Registrable', 'Refused'], items: [{ t: 'Kenman\'s bug-shaped lolly', b: 0 }, { t: 'Philmac\'s terracotta pipe fittings', b: 0 }, { t: 'Philips\'s three-headed shaver', b: 1 }, { t: 'BP\'s green for service stations', b: 1 }], explain: 'Case summaries in Wikijuris.' },
          { type: 'tf', q: 'A licensee\'s use of the mark can count towards the owner\'s evidence of use.', a: true, explain: 'ss 7(3), 8: authorised use is the owner\'s use.' },
        ],
      },
    ],
    outline: `<p><b>Distinctiveness II.</b> <i>Kenman Kandy</i> [2002] FCAFC 273 (fanciful bug shape ok); <i>Philips v Remington</i> [1999] FCA 816 (functional shape no); <i>Guylian</i> [2009] FCA 891 (shape not used as badge of origin); <i>Smith Kline &amp; French</i> [1967] HCA 42 (capsule colour scheme); <i>Philmac</i> [2002] FCA 1551 (terracotta ok); <i>Woolworths v BP</i> [2013] ATMO 61 (green always with logo). Evidence: s 41(3) pre-filing use distinguishing in fact; s 41(4) use or intended use; predecessor and authorised use count (ss 41(5), 7(3), 8).</p>`,
    treasures: ['The Guylian seahorse'],
  };

  D.units['u2-5'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Other grounds for rejection',
        cards: [
          {
            kind: 'compare', margin: ['ss 39–44 TMA'],
            title: 'The grounds for rejection',
            table: {
              head: ['Section', 'Ground'],
              rows: [
                ['s 39', 'Contains a prohibited or prescribed sign: e.g. "Patent", "Registered", "Copyright", ©, ®, Australian and Paris Convention country flags, government arms (reg 4.15)'],
                ['s 40', 'Can\'t be represented graphically'],
                ['s 41', 'Not capable of distinguishing (units 2.3–2.4)'],
                ['s 42', 'Scandalous, or its use would be contrary to law'],
                ['s 43', 'A connotation that would deceive or confuse'],
                ['s 44', 'Substantially identical or deceptively similar to an earlier mark for similar or closely related goods or services'],
              ],
            },
            core: '<p>s 44 is by far the most common in practice; s 41 is next.</p>',
            source: `${TMA} ss 39–44 (checked); ${TMR} reg 4.15 (checked).`,
          },
          {
            kind: 'case', margin: ['[2007] FCA 1649'],
            title: 'Scotch Whisky Association v De Witt',
            core: `<p>GLEN OAKS for <b>bourbon</b> was refused under s 43: "Glen" conveyed a clear connotation of Scottish origin, so using it on bourbon was likely to deceive or cause confusion.</p>
              <p>s 43 is about what the mark <em>says</em> about the goods (origin, ingredients, quality), not about another trader's mark.</p>`,
            source: `<i>Scotch Whisky Association v De Witt</i> [2007] FCA 1649, as summarised in ${WJR}.`,
          },
          {
            kind: 'statute', margin: ['s 44(1), (3)–(4) TMA'],
            title: 's 44: earlier marks',
            statute: { cite: 's 44(1) TMA', text: 'an application … in respect of goods … must be rejected if: (a) the applicant\'s trade mark is <mark>①</mark> substantially identical with, or deceptively similar to: (i) a trade mark registered by another person in respect of <mark>②</mark> similar goods or closely related services; or (ii) a trade mark whose registration … is being sought by another person; and (b) the <mark>③</mark> priority date … is not earlier than the priority date for the registration of the other trade mark …', notes: ['① two different comparison tests (next lesson)', '② "similar" = same or of the same description (s 14)', '③ first to file wins'] },
            core: `<p>Two ways past an earlier mark: <b>honest concurrent use</b> or other circumstances (s 44(3), the Registrar <em>may</em> accept, possibly limited to an area); and <b>prior continuous use</b> since before the other mark's priority date (s 44(4), the Registrar <em>may not</em> reject). Or get the owner's <b>consent</b>, or attack the earlier mark for non-use (unit 2.7).</p>`,
            source: `${TMA} ss 14, 44 (quoted and checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Responding to a s 44 citation',
            core: `<ol><li>Are the marks really <b>similar</b>? Argue the comparison (next lesson).</li><li>Are the goods really <b>similar or closely related</b>? Consider deleting goods from the specification.</li><li>Is the cited mark <b>vulnerable to non-use</b> removal (3 years)? Check the market.</li><li>Ask the owner for a <b>letter of consent</b> or coexistence agreement.</li><li>Gather evidence of <b>honest concurrent</b> or <b>prior continuous</b> use.</li></ol>`,
            source: `${TMA} ss 44(3)–(4), 92. Practical checklist.`,
          },
        ],
        questions: [
          { type: 'match', label: 'Citation network', q: 'Match each ground to its section.', pairs: [['Prescribed sign like "Registered"', 's 39'], ['Not capable of distinguishing', 's 41'], ['Scandalous or contrary to law', 's 42'], ['Deceptive connotation', 's 43'], ['Earlier similar mark', 's 44']], explain: 'Part 4 Division 2.' },
          { type: 'tf', q: 'GLEN OAKS for bourbon was refused because it was similar to an earlier registered mark.', a: false, explain: 'It was refused under s 43: the Scottish connotation of "Glen" on bourbon was likely to deceive.' },
          { type: 'choice', q: 'Under s 44(4), what kind of use stops the Registrar rejecting an application because of an earlier mark?', options: ['Continuous use since before the other mark\'s priority date', 'Any use at all', 'Use overseas', 'Use for 3 years'], a: 0, explain: 's 44(4).' },
        ],
      },
      {
        title: 'Comparing marks',
        cards: [
          {
            kind: 'compare', margin: ['[1963] HCA 66', 's 10 TMA'],
            title: 'Two different tests',
            table: {
              head: ['', 'Substantially identical', 'Deceptively similar'],
              rows: [
                ['How', 'Side by side', 'Not side by side: against an imperfect recollection'],
                ['Focus', 'Essential features; total impression of resemblance', 'The impression on ordinary people who\'ve seen or heard the mark before'],
                ['Question', 'Are they, in substance, the same mark?', 'Does it so nearly resemble the mark that it is likely to deceive or cause confusion (s 10)?'],
              ],
            },
            core: `<p>Windeyer J in <i>Shell v Esso</i>: for substantial identity the marks are "compared side by side, their similarities and differences noted and the importance of these assessed by having regard to the essential features". For deceptive similarity "the marks are not now to be looked at side by side": compare the defendant's mark against "the impression based on recollection of the plaintiff's mark that persons of ordinary intelligence and memory would have".</p>`,
            source: `<i>Shell Co of Australia Ltd v Esso Standard Oil (Australia) Ltd</i> [1963] HCA 66, Windeyer J, as quoted in ${WJR}. ${TMA} s 10 (checked).`,
          },
          {
            kind: 'case', margin: ['[1954] HCA 82'],
            title: 'Southern Cross: the "wonder" test',
            core: `<p>SOUTHERN CROSS for refrigerators was successfully opposed by the owner of SOUTHERN CROSS for windmills, engines and milking machines. The High Court approved the test: a mark is deceptively similar if it would cause a reasonable person to <b>wonder</b> whether the two products come from the same source. Confusion, not certainty, is enough.</p>`,
            source: `<i>Southern Cross Refrigerating Co v Toowoomba Foundry Pty Ltd</i> [1954] HCA 82, as summarised in ${WJR}.`,
          },
          {
            kind: 'compare', margin: ['Examples'],
            title: 'Applying the tests',
            table: {
              head: ['Case', 'Marks', 'Result'],
              rows: [
                ['<i>Wingate v Levi Strauss</i> [1994] FCA 1001', 'REVISE vs LEVI\'S (pronounced "Ree-vise", for remade Levi\'s)', 'Deceptively similar, aurally and visually'],
                ['<i>Torpedoes v Thorpedo</i> [2003] FCA 901', 'PARADISE LEGENDS TORPEDOES and a TORPEDOES logo vs THORPEDO', 'Not substantially identical'],
                ['<i>Angoves v Johnson</i> (1982) 43 ALR 349', 'ST AGNES LIQUOR STORE vs ST AGNES', 'Not substantially identical just because one contains the other'],
                ['<i>Mars v Sweet Rewards</i> [2009] FCA 606', 'MALT BALLS vs MALTESERS', 'Different enough; MALT BALLS descriptive'],
              ],
            },
            core: '<p>Sound matters as much as look: words are spoken in shops and on the phone. Common prefixes and suffixes are discounted; the whole impression counts.</p>',
            source: `${WJR} and Wikijuris, Trade Mark Infringement (case summaries).`,
          },
          {
            kind: 'case', margin: ['[2000] HCA 12'],
            title: 'Campomar v Nike: reputation changes the answer',
            core: `<p>Campomar marketed NIKE SPORTS FRAGRANCE and applied to register it for perfumes, where Nike had no registration. The High Court found no likelihood of confusion at the 1986 application, but some likelihood by the 1992 application, after Nike's worldwide advertising.</p>
              <p>The question is judged <b>at the priority date</b>, and the other mark's <b>reputation</b> at that time matters.</p>`,
            source: `<i>Campomar Sociedad Limitada v Nike International Ltd</i> [2000] HCA 12, as summarised in ${WJR}.`,
          },
          {
            kind: 'rule', margin: ['s 14 TMA'],
            title: 'Similar goods and closely related services',
            core: `<p>Goods are <b>similar</b> if they're the same or "of the same description" (s 14). Goods and services are <b>closely related</b> if the public would expect them to come from the same business.</p>
              <p><i>Registrar v Woolworths</i> (1999): supermarket and department store retail services were closely related to many goods sold in them (meat, confectionery, clothing, toys). In <i>Gallo v Lion Nathan</i>, beer and wine were held to be goods of the same description ⚑.</p>`,
            source: `${TMA} s 14 (checked); <i>Registrar of Trade Marks v Woolworths Ltd</i> [1999] FCA 1020 and <i>E &amp; J Gallo Winery v Lion Nathan</i> [2009] FCAFC 27, as summarised in Wikijuris. ⚑ The High Court heard an appeal in <i>Gallo</i> (2010) on non-use; this card relies only on the Full Court point as Wikijuris reports it.`,
            flag: true,
          },
        ],
        questions: [
          { type: 'choice', q: 'How are marks compared for deceptive similarity?', options: ['Against an imperfect recollection of the earlier mark, not side by side', 'Side by side, feature by feature', 'By counting letters in common', 'By asking the applicant\'s intention'], a: 0, explain: '<i>Shell v Esso</i>, Windeyer J.' },
          { type: 'tf', q: 'For deceptive similarity, the owner must show people would certainly be confused.', a: false, explain: '<i>Southern Cross</i>: enough that a reasonable person would wonder whether they share a source.' },
          { type: 'similarity', label: 'Similarity index', q: 'ZOOGLE for a search engine, against a registered GOOGLE. How deceptively similar?', lo: 60, hi: 100, ends: ['Clearly different', 'Deceptively similar'], explain: 'One letter different, same sound pattern and rhythm, same services, and a famous earlier mark: very likely deceptively similar.' },
          { type: 'tf', q: 'A mark that contains an earlier registered word is always substantially identical to it.', a: false, explain: '<i>Angoves</i>: ST AGNES LIQUOR STORE was not substantially identical to ST AGNES.' },
          { type: 'choice', q: 'What changed between Campomar\'s 1986 and 1992 applications?', options: ['Nike\'s reputation in Australia had grown through advertising', 'The law changed', 'Campomar changed its mark', 'Nike registered for perfume'], a: 0, explain: '<i>Campomar v Nike</i> [2000] HCA 12.' },
        ],
      },
    ],
    outline: `<p><b>Other grounds; comparing marks.</b> Grounds: prescribed signs (s 39; reg 4.15), graphical representation (s 40), distinctiveness (s 41), scandalous/contrary to law (s 42), deceptive connotation (s 43: GLEN OAKS bourbon, <i>Scotch Whisky v De Witt</i> [2007] FCA 1649), earlier marks (s 44; honest concurrent use s 44(3); prior continuous use s 44(4)). Substantially identical: side by side, essential features, total impression (<i>Shell v Esso</i> [1963] HCA 66). Deceptively similar: likely to deceive or confuse (s 10), imperfect recollection; reasonable person caused to wonder (<i>Southern Cross</i> [1954] HCA 82). <i>Wingate</i> (REVISE/LEVI'S), <i>Torpedoes</i>, <i>Angoves</i>, <i>Mars</i>; <i>Campomar v Nike</i> [2000] HCA 12 (reputation at priority date). Similar goods s 14; closely related (<i>Woolworths</i> 1999).</p>`,
    treasures: ['Shell v Esso'],
  };

  D.units['u2-6'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Opposition and ownership',
        cards: [
          {
            kind: 'rule', margin: ['ss 52–56 TMA', 'Part 5 TMR'],
            title: 'How an opposition runs',
            core: `<ol><li><b>Notice of intention to oppose</b> within 2 months of acceptance being published (s 52; reg 5.6), then a statement of grounds and particulars.</li>
              <li>The applicant must file a <b>notice of intention to defend</b> within 2 months of receiving the statement (s 52A; reg 5.13), or the application <b>lapses</b> (s 54A).</li>
              <li><b>Evidence</b> in support, answer and reply, then a hearing.</li>
              <li>The Registrar decides to register or refuse (s 55); either side can <b>appeal</b> to the Federal Court or the Federal Circuit and Family Court (Division 2) (s 56).</li></ol>`,
            source: `${TMA} ss 52, 52A, 54A, 55, 56 (checked); ${TMR} regs 5.6, 5.13 (checked).`,
          },
          {
            kind: 'compare', margin: ['ss 57–62A TMA'],
            title: 'Grounds of opposition',
            table: {
              head: ['Section', 'Ground'],
              rows: [
                ['s 57', 'Any ground for rejection (except graphical representation)'],
                ['s 58', 'The applicant isn\'t the owner'],
                ['s 58A', 'The opponent first used a similar mark and has used it continuously (where the application got through on s 44(4))'],
                ['s 59', 'The applicant doesn\'t intend to use the mark in Australia'],
                ['s 60', 'Another mark had a reputation in Australia before the priority date, so use would be likely to deceive or confuse'],
                ['s 61', 'False geographical indication'],
                ['s 62', 'Amended contrary to the Act, or accepted on false evidence'],
                ['s 62A', 'The application was made in <b>bad faith</b>'],
              ],
            },
            core: '<p>Oppositions go wider than examination: s 58, s 60 and s 62A rely on facts the examiner can\'t see.</p>',
            source: `${TMA} ss 57–62A (checked). ${WJR}, "Grounds for Opposition".`,
          },
          {
            kind: 'rule', margin: ['s 58 TMA'],
            title: 'Who owns a trade mark?',
            core: `<p>Ownership comes from <b>authorship and first use</b>, not filing. A person who has <b>used</b> a mark in Australia first owns it, even if someone else files first. If nobody has used it, the first person to <b>create it and apply</b>, intending to use it, is the owner.</p>
              <p>So a business that has traded under a name for years can usually defeat a later-filed application by a stranger under s 58, even without registering itself.</p>`,
            source: `${WJR}, "Entitlement to Apply for Registration"; ${TMA} ss 27(1)(a), 58.`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Squatters and distributors',
            core: `<ul><li>A common problem: an overseas brand's former <b>distributor</b> or a <b>squatter</b> files for the brand in Australia. Grounds: s 58 (not the owner), s 60 (reputation), s 62A (bad faith).</li>
              <li>Distribution agreements should say who owns Australian marks and require the distributor to assign any it files.</li>
              <li>Opposition is far cheaper than cancellation after registration. <b>Watch the journal</b> for clients' key brands.</li></ul>`,
            source: `${TMA} ss 58, 60, 62A, 88. Practical points.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'If an applicant doesn\'t file a notice of intention to defend an opposition in time, the application lapses.', a: true, explain: 's 54A.' },
          { type: 'choice', q: 'A café has traded as "Bean There" since 2015 without registering. A stranger files BEAN THERE in 2026. The best opposition ground?', options: ['s 58: the applicant isn\'t the owner', 's 41: not distinctive', 's 39: prescribed sign', 's 40: can\'t be represented graphically'], a: 0, explain: 'Ownership comes from first use, not first filing.' },
          { type: 'match', label: 'Citation network', q: 'Match each opposition ground to its section.', pairs: [['Not the owner', 's 58'], ['No intention to use', 's 59'], ['Earlier reputation in Australia', 's 60'], ['Bad faith', 's 62A']], explain: 'Part 5 Division 2.' },
          { type: 'tf', q: 'An opposition can be based on the mark not being capable of being represented graphically.', a: false, explain: 's 57 excludes that one ground.' },
        ],
      },
    ],
    outline: `<p><b>Opposition and ownership.</b> Notice of intention to oppose within 2 months of acceptance being published (s 52; reg 5.6); notice of intention to defend within 2 months or the application lapses (ss 52A, 54A; reg 5.13); decision (s 55); appeal to FCA or FCFCOA (Div 2) (s 56). Grounds: rejection grounds except s 40 (s 57); not owner (s 58: first use beats first filing); opponent's earlier continuous use (s 58A); no intention to use (s 59); earlier reputation (s 60); false GI (s 61); defective (s 62); bad faith (s 62A).</p>`,
    treasures: ['First use beats first filing'],
  };
})();
