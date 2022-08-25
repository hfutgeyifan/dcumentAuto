{{if precautions}}
{{if precautions.info!=null&&precautions.info.length>0}}
{% hint style="info" %}{{each precautions.info}}
{{$value}}{{/each}}
{% endhint %}
{{/if}}
{{if precautions.warn!=null&&precautions.warn.length>0}}
{% hint style="danger" %}{{each precautions.warn}}
{{$value}}{{/each}}
{% endhint %}
{{/if}}
{{/if}}