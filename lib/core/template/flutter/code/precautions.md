{{if language=='zh'}}///{{if precautions}}{{if precautions.info!=null&&precautions.info.length>0}}
/// 注意：{{each precautions.info}}
/// {{$value}}{{/each}}{{/if}}{{if precautions.warn!=null&&precautions.warn.length>0}}
///
/// 警告：{{each precautions.warn}}
/// {{$value}}{{/each}}{{/if}}{{/if}}{{/if}}
{{if language=='en'}}///{{if precautions}}{{if precautions.info!=null&&precautions.info.length>0}}
/// info：{{each precautions.info}}
/// {{$value}}{{/each}}{{/if}}{{if precautions.warn!=null&&precautions.warn.length>0}}
///
/// warn：{{each precautions.warn}}
/// {{$value}}{{/each}}{{/if}}{{/if}}{{/if}}