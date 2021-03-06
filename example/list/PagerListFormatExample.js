'use strict';


var PagerListFormat = require('list/PagerListFormat'),
    Xhr = require('util/Xhr');


Xhr.ajax({
  url: '/feeds/2.5_week.json',
  success: function (data) {
    var list,
        pagerListFormat;

    pagerListFormat = PagerListFormat();

    list = document.createElement('ul');
    list.classList.add('no-style');
    (data.features || []).forEach(function (feature) {
      var item;

      item = list.appendChild(document.createElement('li'));
      item.appendChild(pagerListFormat.format(feature));
    });

    document.querySelector('#pager-list-format-example').appendChild(list);
  },
  error: function () {
    document.querySelector('#pager-list-format-example').innerHTML =
        '<p class="alert error">Failed to create PAGER list format.</p>';
  }
});
