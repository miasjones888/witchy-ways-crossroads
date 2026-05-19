# The Crossroads and the Slow Door — Companion
## Aesthetic Spec v2

v1 drifted toward Mack Books / Penguin Modern — a respectable annotated book. That's not where you live. v2 starts from the Chthonic Archive Curriculum register, which is the closest existing sibling to this document in your aesthetic system, and pushes it where the witchcraft companion specifically needs to go: convergence of three lineages, body present and uncomfortable, animal as messenger, the prophet question held earnestly, and the net-art / OS-nostalgia / Internet-as-melancholy register present in the chrome of the document itself.

EB Garamond is out. The whole "antique-revival serif body" move is out. Body is a clean sans; the chrome carries the period and the strangeness.

---

## I. Position

This is a corrupted research terminal in archival drag. An occult-academic working artifact. The closest published-object analogues are not Mack or Inventory Press — they're the Voynich Manuscript opened next to a CRT, Hilma af Klint's notebooks scanned at high resolution into an institutional digital archive that's been maintained by someone who cares about it weirdly, the Salpêtrière clinical photography wing accessed through a Finder window with too many recursive folders open, Piranesi's *Carceri* plates rendered as a downloadable zine. Information density. Diagram-meets-dream. The body present and not-quite-comfortable. Animals appearing where they shouldn't. The slightly-wrong photograph. Terminal readouts as section breaks. The document acknowledges that it's a digital object made to feel like an archive, and that the archive itself was made by hand, and that the hand was doing serious work.

The reader is a serious practitioner moving through years of developing practice. The object should not coo at them. It should be strange enough to keep their attention, dense enough to reward rereading, and built honestly enough that the strangeness reads as the work — not as costume.

---

## II. Color

Cool, desaturated, atmospheric. No warm-parchment dominance. A small, restrained palette where the warmth, when it appears, signals something thermal.

**Grounds.** Two:

- `--ground-stone` — `#E4E2DA`, cool stone paper. Slightly cooler than Chthonic Archive's `#ede6d6`. The dominant ground for chapter bodies. Reads as aged but not warm.
- `--ground-deep` — `#1F232A`, blue-shifted near-black (from your aesthetic-systems palette). Inverted ground for build directives, terminal interludes, full-bleed image plates, the one or two pages per chapter that flip dark.

**Inks.**

- `--ink` — `#16191E`, deep blue-shifted near-black on stone.
- `--ink-bone` — `#E4E2DA`, the stone color used as ink on deep ground (plates, build blocks).
- `--ink-mid` — `#54585F`, mid-tone for de-emphasized passages, secondary metadata.
- `--ink-faint` — `#8C8E8B`, ghost ink for ruled lines, dividers, soft captions.

**Accents — single restrained palette, no lineage color-coding.** The lineage convergence isn't a thing the page needs to color-code. The text does that work. Accents do mood-work only:

- `--accent-rust` — `#7A2818`, deep aged rust. Used for emphasis, primary marginalia rules, pull-quote indicators, and the rare moment of warm thermal accent. No more than one or two appearances per page.
- `--accent-night` — `#3F4A56`, ash-blue for night-keyed sections (lunar work, divinatory passages, oracular and prophetic territory). Used as mood, not as system. Three or four appearances per chapter at most, in the chapters where night work is the subject.

That's it. Two accents, one warm and one cool, both deeply muted. If you find yourself reaching for a third color, the page is overdesigned.

**Hard avoids.** Pure black. Pure white. Any saturated primary. Anything that reads as branded, cheerful, or app-aesthetic.

---

## III. Typography

The stack borrows directly from Chthonic Archive's working pair (VT323 + IM Fell English + Space Mono) and adds a clean sans for body prose, since this document carries thirty thousand words of sustained reading and a monospace body would punish the reader past about five thousand. No EB Garamond. No antique-revival serif body. No cozy handwritten marginalia.

**Display and headers — IM Fell English.** Robert Granjon revival, sixteenth-seventeenth-century, irregularities preserved. Used for chapter titles, major section headings, lead paragraphs, pull quotes. The face that carries actual age and does the manuscript work. Sizes: 56px for chapter titles, 32px for major sections, 22px for lead paragraphs and pull quotes. Italic in `--accent-rust` for emphasis.

