# SupportNow · FundingCoach

The relaunch of the fundraising coach program, rebuilt on the
[portfolio shell](../supportnow-portfolio-shell/README.md).

Open `index.html` by double clicking it. No server needed.

## What changed from advocacyabby.com

The live page is a personal brand: script "Advocacy Abby" wordmark, Merriweather headings, and a
nav of About / Providers / Families / Grants / In!. Three things moved at once.

**The brand.** It is now FundingCoach, a SupportNow portfolio app, wearing the standard shell nav
and footer. DM Sans, brand blue, the mark and the app switcher.

**The offer.** It is no longer just Abby. FundingCoach matches a family to a vetted coach from the
network on two axes: **what they need to fund**, and **who has come closest to funding it**. Abby is
the founding coach rather than the brand. This is the substantive change, and it drives the new
"How it works" and "The network" sections.

**The scope.** Families only. The Providers and Nonprofits audience cards are gone, and so is
**Book for Speaking**, which was what the old Providers nav link actually pointed at.

The single Browse Grants block became **three funding paths**, because grants alone was never the
whole answer: Fundraising (crowdfunding), Grants, and Advocacy. Most families work more than one.

Kept from the old page: the headline, the four partner logos, and the JotForm intake
(`250483841777063`) behind every Start Now. Dropped: the newsletter block, the "register your
interest" form, and both PDF lead magnets, which are Abby's own rather than SupportNow's. In their
place is a free tools section pointing at the accessible van planner, the grants database, and the
advocate directory.

Added since: a **Pricing** section and nav link, because free is the hardest claim on the page
to believe.

## The nav

```
[ mark ⌄ ] │ FundingCoach     About  Families  Grants  Pricing   [ Start Now → ]
```

All four links are on-page anchors, the way the source site worked. `Grants` lands on the
three-path section, since that is where the grants card lives. Four links is one more than the
shell was drawn for, and it fits: 408px of slack in the pill at 1280px, and everything collapses
into the offcanvas below 992px anyway.

## Free is the message

Coaching being free is the thing families disbelieve, so it is repeated rather than stated once:
the hero note, the third About pillar, the whole **Pricing** section, the closer, and the footer.

Pricing works as a value stack. The left column prices each piece of the work by the hour and
totals it; the right column is a large `$0`. The point is not that the program is cheap, it is that
the work is worth real money and families are not being asked for it.

**The rates are anchored to the advocate marketplace's own `rate` fields**, which cluster at $50 to
$150/hr, with one listing at "$120/hr, or flat $600 per appeal". An earlier draft priced these as
nonprofit grant-writing engagements ($2,000 per application), which is the wrong market: these are
individual families filling out foundation assistance forms, not nonprofits writing proposals.

**Free means the funding coaching, not everything the coach does.** Coaches are advocates who also
sell IEP representation, insurance appeals, and the like. The `.price-scope` line under the `$0`
names that boundary, and the free claims elsewhere on the page are scoped to the coaching rather
than left open ended.

## The coach cards

The card answers one question in order: has this person done it before (the edge to edge
`campaigns launched` header), do they know my situation (the lived experience line), and do they
work on my kind of need (the cause chips). There is no bio paragraph, deliberately, because it
pushed the chips below the fold.

Abby's card is the founding coach and takes a brand tinted header instead of a separate badge.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page. Nav and footer are hardcoded, which is what the shell expects of a live app. |
| `funding-coach.css` | Page styles. Follows the advocacy marketplace's CSS conventions. |
| `coaches.js` | The coach registry. Record shape borrowed from the marketplace's `data.js`. |
| `page.js` | Renders the coach cards. That is its only job. |
| `shell.css`, `logo-mark.svg`, `logo.svg` | Copied unchanged from the portfolio shell. |
| `shell.js` | The shell's live-app build, `CURRENT = 'fundingcoach'`. |
| `apps.js` | The app registry, with FundingCoach added as the ninth app. |

## Things worth knowing

**`apps.js` lives in three places** now: the shell, the advocacy marketplace, and here. Adding an
app means adding it to all three or the switcher quietly disagrees with itself app to app.

**Do not name a class `.mark`.** Bootstrap owns it and paints it highlight yellow. The quote block
uses `.quote-mark` for exactly this reason.

**The primary call to action appears at least once every two sections.** Hero, How it works,
Pricing, and the closer carry it, which is what keeps the longest gap at two. Adding a section
means checking that run again.

**Coach photos** are `randomuser.me` placeholders, the same source the marketplace uses. Abby has
no photo and falls back to an initials avatar. **Partner logos hotlink** to the Advocacy Abby CDN,
so they need real files before this goes anywhere permanent.

**Match copy is hedged on purpose.** Coaches have funded care for their own families, but not
necessarily the exact thing a given family is facing, so the page says "as close as we can" rather
than claiming an exact match.

**Every coach but Abby is fictional, and every campaign count is invented, Abby's included.** The
prototype banner that used to say so has been removed, so nothing on the page flags it now.

## Still to decide

**The hour estimates.** The hourly rates come from the marketplace, but how many hours each
activity takes is my estimate, as is the $700 to $2,000 total.

**The campaign counts.** Placeholders, including Abby's.

**Whether `Grants` is the right nav link.** The page has three funding paths, and the nav names
one of them. `Funding` pointing at the whole section is the alternative.

**Nine apps in a two column switcher** leaves one cell hanging. A tenth app fixes it, or the last
cell spans.
