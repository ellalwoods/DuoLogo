/* Copyright 1.17 · Copyright meets design, and copyright meets AI. Written and checked 11 Nov 2026 against the Copyright
   Act 1968 (Compilation No. 65), the Copyright Regulations 2017 and Wikijuris, Registered designs (CC BY-SA 3.0).
   The AI lesson applies the Act and earlier cases to a question no Australian court has decided; it says so. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const WJR = '<a href="https://wikijuris.net/ausip/registered-designs/" target="_blank" rel="noopener">Wikijuris, Registered designs</a> (CC BY-SA 3.0)';

  D.units['u1-17'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'The copyright/design overlap',
        cards: [
          {
            kind: 'rule', margin: ['Part III Div 8 CA'],
            title: 'Why copyright steps back for industrial products',
            core: `<p>A drawing of a chair is an artistic work protected for life plus 70 years. A registered design for the chair lasts at most 10 years. If copyright in the drawing could stop people making the chair, nobody would bother registering designs, and functional products would be locked up for a century.</p>
              <p>So Division 8 of Part III takes away copyright protection against <b>three-dimensional</b> reproduction once a design is registered or <b>applied industrially</b>, leaving it to designs law.</p>`,
            source: `${CA} Part III Div 8 (ss 74–77A); ${WJR}, "The Design/Copyright Overlap". Duration comparison: CA s 33 (unit 1.9), <i>Designs Act 2003</i> s 46 (unit 0.2).`,
          },
          {
            kind: 'statute', margin: ['s 74 CA'],
            title: 'Corresponding design',
            statute: { cite: 's 74(1) CA', text: 'corresponding design, in relation to an artistic work, means <mark>①</mark> visual features of shape or configuration which, when <mark>②</mark> embodied in a product, result in a reproduction of that work, <mark>③</mark> whether or not the visual features constitute a design that is capable of being registered under the Designs Act 2003.', notes: ['① 3D shape, not surface decoration', '② "embodied in" includes woven into, impressed on or worked into (s 74(2))', '③ registrability doesn\'t matter'] },
            core: `<p>Because it's about <b>shape or configuration</b>, flat designs (a print on a T-shirt, a pattern on fabric) aren't corresponding designs, so the artwork keeps full copyright protection.</p>`,
            source: `${CA} s 74 (quoted). ${WJR} (flat designs not covered).`,
          },
          {
            kind: 'compare', margin: ['ss 75, 77, 77A CA', 'reg 12 CR 2017'],
            title: 'When copyright gives way',
            table: {
              head: ['Section', 'Trigger', 'Effect'],
              rows: [
                ['s 75', 'A corresponding design is <b>registered</b>', 'Not an infringement to reproduce the work by embodying that or any corresponding design in a product'],
                ['s 77', 'A corresponding design is <b>applied industrially</b> with the copyright owner\'s licence and products are sold, but the design isn\'t registered', 'Same, from the day products are first sold, hired or offered'],
                ['s 77A', 'Products that are non-infringing because of the above', 'Copying the 3D product, making moulds, and images used to sell it don\'t infringe'],
              ],
            },
            core: `<p>"Applied industrially" means applied to <b>more than 50 articles</b>, or to articles (other than handmade ones) manufactured in lengths or pieces (reg 12). s 77 doesn't apply to <b>buildings</b> or <b>works of artistic craftsmanship</b>.</p>`,
            deeper: `<p>s 76: if a design was registered by someone not entitled to it, without the copyright owner's knowledge, the registration is ignored in copyright proceedings, except for good-faith licensees relying on the register.</p>`,
            source: `${CA} ss 75, 76, 77(1)–(2), 77A (checked); <i>Copyright Regulations 2017</i> reg 12(1) (checked).`,
          },
          {
            kind: 'case', margin: ['[2007] HCA 17'],
            title: 'Burge v Swarbrick, again',
            core: `<p>Back in unit 1.2: the hand-built plug for the JS 9000 yacht hull was <b>not a work of artistic craftsmanship</b>, because aesthetic considerations were subordinate to function. The consequence is in this unit: once the hull was applied industrially, s 77 meant copyright couldn't be used to stop it being copied in three dimensions.</p>
              <p>That's why the artistic craftsmanship question matters so much in product cases: it's the gateway to keeping copyright.</p>`,
            source: `${WJR} (<i>Burge v Swarbrick</i>: not artistic craftsmanship; s 77 removed protection). See unit 1.2 for the test.`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Product clients: register the design',
            core: `<ul><li>A client manufacturing more than 50 units of a product based on their drawings will usually <b>lose copyright</b> against 3D copying. Their protection is a <b>registered design</b>, and registration must happen before the design is published or sold, subject to the 12-month grace period (unit 0.4).</li>
              <li>Surface prints and patterns keep copyright: a fabric print is still an artistic work.</li>
              <li>Arguing "work of artistic craftsmanship" is the way back into copyright, but after <i>Burge</i> it's hard for functional products.</li></ul>`,
            source: `${CA} ss 74, 77; <i>Copyright Regulations 2017</i> reg 12; ${WJR}.`,
          },
        ],
        questions: [
          { type: 'tf', q: 'A print on a T-shirt is a corresponding design, so copyright in the artwork is lost once 51 shirts are sold.', a: false, explain: 'A corresponding design is about shape or configuration (s 74), so flat designs keep copyright.' },
          { type: 'choice', q: 'When is a design taken to be applied industrially?', options: ['When applied to more than 50 articles', 'When applied to more than 10 articles', 'When registered', 'When exported'], a: 0, explain: 'Copyright Regulations 2017 reg 12(1)(a).' },
          { type: 'match', label: 'Citation network', q: 'Match each section to its role.', pairs: [['s 74', 'Defines corresponding design'], ['s 75', 'Registered design: copyright gives way'], ['s 77', 'Unregistered but industrially applied'], ['s 77A', 'Moulds and copies of non-infringing products']], explain: 'Part III Division 8.' },
          { type: 'tf', q: 's 77 removes copyright protection from works of artistic craftsmanship that are applied industrially.', a: false, explain: 's 77(1)(a) excludes buildings, models of buildings and works of artistic craftsmanship.' },
        ],
      },
      {
        title: 'Copyright and AI',
        cards: [
          {
            kind: 'guide', margin: ['OPEN QUESTIONS'],
            title: 'What\'s settled, and what isn\'t',
            core: `<p>No reported Australian court decision has yet dealt directly with generative AI (as far as could be checked, November 2026). This lesson applies the Act and the cases you've already learned to the questions clients actually ask. Treat it as <b>analysis, not settled law</b>.</p>`,
            source: 'Teaching structure. ⚑ The "no decision" claim is from secondary sources and searches up to November 2026.',
            flag: true,
          },
          {
            kind: 'rule', margin: ['s 10(1), s 31 CA'],
            title: 'Inputs: is training a reproduction?',
            core: `<ul><li>Reproducing a work "in a material form" is an exclusive right (s 31(1)(a)(i)), and material form includes <b>"any form (whether visible or not) of storage"</b> of the work or a substantial part of it (s 10(1)). Copying works into a training dataset fits that comfortably.</li>
              <li>Whether a trained <b>model</b> stores a substantial part of any particular work is a harder, technical question.</li>
              <li><b>Exceptions don't fit neatly:</b> research or study looks at the purpose of the person making the copy (<i>De Garis</i>, unit 1.14), so commercial training is a stretch; s 43B covers only temporary copies made incidentally in a technical process of using a copy.</li>
              <li>There's <b>no text-and-data-mining exception</b>; the government said in October 2025 it wouldn't add one ⚑. The 2026 amendments didn't deal with AI.</li></ul>`,
            source: `${CA} ss 10(1) ("material form", checked), 31(1), 40, 43B; <i>Copyright Amendment Act 2026</i> (checked: orphan works, remote learning, other measures). ⚑ October 2025 announcement from secondary sources only.`,
            flag: true,
          },
          {
            kind: 'rule', margin: ['IceTV', 'Phone Directories'],
            title: 'Outputs: who owns it, and can it infringe?',
            core: `<ul><li><b>Ownership:</b> copyright needs a human author whose independent intellectual effort is directed to the expression (unit 1.5). Purely machine-generated output probably has no author and no copyright; human selection, arrangement and editing may be protected.</li>
              <li><b>Infringement:</b> the usual test applies: objective similarity to a substantial part, plus a causal connection (unit 1.11). An output that reproduces a substantial part of a training work could infringe.</li>
              <li><b>Style</b> isn't protected: copyright protects expression, not ideas or a manner of painting or writing (unit 1.4).</li>
              <li>A provider might be argued to <b>authorise</b> users' infringements, using the s 36(1A) factors (unit 1.12).</li></ul>`,
            source: `Applying ${CA} ss 14, 32, 36(1), (1A) and the cases in units 1.4, 1.5, 1.11 and 1.12. Our analysis; no court has applied these to AI in Australia ⚑.`,
            flag: true,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'What clients actually need',
            core: `<ul><li><b>Using AI in content production:</b> they may not own copyright in raw outputs, so keep records of human creative input, and don't promise customers exclusive rights you may not have.</li>
              <li><b>Contracts:</b> check AI tool terms for who owns outputs, what indemnities the provider gives, and whether inputs are used for training. Add AI warranties to agency and freelancer contracts.</li>
              <li><b>Moral rights:</b> presenting AI output as a real artist's work can be <b>false attribution</b> (unit 1.16); passing off and the ACL may also apply.</li>
              <li>This area moves fast: check for new cases and government announcements before advising.</li></ul>`,
            source: `Practical checklist built on ${CA} ss 35, 195AC and units 1.5, 1.7 and 1.16.`,
          },
          {
            kind: 'critique', margin: ['POLICY'],
            title: 'Should training need a licence?',
            core: `<p>Creators and publishers argue that training on their work without permission or payment undermines the incentive copyright exists to protect, and that licensing markets are emerging. AI developers argue that training extracts patterns, not expression, and that without an exception Australia will fall behind jurisdictions that have one. Options range from a TDM exception (with or without opt-out), to a statutory licence with payment, to the status quo of negotiated licences.</p>`,
            source: 'Policy summary. Positions described in general terms; no particular report relied on.',
          },
        ],
        questions: [
          { type: 'tf', q: 'Storing a copy of a work in a training dataset can be a reproduction in material form, even though nobody can see it.', a: true, explain: 's 10(1): material form includes any form of storage, visible or not.' },
          { type: 'tf', q: 'Australia has a text-and-data-mining exception for AI training.', a: false, explain: 'There is none in the Act.', flag: true },
          { type: 'choice', q: 'Why does fair dealing for research or study probably not cover a company copying works to train a commercial model?', options: ['The relevant purpose is that of the person making the copy (De Garis)', 'Research is never covered', 'Fair dealing only applies to books', 'The works are too long'], a: 0, explain: 'The dealer\'s own purpose counts, and commercial product development is a stretch for "research".' },
          { type: 'sort', label: 'Spectroscopy', q: 'Likely protected by copyright, or not?', buckets: ['Likely protected', 'Likely not protected'], items: [{ t: 'A human-written article edited with AI suggestions', b: 0 }, { t: 'An image generated from a one-line prompt', b: 1 }, { t: 'An artist\'s style', b: 1 }, { t: 'A human\'s selection and arrangement of AI images in a book', b: 0 }], explain: 'Human authorship directed to expression (unit 1.5); style is an idea (unit 1.4).', flag: true },
        ],
      },
    ],
    outline: `<p><b>Copyright meets design.</b> Corresponding design: visual features of shape or configuration that reproduce an artistic work when embodied in a product (s 74); flat designs aren't. Registered corresponding design → no infringement by 3D embodiment (s 75; false registration s 76). Unregistered but applied industrially (more than 50 articles, reg 12) with licence and sold → same from first sale (s 77; not buildings or works of artistic craftsmanship). Moulds and copies of non-infringing products (s 77A). <i>Burge v Swarbrick</i> [2007] HCA 17. <b>Copyright meets AI</b> (no Australian decision ⚑): datasets are reproductions in material form (s 10(1) "any form of storage"); no TDM exception (Oct 2025 ⚑); outputs need a human author; output infringement by substantial part + causal connection; style not protected; authorisation; false attribution.</p>`,
    treasures: ['Corresponding designs'],
  };
})();
