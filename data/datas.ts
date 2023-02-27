
type TodoListType = {
  id: number
  title: string;
  category: string;
}

export const categorys = [
    'Estudo',
    'Exercício',
    'Compras',
    'Casa',
    'Reunião',
    'Trabalho',
    'Conserto'
]

export const todos: TodoListType[] = [
  {id: 1, title: 'Estudar matemática', category: 'Estudo'},
  {id: 2, title: 'Jiu-jitsu', category: 'Exercício'},
  {id: 3, title: 'Comprar ração', category: 'Compras'},
  {id: 4, title: 'Enviar relatório', category: 'Trabalho'},
  {id: 5, title: 'Reunião com Fulano', category: 'Reunião'},
  {id: 6, title: 'Lavar banheiro', category: 'Casa'},
  {id: 7, title: 'Arrumar armário', category: 'Conserto'}
];