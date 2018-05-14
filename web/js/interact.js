window.onload = function() {
    function getBroswer() {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1]:
            (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
            (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

        if (Sys.edge) return { broswer: "Edge", version: Sys.edge };
        if (Sys.ie) return { broswer: "IE", version: Sys.ie };
        if (Sys.firefox) return { broswer: "Firefox", version: Sys.firefox };
        if (Sys.chrome) return { broswer: "Chrome", version: Sys.chrome };
        if (Sys.opera) return { broswer: "Opera", version: Sys.opera };
        if (Sys.safari) return { broswer: "Safari", version: Sys.safari };

        return { broswer: "", version: "0" };
    }
    var web = getBroswer();
    // 低版本的Safari，响应提示页面
    if (web.broswer.toLowerCase() == 'safari' && parseInt(web.version) < 10) {
        location.assign('../friendly-tip.html')
    }

    // 低版本的IE，响应提示页面
    if (web.broswer.toLowerCase() == 'ie' && parseInt(web.version) < 10) {
        location.assign('../friendly-tip.html')
    }
};

/*"关于我们"页面的交互*/

// 点击导航切换头部背景和底部文本

$(document).ready(function() {
    // $('.about_us_nav li').click(function() {
    //     $('.about_us_nav li').removeClass('nav_active');
    //     $(this).addClass('nav_active');
    //     var currentIndex = $(this).index();

    //     $('.header_nav section').removeClass('active');
    //     $('.header_nav section').eq(currentIndex).addClass('active');

    //     $('.text_nav section').removeClass('active');
    //     $('.text_nav section').eq(currentIndex).addClass('active');
    // });


    // 加入我们的职位申请
    $('.join_us_list li').click(function() {


        $('.job_inviting').show();
        $('html').addClass('html_unscroll');

        var currentIndex = $(this).index();
        $('.job_inviting li').removeClass('active');
        $('.job_inviting li').eq(currentIndex).addClass('active');
    })

    $('.close').click(function() {
        $('.job_inviting').hide();
        $('html').removeClass('html_unscroll');

    })


    /*
        头部导航，鼠标移入呼出对应子项
    */

    // 解析URL——》获取具体子页面——》让对应导航标识

    /*    
     *    解析URL，获取当前页面标识
     *    如：file:///C:/Users/Administrator/Desktop/POSPI-web/html/source.html——》source.html
     */
    function getURLIdentification(url) {
        var lastSlashIndex = url.lastIndexOf('/');
        return url.slice(lastSlashIndex + 1);
    }

    var urlIdentification = getURLIdentification(location.href);

    $('.nav_item').each(function() {
        if ($(this).find('.nav_item_list').length !== 0) {
            $('.nav_item_list').find('a').each(function() {
                if ($(this).attr('href') === urlIdentification) {
                    // 先标识主导航
                    $(this).parents('.nav_item').find('span').addClass('active');

                    // 再标识对应子导航
                    var $curImg = $(this).children('img');
                    var src = $curImg.attr('src')
                    var dataSrc = $curImg.data('src');
                    $curImg.attr('src', dataSrc).data('src', src);

                    $(this).addClass('checked')

                    // 给个标识，表明选中
                    $curImg.attr('isCheck', 'true');
                }
            })
        } else {
            if ($(this).find('a').attr('href') === urlIdentification) {
                $(this).find('span').addClass('active');
            }
        }
    })

    // 进入页面，获取当前页面导航标识index
    var curNavItemIndex = 0;
    $('.nav_item').each(function() {
        if ($(this).find('span').hasClass('active')) {
            curNavItemIndex = $(this).index();
        }
    })

    $('.nav_item').mouseover(function() {
        $('.nav_item').find('.nav_item_title').removeClass('active');
        $(this).find('.nav_item_title').addClass('active');
        $(this).children('ul').show();
    });

    $('.nav_item').mouseout(function() {
        $(this).find('.nav_item_title').removeClass('active');
        $(this).children('ul').hide();

        // 鼠标移开，还原初始标识
        $('.nav_item').eq(curNavItemIndex).find('span').addClass('active');
    });

    $('.nav_item_list').mouseout(function() {
        $(this).hide();
    });

    $('.nav_item_list li').on('mouseenter mouseleave', function() {
        if ($(this).find('img')) {
            if ($(this).find('img').attr('isCheck') !== 'true') {
                var src = $(this).find('img').attr('src')
                var dataSrc = $(this).find('img').data('src');
                $(this).find('img').attr('src', dataSrc).data('src', src);
            }
        }
    })

    $('.foot_link_logo img').on('mouseenter mouseleave', function() {
        var src = $(this).attr('src')
        var dataSrc = $(this).data('src');
        $(this).attr('src', dataSrc).data('src', src);
    })
})