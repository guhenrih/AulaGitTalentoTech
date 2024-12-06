fetch('data.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('dynamic-text').textContent = data;
    })
    .catch(error => {
        document.getElementById('dynamic-text').textContent = 'Erro ao carregar texto dinâmico.';
    });
