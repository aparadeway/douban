[查看演示](http://jjy-site.com:8080/)

src下的目录说明

```
│  App.js---入口
│  index.css
│  index.js
│  
├─common---公共组件
│  └─Sliders---轮播组件
│      │  index.js
│      │  style.css
│      │  
│      └─components
│              Arrows.js---翻页箭头
│              SliderItem.js---幻灯片内容
│              SliderWrapper.js---幻灯片容器
│              
├─components---组件包（其实就一个组件，嘻嘻）
│  └─Display---作品展示组件
│      │  index.js
│      │  style.css
│      │  
│      └─components
│          ├─Title---模块头部内容
│          │      index.js
│          │      style.css
│          │      
│          └─WorkSlider---模块主体内容，即图片轮播
│              │  index.js
│              │  style.css
│              │  
│              └─components
│                      WorkItem.js
│                      
└─store---全局状态管理中心
        defaultState.js---store默认值
        index.js
        reducer.js

```

?        