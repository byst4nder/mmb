/*
 * @Author: zhengwei
 * @Date:   2016-10-19 17:07:19
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 22:51:21
 */

'use strict';
$(function() {
    setMenu($('#menu > .row'));

    function setMenu(dom, callback) {
        $.ajax({
            "url": "http://mmb.ittun.com/api/getindexmenu",
            dataType: 'jsonp',
            jsonp: "callback",
            success: function(data) {
                data = data.result;
                var menuHtml = "";
                for (var i = 0; i < data.length; i++) {
                    menuHtml += '<div class="menu-item">';
                    menuHtml += '<a href="' + data[i].titlehref + '">';
                    menuHtml += data[i].img;
                    menuHtml += '<p>' + data[i].name + '</p>';
                    menuHtml += '</a>';
                    menuHtml += '</div>';
                }
                $(dom).html(menuHtml);
                $('#menu > .row > .menu-item:nth-last-child(-n+4)').addClass('hide');
                menuMore($('#menu > .row > .menu-item:nth-child(8) > a'));
            }
        })
    }

    function menuMore(dom, callback) {
        $(dom).on('click', function() {
            $('#menu > .row > .menu-item:nth-last-child(-n+4)').toggleClass('hide');
        })
    }
    setMoneyCtrlProduct($('.product-list'));

    function setMoneyCtrlProduct(dom, pageid, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getmoneyctrl",
            dataType: 'jsonp',
            jsonp: "callback",
            success: function(data) {
                var html = template('moneyCtrl', data);
                dom.html(html);
            }
        });
    }
});
