ReactDOM.render(
    <div>
        <div className="header_content">
            <a href="home-page.html"><img className="logo" src="../images/img_Navigation_LOGO@2x.png" /></a>
            <ul className="header_nav">
                <li className="nav_item"><a href="home-page.html"><span>首页</span></a></li>
                <li className="nav_item"><a href="javascript:void(0)"><span>产品与服务</span></a>
                    <ul className="nav_item_list hide" >
                        <li><a href="all-in-one.html"><img src="../images/icon_Navigation_All-in-One@2x.png" data-src="../images/icon_Navigation_All-in-One_Selected@2x.png" /></a></li>
                        <li><a href="solution.html"><img src="../images/icon_Navigation_Solution@2x.png" data-src="../images/icon_Navigation_Solution_Selected@2x.png" /></a></li>
                        <li><a href="payment.html"><img src="../images/icon_Navigation_payment@2x.png" data-src="../images/icon_Navigation_payment_Selected@2x.png" /></a></li>
                        <li><a href="access.html"><img src="../images/icon_Navigation_Access@2x.png" data-src="../images/icon_Navigation_Access_Selected@2x.png" /></a></li>
                        <li><a href="service.html"><img src="../images/icon_Navigation_service@2x.png" data-src="../images/icon_Navigation_service_Selected@2x.png" /></a></li>
                    </ul>
                </li>
                <li className="nav_item"><a href="customer.html"><span>典型客户</span></a>
                </li>
                <li className="nav_item"><a href="source.html"><span>资源</span></a>
                </li>
                <li className="nav_item"><a href="javascript:void(0)">
                    <span>硬件</span></a>
                    <ul className="nav_item_list hide" >
                        <li><a href="mobile-pos.html"><img src="../images/icon_Navigation_mpos@2x.png" data-src="../images/icon_Navigation_mpos_Selected@2x.png" alt="" /></a></li>
                        <li><a href="desktop-check.html"><img src="../images/icon_Navigation_Desktop@2x.png" data-src="../images/icon_Navigation_Desktop_Selected@2x.png" alt="" /></a></li>
                        <li><a href="printer.html"><img src="../images/icon_Navigation_Printer@2x.png" data-src="../images/icon_Navigation_Printer_Selected@2x.png" alt="" /></a></li>
                    </ul>
                </li>
                <li className="nav_item">
                    <a href="javascript:void(0)">
                        <span>关于</span>
                    </a>
                    <ul className="nav_item_list hide" >
                        <li><a href="introduce.html"><img src="../images/icon_Navigation_introduce@2x.png" data-src="../images/icon_Navigation_introduce_Selected@2x.png" /></a></li>
                        <li><a href="parter.html"><img src="../images/icon_Navigation_Partner@2x.png" data-src="../images/icon_Navigation_Partner_Selected@2x.png" /></a></li>
                        <li><a href="news.html"><img src="../images/icon_Navigation_Journalism@2x.png" data-src="../images/icon_Navigation_Journalism_Selected@2x.png" /></a></li>
                        <li><a href="join-us.html"><img src="../images/icon_Navigation_recruit@2x.png" data-src="../images/icon_Navigation_recruit_Selected@2x.png" /></a></li>
                    </ul>
                </li>
                <li className="nav_item"><a href="contact-us.html"><span>联系我们</span></a>
                </li>
            </ul>
        </div>
    </div>,
    document.querySelector('.header')
);


ReactDOM.render(
    <div>
        <hr className="footer_hr" />
        <div className="about_us">
            <ul>
                <li className="footer_logo"></li>
            </ul>
            <ul>
                <li>产品与服务</li>
                <li><a href="all-in-one.html">All-in-One 解决方案</a></li>
                <li><a href="solution.html">基于云处理的解决方案</a></li>
                <li><a href="payment.html">聚合支付</a></li>
                <li><a href="access.html">无缝接入</a></li>
                <li><a href="service.html">我们的服务</a></li>
            </ul>
            <ul>
                <li>硬件</li>
                <li><a href="mobile-pos.html">手持移动智能 POS</a></li>
                <li><a href="desktop-check.html">台式收银一体机</a></li>
                <li><a href="printer.html">票据打印机</a></li>
            </ul>
            <ul>
                <li>关于我们</li>
                <li><a href="introduce.html">公司介绍</a></li>
                <li><a href="parter.html">合作伙伴</a></li>
                <li><a href="news.html">新闻报道</a></li>
                <li><a href="join-us.html">加入我们</a></li>
            </ul>
            <ul>
                <li><a href="contact-us.html" style={{fontSize: 14,color: '#464855',lineHeight: 'normal'}}>联系我们</a></li>
            </ul>
            <ul className="foot_link_logo" style={{width: 185}}>
                <li style={{color: '#8C8C8C',marginTop: 0}}>关注我们的社区</li>
                <li style={{clear: 'left'}}>
                    <a target="_blank" href="javascript:void(0)">
                        <img src="../images/img_facebook_logo@2x.png" data-src="../images/img_facebook_logo_Selected.png" alt="" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="javascript:void(0)">
                        <img src="../images/img_LinkedIn_logo@2x.png" data-src="../images/img_LinkedIn_logo_Selected@1x.png" alt="" />
                    </a>
                </li>
                <li style={{marginRight: 0}}>
                    <a target="_blank" href="javascript:void(0)">
                        <img src="../images/img_WeChat_logo@2x.png" data-src="../images/img_WeChat_logo_Selected@1x.png" alt="" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://id.tudou.com/pospisolutions">
                        <img src="../images/img_youku_logo@2x.png" data-src="../images/img_youku_logo_Selected@1x.png" alt="" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="javascript:void(0)">
                        <img src="../images/img_youtube_logo@2x.png" data-src="../images/img_youtube_logo_Selected@1x.png" alt="" />
                    </a>
                </li>
            </ul>
        </div>
        <hr className="footer_hr" />
        <div className="copyright">
            © All rights reserved. | ICP证：沪ICP备15028992号-1
        </div>
    </div>,
    document.querySelector('.footer')
);


