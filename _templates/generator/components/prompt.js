module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'Atomic Designのどのレイヤーにコンポーネントを作成しますか？',
    choices: ['atoms', 'molecules', 'organisms', 'templates'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'コンポーネント名を入力してください',
    validate: (value) => {
      if (value === '') {
        return 'コンポーネント名は必須です';
      }
      return true;
    },
  },
];
