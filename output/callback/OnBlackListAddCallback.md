文档描述类型：callback

描述对象所属群组：user

# OnBlackListAddCallback

## 功能介绍

黑名单列表新增用户的回调最低可使用的版本号：1.1.1

废弃情况描述：此枚举已经废弃，请参考[OnBlackListAddCallback2](OnBlackListAddCallback2.md)

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

## 返回模板

```dart
OnBlackListAddCallback = void Function(
List<V2TimFriendInfo> infoList
)
```

## 返回值详解

| 名称 | 数值类型 | 描述 |
| ---- | -------- | ---- |
| infoList | List< [V2TimFriendInfo](../class/user/V2TimFriendInfo.md) > | 新增的用户信息列表 |


## 代码示例

```dart
true
```