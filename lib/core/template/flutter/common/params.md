
{{if params!=null&&params.length>0}}
| 参数名称 | 参数类型 | 是否必填 | 描述 |
| -------- | -------- | -------- | ---- |{{each params}}
| {{$value.name}} | {{@$value.type}} | {{if $value.required==true}}是{{else}}否{{/if}} | {{$value.description}} |{{/each}}
{{else}}
{% hint style="info" %}
此API无参数
{% endhint %}
{{/if}}