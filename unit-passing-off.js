/* Passing off & the ACL 3.1–3.4. Written and checked 11 Nov 2026 against the Competition and Consumer Act 2010 Sch 2
   (the Australian Consumer Law; Compilation No. 168, in force 27 Oct 2026) and Wikijuris, Passing Off (CC BY-SA 3.0).
   Case outcomes are as Wikijuris summarises them. See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const ACL = '<i>Competition and Consumer Act 2010</i> (Cth) Sch 2 (Australian Consumer Law), Compilation No. 168';
  const WJP = '<a href="https://wikijuris.net/ausip/passing-off/" target="_blank" rel="noopener">Wikijuris, Passing Off</a> (CC BY-SA 3.0)';

  D.units['u3-1'] = {
    lawAsAt: '27 October 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Protecting unregistered brands',
        cards: [
          {
            kind: 'guide', margin: ['CHAPTER 3'],
            title: 'Three overlapping actions',
            core: `<p>When a brand isn't registered, or the registration doesn't fit the facts, there are two other routes:</p>
              <ul><li><b>Passing off</b>: a common law tort protecting a trader's goodwill against misrepresentation.</li>
              <li><b>Misleading or deceptive conduct</b> under the Australian Consumer Law (ACL), mainly s 18 and s 29: consumer protection that traders can also use.</li></ul>
              <p>In practice, IP claims usually plead all three: trade mark infringement, passing off and the ACL.</p>`,
            source: `${WJP}, "Introduction" and "Passing Off and Misleading and Deceptive Conduct".`,
          },
          {
            kind: 'test', margin: ['ConAgra (1992)'],
            title: 'The classic trinity',
            steps: [
              '<b>Reputation or goodwill:</b> the plaintiff\'s goods, business or get-up are recognised by the public as distinctive, in the relevant area.',
              '<b>Misrepresentation:</b> by the defendant, in trade, intentional or not.',
              '<b>Damage:</b> actual or likely, because people wrongly believe the defendant\'s goods come from, or are connected with, the plaintiff.',
            ],
            core: '<p>Passing off doesn\'t stop copying or competition. It stops one trader <b>misrepresenting</b> a connection with another\'s reputation.</p>',
            source: `<i>ConAgra Inc v McCain Foods (Aust) Pty Ltd</i> (1992) 33 FCR 302, as summarised in ${WJP}, "The Elements of Passing Off".`,
          },
          {
            kind: 'rule', margin: ['Reputation'],
            title: 'What reputation means',
            core: `<ul><li>Reputation can attach to <b>any trade indicia</b>: names, get-up, packaging shape, slogans, jingles, advertising characters.</li>
              <li>Descriptive indicia must have acquired a <b>secondary meaning</b> pointing to the plaintiff (e.g. the JIF plastic lemon).</li>
              <li>The public needn't know the plaintiff's <b>name</b>, only that the goods come from one particular source.</li>
              <li>It's judged at the date the defendant's conduct <b>began</b>.</li>
              <li>Goodwill can be <b>shared</b> by a class of traders: Champagne, Advocaat.</li></ul>`,
            source: `${WJP}, "Element 1" (<i>Reckitt &amp; Colman v Borden</i> (1990) 17 IPR 1; <i>Erven Warnink v Townend</i> [1979] AC 731; <i>Bollinger v Costa Brava</i> [1960] Ch 262).`,
          },
          {
            kind: 'case', margin: ['(1990) 17 IPR 1'],
            title: 'Reckitt & Colman v Borden: the JIF lemon',
            core: `<p>Reckitt &amp; Colman had sold JIF lemon juice in a lemon-shaped plastic squeeze pack since 1956. Borden planned a similar lemon-shaped container. Evidence showed shoppers looked for the plastic lemon, not the label. The House of Lords upheld an injunction: the get-up had acquired a secondary meaning as JIF.</p>`,
            source: `${WJP} (case summary).`,
          },
          {
            kind: 'case', margin: ['[1992] FCA 159'],
            title: 'ConAgra v McCain: foreign reputation',
            core: `<p>McCain copied the name HEALTHY CHOICE from a US product not sold in Australia. ConAgra failed: you needn't have <b>traded</b> here, but you must show a reputation among a <b>substantial number</b> of people in Australia. ConAgra couldn't.</p>
              <p>Later, in <i>Hansen v Bickfords</i> (Monster Energy), Finkelstein J in the Full Court said it was open to infer that <b>indirect marketing</b> before launch (sponsoring athletes and events, merchandise) could establish a local reputation. The case settled before retrial.</p>`,
            source: `${WJP} (<i>ConAgra</i> and <i>Hansen v Bickfords</i> summaries).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Proving reputation costs money',
            core: `<ul><li>Unlike trade mark infringement, passing off requires <b>evidence of reputation</b>: sales, advertising, media coverage, surveys, witnesses. This is why clients should register.</li>
              <li>Survey evidence is admissible but courts often give it little weight on methodology grounds. Design surveys carefully (representative sample, non-leading questions, full disclosure).</li>
              <li>For overseas brands launching here, gather evidence of Australian awareness: social media reach, travel, sponsorships.</li></ul>`,
            source: `${WJP}, "Proving Reputation", "Overseas Brands", "Advantages of Trade Mark Claim".`,
          },
        ],
        questions: [
          { type: 'order', q: 'Put the classic trinity in order.', items: ['Reputation or goodwill', 'Misrepresentation', 'Damage'], explain: '<i>ConAgra</i>.' },
          { type: 'tf', q: 'A foreign brand must have sold products in Australia before it can sue for passing off here.', a: false, explain: '<i>ConAgra</i>: no actual trade needed, but a reputation among a substantial number of people in Australia.' },
          { type: 'choice', q: 'Why did Reckitt & Colman win the JIF lemon case?', options: ['Shoppers recognised the lemon-shaped pack itself as JIF', 'It had a registered design', 'Borden admitted copying', 'Lemon juice is a protected product'], a: 0, explain: 'The get-up had a secondary meaning.' },
          { type: 'tf', q: 'Many traders can share goodwill in one name, as with Champagne.', a: true, explain: '<i>Bollinger</i>; <i>Erven Warnink</i> (Advocaat).' },
        ],
      },
    ],
    outline: `<p><b>Passing off: reputation.</b> Classic trinity (<i>ConAgra</i> (1992) 33 FCR 302): reputation/goodwill; misrepresentation; damage. Reputation in any indicia; descriptive indicia need secondary meaning (<i>Reckitt &amp; Colman v Borden</i>: JIF lemon); judged when conduct began; can be shared (<i>Bollinger</i>, <i>Erven Warnink</i>). Foreign brands: reputation among a substantial number in Australia, no trade needed (<i>ConAgra</i>: HEALTHY CHOICE failed); indirect marketing may count (<i>Hansen v Bickfords</i>, Finkelstein J).</p>`,
    treasures: ['The JIF lemon'],
  };

  D.units['u3-2'] = {
    lawAsAt: '27 October 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Misrepresentation, damage and disclaimers',
        cards: [
          {
            kind: 'rule', margin: ['Misrepresentation'],
            title: 'Kinds of misrepresentation',
            core: `<p>The defendant represents, usually by implication, that:</p>
              <ol><li>its goods <b>are</b> the plaintiff's;</li><li>they come from the <b>same source</b>;</li><li>there's a <b>connection</b> between them;</li><li>the plaintiff <b>sponsors, endorses or approves</b> them; or</li><li>they share some <b>exclusive quality</b> of the plaintiff's (e.g. made in a particular place).</li></ol>
              <p>Fraud isn't required, but an intention to deceive helps prove it. Deliberately borrowing a competitor's get-up supports an inference that it was "fitted for the purpose" of deceiving (<i>Sydneywide v Red Bull</i>).</p>`,
            source: `${WJP}, "Element 2"; <i>Sydneywide Distributors v Red Bull Australia</i> [2002] FCAFC 157, as quoted there.`,
          },
          {
            kind: 'compare', margin: ['Lookalikes'],
            title: 'Copying vs misrepresenting',
            table: {
              head: ['Case', 'Facts', 'Result'],
              rows: [
                ['<i>Cadbury Schweppes v Pub Squash</i> [1980] 2 NSWLR 851 (PC)', 'Pub Squash deliberately copied the "manliness and nostalgia" themes of SOLO\'s ads', 'No passing off: similar themes didn\'t misrepresent origin'],
                ['<i>Philips v Remington</i> (2000) 100 FCR 90', 'Remington copied the triple-headed shaver design', 'No passing off: product monopolies are for patent law'],
                ['<i>Mars v Sweet Rewards</i> (2009) 81 IPR 354', 'MALT BALLS in a jar similar to MALTESERS', 'No passing off: the name MALTESERS is the main get-up'],
                ['<i>Fox v SA Brewing</i> (1996) 66 FCR 451', 'DUFF beer', 'Passing off: false impression of a licence from <i>The Simpsons</i>'],
              ],
            },
            core: '<p>Mars was "a victim of its own success": because consumers identify Maltesers by name, a different name dispelled confusion (Perram J).</p>',
            source: `${WJP} (case summaries and Perram J at [32]).`,
          },
          {
            kind: 'rule', margin: ['Damage'],
            title: 'Damage',
            core: `<p>Only a <b>likelihood</b> of damage is needed. Kinds of damage the courts accept: diverted sales; harm to reputation (e.g. inferior goods); loss of the chance to <b>expand</b> into new fields; lost <b>licensing</b> fees; and dilution of distinctiveness. Once reputation and misrepresentation are shown, damage is often presumed.</p>
              <p><i>Lego v Lemelstrich</i>: LEGO was a "household word", so LEGO garden equipment was passing off even though the toy company didn't make garden products.</p>`,
            source: `${WJP}, "Element 3" and <i>Lego System v Lego M Lemelstrich</i> (1983) 9 FSR 155 summary.`,
          },
          {
            kind: 'rule', margin: ['Disclaimers'],
            title: 'Do disclaimers work?',
            core: `<p>A disclaimer must be "as bold, precise and compelling as the trade description itself" and actually brought to buyers' attention. They work better for <b>expensive</b>, carefully inspected goods; poorly for cheap, quickly-chosen "low involvement" goods; and rarely against a very distinctive mark. Tamberlin J in <i>Duff</i>: there is "no formula" of words like "unauthorised" that will always dispel an association.</p>`,
            source: `${WJP}, "Disclaimers" (incl. Tamberlin J in <i>Twentieth Century Fox v SA Brewing</i>).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Advising on a lookalike product',
            core: `<ul><li>Copying a product's <b>features</b> isn't passing off by itself. Copying its <b>distinctive get-up</b> (name, colours, packaging shape) in a way that misleads is.</li>
              <li>A clear, prominent <b>different brand name</b> is the strongest protection (<i>Mars</i>, <i>Parkdale</i>).</li>
              <li>Internal emails showing an intention to "get close" to a competitor are damaging evidence (<i>Red Bull</i>, <i>Duff</i>).</li>
              <li>Remedies: injunction and damages; an account of profits and exemplary damages may be available where there's fraud. There are no statutory additional damages as there are for trade marks.</li></ul>`,
            source: `${WJP}, "Remedies" and "Advantages of Trade Mark Claim over Passing Off".`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Passing off requires proof that the defendant intended to deceive.', a: false, explain: 'Fraud isn\'t an element, though intent helps prove deception.' },
          { type: 'choice', q: 'Why did Mars lose its passing off claim against MALT BALLS?', options: ['The name MALTESERS was the key part of its get-up, and MALT BALLS was different', 'Mars had no reputation', 'Red balls are protected by patent', 'Sweet Rewards had a licence'], a: 0, explain: 'Perram J: Mars was a victim of its own success.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Passing off, or not?', buckets: ['Passing off', 'Not passing off'], items: [{ t: 'DUFF beer', b: 0 }, { t: 'LEGO garden equipment', b: 0 }, { t: 'Pub Squash copying SOLO\'s ad themes', b: 1 }, { t: 'Remington copying the shaver design', b: 1 }], explain: 'Case summaries in Wikijuris.' },
          { type: 'tf', q: 'A small "unauthorised" disclaimer on a cheap product will usually prevent passing off.', a: false, explain: 'Disclaimers must be bold and compelling, and rarely work on low-involvement goods.' },
        ],
      },
    ],
    outline: `<p><b>Misrepresentation and damage.</b> Forms: same goods, same source, connection, endorsement, shared quality. Intention not required but helps (<i>Red Bull</i> [2002] FCAFC 157). Copying isn't misrepresentation: <i>Pub Squash</i> (ad themes), <i>Philips v Remington</i> (product design), <i>Mars v Sweet Rewards</i> (MALT BALLS). <i>Duff</i> beer: false licence. Damage: likelihood; diverted sales, reputation, expansion (<i>Lego</i>), licensing, dilution. Disclaimers must be bold and compelling; weak for cheap goods. Remedies: injunction, damages; account of profits/exemplary for fraud.</p>`,
    treasures: ['Duff beer'],
  };

  D.units['u3-3'] = {
    lawAsAt: '27 October 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Misleading or deceptive conduct',
        cards: [
          {
            kind: 'statute', margin: ['s 18 ACL'],
            title: 'The most-used provision in Australian commercial law',
            statute: { cite: 's 18(1) ACL', text: 'A person must not, <mark>①</mark> in trade or commerce, engage in conduct that is <mark>②</mark> misleading or deceptive or is <mark>③</mark> likely to mislead or deceive.', notes: ['① business activity, not private dealings', '② no intention needed', '③ actual deception isn\'t required'] },
            core: `<p>s 18 has no reputation requirement and no need for intention. It overlaps heavily with passing off, so IP disputes routinely plead both.</p>`,
            source: `${ACL} s 18 (quoted).`,
          },
          {
            kind: 'rule', margin: ['s 29 ACL'],
            title: 's 29: specific false representations',
            core: `<p>s 29(1) prohibits false or misleading representations, in connection with goods or services, including that they:</p>
              <ul><li>are of a particular <b>standard, quality, style or model</b> (a);</li>
              <li>have <b>sponsorship, approval</b> or particular benefits (g), or that the trader has a sponsorship, approval or <b>affiliation</b> (h);</li>
              <li>come from a particular <b>place of origin</b> (k);</li>
              <li>involve a <b>testimonial</b> (e)–(f): presumed misleading unless evidence is adduced to the contrary (s 29(2)).</li></ul>`,
            source: `${ACL} s 29 (checked).`,
          },
          {
            kind: 'case', margin: ['(1982) 149 CLR 191'],
            title: 'Parkdale v Puxu: the ordinary reasonable buyer',
            exp: {
              n: 1, cite: '(1982) 149 CLR 191',
              hyp: 'Making near-identical copies of a rival\'s distinctive furniture is misleading conduct.',
              method: 'Parkdale sold cheaper copies of Puxu\'s expensive, well-known furniture. Both labelled their furniture, though the labels could be tucked out of sight.',
              result: 'Not misleading. Buyers of $1,500 furniture would look for a label; properly labelled goods don\'t mislead an ordinary reasonable person, however similar.',
              ok: false,
              discussion: 'Causing people to wonder isn\'t enough under s 18 (unlike deceptive similarity in trade marks). Price and buying habits matter.',
            },
            source: `<i>Parkdale Custom Built Furniture v Puxu</i> (1982) 149 CLR 191 (under TPA s 52, now ACL s 18), as summarised in ${WJP}.`,
          },
          {
            kind: 'rule', margin: ['Campomar (2000)'],
            title: 'Who must be misled?',
            core: `<p>Where conduct is aimed at the public, the court identifies the <b>class</b> of consumers likely to be affected, then asks whether a hypothetical <b>ordinary or reasonable member</b> of that class would likely be misled. That person takes reasonable care: neither especially gullible nor especially astute.</p>
              <p>More expensive goods mean more careful buyers; side-by-side display makes confusion less likely.</p>`,
            source: `${WJP}, "Fraud is Not an Essential Element" (citing <i>Campomar v Nike</i> [2000] HCA 12 and <i>Parkdale</i>).`,
          },
          {
            kind: 'compare', margin: ['ss 224, 232, 236 ACL'],
            title: 'Remedies and enforcement',
            table: {
              head: ['', 's 18', 's 29'],
              rows: [
                ['Injunction (s 232)', 'Yes, by the ACCC or anyone', 'Yes'],
                ['Damages (s 236)', 'Yes, within 6 years', 'Yes'],
                ['Pecuniary penalties (s 224)', '<b>No</b>', '<b>Yes</b>: for companies up to the greater of $100 million, 3× the benefit, or 30% of adjusted turnover'],
              ],
            },
            core: '<p>That\'s why regulators plead s 29 alongside s 18.</p>',
            source: `${ACL} ss 224(1), (3)–(3A), 232, 236 (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Reviewing marketing',
            core: `<ul><li>Judge the <b>overall impression</b>, including fine print, imagery and what's left out.</li>
              <li>"Inspired by", "compare to", or another brand's logo can suggest affiliation (s 29(1)(h)).</li>
              <li>Fake or incentivised reviews and testimonials are presumed misleading (s 29(2)).</li>
              <li>Statements about the <b>future</b> need reasonable grounds; s 4 deals with those.</li></ul>`,
            source: `${ACL} ss 4, 18, 29.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A breach of s 18 requires an intention to mislead.', a: false, explain: 's 18: conduct that is misleading or likely to mislead, whatever the intention.' },
          { type: 'choice', q: 'Why was Parkdale\'s copied furniture not misleading?', options: ['Buyers of expensive furniture would check the label', 'The designs were different', 'Puxu had no reputation', 'Parkdale had a licence'], a: 0, explain: '<i>Parkdale v Puxu</i>.' },
          { type: 'tf', q: 'Courts can impose pecuniary penalties for breaching s 18.', a: false, explain: 's 224 covers s 29 (Part 3-1) but not s 18.' },
          { type: 'match', label: 'Citation network', q: 'Match each provision to its role.', pairs: [['s 18', 'General misleading or deceptive conduct'], ['s 29', 'Specific false representations'], ['s 232', 'Injunctions'], ['s 236', 'Damages']], explain: 'ACL.' },
          { type: 'tf', q: 'A testimonial is taken to be misleading unless evidence is adduced to the contrary.', a: true, explain: 's 29(2).' },
        ],
      },
    ],
    outline: `<p><b>Misleading or deceptive conduct.</b> ACL s 18: in trade or commerce, misleading or deceptive or likely to be; no intention. s 29: false or misleading representations incl. standard/quality (a), sponsorship/approval (g), affiliation (h), origin (k), testimonials presumed misleading (s 29(2)). <i>Parkdale v Puxu</i> (1982) 149 CLR 191: labelled copies of expensive furniture not misleading; causing wonder not enough. Ordinary reasonable member of the class (<i>Campomar</i>). Remedies: injunctions (s 232), damages within 6 years (s 236); penalties for s 29 not s 18 (s 224: up to greater of $100m, 3× benefit, 30% turnover).</p>`,
    treasures: ['Parkdale v Puxu'],
  };

  D.units['u3-4'] = {
    lawAsAt: '27 October 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Endorsement and character merchandising',
        cards: [
          {
            kind: 'rule', margin: ['Extended passing off'],
            title: 'Using fame to sell',
            core: `<p>Australia has no general "image right" or right of publicity. Instead, celebrities and character owners use <b>passing off</b> and <b>ACL ss 18 and 29(1)(g)–(h)</b>: unauthorised use of their image suggests they <b>endorse</b> or are <b>connected</b> with the product.</p>
              <ul><li><b>Celebrity endorsement:</b> using a real person's name or image.</li>
              <li><b>Character merchandising:</b> using a fictional character's reputation to sell unrelated goods.</li></ul>`,
            source: `${WJP}, "Extension of Passing Off"; ${ACL} s 29(1)(g)–(h).`,
          },
          {
            kind: 'case', margin: ['(1960) 60 SR (NSW) 576'],
            title: 'Henderson v Radio Corp: the ballroom dancers',
            core: `<p>A photo of two well-known ballroom dancers appeared on the cover of a dance music record without their permission. The NSW Supreme Court held this was passing off: buyers could think the Hendersons had approved or recommended the record. There was <b>no need for a common field of activity</b> between the dancers and the record company.</p>`,
            source: `${WJP} (case summary).`,
          },
          {
            kind: 'case', margin: ['[1988] FCA 333', '[1989] FCA 185'],
            title: 'The Crocodile Dundee cases',
            core: `<p><i>Hogan v Koala Dundee</i>: the creator of a sufficiently famous fictional character can stop others using it to sell goods. Pincus J saw the wrong as "the wrongful appropriation of a reputation or, more widely, wrongful association of goods with an image properly belonging to the applicant", not just a misrepresented licence.</p>
              <p><i>Pacific Dunlop v Hogan</i>: Burchett J explained why an unauthorised ad evoking Crocodile Dundee misleads: the consumer wants "something belonging in some sense to Crocodile Dundee", so a product he didn't authorise "really lacks the one feature the advertisement attributes to it".</p>`,
            source: `${WJP} (quotations from Pincus J and Burchett J).`,
          },
          {
            kind: 'compare', margin: ['Examples'],
            title: 'Endorsement or not?',
            table: {
              head: ['Case', 'Use', 'Result'],
              rows: [
                ['<i>Talmax v Telstra</i> [1997] 2 Qd R 444', 'Kieren Perkins in a Telecom promotion', 'Suggested endorsement: liable'],
                ['<i>Irvine v Talksport</i> [2002] EWHC 367 (Ch)', 'A doctored photo of an F1 driver holding the defendant\'s radio', 'A clear endorsement'],
                ['<i>Honey v Australian Airlines</i> [1988] FCA 177', 'An athlete on one of a series of sports posters', 'Not endorsement: promoted sport generally'],
                ['<i>Children\'s Television Workshop v Woolworths</i> [1981] 1 NSWLR 273', 'Lookalike Sesame Street toys', 'Misled people (especially children) into thinking they were licensed'],
              ],
            },
            core: '<p>The question is always whether a significant section of the audience would think there\'s a <b>commercial arrangement</b>.</p>',
            source: `${WJP} (case summaries; Beaumont J in <i>Pacific Dunlop</i>).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Influencers and celebrity content',
            core: `<ul><li>Using a recognisable person in marketing without consent is risky even when you own the <b>copyright</b> in the photo. Copyright and endorsement are separate questions.</li>
              <li>Get written consent and a clear licence for any person or character used in marketing.</li>
              <li>For influencer campaigns, make sure paid posts are disclosed. Hidden commercial arrangements can themselves be misleading under the ACL.</li></ul>`,
            source: `${WJP} (<i>Buttrose v Senior's Choice</i> [2013] FCCA 2050: copyright, passing off and ACL together); ${ACL} ss 18, 29.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Australia has a general statutory right of publicity protecting celebrities\' images.', a: false, explain: 'Celebrities rely on passing off and the ACL.' },
          { type: 'tf', q: 'In Henderson, the dancers had to show they worked in the same field as the record company.', a: false, explain: 'No common field of activity was needed.' },
          { type: 'choice', q: 'What is the key question in endorsement cases?', options: ['Would a significant section of the audience think there\'s a commercial arrangement?', 'Is the celebrity famous overseas?', 'Did the defendant pay for the photo?', 'Is the product expensive?'], a: 0, explain: 'Beaumont J in <i>Pacific Dunlop v Hogan</i>.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Did the use suggest endorsement?', buckets: ['Suggested endorsement', 'Did not'], items: [{ t: 'Kieren Perkins in a Telecom promotion', b: 0 }, { t: 'A doctored photo of a driver holding a radio', b: 0 }, { t: 'An athlete in a general sports poster series', b: 1 }], explain: 'Case summaries in Wikijuris.' },
        ],
      },
    ],
    outline: `<p><b>Endorsement and character merchandising.</b> No general right of publicity; use passing off and ACL ss 18, 29(1)(g)–(h). <i>Henderson v Radio Corp</i> (1960): dancers on record cover, no common field needed. <i>Hogan v Koala Dundee</i> [1988] FCA 333 (appropriation of reputation); <i>Pacific Dunlop v Hogan</i> [1989] FCA 185 (unauthorised association misleading). <i>Talmax v Telstra</i> (Perkins); <i>Irvine v Talksport</i>; <i>Honey v Australian Airlines</i> (no endorsement); <i>CTW v Woolworths</i> (Sesame Street toys). Question: would a significant section think there's a commercial arrangement?</p>`,
    treasures: ['Crocodile Dundee'],
  };
})();
