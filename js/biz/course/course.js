(function () {
	'use strict';
    // 今日名师风采
	var loadTodayTeacher = function(){
        server.ajax(servers_url.todayTeacher,function (data) {
			
        },function (data) {
            layer.alert("未查询到今日之星！",{title:'名师风采信息提示'});
        })
	};
    // 展示名校机构风采
    var loadTodayCompany = function(){
        server.ajax(servers_url.TodayCompany,function (data) {

        },function (data) {
            layer.alert("未查询到名校机构风采！",{title:'名校机构风采信息提示'});
        })
    };
    // 各科推荐课程
    var loadRecommendCourse = function(){
        server.ajax(servers_url.RecommendCourse,function (data) {

        },function (data) {
            layer.alert("未查询到推荐课程！",{title:'推荐课程信息提示'});
        })
    };
	//加载页面时统一执行
	$(function(){
        loadTodayTeacher();
	});
}());