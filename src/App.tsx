/* eslint-disable react-refresh/only-export-components */
import { observer } from 'mobx-react-lite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/login'
import LayoutBoard from './layout'
import NotFound from './views/notFound'
import MainBoard from './views/board'
import Article from './views/article'
import Publish from './views/publish'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 登陆组件 */}
                <Route path="/login" element={<Login></Login>}></Route>
                {/* 布局组件 */}
                <Route path="/" element={<LayoutBoard></LayoutBoard>}>
                    {/* 二级路由出口 */}
                    <Route index element={<MainBoard></MainBoard>}></Route>
                    <Route path="article" element={<Article></Article>}></Route>
                    <Route path="publish" element={<Publish></Publish>}></Route>
                </Route>
                {/* 404组件 */}
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default observer(App)