**Body prose — IBM Plex Sans.** Clean, legible at length, has character without being precious. Sits inside your aesthetic family (Plex Mono is in Field Guide, the Plex family is part of how you handle technical-poetic materials generally). 16-17px, line-height 1.65, reading column ~620px wide for line lengths in the comfortable-density range. Italics used for foreign-language terms, book titles, occasional emphasis. No serif body. No EB Garamond.

**Structural / metadata / chrome — Space Mono.** Replaces the cozy-bibliography handling of v1. Used for chapter numbers, date stamps, reading-list tier markers, footnote callouts, build-directive headers, image-plate captions, marginalia in the gutter. Set in small caps with tracked letterspacing for the most structural moments. The face that carries the occult-academic / research-terminal register quietly throughout the chrome.

**Terminal-readout / OS-nostalgia register — VT323.** Used for the document's heaviest chrome moments — chapter-open metadata blocks, terminal interlude passages, build-block headers, diagram labels, the running header, system-status footer. VT323 is the face that carries the net-art / Internet-as-melancholy thread you've been working with for years. Without it, the document reads as a quiet edition. With it, the document reads as an archive maintained by someone who loves it weirdly. Sized smaller than its display function would suggest — 13-15px in chrome positions, occasional 18-22px for terminal-interlude passages.

**Marginalia — Space Mono small caps in the gutter.** Not handwritten. Not Caveat. The marginalia reads as archival researcher's note or system commentary, not as a cozy pencil gloss. Two to four marginalia per chapter, doing real work — cross-reference, contested-claim flag, dated return-visit at later layer of practice.

**Hierarchy summary.**

- Chapter title — IM Fell English Regular, 56px
- Major section heading — IM Fell English Italic, 32px
- Subsection — IM Fell English Regular, 22px
- Lead paragraph / pull quote — IM Fell English Italic, 22-26px
- Body prose — IBM Plex Sans, 16-17px / 1.65
- Marginalia — Space Mono small caps, 11-12px tracked
- Terminal interludes — VT323, 18-22px
- Chrome / metadata / captions — Space Mono small caps or VT323, 11-13px
- Footnotes — IBM Plex Sans Italic, 13px

**Hard avoids.** No EB Garamond. No Caveat. No display-script faces. No retro-novelty. No system-stack defaults. No serif body face of any kind.

---

## IV. Texture and Material

Texture is functional, not decorative. The document admits its handmade-ness without performing distress.

**Paper grain.** Subtle SVG noise at opacity ~0.04 across `--ground-stone`. A slightly different grain for `--ground-deep` at the same opacity. The page reads as a surface, not as a screen.

**Scan / archive artifacts.** Occasional barely-there CRT-scan-line passes across image plates. Very low opacity. The document looks like it's been handled — not Photoshop-filter handled, but archival-scan handled.

**Rules and dividers.** No crisp 1px lines for major separation. Use:

- Slightly imperfect SVG hand-ruled lines for chapter breaks (wavers a fraction of a pixel along its length).
- Double rules for chapter openings, manuscript convention.
- Small ornament at section breaks — a single em-dash flanked by Space Mono dots, or a section number in VT323 in `--accent-rust`. Never fleurons.
- Terminal-style horizontal rules `─────────` set in VT323 for OS-nostalgia register.

**Image plates.** Frame each plate with a thin double rule in `--ink-faint`, with a Space Mono small-caps caption beneath naming source, plate number, what the image is doing in this chapter. The caption is dense — three or four lines of structured metadata, not one flowing line. The image looks like an entry in an archive, not an illustration in a book.

**Foxing.** One or two areas per chapter — at the gutter, near a marginalia note, at the foot of an image plate — with a faint warm radial-gradient and slightly increased grain. Subliminal aging. The reader feels it without naming it.

**Hard avoids.** No designed distress effects. No Photoshop filters. No fake paper-tear PNGs. No grunge textures. No filter-stack costume.

---

## V. Layout Architecture

