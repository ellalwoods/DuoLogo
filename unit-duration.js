/* Copyright 1.9 · Duration. Written and checked 11 Nov 2026 against the Copyright Act 1968 (Compilation No. 65), the
   Copyright Amendment Act 2026, the US Free Trade Agreement Implementation Act 2004 and Wikijuris (CC BY-SA 3.0).
   See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJD = '<a href="https://wikijuris.net/ausip/copyrightduration/" target="_blank" rel="noopener">Wikijuris, Duration of copyright</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-9'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'How long works last',
        cards: [
          {
            kind: 'rule', margin: ['s 33 CA'],
            title: 'Life plus 70, to the end of the year',
            core: `<p>For most literary, dramatic, musical and artistic works, copyright lasts until <strong>70 years after the calendar year in which the author died</strong> (s 33).</p>
              <p>"After the calendar year" means terms run to <strong>31 December</strong>. An author who died on 3 March 1960 has copyright until the end of 2030; it expires on 1 January 2031.</p>
              <p>For a work of joint authorship, count from the death of the author who <strong>died last</strong> (s 80).</p>`,
            source: `${CA} s 33(2)–(3) (tables checked), s 80 (text checked). ${WJD}, table.`,
          },
          {
            kind: 'rule', margin: ['AUSFTA', '2004 Act Sch 9 item 131'],
            title: '2005: from 50 to 70, without revival',
            core: `<p>Until 2005 the term was life plus <strong>50</strong>. The <i>Australia–United States Free Trade Agreement</i> required the extension to 70, made by the <i>US Free Trade Agreement Implementation Act 2004</i>.</p>
              <p>The extension applies only to copyright that <strong>still subsisted</strong> when it started (Sch 9 item 131). Copyright that had already expired wasn't revived.</p>`,
            deeper: `<p>So an author who died in 1954 or earlier: under life + 50, copyright expired at the end of 2004 and stays expired. An author who died in 1955: copyright was still running on 1 January 2005, so it got the extra 20 years (to the end of 2025).</p>`,
            source: `<i>US Free Trade Agreement Implementation Act 2004</i> Sch 9 items 120 (s 33: "Omit '50 years', substitute '70 years'") and 131 (application), as made (text checked). ${WJD}, "Extension of the copyright term". The worked dates are our arithmetic.`,
          },
          {
            kind: 'statute', margin: ['s 33(2)–(3) CA', 's 29A CA'],
            title: 'The 2019 rules: "made public"',
            core: `<p>Since 1 January 2019, s 33 works on whether and when a work was <strong>made public</strong> (published, performed in public, broadcast or communicated, exhibited, and so on: s 29A). Unpublished works no longer have perpetual copyright.</p>
              <table class="cmp"><tr><th>Situation</th><th>Copyright lasts until 70 years after…</th></tr>
              <tr><td>Author known (the usual case)</td><td>the year the author died</td></tr>
              <tr><td>Author's identity not generally known; made public within 50 years of being made</td><td>the year it was first made public</td></tr>
              <tr><td>Author's identity not generally known; not made public within 50 years</td><td>the year it was made</td></tr></table>`,
            deeper: `<p>Works first made public <em>before</em> 1 January 2019 follow the older table in s 33(2): for example, a literary, dramatic or musical work (not a computer program) or an engraving, first made public after the author's death, lasts until 70 years after it was first made public.</p>`,
            source: `${CA} ss 29A(1), 33(2)–(3) (tables checked). ${WJD}, "Copyright in Unpublished and Orphan Works". <i>Copyright Amendment (Disability Access and Other Measures) Act 2017</i> Sch 2, in force 1 Jan 2019.`,
          },
          {
            kind: 'statute', margin: ['Part V Div 2AAA CA', '2026'],
            title: 'Orphan works: the 2026 scheme',
            core: `<p>A different problem: the work is still in copyright, but you <strong>can't find the owner</strong> to ask permission. Since <strong>2 April 2026</strong>, if you use it anyway and the conditions are met, the court can't award damages or an account of profits against you, only a "reasonable payment" to the owner (s 116AAD).</p>
              <p>The conditions (s 116AAE): a <b>reasonably diligent search</b>, done within a reasonable time before the use; a <b>record</b> of the search; the owner <b>couldn't be identified and located</b>; and a clear, reasonably prominent <b>notice</b> saying so.</p>`,
            deeper: `<p>Wikijuris uses "orphan works" for works whose author is unknown (the duration rules above). The 2026 scheme is about remedies when the <em>owner</em> can't be found. Keep the two apart in an exam.</p>
              <p>No reasonable payment can be ordered either if the use was solely private and domestic <em>and</em> the defendant promptly stopped, or has agreed terms with the owner for continuing use (s 116AAD(4)). The defendant bears the burden of proving the conditions (s 116AAD(5)).</p>`,
            source: `${CA} ss 116AAB, 116AAD(2)–(5), 116AAE (text checked); <i>Copyright Amendment Act 2026</i> Sch 1 (in force 2 April 2026). ${WJD} (its "orphan works" usage).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'An author died on 15 June 1980. When does copyright in her published novel expire?', options: ['At the end of 2050', 'On 15 June 2050', 'At the end of 2030', 'Never: it\'s in a published book'], a: 0, explain: '70 years after the calendar year of death: the end of 2050 (s 33).' },
          { type: 'choice', q: 'Two co-authors of a play die in 1990 and 2010. When does copyright end?', options: ['At the end of 2080', 'At the end of 2060', 'At the end of 2070', 'Each author\'s share ends separately'], a: 0, explain: 'Joint authorship: count from the author who died last (s 80): 2010 + 70.' },
          { type: 'tf', q: 'The 2005 extension from life + 50 to life + 70 revived copyright in works whose term had already expired.', a: false, explain: 'It only applied to copyright subsisting on or after commencement (2004 Act Sch 9 item 131).' },
          { type: 'choice', q: 'An anonymous diary was written in 1900 and first made public in 2025. The author is unknown. Which rule applies?', options: ['Not made public within 50 years of being made: 70 years after the year it was made, so it has expired', '70 years after first made public, so until the end of 2095', 'Perpetual copyright, because it was unpublished for so long', 'Life of the author plus 70'], a: 0, explain: 's 33(3) table item 2: identity not generally known and not made public within 50 years of being made, so 70 years after the year it was made (1900 + 70).' },
          { type: 'sort', label: 'Spectroscopy', q: 'Duration rule, or the 2026 orphan-works remedies scheme?', buckets: ['Duration (s 33)', 'Orphan works scheme (Div 2AAA)'], items: [{ t: 'The author of a poem is unknown: how long is it protected?', b: 0 }, { t: 'A photo is in copyright but the owner can\'t be found', b: 1 }, { t: 'A diligent search and a prominent notice', b: 1 }, { t: '70 years after the year first made public', b: 0 }], explain: 'Unknown authors affect how long copyright lasts. The 2026 scheme limits remedies when an owner of subsisting copyright can\'t be located.' },
          { type: 'order', q: 'Put the orphan-works conditions in the order they happen.', items: ['Reasonably diligent search', 'Keep a record of the search', 'Owner still can\'t be identified and located', 'Give a clear, prominent notice and use the work'], explain: 's 116AAE(2)–(7).' },
        ],
      },
      {
        title: 'Other subject matter, and the debate',
        cards: [
          {
            kind: 'compare', margin: ['ss 93–96, 180 CA'],
            title: 'Every term in one table',
            table: {
              head: ['Subject matter', 'Copyright lasts until…'],
              rows: [
                ['Works (author known)', '70 years after the year the author died (s 33)'],
                ['Sound recordings and films', '70 years after the year first made public; if not made public within 50 years of being made, 70 years after the year made (s 93). Made public before 2019: 70 years after that year'],
                ['Broadcasts', '50 years after the year the broadcast was made (s 95)'],
                ['Published editions', '25 years after the year the edition was first published (s 96)'],
                ['Crown copyright material', '50 years after the year it was made (s 180)'],
              ],
            },
            core: '',
            deeper: `<p>A repeat broadcast doesn't restart the clock: copyright in a repetition expires with the original broadcast's 50-year term (s 95(2)).</p>`,
            source: `${CA} ss 93, 95, 96, 180 (text checked). ${WJD}, table.`,
          },
          {
            kind: 'example', margin: ['APPLY', 'TIMELINE'],
            title: 'One album, four clocks',
            core: `<p>A songwriter (who died in 2000) wrote a song. A label recorded it in 2010 and released it in 2011, in a CD booklet with a newly typeset lyric sheet. The ABC broadcast it in 2012.</p>
              <ul><li><b>Song (musical and literary works):</b> to the end of <strong>2070</strong> (death + 70).</li>
              <li><b>Sound recording:</b> made public 2011: to the end of <strong>2081</strong> (s 93).</li>
              <li><b>Broadcast:</b> made 2012: to the end of <strong>2062</strong> (s 95).</li>
              <li><b>Published edition (the lyric sheet layout):</b> first published 2011: to the end of <strong>2036</strong> (s 96).</li></ul>`,
            deeper: `<p>So after 2070 anyone could record the song afresh, but copying the 2010 recording itself would still infringe until 2081.</p>`,
            source: 'Fictional facts; terms calculated from ss 33, 93, 95 and 96.',
          },
          {
            kind: 'critique', margin: ['ESSAY', 'PC 2016'],
            title: 'Is 70 years too long?',
            core: `<p><b>Against long terms:</b> most commercial works earn for only a few years, yet stay locked up for decades. Landes and Posner (2002) suggested about 25 years would give owners most of the value of perpetual protection. The Productivity Commission (2016): "While a single optimal copyright term is arguably elusive, it is likely to be considerably less than 70 years after death".</p>
              <p><b>The constraint:</b> Australia can't simply shorten the term. Berne and the AUSFTA tie it in.</p>
              <p><b>Partial fixes:</b> ending perpetual copyright in unpublished works (2019) and the orphan-works scheme (2026).</p>`,
            source: `${WJD}, "Finding the Balance" and "The Future" (Productivity Commission, <i>Intellectual Property Arrangements</i>, Inquiry Report No 78 (2016), quoted; Landes and Posner, <i>Indefinitely Renewable Copyright</i> (2002)).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Duration traps',
            core: `<ol><li><b>Counting from the date, not the year.</b> Terms end on 31 December of the 70th year.</li>
              <li><b>Using the author's death for Part IV.</b> Recordings and films run from when they're made public; broadcasts and editions from making or publication.</li>
              <li><b>Forgetting the 2005 cut-off.</b> Authors who died in 1954 or earlier: expired, and not revived.</li>
              <li><b>Mixing up the two kinds of "orphan" work</b>: unknown author (duration) vs unfindable owner (2026 remedies).</li></ol>`,
            source: `${CA} ss 33, 93–96, 116AAD; 2004 Act Sch 9 item 131.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'A TV broadcast was made in 2000. When does copyright in the broadcast expire?', options: ['At the end of 2050', 'At the end of 2070', 'At the end of 2025', 'When the presenter dies + 70'], a: 0, explain: '50 years after the year the broadcast was made (s 95).' },
          { type: 'choice', q: 'How long does published edition copyright last?', options: ['25 years after the year the edition was first published (s 96)', 'Life of the typesetter + 70', '50 years after publication', 'As long as the works in it'], a: 0, explain: 's 96(2).' },
          { type: 'tf', q: 'Copyright in a sound recording runs from the death of the singer.', a: false, explain: 'Recordings run from when they\'re first made public (or made): s 93.' },
          { type: 'choice', q: 'What did the Productivity Commission (2016) say about the copyright term?', options: ['The optimal term is likely considerably less than 70 years after death', 'It should be extended to 95 years', 'Life + 70 is optimal', 'Copyright should be perpetual'], a: 0, explain: '"While a single optimal copyright term is arguably elusive, it is likely to be considerably less than 70 years after death."' },
          { type: 'tf', q: 'Australia can shorten its copyright term at any time by amending the Act.', a: false, explain: 'International obligations (Berne, AUSFTA) constrain it, which is why the debate is largely moot for now.' },
          { type: 'choice', q: 'Crown copyright in a government report made in 2020 lasts until:', options: ['The end of 2070 (s 180)', 'The end of 2090', 'Forever', 'The end of 2045'], a: 0, explain: '50 years after the year the material was made.' },
        ],
      },
    ],
    outline: `<p><b>Duration.</b> Works: 70 years after the year the author died (s 33); joint authors: last to die (s 80); runs to 31 Dec. 2005 AUSFTA extension 50 → 70, no revival (2004 Act Sch 9 item 131: authors who died 1954 or earlier stay expired). Since 2019 the test is "made public" (s 29A): unknown author → 70 years after first made public (if within 50 years of making), else after making (s 33(3)). Recordings and films: 70 years after first made public, or after making (s 93). Broadcasts: 50 years after made (s 95). Editions: 25 years after first published (s 96). Crown: 50 years after made (s 180). Orphan works scheme (2 April 2026, Part V Div 2AAA): diligent search, record, owner unfindable, notice → no damages or account, only reasonable payment (ss 116AAD–116AAE). PC 2016: optimal term "considerably less" than life + 70.</p>`,
    treasures: ['The 2026 orphan works scheme'],
  };
})();
