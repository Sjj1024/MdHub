/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme, Dropdown } from 'antd'
import './index.scss'
import type { MenuProps } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const logOut = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('退出登录')
    localStorage.removeItem('token')
    location.replace('/login')
}

const { Header, Sider, Content } = Layout

const LayoutBoard: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const { userInfo } = useStore()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/${userInfo.loginName}`}
                >
                    我的资料
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    切换账号
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a rel="noopener noreferrer" onClick={logOut}>
                    退出登录
                </a>
            ),
        },
    ]

    // 获取路由中的路径，然后激活响应的菜单
    const location = useLocation()
    // console.log('location', location)

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* <div className="demo-logo-vertical"> */}
                <div
                    className="logo-box"
                    style={{ color: 'white', fontSize: '30px' }}
                >
                    {collapsed ? 'Md' : 'MdHub'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    items={[
                        {
                            key: '/',
                            icon: <UserOutlined />,
                            label: <Link to="/">数据概览</Link>,
                        },
                        {
                            key: '/article',
                            icon: <VideoCameraOutlined />,
                            label: <Link to="/article">内容管理</Link>,
                        },
                        {
                            key: '/publish',
                            icon: <UploadOutlined />,
                            label: <Link to="/publish">发布文章</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{ padding: 0, background: colorBgContainer }}
                    className="header-box"
                >
                    <span
                        className="coll-btn"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )}
                    </span>
                    <div className="user-main">
                        <span className="user-name">{userInfo.userName}</span>

                        <Dropdown menu={{ items }} placement="bottom" arrow>
                            {userInfo.avatarUrl ? (
                                <img
                                    src={userInfo.avatarUrl}
                                    alt=""
                                    className="user-avatar"
                                />
                            ) : (
                                <UserOutlined className="user-icon" />
                            )}
                        </Dropdown>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    )
}

export default observer(LayoutBoard)
