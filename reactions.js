/* Reactions: causes of action as balanced equations. Reactants are the elements; contaminants aren't.
   Checked against Wikijuris, Passing off (CC BY-SA 3.0), 11 Nov 2026. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  const WJ = '<a href="https://wikijuris.net/ausip/passing-off/" target="_blank" rel="noopener">Wikijuris, Passing off</a> (CC BY-SA 3.0)';
  D.reactions = [
    {
      id: 'rx-passing-off', group: 'po', product: 'PASSING OFF', home: 'u3-1',
      q: 'Balance the equation for passing off.',
      reactants: [
        { t: 'Reputation', why: 'The plaintiff\'s goods, business or get-up have a reputation or goodwill, recognised by the public as distinctive in the area.' },
        { t: 'Misrepresentation', why: 'A misrepresentation by the defendant in the course of trade (intentional or otherwise).' },
        { t: 'Damage', why: 'Actual or likely damage caused by the false belief that the defendant\'s goods come from the plaintiff. A real, tangible risk is enough.' },
      ],
      contaminants: [
        { t: 'Intention to deceive', why: 'Not an element. Fraud isn\'t needed: innocent passing off is still passing off. Intention can help prove deception and matters for remedies.' },
        { t: 'Registered trade mark', why: 'Not an element. Passing off protects reputation in the marketplace, registered or not. Registration is a different reaction (s 120 TMA).' },
        { t: 'Evidence of actual confusion', why: 'Not an element, and not the test: mere confusion, or wondering whether there\'s a connection, isn\'t enough. You need likely deception.' },
      ],
      explain: 'The "classic trinity": reputation, misrepresentation, damage (<i>ConAgra v McCain</i> (1992) 33 FCR 302 at 355–356, Gummow J).',
      source: `${WJ}: "The Elements of Passing Off"; "Fraud is Not an Essential Element"; "Other Requirements for Misrepresentation"; "Element 3: Damage". The ConAgra pinpoint is as cited by Wikijuris.`,
    },
    {
      id: 'rx-copyright', group: 'cr', product: 'INFRINGEMENT', home: 'u1-11',
      q: 'Balance the equation for direct infringement of copyright in a work.',
      reactants: [
        { t: 'Subsisting copyright', why: 'There must be a work in which copyright subsists, owned by the plaintiff (units 1.1–1.8).' },
        { t: 'Act comprised in the copyright', why: 'The defendant did, in Australia, one of the owner\'s exclusive acts in s 31, such as reproducing the work (s 36(1)).' },
        { t: 'Substantial part', why: 'The act was done in relation to the whole work or a substantial part of it: judged by quality, not quantity (s 14(1)).' },
        { t: 'No licence', why: 'The defendant wasn\'t the owner and had no licence from the owner (s 36(1)).' },
      ],
      contaminants: [
        { t: 'Intention to infringe', why: 'Not an element: s 36(1) doesn\'t mention it. An innocent infringer still infringes; innocence only means no damages, though an account of profits is still available (s 115(3)).' },
        { t: 'Registration of the work', why: 'Not an element. There\'s no system for registering copyright in Australia: protection is automatic.' },
        { t: 'Copying the idea', why: 'A contaminant, not a reactant: ideas are free. Only taking expression can infringe (units 1.4 and 1.11).' },
      ],
      explain: 'Infringement of a work under s 36(1): copyright subsists, and someone other than the owner, without a licence, does in Australia an act comprised in the copyright (s 31) in relation to the work or a substantial part of it (s 14). For reproduction, that act needs a causal connection and objective similarity.',
      source: `<i>Copyright Act 1968</i> (Cth), Compilation No. 65, ss 14(1), 31(1), 36(1), 115(3) (text checked). <a href="https://wikijuris.net/ausip/copyrightinfringement/" target="_blank" rel="noopener">Wikijuris, Copyright infringement</a> and <a href="https://wikijuris.net/ausip/copyrightbackground/" target="_blank" rel="noopener">Copyright background</a> ("There is no system to register copyright in Australia") (CC BY-SA 3.0).`,
    },
  ];
})();
