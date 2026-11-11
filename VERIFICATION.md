# Verification log

Checked on **11 November 2026**. This records what each piece of legal content was checked against, what changed as a result, and what couldn't be checked (and why). Nothing marked unverified has been filled in by guesswork: it is left as drafted and flagged ⚑.

## Sources that could be reached

| Source | How it was read | Version |
|---|---|---|
| **Federal Register of Legislation** (legislation.gov.au) | The register's own API (`api.prod.legislation.gov.au`), downloading the latest authorised compilation of each Act as Word and reading the text | See the table below |
| **Wikijuris, *Australian IP Law*** (CC BY-SA 3.0) | Its markdown source on GitHub (`nicsuzor/wikijuris`), which is what wikijuris.net/ausip renders | Commit `af6561c`, 6 November 2026 |
| **EUR-Lex** | Judgment and directive text | C‑5/08 *Infopaq*; Directive 96/9/EC |

| Act | Compilation | In force from | Register ID |
|---|---|---|---|
| *Copyright Act 1968* | No. 65 | 2 April 2026 | C2026C00138 |
| *Trade Marks Act 1995* | No. 48 | 19 September 2026 | C2026C00421 |
| *Patents Act 1990* | No. 53 | 19 September 2026 | C2026C00446 |
| *Designs Act 2003* | No. 25 | 14 October 2024 | C2024C00672 |
| *Privacy Act 1988* | No. 104 | 4 June 2026 | C2026C00227 |
| *Competition and Consumer Act 2010* (vol 1) | No. 168 | 27 October 2026 | C2026C00486 |
| *Therapeutic Goods Act 1989* (vol 1) | No. 89 | 5 September 2025 | C2025C00525 |
| *Administrative Review Tribunal Act 2024* | No. 5 | 18 May 2026 | C2026C00202 |
| Amending Acts read as made | *Copyright Amendment Act 2026*; *Copyright Amendment (Online Infringement) Act 2018*; *IP Laws Amendment (PC Response Part 1) Act 2018*; *IP Laws Amendment (PC Response Part 2) Act 2020*; *Designs Amendment (ACIP Response) Act 2021*; *Treasury Laws Amendment (2018 Measures No. 5) Act 2019* | | |

## Sources that could not be reached

| Source | Why | Effect |
|---|---|---|
| **AustLII**, **Federal Court judgments** (judgments.fedcourt.gov.au) | First blocked by the session's network policy. After the hosts were allowed, both answered with a Cloudflare bot challenge, which we did not try to get around | No judgment text. Case facts, holdings and pinpoints were checked against the extracts Wikijuris quotes instead |
| **High Court** (hcourt.gov.au, eresources.hcourt.gov.au) | Old eresources links now redirect to hcourt.gov.au, which timed out | As above |
| **JADE**, **BAILII**, **legislation.gov.uk** | Not on the network allowlist | UK *CDPA* s 9(3) and UK/US comparisons unchecked |
| **EC 2005 evaluation of the Database Directive** | The PDF has moved; old ec.europa.eu URLs return 404 | Summarised from secondary sources, flagged ⚑ |
| State registers, auda.org.au, Federal Court practice notes, DFAT, WIPO | Not attempted, or not on the allowlist | Flagged ⚑ in the syllabus |

