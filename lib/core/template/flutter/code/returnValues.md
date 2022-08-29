{{if language=='zh'}}
///{{if returnValues!=null&&returnValues.length>0}}
/// 返回值详解：{{each returnValues}}
/// - {{$value.name}} {{@$value.type}} {{@$value.description}}{{/each}}{{else}}
/// 此函数无返回值
{{/if}}{{/if}}
{{if language=='en'}}///{{if returnValues!=null&&returnValues.length>0}}
/// Return value details：{{each returnValues}}
/// - {{$value.name}} {{@$value.type}} {{@$value.description}}{{/each}}{{else}}
/// This function has no return value
{{/if}}{{/if}}