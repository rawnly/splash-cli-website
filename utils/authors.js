const authors = new Map();

authors.set(1, { id: 1, name: 'Jessica Fadel', username: 'jessicalfadel', theme: 'white' });
authors.set(2, { id: 2, name: 'Tom Öhlin', username: 'tomohlin', theme: 'white' });
authors.set(3, { id: 3, name: 'Raul Angel', username: 'raulangel', theme: 'white' });
authors.set(4, { id: 4, name: 'chuttersnap', username: 'chuttersnap', theme: 'white' });
authors.set(5, { id: 5, name: 'Tiago Muraro', username: 'tiago', theme: 'black' });

export default authors;
export const getRandomAuthor = () => authors.get(Math.floor(Math.random() * 5) + 1);
