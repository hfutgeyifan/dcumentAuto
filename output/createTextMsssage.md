---
description: 创建文本消息
---

# createTextMsssage

## 功能介绍

创建文本消息

1.1.1

此接口已经废弃，请使用[createMsssage]()


{% hint style="info" %}
dis
1. info1
2. info2
{% endhint %}



{% hint style="danger" %}
dis
1. warn1
2. warn2
{% endhint %}


## 参数详解


| 参数名称 | 参数类型 | 是否必填 | 描述 |
| -------- | -------- | -------- | ---- |
| text | String | 是 | 消息文本 |
| status | int | 否 | 状态 |


## 返回值

```dart
V2TimValueCallback&#60;V2TimMsgCreateInfoResult&#62;
        
{
    code: int,
    desc: String,
    data: {
        id: String,
        messageInfo: V2TimMessage,
    }
}
```

## 返回值详解


| 名称 | 数值类型 | 描述 |
| ---- | -------- | ---- |
| code | int | 请求结果[错误码](https://xxxx) |
| desc | String | 请求结果描述符 |
| data | [V2TimMsgCreateInfoResult]() | 创建结果 |



## 代码示例

true
