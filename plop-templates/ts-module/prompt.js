const { notEmpty } = require('../utils');
const fs = require('fs');

module.exports = {
  description: 'generate a Typescript-Vue module',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'View name please',
      validate: notEmpty('name')
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
      message: '页面要插入的位置，默认插入在view中生成文件夹'
    }
  ],
  actions: (data) => {
    const path = data.path
      ? `src/views/${data.path}/${data.name}`
      : `src/views/${data.name}`;
    fs.mkdirSync(path, { recursive: true });
    const actions = [
      {
        type: 'add',
        force: true,
        path: `${path}/index.vue`,
        templateFile: 'plop-templates/ts-module/index.hbs',
        data: {
          name: data.name + 'Manage',
          lang: data.processor
        }
      },
      {
        type: 'add',
        force: true,
        path: `${path}/components/${data.name}Create.vue`,
        templateFile: 'plop-templates/ts-module/index.hbs',
        data: {
          name: data.name + 'Create',
          lang: data.processor
        }
      }
    ];
    return actions;
  }
};
