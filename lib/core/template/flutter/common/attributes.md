{{if type=='class'}}
{{each attributes}}
### {{$value.name}}

* 参数类型 : {{@$value.type}}
* 参数描述 : {{$value.description}}
{{if $value.extra.length>0}}
{% hint style="info" %}{{each $value.extra}}
{{$value}}
{{/each}}{% endhint %}
{{/if}}
{{/each}}
{{else if type=='enum'}}
| 枚举值名称 | 枚举类型描述 | 枚举值 |
| ---------- | ------------ | ------ |{{each attributes}}
| {{$value.name}} | {{$value.description}} | {{$index}} |{{/each}}
{{/if}}
