
Document description type：api

Group：messageManager

# createTextMsssage


## introduction

createTextMsssagecreateTextMsssage

Minimum usable version：1.1.1

Description of abandonment：此接口已经废弃，请使用[createMsssage](createMsssage.md)

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


## Parameter details

| Parameter name | Parameter type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| text | String | yes | 消息文本 |
| status | int | no | 状态 |

## Returned template

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


## Return value details

| name | type | description |
| ---- | ---- | ----------- |
| code | int | 请求结果[错误码](https://xxxx) |
| desc | String | 请求结果描述符[V2TimMsgCreateInfoResult](../../class/message/V2TimMsgCreateInfoResult.md) |
| data | [V2TimMsgCreateInfoResult](../../class/message/V2TimMsgCreateInfoResult.md) | 创建结果 |

## Code example

```dart
true
```