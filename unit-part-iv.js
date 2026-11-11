/* Copyright 1.3 · Subject matter other than works (Part IV). Written and checked 11 Nov 2026 against the Copyright Act
   1968 (Compilation No. 65) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJ4 = '<a href="https://wikijuris.net/ausip/copyrightsubsp4/" target="_blank" rel="noopener">Wikijuris, Subject matter other than works</a> (CC BY-SA 3.0)';
  const WJO = '<a href="https://wikijuris.net/ausip/copyrightownership/" target="_blank" rel="noopener">Wikijuris, Copyright ownership</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-3'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Recordings and films',
        cards: [
          {
            kind: 'rule', margin: ['ss 89–92 CA', 's 113 CA'],
            title: 'Part IV protects investment, not authorship',
            core: `<p>Part IV protects four kinds of "subject matter other than works":</p>
              <ul><li><b>sound recordings</b> (s 89);</li><li><b>cinematograph films</b> (s 90);</li><li><b>television and sound broadcasts</b> (s 91);</li><li><b>published editions</b> of works (s 92).</li></ul>
              <p>These protect the investment in producing media. There's <strong>no originality requirement</strong>, and rights go to <strong>makers</strong>, not authors (unit 1.6).</p>`,
            deeper: `<p>Part IV copyright is "in addition to, and independent of" copyright in any work it's derived from (s 113(1)). A recorded song has the musical work, the lyrics and the sound recording; a film has the screenplay, the music and the film itself.</p>`,
            source: `${CA} ss 89–92, 113(1) (checked; s 113(1) quoted). ${WJ4}, introduction.`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA'],
            title: 'Sound recordings',
            statute: { cite: 's 10(1) CA · definitions', text: '<b>sound recording</b> means <mark>①</mark> the aggregate of the sounds embodied in a record.<br><br><b>record</b> includes a disc, tape, paper, <mark>②</mark> electronic file or other device in which sounds are embodied.', notes: ['① the sounds as captured, not the song', '② technology neutral: a streaming file counts'] },
            core: `<p>The recording is protected separately from what's recorded. Even a recording of birdsong, with no underlying work at all, is a sound recording.</p>`,
            deeper: `<p>Connecting factors (s 89): the maker was a qualified person when the recording was made; or it was made in Australia; or, if published, first published in Australia.</p>`,
            source: `${CA} s 10(1) "sound recording", "record" (quoted); s 89 (checked). ${WJ4}, "Sound Recordings".`,
          },
          {
            kind: 'statute', margin: ['s 10(1) CA', 'Sega v Galaxy'],
            title: 'Films: it\'s the moving picture that counts',
            statute: { cite: 's 10(1) CA · definition', text: '<b>cinematograph film</b> means <mark>①</mark> the aggregate of the visual images embodied in an article or thing so as to be capable by the use of that article or thing: (a) <mark>②</mark> of being shown as a moving picture; or (b) of being embodied in another article or thing by the use of which it can be so shown…', notes: ['① the images, plus any associated soundtrack', '② the result matters, not how it\'s produced'] },
            core: `<p>In <i>Sega Enterprises v Galaxy Electronics</i> (1996, 1997), Sega argued its video games were films, to stop parallel imports. <b>Held:</b> the moving images of a computer-generated video game were a film. The definition isn't read narrowly: it covers new technology, and the emphasis is on the end product, not the means.</p>`,
            deeper: `<p>The game in question, <i>Virtual Cop</i>, was very like a traditional movie: two police protagonists, criminal investigations at various locations, an introduction and a triumphant finale.</p>`,
            source: `${CA} s 10(1) "cinematograph film" (quoted, abridged). ${WJ4}, "Cinematograph Films" (<i>Sega v Galaxy</i> [1996] FCA 761; <i>Galaxy v Sega</i> [1997] FCA 403).`,
          },
          {
            kind: 'rule', margin: ['Part XIA CA', 's 22(3A) CA'],
            title: 'Performers',
            core: `<p>Performers get protection in two ways:</p>
              <ul><li><b>Co-makers</b> of a sound recording of their live performance, with the owner of the record (s 22(3A)): unit 1.6.</li>
              <li><b>Performers' protection</b> (Part XIA): a person makes an "unauthorised use" of a performance if, without the performer's authority, they record it or communicate it to the public, directly from the live performance or from an unauthorised recording (s 248G(1)).</li></ul>`,
            source: `${CA} s 22(3A), s 248G(1) (text checked).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A Part IV sound recording must be original to be protected.', a: false, explain: 'Part IV has no originality requirement: it protects the investment in making the recording.' },
          { type: 'tf', q: 'A recording of birdsong can be a protected sound recording.', a: true, explain: 'A sound recording is "the aggregate of the sounds embodied in a record" (s 10): no underlying work is needed.' },
          { type: 'choice', q: 'Why were Sega\'s video games held to be cinematograph films?', options: ['Their moving images could be shown as a moving picture; the means of production didn\'t matter', 'They were recorded on film stock', 'They had a screenplay', 'Computer programs are films'], a: 0, explain: 'The emphasis is on the end product, not the means (<i>Sega v Galaxy</i>).' },
          { type: 'sort', label: 'Spectroscopy', q: 'A feature film. Send each layer to Part III or Part IV.', buckets: ['Part III work', 'Part IV subject matter'], items: [{ t: 'The screenplay', b: 0 }, { t: 'The score as composed', b: 0 }, { t: 'The finished film', b: 1 }, { t: 'The soundtrack album recording', b: 1 }], explain: 'Screenplays and music are works (Part III); the film and recordings are Part IV, each "in addition to, and independent of" the works (s 113(1)).' },
          { type: 'choice', q: 'Under Part XIA, what is an "unauthorised use" of a live performance?', options: ['Recording it, or communicating it to the public, without the performer\'s authority', 'Watching it without a ticket', 'Performing the same song in another venue', 'Writing a review of it'], a: 0, explain: 's 248G(1).' },
        ],
      },
      {
        title: 'Broadcasts and published editions',
        cards: [
          {
            kind: 'statute', margin: ['s 91 CA', 's 10 "broadcast"'],
            title: 'Broadcasts',
            statute: { cite: 's 91 CA', text: 'copyright subsists in a television broadcast or sound broadcast <mark>①</mark> made from a place in Australia: (a) <mark>②</mark> under the authority of a licence or a class licence under the <i>Broadcasting Services Act 1992</i>; or (b) by the Australian Broadcasting Corporation or the Special Broadcasting Service Corporation.', notes: ['① territorial', '② licensed broadcasters, plus the ABC and SBS'] },
            core: `<p>A "broadcast" is "a communication to the public delivered by a broadcasting service" under the <i>Broadcasting Services Act</i> (s 10). Copyright in the broadcast doesn't depend on copyright in what's broadcast: there's no copyright in a football match itself, but there is in the broadcast of it.</p>`,
            source: `${CA} s 91 (quoted), s 10 "broadcast" (quoted). ${WJ4}, "Television and Sound Broadcasts".`,
          },
          {
            kind: 'case', margin: ['[2004] HCA 14'],
            title: 'Network Ten v TCN Channel Nine: what is "a broadcast"?',
            exp: {
              n: 2, cite: '[2004] HCA 14',
              hyp: 'Each short clip that The Panel rebroadcast was itself "a television broadcast" of Nine\'s.',
              method: 'Ten\'s The Panel showed short clips from Nine\'s programs, with commentary. The Full Federal Court had held any unauthorised rebroadcast of images infringed.',
              result: 'Hypothesis rejected · 3–2',
              discussion: 'A broadcast is a program, not a single image: so the question became whether Ten took a substantial part of Nine\'s programs.',
            },
            core: `<p>The majority (at [74]): Nine's broadcasts were "discrete periods of broadcasting identified and promoted by a title", such as <i>The Today Show</i> or <i>Wide World of Sports</i>. A news bulletin's segments aren't necessarily each "a television broadcast" ([77]).</p>
              <p>Kirby J and Callinan J dissented: any short series of images would be a broadcast.</p>`,
            deeper: `<p>Otherwise, broadcasters would get far more protection than other copyright owners. The case went back to the Full Federal Court on substantial part, the "highlight vs trivial" debate in unit 1.11.</p>`,
            source: `${WJ4}, "Television and Sound Broadcasts" (<i>Network Ten v TCN Channel Nine</i> [74], [77], quoted).`,
          },
          {
            kind: 'statute', margin: ['s 92 CA'],
            title: 'Published editions: the typographical layout',
            statute: { cite: 's 92(1)–(2) CA', text: 'copyright subsists in a published edition of a literary, dramatic, musical or artistic work … where: (a) <mark>①</mark> the first publication of the edition took place in Australia; or (b) the publisher of the edition was a qualified person at the date of the first publication…<br>(2) … does not apply to an edition that <mark>②</mark> reproduces a previous edition of the same work or works.', notes: ['① connecting factors for the edition', '② a straight reprint gets no new copyright'] },
            core: `<p>Published edition copyright protects the <strong>layout and formatting</strong> of the printed pages, separately from the works in them. A newspaper's page layout is protected even when an article on it is out of copyright, or owned by someone else.</p>`,
            source: `${CA} s 92(1)–(2) (quoted). ${WJ4}, "Published Editions of Works".`,
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Count the layers',
            core: `<p>For any media product, list every copyright before you analyse infringement. A TV broadcast of a music video may involve:</p>
              <ol><li>the musical work and the lyrics (Part III);</li><li>the sound recording (Part IV);</li><li>the music video, a film (Part IV);</li><li>the broadcast (Part IV);</li><li>performers' protection (Part XIA).</li></ol>
              <p>Each may have a different owner, and a defendant may infringe some layers but not others.</p>`,
            source: `${CA} s 113(1), Part XIA. ${WJ4}, introduction. ${WJO} (different owners for each layer).`,
          },
        ],
        questions: [
          { type: 'tf', q: 'There is copyright in a live football match itself.', a: false, explain: 'There\'s no copyright in a sporting spectacle, but the broadcast of it is protected (s 91).' },
          { type: 'choice', q: 'What did the High Court decide in Network Ten v TCN Channel Nine (2004)?', options: ['A "television broadcast" is a program, not each image: the question is whether a substantial part of the program was taken', 'Any rebroadcast of any image infringes', 'The Panel\'s clips were fair dealing', 'Broadcasts have no copyright'], a: 0, explain: '3–2, at [74] and [77]; Kirby and Callinan JJ dissented.' },
          { type: 'tf', q: 'Reprinting a previous edition exactly creates a new published edition copyright.', a: false, explain: 's 92(2): no new copyright for an edition that reproduces a previous edition of the same work.' },
          { type: 'order', q: 'Order the Part IV categories as they appear in the Act (ss 89–92).', items: ['Sound recordings', 'Cinematograph films', 'Broadcasts', 'Published editions'], explain: 's 89 recordings, s 90 films, s 91 broadcasts, s 92 published editions.' },
          { type: 'choice', label: 'From unit 1.6', q: 'Who is the maker of a television broadcast?', options: ['The person who provided the broadcasting service by which it was delivered', 'The presenter', 'The camera operator', 'The owner of the TV set'], a: 0, explain: 's 22(5).' },
        ],
      },
    ],
    outline: `<p><b>Part IV subject matter.</b> Sound recordings (s 89), films (s 90), broadcasts (s 91), published editions (s 92): no originality requirement; makers, not authors; "in addition to, and independent of" works (s 113(1)). Sound recording = aggregate of sounds in a record (incl. electronic file). Film = aggregate of visual images capable of being shown as a moving picture; video games can be films (<i>Sega v Galaxy</i>). Performers: co-makers of live recordings (s 22(3A)); Part XIA unauthorised use (s 248G). Broadcast = communication to the public by a broadcasting service; copyright from licensed broadcasters, ABC, SBS (s 91); "a broadcast" is a program, not an image (<i>Network Ten v TCN Nine</i> [2004] HCA 14 at [74], [77], 3–2). Published editions protect layout; reprints get none (s 92(2)).</p>`,
    treasures: ['Network Ten v TCN Channel Nine'],
  };
})();
