/* ──────────────────────────────────────────────
   SupportNow · FundingCoach — page behavior.
   One job: render the coaching network from coaches.js.
   ────────────────────────────────────────────── */

(function () {
  'use strict';

  var NEEDS = (window.FC && FC.NEEDS) || [];
  var COACHES = (window.FC && FC.COACHES) || [];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function need(key) {
    for (var i = 0; i < NEEDS.length; i++) if (NEEDS[i].key === key) return NEEDS[i];
    return null;
  }

  /* A photo when we have one, initials when we do not. */
  function avatar(c) {
    if (c.photo) {
      return '<img class="coach-av" src="' + esc(c.photo) + '" alt="' + esc(c.name) + '">';
    }
    return '<div class="coach-av tone-' + esc(c.tone || 'a') + '">' + esc(c.initials) + '</div>';
  }

  function chips(c) {
    return (c.specialties || []).map(function (key) {
      var n = need(key);
      if (!n) return '';
      return '<span class="chip"><i class="fa-solid ' + esc(n.icon) + '"></i>' + esc(n.short) + '</span>';
    }).join('');
  }

  /* The stat header answers the only question a family opens with: has this
     person done it before. Everything under it is why they could do it for you. */
  function card(c) {
    return '' +
      '<article class="coach' + (c.founding ? ' is-founding' : '') + '">' +
        '<div class="coach-head">' +
          '<b>' + esc(c.campaigns) + '</b>' +
          '<span>campaigns launched</span>' +
        '</div>' +
        '<div class="coach-body">' +
          '<div class="coach-top">' +
            avatar(c) +
            '<div>' +
              '<div class="coach-name">' + esc(c.name) + '</div>' +
              '<div class="coach-title">' + esc(c.title) + '</div>' +
              '<div class="coach-base">' + esc(c.base) + '</div>' +
            '</div>' +
          '</div>' +
          '<p class="coach-lived">' + esc(c.lived) + '</p>' +
          '<div class="coach-chips">' + chips(c) + '</div>' +
        '</div>' +
      '</article>';
  }

  var grid = document.getElementById('coachGrid');
  if (grid) grid.innerHTML = COACHES.map(card).join('');
})();
