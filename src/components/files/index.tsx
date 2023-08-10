import './index.scss'
import fileImg from '@/assets/images/other.png'

export default function Files() {
    return (
        <div className="file">
            <img src={fileImg} alt="" className="item-img item-file" />
        </div>
    )
}
