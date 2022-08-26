{{if language=='zh'}}## 参数介绍
{{if type=='class'}}
{{each attributes}}
### {{$value.name}}

* 参数类型 : {{@$value.type}}
* 参数描述 : {{@$value.description}}
{{if $value.extra&&$value.extra.length>0}}
{% hint style="info" %}{{each $value.extra}}
{{$value}}
{{/each}}{% endhint %}
{{/if}}
{{/each}}
{{else if type=='enum'}}
| 枚举值名称 | 枚举类型描述 | 枚举值 |
| ---------- | ------------ | ------ |{{each attributes}}
| {{$value.name}} | {{@$value.description}} | {{$index}} |{{/each}}
{{/if}}{{/if}}
{{if language=='en'}}## Parameter introduction
{{if type=='class'}}
{{each attributes}}
### {{$value.name}}

* Parameter type : {{@$value.type}}
* Parameter description : {{@$value.description}}
{{if $value.extra&&$value.extra.length>0}}
{% hint style="info" %}{{each $value.extra}}
{{$value}}
{{/each}}{% endhint %}
{{/if}}
{{/each}}
{{else if type=='enum'}}
| Enumeration name | Enumeration type | value |
| ---------------- | ---------------- | ----- |{{each attributes}}
| {{$value.name}} | {{@$value.description}} | {{$index}} |{{/each}}
{{/if}}{{/if}}
