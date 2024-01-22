import Home from "../views/Home"
// import About from "../views/About"
import { Navigate } from "react-router-dom"
import React,{ lazy } from "react"

const Page1 = lazy(()=>import("../views/Page1"))   // 懒加载了About模块
const Page2 = lazy(()=>import("../views/Page2"))   // 懒加载了About模块
// const Home = lazy(()=>import("../views/Home"))     // Home不用

// 懒加载的模式需要我们给它添加一个loading组件
// 懒加载的模式的组件的写法，外面需要套一层Loading的提示加载组件

// 抽取loading组件函数
const withLoadingComponent = (comp:JSX.Element) =>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp} 
    </React.Suspense>
)

const routes=[
    // 嵌套路由 开始----------------------
    {
        path:"/",
        element:<Navigate to="/page1"/>
    },
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:"/page1",
                element:withLoadingComponent(<Page1 />)
            },
            {
                path:"/page2",
                element:withLoadingComponent(<Page2 />)
            }
        ]
    },
    // 嵌套路由 结束----------------------

    // {
    //     path:"/home",
    //     element:<Home />
    // },
    // {
    //     path:"/about",
    //     element:withLoadingComponent(<About />)
    // },
]

export default routes