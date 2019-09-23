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
    }
  ],
  actions: data => {
    const name = '{{properCase name}}';
    const actions = [
      {
        type: 'add',
        force: true,
        path: `src/views/${name}/index.vue`,
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
    // console.log(actions);
    return actions;
  }
};
