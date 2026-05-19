# The Crossroads and the Slow Door — Companion
## Aesthetic Spec v1

This is the design contract for the narrative-spiral companion document. It defines what kind of object this is materially, what the palette and typography are doing, how the layout breathes, and what rhythm the reader meets. It exists so that the prose register and the visual register can develop together rather than the visual being applied to finished prose. v10 is the reference document this is paired with; v10's existing system is named here only to clarify what this one is pushing past.

---

## I. Position

v10 is a comprehensive editorial reference. It reads like a McSweeney's long-form piece or a thoughtful Penguin Modern — clean, single-column, restrained, paper-warm with a single rust accent. That register served the reference function, and the next document is doing different work, so it needs to look different.

The companion is a working manuscript. Not a book about a practice, but a book that *is* the practice in object form — the kind of volume left open on a desk, marked-up, returned to at different layers of development, that has a relationship with the practitioner's own body. It admits its handmade-ness rather than hiding it. It carries the textural and editorial-strange qualities of the moodboards (prophet.001, holy.romantic.01, I'm pure!.01, the body/software work) without becoming illegible. The closest published-object analogues are the Wellcome Collection's facsimile occult volumes, Aby Warburg's *Mnemosyne Atlas* plates, the recent reprinted *Codex Seraphinianus*, and contemporary editorial books in the Inventory Press / Mack / Roma vein. Layered, plated, annotated, dense at moments and breathing at others.

The reader is a serious practitioner moving through years of developing work. The object should reflect that — not a starter book, not a flat reference, but something that holds its weight and pays back rereading.

---

## II. Color

The v10 palette (warm parchment, single rust accent) is too warm and too flat for the new register. The companion uses a cooler, layered palette drawn from the aesthetic system already encoded in your moodboards — desaturated, atmospheric, thermal rather than signal — with a small set of warm tones used as accent only.

**Ground tones.** Two papers, switched by section function:

- `--paper-warm` — `#EAE3D2`, the warm parchment of the manuscript register. Used for the body of chapters, reading-list pages, footnote columns. This is the dominant ground.
- `--paper-cool` — `#DDE0DA`, a slightly cooler stone-paper. Used for chapter openings, interlude plates, and any moment that needs to read as cooler-temperature — night work, lunar material, the threshold sections, the holy-as-distance passages.

**Ink.** A graded scale rather than the binary v10 used:

- `--ink` — `#1E1A14`, the deep manuscript ink. Body text on warm paper.
- `--ink-cool` — `#1F232A`, blue-shifted near-black. Body text on cool paper.
- `--ink-mid` — `#5A5448`, mid-tone ink for de-emphasized passages, captions, marginalia bodies.
- `--ink-faint` — `#8A8278`, ghost ink for ruled lines, dividers, secondary metadata.

**Accents — keyed to function rather than decorative.** The v10 single-rust system flattens what's actually a multi-stream document. The companion uses a small accent palette where each color carries content:

- `--accent-rust` — `#9B3A1F`, deeper than v10's. The ground accent for emphasis, hyperlinks, primary marginalia rules. This is the practitioner's red pencil.
- `--accent-sage` — `#6E7A5A`, muted Welsh-pasture green. Used for botanical and Welsh-stream content — Mabinogion references, Rhiannon material, plant work, the wheel of the year in agricultural register.
- `--accent-ash` — `#4A5862`, blue-grey for night material — lunar work, divination, the deep-water passages, oracular and prophetic territory, the Hermetic-Masonic stream.
- `--accent-ochre` — `#8C6B3A`, warm earth ochre. Body work, ancestral material, Hoodoo / Conjure / West African Diaspora content, root work, the ground itself.
- `--accent-gold` — `#A8895A`, warm gold for genuine sacred-thermal moments. Used very rarely. The accent that signals heat. Should appear no more than three times per chapter.

Each accent is a thread the reader learns to track. Welsh material accumulates its sage. Ancestral work accumulates its ochre. The lunar architecture is consistently ash-blue. This isn't a key the reader has to consciously decode — it's a layer of meaning that registers peripherally over time, the way you learn that the marginalia in a particular hand belongs to a particular reader. The convergence in your specific lineage configuration shows up visually when a chapter is doing all four streams simultaneously.

