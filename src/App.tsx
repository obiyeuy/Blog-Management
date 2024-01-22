import { useState } from 'react'
// import { Button } from 'antd'
// import { GithubFilled } from "@ant-design/icons"
// import { Outlet,Link } from "react-router-dom"
import { useRoutes,Link } from "react-router-dom"
// import 'antd/dist/antd.css'
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className='APP'>
      {/* 顶级组件
      <Button>按钮</Button>
      <GithubFilled style={{fontSize:'40px',color:'red'}}/> */}
      {/* <Link to="/home">Home</Link>     */}
      { /* 利用标签进行跳转 */ }
      {/* <Link to="/about">About</Link> */}
      {/* 占位符组件，类似于窗口，用来展示组件的，有点像vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
