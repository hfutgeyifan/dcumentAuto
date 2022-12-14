/// en:
/// type:api
///
/// Group:messageManager
///
/// createTextMsssage
///
/// introduction:createTextMsssagecreateTextMsssage
///
/// Minimum usable version：1.1.1
/// 
/// Description of abandonment：此接口已经废弃，请使用[createMsssage]()
///
/// info：
/// dis
/// 1. info1
/// 2. info2
///
/// warn：
/// dis
/// 1. warn1
/// 2. warn2
///
/// param：
/// - text String 必填 消息文本
/// - status int 非必填 状态
///
/// returnExample
/// ```dart
/// V2TimValueCallback<V2TimMsgCreateInfoResult>
///         
/// {
///     code: int,
///     desc: String,
///     data: {
///         id: String,
///         messageInfo: V2TimMessage,
///     }
/// }
/// ```
///
/// Return value details：
/// - code int 请求结果[错误码](https://xxxx)
/// - desc String 请求结果描述符[V2TimMsgCreateInfoResult]()
/// - data [V2TimMsgCreateInfoResult]() 创建结果
///
/// See the example folder for code examples
///
/// zh:
/// 类型：api
/// 
/// 所属群组：messageManager
///
/// createTextMsssage
///
/// 功能介绍:创建文本消息
///
/// 最低可使用的版本号：1.1.1
/// 
/// 废弃情况描述：此接口已经废弃，请使用[createMsssage]()
///
/// 注意：
/// dis
/// 1. info1
/// 2. info2
///
/// 警告：
/// dis
/// 1. warn1
/// 2. warn2
///
/// 参数：
/// - text String 必填 消息文本
/// - status int 非必填 状态
///
/// 返回模板
/// ```dart
/// V2TimValueCallback<V2TimMsgCreateInfoResult>
///         
/// {
///     code: int,
///     desc: String,
///     data: {
///         id: String,
///         messageInfo: V2TimMessage,
///     }
/// }
/// ```
///
/// 返回值详解：
/// - code int 请求结果[错误码](https://xxxx)
/// - desc String 请求结果描述符[V2TimMsgCreateInfoResult]()
/// - data [V2TimMsgCreateInfoResult]() 创建结果
///
/// 代码案例请看example文件夹
var a = 1;

/// en:
/// type:class
///
/// Group:message
///
/// V2TimFriendOperationResult
///
/// introduction:消息属性
///
/// Minimum usable version：1.1.1
/// 
/// Description of abandonment：此关键类已经废弃，请参考[V2TimMessage2]()
///
/// info：
/// dis
/// 1. info1
/// 2. info2
///
/// warn：
/// dis
/// 1. warn1
/// 2. warn2
///
/// Attribute description：
/// - userID String 消息ID(消息创建的时候为 nil,消息发送的时候会生成)
/// - resultCode int 消息发送状态
/// 1:消息发送中
/// 2:消息发送成功
/// 3:消息发送失败
/// 4:消息被删除
/// 5:导入到本地的消息
/// 6:被撤销的消息
/// - resultInfo [V2TimTextElem]() 消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容
///
/// zh:
/// 类型：class
/// 
/// 所属群组：message
///
/// V2TimFriendOperationResult
///
/// 功能介绍:消息属性
///
/// 最低可使用的版本号：1.1.1
/// 
/// 废弃情况描述：此关键类已经废弃，请参考[V2TimMessage2]()
///
/// 注意：
/// dis
/// 1. info1
/// 2. info2
///
/// 警告：
/// dis
/// 1. warn1
/// 2. warn2
///
/// 参数描述：
/// - userID String 消息ID(消息创建的时候为 nil,消息发送的时候会生成)
/// - resultCode int 消息发送状态
/// 1:消息发送中
/// 2:消息发送成功
/// 3:消息发送失败
/// 4:消息被删除
/// 5:导入到本地的消息
/// 6:被撤销的消息
/// - resultInfo [V2TimTextElem]() 消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容
class V2TimFriendOperationResult {
  /// en:
  /// Attribute description：
  /// - userID String 消息ID(消息创建的时候为 nil,消息发送的时候会生成)
  ///
  /// zh:
  /// 参数描述：
  /// - userID String 消息ID(消息创建的时候为 nil,消息发送的时候会生成)
  late String? userID;