**Avoid:** pure black, pure white, any saturated primary, any color that reads as branded or contemporary-app. The accents are dusty, slightly desaturated even at their most vivid. If a color reads as cheerful, it is wrong.

---

## III. Typography

v10 uses Fraunces / Inter Tight / JetBrains Mono. Beautiful but contemporary. The companion shifts the serif away from Fraunces' nostalgic-modern register toward an actual antique-revival face that reads as honestly old, and it adds a marginalia hand for annotation moments.

**Display and headers — IM Fell English.** The Robert Granjon revival cut by Igino Marini. Genuinely sixteenth-seventeenth century in feel, with the printing-press irregularities preserved rather than smoothed out. Used for chapter titles, major section openings, pull-quote moments. The face carries actual age. Pair with `font-variant-numerals: oldstyle-nums` for any numerals appearing in display contexts.

**Long-form prose — EB Garamond.** A serious old-style serif that reads cleanly at body size and carries the right manuscript register. Better at length than IM Fell, which is too irregular for sustained reading. Use Regular at 17px / 1.65 line-height for ordinary chapter prose. Italic Garamond for emphasized terms, foreign-language terms, and book titles.

**Lead paragraphs and pull quotes — IM Fell English at large size.** When a chapter opens with a lead passage or when a pull quote breaks the column, IM Fell at 22-26px does the work that Fraunces' display sizes did in v10, but reads as more authentically textured.

**Structural and metadata — Space Mono.** Replaces JetBrains Mono. Has more character — slightly off-kilter, less neutral. Used for chapter numbers, date stamps, reading-list tier markers, footnote callouts, build-block headings, and anywhere the technical / structural register needs to read against the prose.

**Marginalia hand — Caveat.** Used very sparingly. This is the practitioner's pencil — annotations in the margins, the occasional "see also" in handwriting, dates of when a passage was returned to. Two to four marginalia per chapter. Never used for primary content. The signal is that a real reader has been here, and you are entering an inherited annotated copy.

**Diagrammatic / archival labels — IM Fell English Small Caps.** For diagram callouts, plate captions, and any moment that wants to read as archival classification.

**Hierarchy.** Chapter title at 56px IM Fell. Section heading at 32px IM Fell italic. Subsection at 22px IM Fell. Body 17px Garamond. Marginalia 14px Caveat. Footnote 13px Garamond italic. Metadata 11px Space Mono uppercase tracked.

**Avoid:** Anything that performs personality. No display-script faces. No retro-novelty fonts. No system stack defaults. Caveat is the only handwritten face and it earns its keep by being used four times per chapter, not forty.

---

## IV. Texture and Material

v10 has zero material texture. The companion treats texture as content rather than decoration.

**Paper grain.** A subtle SVG noise overlay across all backgrounds, opacity ~0.04. Just enough that the page reads as a surface rather than a screen. Two grain variants — slightly different patterns for the warm and cool papers — so they don't repeat identically.

**Ink behavior.** Headers should have very subtle ink-bleed — a thin shadow at +1px that fades to transparent, mimicking ink absorbed into paper. Not a designed drop-shadow; a faint physical artifact. CSS `text-shadow: 0 0.5px 0.5px rgba(30, 26, 20, 0.15)`.

**Rules and dividers.** Never crisp 1px solid lines for chapter or major-section separation. Use:

- A faint hand-ruled feel via SVG that's slightly imperfect — wavers a fraction of a pixel along its length.
- Double rules for chapter openings (an outer thin and an inner thinner, separated by ~3px, the manuscript convention).
- A small ornament at section breaks — not a fleuron, which would be too decorative, but a simple typographic mark in IM Fell small caps, or a single em-dash flanked by dots.

**Foxing and aging.** One or two small areas per chapter — at the gutter, near a marginalia note, at the foot of an image plate — with a very subtle warm tint and increased grain, suggesting a foxed spot in the paper. Not a designed effect; a barely-there atmospheric. CSS `radial-gradient` with very low opacity. The reader shouldn't consciously notice. They should feel it.

**Image plates.** Image inserts have a thin double-ruled frame in `--ink-faint`, with a Space Mono caption below in small caps. The frame is what an archival plate gets in a serious book; it is the convention the page is borrowing.

**Avoid:** Any texture that reads as Photoshop-filter or as costume. The point is restraint — the document feels handmade because every element is doing something, not because it's been distressed.

---

