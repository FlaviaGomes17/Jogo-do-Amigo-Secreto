//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. Array para armazenar os amigos
let amigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("⚠️ Digite um nome válido!");
    return;
  }

  amigos.push(nome); // adiciona no array
  input.value = ""; // limpa o campo
  atualizarLista(); // atualiza a lista
}

// 3. Função para atualizar a lista de amigos
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa antes de renderizar

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });
}

// 4. Função para sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ Adicione pelo menos um amigo!");
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${sorteado}</strong></li>`;
}

