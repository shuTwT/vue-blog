<template>
    <el-container class="admin-container">
        <el-header>
            <div class="left">
                <img alt="" height="60" src="/favicon.ico">
                <span>博客后台管理</span>
            </div>
            <el-dropdown class="right user el-dropdown">
                <div class="usericon">
                    <img src="http://q1.qlogo.cn/g?b=qq&nk=1324073644&s=640" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item><span class="el-dropdown-item">退出</span></el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-header>
        <el-container>
            <el-aside :width="isCollapse ? '64px' : '190px'">
                <div class="toggle-button" @click="isCollapse = !isCollapse"><i
                        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'">2</i></div>
                <!--菜单-->
                <el-menu :collapse="isCollapse" :collapse-transition="false" :default-active="$store.state.activePath"
                    :default-openeds="defaultOpeneds" :router="true" :unique-opened="false" active-text-color="#c7254e"
                    background-color="DodgerBlue " text-color="black">
                    <!--          <el-menu-item index="/dashboard">-->
                    <!--            <i class="iconfont ali-iconfont icon-dashboard"></i>-->
                    <!--            <span>仪表盘</span>-->
                    <!--          </el-menu-item>-->
                    <!-- 一级菜单 -->
                    <el-sub-menu v-for="item in menuList" :key="item.id" :index="item.id + ''">
                        <!-- 一级菜单的模板区域 -->
                        <template #title>
                            <i :class="iconsObj[item.id]" class="iconfont"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">
                            <template #title>
                                <i :class="iconsObj[subItem.id]"></i>
                                <span>{{ subItem.title }}</span>
                            </template>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-main :class="isCollapse?'m-el-main-width-64':'m-el-main-width-190'">
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

<script  >
import {useStore} from '../../store/index'
import { ElHeader, ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar, ElAside, ElContainer, ElMain, ElIcon, ElMenu, ElSubMenu, ElMenuItem } from 'element-plus'
export default {
    setup(){
        const store = useStore
        return {
            store
        }
    },
    data() {
        return {
            menuList: [
                {
                    id: 1,
                    title: '博客管理',
                    children: [
                        {
                            id: 11,
                            title: '写文章',
                            path: '/admin/writeBlog'
                        },
                         {
                           id: 12,
                          title: '写动态',
                          path: '/admin/'
                         },
                        {
                            id: 13,
                            title: '文章管理',
                            path: '/admin/blogList'
                        },
                         {
                           id: 14,
                           title: '订阅管理',
                           path: '/admin/'
                         },
                        {
                            id: 15,
                            title: '分类管理',
                            path: '/admin/type'
                        },
                         {
                           id: 16,
                           title: '标签管理',
                           path: '/admin/'
                         },
                        {
                            id: 17,
                            title: '评论管理',
                            path: '/admin/comments'
                        }
                    ]
                },
                {
                    id: 2,
                    title: '页面管理',
                    children: [
                         {
                           id: 21,
                           title: '站点设置',
                           path: '/admin/'
                         },
                        {
                            id: 22,
                            title: '友链管理',
                            path: '/admin/friendList'
                        },
                        {
                           id: 23,
                           title: '关于',
                           path: '/about/'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '系统管理',
                    children: [
                        {
                            id: 31,
                            title: '用户管理',
                            path: '/admin/userManager'
                        },
                         {
                           id: 32,
                           title: '控制台',
                           path: '/console'
                         }
                    ]
                },
                {
                    id: 4,
                    title: '日志管理',
                    children: [
                         {
                           id: 41,
                           title: '系统日志',
                           path: '/logs/'
                         },
                         {
                          id: 42,
                           title: '登录日志',
                           path: '/loginLog'
                         },
                         {
                           id: 43,
                           title: '操作日志',
                           path: '/operationLog'
                         },
                         {
                           id: 44,
                           title: '异常日志',
                           path: '/exceptionLog'
                         },
                        {
                            id: 45,
                            title: '访问日志',
                            path: '/admin/visitLog'
                        }
                    ]
                },
                {
                    id: 5,
                    title: '数据统计',
                    children: [
                        {
                            id: 51,
                            title: '访客统计',
                            path: '/admin/'
                        },
                        // {
                        //   id: 52,
                        //   title: '受访页面',
                        //   path: '/visitPage'
                        // }
                    ]
                },
            ],
            iconsObj: {
                '1': 'el-icon-menu',
                '2': 'el-icon-document-copy',
                '3': 'el-icon-s-tools',
                '4': 'el-icon-document',
                '5': 'el-icon-s-data',
                '11': 'el-icon-edit',
                '12': 'el-icon-edit',
                '13': 'el-icon-s-order',
                '14': 'el-icon-chat-dot-round',
                '15': 'el-icon-s-opportunity',
                '16': 'submenu ali-iconfont icon-biaoqian',
                '17': 'el-icon-s-comment',
                '21': 'submenu ali-iconfont icon-bianjizhandian',
                '22': 'el-icon-share',
                '23': 'el-icon-tickets',
                '31': 'el-icon-user-solid',
                '32': 'el-icon-alarm-clock',
                '41': 'el-icon-alarm-clock',
                '42': 'el-icon-finished',
                '43': 'el-icon-document-checked',
                '44': 'el-icon-document-delete',
                '45': 'el-icon-data-line',
                '51': 'el-icon-s-marketing',
                '52': 'el-icon-view',
            },
            //是否折叠
            isCollapse: false,
            //默认打开的菜单
            defaultOpeneds: ['1'],
            user: {},
        }
    },
    components: { ElHeader, ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar, ElAside, ElContainer, ElMain, ElIcon, ElMenu, ElSubMenu, ElMenuItem },

}
</script>

<style scoped>
.el-header,
.el-header div {
    display: flex;
    align-items: center;
}

.el-header {
    background-color: #399bdd;
    justify-content: space-between;
    padding-left: 10px;
    color: #fff;
    font-size: 22px;
    user-select: none;
}

.usericon {
    cursor: pointer;
}

.usericon>img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background-color: #606266;
}

.el-dropdown-item {
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
}
.el-aside {
  background-color: CornflowerBlue ;
  position: absolute;
  top: 60px;
  bottom: 0;
  user-select: none;
}
.el-main {
  background-color: white;
  position: absolute;
  top: 60px;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 92.5%;
}
.el-main>div{
    height: 100%;
}
.el-aside .el-menu {
  border-right: none;
}
.m-el-main-width-190 {
  width: calc(100% - 190px);
}
.el-dropdown-menu {
  margin: 7px 0 0 0 !important;
  padding: 0 !important;
  border: 0 !important;
}
.m-el-main-width-64 {
  width: calc(100% - 64px);
}
.admin-container {
  height: 100%;
}
.toggle-button {
  background-color: CornflowerBlue ;
  font-size: 20px;
  line-height: 40px;
  color: black;
  text-align: center;
  cursor: pointer;
}
.el-dropdown-link {
  outline-style: none !important;
  outline-color: unset !important;
  height: 100%;
  cursor: pointer;
}

</style>