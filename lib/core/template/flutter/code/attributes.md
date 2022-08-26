{{if type=='class'}}
/// 参数描述：{{each attributes}}
/// - {{$value.name}} {{@$value.type}} {{@$value.description}}{{if $value.extra&&$value.extra.length>0}}{{each $value.extra}}
/// {{$value}}{{/each}}{{/if}}{{/each}}{{else if type=='enum'}}
/// 枚举值描述：{{each attributes}}
/// - {{$value.name}} {{@$value.description}} {{$index}} {{/each}}{{/if}}