v1's primary-column-with-marginalia-gutter is competent but it's the layout of a respectable annotated book. v2 keeps the basic structure for sustained reading but breaks it more aggressively at moments of strangeness — terminal interludes, full-bleed image plates, asymmetric specimen-card chapter openings, dark-ground build directives.

**Primary grid.** 12-column underlying grid at max-width 1040px on desktop. Text occupies columns 2-8 (a 620px reading column). Columns 9-12 are the marginalia gutter, holding Space Mono notes, footnote callouts, image-plate captions, secondary references. Slightly off-center — text column shifted left, gutter to the right — rather than perfectly centered, which would read too clean.

**Reading column width.** ~620px at body-text size. Narrow enough to read at length without strain.

**Asymmetric chapter openings.** A chapter does not open with a centered title and a generous lead. A chapter opens with a specimen-card composition: chapter number + key territories listed in VT323 in the upper-left, archival image plate in the right two-thirds, chapter title in IM Fell English at 56px set across the lower half, lead passage in IM Fell italic below. The composition is keyed to archival catalog cards, not to magazine title pages.

**Full-bleed image plates.** Three to five times per chapter, an image plate breaks the column entirely and occupies the full grid width including marginalia gutter. Caption sits beneath in Space Mono small caps, structured as four-line metadata block.

**Terminal interludes.** Once or twice per chapter, a section break that is a full-width passage in VT323 set on `--ground-deep` with `--ink-bone` — reads as a terminal readout. Used for the moments the document wants to acknowledge itself as a digital archive — system-status passages, dated working logs, transitional commentary that doesn't belong to the prose voice. These are the document's acknowledgment of its own internet-melancholy register.

**Cross-chapter thresholds.** Between chapters, a full-page interlude on `--ground-deep` — a single image plate, an epigraph in IM Fell italic, the next chapter's number in VT323, nothing else. The reader crosses a threshold.

**Mobile.** Marginalia collapses below the relevant paragraph at narrow widths, set in Space Mono small caps with a left rule. Chapter openings reflow — image plate above, metadata block, title, lead passage. Terminal interludes still work, scaled smaller. Full-bleed plates remain full-bleed. Some asymmetry is lost but the register holds.

---

## VI. Chapter Openings

A chapter opens as an archival catalog card.

Upper left, in VT323: the chapter number set as `CHAPTER 02 ▪ THE FIRST WEEKS`, with the territories woven through this chapter listed below in Space Mono small caps with em-dash separators (`apparatus ▪ ritual ▪ literacy ▪ the wheel ▪ rhythm`). Below that, a date stamp in Space Mono — the date this chapter is meant to be opened in the practice (e.g., `entry — months 1-6`).

Upper right, occupying the right two-thirds of the page width: an archival image plate, framed thin, captioned in Space Mono.

Across the lower half, the chapter title in IM Fell English at 56px. Below the title, a lead passage in IM Fell English italic at 22-26px, no first-line indent, generous breath. The lead is two to four sentences — what this chapter is doing.

Below the lead, a thick double rule in `--accent-rust`. Below the rule, body prose begins in IBM Plex Sans.

Each chapter has its own keyed archival image at opening, chosen in the architecture phase. The image carries the chapter's temperature.

---

## VII. Recurring Patterns

A small disciplined set of repeating elements.

**Reading lists.** Replace v1's gentle bibliography blocks. Each entry in the new format is set as a structured archival entry: author in Space Mono small caps, title in IM Fell English italic, year in VT323 brackets, two to three lines of annotation in IBM Plex Sans. The marginalia gutter beside each entry holds a Space Mono note naming why this text in this chapter (e.g., `→ ground for ch 3 body work`). Reading lists appear three to five times per chapter, woven into the prose at the moment they're relevant.

**Build directives.** Inverted block on `--ground-deep` with `--ink-bone` text, framed thin. Header in VT323 (`BUILD ▪ THE GRIMOIRE`) set in `--accent-rust`. Brief orientation paragraph in IBM Plex Sans, then numbered moves with numerals in VT323. The terminal-readout register is the right register for these moments — what to construct yourself, set as if rendered by the document's own machine.

