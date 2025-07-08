fetch('updateaprendizados.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('aprendizados');
    data.week.forEach(item => {
      const div = document.createElement('div');
      div.className = 'aprendizado';

      // Se houver link, adiciona
      const linkHTML = item.link ? `<p><a href="${item.link}" target="_blank">${item.link}</a></p>` : "";

      div.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.conteudo}</p>
        ${linkHTML}
      `;

      container.appendChild(div);
    });
  });