## V. Layout Architecture

v10 is single-column 740px max, centered, generous whitespace, vertically linear. The companion uses a layered grid with a primary text column and a smaller marginal column, with periodic full-width interruptions for image plates and interlude pages.

**Primary grid.** A 12-column underlying grid at max-width 920px on desktop. The text occupies columns 2-9 (a 660px reading column). Columns 10-12 are the marginalia gutter, holding handwritten notes, footnote callouts, small captions, secondary references. On mobile, the marginalia column collapses below the text section it's keyed to, set in a smaller size with a left rule.

**Reading column width.** ~660px at body-text size. Fewer than 70 characters per line, which is the upper end of comfortable reading.

**Interlude pages.** Full-width breaks between chapters and at certain major movement-shifts inside chapters. An interlude is the cool-paper ground, a single image plate or a single pull quote in IM Fell at large size, generous whitespace, no body text. The function is rest and tonal shift — the page tells the reader "you are crossing a threshold."

**Image plates.** Three modes:
- *Inset plate* — within the text column, with a thin frame and Space Mono caption. Used for botanical specimens, archival diagrams, small-format material.
- *Full-bleed plate* — breaks the column, occupies the full page width including marginalia gutter, framed thin. Used for major archival images, prophet-vision photography, body macro, the wheel-of-the-year diagrams.
- *Two-up plate* — paired images with a single caption beneath both, for comparison or sequence.

**Page rhythm.** A chapter does not present as a uniform wall. A typical chapter cycles through: a lead passage, three or four prose passages with marginalia, an image plate or pull quote, more prose, a reading-list block, more prose, a build directive, a closing passage, an interlude. The reader meets density and breath in alternation.

---

## VI. Chapter Openings

A chapter does not open with a heading. It opens with a moment.

The structure of a chapter open:

A full-width interlude page (cool paper) sits between the previous chapter and this one. On that page: a single image plate or pull quote, an epigraph in IM Fell italic, the chapter number in Space Mono small caps in the lower-right corner, nothing else.

The reader turns the page (scrolls past the interlude). The new chapter opens on warm paper with a metadata block — chapter number, title, the named territories woven through this chapter listed in Space Mono small caps with em-dash separators. Below the metadata block, a thick double rule. Below the rule, the chapter title in IM Fell at 56px with the italic in `--accent-ash` for night-keyed chapters, `--accent-sage` for ground-keyed chapters, `--accent-ochre` for body-keyed chapters, `--accent-rust` for the others. Below the title, a lead paragraph in IM Fell at 22px, no first-line indent, set against generous whitespace. Then the body of the chapter begins in Garamond.

Each of the six chapters has its own keyed accent, decided at the architecture stage:

- *Before the beginning* — `--accent-rust`, the practitioner's red pencil, the orientation accent.
- *The first weeks* — `--accent-sage`, the ground beginning to be built.
- *The first year* — `--accent-ochre`, the body settling in.
- *The first three years* — uses all four streams, with the running header rotating through them as the chapter develops, since this is the chapter where the streams converge.
- *The deeper years* — `--accent-ash`, the night-water register of the long practice.
- *The long view* — `--accent-gold`, the rare warm thermal accent, used here because the long view earns it.

---

## VII. Recurring Patterns

The companion uses a small, disciplined set of repeating elements. Each does specific work.

**Reading lists.** Replace v10's bibliography-block format. The new format reads as a working desk: each entry is a one-line citation in Space Mono (author small-caps, title italic Garamond), with a brief annotation in Garamond regular below, and a marginalia gloss in Caveat in the gutter naming why this text in this chapter. Reading lists appear three to five times per chapter, woven in at the moment they are relevant to the developing practice rather than gathered at chapter end.

**Build directives.** A build directive is a clearly-bounded section — a thin double-ruled box, ash-blue in a chapter where ash isn't already the keyed accent (rust where it is) — with a Space Mono small-caps header (`BUILD —`), a brief paragraph of orientation in Garamond, and a clearly-numbered set of moves in Garamond regular. Numbered moves get their numerals in Space Mono. Build directives appear roughly once per major movement of a chapter, more in the early chapters where apparatus is being built, less in the deeper-years chapters where practice runs more continuously.

