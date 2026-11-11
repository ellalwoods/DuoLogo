/* Copyright 1.2 · Dramatic, musical and artistic works. Written and checked 11 Nov 2026 against the Copyright Act 1968
   (Compilation No. 65) and Wikijuris (CC BY-SA 3.0). See VERIFICATION.md. flag: true = not yet confirmed against a primary source. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const WJ = '<a href="https://wikijuris.net/ausip/copyrightsubsp3/" target="_blank" rel="noopener">Wikijuris, Copyright: Subject matter</a> (CC BY-SA 3.0)';
  const WJ4 = '<a href="https://wikijuris.net/ausip/copyrightsubsp4/" target="_blank" rel="noopener">Wikijuris, Subject matter other than works</a> (CC BY-SA 3.0)';
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';

  D.units['u1-2'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Dramatic and musical works',
        cards: [
          {
            kind: 'statute', margin: ['s 10(1) CA'],
            title: 'Dramatic works are made to be performed',
            statute: { cite: 's 10(1) CA · definition', text: '<b>dramatic work</b> includes: <mark>①</mark> (a) a choreographic show or other dumb show; and <mark>②</mark> (b) a scenario or script for a cinematograph film.', notes: ['① dance and mime count', '② a screenplay is a dramatic work; the film itself is separate Part IV subject matter'] },
            core: `<p>Plays and screenplays are the obvious examples. The essential character of a dramatic work is that it's intended to be <strong>performed</strong>, by acting or dancing for example. It must also be <strong>capable</strong> of being performed: disparate elements without sufficient unity aren't a dramatic work.</p>`,
            source: `${CA} s 10(1), "dramatic work" (quoted). ${WJ}, "Dramatic Work".`,
          },
          {
            kind: 'case', margin: ['[1989] RPC 469 (PC)'],
            title: 'Green v Broadcasting Corp of New Zealand',
            exp: {
              n: 2, cite: '[1989] RPC 469',
              hyp: 'The format of the talent show "Opportunity Knocks" is a dramatic work.',
              method: 'A New Zealand show copied its features: a "clapometer" and catchphrases used to address the audience and contestants.',
              result: 'Hypothesis rejected',
              discussion: 'The repeated elements had no unity: most of each show was audience participation that varied every week. Performed on their own, they were meaningless.',
            },
            core: `<p>Hughie Green hosted the British show for years. The New Zealand copy used its stock features. <b>Held:</b> those repetitive elements weren't a dramatic work, because they weren't capable of being performed as a unified work.</p>
              <p>This is why <strong>TV formats</strong> are so hard to protect with copyright: a format is mostly an idea and a set of stock features (unit 1.4).</p>`,
            source: `${WJ}, <i>Green v Broadcasting Corp of New Zealand</i>.`,
          },
          {
            kind: 'case', margin: ['(1999) 48 IPR 333'],
            title: 'Fireworks as drama? Nine v ABC',
            core: `<p>Nine had paid $450,000 towards Sydney's millennium fireworks and tried to stop the ABC broadcasting the fireworks, the lantern procession and the Harbour Bridge decorations, arguing they were dramatic works.</p>
              <p>The court found that argument not strong. Reducing a fireworks display to material form was "fraught with difficulties", including whether the planned sequence would actually be followed.</p>`,
            deeper: `<p>The judge noted there was no reported case suggesting "copyright subsists in a fireworks show set to music just because the sequence of events is scripted", while not ruling it out. The ABC could also potentially have relied on the fair dealing exception for reporting news (unit 1.14).</p>`,
            source: `${WJ}, <i>Nine Network v ABC</i> (quoted).`,
          },
          {
            kind: 'rule', margin: ['s 10 CA', 's 113 CA'],
            title: 'Musical works, and the layers in a song',
            core: `<p>"Musical work" isn't defined in the Act. It refers to the <strong>non-literary</strong> aspects of a song: sound, melody, harmony and rhythm. "Musical" describes how it's produced, not its artistic quality.</p>
              <p>So one recorded song can carry several copyrights at once:</p>
              <ul><li>the <b>musical work</b> (the music);</li><li>the <b>literary work</b> (the lyrics);</li><li>the <b>sound recording</b> (Part IV, unit 1.3), which is "in addition to, and independent of" the works (s 113(1)).</li></ul>`,
            source: `${CA} s 113(1) (quoted); no definition of "musical work" in s 10 (checked). ${WJ}, "Musical Work". ${WJ4}, introduction.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A choreographed dance can be a dramatic work.', a: true, explain: 's 10: a dramatic work includes "a choreographic show or other dumb show".' },
          { type: 'choice', q: 'Why wasn\'t the Opportunity Knocks format a dramatic work?', options: ['Its repeated elements lacked the unity needed to be performed as a work', 'TV shows can only be films, never dramatic works', 'It had never been written down', 'It was first made in Britain'], a: 0, explain: 'The stock features meant nothing without the varying audience participation (<i>Green v BCNZ</i>).' },
          { type: 'sort', label: 'Spectroscopy', q: 'A hit song on a streaming service. Send each layer to its kind of copyright.', buckets: ['Musical work', 'Literary work', 'Sound recording'], items: [{ t: 'The melody and harmony', b: 0 }, { t: 'The lyrics', b: 1 }, { t: 'The released studio track', b: 2 }], explain: 'Music, lyrics and recording are separate copyrights; the recording\'s copyright is "in addition to, and independent of" the works (s 113(1)).' },
          { type: 'tf', q: 'The Copyright Act defines "musical work" in s 10.', a: false, explain: 'It doesn\'t. The term is understood to cover sound, melody, harmony and rhythm.' },
          { type: 'choice', q: 'What was the main problem with Nine\'s claim that the millennium fireworks were a dramatic work?', options: ['Reducing the display to material form was fraught with difficulty', 'Fireworks are artistic works, not dramatic works', 'Nine hadn\'t paid for the display', 'The ABC owned the copyright'], a: 0, explain: 'Including doubt about whether the planned sequence would be followed in practice.' },
        ],
      },
      {
        title: 'Artistic works',
        cards: [
          {
            kind: 'statute', margin: ['s 10(1) CA'],
            title: 'Artistic work: quality not required',
            statute: { cite: 's 10(1) CA · definition', text: '<b>artistic work</b> means: (a) a painting, sculpture, drawing, engraving or photograph, <mark>①</mark> whether the work is of artistic quality or not; (b) a building or a model of a building, whether the building or model is of artistic quality or not; or <mark>②</mark> (c) a work of artistic craftsmanship whether or not mentioned in paragraph (a) or (b).', notes: ['① a stick figure is as protected as a Rembrandt', '② craftsmanship has its own test (Lesson C)'] },
            core: `<p>For paintings, drawings, sculptures, engravings, photographs, buildings and models, <strong>artistic quality is irrelevant</strong>. Engineering drawings and architects' plans count.</p>`,
            deeper: `<p>The Act fills in some categories: "drawing includes a diagram, map, chart or plan"; "building includes a structure of any kind"; "sculpture includes a cast or model made for purposes of sculpture" (all s 10(1)).</p>`,
            source: `${CA} s 10(1): "artistic work", "drawing", "building", "sculpture" (quoted). ${WJ}, "Artistic Work".`,
          },
          {
            kind: 'case', margin: ['[1983] FSR 32', '[1997] FSR 718'],
            title: 'Painted faces and industrial moulds',
            core: `<ul><li><b><i>Merchandising Corp of America v Harpbond</i></b> [1983] FSR 32: Adam Ant claimed his stage make-up was a painting. Held: no. "Painting" has its ordinary meaning, and paint on a face isn't fixed on a surface in permanent form.</li>
              <li><b><i>Metix v Maughan</i></b> [1997] FSR 718: industrial moulds for twin cartridges weren't sculptures. "A sculpture is a three-dimensional work made by an artist's hand", and nothing suggested the makers were concerned with anything but "a precise functional effect" (Laddie J).</li></ul>`,
            deeper: `<p>Both are English decisions applying ordinary meanings. They show courts won't stretch the categories to cover make-up or purely functional objects.</p>`,
            source: `${WJ}, "Copyright in Paintings" (<i>Harpbond</i>) and "Copyright in Sculptures" (<i>Metix</i>, Laddie J at 722, quoted).`,
          },
          {
            kind: 'rule', margin: ['s 10 "building"'],
            title: 'Buildings: "a structure of any kind"',
            core: `<p>The definition is wide.</p>
              <ul><li><i>Half Court Tennis v Seymour</i> (1980) FLR 240: a half-size tennis court was a building.</li>
              <li><i>Darwin Fibreglass v Kruhse Enterprises</i> (1998) 41 IPR 649: a fibreglass swimming pool was a structure, being as large as some small buildings and long-lasting; the plug and mould used to make it were a <strong>model</strong> of a building.</li></ul>`,
            deeper: `<p>Remember s 32(3) (unit 1.6): copyright subsists in an original building situated in Australia, whoever the architect. Architects' plans are also protected as drawings.</p>`,
            source: `${CA} s 10(1) "building", s 32(3). ${WJ}, "Copyright in Buildings".`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A child\'s rough drawing of a cat can be an artistic work.', a: true, explain: 'Paintings and drawings are artistic works "whether the work is of artistic quality or not" (s 10).' },
          { type: 'choice', q: 'Why wasn\'t Adam Ant\'s make-up a painting?', options: ['Paint without a surface in permanent form isn\'t fixed: it wasn\'t a painting in the ordinary sense', 'It lacked artistic quality', 'Make-up is a dramatic work', 'He hadn\'t registered it'], a: 0, explain: '<i>Merchandising Corp v Harpbond</i>: a painting is an object, not an idea.' },
          { type: 'sort', label: 'Spectroscopy', q: 'Which category of artistic work?', buckets: ['Drawing', 'Building or model', 'Not an artistic work'], items: [{ t: 'An architect\'s floor plan', b: 0 }, { t: 'A street map', b: 0 }, { t: 'A fibreglass swimming pool', b: 1 }, { t: 'The mould for that pool', b: 1 }, { t: 'Stage make-up on a performer\'s face', b: 2 }], explain: 'Drawing includes plans and maps; building includes "a structure of any kind" (<i>Darwin Fibreglass</i>); face paint isn\'t a painting (<i>Harpbond</i>).' },
          { type: 'tf', q: 'An industrial mould shaped purely for function is a sculpture.', a: false, explain: '<i>Metix v Maughan</i>: a sculpture is "a three-dimensional work made by an artist\'s hand".' },
        ],
      },
      {
        title: 'Works of artistic craftsmanship',
        cards: [
          {
            kind: 'rule', margin: ['s 10 CA', 'Hensher'],
            title: 'Artistic craftsmanship: art and craft together',
            core: `<p>"Work of artistic craftsmanship" isn't defined. It's the main route to copyright for <strong>three-dimensional</strong> objects other than sculptures, buildings and models: think jewellery, pottery, metalwork.</p>
              <p>Both qualities must be present, and united in the same person: <strong>artistry</strong> and <strong>craftsmanship</strong>.</p>`,
            deeper: `<p><i>George Hensher v Restawhile Upholstery</i> [1976] AC 64 (HL): a prototype "boat-shaped" furniture suite was not artistic. Lord Reid: an item has aesthetic appeal "if a substantial section of the public genuinely admires and values it for its appearance". Lord Morris: the quality is assessed "in a detached and objective way".</p>
              <p><i>Cuisenaire v Reed</i> [1963] VR 719: coloured rods for teaching arithmetic weren't a work of artistic craftsmanship; cutting up pieces wasn't craftsmanship, and the result wasn't artistry.</p>`,
            source: `${WJ}, "Copyright in Works of Artistic Craftsmanship" (<i>Hensher</i> and <i>Cuisenaire</i>, quoted).`,
          },
          {
            kind: 'case', margin: ['(1998) 86 FCR 154'],
            title: 'Coogi v Hysport: machine-knitted art',
            core: `<p>Coogi designed and made a highly textured, complex, multi-coloured machine-knitted fabric. <b>Held:</b> the design embodied in the first roll of fabric was a work of artistic craftsmanship.</p>
              <p>So a work of artistic craftsmanship can be <strong>machine-made</strong> and needn't be the product of one person, but it needs "an element of real artistic, that is, aesthetic, quality", and "pride in sound workmanship".</p>`,
            deeper: `<p>The level of aesthetic appeal required "is higher than mere visual appeal", but needn't reach fine art. A passing fad for something's look isn't enough.</p>`,
            source: `${WJ}, <i>Coogi v Hysport</i> (quoted).`,
          },
          {
            kind: 'case', margin: ['[2007] HCA 17'],
            title: 'Burge v Swarbrick',
            exp: {
              n: 3, cite: '[2007] HCA 17',
              hyp: 'The hand-crafted "plug" (full-size model) for the JS 9000 yacht hull is a work of artistic craftsmanship.',
              method: 'The court below compared the design process to Rodin\'s and said yes. The High Court asked how far the form was dictated by function.',
              result: 'Hypothesis rejected · High Court',
              discussion: 'The designer was driven by engineering imperatives (aerodynamics, speed), not acting as an artist-craftsperson.',
            },
            core: `<p>The High Court's test (at [83]): whether something is a work of artistic craftsmanship "does not turn on assessing the beauty or aesthetic appeal of work". It "turns on assessing the extent to which the particular work's artistic expression, in its form, is <strong>unconstrained by functional considerations</strong>".</p>`,
            deeper: `<p>This is now the leading Australian test, and it matters because of the copyright/design overlap (unit 1.17): if a 3D product isn't a work of artistic craftsmanship, its protection usually has to come from the <i>Designs Act</i>.</p>`,
            source: `${WJ}, <i>Burge v Swarbrick</i> ([83], quoted).`,
          },
          {
            kind: 'example', margin: ['APPLY'],
            title: 'The ceramicist and the ergonomic mug',
            core: `<ul><li><b>Ana</b> hand-throws one-off vases with sculpted, asymmetric forms and her own glazes. Form largely free of function, made with skill and pride in workmanship: a strong case for <strong>artistic craftsmanship</strong>.</li>
              <li><b>A factory</b> designs a mug whose shape is set by heat retention, grip and stacking. Its form is constrained by function (<i>Burge</i>): probably <strong>not</strong> a work of artistic craftsmanship. Look to registered designs instead (chapter 5).</li></ul>`,
            source: 'Fictional facts, applying <i>Burge v Swarbrick</i> and <i>Coogi</i>.',
          },
          {
            kind: 'trap', margin: ['EXAM'],
            title: 'Three-dimensional object? Run through the categories',
            core: `<ol><li>Is it a <b>sculpture</b> (made by an artist's hand, not purely functional)?</li><li>A <b>building or model</b> ("a structure of any kind")?</li><li>A work of <b>artistic craftsmanship</b> (form unconstrained by function: <i>Burge</i>)?</li><li>If none: copyright may still protect the <b>drawings</b> it was made from, subject to the design overlap (unit 1.17).</li></ol>`,
            source: `${CA} s 10(1); ${WJ}, "Artistic Work" (<i>Metix</i>, <i>Darwin Fibreglass</i>, <i>Burge</i>). The checklist order is our teaching structure.`,
          },
        ],
        questions: [
          { type: 'choice', q: 'What is the High Court\'s test for a work of artistic craftsmanship in Burge v Swarbrick?', options: ['The extent to which its artistic expression, in its form, is unconstrained by functional considerations', 'Whether a substantial section of the public finds it beautiful', 'Whether it was hand-made by a single person', 'Whether it has been exhibited in a gallery'], a: 0, explain: '<i>Burge v Swarbrick</i> [2007] HCA 17 at [83]. Beauty or aesthetic appeal alone isn\'t the test.' },
          { type: 'tf', q: 'A work of artistic craftsmanship must be hand-made.', a: false, explain: '<i>Coogi</i>: machine-knitted fabric qualified, though it needs real aesthetic quality and pride in workmanship.' },
          { type: 'choice', q: 'Why was the JS 9000 yacht plug not a work of artistic craftsmanship?', options: ['Its form was driven by engineering imperatives like aerodynamics and speed', 'Yachts are buildings', 'It was not original', 'It was made by a team'], a: 0, explain: 'The designer wasn\'t acting as an artist-craftsperson; function dictated the form (<i>Burge</i>).' },
          { type: 'similarity', label: 'Function index', q: 'A hand-blown glass sculpture-lamp whose twisting shape was chosen purely for looks. How free is its form from function?', lo: 60, hi: 100, ends: ['Dictated by function', 'Unconstrained by function'], explain: 'Mostly free of functional constraint, which points towards artistic craftsmanship under <i>Burge</i>. Being a working lamp doesn\'t by itself rule it out.' },
          { type: 'match', label: 'Citation network', q: 'Connect each case to its point.', pairs: [['Hensher', 'Aesthetic appeal judged objectively'], ['Coogi', 'Machine-made can qualify'], ['Burge v Swarbrick', 'Form unconstrained by function'], ['Cuisenaire', 'Cutting up rods isn\'t craftsmanship']], explain: 'The development of the artistic craftsmanship test.' },
        ],
      },
    ],
    outline: `<p><b>Dramatic, musical and artistic works (s 10).</b> Dramatic: includes choreography, dumb shows, film scripts; must be capable of performance with unity (<i>Green v BCNZ</i> [1989] RPC 469: formats); fireworks doubtful (<i>Nine v ABC</i> (1999) 48 IPR 333). Musical: undefined; melody, harmony, rhythm; lyrics are literary; recordings separate (s 113(1)). Artistic: paintings, sculptures, drawings, engravings, photographs, buildings and models "whether … of artistic quality or not"; drawing includes plans and maps; building = any structure (<i>Half Court Tennis</i>; <i>Darwin Fibreglass</i>); not face paint (<i>Harpbond</i>) or functional moulds (<i>Metix</i>). Artistic craftsmanship: art + craft (<i>Hensher</i>; <i>Coogi</i>, machine-made OK); test = form unconstrained by function (<i>Burge v Swarbrick</i> [2007] HCA 17 at [83]).</p>`,
    treasures: ['Burge v Swarbrick'],
  };
})();
