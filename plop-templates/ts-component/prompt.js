const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate vue component by typescript',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please',
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
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
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
      type: 'confirm',
      name: 'isGlobal',
      message: 'is a global component?',
      default: false
    }
  ],
  actions: data => {
    const name = '{{properCase name}}';
    const path = data.isGlobal
      ? `src/components/global/${name}/index.vue`
      : `src/components/${name}/index.vue`;
    const actions = [
      {
        type: 'add',
        path: path,
        templateFile: 'plop-templates/ts-component/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style'),
          lang: data.processor
        }
      }
    ];
    console.log(actions);
    return actions;
  }
};
