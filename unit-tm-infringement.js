/* Trade marks 2.7–2.11 · Duration and non-use; use as a trade mark; infringement; defences and parallel imports;
   certification marks and GIs. Written and checked 11 Nov 2026 against the Trade Marks Act 1995 (Compilation No. 48),
   the Wine Australia Act 2013 (Compilation No. 42) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const TMA = '<i>Trade Marks Act 1995</i> (Cth), Compilation No. 48';
  const WAA = '<i>Wine Australia Act 2013</i> (Cth), Compilation No. 42';
  const WJI = '<a href="https://wikijuris.net/ausip/trade-mark-infringement/" target="_blank" rel="noopener">Wikijuris, Trade Mark Infringement &amp; Defences</a> (CC BY-SA 3.0)';
  const WJO = '<a href="https://wikijuris.net/ausip/trade-mark-overview/" target="_blank" rel="noopener">Wikijuris, Trade Mark Overview</a> (CC BY-SA 3.0)';

  D.units['u2-7'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Keeping a registration alive',
        cards: [
          {
            kind: 'rule', margin: ['ss 72, 77–79 TMA'],
            title: 'Forever, if you renew and use it',
            core: `<p>A registration lasts <b>10 years from the filing date</b> and can be renewed for further 10-year periods without limit (ss 72(3), 77). Renewal needs only a request and the fee; you don't prove use to renew. Wikijuris says renewal requires "continuous use"; the Act doesn't.</p>
              <p>But an unused mark is vulnerable to <b>removal for non-use</b> by anyone, at any time after the 3-year mark.</p>`,
            source: `${TMA} ss 72(3), 75, 77–79 (checked). Wikijuris, Trade Mark Registration and Infringement ("renewed … as long as the trade mark is still in use") corrected against the Act.`,
          },
          {
            kind: 'statute', margin: ['s 92(4) TMA'],
            title: 'Removal for non-use',
            statute: { cite: 's 92(4)(b) TMA', text: 'that the trade mark has remained registered for a <mark>①</mark> continuous period of 3 years ending one month before the day on which the nonuse application is filed, and, at no time during that period, the person who was then the registered owner: (i) used the trade mark in Australia; or (ii) <mark>②</mark> used the trade mark in good faith in Australia; in relation to the goods and/or services to which the application relates.', notes: ['① can\'t be brought until 3 years after registration details are entered (s 93(2))', '② token use to block removal isn\'t enough'] },
            core: `<p>The other ground (s 92(4)(a)) is that the applicant had <b>no good-faith intention to use</b> when it filed, and hasn't used it since. The <b>owner</b> must prove use (s 100), and the Registrar or court has a <b>discretion</b> not to remove it, e.g. because of use on similar goods (s 101(3)–(4)). Removal can be partial, goods by goods.</p>`,
            source: `${TMA} ss 92(4), 93, 100, 101 (quoted and checked).`,
          },
          {
            kind: 'rule', margin: ['ss 88, 24, 106 TMA'],
            title: 'Cancellation, genericide and assignment',
            core: `<ul><li><b>Rectification</b> (s 88): a court can cancel a registration on any opposition ground, for fraud or misrepresentation, or because use of the mark is now likely to deceive or confuse.</li>
              <li><b>Genericide</b> (s 24): if a registered sign becomes "generally accepted within the relevant trade" as the name of an article or service, the owner loses exclusive rights in it for those goods.</li>
              <li><b>Assignment</b> (s 106): a registered mark can be assigned with or without goodwill, partially by goods or services, but not by area.</li>
              <li><b>Licensing</b>: use by a licensee under the owner's <b>control</b> (quality or financial) is the owner's use (ss 7(3), 8).</li></ul>`,
            source: `${TMA} ss 7(3), 8, 24, 88, 106 (checked).`,
          },
          {
            kind: 'case', margin: ['[2026] HCA 5 ⚑'], flag: true,
            title: 'Taylor v Killer Queen: Katie Perry v Katy Perry',
            core: `<p>An Australian designer, Katie Taylor, registered KATIE PERRY for clothing. The US singer's companies sold merchandise under KATY PERRY in Australia and sought cancellation of Ms Taylor's registration. On 11 March 2026 the High Court reportedly decided 3–2 for Ms Taylor, restoring her registration and finding infringement, with some issues sent back to the Federal Court.</p>
              <p>It's a reminder that a <b>famous foreign name doesn't beat an earlier Australian registration</b> by itself.</p>`,
            source: '⚑ Outcome from secondary reports only; the judgment couldn\'t be opened and the case isn\'t in Wikijuris. Read the judgment before relying on any detail.',
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Non-use: sword and shield',
            core: `<ul><li><b>Sword:</b> a cited earlier mark blocking your client's application may be unused. Investigate, and file a non-use application to clear the way.</li>
              <li><b>Shield:</b> remind clients to <b>keep evidence of use</b> for every registered class (dated invoices, packaging, web captures). An infringement claim often triggers a non-use counter-attack.</li>
              <li>Use the mark <b>as registered</b>: minor changes are OK if they don't substantially affect its identity (s 7(1)).</li></ul>`,
            source: `${TMA} ss 7(1), 92, 100, 127.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'To renew a registration, the owner must prove the mark is being used.', a: false, explain: 'Renewal needs a request and fee (ss 75, 77). Non-use is dealt with by removal applications.' },
          { type: 'choice', q: 'What is the non-use period under s 92(4)(b)?', options: ['3 continuous years ending 1 month before the application', '5 years', '1 year', '10 years'], a: 0, explain: 's 92(4)(b).' },
          { type: 'tf', q: 'In a non-use removal, the person applying for removal must prove the owner didn\'t use the mark.', a: false, explain: 's 100: the owner (the "opponent") must rebut the allegation by establishing use.' },
          { type: 'tf', q: 'A registered trade mark can be assigned without the goodwill of the business.', a: true, explain: 's 106(3).' },
          { type: 'choice', q: 'What is genericide?', options: ['The mark becomes generally accepted as the name of the product', 'The owner stops renewing', 'Someone copies the logo', 'The mark is assigned to a competitor'], a: 0, explain: 's 24.' },
        ],
      },
    ],
    outline: `<p><b>Duration, non-use, cancellation.</b> 10 years from filing, renewable indefinitely (ss 72(3), 77); no use requirement to renew. Non-use removal (s 92(4)): (a) no good-faith intention to use at filing and no use; (b) 3 continuous years ending 1 month before application without good-faith use; not until 3 years after entry (s 93); owner bears burden (s 100); discretion (s 101(3)–(4)). Rectification (s 88); genericide (s 24); assignment with or without goodwill, not by area (s 106); licensee use under control is owner's use (ss 7(3), 8). <i>Taylor v Killer Queen</i> [2026] HCA 5 ⚑.</p>`,
    treasures: ['Katie Perry v Katy Perry'],
  };

  D.units['u2-8'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Is it being used as a trade mark?',
        cards: [
          {
            kind: 'rule', margin: ['s 120 TMA', 's 17 TMA'],
            title: 'The threshold question',
            core: `<p>Every kind of infringement in s 120 requires the defendant to use the sign <b>"as a trade mark"</b>: as a badge of origin, to indicate a connection in the course of trade between the goods and the person using it.</p>
              <p>Using a word to <b>describe</b> the product, to send some other <b>message</b>, or to <b>refer</b> to someone else's product isn't using it as a trade mark, and so isn't infringement, however similar it is.</p>`,
            source: `${TMA} ss 17, 120 (checked). ${WJI}, "Use".`,
          },
          {
            kind: 'case', margin: ['[1963] HCA 66'],
            title: 'Shell v Esso: the oil-drop man',
            core: `<p>Esso had registered marks of a cartoon oil-drop figure. Shell's TV ad featured a similar animated oil-drop man. Not infringement: the figure's purpose was "conveying … a particular message about the qualities of Shell petrol". No viewer would pick out a frame and think "there I see something that the Shell people are showing me as being a mark".</p>`,
            source: `<i>Shell Co of Australia Ltd v Esso Standard Oil</i> [1963] HCA 66, Kitto J, as quoted in ${WJI}.`,
          },
          {
            kind: 'compare', margin: ['Examples'],
            title: 'Use as a mark, or not?',
            table: {
              head: ['Case', 'Use', 'As a trade mark?'],
              rows: [
                ['<i>J&amp;J v Sterling</i> [1991] FCA 310', 'CAPLETS on paracetamol', 'No: descriptive of shape and dosage'],
                ['<i>Top Heavy v Killin</i> (1996) 34 IPR 282', 'CHILL OUT on T-shirts', 'No: an exhortation to relax, not an origin'],
                ['<i>Musidor v Tansing</i> [1993] FCA 645', 'ROLLING STONES on bootleg CDs with a disclaimer', 'No: identified the band, disclaimed connection'],
                ['<i>Fox v SA Brewing</i> [1996] FCA 1484', 'DUFF on beer', 'Yes: no disclaimer, a deliberate reference to <i>The Simpsons</i>'],
                ['<i>Coca-Cola v All-Fect</i> [1999] FCA 1721', 'Cola bottle-shaped lollies', 'No connection with Coca-Cola (and not similar enough)'],
              ],
            },
            core: '<p>Context decides: placement, size, other branding on the product, and any disclaimers.</p>',
            source: `${WJI} (case summaries).`,
          },
          {
            kind: 'case', margin: ['[2023] HCA 8 ⚑'], flag: true,
            title: 'Self Care v Allergan: "instant Botox® alternative"',
            core: `<p>Allergan owns BOTOX. Self Care sold an anti-wrinkle cream called PROTOX and marketed it as an "instant Botox® alternative". The High Court reportedly held that the "Botox alternative" phrase wasn't use of BOTOX <b>as a trade mark</b> (it referred to Allergan's product to compare), and that PROTOX wasn't deceptively similar to BOTOX.</p>`,
            source: '⚑ <i>Self Care IP Holdings Pty Ltd v Allergan Australia Pty Ltd</i> [2023] HCA 8. Not in Wikijuris and the judgment couldn\'t be opened; outcome from secondary sources. Check before relying on it.',
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Referring to other brands',
            core: `<ul><li>"Compatible with…", "suits…", "alternative to…": usually not use as a trade mark if it's plainly referential and your client's own brand is prominent. s 122(1)(c) and (d) also protect intended-purpose and comparative uses (unit 2.10).</li>
              <li>The risk rises when the other brand is <b>larger</b> than your client's, in a <b>logo style</b>, or used in <b>keywords and metatags</b> in a way that suggests a connection.</li>
              <li>Check the <b>Australian Consumer Law</b> too: a statement can be misleading even if it isn't trade mark use (chapter 3).</li></ul>`,
            source: `${TMA} ss 120, 122(1)(c)–(d); ${WJI}.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Using a sign identical to a registered mark always infringes if it\'s for the same goods.', a: false, explain: 'It must be used as a trade mark: descriptive or referential use doesn\'t infringe.' },
          { type: 'choice', q: 'Why wasn\'t Shell\'s oil-drop man an infringement?', options: ['It conveyed a message about Shell petrol, not a badge of origin', 'It wasn\'t similar', 'Esso\'s mark had lapsed', 'Shell had a licence'], a: 0, explain: '<i>Shell v Esso</i>.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Use as a trade mark, or not?', buckets: ['Use as a trade mark', 'Not use as a trade mark'], items: [{ t: 'DUFF on beer cans', b: 0 }, { t: 'CAPLETS describing tablet shape', b: 1 }, { t: 'CHILL OUT as a slogan on a T-shirt', b: 1 }, { t: 'ROLLING STONES identifying the band on a disclaimed bootleg', b: 1 }], explain: 'Case summaries in Wikijuris.' },
          { type: 'tf', q: 'A clear disclaimer can help show a sign isn\'t being used as a trade mark.', a: true, explain: '<i>Musidor</i> (disclaimer) vs <i>Duff</i> (no disclaimer).' },
        ],
      },
    ],
    outline: `<p><b>Use as a trade mark.</b> Threshold for all s 120 infringement: use as a badge of origin. <i>Shell v Esso</i> [1963] HCA 66 (oil-drop man conveyed a message); <i>J&amp;J v Sterling</i> [1991] FCA 310 (CAPLETS descriptive); <i>Top Heavy v Killin</i> (CHILL OUT exhortation); <i>Musidor</i> (disclaimed bootleg); <i>Duff</i> beer (infringed); <i>Coca-Cola v All-Fect</i> (cola lollies); <i>Self Care v Allergan</i> [2023] HCA 8 ⚑ ("Botox alternative" referential; PROTOX not similar).</p>`,
    treasures: ['The oil-drop man'],
  };

  D.units['u2-9'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Three kinds of infringement',
        cards: [
          {
            kind: 'compare', margin: ['s 120 TMA'],
            title: 's 120(1), (2) and (3)',
            table: {
              head: ['', 'Goods or services', 'Extra elements'],
              rows: [
                ['s 120(1)', 'The <b>registered</b> goods or services', 'None: use as a mark + substantially identical or deceptively similar'],
                ['s 120(2)', 'Goods of the <b>same description</b>, or <b>closely related</b> services (and vice versa)', 'Defendant escapes if it proves its use is <b>not likely to deceive or confuse</b>'],
                ['s 120(3)', '<b>Unrelated</b> goods or services', 'Mark <b>well known</b> in Australia; likely taken as indicating a <b>connection</b>; owner\'s interests likely <b>adversely affected</b>'],
              ],
            },
            core: '<p>The further the defendant\'s goods are from the specification, the more the owner has to prove.</p>',
            source: `${TMA} s 120 (checked). ${WJI}, "Types of Infringement".`,
          },
          {
            kind: 'case', margin: ['[2009] FCAFC 27'],
            title: 'Gallo v Lion Nathan: wine and beer',
            core: `<p>Gallo owned BAREFOOT for wine. Lion Nathan sold BAREFOOT RADLER beer. The Full Federal Court held beer and wine were <b>goods of the same description</b>, so s 120(2) applied.</p>`,
            source: `<i>E &amp; J Gallo Winery v Lion Nathan Australia</i> [2009] FCAFC 27, as summarised in ${WJI}. ⚑ The case went on to the High Court (2010) on non-use; that decision isn't covered here.`,
            flag: true,
          },
          {
            kind: 'rule', margin: ['s 120(3)–(4) TMA'],
            title: 'Well-known marks',
            core: `<p>Whether a mark is "well known in Australia" takes account of how well it's known "within the relevant sector of the public", through promotion or otherwise (s 120(4)).</p>
              <ul><li><i>Nintendo v Care</i> [2000] FCA 1538: SUPER MARIO stopped a wrestler performing as "Da Super Mario".</li>
              <li><i>Virgin v Klapsas</i> [2001] FCA 1502: VIRGIN limousines and rentals restrained, given Virgin's investment in its brand.</li>
              <li><i>San Remo Macaroni v San Remo Gourmet Coffee</i> [2000] FCA 1842: a serious question whether SAN REMO on coffee machines infringed the pasta mark (an interim decision).</li></ul>`,
            source: `${TMA} s 120(3)–(4) (checked); ${WJI} (case summaries).`,
          },
          {
            kind: 'critique', margin: ['POLICY'],
            title: 'No general anti-dilution law',
            core: `<p>The US and EU protect famous marks against <b>dilution</b>: <b>blurring</b> (using KODAK on motorcycles weakens its distinctiveness) and <b>tarnishment</b> (association with something unsavoury), without needing confusion. Australia's s 120(3) still requires a likely <b>connection</b> and harm to the owner's interests; whether it amounts to dilution protection is debated. In <i>Campomar v Nike</i> the High Court stressed balancing protection against consumers' access to competition.</p>`,
            source: `${WJI}, "Types of Trade Mark Dilution" and "Anti-dilution".`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Infringement checklist',
            core: `<ol><li>Is the mark <b>registered</b>, and for what?</li><li>Is the defendant using its sign <b>as a trade mark</b> (2.8)?</li><li>Is it <b>substantially identical or deceptively similar</b> (2.5)?</li><li>Which <b>goods/services</b> band: (1), (2) or (3)?</li><li>Any <b>defence</b> (2.10)? Any <b>non-use</b> or validity counter-attack (2.7)?</li></ol>
              <p>Run the same checklist before sending, or answering, a letter of demand.</p>`,
            source: `${TMA} ss 88, 92, 120, 122. Practical checklist.`,
          },
        ],
        questions: [
          { type: 'match', label: 'Citation network', q: 'Match each subsection to its scope.', pairs: [['s 120(1)', 'Registered goods or services'], ['s 120(2)', 'Same description or closely related'], ['s 120(3)', 'Unrelated goods, well-known mark']], explain: 's 120.' },
          { type: 'tf', q: 'Under s 120(2), the defendant can escape by proving its use is not likely to deceive or cause confusion.', a: true, explain: 's 120(2), final words.' },
          { type: 'choice', q: 'What must the owner show under s 120(3) besides a well-known mark and similarity?', options: ['A likely connection with the owner, and likely harm to its interests', 'Actual sales lost', 'Fraud', 'Registration in every class'], a: 0, explain: 's 120(3)(c)–(d).' },
          { type: 'tf', q: 'In Gallo v Lion Nathan, beer and wine were held to be goods of the same description.', a: true, explain: '[2009] FCAFC 27 as summarised by Wikijuris.', flag: true },
        ],
      },
    ],
    outline: `<p><b>Infringement.</b> s 120(1): registered goods/services. s 120(2): same description/closely related; defendant may prove no likely deception or confusion. s 120(3): well-known (s 120(4): relevant sector of public) + unrelated goods + likely connection + adverse effect. <i>Gallo v Lion Nathan</i> [2009] FCAFC 27 (beer/wine same description) ⚑ on later history; <i>Nintendo v Care</i>; <i>Virgin v Klapsas</i>; <i>San Remo</i>. No general anti-dilution (blurring, tarnishment).</p>`,
    treasures: ['Well-known marks'],
  };

  D.units['u2-10'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Defences, parallel imports and remedies',
        cards: [
          {
            kind: 'compare', margin: ['s 122 TMA'],
            title: 'The s 122 defences',
            table: {
              head: ['Section', 'Defence'],
              rows: [
                ['s 122(1)(a)', 'Good-faith use of your <b>own name</b> or place of business (or a predecessor\'s)'],
                ['s 122(1)(b)', 'Good-faith use of a sign to <b>describe</b> kind, quality, quantity, purpose, value, origin or time of production'],
                ['s 122(1)(c)', 'Good-faith use to indicate <b>intended purpose</b> (e.g. accessories, spare parts)'],
                ['s 122(1)(d)', '<b>Comparative advertising</b>'],
                ['s 122(1)(e)', 'Exercising a right to use a trade mark given under the Act'],
                ['s 122(1)(f)–(fa)', 'The defendant <b>would obtain registration</b> of the mark (or a similar one) if it applied'],
                ['s 122(2)', 'Using a <b>disclaimed</b> part of the mark'],
              ],
            },
            core: '<p>"Good faith" means no ulterior motive; it isn\'t lost just because the marks are strikingly similar.</p>',
            source: `${TMA} s 122 (checked). ${WJI} (<i>Angoves v Johnson</i> (1982) 43 ALR 349; <i>Geoffrey v Luik</i> (1997) 38 IPR 555 on good faith).`,
          },
          {
            kind: 'statute', margin: ['s 122A TMA'],
            title: 'Parallel imports (exhaustion)',
            statute: { cite: 's 122A(1) TMA', text: 'a person who uses a registered trade mark in relation to goods does not infringe the trade mark if: (a) the goods are similar to goods in respect of which the trade mark is registered; and (b) before the time of use, the person had made <mark>①</mark> reasonable inquiries …; and (c) at the time of use, a reasonable person … would have concluded that the trade mark had been applied to … the goods by, or <mark>②</mark> with the consent of, a person who was … the registered owner … an authorised user … [or] an associated entity …', notes: ['① the importer must actually investigate', '② includes conditional consent, e.g. "sell only overseas" (s 122A(2))'] },
            core: `<p>Genuine goods put on the market overseas by or with the consent of the owner (or its group companies or licensees) can be imported and sold in Australia. Inserted in 2018 to replace the old s 123 for goods; s 123 still covers services.</p>`,
            source: `${TMA} ss 122A (quoted), 123 (checked). Inserted by the <i>IP Laws Amendment (Productivity Commission Response Part 1 and Other Measures) Act 2018</i>, per ${WJI} and the syllabus check.`,
          },
          {
            kind: 'rule', margin: ['s 124 TMA'],
            title: 'Prior continuous use',
            core: `<p>Someone who has <b>continuously used</b> an unregistered similar mark since before the registered owner's registration date or first use (whichever is earlier) doesn't infringe (s 124), but only in the <b>area</b> where they've used it (s 124(2)).</p>`,
            source: `${TMA} s 124 (checked).`,
          },
          {
            kind: 'rule', margin: ['ss 126, 129, 130A, 132, 151 TMA'],
            title: 'Remedies, threats, customs and the ® symbol',
            core: `<ul><li><b>Remedies</b> (s 126): injunction; damages <em>or</em> an account of profits; <b>additional damages</b> for flagrancy, deterrence, conduct after notice, and benefit.</li>
              <li><b>Unjustified threats</b> (s 129): anyone aggrieved by a threat of infringement proceedings can sue for a declaration, injunction and damages, unless the threat is justified (the mark is registered and the acts infringe). Merely notifying that a mark is registered isn't a threat (s 130A). Lawyers and attorneys acting professionally aren't liable (s 129(6)).</li>
              <li><b>Customs</b> (s 132): an owner can lodge a notice of objection to block infringing imports; it lasts 4 years.</li>
              <li><b>® and "Registered"</b>: falsely representing that a mark is registered in Australia is an offence (s 151).</li></ul>`,
            source: `${TMA} ss 126, 129, 130A, 132, 151 (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Letters of demand',
            core: `<ul><li>Before sending: check registration, use as a mark, similarity, goods, defences, and the client's own exposure to <b>non-use</b>. An overstated letter can trigger an <b>unjustified threats</b> claim against the client.</li>
              <li>When receiving one: run the same checklist, check the owner's registration for non-use, and look for s 122, 122A and 124 defences.</li>
              <li>Clients putting ® on unregistered marks (or marks registered only overseas) commit an offence: use ™ instead.</li></ul>`,
            source: `${TMA} ss 92, 122, 122A, 124, 129, 151.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Selling genuine branded goods bought overseas from the brand owner\'s licensee can be a defence to infringement in Australia.', a: true, explain: 's 122A: applied with the consent of an authorised user or associated entity, after reasonable inquiries.' },
          { type: 'tf', q: 'Simply telling someone that your client\'s trade mark is registered is an unjustified threat.', a: false, explain: 's 130A.' },
          { type: 'choice', q: 'Which is a remedy option the plaintiff must choose between?', options: ['Damages or an account of profits', 'Injunction or damages', 'Apology or damages', 'Customs seizure or injunction'], a: 0, explain: 's 126(1)(b).' },
          { type: 'match', label: 'Citation network', q: 'Match each defence to its section.', pairs: [['Own name in good faith', 's 122(1)(a)'], ['Comparative advertising', 's 122(1)(d)'], ['Parallel imports of goods', 's 122A'], ['Prior continuous use', 's 124']], explain: 'Part 12.' },
          { type: 'tf', q: 'It\'s fine to use ® in Australia on a mark registered only in the US.', a: false, explain: 's 151: a representation of Australian registration unless it clearly indicates the foreign registration.' },
        ],
      },
    ],
    outline: `<p><b>Defences and remedies.</b> s 122: own name, descriptive, intended purpose, comparative advertising, right under the Act, would obtain registration, conditions/limitations, disclaimers; good faith = no ulterior motive. Parallel imports: s 122A (goods; reasonable inquiries; consent of owner, authorised user, associated entity; 2018); s 123 (services). Prior continuous use, area-limited (s 124). Remedies (s 126): injunction; damages or account of profits; additional damages. Unjustified threats (s 129; s 130A notification not a threat). Customs notice of objection, 4 years (s 132). False "registered"/® offence (s 151).</p>`,
    treasures: ['s 122A parallel imports'],
  };

  D.units['u2-11'] = {
    lawAsAt: '19 September 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Certification, collective and defensive marks; GIs',
        cards: [
          {
            kind: 'compare', margin: ['Parts 15–17 TMA'],
            title: 'Special kinds of mark',
            table: {
              head: ['', 'Collective (s 162)', 'Certification (s 169)', 'Defensive (s 185)'],
              rows: [
                ['Shows', 'Membership of an association', 'Goods or services certified for quality, origin, material or another characteristic', 'A connection with a famous mark\'s owner'],
                ['Who uses it', 'Association members', 'Anyone who meets the rules and is approved', 'The owner; no use needed'],
                ['Special rules', 'Members\' use is the association\'s use (s 163)', 'Rules filed and assessed by the <b>ACCC</b> (ss 173, 175)', 'No non-use removal (s 186)'],
              ],
            },
            core: '<p>A certification mark isn\'t a badge of one trader\'s origin; it\'s a promise about standards, so the ACCC checks its rules aren\'t to the detriment of the public.</p>',
            source: `${TMA} ss 162, 163, 169, 170, 173, 175, 185, 186 (checked). ${WJO}, "Types of Trade Marks".`,
          },
          {
            kind: 'rule', margin: ['s 6, s 61 TMA', 'WAA Part VIB'],
            title: 'Geographical indications',
            core: `<p>A <b>geographical indication</b> identifies goods as originating in a place "where a given quality, reputation or other characteristic of the goods is essentially attributable to their geographical origin" (s 6). Think Champagne, Barossa Valley.</p>
              <ul><li>In the TMA: registration can be <b>opposed</b> if a mark contains a false GI (s 61), subject to defences such as good-faith use before 1 January 1996, common English words, and grape variety names.</li>
              <li>For <b>wine</b>, the <i>Wine Australia Act 2013</i> keeps a register of protected GIs, and it's an <b>offence</b> to sell, export or import wine with a false description and presentation, including a registered GI the wine doesn't come from, even with "style" or "type" added (ss 40C, 40D).</li></ul>`,
            source: `${TMA} ss 6 (definition), 61 (checked); ${WAA} ss 40C, 40D (checked).`,
          },
          {
            kind: 'critique', margin: ['POLICY', '⚑'], flag: true,
            title: 'Prosecco and the EU deal',
            core: `<p>The EU wants its GIs protected in Australia; Australian producers argue some names (Prosecco, feta) are grape varieties or generic terms. The Australia–EU free trade agreement was reportedly concluded on 24 March 2026, protecting Prosecco as an EU GI for export labelling (phased out over 10 years) while Australian producers can keep using it as a grape variety name at home. It isn't yet in force.</p>`,
            source: '⚑ Secondary sources only (press reports); the agreement text wasn\'t reviewed. Check the current status before advising.',
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Food and drink clients',
            core: `<ul><li>Check place names against <b>GI registers</b> before naming a wine, spirit or food product, and check s 43 (deceptive connotation) for any foreign-sounding names (<i>Glen Oaks</i>, unit 2.5).</li>
              <li>Certification marks need <b>ACCC-approved rules</b>: allow time and budget for that step.</li>
              <li>"Style" or "type" doesn't fix a false wine GI (WAA s 40D(4)).</li></ul>`,
            source: `${TMA} ss 43, 61, 173–175; ${WAA} s 40D.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Who assesses the rules for a certification trade mark?', options: ['The ACCC', 'The Federal Court', 'Wine Australia', 'The applicant alone'], a: 0, explain: 'ss 173, 175.' },
          { type: 'tf', q: 'A defensive trade mark can be removed for non-use.', a: false, explain: 's 186 excludes Part 9 (non-use) for defensive marks.' },
          { type: 'tf', q: 'Labelling an Australian sparkling wine "Champagne style" avoids the false description offence.', a: false, explain: 'WAA s 40D(4): adding "style" or "type" doesn\'t help, if Champagne is a registered GI.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Which kind of mark?', buckets: ['Certification', 'Collective', 'Defensive'], items: [{ t: 'A logo showing products meet an independent standard', b: 0 }, { t: 'A mark showing a business belongs to an industry association', b: 1 }, { t: 'A famous brand registered for goods it doesn\'t sell', b: 2 }], explain: 'ss 169, 162, 185.' },
        ],
      },
    ],
    outline: `<p><b>Special marks and GIs.</b> Collective (s 162; members' use is the association's, s 163). Certification (s 169: certified quality, origin, material, etc.; rules filed and ACCC-assessed, ss 173–175). Defensive (s 185: no use needed; no non-use removal, s 186). GI definition (s 6); opposition for false GI with defences (s 61). Wine: WAA register; offence to deal in wine with false description and presentation incl. registered GI, even with "style/type" (ss 40C–40D). Prosecco and the Australia–EU FTA (concluded March 2026) ⚑.</p>`,
    treasures: ['Geographical indications'],
  };
})();
