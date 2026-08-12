/* ──────────────────────────────────────────────
   SupportNow · Platform Nav Shell — live app build.

   The shell's own shell.js also carries a demo swap that repoints the page at
   any app in the registry. A real app hardcodes its nav and footer in markup,
   so this build keeps only the four pieces the README calls load bearing:
   stick(), renderSwitcher(), renderSocial(), bindCopy().

   Switcher v2: the core product's featuresets lead, each in its own colour,
   then the platform apps that are their own product underneath.
   ────────────────────────────────────────────── */

(function () {
  'use strict';

  var APPS = window.PF_APPS || [];
  var FEATURES = window.PF_FEATURES || [];
  var FEATURE_KEYS = FEATURES.map(function (f) { return f.key; });
  var CURRENT = 'fundingcoach';           // marks "You are here" in the switcher

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function el(id) { return document.getElementById(id); }
  function each(sel, fn) { [].forEach.call(document.querySelectorAll(sel), fn); }

  /* ── Pill gains depth once the page moves under it ── */
  function stick() {
    var nav = el('pfNav');
    if (!nav) return;
    function sync() { nav.classList.toggle('is-stuck', window.scrollY > 8); }
    window.addEventListener('scroll', sync, { passive: true });
    sync();
  }

  /* ── App switcher: fills every copy, so nav and footer stay in step ── */
  function renderSwitcher() {
    /* The core product's featuresets, each carrying its own colour */
    each('.v2-features', function (n) {
      n.innerHTML = FEATURES.map(function (f) {
        var here = f.key === CURRENT;
        return '' +
          '<a href="' + esc(f.home) + '" data-key="' + esc(f.key) +
             '" class="v2-feature' + (here ? ' is-current' : '') + '"' +
             ' style="--f-base:' + esc(f.base) + ';--f-tint:' + esc(f.tint) + '">' +
            '<span class="v2-feature-ico"><i class="fa-solid ' + esc(f.icon) + '"></i></span>' +
            '<span>' +
              '<span class="v2-feature-name">' + esc(f.name) + '</span>' +
              '<p class="v2-feature-desc">' + esc(f.desc) + '</p>' +
            '</span>' +
          '</a>';
      }).join('');
    });

    /* Everything that is its own product */
    each('.v2-apps', function (n) {
      n.innerHTML = APPS.filter(function (a) {
        return FEATURE_KEYS.indexOf(a.key) === -1;
      }).map(function (a) {
        var here = a.key === CURRENT;
        return '' +
          '<a href="' + esc(a.home) + '" data-key="' + esc(a.key) +
             '" class="v2-app' + (here ? ' is-current' : '') + '">' +
            '<i class="fa-solid ' + esc(a.icon) + '"></i>' +
            '<span class="v2-app-name">' + esc(a.name) + '</span>' +
            (here ? '<span class="v2-here">You are here</span>' : '') +
          '</a>';
      }).join('');
    });

    /* The offcanvas carries a plain list, since there is no room for the panel */
    var oc = el('pfOcApps');
    if (oc) {
      oc.innerHTML = APPS.filter(function (a) { return a.key !== CURRENT; })
        .map(function (a) {
          return '<a href="' + esc(a.home) + '">' +
                 '<i class="fa-solid ' + esc(a.icon) + '"></i>' + esc(a.name) + '</a>';
        }).join('');
    }
  }

  function renderSocial() {
    var wrap = el('pfSocials');
    if (!wrap) return;
    wrap.innerHTML = (window.PF_SOCIAL || []).map(function (s) {
      return '<a href="' + esc(s.href) + '" aria-label="' + esc(s.label) + '">' +
             '<i class="fa-brands ' + esc(s.icon) + '"></i></a>';
    }).join('');
  }

  function bindCopy() {
    var btn = el('pfShareCopy'), field = el('pfShareUrl');
    if (!btn || !field) return;
    btn.addEventListener('click', function () {
      field.select();
      field.setSelectionRange(0, 99999); /* iOS needs the explicit range */
      var done = function () { btn.textContent = 'Copied'; btn.classList.add('copied'); };
      /* execCommand is the fallback that still works from file:// */
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(field.value).then(done, function () {
          try { document.execCommand('copy'); done(); } catch (e) {}
        });
      } else {
        try { document.execCommand('copy'); done(); } catch (e) {}
      }
    });
  }

  /* One page, nav and footer hardcoded in the markup, so this runs on load. */
  stick();
  renderSwitcher();
  renderSocial();
  bindCopy();
})();