To finish the job, open the judgments in a browser (AustLII or the courts' sites) and check the ⚑ items below. That's a human task for now.

## SAMPLE-UNIT.md (Copyright 1.5, Originality)

| Card | Status | Checked against | Changes made |
|---|---|---|---|
| 1 Rule: original ≠ new | ✔ | CA s 32; WJ (*ULP*, Peterson J at 608–609; *IceTV* [48]) | Replaced the paraphrase with the actual quotation; replaced "Australian courts have always accepted" with the *IceTV* statement |
| 2 Rule: factual works | ✔ | CA s 10(1) "literary work" | Quoted the definition verbatim |
| 3 Case: sweat of the brow | ◐ | WJ (*Desktop*, *Feist*) | **Corrected:** Telstra's labour went mainly into verifying and storing the data (it came in from subscribers), not collecting it. Added the two alternative routes to originality and the independent-inquiry point. ⚑ *Sands & McDougall* not covered by WJ |
| 4 Case: *IceTV* | ✔ | WJ ([42]–[43], [48], [52], [152], [157]–[160]) | **Corrected the facts:** IceTV took time and title information from aggregators' guides (the "own predictions, checked and corrected" story isn't in the sources). **Added:** IceTV conceded originality, so the subsistence remarks are obiter. Named the judges in each joint judgment; added quotations |
| 5 Case: *Phone Directories* | ◐ | WJ (Gordon J [344]; Keane CJ [58], [96]) | **Corrected:** "effectively no longer good law" overstated it. *Desktop* has not been formally overruled and is to be treated with caution. Added special leave refused, the "Rules" system, and quotations. ⚑ Perram and Yates JJ not confirmed |
| 6 Test | ✔ | As cards 4–5 | Says the five-step order is our structure, not a court's |
| 7 Trap | ✔ | WJ | Softened mistake 2 to match the cautious position |
| Lesson A questions | ✔ | As above | Q2, Q3, Q6 reworded to match the corrected position on *Desktop* |
| 8 Rule: compilations | ✔ | CA s 10(1); WJ; *IceTV* [152] | Added the [152] quotation |
| 9 Worked example | n/a | Fictional | None |
| 10 Case: *Acohs* | ⚑ | Not in WJ; judgment unreachable | Left as drafted, flagged |
| 11 Rule: AI | ⚑ | CA (no computer-generated-works provision; 2026 amendments don't touch AI) | Dated the "no decision yet" claim; added the October 2025 TDM decision (press reports). UK s 9(3) unchecked |
| 12 Case: too small | ◐ | WJ (*Fairfax* [44], [46], [84]; *Exxon*) | **Corrected *Exxon*:** the source says the name, though original, wasn't substantial enough; the "information or pleasure" gloss isn't in the sources, so it was removed. Added *Fairfax* quotations. ⚑ *Interlego* not covered (and its year may be 1988, not 1989) |
| 13 Compare | ◐ | WJ; EUR-Lex (*Infopaq*, 16 July 2009; Dir 96/9/EC art 7) | Quoted the *Feist* and *Infopaq* tests and the art 7 basis of the EU right; "rejected" Australia → "doubted; not formally overruled". ⚑ UK/US rows |
| 14 Critique | ◐ | EUR-Lex; WJ | Pinned the EU evaluation to December 2005 and its finding ("no proven effect"). ⚑ secondary only |
| 15 Trap | ✔ | WJ (*IceTV* [42]–[43]) | Source added |
| Lesson B questions | ◐ | As above | ⚑ on Q3–Q6 where the card is unverified |
| Outline | ✔ | As above | Rewritten to match |

## Units written after the sample (11 November 2026)

Units 1.1–1.4, 1.6–1.9 and 1.11 and the copyright-infringement Reaction were written directly from the current Act and Wikijuris, and live in the app's data files (`unit-literary.js`, `unit-dma.js`, `unit-part-iv.js`, `unit-ideas.js`, `unit-authorship.js`, `unit-ownership.js`, `unit-dealings.js`, `unit-duration.js`, `unit-substantial-part.js`, `reactions.js`). Every card has a source line; ⚑ marks anything unconfirmed. Extra source read for these: *Copyright (International Protection) Regulations 1969*, Compilation No. 16, in force 1 January 2026 (F2026C00025), and the *Copyright Regulations 2017* (to confirm they don't replace the 1969 Regulations).

