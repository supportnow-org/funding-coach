/* ──────────────────────────────────────────────
   SupportNow · Platform Nav Shell — the app registry.
   One entry per platform app. This is the only file that
   changes when an app is added, renamed, or retired.

   Per app:
     desc     one line, used in the footer identity column
     links    the nav links, first one renders active
     cta      the nav button
     footCta  the footer's primary call to action
     shareUrl what the footer's share field hands out

   Colour: base / dark / tint. Giving, Meals, Todos and Updates carry the
   SupportNow 2.0 design system values, matching features.js exactly. The
   other five are a first pass, spaced around the wheel from those four and
   from brand blue #188aec. Only header-v3 reads these; the other pages
   ignore them.
   ────────────────────────────────────────────── */

window.PF_APPS = [
  {
    key: 'grants',
    name: 'Grants',
    icon: 'fa-hand-holding-dollar',
    base: '#0891b2', dark: '#0e7490', tint: '#ecfeff',
    desc: 'Funding built for small nonprofits, without the grant writer.',
    home: 'https://grants.supportnow.org/',
    shareUrl: 'https://supportnow.org/grants',
    links: [
      { label: 'Find Grants',  href: '#' },
      { label: 'How it Works', href: '#' },
      { label: 'About',        href: '#' }
    ],
    cta: { label: 'Start Now', href: '#' },
    footCta: {
      head: 'Ready to find funding?',
      desc: 'Tell us about your work once and we will match you to grants you can actually win.',
      label: 'Start Now', href: '#'
    }
  },
  {
    key: 'fundingcoach',
    name: 'FundingCoach',
    icon: 'fa-compass',
    base: '#4f46e5', dark: '#4338ca', tint: '#eef2ff',
    desc: 'Free one-on-one coaching through the whole fundraising journey.',
    home: 'index.html',
    shareUrl: 'https://supportnow.org/fundingcoach',
    links: [
      { label: 'About',    href: '#about' },
      { label: 'Families', href: '#families' },
      { label: 'Grants',   href: '#grants' },
      { label: 'Pricing',  href: '#pricing' }
    ],
    cta: { label: 'Start Now', href: 'https://form.jotform.com/250483841777063' },
    footCta: {
      head: 'Ready to fund what your child needs?',
      desc: 'Tell us your situation once and we will match you with the closest fit in the coaching network.',
      label: 'Start Now', href: 'https://form.jotform.com/250483841777063'
    }
  },
  {
    key: 'podcast',
    name: 'Podcast',
    icon: 'fa-microphone-lines',
    base: '#c026d3', dark: '#a21caf', tint: '#fdf4ff',
    desc: 'Conversations with families and the people who help them.',
    home: 'https://supportnow.org/podcast',
    shareUrl: 'https://supportnow.org/podcast',
    links: [
      { label: 'Episodes', href: '#' },
      { label: 'Guests',   href: '#' },
      { label: 'About',    href: '#' }
    ],
    cta: { label: 'Listen Now', href: '#' },
    footCta: {
      head: 'Never miss an episode',
      desc: 'New conversations every other week, wherever you already listen.',
      label: 'Listen Now', href: '#'
    }
  },
  {
    key: 'advocacy',
    name: 'Advocacy',
    icon: 'fa-people-roof',
    base: '#e11d48', dark: '#be123c', tint: '#fff1f2',
    desc: 'Advocates who have been exactly where you are.',
    home: 'https://supportnow-org.github.io/family-advocacy/',
    shareUrl: 'https://supportnow.org/advocacy',
    links: [
      { label: 'Find an Advocate', href: '#' },
      { label: 'How it Works',     href: '#' },
      { label: 'For Advocates',    href: '#' }
    ],
    cta: { label: 'Get Matched', href: '#' },
    footCta: {
      head: 'Find your advocate',
      desc: 'Tell us what you are navigating and we will match you with someone who has been there.',
      label: 'Get Matched', href: '#'
    }
  },
  {
    key: 'emergency',
    name: 'Emergency Contact',
    icon: 'fa-shield-heart',
    base: '#dc2626', dark: '#b91c1c', tint: '#fef2f2',
    desc: 'Everything a first responder needs about your child, on the fridge.',
    home: 'https://supportnow.org/emergency',
    shareUrl: 'https://supportnow.org/emergency',
    links: [
      { label: 'Safety Score',   href: '#' },
      { label: 'What to Include', href: '#' },
      { label: 'For Schools',    href: '#' }
    ],
    cta: { label: 'Build My Card', href: '#' },
    footCta: {
      head: 'Build your emergency card',
      desc: 'Ten minutes now means a first responder knows your child when it counts.',
      label: 'Build My Card', href: '#'
    }
  },
  {
    key: 'giving',
    name: 'Giving',
    icon: 'fa-hand-holding-heart',
    base: '#059669', dark: '#047857', tint: '#ecfdf5',
    desc: 'Invite your community into something that matters.',
    home: 'https://supportnow.org/giving',
    shareUrl: 'https://supportnow.org/giving',
    links: [
      { label: 'How it Works',   href: '#' },
      { label: 'Family Stories', href: '#' },
      { label: 'Questions',      href: '#' }
    ],
    cta: { label: 'Start a Fund', href: '#' },
    footCta: {
      head: 'Start your fund',
      desc: 'Give the people around you a clear way to show up for your family.',
      label: 'Start a Fund', href: '#'
    }
  },
  {
    key: 'meals',
    name: 'Meals',
    icon: 'fa-utensils',
    base: '#0d5da8', dark: '#0a4884', tint: '#e8f1fa',
    desc: 'A full calendar of dinners, coordinated for you.',
    home: 'https://supportnow.org/meals',
    shareUrl: 'https://supportnow.org/meals',
    links: [
      { label: 'How it Works',   href: '#' },
      { label: 'For Organizers', href: '#' },
      { label: 'Questions',      href: '#' }
    ],
    cta: { label: 'Start a Meal Train', href: '#' },
    footCta: {
      head: 'Fill your calendar',
      desc: 'Set it up once and let people claim the nights that work for them.',
      label: 'Start a Meal Train', href: '#'
    }
  },
  {
    key: 'todos',
    name: 'Todos',
    icon: 'fa-list-check',
    base: '#f97316', dark: '#c2410c', tint: '#fff7ed',
    desc: 'Say what you need once, then let people claim it.',
    home: 'https://supportnow.org/todos',
    shareUrl: 'https://supportnow.org/todos',
    links: [
      { label: 'How it Works', href: '#' },
      { label: 'For Helpers',  href: '#' },
      { label: 'Questions',    href: '#' }
    ],
    cta: { label: 'Create a List', href: '#' },
    footCta: {
      head: 'Ask for what you need',
      desc: 'Write the list once. People claim what they can, with no back and forth.',
      label: 'Create a List', href: '#'
    }
  },
  {
    key: 'updates',
    name: 'Updates',
    icon: 'fa-tower-broadcast',
    base: '#8b5cf6', dark: '#7c3aed', tint: '#f5f3ff',
    desc: 'Tell everyone once, on your own terms.',
    home: 'https://supportnow.org/updates',
    shareUrl: 'https://supportnow.org/updates',
    links: [
      { label: 'How it Works', href: '#' },
      { label: 'Who Can See',  href: '#' },
      { label: 'Questions',    href: '#' }
    ],
    cta: { label: 'Post an Update', href: '#' },
    footCta: {
      head: 'Share your first update',
      desc: 'Tell everyone at once, and choose exactly who gets to see it.',
      label: 'Post an Update', href: '#'
    }
  }
];

/* Shown in the lower footer, the same for every app.
   Taken off supportnow.org's own footer. YouTube is deliberately absent:
   the site links youtube.com with no channel, and @supportnow belongs to
   someone else. Add it back once the real channel is known. */
window.PF_SOCIAL = [
  { label: 'Instagram', icon: 'fa-instagram',  href: 'https://www.instagram.com/supportnow_org/' },
  { label: 'Facebook',  icon: 'fa-facebook-f', href: 'https://www.facebook.com/supportnoworg' },
  { label: 'X',         icon: 'fa-x-twitter',  href: 'https://twitter.com/supportnoworg' }
];
