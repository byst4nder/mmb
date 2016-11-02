/*
 * @Author: zhengwei
 * @Date:   2016-10-25 11:03:24
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 16:59:25
 */

'use strict';
$(function() {
   	setSiteNav($('.site-nav'))

    function setSiteNav(dom, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getsitenav",
            success: function(data) {
                var html = template('siteNav', data);
                dom.html(html);
            }
        })
    }
})
