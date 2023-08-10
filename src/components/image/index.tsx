import './index.scss'
import { Image } from 'antd'
import { useState } from 'react'

export default function ImageItem(props: any) {
    // console.log('props', props)

    const preList = [
        'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
        'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
        'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    ]

    const [preIndex, setIndex] = useState(preList.indexOf(props.imgUrl))

    // 当点击前后切换的时候，修改当前预览图
    const handleSwitch = (current: number, prevCurrent: number) => {
        console.log('切换预览图', current, prevCurrent)
        setIndex(current)
    }

    // 关闭预览图是重置预览为当前图索引
    const handleClose = (visible: boolean) => {
        console.log('关闭预览图', visible)
        if (!visible) {
            setIndex(preList.indexOf(props.imgUrl))
        }
    }

    return (
        <div className="file">
            <Image.PreviewGroup
                items={preList}
                preview={{
                    minScale: 0.1,
                    current: preIndex,
                    onChange: handleSwitch,
                    onVisibleChange: handleClose,
                }}
            >
                <Image className="item-img" src={props.imgUrl} />
            </Image.PreviewGroup>
        </div>
    )
}