**Practice prompts.** Smaller than build directives. Inline within the text column, marked with a Space Mono small-caps lead-in (`PRACTICE —`), one paragraph of Garamond italic. The signal that the reader can stop reading here and do something.

**Pull quotes.** A pull quote breaks the text column, occupies the full primary grid (columns 2-9), set in IM Fell at 28px italic in `--ink-cool`, with a thin rule above and below. Used to mark a moment of arrival in the chapter — when something the chapter has been building toward is being said directly. No more than two pull quotes per chapter.

**Marginalia.** Caveat hand in the gutter, two to four per chapter. The marginalia performs three functions: it adds a personal note ("Rhiannon arrived during this section"), it cross-references another chapter or v10 ("see Slow Door v10 § XI on the feminine divine"), or it dates a return to the passage at a later layer of practice. The marginalia is the trace of the practitioner having lived with the document.

**Footnotes.** Numbered in Space Mono superscript in the body, the note itself in Garamond italic at 13px in the marginalia column on desktop, collapsed below the paragraph on mobile. Footnotes do real work — citation, contested-claim flagging, "this needs initiated practitioner support" warnings — not throwaway parenthetical asides.

**Diagrams.** Hand-drawn-feeling rather than vector-clean. The wheel of the year, the holy-romantic-mundane concentric, body-belief-soul triangulation, the self-other circle progression — each drawn with slightly imperfect line weight, IM Fell small-caps labels, framed like archival plates.

**Stream markers.** A small Space Mono indicator in the running header naming which stream(s) the current section is working — `WELSH ▪ ANCESTRAL ▪ HERMETIC` — so the reader can locate themselves in the lineage architecture without having to track it consciously.

---

## VIII. Image Direction

v10 has no images. The companion treats imagery as part of the document's substance. Roughly twenty-five to forty image plates across the six chapters, weighted toward the middle chapters where the lineage material is dense.

**Sources.** Public-domain and Creative Commons archives — Wellcome Collection, Library of Congress, Smithsonian Open Access, Met Open Access, Internet Archive, BnF Gallica, the National Library of Wales for Welsh material. Specific archival material:

