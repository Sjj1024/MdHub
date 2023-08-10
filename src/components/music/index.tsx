import './index.scss'
import musicImg from '@/assets/images/music2.png'

export default function Music() {
    return (
        <div className="file">
            <img src={musicImg} alt="" className="item-img item-music" />
        </div>
    )
}
