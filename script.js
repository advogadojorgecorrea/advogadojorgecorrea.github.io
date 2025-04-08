// 🚀 Função para carregar conteúdos HTML em elementos específicos
function carregarComponentes() {

  // 📌 Carregar o header.html na div com id "meu-header"
  fetch('header.html') // Caminho do arquivo que será carregado
    .then(response => response.text()) // Converte a resposta para texto
    .then(data => {
      document.getElementById('meu-header').innerHTML = data; // Insere o conteúdo na div
    })
    .catch(error => {
      console.error('Erro ao carregar o header:', error); // Mostra erro no console se falhar
    });

 // 📌 Carregar o conteudo.html na div com id "conteudo"
  fetch('home.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('conteudo').innerHTML = data;
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo:', error);
    });


  // 📌 Carregar o footer.html na div com id "meu-footer"
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('meu-footer').innerHTML = data;
    })
    .catch(error => {
      console.error('Erro ao carregar o footer:', error);
    });

} // 🔚 Fim da função carregarComponentes()

// ✅ Chamada da função quando a página estiver carregada
document.addEventListener('DOMContentLoaded', carregarComponentes);

/*
OBS: CASO NAO FUNCIONE TENTE PELO LOCAL HOST.
✅ OPÇÃO 1: Usar o Python para criar um servidor local (super fácil!)
🧱 Passo a passo:
1. Abra o terminal no Linux Mint.
2. Navegue até a pasta do seu projeto HTML:    
Exemplo (cd /home/seu-usuario/Documentos/meu-projeto)
3.Digite o codigo:
python3 -m http.server
4.No navegador:
http://localhost:8000
5. curtir a pagina kkk!
*/


  
/*###################################################################*/
/*###################################################################*/
/*###################################################################*/

// 📌 Função chamada ao mudar a opção do <select>
function trocarConteudo() {

  // 🧠 Pegamos o elemento <select> pelo ID
  const seletor = document.getElementById("seletorConteudo");

  // 📥 Pegamos o valor da opção selecionada (que é o caminho da página)
  const paginaSelecionada = seletor.value;

  // 🔁 Redirecionamos o navegador para a página escolhida
  window.location.href = paginaSelecionada;

} // 🔚 Fim da função trocarConteudo()

