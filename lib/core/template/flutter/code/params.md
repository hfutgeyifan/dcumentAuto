{{if language=='zh'}}///{{if params!=null&&params.length>0}}
/// 参数：{{each params}}
/// - {{$value.name}} {{@$value.type}} {{if $value.required==true}}必填{{else}}非必填{{/if}} {{@$value.description}}{{/each}}{{else}}
/// 此API无参数
{{/if}}{{/if}}{{if language=='en'}}
///{{if params!=null&&params.length>0}}
/// param：{{each params}}
/// - {{$value.name}} {{@$value.type}} {{if $value.required==true}}必填{{else}}非必填{{/if}} {{@$value.description}}{{/each}}{{else}}
/// This API has no parameters
{{/if}}{{/if}}
///