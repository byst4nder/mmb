/*
 * @Author: zhengwei
 * @Date:   2016-10-19 17:07:19
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 18:52:10
 */

'use strict';
$(function() {

    // var  = $('#menu');
    setCategoryTitle($('#category > .row'));
    function setCategoryTitle(dom, callback) {
        $.ajax({
            "url": "http://mmb.ittun.com/api/getcategorytitle",
            success: function(data) {
                data = data.result;
                var titleHtml = '<ul class="category-title">';
                for (var i = 0; i < data.length; i++) {
                    titleHtml += '<li>';
                    titleHtml += '<a href="javascript:void(0)" data-title-id="' + data[i].titleId + '" style="background-image:url(http://www.zuyushop.com/wap/images/arrow1.gif);">';
                    titleHtml += data[i].title;
                    titleHtml += '</a>';
                    titleHtml += '</li>';
                }
                titleHtml += "</ul>";
                $(dom).html(titleHtml);
                setCategory($('#category > .row > .category-title > li > a'));
            }
        })
    }

    function setCategory(dom, callback) {
        $(dom).one('click', function() {
            var that = $(this);
            $(this).parent().find('ul').toggleClass('hide');
            $.ajax({
                    url: "http://mmb.ittun.com/api/getcategory",
                    data: { "titleid": $(this).data('titleId') },
                    success: function(data) {
                        data = data.result;
                        var categoryHtml = '<ul class="category-content clearfix">';
                        for (var i = 0; i < data.length; i++) {
                            categoryHtml += '<li>';
                            categoryHtml += '<a href="productlist.html?categoryid='+data[i].categoryId+'&category='+data[i].category+'&pageid=1" data-category-id="' + data[i].categoryId + '">';
                            categoryHtml += data[i].category;
                            categoryHtml += '</a>';
                            categoryHtml += '</li>';
                        }
                        categoryHtml += "</ul>";
                        that.parent().append(categoryHtml);
                    }
                })
        })
        $(dom).on('click', function() {
            $(this).parent().find('ul').toggleClass('hide');
        })
    }
});
