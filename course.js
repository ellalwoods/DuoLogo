/* Duo Logo: the course as a periodic table.
   Every unit in SYLLABUS.md is an element. Groups (columns) are the rights; periods (rows) are the Five Sticks.
   Foundations sit above the table; Culture & specialist rights and Enforcement sit below it (like the lanthanides);
   IP in practice is the Field work block. Atomic number = course order. */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;

  D.groups = [
    { id: 'cr', name: 'Copyright', short: 'COPY', colour: '#2F6FDB' },
    { id: 'tm', name: 'Trade marks', short: 'TM', colour: '#E08A1E' },
    { id: 'po', name: 'Passing off & ACL', short: 'P/O·ACL', colour: '#E0614A' },
    { id: 'pa', name: 'Patents', short: 'PAT', colour: '#1E9E6A' },
    { id: 'de', name: 'Designs', short: 'DES', colour: '#8A5CD6' },
    { id: 'ci', name: 'Confidential information', short: 'CONF', colour: '#4F6A7A' },
  ];
  D.graphite = '#7A8088';
  D.sticks = [
    { n: 1, q: 'What?', long: 'What does it protect?' },
    { n: 2, q: 'How?', long: 'How do you get it?' },
    { n: 3, q: 'Whose & how long?', long: 'Who owns it, for how long?' },
    { n: 4, q: 'Breach', long: 'What infringes?' },
    { n: 5, q: 'Escape', long: 'Defences, exceptions, removal' },
  ];
  D.chapters = [
    { n: 0, name: 'Foundations' }, { n: 1, name: 'Copyright' }, { n: 2, name: 'Trade marks' },
    { n: 3, name: 'Passing off & the ACL' }, { n: 4, name: 'Patents' }, { n: 5, name: 'Designs' },
    { n: 6, name: 'Confidential information' }, { n: 7, name: 'Culture & specialist rights' },
    { n: 8, name: 'Enforcement, strategy & the frontier' }, { n: 9, name: 'IP in practice' },
  ];

  // [unit, symbol, name, block or group, period (stick), key section]
  // block: 'fnd' foundations row · 'low' culture/enforcement block · 'fld' field work · otherwise a group id.
  const U = [
    ['0.1', 'Th', 'Why have IP at all?', 'fnd', 0, ''],
    ['0.2', 'Mp', 'The map of rights', 'fnd', 0, ''],
    ['0.3', 'Cn', 'Constitution, institutions and courts', 'fnd', 0, 's 51(xviii)'],
    ['0.4', 'Tr', 'The international framework', 'fnd', 0, 'Berne · Paris'],

    ['1.1', 'Lw', 'Literary works', 'cr', 1, 's 10 CA'],
    ['1.2', 'Da', 'Dramatic, musical and artistic works', 'cr', 1, 's 10 CA'],
    ['1.3', 'Sm', 'Subject matter other than works', 'cr', 1, 'ss 89–92 CA'],
    ['1.4', 'Ie', 'Ideas, facts and material form', 'cr', 2, 's 22 CA'],
    ['1.5', 'Or', 'Originality', 'cr', 2, 's 32 CA'],
    ['1.6', 'Af', 'Authorship and connecting factors', 'cr', 2, 's 32 CA'],
    ['1.7', 'Ow', 'Ownership', 'cr', 3, 's 35 CA'],
    ['1.8', 'Dl', 'Dealings', 'cr', 3, 's 196 CA'],
    ['1.9', 'Du', 'Duration', 'cr', 3, 's 33 CA'],
    ['1.10', 'Xr', 'The exclusive rights', 'cr', 4, 's 31 CA'],
    ['1.11', 'Sp', 'Copying a substantial part', 'cr', 4, 's 14 CA'],
    ['1.12', 'Au', 'Authorisation and intermediaries', 'cr', 4, 's 36(1A) CA'],
    ['1.13', 'Si', 'Secondary infringement, TPMs and RMI', 'cr', 4, 'ss 37–38 CA'],
    ['1.14', 'Fd', 'Fair dealing', 'cr', 5, 'ss 40–42 CA'],
    ['1.15', 'Ox', 'Other exceptions and statutory licences', 'cr', 5, 's 200AB CA'],
    ['1.16', 'Mo', 'Moral rights', 'cr', 4, 'Part IX CA'],
    ['1.17', 'Cd', 'Copyright meets design, and AI', 'cr', 5, 'ss 74–77 CA'],

    ['2.1', 'Sg', 'Signs and what trade marks do', 'tm', 1, 's 17 TMA'],
    ['2.2', 'Ap', 'The application', 'tm', 2, 's 12 TMA'],
    ['2.3', 'Dt', 'Distinctiveness I: words', 'tm', 2, 's 41 TMA'],
    ['2.4', 'Sh', 'Distinctiveness II: shapes and colours', 'tm', 2, 's 41 TMA'],
    ['2.5', 'Ds', 'Other grounds; comparing marks', 'tm', 2, 's 44 TMA'],
    ['2.6', 'Op', 'Opposition and ownership', 'tm', 2, 's 58 TMA'],
    ['2.7', 'Nu', 'Duration, non-use and cancellation', 'tm', 3, 's 92 TMA'],
    ['2.8', 'Ut', 'Use as a trade mark', 'tm', 4, 's 120 TMA'],
    ['2.9', 'Ik', 'The three kinds of infringement', 'tm', 4, 's 120 TMA'],
    ['2.10', 'Dp', 'Defences and parallel imports', 'tm', 5, 's 122 TMA'],
    ['2.11', 'Gi', 'Certification marks and GIs', 'tm', 1, 'Parts 16–17 TMA'],

    ['3.1', 'Rp', 'Passing off: reputation', 'po', 1, 'ConAgra'],
    ['3.2', 'Mr', 'Misrepresentation and damage', 'po', 2, 'Parkdale'],
    ['3.3', 'Md', 'Misleading or deceptive conduct', 'po', 4, 's 18 ACL'],
    ['3.4', 'Ch', 'Endorsement and character merchandising', 'po', 4, 's 29 ACL'],

    ['4.1', 'Ps', 'How the patent system works', 'pa', 1, 'PA'],
    ['4.2', 'Cl', 'Reading a patent: claims', 'pa', 1, 's 40 PA'],
    ['4.3', 'Mm', 'Manner of manufacture I', 'pa', 1, 's 18(1)(a) PA'],
    ['4.4', 'Bm', 'Manner of manufacture II: software', 'pa', 1, 's 18(1)(a) PA'],
    ['4.5', 'Mt', 'Manner of manufacture III: medicine', 'pa', 1, 's 18 PA'],
    ['4.6', 'Nv', 'Novelty', 'pa', 2, 's 7(1) PA'],
    ['4.7', 'Is', 'Inventive step', 'pa', 2, 's 7(2) PA'],
    ['4.8', 'Uy', 'Utility and secret use', 'pa', 2, 's 7A PA'],
    ['4.9', 'Sf', 'Sufficiency, support and clarity', 'pa', 2, 's 40 PA'],
    ['4.10', 'En', 'Inventors and entitlement', 'pa', 3, 's 15 PA'],
    ['4.11', 'Te', 'Term, extensions, innovation patents', 'pa', 3, 's 67 PA'],
    ['4.12', 'Ex', 'Infringement', 'pa', 4, 's 13 PA'],
    ['4.13', 'Pu', 'Defences', 'pa', 5, 's 119 PA'],
    ['4.14', 'Rv', 'Revocation and amendment', 'pa', 5, 's 138 PA'],

    ['5.1', 'Vf', 'What is a design?', 'de', 1, 's 7 DA'],
    ['5.2', 'Ce', 'Registration and certification', 'de', 2, 's 73(3) DA'],
    ['5.3', 'Nd', 'New and distinctive', 'de', 2, 'ss 15–19 DA'],
    ['5.4', 'Oi', 'Ownership, term and infringement', 'de', 3, 's 46 DA'],
    ['5.5', 'Sx', 'Defences and the copyright overlap', 'de', 5, 's 72 DA'],

    ['6.1', 'Sq', 'The elements', 'ci', 1, 'Smith Kline'],
    ['6.2', 'Ob', 'Obligations and third parties', 'ci', 2, 'Maggbury'],
    ['6.3', 'Em', 'Employees', 'ci', 3, 'Del Casale'],
    ['6.4', 'Pi', 'Defences and limits', 'ci', 5, 'Corrs Pavey'],

    ['7.1', 'Ic', 'ICIP: the cases', 'low', 0, ''],
    ['7.2', 'Ig', 'ICIP: the gaps and the reforms', 'low', 0, ''],
    ['7.3', 'Pb', "Plant breeder's rights and circuits", 'low', 0, 'PBRA'],
    ['7.4', 'Gr', 'Genetic resources and TK', 'low', 0, 'Nagoya'],
    ['8.1', 'Bc', 'Bringing a case', 'low', 0, ''],
    ['8.2', 'In', 'Interlocutory relief and search orders', 'low', 0, 'Beecham'],
    ['8.3', 'Fr', 'Final remedies', 'low', 0, 'Colbeam Palmer'],
    ['8.4', 'Tb', 'Threats, crime and the border', 'low', 0, ''],
    ['8.5', 'St', 'IP strategy across rights', 'low', 0, ''],
    ['8.6', 'Fn', 'The frontier', 'low', 0, ''],

    ['9.1', 'Fo', 'Clearance and freedom to operate', 'fld', 0, ''],
    ['9.2', 'Pr', 'Prosecution and portfolio management', 'fld', 0, ''],
    ['9.3', 'Dd', 'IP in transactions', 'fld', 0, ''],
    ['9.4', 'Li', 'Licensing and commercialisation', 'fld', 0, ''],
    ['9.5', 'Ls', 'Life sciences patents', 'fld', 0, 'TGA s 26B'],
    ['9.6', 'Ac', 'Brand protection and anti-counterfeiting', 'fld', 0, 'Part 13 TMA'],
    ['9.7', 'Dn', 'Domain names and online disputes', 'fld', 0, 'auDRP'],
    ['9.8', 'Av', 'Advertising and consumer law disputes', 'fld', 0, 's 18 ACL'],
    ['9.9', 'Lt', 'Running IP litigation', 'fld', 0, ''],
    ['9.10', 'Ts', 'Trade secrets and departing employees', 'fld', 0, ''],
    ['9.11', 'Ad', 'Advising on AI and data', 'fld', 0, ''],
    ['9.12', 'Wk', 'Capstone: a week in an IP team', 'fld', 0, ''],
  ];

  D.elements = U.map(([unit, sym, name, block, period, sec], i) => ({
    id: 'u' + unit.replace('.', '-'), unit, sym, name, block, period, sec, z: i + 1, ch: +unit.split('.')[0],
  }));
  const seen = new Set();
  D.elements.forEach(e => { if (seen.has(e.sym)) throw new Error('Duplicate symbol ' + e.sym); seen.add(e.sym); });
})();
