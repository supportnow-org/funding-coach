/* ──────────────────────────────────────────────
   SupportNow · FundingCoach — demo data
   Classic script (no modules) so the page opens straight from file://.
   Exposes: FC.NEEDS, FC.COACHES

   Record shape follows the advocacy marketplace's data.js, because the two
   axes families are matched on are the same ones it already models:
   `specialties` (keyed to NEEDS) and `lived` (one line of lived experience).
   What changes is the vocabulary. Here a specialty is a thing that costs
   money, not a system to navigate.
   ────────────────────────────────────────────── */

window.FC = (function () {
  'use strict';

  /* What families come to us needing to fund. Drives the coach chips. */
  var NEEDS = [
    { key: 'equipment', label: 'Medical equipment & devices', short: 'Equipment',     icon: 'fa-wheelchair' },
    { key: 'vehicle',   label: 'Accessible vehicles',         short: 'Vehicles',      icon: 'fa-van-shuttle' },
    { key: 'home',      label: 'Home modifications',          short: 'Home mods',     icon: 'fa-house-medical' },
    { key: 'therapy',   label: 'Therapies & treatment',       short: 'Therapies',     icon: 'fa-hand-holding-medical' },
    { key: 'travel',    label: 'Treatment travel & lodging',  short: 'Travel',        icon: 'fa-plane-departure' },
    { key: 'daily',     label: 'Daily care & respite',        short: 'Daily care',    icon: 'fa-heart-pulse' }
  ];

  /* Abby is the founding coach and the only real person here. Everyone below her is
     invented, and every `campaigns` count is a placeholder, Abby's included. */
  var COACHES = [
    {
      id: 'abby', name: 'Abby', initials: 'A', tone: 'a',
      photo: null,
      founding: true,
      title: 'Founding Coach',
      base: 'Nationwide, remote',
      campaigns: 138,
      specialties: ['equipment', 'vehicle', 'therapy', 'travel'],
      lived: 'Started FundingCoach after learning the funding system the hard way, on behalf of her own family.'
    },
    {
      id: 'renee-alvarez', name: 'Renee Alvarez', initials: 'RA', tone: 'b',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      title: 'Funding Coach',
      base: 'San Antonio, TX',
      campaigns: 47,
      specialties: ['vehicle', 'home'],
      lived: 'Raised $54,000 for her son\'s accessible van, then did it again for the ramp and the bathroom.'
    },
    {
      id: 'daniel-okoro', name: 'Daniel Okoro', initials: 'DO', tone: 'c',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      title: 'Funding Coach',
      base: 'Atlanta, GA',
      campaigns: 62,
      specialties: ['equipment', 'therapy'],
      lived: 'Funded four years of intensive therapy for his daughter on a single income.'
    },
    {
      id: 'kim-tran', name: 'Kim Tran', initials: 'KT', tone: 'd',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      title: 'Funding Coach',
      base: 'Portland, OR',
      campaigns: 34,
      specialties: ['travel', 'daily'],
      lived: 'Flew to a specialist eleven states away, nine times, before finding the funds that covered it.'
    }
  ];

  return { NEEDS: NEEDS, COACHES: COACHES };
})();
