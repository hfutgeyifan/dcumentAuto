文档描述类型：api

描述对象所属群组：messageManager

# createTextMsssage

## 功能介绍

创建文本消息最低可使用的版本号：1.1.1

废弃情况描述：此接口已经废弃，请使用[createMsssage](createMsssage.md)

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

## 返回模板

```dart
V2TimValueCallback<V2TimMsgCreateInfoResult>
        
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
| data | [V2TimMsgCreateInfoResult](../../class/message/V2TimMsgCreateInfoResult.md) | 创建结果 |


## 代码示例

```dart
true
```