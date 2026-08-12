/* ──────────────────────────────────────────────
   SupportNow · core product featuresets.

   These four are part of SupportNow itself, not separate platform apps,
   so the switcher leads with them and each keeps its own colour.

   Colours are the SupportNow 2.0 design system values from
   supportnow-2.0/organizer/css/organizer.css (dark / base / tint).
   Note: Updates is bound to the `--comms` token there, not `--updates`.
   The shipped Rails app still carries an older generation of these
   (giving #01a95d, meals #0030b9, todos #e85b1c, updates #963862).
   ────────────────────────────────────────────── */

window.PF_FEATURES = [
  {
    key: 'giving',
    name: 'Giving',
    icon: 'fa-hand-holding-heart',
    desc: 'Fundraising w/o all the fees.',
    home: 'https://supportnow.org/giving',
    base: '#059669', dark: '#047857', tint: '#ecfdf5'
  },
  {
    key: 'meals',
    name: 'Meals',
    icon: 'fa-utensils',
    desc: 'Organize mealtrains and gift cards.',
    home: 'https://supportnow.org/meals',
    base: '#0d5da8', dark: '#0a4884', tint: '#e8f1fa'
  },
  {
    key: 'todos',
    name: 'Todos',
    icon: 'fa-list-check',
    desc: 'Let supporters lend a hand.',
    home: 'https://supportnow.org/todos',
    base: '#f97316', dark: '#c2410c', tint: '#fff7ed'
  },
  {
    key: 'updates',
    name: 'Updates',
    icon: 'fa-tower-broadcast',
    desc: 'Tell everyone once, on your own terms.',
    home: 'https://supportnow.org/updates',
    base: '#8b5cf6', dark: '#7c3aed', tint: '#f5f3ff'
  }
];
