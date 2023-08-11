import './index.scss'
import { Image } from 'antd'
import { useState } from 'react'

export default function ImageItem(props: any) {
    const { preList, imgUrl } = props
    const [preIndex, setIndex] = useState(preList.indexOf(imgUrl))
    // 当点击前后切换的时候，修改当前预览图
    const handleSwitch = (current: number, prevCurrent: number) => {
        console.log('切换预览图', current, prevCurrent)
        setIndex(current)
    }

    // 关闭预览图是重置预览为当前图索引
    const handleClose = (visible: boolean) => {
        console.log('关闭预览图', visible)
        if (!visible) {
            setIndex(preList.indexOf(imgUrl))
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
                <Image className="item-img" src={imgUrl} />
            </Image.PreviewGroup>
        </div>
    )
}
