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
  ];
})();
