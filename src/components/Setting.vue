<template>
    <div class="fixed-plugin">
        <div class="dropdown">
            <a href="#" data-toggle="dropdown">
                <i class="fa fa-cog fa-2x"> </i>
            </a>
            <ul class="dropdown-menu">
                <li class="header-title">Configuration</li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Sidebar Image</p>
                        <div class="switch switch-sidebar-image has-switch" data-on-label="ON" data-off-label="OFF">
                            <div class="switch-animate switch-on"><input type="checkbox" checked="">
                                <span class="switch-left">ON</span>
                                <label>&nbsp;</label>
                                <span class="switch-right">OFF</span>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Sidebar Mini</p>
                        <div class="switch  switch-sidebar-mini has-switch" data-on-label="ON" data-off-label="OFF">
                            <div class="switch-animate switch-off"><input type="checkbox">
                                <span class="switch-left">ON</span>
                                <label>&nbsp;</label>
                                <span class="switch-right">OFF</span>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Fixed Navbar</p>
                        <div class="switch  switch-navbar-fixed has-switch" data-on-label="ON" data-off-label="OFF">
                            <div class="switch-animate switch-off"><input type="checkbox">
                                <span class="switch-left">ON</span>
                                <label>&nbsp;</label>
                                <span class="switch-right">OFF</span>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Filters</p>
                        <div class="pull-right">
                            <span class="badge filter" data-color="black"></span>
                            <span class="badge filter badge-azure" data-color="azure"></span>
                            <span class="badge filter badge-green" data-color="green"></span>
                            <span class="badge filter badge-orange active" data-color="orange"></span>
                            <span class="badge filter badge-red" data-color="red"></span>
                            <span class="badge filter badge-purple" data-color="purple"></span>
                        </div>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="header-title">Sidebar Images</li>
                <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="/static/images/admin/full-screen-image-1.jpg">
                    </a>
                </li>
                <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="/static/images/admin/full-screen-image-2.jpg">
                    </a>
                </li>
                <li class="active">
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="/static/images/admin/full-screen-image-3.jpg">
                    </a>
                </li>
                <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="/static/images/admin/full-screen-image-4.jpg">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "Setting",
  data() {
    return {
    };
  }
};
</script>
