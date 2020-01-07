const bracketsFlip = {
  ['{']: '}',
  ['(']: ')',
  ['[']: ']',
};

let list = '({[]})'.split('');

function test(list) {
  if (list.length % 2) return 'NÃO';

  for (let i = 0; i < list.length / 2; i++) {
    if (list[list.length - i - 1] !== bracketsFlip[list[i]]) return 'NÃO';
  }
  return 'SIM';
}

console.log(test(list));
