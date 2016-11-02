/*
 * @Author: zhengwei
 * @Date:   2016-10-24 10:19:37
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-28 22:18:44
 */

'use strict';
$(function() {
    setBrandList($('.brand-list'), $.getUrlParam("brandtitleid"))

    function setBrandList(dom, brandtitleid, callback) {
        $.ajax({
            url: " http://localhost:8080/fangyuan/rest/api/member/doComplain ",
            data: { "brandtitleid": brandtitleid },
            "success": function(data) {
                var html = template('brandList', data);
                dom.html(html);
                setBrandProduct($('.product-list'), data.result[0].brandTitleId);

            }
        })
    }

    function setBrandProduct(dom, brandtitleid, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getbrandproductlist",
            data: { "brandtitleid": brandtitleid, "pagesize": 4 },
            success: function(data) {
                var html = template('brandProduct', data);
                dom.html(html);
                setProductCom($('.product-com'), data.result);
            }
        })
    }

    function setProductCom(dom, productlist, callback) {
        var productid = [];
        for (var i = 0; i < productlist.length; i++) {
            productid.push(productlist[i].productId);
        }
        $.ajax({
            url: "http://mmb.ittun.com/api/getproduct",
            data: { "productid": productid[0] },
            success: function(result) {
                result = result.result;
                for (var j = 0; j < result.length; j++) {
                    $.ajax({
                        url: "http://mmb.ittun.com/api/getproductcom",
                        data: { "productid": productid[0] },
                        success: function(data) {
                            data = data.result;
                            var productCom = []
                            for (var i = 0; i < data.length; i++) {
                                productCom.push({
                                    "productName": result[0].productName,
                                    "productImg": result[0].productImg,
                                    "comContent": data[i].comContent,
                                    "comTime": data[i].comTime,
                                    "comFrom": data[i].comFrom,
                                    "comName": data[i].comName
                                })
                            }
                            data = { result: productCom };
                            var html = template('ProductCom', data);
                            dom.html(html);
                        }
                    })
                }
            }
        })
    }
    var data = { "message": "登录成功", "data": { "id": "402880fa57792d870157792e24630001", "invitationCode": "46621652", "status": 1, "isMember": 1 }, "status": 200 } { "message": "经核实您涉及虚假房源，目前被封号 将会在2016-10-15 14:02:58解封", "data": "2016-10-15 14:02:58", "status": 303 }
    var gaimi = document.querySelector('a.xiugaimima');
    gaimi.href = "gaimi.html?userid=" + data.data.id;
    gaimi.html ? userid = wefsdfsdfsd24234;
    var oldpas = document.querySelector('old').value;
    var newpass = document.querySelector('new').value;
    $.ajax({
        url: 'http://localhost:8080/fangyuan/rest/api/member/doUpdatePassword',
        data: {
            userid: $.getUrlParam('userid'),
            oldPassword: oldpas,
            newPassword: newpass
        },
        success: function(data) {
            alert(data.message);
        }
    });
});
(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
