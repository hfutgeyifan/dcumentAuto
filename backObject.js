// try {
//     var doc = yaml.load(
//         fs.readFileSync(path.resolve(__dirname, '..') + '/yaml/api/messageManager/createTextMsssage.yaml', 'utf8')
//     );
//     ApiObject = doc;
//     console.log(doc);
// } catch (e) {
//     console.log(e);
// }

// const ApiObject = {
//     type: 'api',
//     group: 'messageManager',
//     name: 'createTextMsssage',
//     features: "创建文本消息",
//     version: '1.1.1',
//     ignore: false,
//     deprecated: '此接口已经废弃，请使用[createMsssage]()',
//     precautions: {
//         info: ['dis', '1. info1', '2. info2'],
//         warn: ['dis', '1. warn1', '2. warn2'],
//     },
//     params: [
//         { type: 'String', required: true, name: 'text', description: "消息文本" },
//         { type: 'int', required: false, name: 'status', description: "状态" },
//     ],
//     return: {
//         example:
//             `V2TimValueCallback<V2TimMsgCreateInfoResult>

// {
//     code: int,
//     desc: String,
//     data: {
//         id: String,
//         messageInfo: V2TimMessage,
//     }
// }`,
//         values: [
//             { type: 'int', name: 'code', description: "请求结果[错误码](https://xxxx)" },
//             { type: 'String', name: 'desc', description: "请求结果描述符" },
//             { type: '[V2TimMsgCreateInfoResult]()', name: 'data', description: "创建结果" },
//         ],
//     },
//     example: true,
// }

const ClassObject = {
    type: 'class',
    group: 'message',
    name: 'V2TimMessage',
    features: '消息属性',
    version: '1.1.1',
    ignore: false,
    deprecated: "此关键类已经废弃，请参考[V2TimMessage2]()",
    precautions: {
        info: ['dis', '1. info1', '2. info2'],
        warn: ['dis', '1. warn1', '2. warn2'],
    },
    attributes: [
        { name: 'msgID', type: 'String', description: '消息ID(消息创建的时候为 nil,消息发送的时候会生成)', extra: [] },
        { name: 'status', type: 'int', description: '消息发送状态', extra: ['1:消息发送中', '2:消息发送成功', '3:消息发送失败', '4:消息被删除', '5:导入到本地的消息', '6:被撤销的消息'] },
        { name: 'textElem', type: '[V2TimTextElem]()', description: '消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容', extra: [] },
    ],
}

const EnumObject = {
    type: 'enum',
    group: 'message',
    name: 'MessagePriority',
    features: '消息优先级',
    version: '1.1.1',
    ignore: false,
    deprecated: "此枚举已经废弃，请参考[MessagePriority2]()",
    precautions: {
        info: ['dis', '1. info1', '2. info2'],
        warn: ['dis', '1. warn1', '2. warn2'],
    },
    attributes: [
        { name: 'V2TIM_PRIORITY_DEFAULT', description: '默认为普通优先级' },
        { name: 'V2TIM_PRIORITY_HIGH', description: '高优先级，一般用于礼物等重要消息' },
        { name: 'V2TIM_PRIORITY_NORMAL', description: '普通优先级，一般用于普通消息' },
        { name: 'V2TIM_PRIORITY_LOW', description: '低优先级，一般用于点赞消息' },
    ],
}

const CallbakcObject = {
    type: 'callback',
    group: 'user',
    name: 'OnBlackListAddCallback',
    features: '黑名单列表新增用户的回调',
    version: '1.1.1',
    ignore: false,
    deprecated: "此枚举已经废弃，请参考[OnBlackListAddCallback2]()",
    precautions: {
        info: ['dis', '1. info1', '2. info2'],
        warn: ['dis', '1. warn1', '2. warn2'],
    },
    return: {
        example:
            `OnBlackListAddCallback = void Function(
List<V2TimFriendInfo> infoList
)`,
        values: [
            { type: 'List< [V2TimFriendInfo]() >', name: 'infoList', description: "新增的用户信息列表" },
        ],
    },
    example: true,

}

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
            exampledDscription: "使用自定义onTapItem做到点击跳转到此会话聊天页面",
        },
        {
            type: 'List< ConversationItemSlidablePanel > Function([V2TimConversation]() conversationItem)',
            required: false,
            name: 'itemSlidableBuilder',
            description: "用于自定义构建会话模块中的边缘滑动操作模块的构造器",
            exampledDscription: "使用自定义itemBuilder展示会话列表信息",
        },
    ],
    example: true,
}