**Practice prompts.** Smaller. Inline within the text column. Marked with a Space Mono lead-in (`PRACTICE — `), one paragraph in IBM Plex Sans italic. Quiet. The signal that the reader can stop reading and do something.

**Pull quotes.** A pull quote breaks the column, occupies the full primary grid, set in IM Fell English italic at 28px in `--ink`. Thin rule above and below. Used to mark a moment of arrival — the chapter saying directly what it has been building toward. Two pull quotes per chapter maximum.

**Marginalia.** Space Mono small caps in the gutter. Not handwritten. Two to four per chapter. Three functions: cross-reference (`→ slow door v10 § XI`), contested-claim flag (`gimbutas archaeology contested — see ch 4`), dated return-visit at later practice layer (`returned year 3`). The marginalia is the trace of the practitioner having lived with the document, but the trace is a researcher's, not a sentimental annotator's.

**Footnotes.** Numbered in VT323 superscript in the body. The note itself in IBM Plex Sans italic at 13px in the marginalia column on desktop, collapsed below paragraph on mobile. Footnotes do real work — citation, contested-claim flagging, "this needs initiated practitioner support" warnings — and are integrated into the chrome's terminal-archive register.

**Diagrams.** Diagram-meets-dream. Wheel of the year, the holy-romantic-mundane concentric, body-belief-soul triangulation, lineage convergence map. Hand-drawn-feel SVG in `--ink` on `--ground-stone` (or inverted for the dark-ground plates). Labels in IM Fell English Small Caps. Thin frames. Captions in Space Mono. Each diagram is compressed argument, not decoration. They sit at moments where the prose would otherwise loop.

**Terminal interludes.** Once or twice per chapter. Full-width passages on `--ground-deep` in VT323. Used for working-log entries, system-status moments, transitional commentary that acknowledges the document as a digital archive. Example function: between the prose passage on building the altar and the prose passage on first ritual, a terminal interlude in VT323 reading like a directory listing of the apparatus assembled to date — `/altar/ground/ — built day 3 / /grimoire/initial-pages/ — opened day 1 / /candle/red/ — placed day 4 /...`. Diaristic in form, mechanical in voice.

**Stream markers.** Small Space Mono indicator in the running header naming which lineage stream(s) the current section is working — `WELSH`, `ANCESTRAL`, `HERMETIC`, or combinations — so the reader can locate themselves. Subtle. Top-right of every page. The convergence in your specific lineage shows up at moments when all three are listed.

---

## VIII. Image Direction

v1's image direction (Wellcome facsimile, Warburg, respectable archival) is partly right but skewed too institutional. v2 keeps the public-domain archive sourcing but pushes the curation toward the strange, the bodily, the animal-as-messenger, and the slightly-wrong.

**What the plates do, three modes.**

- *Document* — a Welsh holy well, an anatomical plate, a Gullah Geechee material-culture photograph. The image as evidence.
- *Atmospheric* — pressed botanicals, body macro, archival fragment, the slightly-wrong photograph. The image as register.
- *Diagrammatic* — original diagrams produced for this document. The image as compressed argument.

**Specific archival sources, weighted toward your aesthetic-systems references.**

