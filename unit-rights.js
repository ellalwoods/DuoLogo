/* Copyright 1.10 · The exclusive rights. Written and checked 11 Nov 2026 against the Copyright Act 1968
   (Compilation No. 65) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJI = '<a href="https://wikijuris.net/ausip/copyrightinfringement/" target="_blank" rel="noopener">Wikijuris, Copyright infringement</a> (CC BY-SA 3.0)';
  const WJ4 = '<a href="https://wikijuris.net/ausip/copyrightsubsp4/" target="_blank" rel="noopener">Wikijuris, Subject matter other than works</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-10'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'The five rights in a work',
        cards: [
          {
            kind: 'statute', margin: ['s 31(1)(a) CA'],
            title: 'What the owner of a work controls',
            statute: { cite: 's 31(1)(a) CA', text: 'in the case of a literary, dramatic or musical work, [the exclusive right] to do all or any of the following acts: (i) <mark>①</mark> to reproduce the work in a material form; (ii) <mark>②</mark> to publish the work; (iii) <mark>③</mark> to perform the work in public; (iv) <mark>④</mark> to communicate the work to the public; … (vi) <mark>⑤</mark> to make an adaptation of the work…', notes: ['① copying (unit 1.11)', '② first making it available', '③ live or played, to an audience', '④ online and broadcast', '⑤ translations, dramatisations, arrangements'] },
            core: `<p>Copyright is a bundle of separate rights, each of which can be licensed or infringed on its own. Artistic works get a shorter list: reproduce, publish and communicate (s 31(1)(b)).</p>`,
            source: `${CA} s 31(1) (quoted). ${WJI}, "The Exclusive Rights".`,
          },
          {
            kind: 'rule', margin: ['s 31(1)(a)(ii)', 'Avel (1990)'],
            title: 'Publishing: the right of first publication',
            core: `<p>To "publish" here means making available to the public in Australia something that hasn't been made available before (<i>Avel v Multicoin Amusements</i> [1990] HCA 58). So it's a <strong>first publication</strong> right.</p>
              <p>Republishing something already public doesn't infringe the publication right, but it will usually infringe the <strong>reproduction</strong> or <strong>communication</strong> right instead.</p>`,
            source: `${WJI}, "Infringement – Publish the Work" (<i>Avel</i>).`,
          },
          {
            kind: 'rule', margin: ['s 31(1)(a)(iii)', 'APRA'],
            title: 'Performing in public',
            core: `<p>Performance covers live performance and playing recordings to an audience. A performance given to members of the public is "in public" unless it's shown to be <strong>domestic</strong> in character.</p>
              <p>In practice, that's why businesses that play music (shops, gyms, cafés, venues) take out licences: APRA collects performing-rights fees on behalf of songwriters, who assign it those rights.</p>`,
            deeper: `<p>Playing music at a family birthday party is domestic. Playing the same music in a café, to customers, is not.</p>`,
            source: `${WJI}, "Infringement – Perform the Work in Public". Wikijuris, Assignments and licences (APRA) (CC BY-SA 3.0).`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA "communicate"'],
            title: 'Communicating to the public: the online right',
            statute: { cite: 's 10(1) CA · definitions', text: '<b>communicate</b> means <mark>①</mark> make available online or <mark>②</mark> electronically transmit … a work or other subject-matter…<br><br><b>to the public</b> means <mark>③</mark> to the public within or outside Australia.', notes: ['① uploading counts, even if no one downloads it', '② streaming, emailing to many, broadcasting', '③ an Australian upload to overseas users counts'] },
            core: `<p>Introduced by the <i>Copyright Amendment (Digital Agenda) Act 2000</i>, replacing and extending the old broadcasting right. Posting a work on a website or social media is "making it available online".</p>`,
            deeper: `<p>"To the public" is broader than "in public". In <i>Telstra v APRA</i> (1997) 191 CLR 140, music on hold played to individual callers was a transmission to the public: "there can be a communication to individual members of the public in a private or domestic setting which is nevertheless a communication to the public".</p>
              <p>A communication (other than a broadcast) is made by the person "responsible for determining the content" of it, not someone who merely clicks a link (s 22(6)–(6A)).</p>`,
            source: `${CA} s 10(1) "communicate", "to the public" (quoted); s 22(6)–(6A) (checked). ${WJI}, "Infringement – Communicate to the Public". ${WJ4} (<i>Telstra v APRA</i>, quoted).`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA "adaptation"'],
            title: 'Adaptations',
            core: `<p>An "adaptation" (s 10(1)) means:</p>
              <ul><li>a <b>dramatisation</b> of a non-dramatic literary work (novel → play or screenplay), or the reverse;</li>
              <li>a <b>translation</b>;</li>
              <li>a version told mainly through <b>pictures</b> (a graphic novel of a book);</li>
              <li>an <b>arrangement or transcription</b> of a musical work;</li>
              <li>for software, a version in another language or code that isn't a reproduction.</li></ul>
              <p>Film and TV rights deals, translation deals and music arrangements are all licences of this right.</p>`,
            source: `${CA} s 10(1) "adaptation" (text checked). ${WJI}, "Infringement – Make an Adaptation of the Work".`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'One act, several rights',
            core: `<p>A single act often engages more than one right. Uploading a translated article to a website involves the <b>adaptation</b> (the translation), a <b>reproduction</b> (copying it onto a server) and a <b>communication</b> (making it available online). A licence has to cover all of them.</p>
              <p>And remember artistic works have <strong>no</strong> performance or adaptation right: copying a painting is reproduction; there's no "performing" it.</p>`,
            source: `${CA} s 31(1)(a)–(b). ${WJI}, "The Exclusive Rights".`,
          },
        ],
        questions: [
          { type: 'sort', label: 'Spectroscopy', q: 'Which exclusive right does each act engage?', buckets: ['Reproduce', 'Perform in public', 'Communicate', 'Adapt'], items: [{ t: 'Photocopying a chapter', b: 0 }, { t: 'A band covering a song at a pub', b: 1 }, { t: 'Uploading a poem to Instagram', b: 2 }, { t: 'Translating a novel into Japanese', b: 3 }], explain: 's 31(1)(a): reproduction, public performance, communication and adaptation.' },
          { type: 'tf', q: 'Playing a song at a family birthday party is a performance "in public".', a: false, explain: 'A performance is in public unless it\'s shown to be domestic in character, and a family party is domestic.' },
          { type: 'choice', q: 'Under s 10, what does "communicate" cover?', options: ['Making available online or electronically transmitting', 'Only television broadcasts', 'Any conversation about a work', 'Only selling copies'], a: 0, explain: 'Uploading is "making available online", even before anyone downloads.' },
          { type: 'tf', q: 'Music played to callers on hold, one at a time, can be communicated "to the public".', a: true, explain: '<i>Telstra v APRA</i>: "to the public" is broader than "in public".' },
          { type: 'choice', q: 'Which of these is NOT an "adaptation" under s 10?', options: ['A photograph of a painting', 'A translation of a novel', 'A stage play of a novel', 'An orchestral arrangement of a song'], a: 0, explain: 'Photographing a painting is a reproduction of an artistic work; artistic works have no adaptation right.' },
          { type: 'tf', q: 'Re-publishing a book that has already been published infringes the right to publish.', a: false, explain: 'Publication is a first-publication right (<i>Avel</i>). The reproduction right is what\'s infringed.' },
        ],
      },
      {
        title: 'Rights in recordings, films, broadcasts and editions',
        cards: [
          {
            kind: 'compare', margin: ['ss 85–88 CA'],
            title: 'Part IV rights at a glance',
            table: {
              head: ['Subject matter', 'Exclusive rights'],
              rows: [
                ['Sound recordings (s 85)', 'Make a copy; cause it to be heard in public; communicate it to the public; commercial rental'],
                ['Films (s 86)', 'Make a copy; cause it to be seen or heard in public; communicate it to the public'],
                ['Broadcasts (s 87)', 'Make a film or recording of it (or a copy); rebroadcast it or communicate it to the public'],
                ['Published editions (s 88)', 'Make a facsimile copy of the edition'],
              ],
            },
            core: '<p>These rights are narrower than for works: they protect the <em>actual</em> recording, film or broadcast. Re-recording a song yourself doesn\'t copy the original sound recording, though it reproduces the musical work.</p>',
            source: `${CA} ss 85(1), 86, 87, 88 (text checked). ${WJI}, "The Exclusive Rights" (table).`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'The gym playlist',
            core: `<p>A gym plays a playlist of commercial tracks in its classes, and posts class videos with the music on social media.</p>
              <ul><li><b>Playing tracks in classes:</b> performs the <strong>musical works</strong> (and lyrics) in public, and causes the <strong>sound recordings</strong> to be heard in public (s 85(1)(b)).</li>
              <li><b>Filming a class with the music:</b> reproduces the works and copies the recordings.</li>
              <li><b>Posting the video:</b> communicates both to the public.</li></ul>
              <p>So the gym needs licences covering the works <em>and</em> the recordings, and the social media use, not just a background-music licence.</p>`,
            source: `Fictional facts, applying ${CA} ss 31(1)(a), 85(1).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: '"In public" vs "to the public"',
            core: `<ul><li><b>Perform in public</b> (works) and <b>heard or seen in public</b> (recordings, films): an audience, not domestic.</li>
              <li><b>Communicate to the public</b>: online or transmitted, including to individuals at home, and including people outside Australia.</li></ul>
              <p>A video posted to a private account with many followers may well be "to the public" even though nobody watched it "in public".</p>`,
            source: `${CA} s 10(1) "to the public"; ss 31, 85, 86. ${WJ4} (<i>Telstra v APRA</i>).`,
          },
        ],
        questions: [
          { type: 'choice', q: 'A band records its own new version of a famous song. Whose copyright is involved?', options: ['The song (musical and literary works), not the original sound recording', 'Only the original sound recording', 'Neither, because it\'s a new recording', 'Only the record label\'s'], a: 0, explain: 'Re-recording doesn\'t copy the original recording (s 85), but it reproduces the song.' },
          { type: 'match', label: 'Citation network', q: 'Match each subject matter to one of its rights.', pairs: [['Sound recording', 'Cause it to be heard in public'], ['Film', 'Cause it to be seen in public'], ['Broadcast', 'Rebroadcast it'], ['Published edition', 'Make a facsimile copy']], explain: 'ss 85–88.' },
          { type: 'tf', q: 'Uploading an Australian video to users only in the US is not a communication "to the public" under the Act.', a: false, explain: '"To the public" means to the public within or outside Australia (s 10).' },
          { type: 'choice', label: 'From unit 1.8', q: 'A café plays music to customers. Which body licenses public performance of the songs for songwriters?', options: ['APRA', 'IP Australia', 'The Copyright Tribunal', 'The ACCC'], a: 0, explain: 'Songwriters assign APRA their performing rights, and it licenses venues.' },
        ],
      },
    ],
    outline: `<p><b>Exclusive rights.</b> Works (s 31(1)(a)): reproduce, publish (first publication: <i>Avel</i> [1990] HCA 58), perform in public (unless domestic), communicate to the public (Digital Agenda Act 2000; s 10: make available online or electronically transmit; "to the public" includes overseas; <i>Telstra v APRA</i> (1997) 191 CLR 140), adapt (s 10: dramatise, translate, pictorial version, musical arrangement, program versions). Artistic works: reproduce, publish, communicate (s 31(1)(b)). Part IV: recordings (s 85), films (s 86), broadcasts (s 87), editions (facsimile copy, s 88). One act can engage several rights; licences must cover each.</p>`,
    treasures: ['Telstra v APRA'],
  };
})();