  /// en:
  /// Attribute description：
  /// - resultCode int 消息发送状态
  /// 1:消息发送中
  /// 2:消息发送成功
  /// 3:消息发送失败
  /// 4:消息被删除
  /// 5:导入到本地的消息
  /// 6:被撤销的消息
  ///
  /// zh:
  /// 参数描述：
  /// - resultCode int 消息发送状态
  /// 1:消息发送中
  /// 2:消息发送成功
  /// 3:消息发送失败
  /// 4:消息被删除
  /// 5:导入到本地的消息
  /// 6:被撤销的消息
  late int? resultCode;

  /// en:
  /// Attribute description：
  /// - resultInfo [V2TimTextElem]() 消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容
  ///
  /// zh:
  /// 参数描述：
  /// - resultInfo [V2TimTextElem]() 消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容
  late String? resultInfo;

  V2TimFriendOperationResult({
    required this.userID,
    this.resultCode,
    this.resultInfo,
  });
}

/// en:
/// type:enum
///
/// Group:message
///
/// MessagePriority2
///
/// introduction:消息优先级
///
/// Minimum usable version：1.1.1
/// 
/// Description of abandonment：此枚举已经废弃，请参考[MessagePriority2]()
///
/// info：
/// dis
/// 1. info1
/// 2. info2
///
/// warn：
/// dis
/// 1. warn1
/// 2. warn2
///
/// Enumeration description：
/// - V2TIM_PRIORITY_DEFAULT 默认为普通优先级 0 
/// - V2TIM_PRIORITY_HIGH 高优先级，一般用于礼物等重要消息 1 
/// - V2TIM_PRIORITY_NORMAL 普通优先级，一般用于普通消息 2 
/// - V2TIM_PRIORITY_LOW 低优先级，一般用于点赞消息 3 
///
/// zh:
/// 类型：enum
/// 
/// 所属群组：message
///
/// MessagePriority2
///
/// 功能介绍:消息优先级
///
/// 最低可使用的版本号：1.1.1
/// 
/// 废弃情况描述：此枚举已经废弃，请参考[MessagePriority2]()
///
/// 注意：
/// dis
/// 1. info1
/// 2. info2
///
/// 警告：
/// dis
/// 1. warn1
/// 2. warn2
///
/// 枚举值描述：
/// - V2TIM_PRIORITY_DEFAULT 默认为普通优先级 0 
/// - V2TIM_PRIORITY_HIGH 高优先级，一般用于礼物等重要消息 1 
/// - V2TIM_PRIORITY_NORMAL 普通优先级，一般用于普通消息 2 
/// - V2TIM_PRIORITY_LOW 低优先级，一般用于点赞消息 3 
enum MessagePriority {
  /// en:
  /// Enumeration description：
  /// - V2TIM_PRIORITY_DEFAULT 默认为普通优先级
  ///
  /// zh:
  /// 枚举值描述：
  /// - V2TIM_PRIORITY_DEFAULT 默认为普通优先级
  V2TIM_PRIORITY_DEFAULT,

  /// en:
  /// Enumeration description：
  /// - V2TIM_PRIORITY_NORMAL 普通优先级，一般用于普通消息
  ///
  /// zh:
  /// 枚举值描述：
  /// - V2TIM_PRIORITY_NORMAL 普通优先级，一般用于普通消息
  V2TIM_PRIORITY_NORMAL,

  /// en:
  /// Enumeration description：
  /// - V2TIM_PRIORITY_LOW 低优先级，一般用于点赞消息
  ///
  /// zh:
  /// 枚举值描述：
  /// - V2TIM_PRIORITY_LOW 低优先级，一般用于点赞消息
  V2TIM_PRIORITY_LOW
}