**Also for 1.7–1.9:** CA ss 29A, 33, 35(2)–(7), 80, 93, 95, 96, 97–100, 113N–113U, 116AAB–116AAE, 119, 176–180, 196, 197, and s 10(1) "exclusive licence"; *US Free Trade Agreement Implementation Act 2004* as made, Sch 9 items 120–131 (read as PDF, because the register's Word file for it is an older format).

**Statutory text quoted or checked:** CA s 10(1) definitions of "literary work", "computer program", "dramatic work", "artistic work", "drawing", "building", "sculpture", "sound recording", "record", "cinematograph film", "broadcast" (and the absence of any definition of "musical work"); ss 89–92, 113(1), 248G(1); and CA ss 10(1) ("material form", "writing", "work of joint authorship", "author" of a photograph), 14(1), 21(3), 22(1)–(5), 29(1)(a), (3)–(6), 31(1), 32(1)–(4), 35(2)–(6), 36(1), 115(3), 184(1); International Protection Regulations reg 4.

**Cases (checked against the extracts Wikijuris quotes; judgments not reachable):** *Beloff v Pressdram*; *Oceanroutes v Lamond*; *Blackwell v Wadsworth*; *Copyright Agency v NSW* (Finkelstein J, quoted only for the "fiction" remark); *Beck v Montana Constructions*; *Trumpet Winsock v Ozemail*; *ULP* (Peterson J at 608); *Ladbroke*; *Mander v O'Brien*; *Football League v Littlewoods*; *Mirror Newspapers v Queensland Newspapers*; *Kalamazoo*; *Computer Edge v Apple*; *Data Access v Powerflex*; *Autodesk v Dyason (No 2)*; *Francis Day & Hunter v Twentieth Century Fox*; *NLA v Meltwater* (Proudman J at [70]–[71]); *WH Allen v Brown Watson*; *McWilliam's Wines v McDonald's*; *Green v BCNZ*; *Nine Network v ABC* (fireworks); *Merchandising Corp v Harpbond*; *Metix v Maughan* (Laddie J at 722); *Half Court Tennis v Seymour*; *Darwin Fibreglass v Kruhse*; *Hensher v Restawhile* (Lords Reid and Morris); *Cuisenaire v Reed*; *Coogi v Hysport*; *Burge v Swarbrick* ([83]); *Sega v Galaxy*; *Network Ten v TCN Channel Nine* (2004, [74], [77]); *Skybase v Fortuity* (Hill J at 531); *Zeccola v Universal City Studios*; *Telstra v Royal & Sun Alliance* (the Goggomobil ad); *Baigent v Random House*; *IceTV* ([157]–[160] and the substantial-part passages); *Desktop Marketing*; *Star Micronics*; *Donoghue v Allied Newspapers*; *SW Hart v Edwards Hot Water Systems*; *Francis Day & Hunter v Bron*; *Ladbroke v William Hill*; *Burke & Margot Burke v Spicers*; *EMI Songs v Larrikin* (Emmett J at [93]); *Network Ten v TCN Channel Nine* and *TCN Channel Nine v Network Ten (No 2)* (Finkelstein and Hely JJ).

**Where the sources disagreed, the Act won:**
- **Qualified person:** Wikijuris lists "an Australian protected person". The current s 32(4) says only "an Australian citizen or a person resident in Australia". The unit follows the Act.
- **Commissioned works:** Wikijuris's summary of s 35(5) leaves out "for valuable consideration". The unit includes it.
- **Crown copyright duration:** Wikijuris says 50 years; the current s 180 makes it 50 years after the year the material was **made**. The unit says that.
- **"Orphan works":** Wikijuris uses the term for works whose author is unknown (a duration question). Since 2 April 2026 the Act also has an orphan-works scheme limiting remedies where the owner can't be found (Part V Div 2AAA). Unit 1.9 separates the two.
- **"Literary work":** Wikijuris quotes the definition as including tables and compilations "(whether or not in a visible form)". The current s 10(1) has no such words. The unit quotes the current text.
- **"Computer program":** Wikijuris gives an older definition (instructions "expressed in any language, code or notation" that cause a device "to perform a particular function"). The current s 10(1) says "a set of statements or instructions to be used directly or indirectly in a computer in order to bring about a certain result". The unit quotes the current text and notes the difference.
- **International protection:** Wikijuris says it applies only to Berne Convention countries. Current reg 4 covers Berne, UCC, WCT and WTO countries, plus Rome and WPPT countries for some subject matter. The unit follows the regulations.

**Still ⚑ or left out:**
- **Left out of 1.7–1.8 for now** (not covered by Wikijuris): academics' and universities' ownership; open-source licences; Copyright Agency and the Copyright Tribunal. Also left out: whether *Copyright Agency v NSW* went further on appeal.
- *Prior v Sheldon*: Wikijuris cites it for joint owners holding as tenants in common; flagged on the joint-authorship card.
- *Prior v Lansdowne Press* (syllabus 1.6): not covered by Wikijuris, so left out of the unit rather than guessing at its facts.
- *Larrikin* at first instance (2010 FCA): only the Full Court decision is in Wikijuris, so the unit uses that.
- **Breach-of-confidence Reaction: not built.** Wikijuris states three elements and says detriment "must" be shown; the syllabus and design docs use the four *Smith Kline* elements, and whether detriment is required is unsettled in Australia. That needs the judgments before it goes in the app.

**Wording that is ours, not a court's:** the checklists (1.6 connecting factors; 1.11 full infringement answer) and every worked example are teaching structures built on the cited provisions and cases, and say so on the card.

## SYLLABUS.md ⚑ items

✔ = verified against the current Act. ⚑ = still unverified (reason given). "Secondary" = news or law-firm reports found by web search, not primary sources.

| Unit | Item | Result |
|---|---|---|
| 0.3 | ART replaced AAT | ✔ 14 Oct 2024 (*ART Act 2024* s 2 commencement table) |
| 0.4 | Hague | ⚑ Secondary: Australia not a party; FTA commitment to make efforts to join |
| 1.5 | AI-generated material | ⚑ No Australian decision found (secondary search; court databases unreachable) |
| 1.9 | "2019 rules for unpublished and orphan works" | ✔ **Corrected.** The 2019 rules concern works not made public (CA s 33(2)–(3), in force 1 Jan 2019). Orphan works came later: Part V Div 2AAA, limitation on remedies, *Copyright Amendment Act 2026*, in force 2 April 2026 |
| 1.12 | Safe harbours extended 2018; s 115A to search engines 2018 | ✔ Service Providers Act 2018 (29 Dec 2018), s 116ABA; Online Infringement Act 2018 (11 Dec 2018), s 115A(2) |
| 1.17 | No TDM exception | ⚑ Secondary: announced October 2025. ✔ The 2026 amending Act doesn't deal with AI |
| 2.7 | *Taylor v Killer Queen* in the High Court | ⚑ Secondary: [2026] HCA 5, 11 March 2026, 3–2 for Ms Taylor, some issues remitted. **Needs checking against the judgment before 2.7 is written** |
| 2.10 | s 122A commencement | ✔ 25 Aug 2018 (Act No 77, 2018, Sch 1 item 2) |
| 2.11 | Prosecco; GIs in trade agreements | ⚑ Secondary: Australia–EU FTA concluded 24 March 2026, not yet in force |
| 4.4 | *Aristocrat*, what happened after | ⚑ Secondary: [2024] FCA 212 → [2025] FCAFC 131 → special leave refused [2026] HCADisp 15 |
| 4.11 | Innovation patents | ✔ s 68 (8 years); s 52(3) and s 101B(2)(ha), in force 26 Aug 2021. Wording made more precise (divisionals) |
| 4.13 | Compulsory licences: public interest test | ✔ s 133(3)(e); 2020 Act Sch 4, in force 27 Feb 2020 |
| 5.2 | 2021 designs reforms | ✔ Sch 1–6 in force 10 Mar 2022; s 73(3) |
| 5.3 | 12-month grace period | ✔ s 17(1), (1A) |
| 5.5 | Prior use defence | ✔ s 71A |
| 6.4 | Statutory privacy tort | ✔ *Privacy Act 1988* Sch 2, in force 10 June 2025 |
| 7.2 | Standalone ICIP law; WIPO GR/TK treaty | ⚑ Secondary: ICIP law still at the options stage; treaty adopted 2024, signed by Australia, not ratified |
| 7.4 | Nagoya; state biodiscovery laws | ⚑ Secondary: signed 20 Jan 2012, not ratified. State laws not checked |
| 8.6 | Current law reform | Mixed: orphan works ✔; others ⚑ |
| 9.4 | s 51(3) repeal | ✔ *TLA (2018 Measures No. 5) Act 2019* Sch 4, in force 12 Sept 2019 |
| 9.5 | TGA ss 26B–26C | ✔. PBS price cuts and undertakings ⚑ (not checked) |
| 9.6 | Border seizures | ✔ TMA Part 13 (ss 132–136B), CA Part V Div 7. Time periods are in the regulations ⚑ |
| 9.7 | auDA rules | ⚑ Not reachable |
| 9.8 | Therapeutic goods advertising | ⚑ Not checked |
| 9.9 | IP NPA practice note | ⚑ Federal Court site blocked automated access |
| 9.10 | Non-compete ban | ⚑ Secondary: exposure draft in 2026; not law |

### Secondary sources consulted (leads only, not relied on as authority)
- *Taylor v Killer Queen*: [ILN IP Insider](https://www.ilnipinsider.com/2026/03/katy-v-katie-the-case-that-got-away/), [Bartier Perry](https://www.bartier.com.au/insights/articles/killer-queen-killed-off-katie-taylor-outduels-katy-hudson-in-epic-katie-y-perry-trade-mark-battle), [LSJ](https://lsj.com.au/articles/australian-fashion-designer-wins-battle-of-the-perrys/)
- *Aristocrat*: [Baxter IP](https://www.baxterip.com.au/ip-news/high-court-refuses-special-leave-in-aristocrat-a-new-era-for-software-patents), [Allens](https://www.allens.com.au/insights-news/insights/2025/10/what-aristocrat-means-for-computer-implemented-patents/), [Pearce IP](https://www.pearceip.law/2025/12/22/aristocrat-hits-the-jackpot-full-court-resurrects-computer-implemented-inventions-from-the-patent-graveyard/)
- TDM: [iTnews](https://www.itnews.com.au/news/government-rules-out-ai-training-exemption-in-copyright-laws-621309), [Australian Society of Authors](https://www.asauthors.org.au/news/australian-government-rules-out-tdm-exception-for-ai-training-stands-behind-creative-industries/)
- Non-competes: [HSF Kramer](https://www.hsfkramer.com/notes/employment/2026-posts/australia-non-compete-reforms-what-employers-need-to-know), [DMAW Lawyers](https://dmawlawyers.com.au/insights/non-compete-clauses-on-the-way-out-what-the-draft-bill-means-for-australian-employers)
- Prosecco / FTA: [IPKat](https://ipkitten.blogspot.com/2026/03/eu-and-australia-finally-reach.html), [McCullough Robertson](https://mccullough.com.au/2026/05/07/prosecco-italy-eu-australia-fta-gi-impact/)
- ICIP: [arts.gov.au](https://www.arts.gov.au/what-we-do/indigenous-arts-and-languages/protecting-indigenous-cultural-and-intellectual-property)
- WIPO treaty: [JWS](https://jws.com.au/what-we-think/australia-signs-the-wipo-treaty-on-intellectual-property-genetic-resources-and-associated-traditional-knowledge-what-do-you-need-to-know)
- Hague: [IP Australia policy register](https://www.ipaustralia.gov.au/about-us/public-consultations/intellectual-property-policy/policy-register/hague-agreement-on-industrial-designs)
- EU database evaluation: [copyrightevidence.org](https://copyrightevidence.org/wiki/index.php/Commission_of_the_European_Communities_(2005a))
