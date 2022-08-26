{{if language=='zh'}}## 返回值详解
{{if returnValues!=null&&returnValues.length>0}}
| 名称 | 数值类型 | 描述 |
| ---- | -------- | ---- |{{each returnValues}}
| {{$value.name}} | {{@$value.type}} | {{@$value.description}} |{{/each}}
{{else}}
{% hint style="info" %}
此函数无返回值
{% endhint %}
{{/if}}{{/if}}
{{if language=='en'}}## Return value details
{{if returnValues!=null&&returnValues.length>0}}
| name | type | description |
| ---- | ---- | ----------- |{{each returnValues}}
| {{$value.name}} | {{@$value.type}} | {{@$value.description}} |{{/each}}
{{else}}
{% hint style="info" %}
This function has no return value
{% endhint %}
{{/if}}{{/if}}