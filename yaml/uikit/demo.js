const fs = require('fs');
const yaml = require('js-yaml');

const uikitObject = {
    type: 'api',
    group: 'UIKit',
    name: 'TIMUIKitConversation',
    features: "组件介绍:会话列表组件",
    version: '1.1.1',
    ignore: false,
    deprecated: '此组件已经废弃，请使用[TIMUIKitConversation2]()',
    precautions: {
        info: ['dis', '1. info1', '2. info2'],
        warn: ['dis', '1. warn1', '2. warn2'],
    },
    params: [
        {
            type: 'void Function< [V2TimConversation]() >',
            required: false,
            name: 'onTapItem',
            description: "会话模块点击触发的函数",
        },
        {
            type: 'List< ConversationItemSlidablePanel > Function([V2TimConversation]() conversationItem)',
            required: false,
            name: 'itemSlidableBuilder',
            description: "用于自定义构建会话模块中的边缘滑动操作模块的构造器",
        },
    ],
    example: true,
}

try {
    fs.writeFileSync('./TIMUIKitConversation.yaml', yaml.dump(uikitObject), 'utf8');
} catch (e) {
    console.log(e);
}