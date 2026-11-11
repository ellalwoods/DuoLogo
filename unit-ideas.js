/* Copyright 1.4 · Ideas, facts and material form. Written and checked 11 Nov 2026 against the Copyright Act 1968
   (Compilation No. 65) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJ = '<a href="https://wikijuris.net/ausip/copyrightsubsp3/" target="_blank" rel="noopener">Wikijuris, Copyright: Subject matter</a> (CC BY-SA 3.0)';
  const WJI = '<a href="https://wikijuris.net/ausip/copyrightinfringement/" target="_blank" rel="noopener">Wikijuris, Copyright infringement</a> (CC BY-SA 3.0)';
  const WJO = '<a href="https://wikijuris.net/ausip/copyrightownership/" target="_blank" rel="noopener">Wikijuris, Copyright ownership</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-4'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Ideas and facts are free',
        cards: [
          {
            kind: 'rule', margin: ['s 31 CA', 'Skybase'],
            title: 'Copyright protects expression, not ideas',
            core: `<p>Copyright protects the <strong>expression</strong> of ideas and information, fixed in material form. It doesn't protect the <strong>ideas</strong> or the <strong>information</strong> themselves.</p>
              <p>So anyone may write another novel about a boy wizard, a heist or a killer shark, and anyone may report the same facts. What they may not do is reproduce someone else's <em>way of expressing</em> them.</p>`,
            deeper: `<p>Hill J explained why in <i>Skybase Nominees v Fortuity</i> (1996) 36 IPR 529 at 531: there is "a tension in policy between the monopoly rights" of copyright owners "and the freedom to express ideas or discuss facts". If dealing with the same ideas or facts were enough to infringe, "the copyright laws would be an impediment to free speech, rather than an encouragement of original expression".</p>`,
            source: `${WJ}, "The Idea/Expression Dichotomy" (<i>Skybase</i>, Hill J at 531).`,
          },
          {
            kind: 'case', margin: ['(1982) 46 ALR 189'],
            title: 'Zeccola v Universal City Studios',
            exp: {
              n: 1, cite: '(1982) 46 ALR 189',
              hyp: 'Great White, a film about a man-eating shark, infringes copyright in Jaws.',
              method: 'Universal owned copyright in the Jaws novel, screenplay and film. Zeccola made Great White. The judge watched both films "with some degree of fortitude".',
              result: 'Partly confirmed · novel & screenplay',
              ok: true,
              discussion: 'No copyright in the central idea of a shark terrorising a community. But the overlap in situations, characters and location was so marked that copying of the novel and screenplay was inferred.',
            },
            core: `<p><b>Held:</b> no infringement of the <em>film</em> (no visual images were copied). But the judge found such a marked degree of similarity in situations, characters and location, though the dialogue differed, that there was an inescapable inference of copying the <strong>novel and screenplay</strong>. The Full Federal Court was less certain, but didn't find fault with the judge's view.</p>`,
            deeper: `<p>The lesson: "ideas aren't protected" is not a licence to copy a detailed plot. The more specific the combination of events, characters and settings you take, the more likely you've taken expression. The <em>idea</em> of a shark story was free; <i>Jaws</i>' particular working-out of it was not.</p>`,
            source: `${WJI}, "Element 2 – Objective Similarity" (<i>Zeccola</i>).`,
          },
          {
            kind: 'case', margin: ['(2003) 57 IPR 453'],
            title: 'Evoking is not reproducing: the Goggomobil ad',
            core: `<p>In <i>Telstra v Royal &amp; Sun Alliance</i> (2003) 57 IPR 453, a Shannons insurance ad parodied Telstra's famous Goggomobil ad: a memorable character, an unusual car, a phone call about an obscure problem, told with humour.</p>
              <p><b>Held:</b> no infringement. The scripts bore "little resemblance to each other". The copying related "more to the concept or theme … than to the expression of that concept or theme".</p>`,
            deeper: `<p>The ad "conjures up" the original "and its ideas and concepts but does not reproduce a substantial part of the substance or expression" of it. Calling something to mind is not the same as reproducing it.</p>
              <p>Compare <i>Baigent v Random House</i> [2007] (UK): the authors of <i>The Holy Blood and the Holy Grail</i> said <i>The Da Vinci Code</i> copied their "central theme". Held: Dan Brown took ideas, not expression.</p>`,
            source: `${WJI}, "Element 2 – Objective Similarity" (<i>Telstra v Royal &amp; Sun Alliance</i>, quoted; <i>Baigent</i>).`,
          },
          {
            kind: 'rule', margin: ['IceTV', 'Desktop'],
            title: 'Facts and history are free too',
            core: `<p>Facts, data and historical events are information, not expression. The same goes for the "time and title" facts in a TV schedule (<i>IceTV</i>, unit 1.5).</p>
              <p>Anyone may gather the same facts by their own inquiries and publish them in their own words or arrangement. That doesn't infringe, even if the facts end up identical.</p>`,
            deeper: `<p>Where the form of expression is dictated by the facts, taking it takes nothing original. In <i>IceTV</i> the High Court said "baldly stated matters of fact or intention are inseparable from and co-extensive with their expression" (Gummow, Hayne and Heydon JJ).</p>
              <p>Even in <i>Desktop Marketing</i>, the high-water mark for protecting compilations, the Full Court accepted that Desktop could have collected all the same facts independently without infringing.</p>`,
            source: `${WJI}, "Substantial Part" (<i>IceTV</i>, quoted). ${WJ}, <i>Desktop Marketing</i>.`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Where does the idea end and the expression begin?',
            core: `<p>There's no bright line, and real disputes turn on it. Two traps:</p>
              <ol><li><b>Saying "it's only an idea"</b> about a detailed plot, structure or sequence. <i>Zeccola</i> shows that a specific combination of incidents can be expression.</li>
              <li><b>Treating any resemblance as copying.</b> Shared themes, genres and stock situations (<i>Goggomobil</i>, <i>Baigent</i>) are ideas.</li></ol>
              <p>Ask: how <em>abstract</em> is the thing that was taken?</p>`,
            deeper: `<p>The High Court's warning in <i>IceTV</i>: "the more remote the level of abstraction of the 'interest', the greater the risk of protecting the 'ideas' of the author rather than their fixed expression" (Gummow, Hayne and Heydon JJ at [157]–[160]).</p>`,
            source: `${WJ}, <i>IceTV</i> ([157]–[160], quoted). ${WJI} (<i>Zeccola</i>, <i>Telstra</i>, <i>Baigent</i>).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'Copyright can stop a rival from making a film about a man-eating shark.', a: false, explain: 'The idea of a shark terrorising a community is free (<i>Zeccola</i>). Copying the detailed expression of a particular story is another matter.' },
          { type: 'choice', q: 'In Zeccola v Universal, why was copying of the Jaws novel and screenplay inferred?', options: ['The overlap in situations, characters and location was so marked that copying was the inescapable inference', 'Great White used the same dialogue as Jaws', 'Great White copied visual images from the Jaws film', 'Any film about a shark attack infringes Jaws'], a: 0, explain: 'The dialogue differed, and there was no infringement of the film. It was the combination of situations, characters and location that went beyond the idea.' },
          { type: 'choice', label: 'Spot the error', q: '"The Shannons ad infringed Telstra\'s copyright because it reminded viewers of the Goggomobil ad." What\'s wrong?', options: ['Evoking an earlier work isn\'t reproducing it: the ad took the concept and theme, not a substantial part of the expression', 'Advertisements are not protected by copyright', 'Parody can never infringe copyright', 'Telstra did not own the Goggomobil ad'], a: 0, explain: 'The ad "conjures up" the original "and its ideas and concepts but does not reproduce a substantial part" of it (<i>Telstra v Royal &amp; Sun Alliance</i>).' },
          { type: 'sort', label: 'Spectroscopy', q: 'A rival writes a detective novel after reading yours. Send each thing they used to idea or expression.', buckets: ['Idea (free)', 'Expression (protected)'], items: [{ t: 'A detective who solves crimes with help from her cat', b: 0 }, { t: 'A murder in a locked room', b: 0 }, { t: 'Your opening chapter, lightly reworded', b: 1 }, { t: 'Your distinctive sequence of twenty plot incidents, in order', b: 1 }], explain: 'Character types and stock situations are ideas. Your actual text, and a detailed, specific sequence of incidents (think <i>Zeccola</i>), can be expression.' },
          { type: 'tf', q: 'If you independently research and publish the same facts as a rival directory, you infringe even if you never looked at it.', a: false, explain: 'Facts are free, and infringement needs copying. Independent collection doesn\'t infringe, even in <i>Desktop Marketing</i>.' },
          { type: 'choice', q: 'What did the High Court in IceTV warn about the "level of abstraction"?', options: ['The more abstract the "interest" protected, the greater the risk of protecting ideas rather than expression', 'Only abstract works such as paintings attract copyright', 'Copyright protects ideas once they are written down', 'Abstraction is irrelevant to infringement'], a: 0, explain: 'Gummow, Hayne and Heydon JJ at [157]–[160].' },
        ],
      },
      {
        title: 'Material form, and when a work is "made"',
        cards: [
          {
            kind: 'statute', margin: ['s 22(1)–(2) CA'],
            title: 'A work is made when it\'s first fixed',
            statute: { cite: 's 22(1) CA', text: '…the time when … a literary, dramatic, musical or artistic work was made shall be read as a reference to the time when … the work was <mark>①</mark> first reduced to <mark>②</mark> writing or to some other material form.', notes: ['① first: the earliest fixation counts', '② writing is one form; any other material form will do'] },
            core: `<p>Until an idea is reduced to writing or some other material form, there is no work for copyright to protect. A song in your head, or a story told aloud and never recorded, isn't yet a work.</p>`,
            deeper: `<p>s 22(2): a literary, dramatic or musical work that exists "in the form of sounds embodied in an article or thing" is deemed reduced to material form when those sounds were embodied. So recording a spoken or sung work fixes it.</p>`,
            source: `${CA} s 22(1)–(2) (quoted). ${WJ}, "Material Form".`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA'],
            title: 'What counts as material form',
            statute: { cite: 's 10(1) CA · definitions', text: '<b>material form</b> … includes <mark>①</mark> any form (whether visible or not) of storage of the work … or a substantial part of the work …, <mark>②</mark> (whether or not the work … can be reproduced).<br><br><b>writing</b> means a mode of representing or reproducing words, figures or symbols in a visible form.', notes: ['① invisible storage counts: a file on a drive, a recording', '② even storage you can\'t reproduce from'] },
            core: `<p>Material form is wide: writing in any medium, and analogue or digital storage on any medium. A Word file, a phone note and a voice memo all fix a work.</p>`,
            deeper: `<p>What's left out are ephemeral things: projections, unrecorded speech and live music that no one captures. See <i>Star Micronics v Five Star Computers</i> (1990) 18 IPR 225 on electronic storage.</p>`,
            source: `${CA} s 10(1), "material form" and "writing" (quoted). ${WJ}, "Material Form" (<i>Star Micronics</i>).`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'The stand-up set',
            core: `<p>Maya improvises a 20-minute comedy set at an open mic. She never writes it down. Sam, in the audience, records it on his phone.</p>
              <ul><li><b>Before the recording:</b> nothing was fixed, so there was no literary or dramatic work yet (s 22(1)).</li>
              <li><b>Once Sam records it:</b> s 22(2) deems the spoken work reduced to material form when the sounds were embodied in his phone.</li>
              <li><b>Separately,</b> the recording itself is Part IV subject matter, a sound recording (or a film, if he filmed it): unit 1.3.</li></ul>`,
            deeper: `<p>Who owns which right is a different question (units 1.6 and 1.7). For recordings of live performances, the Act makes the performers co-owners with the maker of the recording (s 22(3A)). The point here is only <em>when</em> a work comes into existence.</p>`,
            source: `Fictional facts. ${CA} s 22(1)–(2). ${WJO}, "Sound Recordings" (s 22(3A)).`,
          },
          {
            kind: 'rule', margin: ['s 22 CA', 's 32 CA', 's 33 CA'],
            title: 'Why "made" matters',
            core: `<p>The moment a work is made switches several things on:</p>
              <ul><li><b>Subsistence:</b> for an unpublished work, the author must be a qualified person "at the time when the work was made" (s 32(1), unit 1.6).</li>
              <li><b>Duration:</b> some terms run from when the work was made or first made public (s 33, unit 1.9).</li>
              <li><b>Ownership disputes:</b> who wrote what, and when, is often proved by the first fixed version.</li></ul>`,
            source: `${CA} ss 22(1), 32(1), 33 (text checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Two material-form mistakes',
            core: `<ol><li><b>Thinking material form must be visible or on paper.</b> s 10 says "whether visible or not": digital storage counts.</li>
              <li><b>Mixing up fixing and authoring.</b> s 22(2) only says <em>when</em> Maya's spoken work is made: when Sam's phone captures it. It says nothing about who the author is. The author is the person who created the work (unit 1.6), so Maya.</li></ol>`,
            source: `${CA} ss 10(1), 22(2) (text checked). ${WJO} (the author is the creator of the work).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Under s 22(1), when is a literary work "made"?', options: ['When it is first reduced to writing or some other material form', 'When it is first published', 'When the author first has the idea', 'When it is registered with IP Australia'], a: 0, explain: 's 22(1). There is no copyright registration in Australia, and publication is a separate concept (s 29).' },
          { type: 'tf', q: 'A song stored only as a file on a laptop is not in material form, because you can\'t see it.', a: false, explain: 'Material form includes "any form (whether visible or not) of storage" (s 10(1)).' },
          { type: 'choice', q: 'Maya improvises a speech that no one writes down or records. What is the position?', options: ['There is no work yet: nothing has been reduced to material form', 'Copyright subsists in it as an unpublished literary work', 'It is a dramatic work protected from the moment it is performed', 'Anyone in the audience becomes its author'], a: 0, explain: 'Without fixation there is no work (s 22(1)). Once recorded, s 22(2) deems it reduced to material form.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Material form or not?', buckets: ['Material form', 'Not material form'], items: [{ t: 'A poem typed into a phone note', b: 0 }, { t: 'A melody recorded as a voice memo', b: 0 }, { t: 'A slogan you thought of in the shower', b: 1 }, { t: 'An unrecorded live jam session', b: 1 }], explain: 'Writing and storage (visible or not) count. Unfixed thoughts and unrecorded live performances don\'t.' },
          { type: 'order', q: 'Put the life of a work in order.', items: ['An idea', 'Reduced to material form (made)', 'First made public or published', 'Copyright expires'], explain: 'Making (s 22) comes first; publication (s 29) and duration (s 33) follow.' },
          { type: 'tf', label: 'From unit 1.5', q: 'Recording someone else\'s improvised speech makes you its author.', a: false, explain: 's 22(2) only says when the work is made. The author is the person who created it, and authorship turns on whose independent intellectual effort produced the expression (unit 1.5).' },
        ],
      },
    ],
    outline: `<p><b>Ideas, facts and material form.</b> Copyright protects expression, not ideas or information (<i>Skybase</i> (1996) 36 IPR 529 at 531). Detailed combinations of incidents can be expression (<i>Zeccola v Universal</i> (1982) 46 ALR 189: <i>Jaws</i>/<i>Great White</i>); evoking themes and concepts is not reproduction (<i>Telstra v Royal &amp; Sun Alliance</i> (2003) 57 IPR 453; <i>Baigent</i> (UK 2007)). Facts are free (<i>IceTV</i>); independent collection doesn't infringe. Work "made" when first reduced to writing or other material form (s 22(1)); sounds embodied = fixed (s 22(2)). Material form includes storage "whether visible or not" (s 10(1)). "Made" triggers s 32(1) and some s 33 terms.</p>`,
    treasures: ['Zeccola v Universal'],
  };
})();
