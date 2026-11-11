/* Copyright 1.1 · Literary works. Written and checked 11 Nov 2026 against the Copyright Act 1968 (Compilation No. 65)
   and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJ = '<a href="https://wikijuris.net/ausip/copyrightsubsp3/" target="_blank" rel="noopener">Wikijuris, Copyright: Subject matter</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const WB = '<a href="https://wikijuris.net/ausip/copyrightbackground/" target="_blank" rel="noopener">Wikijuris, Copyright introduction</a> (CC BY-SA 3.0)';

  D.units['u1-1'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Copyright at a glance',
        cards: [
          {
            kind: 'guide', margin: ['CHAPTER 1'],
            title: 'Welcome to the Copyright column',
            core: `<p>The next 17 elements (5 to 21) run down the Copyright column, in the same five-question order you'll use for every right:</p>
              <ol><li><b>What</b> does it protect? (1.1–1.3)</li><li><b>How</b> do you get it? (1.4–1.6)</li><li><b>Whose</b>, and for how long? (1.7–1.9)</li><li>What is a <b>breach</b>? (1.10–1.13)</li><li>What are the <b>escapes</b>? (1.14–1.15)</li></ol>
              <p>This first lesson is an overview of the whole regime. Every point gets its own element later.</p>`,
            source: 'About this app. The structure follows the course syllabus.',
          },
          {
            kind: 'rule', margin: ['Wikijuris'],
            title: 'Copyright in six facts',
            core: `<ol><li>It protects <strong>creative works</strong> and other subject matter (recordings, films, broadcasts, editions), not ideas or facts.</li>
              <li>It's <strong>automatic</strong>: it arises when a work is fixed in material form. No registration, no © needed.</li>
              <li>It usually lasts for the author's <strong>life plus 70 years</strong>, then the work enters the public domain.</li>
              <li>The <strong>creator</strong> is generally the first owner (employers own employees' work).</li>
              <li>The owner has <strong>exclusive rights</strong>: to reproduce, publish, perform, communicate and adapt.</li>
              <li>Australia has <strong>fair dealing</strong> exceptions for specific purposes, not American-style "fair use".</li></ol>`,
            deeper: `<p>Creators also have <b>moral rights</b> (attribution, against false attribution, integrity), which stay with the individual creator even when the copyright is sold (unit 1.16).</p>`,
            source: `${WB}, "Copyright basics".`,
          },
          {
            kind: 'rule', margin: ['Statute of Anne', '1968 Act'],
            title: 'Where copyright came from',
            core: `<p>Before copyright, a printers' guild, the <strong>Stationers' Company</strong>, held a royal monopoly over printing, enforced through censorship laws. When Parliament let the licensing system lapse, the Stationers pressed for new protection, framed this time around authors.</p>
              <p>The result was the <i>Statute of Anne</i> (1710), the first copyright statute administered by government and courts rather than private parties: a term of <strong>14 years</strong>, renewable once, after which works fell into the public domain.</p>
              <p>In Australia, the <i>Copyright Act 1968</i> took effect on 1 May 1969 and is still the governing Act (unit 0.3).</p>`,
            source: `${WB}, "International and Historical Context" and timeline. ${CA}, endnotes (commencement checked).`,
          },
          {
            kind: 'test', margin: ['STRUCTURE'],
            title: 'Six questions for any copyright problem',
            steps: ['<b>Subsistence:</b> is there copyright in it?', '<b>Ownership:</b> who owns it?', '<b>Infringement:</b> has an exclusive right been infringed?', '<b>Defences:</b> does an exception apply?', '<b>Remedies:</b> what can the owner get?', '<b>Related rights:</b> moral rights, anti-circumvention, designs?'],
            core: '<p>Use this skeleton in every problem answer. The Copyright column teaches each step in turn.</p>',
            source: `${WB}, "A Practical Structure for Approaching Copyright Questions".`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Two myths to drop now',
            core: `<ol><li><b>"It's fair use."</b> Australia has no general fair use defence: only fair dealing for listed purposes (research or study, criticism or review, parody or satire, reporting news, professional advice from a lawyer or patent or trade marks attorney, disability access), and the dealing must also be fair.</li>
              <li><b>"No © symbol, so it's free."</b> Copyright is automatic. Assume a work is protected unless you know otherwise.</li></ol>
              <p>And one more: transferring copyright needs writing signed by the <strong>assignor</strong> (s 196(3)). Some summaries say "signed by both parties"; the Act only needs the assignor's signature.</p>`,
            source: `${WB}, "Exceptions: Fair dealing and fair use are different" and "Copyright is automatic". ${CA} s 43(2) (professional advice, text checked), s 196(3) (quoted in unit 1.8). Note: Wikijuris says an assignment must be "signed by both parties"; the Act requires only the assignor's signature.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A work without a © symbol is free to copy.', a: false, explain: 'Copyright is automatic; no notice or registration is needed.' },
          { type: 'choice', q: 'What was the first copyright statute, and how long did its protection last?', options: ['The Statute of Anne (1710): 14 years, renewable once', 'The Copyright Act 1968: life + 70', 'The Berne Convention: life + 50', 'The Stationers\' Charter: forever'], a: 0, explain: 'The Statute of Anne set a 14-year term with one renewal, then the public domain.' },
          { type: 'order', q: 'Put the six copyright questions in order.', items: ['Subsistence', 'Ownership', 'Infringement', 'Defences', 'Remedies', 'Related rights'], explain: 'The skeleton for every copyright problem.' },
          { type: 'tf', q: 'Australia has a general "fair use" defence like the United States.', a: false, explain: 'Australia has fair dealing for specific purposes only.' },
          { type: 'choice', q: 'Whose signature does an assignment of copyright need (s 196(3))?', options: ['The assignor\'s (or someone on their behalf)', 'Both parties\'', 'A witness\'s', 'IP Australia\'s'], a: 0, explain: '"In writing signed by or on behalf of the assignor".' },
        ],
      },
      {
        title: 'What counts as a literary work',
        cards: [
          {
            kind: 'statute', margin: ['s 10(1) CA', 'ULP (1916)'],
            title: '"Literary" means written, not literature',
            statute: { cite: 's 10(1) CA · definition', text: '<b>literary work</b> includes: <mark>①</mark> (a) a table, or compilation, expressed in words, figures or symbols; and <mark>②</mark> (b) a computer program or compilation of computer programs.', notes: ['① timetables, directories, databases (if original: unit 1.5)', '② software, as source or object code'] },
            core: `<p>"Literary" has nothing to do with literary merit. In <i>University of London Press v University Tutorial Press</i> [1916] 2 Ch 601, Peterson J said it covers "work which is expressed in print or writing, irrespective of the question whether the quality or style is high", in the sense of "political or electioneering literature".</p>`,
            deeper: `<p>The definition says "includes", so it isn't exhaustive: novels, poems, letters, essays, exam papers and song lyrics are all literary works.</p>`,
            source: `${CA} s 10(1) (quoted). ${WJ}, "Literary Work" (<i>ULP</i>, Peterson J at 608).`,
          },
          {
            kind: 'rule', margin: ['Ladbroke', 'Kalamazoo'],
            title: 'Humble things are literary works too',
            core: `<p>The cases have recognised as literary works:</p>
              <ul><li>football pool coupons (<i>Ladbroke v William Hill</i> [1964] 1 WLR 273);</li><li>a racing programme (<i>Mander v O'Brien</i> (1934) SASR 87);</li><li>chronological lists of football matches (<i>Football League v Littlewoods</i> [1959] Ch 637);</li><li>lists of bingo numbers (<i>Mirror Newspapers v Queensland Newspapers</i> [1982] Qd R 305);</li><li>blank accounting forms (<i>Kalamazoo v Compact Business Systems</i> (1985) 5 IPR 213).</li></ul>`,
            deeper: `<p>Several of these are compilations decided under the old "skill and labour" approach. After <i>IceTV</i> and <i>Phone Directories</i> (unit 1.5), each would still need identifiable human authors whose effort was directed to the expression.</p>`,
            source: `${WJ}, "Literary Work" (list of examples and citations).`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA'],
            title: 'Software is a literary work',
            statute: { cite: 's 10(1) CA · definition', text: '<b>computer program</b> means <mark>①</mark> a set of statements or instructions <mark>②</mark> to be used directly or indirectly in a computer <mark>③</mark> in order to bring about a certain result.', notes: ['① the code itself', '② used in a computer, directly or indirectly', '③ functional purpose doesn\'t stop it being a literary work'] },
            core: `<p>Computer programs are literary works, so a developer gets the same rights as any author. Both <strong>source code</strong> and <strong>object code</strong> are protected.</p>`,
            deeper: `<p>It wasn't always so. In <i>Computer Edge v Apple</i>, programs in object code were held not to be literary works; the 1984 amendments reversed that.</p>
              <p>Wikijuris quotes an older definition ("expressed in any language, code or notation" … to "perform a particular function"). The current s 10 wording is the one above.</p>`,
            source: `${CA} s 10(1), "computer program" (quoted from the current compilation). ${WJ}, "Copyright protection for software and databases" (<i>Computer Edge</i>; 1984 amendments).`,
          },
          {
            kind: 'case', margin: ['[1999] HCA 49'],
            title: 'Data Access v Powerflex',
            exp: {
              n: 4, cite: '[1999] HCA 49',
              hyp: 'Writing a program that works like Dataflex, without seeing its source code, infringes copyright in Dataflex.',
              method: 'Dr Bennett wrote a compatible program sold by Powerflex. He had no access to Dataflex\'s source code and didn\'t decompile it.',
              result: 'Hypothesis rejected · except one table',
              discussion: 'Observing what a program does and writing your own code to do the same doesn\'t infringe. Only a compression table, which was reproduced, infringed.',
            },
            core: `<p><b>Held</b> (High Court): no infringement, except for a compression table used to reduce storage space.</p>
              <p>Copyright protects the <em>code</em>, not the <em>function</em>. Writing new code that does the same job is taking the idea (unit 1.4).</p>`,
            deeper: `<p>Contrast <i>Autodesk v Dyason (No 2)</i> [1993] HCA 6: the defendant's "Autokey" replaced the "Autolock" device that stopped AutoCAD running on more than one computer. Held: it reproduced a substantial part of the AutoCAD program. Copying code, rather than function, can infringe (unit 1.11).</p>`,
            source: `${WJ}, <i>Data Access v Powerflex</i> and <i>Autodesk v Dyason (No 2)</i>.`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Quality is irrelevant; "work" is not',
            core: `<ol><li><b>Don't ask whether it's good writing.</b> A shopping list can be a literary work (<i>ULP</i>).</li>
              <li><b>Do ask whether it's a "work" at all.</b> Very short things (titles, names, slogans, most headlines) usually aren't (Lesson B).</li>
              <li><b>Software: separate code from function.</b> Copying what a program does isn't copying the program (<i>Data Access</i>).</li></ol>`,
            source: `${WJ}, "Literary Work", "Headlines, Titles and Names", <i>Data Access</i>.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A literary work must have some literary merit.', a: false, explain: '"Irrespective of the question whether the quality or style is high" (<i>ULP</i>, Peterson J).' },
          { type: 'sort', label: 'Spectroscopy', q: 'Literary work, or not a work at all?', buckets: ['Can be a literary work', 'Usually not a work'], items: [{ t: 'A train timetable', b: 0 }, { t: 'A blank accounting form', b: 0 }, { t: 'An app\'s source code', b: 0 }, { t: 'A single invented brand name', b: 1 }, { t: 'A three-word book title', b: 1 }], explain: 'Tables, forms and programs are literary works (s 10; <i>Kalamazoo</i>). Single words and titles are usually too insubstantial (<i>Exxon</i>; <i>Francis Day v Twentieth Century Fox</i>).' },
          { type: 'choice', q: 'How does s 10 now define a "computer program"?', options: ['A set of statements or instructions to be used directly or indirectly in a computer in order to bring about a certain result', 'Any software sold commercially', 'Source code only, not object code', 'A program registered with IP Australia'], a: 0, explain: 's 10(1). Object code is covered too, since the 1984 amendments.' },
          { type: 'choice', q: 'Why didn\'t Powerflex\'s program (mostly) infringe Dataflex?', options: ['It was written without copying Dataflex\'s code: it reproduced the function, not the program', 'Computer programs aren\'t literary works', 'Dataflex wasn\'t original', 'Powerflex had a licence'], a: 0, explain: 'Same function, new code: no infringement, except the reproduced compression table (<i>Data Access v Powerflex</i>).' },
          { type: 'tf', q: 'In Autodesk v Dyason, the defendant\'s Autokey device was held to reproduce a substantial part of the AutoCAD program.', a: true, explain: 'It infringed by reproducing a substantial part of the program. Contrast <i>Data Access</i>, where only the function was copied.' },
        ],
      },
      {
        title: 'Titles, names and headlines',
        cards: [
          {
            kind: 'case', margin: ['Francis Day v 20th Century Fox (PC)'],
            title: 'The Man Who Broke the Bank at Monte Carlo',
            core: `<p>Francis Day &amp; Hunter had released a song called <i>The Man Who Broke the Bank at Monte Carlo</i>. Years later, Twentieth Century Fox made a film with the same title, but nothing else in common.</p>
              <p><b>Held</b> (Privy Council): no copyright in the title. "To break the bank" is a hackneyed expression, and Monte Carlo is "the most obvious place" for it to happen.</p>`,
            deeper: `<p>A name alone can't have copyright unless it's sufficiently original and distinctive, and in practice that almost never happens. See also <i>Exxon</i> (unit 1.5): an invented word, though original, wasn't substantial enough to be a literary work.</p>`,
            source: `${WJ}, "Headlines, Titles and Names" (<i>Francis Day &amp; Hunter v Twentieth Century Fox</i>; <i>Exxon</i>).`,
          },
          {
            kind: 'compare', margin: ['[2010] FCA 984', '[2010] EWHC 3099 (Ch)'],
            title: 'Headlines: Australia vs England',
            table: {
              head: ['', 'Australia: <i>Fairfax v Reed</i> [2010] FCA 984', 'England: <i>NLA v Meltwater</i> [2010] EWHC 3099 (Ch)'],
              rows: [
                ['General rule', 'Headlines "generally are, like titles, simply too insubstantial and too short" ([44])', 'Headlines "are capable of being literary works" ([71])'],
                ['Evidence', 'A particular headline might qualify on evidence ([46]); authorship can\'t be assumed ([84])', 'Fuller evidence: headlines "involve considerable skill in devising" ([70])'],
                ['Result', 'Generally not literary works', 'Some Daily Mail headlines were; upheld on appeal ([2011] EWCA Civ 890)'],
              ],
            },
            core: '',
            deeper: `<p>The difference is partly evidence: Proudman J noted the evidence before her was "much fuller than that before Bennett J in Fairfax". In an Australian exam, <i>Fairfax</i> states the law; <i>Meltwater</i> is useful for critique.</p>`,
            source: `${WJ}, <i>Fairfax v Reed</i> and <i>NLA v Meltwater</i> (quoted).`,
          },
          {
            kind: 'rule', margin: ['passing off', 'ACL'],
            title: 'Names are protected elsewhere',
            core: `<p>Titles and names are better protected by <strong>trade marks</strong> and <strong>passing off</strong> (chapters 2 and 3) than by copyright.</p>
              <ul><li><i>WH Allen v Brown Watson</i> [1965] RPC 191: <b>passing off</b> where a book was published as "Frank Harris: My Life and Adventures", given the reputation of Frank Harris's own "My Life and Loves".</li>
              <li><i>McWilliam's Wines v McDonald's</i> [1980] FCA 159: a "Big Mac" wine didn't breach the misleading-conduct provision. People might be <em>confused</em>, but that isn't the same as being <em>misled</em>.</li></ul>`,
            source: `${WJ}, "Headlines, Titles and Names" (<i>WH Allen</i>; <i>McWilliam's Wines</i>, decided under the former <i>Trade Practices Act</i> s 52, now ACL s 18).`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Name questions: switch regimes',
            core: `<p>If a problem question involves a <strong>title, brand name, slogan or headline</strong>:</p>
              <ol><li>Say copyright is unlikely (too insubstantial: <i>Exxon</i>, <i>Fairfax</i>).</li><li>Then move on to trade marks, passing off and the ACL, where names are actually protected.</li></ol>
              <p>Spending a page on copyright in a three-word title costs marks.</p>`,
            source: `${WJ}, "Headlines, Titles and Names".`,
          },
        ],
        questions: [
          { type: 'choice', q: 'Why was there no copyright in the title "The Man Who Broke the Bank at Monte Carlo"?', options: ['It was a hackneyed expression, not sufficiently original or substantial', 'Song titles are trade marks, not works', 'The song was out of copyright', 'Titles are only protected if registered'], a: 0, explain: '"To break the bank" is hackneyed, and Monte Carlo is the obvious place for it (<i>Francis Day &amp; Hunter</i>, PC).' },
          { type: 'match', label: 'Citation network', q: 'Connect each case to its point.', pairs: [['Fairfax v Reed', 'Headlines generally too short'], ['NLA v Meltwater', 'Headlines can be literary works (UK)'], ['WH Allen v Brown Watson', 'Book title protected by passing off'], ['McWilliam\'s Wines', 'Confusion is not being misled']], explain: 'Australia and England diverge on headlines; names find protection outside copyright.' },
          { type: 'tf', q: 'In Australia, newspaper headlines are generally literary works in their own right.', a: false, explain: '<i>Fairfax v Reed</i> at [44]: generally "too insubstantial and too short". (<i>Meltwater</i> took a different view in England.)' },
          { type: 'choice', q: 'A rival café copies your café\'s name. Which is your best line of attack?', options: ['Trade mark infringement or passing off', 'Copyright in the name as a literary work', 'Copyright in the name as an artistic work', 'Moral rights'], a: 0, explain: 'Names are a job for trade marks and passing off. Copyright in a name almost never succeeds.' },
          { type: 'tf', label: 'From unit 1.5', q: 'An invented word like "Exxon" is original, and therefore a literary work.', a: false, explain: 'In <i>Exxon</i> the word was original but not substantial enough for copyright to subsist.' },
        ],
      },
    ],
    outline: `<p><b>Literary works (s 10).</b> Includes tables and compilations in words, figures or symbols, and computer programs. "Literary" = written or printed, whatever the quality (<i>ULP</i> [1916] 2 Ch 601 at 608). Coupons, programmes, lists and forms qualify (<i>Ladbroke</i>; <i>Kalamazoo</i>). Computer program = statements or instructions used directly or indirectly in a computer to bring about a certain result; source and object code. Function isn't protected (<i>Data Access v Powerflex</i> [1999] HCA 49); reproducing a substantial part of the code infringes (<i>Autodesk v Dyason (No 2)</i> [1993] HCA 6). Titles and names usually not works (<i>Francis Day v Twentieth Century Fox</i>; <i>Exxon</i>); headlines generally not (<i>Fairfax v Reed</i> [2010] FCA 984 at [44]; contra UK <i>Meltwater</i>). Use trade marks and passing off for names (<i>WH Allen</i>; <i>McWilliam's Wines</i>).</p>`,
    treasures: ['Data Access v Powerflex'],
  };
})();
