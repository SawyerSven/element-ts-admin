const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a view with Typescript',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'view name please',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: '<style>',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'Components require at least a <script> or <template> tag.';
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'processor',
      message: 'choose CSS processor',
      choices: [
        {
          name: 'less',
          value: 'less'
        },
        {
          name: 'scss',
          value: 'scss'
        },
        {
          name: 'sass',
          value: 'sass'
        },
        {
          name: 'css',
          value: 'css'
        }
      ]
    },
    {
      type: 'input',
      name: 'path',
      message: '请输入页面要插入的位置(默认在View中生成文件夹及文件)'
    }
  ],
  actions: data => {
    const name = '{{properCase name}}';
    const path = data.path ? `src/views/${data.path}/${name}.vue` : `src/views/${name}/index.vue`;
    const actions = [
      {
        type: 'add',
        force: true,
        path: path,
        templateFile: 'plop-templates/ts-view/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style'),
          lang: data.processor
        }
      }
    ];
    // console.log(actions);
    return actions;
  }
};
