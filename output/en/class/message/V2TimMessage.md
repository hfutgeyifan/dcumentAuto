
Document description type：class

Group：message

# V2TimMessage


## introduction

消息属性

Minimum usable version：1.1.1

Description of abandonment：此关键类已经废弃，请参考[V2TimMessage2](V2TimMessage2.md)

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


## Parameter introduction


### msgID

* Parameter type : String
* Parameter description : 消息ID(消息创建的时候为 nil,消息发送的时候会生成)


### status

* Parameter type : int
* Parameter description : 消息发送状态

{% hint style="info" %}
1:消息发送中

2:消息发送成功

3:消息发送失败

4:消息被删除

5:导入到本地的消息

6:被撤销的消息
{% endhint %}


### textElem

* Parameter type : [V2TimTextElem](../../enum/V2TimTextElem.md)
* Parameter description : 消息类型为 V2TIM_ELEM_TYPE_TEXT,textElem 会存储文本消息内容



