{{if language=='zh'}}
{{if type=='class'}}  /// 参数描述：
  /// - {{attribute.name}} {{@attribute.type}} {{@attribute.description}}{{if attribute.extra&&attribute.extra.length>0}}{{each attribute.extra}}
  /// {{$value}}{{/each}}{{/if}}{{else if type=='enum'}}  /// 枚举值描述：
  /// - {{attribute.name}} {{@attribute.description}}{{/if}}{{/if}}{{if language=='en'}}
{{if type=='class'}}  /// Attribute description：
  /// - {{attribute.name}} {{@attribute.type}} {{@attribute.description}}{{if attribute.extra&&attribute.extra.length>0}}{{each attribute.extra}}
  /// {{$value}}{{/each}}{{/if}}{{else if type=='enum'}}  /// Enumeration description：
  /// - {{attribute.name}} {{@attribute.description}}{{/if}}{{/if}}