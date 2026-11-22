/* On the job: practice lessons for clerks, paralegals and interns. NOT part of the course order and not on the Table;
   they don't change unit progress or half-life. Content is from ON-THE-JOB.md (sources are firm job listings and
   search summaries; Allens' own pages could not be read, so Allens-specific points are marked to check). */
window.DUOLOGO = window.DUOLOGO || {};
(() => {
  const D = window.DUOLOGO;
  D.jobs = [
    {
      id: 'job-1', title: 'What you\'ll be given', sub: 'Tasks on a matter',
      lessons: [
        {
          title: 'The tasks',
          cards: [
            { kind: 'guide', margin: ['ON THE JOB'], title: 'Your role in one line',
              core: '<p>You are the support for a lawyer\'s matter. You do the research, drafting, document work and admin that lets them advise the client, and you learn by doing it well.</p>',
              source: 'ON-THE-JOB.md §1.' },
            { kind: 'rule', margin: ['RESEARCH'], title: 'Research and memos',
              core: '<p>Find the Act, the sections, the leading cases and any recent change, then summarise what they mean for the client. Clerks at several Australian commercial firms are expected to do research and help draft client memos.</p>',
              source: 'ON-THE-JOB.md §2A: Clayton Utz and Maddocks clerkship listings; McInnes Wilson tax clerk listing (research summaries, chronologies).' },
            { kind: 'rule', margin: ['DRAFTING'], title: 'Drafting',
              core: '<p>Correspondence to clients and other lawyers, court documents (affidavits, statements, subpoenas), and advice drafts. The lawyer reviews everything before it goes out.</p>',
              source: 'ON-THE-JOB.md §2B: Carroll & O\'Dea Sydney clerk listing; Allens graduate review summary (drafting advice), not read directly.' },
            { kind: 'trap', margin: ['IN PRACTICE'], title: 'Nothing goes out unchecked',
              core: '<ul><li>Drafts are reviewed by the lawyer. Expect edits, and ask about any you don\'t understand: that\'s the fastest way to learn their standard.</li><li>Mark open points in square brackets, like [CONFIRM WITH CLIENT], so nothing unfinished goes out.</li></ul>',
              source: 'ON-THE-JOB.md §3 (Drafting).' },
          ],
          questions: [
            { type: 'choice', q: 'What is the core of a clerk\'s job on a matter?', options: ['Doing the research, drafting and admin that lets the lawyer advise the client', 'Deciding the advice to give the client', 'Negotiating settlements alone', 'Filing without checking'], a: 0, explain: 'You support the lawyer. They advise.' },
            { type: 'tf', q: 'A draft client memo can go out once you\'ve finished writing it.', a: false, explain: 'The lawyer reviews everything before it goes out.' },
            { type: 'choice', q: 'How should an unfinished point in a draft be marked?', options: ['Left blank with no note', 'In square brackets, like [CONFIRM WITH CLIENT]', 'Deleted', 'Put in a footnote the client won\'t see'], a: 1, explain: 'Bracketed flags stop unfinished text going out.' },
            { type: 'match', label: 'Citation network', q: 'Match each task to what it involves.', pairs: [['Research memo', 'The Act, sections, cases, and what they mean for the client'], ['Court document', 'Affidavit, statement or subpoena, checked by the lawyer'], ['File review', 'Pulling out key facts, dates and risks']], explain: 'ON-THE-JOB.md §2.' },
          ],
        },
        {
          title: 'Review, meetings and admin',
          cards: [
            { kind: 'rule', margin: ['DUE DILIGENCE'], title: 'Document review and due diligence',
              core: '<p>Checking searches, title, registers and contracts for problems. Agree the scope and the issues list with the lawyer first. Keep a tracking sheet (document, date, party, issue, risk, page reference), and a note of what you reviewed and what you didn\'t.</p>',
              source: 'ON-THE-JOB.md §2C and §3. Castle Group and McCullough Robertson paralegal listings; Mills Oakley lists due diligence as an IP service.' },
            { kind: 'trap', margin: ['IN PRACTICE'], title: 'Escalate early',
              core: '<p>A serious problem (a change-of-control clause, an unregistered mark, a missing assignment) goes to the supervising lawyer the same day, not in a summary at the end.</p>',
              source: 'ON-THE-JOB.md §3 (Document review and due diligence).' },
            { kind: 'rule', margin: ['MEETINGS'], title: 'Meeting notes',
              core: '<p>Read the file and agenda first. Take notes with attendees, date, decisions, and actions with owners and dates. Send the note within a day, marked as a draft for the lawyer to check.</p>',
              source: 'ON-THE-JOB.md §2D and §3 (Meetings). Ashurst clerk listing (taking notes in meetings).' },
            { kind: 'test', margin: ['DEADLINES'], title: 'When a filing task arrives',
              steps: ['Check the deadline and the time zone straight away.', 'Put it in the diary with a reminder a day earlier.', 'Name and save the file the way the matter team does.', 'File, then save the confirmation or receipt to the file.'],
              core: '<p>Confirm the filing with the receipt. A file without its confirmation isn\'t finished.</p>',
              source: 'ON-THE-JOB.md §2E and §3 (Admin and filing).' },
          ],
          questions: [
            { type: 'order', q: 'Put a filing task in the right order.', items: ['Check the deadline and time zone', 'Diary it with a reminder a day earlier', 'File it', 'Save the confirmation to the file'], explain: 'Deadlines first, then the filing and the proof of it.' },
            { type: 'tf', q: 'A serious problem found in a document review can wait for the end-of-week summary.', a: false, explain: 'Escalate serious problems the same day.' },
            { type: 'sort', label: 'Spectroscopy', q: 'Should this go to the supervising lawyer the same day?', buckets: ['Yes: serious', 'No: routine'], items: [{ t: 'A change-of-control clause', b: 0 }, { t: 'A missing assignment', b: 0 }, { t: 'A typo in a file name', b: 1 }, { t: 'The room booking for a meeting', b: 1 }], explain: 'Serious risks are escalated at once.' },
            { type: 'tf', q: 'A meeting note should be sent as final, so the team knows what was agreed.', a: false, explain: 'Send it within a day, marked as a draft for the lawyer to check.' },
          ],
        },
      ],
    },
    {
      id: 'job-2', title: 'Habits that keep you useful', sub: 'Confidentiality, citations, asking well',
      lessons: [
        {
          title: 'Working well and staying out of trouble',
          cards: [
            { kind: 'trap', margin: ['IN PRACTICE'], title: 'Confidentiality and privilege',
              core: '<ul><li>Don\'t discuss matters outside the team.</li><li>Don\'t put client material on personal devices or accounts. Follow the firm\'s IT and privacy rules.</li><li>Mark advice and internal drafts as privileged and confidential, and don\'t forward them outside the team.</li></ul>',
              source: 'ON-THE-JOB.md §4. General good practice, not a quote from a firm; check the firm\'s own policies.' },
            { kind: 'rule', margin: ['CHECKS'], title: 'Conflicts and time records',
              core: '<p>Before working on a new client or matter, check you haven\'t been involved in a related one. Record your time as you go, with a clear description: good time records are how the firm bills clients fairly.</p>',
              source: 'ON-THE-JOB.md §4. General good practice.' },
            { kind: 'compare', margin: ['CHECK YOUR WORK'], title: 'Before you hand work up',
              table: { head: ['Check', 'How'], rows: [['Citations and section numbers', 'Verify against the primary source (legislation.gov.au, the judgment)'], ['Facts and dates', 'Trace each one back to a document on the file'], ['Open points', 'Mark them in brackets and say what you checked']] },
              core: '<p>Then say what you checked. A short "I couldn\'t open the judgment; this is from [source]" stops the lawyer relying on it by accident.</p>',
              source: 'ON-THE-JOB.md §3 (Research and Drafting) and §4.' },
            { kind: 'rule', margin: ['ASK WELL'], title: 'Asking a good question',
              core: '<p>Ask one clear question with what you\'ve already tried: "I\'ve checked X and Y; the open point is Z. Should I go to the register or the judgment?"</p>',
              source: 'ON-THE-JOB.md §4.' },
          ],
          questions: [
            { type: 'choice', q: 'Which is the best way to ask for help?', options: ['"It doesn\'t work. What do I do?"', 'One clear question with what you\'ve already checked', 'Wait until the lawyer asks', 'Guess and see'], a: 1, explain: 'Show what you tried and name the open point.' },
            { type: 'tf', q: 'Client material can go onto a personal device if you\'re working late.', a: false, explain: 'Follow the firm\'s IT and privacy rules.' },
            { type: 'choice', q: 'Why check for conflicts before starting a new matter?', options: ['To avoid acting against a client you\'ve already worked for on a related matter', 'To get a faster invoice', 'To decide the fee', 'It isn\'t needed for clerks'], a: 0, explain: 'Check you haven\'t been involved in a related matter.' },
            { type: 'match', label: 'Citation network', q: 'Match each habit to its reason.', pairs: [['Verify citations', 'Wrong section numbers get relied on'], ['Record time as you go', 'Clients are billed fairly'], ['Mark privileged drafts', 'Keeps advice confidential'], ['Ask with what you\'ve tried', 'The lawyer can answer quickly']], explain: 'The habits that keep the team and the client safe.' },
          ],
        },
      ],
    },
  ];
})();
