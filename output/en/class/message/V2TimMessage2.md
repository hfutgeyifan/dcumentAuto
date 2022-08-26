文档描述类型：class

描述对象所属群组：message

# V2TimMessage2

## 功能介绍

消息属性最低可使用的版本号：1.1.1

废弃情况描述：此关键类已经废弃，请参考[V2TimMessage2](V2TimMessage2.md)

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

## 参数介绍


### msgID

* 参数类型 : String
* 参数描述 : 消息ID(消息创建的时候为 nil,消息发送的时候会生成)


### status

* 参数类型 : int
* 参数描述 : 消息发送状态

{% hint style="info" %}
1:消息发送中

2:消息发送成功

3:消息发送失败

4:消息被删除

5:导入到本地的消息

6:被撤销的消息
{% endhint %}


### textElem

* 参数类型 : [V2TimTextElem](../../enum/V2TimTextElem.md)
* 参数描述 : 消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容



