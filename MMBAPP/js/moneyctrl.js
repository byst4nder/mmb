/*
 * @Author: zhengwei
 * @Date:   2016-10-25 17:06:01
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 16:59:02
 */

'use strict';
$(function() {
    setMoneyCtrlProduct($('.money-ctrl'), $.getUrlParam('pageid') || 1);

    function setMoneyCtrlProduct(dom, pageid, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getmoneyctrl",
            data:{'pageid':pageid-1},
            success: function(data) {
                data.pageCount = Math.floor(data.totalCount / data.pagesize);
                data.pageid = pageid || 1;
                data.page = [];
                for (var i = 0; i < data.pageCount; i++) {
                    data.page.push({ 'pageid': i + 1, 'pageCount': data.pageCount });
                }
                var html = template('moneyCtrl', data);
                dom.html(html);
                $('#selectPage').on('change', function(e) {
                    window.location.href = "moneyctrl.html?pageid=" + $(this).val();
                    $(this).attr('selected',"selected");
                })
            }
        });
    }

})
