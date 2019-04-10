
var server = {
    ajax: function (urlObj, formDom, sFun, eFun) {
        var paraData;
        if (formDom instanceof jQuery) {
            //如果为POST方法
            if (urlObj.type.indexOf("post") != -1) {
                var params = formDom.serializeArray();
                var values = {};
                for (var item in params) {
                    values[params[item].name] = params[item].value;
                }
                paraData = JSON.stringify(values);
                paraData = paraData.replace(/\r' /g, "' ");
            } else {
                if (formDom != null) paraData = formDom.serialize();
            }
        } else {
            paraData = formDom;
        }
        $.ajax({
            url: urlObj.url.indexOf("http://") > 0 || urlObj.url.indexOf("https://") > 0 ? urlObj.url:url.httpUrl + urlObj.url,
            type: urlObj.type,
            dataType: "json",
            async: false,  //改为同步请求，防止用户快速点击菜单导致报出的系统异常
            contentType: "application/json;charset=utf-8",
            data: paraData,
            success: function (data) {
                One.maskHide();
                if (!data.success) {
                    if (data.code == '-2') {
                        alert(data.message);
                        var curPath = window.document.location.href;
                        var pathName = window.document.location.pathname;
                        var pos = curPath.indexOf(pathName);
                        top.location.href = curPath.substring(0, pos);
                        return;
                    }

                }
                sFun(data);
            },
            error: function (data) {
                server.maskHide();
                if (data.message != null && data.message != undefined && data.message != "") {
                    eFun(data);
                    return;
                }
                alert("系统出错");
                // top.window.location.href = httpUrl + "/login.html";
            },
            beforeSend: function (request) {
                server.maskShow();
                request.setRequestHeader("Authorization", localStorage.getItem('Authorization'));
            }
        });
    },
    maskShow: function () {
        $(".mask").fadeIn(300);
    },
    maskHide: function () {
        $(".mask").delay(800).fadeOut(300);
    }, maskHideImmediately: function () {
        $(".mask").hide();
    },
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return '';
    },
    /**
     *   上传文件
     formData 序列化form对象
     urlObj
     **/
    uploadFile: function (formData, urlObj, sFun, fFun) {
        var xhr = new XMLHttpRequest();
        xhr.open(urlObj.type, urlObj.url, true);
        xhr.setRequestHeader("Authorization", localStorage.getItem('Authorization'));
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText) {
                    var data = JSON.parse(this.responseText);
                    if (data.success) {
                        sFun(data);
                    } else {
                        fFun(data);
                    }
                }
            }
        }
    },
    /**
     *
     * @param $table  table对象
     * @param urlObj  请求地址对象
     * @param columns 列表列
     * @param queryParams 请求参数
     * @param isPaging 是否分页 true:分页，false:不分页
     * @param sFun 成功回调函数
     * @param fFun 失败回调函数
     */
    table: function ($table, urlObj, columns, queryParams, isPaging, sFun, fFun) {
        $table.bootstrapTable('destroy');
        $table.bootstrapTable({
            method: urlObj.type,
            striped: true,
            cache: false,
            pagination: isPaging, //是否显示分页
            sortable: true,
            sortOrder: 'desc',
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 25, 50, 100],
            url: urlObj.url,
            dataType: "json",
            async: false,  //改为同步请求，防止用户快速点击菜单导致报出的系统异常
            contentType: "application/json;charset=utf-8",
            queryParamsType: "limit",
            queryParams: queryParams,
            ajaxOptions: {headers: {"Authorization": localStorage.getItem('Authorization')}}, //设置头部token
            sidePagination: "server",
            //是否显示搜索
            search: false,
            paginationPreText: "上一页",
            paginationNextText: "下一页",
            paginationFirstText: "第一页",
            paginationLastText: "最后一页",
            columns: columns,
            onLoadSuccess: function (data) { //加载成功时执行

            },
            responseHandler: function (res) {
                //在ajax请求成功后，发放数据之前可以对返回的数据进行处理，返回什么部分的数据，比如我的就需要进行整改的！
                if (res.message != null && res.message != undefined && res.message != "") {
                    return sFun(res);
                }
                return [];
            }, onLoadError: function (res) { //加载失败时执行
                if (res.message != null && res.message != undefined && res.message != "") {
                    fFun(res);
                    return;
                }
                alert("系统出错");
                top.window.location.href = httpUrl + "/login.html";
            }
        });
    },
    //请求链接地址、请求参数、标题、
    downloadFile: function (urlObj, formData, sFun, fFun, title) {
        var xhr = new XMLHttpRequest();
        xhr.open(urlObj.type, urlObj.url, true);    // 也可以使用POST方式，根据接口
        xhr.setRequestHeader("Authorization", localStorage.getItem('Authorization'));
        xhr.send(formData);
        xhr.responseType = "blob";
        xhr.onload = function () {
            // 请求完成
            if (this.status === 200) {
                var blob = this.response;
                var reader = new FileReader();
                reader.readAsDataURL(blob);  // 转换为base64，可以直接放入a表情href
                reader.onload = function (e) {
                    var a = document.createElement('a');
                    if (title == null || title == "" || title == undefined)
                        title = 'data.xls';
                    a.download = title;
                    a.href = e.target.result;
                    $("body").append(a);  // 修复firefox中无法触发click
                    a.click();
                    $(a).remove();
                }
            }
        };
    }
};