/* Copyright 1.12 · Authorisation and intermediaries. Written and checked 11 Nov 2026 against the Copyright Act 1968
   (Compilation No. 65). The cases are not covered by Wikijuris and the judgments could not be opened: their outcomes come
   from secondary sources and are flagged. See VERIFICATION.md. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.units = D.units || {};
  const CA = '<i>Copyright Act 1968</i> (Cth), Compilation No. 65';
  const SEC = '⚑ Outcome from secondary sources only (law-firm and news reports); the judgment couldn\'t be opened and the case isn\'t in Wikijuris. See VERIFICATION.md.';

  D.units['u1-12'] = {
    lawAsAt: '2 April 2026',
    checked: '11 November 2026',
    lessons: [
      {
        title: 'Authorising someone else\'s infringement',
        cards: [
          {
            kind: 'statute', margin: ['s 36(1), (1A) CA', 's 101(1A) CA'],
            title: 'You can infringe by authorising',
            statute: { cite: 's 36(1A) CA', text: 'In determining … whether or not a person has authorised the doing in Australia of any act comprised in the copyright …, the matters that must be taken into account include: (a) <mark>①</mark> the extent (if any) of the person\'s power to prevent the doing of the act concerned; (b) <mark>②</mark> the nature of any relationship existing between the person and the person who did the act concerned; (c) <mark>③</mark> whether the person took any reasonable steps to prevent or avoid the doing of the act, including whether the person complied with any relevant industry codes of practice.', notes: ['① could they have stopped it?', '② customer, employee, user, student?', '③ warnings, filters, codes'] },
            core: `<p>Infringement isn't only doing the act yourself: s 36(1) also catches anyone who "authorizes the doing" of it. That's how libraries, universities, platforms, ISPs and employers can be liable for what other people do with their facilities. s 101(1A) has the same factors for recordings, films and broadcasts.</p>`,
            source: `${CA} ss 36(1), (1A), 101(1A) (quoted and checked).`,
          },
          {
            kind: 'case', margin: ['(1975) HCA ⚑'], flag: true,
            title: 'UNSW v Moorhouse: the library photocopier',
            core: `<p>A university was held to have <strong>authorised</strong> infringement by providing a photocopier in its library, which students used to copy pages from library books.</p>
              <p>This is why libraries and universities post copyright warnings beside copiers and printers, and why the factor "reasonable steps to prevent" matters so much.</p>`,
            source: SEC,
          },
          {
            kind: 'compare', margin: ['Kazaa (2005) ⚑', 'iiNet (2012) ⚑'],
            title: 'Kazaa vs iiNet: why one authorised and one didn\'t',
            table: {
              head: ['', '<i>Universal Music v Sharman</i> (Kazaa, 2005, FCA)', '<i>Roadshow Films v iiNet</i> (2012, HCA)'],
              rows: [
                ['Who', 'Operators of a peer-to-peer file-sharing service', 'An internet service provider'],
                ['Knowledge', 'Knew what was occurring on Kazaa', 'Received notices of customers\' infringements'],
                ['Power to prevent', 'Could have put in filters to reduce infringement', 'No direct technical power to prevent users\' infringements'],
                ['Result', '<b>Authorised</b>', '<b>Did not authorise</b>: inactivity after notices wasn\'t enough'],
              ],
            },
            core: '<p>Knowledge alone isn\'t authorisation. The questions are what power you had to stop it, your relationship with the infringers, and what reasonable steps you took.</p>',
            source: SEC,
          },
          {
            kind: 'statute', margin: ['ss 39B, 112E CA'],
            title: 'Just providing the pipes isn\'t authorising',
            core: `<p>A person (including a carrier or carriage service provider) who provides facilities for making a communication "is not taken to have authorised any infringement … merely because another person uses the facilities so provided" to infringe (s 39B for works; s 112E for audiovisual items).</p>
              <p>The key word is <strong>merely</strong>: provide more than the facilities (encouragement, control, profit from infringement) and the protection may not help.</p>`,
            source: `${CA} ss 39B, 112E (quoted).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Advising a business that hosts or enables content',
            core: `<p>If your client runs a platform, a co-working space, a library or an IT network, run through the s 36(1A) factors:</p>
              <ol><li><b>Power:</b> can they take content down, block accounts, filter?</li><li><b>Relationship:</b> are users customers, staff or members, bound by terms of use?</li><li><b>Reasonable steps:</b> clear terms, warnings, a takedown process, compliance with any industry code.</li></ol>
              <p>Document those steps: they're the evidence if authorisation is ever alleged.</p>`,
            source: `${CA} s 36(1A). Practical checklist built on the statutory factors.`,
          },
        ],
        questions: [
          { type: 'order', q: 'Order the three s 36(1A) authorisation factors as they appear in the Act.', items: ['Power to prevent the act', 'Relationship with the person who did it', 'Reasonable steps taken, including industry codes'], explain: 's 36(1A)(a)–(c).' },
          { type: 'tf', q: 'Knowing that customers are infringing, and doing nothing, automatically means you\'ve authorised it.', a: false, explain: 'Knowledge is relevant but not enough: in <i>iiNet</i>, inactivity after notices wasn\'t authorisation, given the ISP\'s lack of direct power to prevent it.', flag: true },
          { type: 'choice', q: 'Why was Kazaa\'s operator treated differently from iiNet?', options: ['It could have filtered infringing content, and knew what was happening', 'It was overseas', 'It charged a subscription', 'iiNet had a licence from the studios'], a: 0, explain: 'Power to prevent (filters) plus knowledge pointed to authorisation.', flag: true },
          { type: 'tf', q: 'A telco is not taken to authorise infringement merely because customers use its network to infringe.', a: true, explain: 'ss 39B and 112E: merely providing the facilities isn\'t authorising.' },
          { type: 'choice', q: 'What made the university liable in Moorhouse?', options: ['Providing a library photocopier that students used to copy books', 'Writing the books', 'Selling copies', 'Teaching from the books'], a: 0, explain: 'Authorisation through providing the means, without adequate steps to prevent infringement.', flag: true },
        ],
      },
      {
        title: 'Safe harbours and site blocking',
        cards: [
          {
            kind: 'rule', margin: ['Part V Div 2AA CA'],
            title: 'Safe harbours: who gets them',
            core: `<p>The safe harbour scheme limits the remedies against a qualifying <strong>service provider</strong>. If it meets the conditions, a court can't award damages, an account of profits or other money against it, only limited orders such as disabling access or terminating an account (s 116AG).</p>
              <p>But only listed service providers qualify (s 116ABA): <b>carriage service providers</b> (ISPs and telcos), <b>organisations assisting people with a disability</b>, public and parliamentary <b>libraries</b>, <b>archives</b>, <b>key cultural institutions</b> and <b>educational institutions</b>.</p>`,
            deeper: `<p>The non-ISP categories were added by the <i>Copyright Amendment (Service Providers) Act 2018</i> (from 29 December 2018). Commercial platforms such as social media sites and online marketplaces aren't on the list.</p>`,
            source: `${CA} ss 116ABA, 116AG (text checked); amending Act commencement from the CA endnotes.`,
          },
          {
            kind: 'compare', margin: ['ss 116AC–116AH CA'],
            title: 'Four activities, four sets of conditions',
            table: {
              head: ['Category', 'Activity', 'Key conditions (besides a repeat-infringer policy)'],
              rows: [
                ['A', 'Transmitting, routing, providing connections', 'Others initiate transmissions; no substantive changes'],
                ['B', 'Automatic caching (not manually selected)', 'Respect access conditions at the original site; remove when notified it\'s gone from there'],
                ['C', 'Hosting material at a user\'s direction', 'No directly attributable financial benefit where it can control the activity; remove expeditiously on a court-finding notice or on becoming aware'],
                ['D', 'Linking and search tools', 'Same as C, applied to the links or references'],
              ],
            },
            core: '<p>Every category needs a policy for terminating the accounts of repeat infringers, reasonably implemented (s 116AH table item 1). Nothing in the conditions requires a provider to monitor its service or go looking for infringements (s 116AH(2)).</p>',
            source: `${CA} ss 116AC–116AF, 116AH (text checked; table summarised).`,
          },
          {
            kind: 'statute', margin: ['s 115A CA'],
            title: 'Site blocking',
            statute: { cite: 's 115A(1) CA', text: 'The owner of a copyright may apply to the Federal Court … to grant an injunction that requires <mark>①</mark> a carriage service provider to take such steps as the Court considers reasonable to disable access to <mark>②</mark> an online location outside Australia that: (a) infringes, or facilitates an infringement, of the copyright; and (b) has <mark>③</mark> the primary purpose or the primary effect of infringing, or facilitating an infringement, of copyright…', notes: ['① ISPs block; they aren\'t treated as infringers', '② overseas sites only', '③ aimed at piracy sites, not ordinary sites with some infringing content'] },
            core: `<p>Since 2018 the injunction can also require <strong>search engines</strong> not to return results referring users to the site (s 115A(2)). Only the Federal Court can make these orders.</p>`,
            source: `${CA} s 115A(1)–(2) (quoted); s 131A(2), s 131D (other courts excluded); <i>Copyright Amendment (Online Infringement) Act 2018</i> (text checked).`,
          },
          {
            kind: 'trap', margin: ['IN PRACTICE'],
            title: 'Safe harbour isn\'t a general shield',
            core: `<ul><li>A commercial platform outside s 116ABA can't rely on safe harbour; it falls back on the authorisation factors.</li>
              <li>Even a listed provider must <b>meet the conditions</b>, including a real repeat-infringer policy and expeditious takedowns.</li>
              <li>For overseas piracy sites, the practical tool is a <b>s 115A blocking order</b> against ISPs and search engines, not suing the anonymous operator.</li></ul>`,
            source: `${CA} ss 115A, 116ABA, 116AH.`,
          },
        ],
        questions: [
          { type: 'sort', label: 'Spectroscopy', q: 'Can this organisation use the copyright safe harbours (s 116ABA)?', buckets: ['Yes, if it meets the conditions', 'No: not a listed service provider'], items: [{ t: 'An internet service provider', b: 0 }, { t: 'A university', b: 0 }, { t: 'A public library', b: 0 }, { t: 'A commercial social media platform', b: 1 }, { t: 'An online marketplace', b: 1 }], explain: 's 116ABA lists carriage service providers, disability organisations, libraries, archives, key cultural institutions and educational institutions.' },
          { type: 'match', label: 'Citation network', q: 'Match each safe harbour category to its activity.', pairs: [['Category A', 'Transmitting and routing'], ['Category B', 'Automatic caching'], ['Category C', 'Hosting at a user\'s direction'], ['Category D', 'Linking and search tools']], explain: 'ss 116AC–116AF.' },
          { type: 'tf', q: 'A s 115A order can require search engines not to show results for a blocked piracy site.', a: true, explain: 's 115A(2), added in 2018.' },
          { type: 'choice', q: 'If a service provider meets the safe harbour conditions, what can a court NOT order against it?', options: ['Damages or an account of profits', 'Disabling access to an overseas site', 'Terminating a specified account', 'Any order at all'], a: 0, explain: 's 116AG(2): no damages, account of profits, additional damages or other monetary relief.' },
          { type: 'tf', q: 'Site-blocking orders can target websites hosted in Australia.', a: false, explain: 's 115A applies to online locations outside Australia.' },
        ],
      },
    ],
    outline: `<p><b>Authorisation and intermediaries.</b> Infringement includes authorising (s 36(1); s 101 for Part IV); factors: power to prevent, relationship, reasonable steps and industry codes (ss 36(1A), 101(1A)). <i>UNSW v Moorhouse</i> (1975: library photocopier, authorised) ⚑; <i>Universal Music v Sharman</i> (2005: Kazaa, authorised) ⚑; <i>Roadshow v iiNet</i> (2012 HCA: ISP did not authorise) ⚑. Merely providing facilities isn't authorising (ss 39B, 112E). Safe harbours (Part V Div 2AA): listed service providers only (s 116ABA); categories A–D (ss 116AC–116AF); conditions incl. repeat-infringer policy (s 116AH); no monetary relief (s 116AG). Site blocking: Federal Court injunction against ISPs for overseas sites with primary purpose or effect of infringing; search engines since 2018 (s 115A).</p>`,
    treasures: ['Roadshow Films v iiNet'],
  };
})();
