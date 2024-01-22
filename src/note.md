package中的dependencies和devdependencies区别：
devdepend是开发环境用的，打包时不会打包进入，devdepend多放开发工具；depend多放依赖工具

路径别名的配置：在vite.config.ts中import path from "path"，
然后在export default defineConfig中添加：
resolve:{
    alias:{
        "@":path.resolve(__dirname,'./src')
    }
}
注意：在引入时path会爆红，需要声明一下：
npm i -D @types/node

配置路径别名的提示：
在tsconfig.json中添加：
在compilerOptions中：
    "baseUrl":"./",
    "paths":{
        "@/*":[
            "src/*"
        ]
    }