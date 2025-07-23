fetch('updateaprendizados.json')
  .then(response => response.json())
  .then(data => {
    console.log("✅ JSON carregado:", data); // 👈 ADICIONE ISSO!

    const container = document.getElementById('aprendizados');
    data.week.forEach(item => {
      const div = document.createElement('div');
      div.className = 'aprendizado';

      const linkHTML = item.link
        ? `<p><a href="${item.link}" target="_blank">${item.link}</a></p>`
        : '';

      div.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.conteudo}</p>
        ${linkHTML}
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("❌ Erro ao carregar JSON:", error); // 👈 E ISSO TAMBÉM
  });
// só para nao descarregar e sair daqui
