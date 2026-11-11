/* Copyright 1.16 · Moral rights. Written and checked 11 Nov 2026 against the Copyright Act 1968 (Compilation No. 65),
   Part IX, and Wikijuris, Moral Rights and Performers Rights (CC BY-SA 3.0). See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const WJM = '<a href="https://wikijuris.net/ausip/moralrights/" target="_blank" rel="noopener">Wikijuris, Moral Rights and Performers Rights</a> (CC BY-SA 3.0)';

  D.units['u1-16'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Three rights for creators',
        cards: [
          {
            kind: 'rule', margin: ['Part IX CA', 's 190 CA'],
            title: 'Rights that stay with the creator',
            core: `<p>Moral rights protect the <b>creator's</b> connection to the work, not the owner's economic interest. They were added by the <i>Copyright Amendment (Moral Rights) Act 2000</i>, and extended to performers following the 2004 US free trade agreement.</p>
              <ul><li><b>Only individuals</b> have moral rights (s 190): never a company.</li>
              <li>They <b>can't be assigned</b>, left by will or otherwise transferred (s 195AN(3)), though after death the author's legal personal representative can enforce them (s 195AN(1)).</li>
              <li>So they survive a sale or assignment of the copyright: a publisher who owns copyright can still infringe the author's moral rights.</li>
              <li>They last as long as copyright, except the integrity right in a <b>film</b>, which ends when the author dies (s 195AM).</li></ul>`,
            source: `${CA} ss 190, 195AM, 195AN (checked). ${WJM} (history).`,
          },
          {
            kind: 'compare', margin: ['ss 193, 195AC, 195AI CA'],
            title: 'Attribution, false attribution, integrity',
            table: {
              head: ['Right', 'What it means', 'Key detail'],
              rows: [
                ['<b>Attribution</b> (s 193)', 'To be identified as author when the work is reproduced, published, performed, communicated, adapted (or exhibited, for art)', 'Clear and reasonably prominent (s 195AA); in the way the author asked, if reasonable (s 195)'],
                ['<b>Against false attribution</b> (s 195AC)', 'Not to have someone else named as author, or your name put on work that isn\'t yours', 'Includes passing off an altered work as your unaltered work (s 195AG)'],
                ['<b>Integrity</b> (s 195AI)', 'Not to have the work subjected to <b>derogatory treatment</b>', 'Distortion, mutilation or material alteration prejudicial to honour or reputation (ss 195AJ–195AL)'],
              ],
            },
            core: '<p>For films, the "authors" for moral rights purposes are the director, the producer and the screenwriter (s 191).</p>',
            source: `${CA} ss 191, 193, 194, 195, 195AA, 195AC, 195AG, 195AI–195AL (checked).`,
          },
          {
            kind: 'statute', margin: ['s 195AK CA'],
            title: 'Derogatory treatment of an artistic work',
            statute: { cite: 's 195AK CA', text: 'derogatory treatment, in relation to an artistic work, means: (a) the doing, in relation to the work, of anything that results in a material distortion of, <mark>①</mark> the destruction or mutilation of, or a material alteration to, the work that is prejudicial to the author\'s honour or reputation; or (b) <mark>②</mark> an exhibition in public of the work that is prejudicial to the author\'s honour or reputation because of the manner or place in which the exhibition occurs; or (c) the doing of anything else in relation to the work that is <mark>③</mark> prejudicial to the author\'s honour or reputation.', notes: ['① destroying art can be derogatory', '② where and how it\'s shown', '③ the key requirement in every limb'] },
            core: `<p>Whether "prejudicial to honour or reputation" is judged subjectively or objectively isn't settled; there's very little Australian case law.</p>`,
            source: `${CA} s 195AK (quoted). ${WJM} (no case clarifying the test).`,
          },
          {
            kind: 'case', margin: ['[2012] FMCA 2'],
            title: 'Perez v Fernandez: the edited promo',
            exp: {
              n: 1, cite: '[2012] FMCA 2',
              hyp: 'Editing an artist\'s recorded promo to make it seem he was endorsing a DJ isn\'t derogatory treatment of the song.',
              method: 'Pitbull (Perez) recorded a promo for a Perth DJ\'s planned tour. After the tour fell through, the DJ deleted a prominent part of the song "Bon, Bon" and inserted the promo so it seemed the DJ was a subject of the song.',
              result: 'Infringed the right of integrity: a material alteration, prejudicial to Perez\'s honour and reputation through a false association, and not reasonable.',
              ok: false,
              discussion: 'The court looked at both Perez\'s own distress (subjective) and how the false association would look to others in the industry and to his audience (objective).',
            },
            source: `${WJM} (summary of the case).`,
          },
          {
            kind: 'rule', margin: ['ss 195ABA–195AXL CA'],
            title: 'Performers have moral rights too',
            core: `<p>Performers in live and recorded performances have the same three rights: attribution of <b>performership</b> (s 195ABA), against false attribution, and integrity. A conductor is treated as a performer (s 191B).</p>
              <p>For recorded performances, attribution and false attribution last as long as copyright in the recording; integrity lasts until the performer dies (s 195ANA).</p>`,
            source: `${CA} ss 191B, 195ABA, 195AHA, 195ALA, 195ANA (checked).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A company that commissions artwork can own the moral rights in it.', a: false, explain: 's 190: only individuals have moral rights.' },
          { type: 'tf', q: 'A creator who assigns copyright keeps their moral rights.', a: true, explain: 'Moral rights can\'t be assigned (s 195AN(3)).' },
          { type: 'match', label: 'Citation network', q: 'Match each moral right to its section.', pairs: [['Attribution', 's 193'], ['Against false attribution', 's 195AC'], ['Integrity', 's 195AI'], ['Only individuals', 's 190']], explain: 'Part IX.' },
          { type: 'choice', q: 'What must derogatory treatment be?', options: ['Prejudicial to the author\'s honour or reputation', 'Done for profit', 'A reproduction of the whole work', 'Done in public'], a: 0, explain: 'ss 195AJ–195AL.' },
          { type: 'choice', q: 'Who are the authors of a film for moral rights?', options: ['Director, producer and screenwriter', 'The studio', 'The lead actors only', 'Whoever owns copyright'], a: 0, explain: 's 191.' },
        ],
      },
      {
        title: 'Defences, consent and remedies',
        cards: [
          {
            kind: 'rule', margin: ['ss 195AR, 195AS CA'],
            title: 'Reasonableness',
            core: `<p>Not identifying the author (s 195AR), or subjecting a work to derogatory treatment (s 195AS), doesn't infringe if it was <b>reasonable in all the circumstances</b>. The factors include:</p>
              <ul><li>the nature of the work, and the purpose, manner and context of its use;</li>
              <li>industry practice, including voluntary codes;</li>
              <li>whether the work was made in the course of employment or under a contract for services;</li>
              <li>for attribution: the difficulty or expense of identifying the author;</li>
              <li>for integrity: whether the treatment was required by law; and with several authors, their views.</li></ul>
              <p>There's no reasonableness defence to <b>false</b> attribution.</p>`,
            source: `${CA} ss 195AR(2), 195AS(2) (checked). ${WJM} (no reasonableness defence for false attribution).`,
          },
          {
            kind: 'rule', margin: ['s 195AT CA'],
            title: 'Buildings, public art and restoration',
            core: `<ul><li>Destroying a <b>moveable artistic work</b> isn't an infringement if the author was given a reasonable opportunity to remove it (s 195AT(1)).</li>
              <li>Changing, moving, demolishing or destroying a <b>building</b> (including art fixed to it) isn't an infringement if the owner couldn't find the author after reasonable inquiries, or gave written notice and allowed 3 weeks to ask for access to record the work or consult, then a reasonable chance within a further 3 weeks (s 195AT(2)–(3A)).</li>
              <li>Similar rules apply to removing or relocating <b>site-specific public art</b> (s 195AT(4A)–(4B)).</li>
              <li>Good-faith <b>restoration or preservation</b> isn't, by that act alone, an infringement (s 195AT(5)).</li></ul>`,
            source: `${CA} s 195AT (checked).`,
          },
          {
            kind: 'statute', margin: ['ss 195AW, 195AWA CA'],
            title: 'Consent, not waiver',
            core: `<p>Australia doesn't let creators simply "waive" moral rights. Instead, an act isn't an infringement if it's within the scope of a <b>written consent</b> given by the author (s 195AW for films; s 195AWA for other works).</p>
              <ul><li>For works other than films, the consent must cover <b>specified acts or omissions</b> (or classes of them) and <b>specified works</b> (or works of a particular description).</li>
              <li>An <b>employee</b> can consent for their employer for all works made in the course of employment (s 195AWA(4)).</li>
              <li>Consent extends to the owner's licensees and successors unless it says otherwise; it has no effect if obtained by <b>duress</b> or knowingly false or misleading statements (s 195AWB).</li></ul>`,
            source: `${CA} ss 195AW, 195AWA, 195AWB (checked).`,
          },
          {
            kind: 'rule', margin: ['s 195AZA CA'],
            title: 'Remedies',
            core: `<p>A court can grant an <b>injunction</b>, <b>damages</b>, a <b>declaration</b>, an order for a <b>public apology</b>, and an order that a false attribution or derogatory treatment be <b>removed or reversed</b> (s 195AZA(1)).</p>
              <p>Before granting an injunction, it must consider whether the parties have tried to negotiate a settlement, and whether to adjourn so they can (s 195AZA(3)).</p>`,
            source: `${CA} s 195AZA(1)–(3) (checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Moral rights consents in contracts',
            core: `<ul><li>An <b>assignment of copyright doesn't deal with moral rights</b>. Agency, publishing, employment and commissioning contracts usually include a separate moral rights consent.</li>
              <li>A vague "the creator waives all moral rights" clause may not work for works other than films: draft the consent to <b>specified acts</b> (e.g. editing, cropping, not crediting) and <b>specified works</b> (s 195AWA(3)).</li>
              <li>Clients <b>demolishing or renovating</b> a building with a mural or sculpture need the s 195AT notice process before work starts.</li></ul>`,
            source: `${CA} ss 195AN(3), 195AT, 195AWA.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'It can be a defence to failing to credit an author that not crediting them was reasonable in all the circumstances.', a: true, explain: 's 195AR.' },
          { type: 'tf', q: 'Reasonableness is a defence to false attribution of authorship.', a: false, explain: 'The reasonableness defences in ss 195AR and 195AS cover attribution and integrity only.' },
          { type: 'order', q: 'Put the building-owner notice steps in order (s 195AT(2A)).', items: ['Give the author written notice of the intended change', 'Author has 3 weeks to ask for access', 'Give a reasonable opportunity for access within a further 3 weeks', 'Carry out the change'], explain: 's 195AT(2A).' },
          { type: 'choice', q: 'What does a moral rights consent for a work that isn\'t a film need to specify?', options: ['The acts or omissions, and the works, it covers', 'Nothing: a general waiver is enough', 'A price', 'The date copyright expires'], a: 0, explain: 's 195AWA(3).' },
          { type: 'sort', label: 'Spectroscopy', q: 'Is this a remedy for infringing moral rights under s 195AZA?', buckets: ['Available', 'Not listed'], items: [{ t: 'A public apology', b: 0 }, { t: 'Reversing the derogatory treatment', b: 0 }, { t: 'A declaration', b: 0 }, { t: 'Transferring the copyright to the author', b: 1 }, { t: 'Imprisonment', b: 1 }], explain: 's 195AZA(1).' },
        ],
      },
    ],
    outline: `<p><b>Moral rights</b> (Part IX, 2000; performers from 2004). Only individuals (s 190); not assignable (s 195AN(3)). Attribution (ss 193–195AB: clear and reasonably prominent); against false attribution (s 195AC; altered works s 195AG); integrity: no derogatory treatment prejudicial to honour or reputation (ss 195AI–195AL; destruction of art included). Film authors: director, producer, screenwriter (s 191). Duration: until copyright ends; film integrity until death (s 195AM). <i>Perez v Fernandez</i> [2012] FMCA 2. Defences: reasonableness for attribution and integrity (ss 195AR–195AS), not false attribution; buildings, moveable and site-specific art, restoration (s 195AT). Written consent, not waiver (ss 195AW–195AWB). Remedies: injunction, damages, declaration, apology, reversal (s 195AZA). Performers: ss 195ABA–195AXL, conductor (s 191B).</p>`,
    treasures: ['Perez v Fernandez'],
  };
})();
