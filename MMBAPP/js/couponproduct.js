/*
 * @Author: zhengwei
 * @Date:   2016-10-25 21:12:38
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 16:58:34
 */

'use strict';
$(function() {
    setCouponList($('.coupon-list'), $.getUrlParam('couponid'))

    function setCouponList(dom, couponid, callback) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getcouponproduct',
            data: { 'couponid': couponid },
            success: function(data) {
                var html = template('couponList', data);
                dom.html(html);
            }
        })
    }
});
