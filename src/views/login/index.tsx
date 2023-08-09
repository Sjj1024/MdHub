import { Form, Input, Button, message, Spin } from 'antd'
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import logo from '@/assets/images/logo.jpg'
import commonApi from '@/apis/common'
import { useState } from 'react'

function Login() {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage()

    const [loading, setLoading] = useState(false)

    const onFinish = async (values: any) => {
        console.log('Success:', values)
        setLoading(true)
        if (values.username && values.password && values.token) {
            // 使用github token获取用户信息
            const res = await commonApi.getUserInfo(values.token)
            console.log('获取用户信息', res)
            if (res && (res as any).name) {
                messageApi.open({
                    type: 'success',
                    content: '校验成功',
                })
                // 将Token存储到本地
                localStorage.setItem('token', values.token)
                navigate('/', { replace: true })
                setLoading(false)
            }
        } else {
            messageApi.open({
                type: 'error',
                content: '请将输入框填写完整',
            })
        }
        // navigate('/', { replace: true })
    }

    return (
        <div className="login-box">
            {contextHolder}
            <div className="login-main">
                <div className="avatar_box">
                    <img src={logo} alt="" className="login-logo" />
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入账号' }]}
                        className="username"
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="账号"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="密码"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="token"
                        rules={[
                            { required: true, message: '请输入Github Token' },
                        ]}
                    >
                        <Input
                            prefix={
                                <VerifiedOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Token"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        {loading ? (
                            <Spin className="login-form-button" />
                        ) : (
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size="large"
                            >
                                登陆
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Login
