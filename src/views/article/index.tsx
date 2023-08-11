import './index.scss'
import {
    Input,
    Select,
    Button,
    Table,
    Tag,
    Space,
    Pagination,
    Tooltip,
    PaginationProps,
} from 'antd'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { useCallback, useEffect, useState } from 'react'
import Files from '@/components/files'
import ImageItem from '@/components/image'
import Music from '@/components/music'
import Video from '@/components/video'
import FileApi from '@/apis/files'
import { fileRes } from '@/model'

export default function Article() {
    // 列表布局使用的数据
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

    // 网格布局使用的数据
    const [fileList, setFileList] = useState<fileRes[]>([])

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

    // 获取资源广场里面的内容，然后渲染
    const [search, setSearch] = useState<string>('')
    const [selType, setType] = useState<string>('all')
    //
    const [preList, setPreList] = useState<Array<any>>([])
    // 分页大小
    const [curPage, setCurPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [pageTotal, setPageTotal] = useState(0)
    const searchArticle = () => {
        console.log('搜索文章', search, selType, pageTotal)
    }
    //
    const getFiles = useCallback(
        async (
            filter?: string | null,
            fileType?: string | null,
            all?: string | null
        ) => {
            const shares = await FileApi.searchShare(
                filter ? filter : 'FileHub',
                fileType ? fileType : '',
                all ? '' : '+state:closed',
                all ? all : '',
                pageSize,
                curPage
            )
            console.log('获取资源列表', shares)
            setPageTotal((shares as any).total_count)
            const imgPreList: any[] = []
            // 组装渲染列表数据
            const conList = (shares as any).items.reduce(
                (pre: fileRes[], cur: any) => {
                    const fileInfo = cur.title.split('FileHub:')
                    fileInfo[2] === 'picture' && imgPreList.push(cur.body)
                    cur.title.includes('FileHub:') &&
                        pre.push({
                            name: fileInfo[1].includes('.')
                                ? fileInfo[1]
                                : fileInfo[1] +
                                  cur.body.substring(cur.body.lastIndexOf('.')),
                            path: cur.number,
                            type: fileInfo[2],
                            size: fileInfo[3],
                            sha:
                                cur.labels.length === 1
                                    ? '审核不通过'
                                    : cur.labels.length === 2
                                    ? '审核通过'
                                    : '待审核',
                            openLink: cur.body,
                            downLink: cur.body,
                            htmlLink: cur.html_url,
                            creatTime: cur.created_at,
                            selected: false,
                            showTips: false,
                            uploading: false,
                        })
                    return pre
                },
                []
            )
            setFileList(conList)
            setPreList(imgPreList)
            console.log('conList--', conList)
        },
        [curPage, pageSize]
    )

    // 点击重置按钮
    const resetSearch = () => {
        setSearch('')
        setType('all')
        console.log('点击重置按钮')
    }

    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
        current,
        pageSize
    ) => {
        console.log(current, pageSize)
        setCurPage(current)
        setPageSize(pageSize)
    }

    // 在副作用里面执行
    useEffect(() => {
        // 初始化获取资源列表
        getFiles()
    }, [getFiles])

    return (
        <div className="articl-main">
            <div className="search-form">
                <div className="form">
                    <div>
                        <Input
                            placeholder="请输入搜索内容"
                            className="title"
                            value={search}
                            onChange={(val) => setSearch(val.target.value)}
                        />
                        <Select
                            defaultValue={selType}
                            value={selType}
                            onSelect={(val) => setType(val)}
                            style={{ width: 120 }}
                            options={[
                                { value: 'all', label: '全部' },
                                { value: 'video', label: '视频' },
                                { value: 'image', label: '图片' },
                                { value: 'music', label: '音乐' },
                            ]}
                        />
                    </div>
                    <div className="search">
                        <Button onClick={resetSearch}>重置</Button>
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
                <div>
                    <div className="grid-show">
                        {/* 网格样式：遍历数据 */}
                        {fileList.map((item) => {
                            if (item.type === 'picture') {
                                return (
                                    <div
                                        className="item-box"
                                        key={item.openLink}
                                    >
                                        <ImageItem
                                            imgUrl={item.openLink}
                                            preList={preList}
                                        ></ImageItem>
                                        <Tooltip
                                            placement="bottom"
                                            title={item.name}
                                        >
                                            <div className="file-name">
                                                {item.name}
                                            </div>
                                        </Tooltip>
                                    </div>
                                )
                            } else if (item.type === 'music') {
                                return (
                                    <div
                                        className="item-box"
                                        key={item.openLink}
                                    >
                                        <Music></Music>
                                        <Tooltip
                                            placement="bottom"
                                            title={item.name}
                                        >
                                            <div className="file-name">
                                                {item.name}
                                            </div>
                                        </Tooltip>
                                    </div>
                                )
                            } else if (item.type === 'video') {
                                return (
                                    <div
                                        className="item-box"
                                        key={item.openLink}
                                    >
                                        <Video></Video>
                                        <Tooltip
                                            placement="bottom"
                                            title={item.name}
                                        >
                                            <div className="file-name">
                                                {item.name}
                                            </div>
                                        </Tooltip>
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        className="item-box"
                                        key={item.openLink}
                                    >
                                        <Files></Files>
                                        <Tooltip
                                            placement="bottom"
                                            title={item.name}
                                        >
                                            <div className="file-name">
                                                {item.name}
                                            </div>
                                        </Tooltip>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={1}
                        current={curPage}
                        total={pageTotal}
                    />
                </div>
            ) : (
                <Table columns={columns} dataSource={data} />
            )}
        </div>
    )
}
