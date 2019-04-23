/**
 * @description 定义url
 * @type {{httpUrl: string}}
 */
var baseSever = {
    httpUrl : "http://10.0.11.49:8090/ser",
};
//定义各类型url
var servers_url = {
    ser_login:{"url":"/login" ,"type":"post"},
    //今日之星
    todayTeacher :{"url":"" ,"type":"post"},
    TodayCompany :{"url":"" ,"type":"post"},

    //首页推荐课程
    Common_RecommendCourse :{"url":"/common/video/pageVideoList.json" ,"type":"get"},


    //学生管理
    student_page:{"url":"/backend/user/pageStudents" ,"type":"get"},
    student_detail:{"url":"/backend/user/userDetail" ,"type":"get"},
    student_save:{"url":"/backend/user/saveStudent" ,"type":"post"},
}