- *Welsh* — Black Book of Carmarthen folios, Mabinogion illuminations, medieval Welsh herbal pages, archaeological photography of ritual sites (Anglesey, Bryn Celli Ddu, Welsh holy wells), botanical specimens from National Library of Wales.
- *African Diaspora / Hoodoo / Conjure* — public-domain photography of root work, archival Carolinas Gullah Geechee material (with care about provenance), West African archival photography from Smithsonian's National Museum of African Art collections, Lucumí and related ceremonial archival photography only where appropriate to the recovery framing.
- *Continental European Hermetic-Masonic* — alchemical emblem books from Internet Archive (the *Atalanta Fugiens*, *Mutus Liber*, the Splendor Solis plates), Manly P. Hall's *Secret Teachings* plates, archival Masonic ceremonial illustration. The violent ancestral context means these images appear with critical framing rather than as celebration.
- *Body and anatomical* — Wellcome anatomical plates, Eadweard Muybridge motion studies (the greyhounds-in-sequential-frames moodboard reference), Salpêtrière clinical photography (used as critical material per the aesthetic system, not aesthetic default), archival maternal anatomy.
- *Botanical* — pressed-specimen photography from Kew and the National Library of Wales, hand-drawn herbal plates from sixteenth-eighteenth century botanical books in the public domain.
- *Lunar / oracular* — astronomical engravings, archival photography of the moon in pre-spaceflight observatories, archival tarot plates (Pamela Colman Smith's original illustrations are not yet public domain in all jurisdictions; verify before use).

**Treatment.** Images appear in their archival state — sepia-toned, slightly foxed, with the visible degradation of the original source. Not color-corrected to look new. Not desaturated to look uniform. Each plate is captioned in Space Mono small caps with source attribution, plate number, and a one-line note on what the image is doing in this chapter.

**What the plates do.** Three functions:
1. *Document* — a Welsh holy well, an anatomical plate, a Gullah Geechee material-culture photograph. The image as evidence of what the prose is naming.
2. *Atmospheric* — pressed botanicals, body macro, archival fragment. The image as register — sets the temperature of the chapter without illustrating directly.
3. *Diagrammatic* — original diagrams produced for this document (wheel of the year, concentric cosmology, lineage map). The image as compressed argument.

**Avoid.** No stock photography. No AI-generated imagery. No contemporary illustration. No pinterest-witchy crystal-and-moon aesthetic. No Wikipedia-portrait-style author photographs. The plates are archival and atmospheric or they aren't there.

---

## IX. Rhythm

A chapter alternates between density and breath. The companion is not a uniform reading experience.

**Dense passages.** Long prose passages of integrated lineage and practice work, sometimes 800-1200 words without an image break, with footnotes and marginalia accumulating in the gutter. The reader is inside the work. These appear two to four times per chapter.

**Breath passages.** Shorter passages, often 200-400 words, with more whitespace, fewer marginalia, paced by image plates or pull quotes. The reader is between movements.

**Interludes.** The full-width image-plate or pull-quote pages between chapters and at major within-chapter shifts. The reader is crossing a threshold.

The rhythm should match the rhythm of the practice the document teaches — periods of dense work followed by quieter integrative time, with occasional moments of stop-and-cross.

---

## X. The Anti

What this rejects, specifically:

- *Not contemporary witch aesthetic* — no Etsy crystal-and-tarot-deck visual language, no "moon coven" sans-serif vibes, no soft pastels.
- *Not corporate spiritual* — no Headspace-style softness, no app-aesthetic clean.
- *Not academic* — no university-press-clean typography, no two-column journal-paper layout, no dry citation system performing scholarly distance.
- *Not nostalgic* — the antique-revival typography and archival imagery are not "I miss old books." They are the honest material register for a document doing this kind of work.
- *Not whimsical* — no fleurons used decoratively, no hand-drawn illustrations of moons or stars, no faux-mystical flourishes.
- *Not maximalist* — every element is doing work. Marginalia twice per chapter, not twenty times. Image plates earn their place. Density without clutter.
- *Not warm in the cozy sense* — the warmth in the palette is paper warmth and ground-ochre warmth, not blanket warmth. The document is serious. It cares about you. It does not coo at you.

---

## XI. Open Questions for You

A short list of decisions still genuinely open:

1. *IM Fell vs. Cardo for headers.* I've spec'd IM Fell English because of its irregularity and authentic age, but Cardo is a possible alternative — slightly cleaner, also period-appropriate, easier to set at length. Cardo would push the document a touch closer to scholarly-classical and away from manuscript-irregular. IM Fell is my recommendation; Cardo is the cleaner-feeling fallback if you find IM Fell too rough at body-adjacent sizes.

2. *Caveat vs. another marginalia hand.* Caveat is the most common reliable marginalia face on Google Fonts. Alternatives: Kalam (slightly more architectural), Patrick Hand (rounder, friendlier — probably wrong for this document), or a custom face. Caveat is my recommendation for execution speed; if it reads as too generic-handwriting after the sample passage, we change it.

3. *Image plate density.* I've estimated 25-40 plates across six chapters. That's a real research and curation job (probably 8-15 hours of archival sourcing). The minimum-viable version is 12-15 plates focused on the chapters where they do the most work (chapters 3 and 4). Tell me which version you want me to plan for.

4. *Diagram production.* The original diagrams (wheel of the year, concentric cosmology, lineage map, etc.) need to be produced. I can hand-draw-feel them in SVG with care, but if you want them to feel genuinely hand-drawn you would draw them and we'd scan or trace them. Given the two-year portfolio struggle and that this document is meant to be readable, I'd recommend SVG produced to feel hand-drawn — but flag that originals from your hand would be the more honest move if the time exists for it.

5. *Mobile experience.* Marginalia in a side gutter doesn't survive mobile. The plan is for marginalia to collapse below the relevant paragraph at smaller breakpoints, with a left-rule and reduced size, but it loses some of the register. Confirm mobile readability is a hard requirement (I assume yes given how you actually read), and we accept the marginalia compromise on small screens.

---

## XII. Next Move

If this spec is roughly right, the next move (todo 1.4) is the sample passage of prose in the proposed register. ~500 words from the middle of "The first weeks," set in the actual typography and ground at this spec, so you can react to both the prose register and the visual register together. If something here is wrong, we change it before the sample is built.

If something here is significantly wrong — wrong palette, wrong faces, wrong philosophical position about what kind of object this is — flag that first and we revise the spec before going any further. Better to spend a session re-spec'ing than to build a sample passage on a foundation that doesn't hold.
