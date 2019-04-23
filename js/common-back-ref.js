//写入公共头文件
document.write(
    '    <meta charset="UTF-8" />' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>' +
    '    <meta name="description" content=""></meta>' +
    '    <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />' +
    '    <link rel="icon" href="/images/favicons/favicon.ico" />' +
    '    <meta name="robots" content="noindex, nofollow" />' +
    '    <title>名师汇</title>' +
    '    <meta name="keywords" content="在线管理系统"></meta>'
)

//加载css
document.write('<link rel="stylesheet"  href="http://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,900%7CRoboto+Slab:300,400%7CRoboto+Mono:400" ></link>')
document.write('<link rel="stylesheet" href="/css/bootstrap.css"></link>')
document.write('<link rel="stylesheet" href="/css/owl.carousel.min.css"></link>')
document.write('<link rel="stylesheet" href="/js/plugins/slick/slick-theme.min.css"></link>')
document.write('<link rel="stylesheet" href="/js/plugins/slick/slick.min.css"></link>')
document.write('<link rel="stylesheet" href="/css/ionicons.css"></link>')

//加载js
document.write('<script src="/js/jquery.min.js"></script>')
document.write('<script src="/js/bootstrap.min.js"></script>')
document.write('<script src="/js/plugins/slick/slick.min.js"></script>')
document.write('<script src="/js/plugins/chartjs/Chart.min.js"></script>')
document.write('<script src="/js/plugins/flot/jquery.flot.min.js"></script>')
document.write('<script src="/js/plugins/flot/jquery.flot.pie.min.js"></script>')
document.write('<script src="/js/plugins/flot/jquery.flot.stack.min.js"></script>')
document.write('<script src="/js/plugins/flot/jquery.flot.resize.min.js"></script>')
document.write('<script src="/js/jquery.slimscroll.min.js"></script>')
document.write('<script src="/js/jquery.scrollLock.min.js"></script>')
document.write('<script src="/js/jquery.placeholder.min.js"></script>')
//加载导航栏/注脚
document.write('<script type="text/javascript">$(function () { $(\'.app-layout-drawer_load\').load(\'/pages/component/backend/nav.html\');$(".html-foot").load("/pages/component/backend/foot.html"); ' +
    '$(\'body\').append(\'\t<div class="gototop js-top"><a href="javascript:window.scrollTo( 0, 0 );" class="js-gotop"><i class="icon-arrow-up"></i></a></div>\')' +
    '   });</script>')
