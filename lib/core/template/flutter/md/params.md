{{if language=='zh'}}## 参数详解
{{if params!=null&&params.length>0}}
| 参数名称 | 参数类型 | 是否必填 | 描述 |
| -------- | -------- | -------- | ---- |{{each params}}
| {{$value.name}} | {{@$value.type}} | {{if $value.required==true}}是{{else}}否{{/if}} | {{@$value.description}} |{{/each}}
{{else}}
{% hint style="info" %}
此API无参数
{% endhint %}
{{/if}}{{/if}}
{{if language=='en'}}## Parameter details
{{if params!=null&&params.length>0}}
| Parameter name | Parameter type | Required | Description |
| -------------- | -------------- | -------- | ----------- |{{each params}}
| {{$value.name}} | {{@$value.type}} | {{if $value.required==true}}yes{{else}}no{{/if}} | {{@$value.description}} |{{/each}}
{{else}}
{% hint style="info" %}
This API has no parameters
{% endhint %}
{{/if}}{{/if}}