{{if returnValues!=null&&returnValues.length>0}}
| 名称 | 数值类型 | 描述 |
| ---- | -------- | ---- |{{each returnValues}}
| {{$value.name}} | {{@$value.type}} | {{@$value.description}} |{{/each}}
{{else}}
{% hint style="info" %}
此API无返回值
{% endhint %}
{{/if}}