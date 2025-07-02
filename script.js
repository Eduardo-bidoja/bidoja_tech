fetch('updateaprendizados.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('aprendizados');
    data.semanas.forEach(item => {
      const div = document.createElement('div');
      div.className = 'aprendizado';
      div.innerHTML = `<h3>${item.titulo}</h3><p>${item.conteudo}</p>`;
      container.appendChild(div);
    });
  });
