import './index.scss'
import { Input, Select, Button, Table, Tag, Space } from 'antd'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Files from '@/components/files'
import ImageItem from '@/components/image'
import Music from '@/components/music'
import Video from '@/components/video'

export default function Article() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }

    const searchArticle = (e: any) => {
        console.log('搜索文章', e)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_: any, item: any) => (
                <>
                    {item.tags.map((tag: any) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green'
                        if (tag === 'loser') {
                            color = 'volcano'
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        )
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ]
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ]

    // 控制显示列表和网格的样式
    const [show, setShow] = useState('list')
    // 新建文件夹
    const newDir = () => {
        console.log('新创建一个文件夹')
    }

    // 上传文件
    const uploadFile = () => {
        console.log('新上传文件')
    }

    return (
        <div className="articl-main">
            <div className="search-form">
                <div className="form">
                    <div>
                        <Input
                            placeholder="文章标题"
                            className="title"
                            onChange={searchArticle}
                        />
                        <Select
                            defaultValue="全部"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: 'all', label: '全部' },
                                { value: 'video', label: '视频' },
                                { value: 'image', label: '图片' },
                                { value: 'music', label: '音乐' },
                            ]}
                        />
                    </div>
                    <div className="search">
                        <Button onClick={searchArticle}>重置</Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={searchArticle}
                        >
                            搜索
                        </Button>
                    </div>
                </div>
                <div className="action-box">
                    <Button
                        type="primary"
                        className="action-btn"
                        onClick={uploadFile}
                    >
                        上传文件
                    </Button>
                    <Button
                        type="primary"
                        className="action-btn"
                        onClick={newDir}
                    >
                        新建文件夹
                    </Button>
                    {/* 文件展示样式 */}
                    {show === 'list' ? (
                        <AppstoreOutlined
                            className="style-icon action-btn"
                            onClick={() => setShow('grid')}
                        />
                    ) : (
                        <UnorderedListOutlined
                            className="style-icon action-btn"
                            onClick={() => setShow('list')}
                        />
                    )}
                </div>
            </div>
            {/* 表格/网格样式 */}
            {show === 'list' ? (
                <div className="grid-show">
                    {/* 网格样式 */}
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Files></Files>
                        <div className="file-name">我的文件</div>
                    </div>

                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Music></Music>
                        <div className="file-name">我的音乐</div>
                    </div>
                    <div className="item-box">
                        <Video></Video>
                        <div className="file-name">我的视频</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Files></Files>
                        <div className="file-name">我的文件</div>
                    </div>

                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Music></Music>
                        <div className="file-name">我的音乐</div>
                    </div>
                    <div className="item-box">
                        <Video></Video>
                        <div className="file-name">我的视频</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Files></Files>
                        <div className="file-name">我的文件</div>
                    </div>

                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Music></Music>
                        <div className="file-name">我的音乐</div>
                    </div>
                    <div className="item-box">
                        <Video></Video>
                        <div className="file-name">我的视频</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Files></Files>
                        <div className="file-name">我的文件</div>
                    </div>

                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Music></Music>
                        <div className="file-name">我的音乐</div>
                    </div>
                    <div className="item-box">
                        <Video></Video>
                        <div className="file-name">我的视频</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Files></Files>
                        <div className="file-name">我的文件</div>
                    </div>

                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                    <div className="item-box">
                        <Music></Music>
                        <div className="file-name">我的音乐</div>
                    </div>
                    <div className="item-box">
                        <Video></Video>
                        <div className="file-name">我的视频</div>
                    </div>
                    <div className="item-box">
                        <ImageItem imgUrl="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"></ImageItem>
                        <div className="file-name">我的图片</div>
                    </div>
                </div>
            ) : (
                <Table columns={columns} dataSource={data} />
            )}
        </div>
    )
}