- *Welsh* — Black Book of Carmarthen folios, Mabinogion illuminations, archaeological photography of Welsh ritual sites (Anglesey, Bryn Celli Ddu, holy wells), botanical specimens from National Library of Wales, slate-quarry photography from north Wales (industrial-archival, not picturesque).
- *African Diaspora / Hoodoo / Conjure* — public-domain Carolinas Gullah Geechee archival photography (handled with care about provenance — confirm rights for each plate), West African archival photography from Smithsonian National Museum of African Art collections, mid-century photography of root work and conjure practice from Library of Congress where available.
- *Continental European Hermetic-Masonic* — alchemical emblem books from Internet Archive (*Atalanta Fugiens*, *Mutus Liber*, *Splendor Solis* plates), Manly P. Hall *Secret Teachings* plates, archival Masonic ceremonial illustration. Used with critical framing given the violent ancestral context — the plates appear as material to be reckoned with, not celebrated.
- *Body* — Wellcome anatomical plates (especially the strange ones), Salpêtrière clinical photography (used as critical material per your aesthetic system — the clinical as ironic frame, not aesthetic default), Eadweard Muybridge motion studies (the greyhounds-in-sequential-frames reference), nineteenth-century maternal anatomy plates, archival skin-macro photography where available.
- *Animal as messenger* — archival photography of pale animals in motion (white horse, white fox, archival deer in liminal positions), nineteenth-century natural-history plates of the strange animals, Muybridge's animal motion studies. The animal in this document appears to mean something that can't be said directly.
- *Botanical* — pressed-specimen photography from Kew, the National Library of Wales, Smithsonian botanical archives. Hand-drawn herbal plates from sixteenth-eighteenth century botanical books. Plant photography that's slightly-wrong — out of focus, overexposed, scanned at high resolution showing the paper grain of the original.
- *Lunar / oracular* — astronomical engravings, archival photography of the moon from pre-spaceflight observatories, archival tarot plates (verify Pamela Colman Smith public-domain status by jurisdiction before use), Voynich Manuscript folios (public domain, perfect for this document).
- *Net-art / OS / archive-melancholy* — recursive Finder window screenshots from JODI's archive, Olia Lialina's web art where available, archival CRT photography, scanned interface artifacts. Used at terminal interludes and as the rare net-art-melancholy plate that signals the document's awareness of its own digital condition.

**Treatment.** Images appear in their archival state. Sepia toning, foxing, grain, degradation of original source visible. Not color-corrected to look new. Not desaturated to a uniform palette. Each plate captioned in Space Mono small caps with source attribution, plate number, one line on what the image is doing in this chapter.

**Density.** Two versions on the table:

- *Full version* — 30-40 plates across six chapters, weighted 6-8 plates per chapter, more in chapters 3-4 where lineage material is densest. Real curation work — probably 12-15 hours of archival sourcing.
- *Minimum-viable version* — 18-22 plates across six chapters, focused on chapters 3 and 4 (the lineage-dense middle), with 2-3 plates per chapter elsewhere. Probably 6-8 hours of sourcing.

I'd recommend the minimum-viable version for v1 of the document and adding plates over time as you develop the practice. Adding plates reads as the document being maintained. Front-loading them all reads as the document being finished, which is wrong for what this object is.

**Hard avoids.** No stock photography. No AI-generated imagery. No contemporary illustration. No pinterest-witchy crystal-and-moon-and-tarot-deck aesthetic. No author headshots. No Etsy.

---

## IX. The Net-Art / OS / Internet-Melancholy Register

v1 missed this thread entirely. v2 makes it structural rather than decorative.

**Where it appears.**

- *Terminal interludes* — once or twice per chapter, a passage in VT323 on `--ground-deep` that reads as a working log, a directory listing, a system-status note. The document briefly acknowledges itself as a digital archive maintained by someone who cares about it.
- *Chapter-opening metadata blocks* — set in VT323 as if rendered by the document's own machine.
- *Build-directive headers* — VT323 in `--accent-rust`, set as if a terminal command.
- *Footer / running header* — small VT323 chrome at the foot of every page, holding system-status-style metadata (date last revised, current section, stream markers). Reads as a digital archive's chrome.
- *Section-break ornaments* — sometimes a typographic ornament, sometimes a terminal-style rule (`─────────`).
- *Net-art image plates* — rare, two or three across the whole document, at the moments the document is reflecting on what it is. JODI / Lialina / archival CRT material. The melancholy of the early internet held earnestly.

**Why.** Your aesthetic-systems file names the Internet as Melancholy Object as a major thread. The "MY BODY MY SOFTWARE" piece, the recursive Finder windows, the terminal readout `(usr/): i still feel nothing` — this is your register. A spiritual practice document for someone who lives in this register cannot pretend to be an old book. It has to acknowledge that it's a digital object made to feel like an archive, and that the archive itself was made by someone who knows the difference.

The risk: this register can read as twee, as costume, as net-art-cosplay. The discipline is restraint. VT323 is in the chrome, never in the body. Terminal interludes earn their place by doing real work — actual working-log content, actual directory listings of the practice being assembled. If a terminal interlude is decorative, cut it.

---

