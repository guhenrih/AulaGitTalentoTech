fetch('data.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo.");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('dynamic-text').textContent = data;
    })
    .catch(error => {
        document.getElementById('dynamic-text').textContent = 'Erro ao carregar texto dinâmico.';
        console.error(error);
    });
