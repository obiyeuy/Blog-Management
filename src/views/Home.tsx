import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('栏目1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo = useNavigate()
    const menuClick = (e:{key:string})=>{
        console.log("caidan",e.key);
        // 点击后要跳转到对应路由   编程式导航跳转，利用到一个hook
        navigateTo(e.key)
    }


    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/** 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo">
                    yueyibo
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
            </Sider>
            {/** 右边内容 */}
            <Layout className="site-layout">
                {/** 右边头部 */}
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }}>
                    {/** 面包屑 */}
                    <Breadcrumb style={{lineHeight:'64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/** 右边内容部分-白色底部盒子 */}
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    {/* 窗口部分 */}
                    <Outlet />
                </Content>
                {/** 右边底部*/}
                <Footer style={{ textAlign: 'center',padding:0,lineHeight:"48px" }}> Design ©2024 Created by yueyibo</Footer>
            </Layout>
        </Layout>
    );
};

export default View;