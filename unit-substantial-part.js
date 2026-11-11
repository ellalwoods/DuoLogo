/* Copyright 1.11 · Direct infringement: copying a substantial part. Written and checked 11 Nov 2026 against the
   Copyright Act 1968 (Compilation No. 65) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md.
   flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJI = '<a href="https://wikijuris.net/ausip/copyrightinfringement/" target="_blank" rel="noopener">Wikijuris, Copyright infringement</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-11'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'The infringement equation',
        cards: [
          {
            kind: 'statute', margin: ['s 36(1) CA'],
            title: 'What infringes a work',
            statute: { cite: 's 36(1) CA', text: 'the copyright in a literary, dramatic, musical or artistic work is infringed by a person who, <mark>①</mark> not being the owner of the copyright, and <mark>②</mark> without the licence of the owner of the copyright, <mark>③</mark> does in Australia, or authorizes the doing in Australia of, <mark>④</mark> any act comprised in the copyright.', notes: ['① the owner can\'t infringe their own copyright', '② no permission', '③ territorial: in Australia (authorising is unit 1.12)', '④ one of the exclusive rights in s 31'] },
            core: `<p>So direct infringement is: someone other than the owner, without a licence, doing in Australia an act that only the owner may do.</p>`,
            source: `${CA} s 36(1) (quoted). ${WJI}, "Part III Original works".`,
          },
          {
            kind: 'rule', margin: ['s 31(1) CA'],
            title: 'The acts comprised in the copyright',
            core: `<p>s 31(1) lists the owner's exclusive rights.</p>
              <table class="cmp"><tr><th></th><th>Literary, dramatic, musical</th><th>Artistic</th></tr>
              <tr><td>Reproduce in a material form</td><td>✓</td><td>✓</td></tr>
              <tr><td>Publish</td><td>✓</td><td>✓</td></tr>
              <tr><td>Perform in public</td><td>✓</td><td>—</td></tr>
              <tr><td>Communicate to the public</td><td>✓</td><td>✓</td></tr>
              <tr><td>Make an adaptation</td><td>✓</td><td>—</td></tr></table>
              <p>This unit is about the biggest one: <strong>reproduction</strong>.</p>`,
            deeper: `<p>There are also commercial rental rights for some works (s 31(1)(c)–(d)), and adaptations carry the same rights as the original (s 31(1)(a)(vii)). Part IV subject matter has its own lists (ss 85–88). The full set is unit 1.10.</p>`,
            source: `${CA} s 31(1) (text checked). ${WJI}, "The Exclusive Rights".`,
          },
          {
            kind: 'test', margin: ['SW Hart (1985)', 'Francis Day v Bron'],
            title: 'Reproduction: two elements',
            steps: ['<b>Causal connection:</b> the defendant\'s work was derived, directly or indirectly, from the plaintiff\'s work', '<b>Objective similarity:</b> there\'s a sufficient degree of objective similarity between the two works', '<b>Substantial part:</b> what was taken was the whole or a substantial part of the work (s 14, Lesson B)'],
            core: `<p>Both of the first two elements are needed. Similarity alone isn't copying: two people can independently produce similar works, and neither infringes.</p>`,
            deeper: `<p>The two-element test comes from <i>SW Hart &amp; Co v Edwards Hot Water Systems</i> (1985) 159 CLR 466 at 472 and <i>Francis Day &amp; Hunter v Bron</i> [1963] Ch 587 at 614. Reproduction "involves some element of copying; it does not include cases where the author or compiler produces a substantially similar result by independent work without copying" (<i>Ladbroke v William Hill</i> [1964] 1 WLR 273).</p>`,
            source: `${WJI}, "Infringement – Reproduce the Work in a Material Form" (citations as given there).`,
          },
          {
            kind: 'rule', margin: ['Francis Day v Bron', 's 21(3) CA'],
            title: 'Causal connection: access, indirect and subconscious copying',
            core: `<ul><li><b>Access:</b> to prove copying you'll generally need to show the defendant had access to your work.</li>
              <li><b>Indirect copying counts:</b> you can infringe a dress designer's drawing without seeing it, by copying the dress made from it.</li>
              <li><b>Subconscious copying</b> can infringe, but there must be evidence of copying.</li></ul>`,
            deeper: `<p>In <i>Francis Day &amp; Hunter v Bron</i> [1963] Ch 587, subconscious copying was accepted as possible in law, but the similarities were probably coincidental: there was no evidence the defendant had heard the song.</p>
              <p>The dress example reflects s 21(3): an artistic work in two dimensions is reproduced by making a three-dimensional version, and vice versa (<i>Burke &amp; Margot Burke v Spicers Dress Designs</i> [1936] Ch 400).</p>`,
            source: `${WJI}, "Element 1 – Causal Connection" and "Deemed Reproductions". ${CA} s 21(3) (text checked).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: '"It looks the same, so it\'s copied"',
            core: `<p>Similarity is evidence of copying, not proof. Strong similarity plus access can support an <em>inference</em> of copying (as in <i>Zeccola</i>, unit 1.4). But without access, a defendant who created independently doesn't infringe, however close the result.</p>
              <p>In your answer, deal with <strong>causal connection</strong> and <strong>objective similarity</strong> separately.</p>`,
            source: `${WJI}, "Infringement – Reproduce the Work" and "Element 1 – Causal Connection".`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Under s 36(1), which of these is NOT needed for direct infringement of a work?', options: ['An intention to infringe', 'An act comprised in the copyright', 'Done in Australia', 'Without the owner\'s licence'], a: 0, explain: 's 36(1) doesn\'t mention intention. Innocence only affects remedies: an innocent infringer avoids damages but not an account of profits (s 115(3)).' },
          { type: 'order', q: 'Order the elements of infringement by reproduction.', items: ['Causal connection', 'Objective similarity', 'Substantial part'], explain: 'Copying (causal connection) + resemblance (objective similarity) + of a substantial part (s 14).' },
          { type: 'tf', q: 'Two composers independently write almost identical tunes. The later one infringes the earlier.', a: false, explain: 'No causal connection, no reproduction. Independent creation doesn\'t infringe (<i>Ladbroke</i>).' },
          { type: 'tf', q: 'You can infringe copyright in a drawing without ever seeing the drawing.', a: true, explain: 'Indirect copying counts: copying a dress made from a design drawing can reproduce the drawing (s 21(3); <i>Burke &amp; Margot Burke</i>).' },
          { type: 'choice', q: 'What did Francis Day & Hunter v Bron decide about subconscious copying?', options: ['It can infringe in law, but on the facts there was no evidence of copying', 'Subconscious copying is never infringement', 'Any similarity between songs proves subconscious copying', 'Only deliberate copying infringes musical works'], a: 0, explain: 'Possible in law; but the similarities were probably coincidental and there was no evidence the defendant had heard the song.' },
          { type: 'choice', q: 'Which exclusive right does an artistic work NOT have under s 31(1)(b)?', options: ['To perform it in public', 'To reproduce it in a material form', 'To publish it', 'To communicate it to the public'], a: 0, explain: 'Artistic works have reproduction, publication and communication rights. Public performance (and adaptation) are for literary, dramatic and musical works.' },
        ],
      },
      {
        title: 'Substantial part: quality, not quantity',
        cards: [
          {
            kind: 'statute', margin: ['s 14(1) CA'],
            title: 'A part counts as the whole',
            statute: { cite: 's 14(1) CA', text: '(a) a reference to the doing of an act in relation to a work … shall be read as including a reference to the doing of that act in relation to <mark>①</mark> a substantial part of the work …; and (b) a reference to a reproduction, adaptation or copy of a work shall be read as including … a reproduction, adaptation or copy of a substantial part of the work.', notes: ['① substantial: a question of fact, judged mainly by quality'] },
            core: `<p>You don't have to copy the whole work to infringe. Taking a <strong>substantial part</strong> is enough. Taking an insubstantial part isn't infringement at all.</p>`,
            source: `${CA} s 14(1) (quoted). ${WJI}, "Substantial Part".`,
          },
          {
            kind: 'rule', margin: ['Ladbroke', 'IceTV'],
            title: 'Quality is what matters',
            core: `<p>"Whether a part is substantial must be decided by its quality rather than its quantity" (<i>Ladbroke v William Hill</i> [1964] 1 WLR 273).</p>
              <p>And quality means <strong>originality</strong>: the question is whether you took the part that made the work original. "The reproduction of a part which by itself has no originality will not normally be a substantial part" (<i>Ladbroke</i>).</p>`,
            deeper: `<p><i>IceTV</i> (unit 1.5): "in order to assess whether material copied is a substantial part of an original literary work, it is necessary to consider not only the extent of what is copied: the quality of what is copied is critical" (French CJ, Crennan and Kiefel JJ). Taking facts, or expression whose form is dictated by the facts, takes nothing original. Substantiality is judged against the work as a whole.</p>`,
            source: `${WJI}, "Substantial Part" (<i>Ladbroke</i> and <i>IceTV</i>, quoted).`,
          },
          {
            kind: 'case', margin: ['[2011] FCAFC 47'],
            title: 'Larrikin v EMI: Kookaburra and Down Under',
            exp: {
              n: 3, cite: '[2011] FCAFC 47',
              hyp: 'The flute riff in Men at Work\'s Down Under reproduces a substantial part of "Kookaburra sits in the old gum tree".',
              method: 'Compare two bars of the Kookaburra melody with the flute phrases in recordings of Down Under: different key, harmony and lyrics around them.',
              result: 'Hypothesis confirmed',
              ok: true,
              discussion: '"In assessing objective similarity, quantity is secondary to quality." The melody was clearly recognisable, and it was what made Kookaburra original.',
            },
            core: `<p>Only five of the ninety-three bars in the recording contained notes similar to <i>Kookaburra</i>. But "when one compares the relevant bars … there is a very close similarity, if not a complete identity", and when the phrases appear, "the flute is the dominant musical element" (Emmett J at [93]).</p>
              <p>The melody taken was "that which constitutes Kookaburra as an original work".</p>`,
            deeper: `<p>The Full Court accepted that the bars sounded different in context (a minor key, new harmony, Mr Hay's vocals). One expert called it "a bit like shining a different light" on the phrase. But the melody was "nevertheless clearly recognisable". The part taken has been called <i>Kookaburra</i>'s "signature", though that label isn't decisive.</p>`,
            source: `${WJI}, <i>EMI Songs v Larrikin</i> (quoted, including Emmett J at [93]).`,
          },
          {
            kind: 'case', margin: ['The Panel', '[2005] FCAFC 53'],
            title: 'The Panel: seconds of television',
            core: `<p>Ten's <i>The Panel</i> rebroadcast short clips (around 8 to 10 seconds) from Nine's programs. Was each a substantial part of Nine's <strong>broadcasts</strong>?</p>
              <p>The High Court said quality as well as quantity matters for Part IV subject matter too. When the case returned to the Full Federal Court, the judges used rough guides: was the clip a "highlight", the "heart", "memorable", an "important ingredient"? Or "trivial, inconsequential or insignificant"?</p>`,
            deeper: `<p>The judges could disagree on the very same clip. Ten seconds of Glenn McGrath reacting to winning the Allan Border Medal was, for Finkelstein J, "plainly a material and important part" ("the highlight of the dinner"). For Hely J, it didn't include the "critical moments" and was "trivial, inconsequential or insignificant". Special leave to the High Court was refused: substantiality is a question of "fact and degree".</p>
              <p>This is Part IV (broadcasts, unit 1.3), but the quality-over-quantity approach is the same.</p>`,
            source: `${WJI}, <i>Network Ten v TCN Channel Nine</i> and <i>TCN Channel Nine v Network Ten (No 2)</i> [2005] FCAFC 53 (quoted).`,
          },
          {
            kind: 'compare', margin: ['COMPARE'],
            title: 'Substantial or not?',
            table: {
              head: ['Case', 'What was taken', 'Substantial?', 'Why'],
              rows: [
                ['<i>Larrikin</i>', 'Two bars of a melody', '<b>Yes</b>', 'The recognisable heart of the original'],
                ['<i>IceTV</i>', 'Time and title facts from many schedules', '<b>No</b>', 'Facts; expression dictated by them'],
                ['<i>Goggomobil</i>', 'The concept and theme of an ad', '<b>No</b>', 'Ideas, not expression (unit 1.4)'],
                ['<i>The Panel</i>', '8–10 second clips', 'It depended', 'Highlight vs trivial: fact and degree'],
              ],
            },
            core: '',
            source: `${WJI}, "Substantial Part" and "Element 2 – Objective Similarity".`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Don\'t count the seconds',
            core: `<ol><li><b>Using percentages.</b> "Only 5% was taken" proves nothing. Ask whether what was taken was the <em>original</em>, important, recognisable part.</li>
              <li><b>Measuring against the wrong work.</b> Substantiality is judged against the <em>plaintiff's</em> work, not the defendant's: two bars were a small part of <i>Down Under</i> but the heart of <i>Kookaburra</i>.</li></ol>`,
            source: `${WJI}, "Substantial Part" ("assessed in respect to the work as a whole"; <i>Larrikin</i>).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'If less than 10% of a work is taken, it can\'t be a substantial part.', a: false, explain: 'Quality, not quantity (<i>Ladbroke</i>). Two bars were enough in <i>Larrikin</i>.' },
          { type: 'choice', q: 'Why was the Down Under flute riff a substantial part of Kookaburra?', options: ['It reproduced the recognisable melody that made Kookaburra original', 'It was played in the same key as Kookaburra', 'Down Under copied most of Kookaburra\'s bars', 'Men at Work admitted copying it'], a: 0, explain: '"In assessing objective similarity, quantity is secondary to quality" (Emmett J at [93]). Down Under was in a different key.' },
          { type: 'choice', q: 'Substantiality is judged by reference to which work?', options: ['The plaintiff\'s work, the one copied from', 'The defendant\'s work', 'Both works averaged together', 'Neither: it\'s a question of how long the copying took'], a: 0, explain: 'You compare what was taken with the copyright work as a whole.' },
          { type: 'similarity', label: 'Similarity index', q: 'A podcast plays 6 seconds of a famous film: the climactic, much-quoted final line. How likely is that a substantial part?', lo: 50, hi: 100, ends: ['Trivial', 'Substantial'], explain: 'Short but likely substantial: a "highlight", "memorable" and arguably the "heart" (<i>The Panel</i>). Expect argument either way on the facts; a fair dealing defence (unit 1.14) is a separate question.' },
          { type: 'match', label: 'Citation network', q: 'Connect each case to what it shows.', pairs: [['Ladbroke', 'Quality rather than quantity'], ['IceTV', 'Facts taken: not a substantial part'], ['Larrikin', 'Two bars can be enough'], ['The Panel', 'A question of fact and degree']], explain: 'Four ways into the same question.' },
          { type: 'tf', label: 'From unit 1.5', q: 'Copying the "time and title" information from many TV schedules took a substantial part of each schedule.', a: false, explain: '<i>IceTV</i>: the expression was dictated by the facts and lacked originality.' },
        ],
      },
      {
        title: 'Putting it together',
        cards: [
          {
            kind: 'test', margin: ['s 36 CA', 's 14 CA'],
            title: 'The full infringement answer',
            steps: ['<b>Subsistence:</b> is there a work with copyright in it? (1.1–1.6)', '<b>Ownership:</b> does the plaintiff own it, or have standing? (1.7–1.8)', '<b>Act:</b> which exclusive right in s 31? Done in Australia?', '<b>Reproduction:</b> causal connection + objective similarity', '<b>Substantial part:</b> did they take the original, important part? (s 14)', '<b>No licence:</b> and then defences (1.14–1.15) and remedies'],
            core: `<p>This is the skeleton of almost every copyright problem question.</p>`,
            source: `${CA} ss 14, 31, 36. The six-step order is our teaching structure.`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'The café jingle',
            core: `<p>Lena wrote and recorded a catchy jingle for her bakery, with a memorable 4-note hook. A café chain's ad agency produced a 30-second ad whose backing track repeats a 4-note hook that's identical except for the key. The agency's composer had worked in the same building as Lena and had admitted hearing her jingle on local radio.</p>
              <ul><li><b>Causal connection:</b> access through the radio; close similarity supports an inference of copying.</li>
              <li><b>Objective similarity:</b> the hook is identical apart from key. A change of key didn't save <i>Down Under</i>.</li>
              <li><b>Substantial part:</b> the hook is the recognisable heart of the jingle: quality, not quantity.</li></ul>
              <p><b>Likely result:</b> reproduction of a substantial part of Lena's musical work, subject to licence and defences.</p>`,
            deeper: `<p>Separate rights may be involved: the musical work (the composition), and Lena's sound recording (Part IV), if any of her actual recording was used. Here only the composition was copied.</p>`,
            source: 'Fictional facts, applying the cards in this unit.',
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Subsistence vs infringement (again)',
            core: `<p>Keep the two questions apart, even though originality runs through both:</p>
              <ol><li><b>Subsistence:</b> is the <em>work</em> original? (Unit 1.5.)</li>
              <li><b>Infringement:</b> was the <em>part taken</em> original enough to be substantial? (This unit.)</li></ol>
              <p>A work can be original as a whole while the part taken (facts, a stock phrase, an idea) isn't. That's exactly what happened in <i>IceTV</i>: originality was conceded, but no substantial part was taken.</p>`,
            source: `${WJI}, <i>IceTV</i> under "Substantial Part".`,
          },
        ],
        questions: [
          { type: 'order', q: 'Put the infringement answer in order.', items: ['Subsistence', 'Ownership', 'Act comprised in the copyright', 'Causal connection and objective similarity', 'Substantial part', 'Licence, defences and remedies'], explain: 'Subsistence → ownership → act → copying → substantial part → licence, defences, remedies.' },
          { type: 'choice', q: 'In IceTV, Nine\'s Weekly Schedule was accepted as original. Why did IceTV still not infringe?', options: ['The part taken (time and title information) wasn\'t a substantial part', 'IceTV had a licence from Nine', 'The schedules were not in material form', 'IceTV acted outside Australia'], a: 0, explain: 'Originality of the whole work was conceded; the part taken lacked originality, so it wasn\'t substantial.' },
          { type: 'tf', q: 'A defendant who copied innocently, not knowing the work was protected, has not infringed.', a: false, explain: 'Innocence isn\'t a defence to infringement. Under s 115(3) it means no damages, but the owner can still get an account of profits.' },
          { type: 'choice', q: 'In the café jingle problem, which fact best supports causal connection?', options: ['The composer admitted hearing Lena\'s jingle on local radio', 'The ad is 30 seconds long', 'Both businesses sell coffee', 'The café\'s hook is in a different key'], a: 0, explain: 'Access is the usual route to proving copying. The key change goes to similarity, and didn\'t help in <i>Larrikin</i>.' },
        ],
      },
    ],
    outline: `<p><b>Direct infringement (s 36(1)).</b> Not the owner, without licence, does in Australia an act comprised in the copyright (s 31). Reproduction = causal connection + objective similarity (<i>SW Hart</i> (1985) 159 CLR 466 at 472; <i>Francis Day v Bron</i> [1963] Ch 587 at 614); independent creation doesn't infringe (<i>Ladbroke</i>); indirect copying counts (s 21(3)); subconscious copying possible but needs evidence (<i>Francis Day</i>). Substantial part (s 14(1)): quality not quantity (<i>Ladbroke</i>); quality = originality of the part taken (<i>IceTV</i>); judged against the plaintiff's work. <i>Larrikin</i> [2011] FCAFC 47 (two bars of <i>Kookaburra</i>, [93]); <i>The Panel</i> [2005] FCAFC 53 (highlights vs trivial: fact and degree). Innocence → no damages, account of profits available (s 115(3)).</p>`,
    treasures: ['Larrikin v EMI', 'The Panel'],
  };
})();
