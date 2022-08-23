---
description: 黑名单列表新增用户的回调
---

# OnBlackListAddCallback

## 功能介绍

黑名单列表新增用户的回调

1.1.1

此枚举已经废弃，请参考[OnBlackListAddCallback2]()


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


## 回调函数模版

```dart
OnBlackListAddCallback = void Function(
List<V2TimFriendInfo> infoList
)
```

## 参数详解


| 名称 | 数值类型 | 描述 |
| ---- | -------- | ---- |
| infoList | List< [V2TimFriendInfo]() > | 新增的用户信息列表 |


## 代码示例

true