## X. Rhythm

A chapter alternates between density and breath, with a third movement v1 didn't have: strangeness.

- *Dense passages* — long prose passages of integrated lineage and practice work, 800-1200 words, footnotes and marginalia in the gutter. The reader is inside the work. Two to four per chapter.
- *Breath passages* — shorter prose, 200-400 words, more whitespace, paced by image plates or pull quotes. The reader is between movements.
- *Strange passages* — terminal interludes, dark-ground build directives, full-bleed image plates of the body or the animal-as-messenger. The reader is in the document's other register — its acknowledgment that it's a digital occult-academic artifact, not a quiet edition. One or two per chapter.
- *Cross-chapter thresholds* — full-page interludes between chapters on `--ground-deep` with a single image plate or epigraph. The reader is crossing.

The rhythm matches the rhythm of practice — periods of dense work, quieter integrative time, occasional moments of strangeness that disrupt expected register and remind the practitioner that what they're doing is not normal.

---

## XI. The Anti — what this rejects

- *Not contemporary witch aesthetic.* No Etsy crystal-and-tarot-deck visual language. No "moon coven" sans-serif. No soft pastels. No Pinterest-witchy register.
- *Not corporate spiritual.* No Headspace softness. No app-aesthetic clean.
- *Not antique-revival respectable book.* Not Penguin Classics. Not Mack Books. Not Inventory Press. Not Roma. Those are beautiful but they are not where you live, and the document trying to look like them flattens its actual register.
- *Not academic-clean.* No university-press typography. No two-column journal layout. No dry citation system performing scholarly distance.
- *Not nostalgic.* The IM Fell, the VT323, the archival imagery are not "I miss old books" or "I miss the early web." They are the honest material registers for the work this document is doing.
- *Not whimsical.* No fleurons used decoratively. No hand-drawn moons or stars. No faux-mystical flourishes. No cozy-pencil marginalia.
- *Not maximalist.* Every element does work. Marginalia twice per chapter, not twenty times. Image plates earn their place. Density without clutter.
- *Not warm in the cozy sense.* The document is serious. It cares about the practitioner. It does not coo at them.

---

## XII. Open Questions for You

1. *VT323 vs an alternative bitmap face.* VT323 is the obvious choice and works in your existing projects. Alternatives if VT323 reads as overused after the sample: Major Mono Display (cleaner), Share Tech Mono (more system-terminal), or a rarer find like Pixelify Sans. VT323 is my recommendation.

2. *IBM Plex Sans vs Inter Tight vs Space Grotesk for body.* I went with Plex Sans because it sits in your aesthetic family and reads at length. Alternatives: Inter Tight (what v10 used — very neutral, might read as too quiet for the new register), Space Grotesk (more idiosyncratic, maybe better for the occult-academic feel), GT America Mono (paid). Tell me if you want to try the sample passage in Space Grotesk instead.

3. *Image plate density — minimum-viable vs full.* I'm recommending minimum-viable (18-22 plates) for first version with plates added over time. Confirm.

4. *Terminal interludes — earnest or restrained.* I'm recommending one or two per chapter, doing real work. If you want this register more present (more like the Cat Archive's net-art-density) it could go to three or four per chapter, but the document is also long-form contemplative practice writing and too much chrome would crowd out the prose. Tell me which direction.

5. *Diagram production.* Original diagrams need to be made. SVG hand-drawn-feel produced by me, or you draw them and I trace? Given the two-year portfolio struggle and that you want this document readable, my recommendation is SVG produced by me to feel hand-drawn. Originals from your hand would be more honest if the time exists.

---

## XIII. Next Move

If this spec is roughly right, item 1.4 is the sample passage — ~500 words from the middle of "The first weeks," set in this typography (IM Fell English headers, IBM Plex Sans body, Space Mono chrome, VT323 in heavy-chrome moments) on the cool stone ground, with one terminal interlude and one image plate, so you can react to prose and visual register together before any chapter-scale writing happens.

If something here is still wrong, flag it now and we revise the spec before the sample is built. We've already spent one spec on the wrong neighborhood. Better to spend a session re-spec'ing than build on a foundation that doesn't hold.
