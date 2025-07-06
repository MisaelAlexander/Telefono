const historyData = [
  { text: 'has actualizado la propiedad de la residencial el Roble', date: 'Justo ahora' },
  { text: 'has eliminado la propiedad de los Manzanos verdes', date: '5/05/2025' },
  { text: 'has publicado la propiedad de la calle los Abetos', date: '28/04/2025' },
  { text: 'has actualizado visita en los cantarranes', date: '19/04/2025' },
  { text: 'has publicado la propiedad de los torogocez', date: '30/03/2025' }
];

const list = document.getElementById('historyList');
historyData.forEach(({ text, date }) => {
  const li = document.createElement('li');
  li.className = 'history-item';
  li.innerHTML = `<div class="text">${text}</div><div class="date">${date}</div>`;
  list.appendChild(li);
});

document.getElementById('backBtn').addEventListener('click', () => history.back());
