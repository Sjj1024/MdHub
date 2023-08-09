import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Dropdown } from 'antd'
import './index.scss'
import type { MenuProps } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const logOut = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('退出登录')
    // location.href = '/login'
    location.replace('/login')
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
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

const { Header, Sider, Content } = Layout

const LayoutBoard: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* <div className="demo-logo-vertical"> */}
                <div
                    className="logo-box"
                    style={{ color: 'white', fontSize: '30px' }}
                >
                    MdHub
                    {/* <img src={Logo} alt="" className="logo" /> */}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to="/">数据概览</Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link to="/article">内容管理</Link>,
                        },
                        {
                            key: '3',
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
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="user-main">
                        <span className="user-name">1024小神</span>

                        <Dropdown menu={{ items }} placement="bottom" arrow>
                            <UserOutlined className="user-icon" />
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

export default LayoutBoard
