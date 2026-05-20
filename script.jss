const dadosAniversariantes = {
    messi: {
        nome: "Messi",
        idade: "32 anos",
        decada: "Anos 70",
        classeFundo: "bg-anos70", // Classe CSS do background
        fotoCrianca: "img/messi-crianca.jpg",
        fotoAtual: "img/messi-atual.jpg",
        bio: "O cara mais 'Good Vibes' do grupo. Curte um som instrumental, roupas com estampas psicodélicas e jura que nasceu na época errada. Se deixar, passa horas falando sobre discos de vinil.",
        curiosidade: "Passou metade da adolescência tentando aprender a dançar o passinho do John Travolta."
    },
    michel: {
        nome: "Michel",
        idade: "28 anos",
        decada: "Anos 80",
        classeFundo: "bg-anos80",
        fotoCrianca: "img/michel-crianca.jpg",
        fotoAtual: "img/michel-atual.jpg",
        bio: "Viciado em fliperama, trilhas sonoras cheias de sintetizadores e filmes de ficção científica dos anos 80. É o mestre dos trocadilhos infames da roda.",
        curiosidade: "Tem uma coleção secreta de fitas cassete guardada no armário."
    },
    charlinho: {
        nome: "Charlinho",
        idade: "30 anos",
        decada: "Anos 90",
        classeFundo: "bg-anos90",
        fotoCrianca: "img/charlinho-crianca.jpg",
        fotoAtual: "img/charlinho-atual.jpg",
        bio: "O autêntico cria dos anos 90. Camisa xadrez de flanela amarrada na cintura, fã de carteirinha de bandas de rock alternativo e adora colecionar relíquias que os mais jovens nem sabem o que é.",
        curiosidade: "Ainda lembra de cabeça o código para rebobinar fita VHS sem estragar."
    },
    rachid: {
        nome: "Rachid",
        idade: "25 anos",
        decada: "Anos 2000",
        classeFundo: "bg-anos2000",
        fotoCrianca: "img/rachid-crianca.jpg",
        fotoAtual: "img/rachid-atual.jpg",
        bio: "A nostalgia do Orkut e do MSN vive aqui! Curte franjas, as melhores músicas Emocore do início do milênio e sente saudades de quando a internet caía quando a mãe atendia o telefone.",
        curiosidade: "Seu primeiro subnick do MSN continha letras coloridas e frases filosóficas profundas."
    },
    vivi: {
        nome: "Vivi",
        idade: "26 anos",
        decada: "Anos 2010",
        classeFundo: "bg-anos2010",
        fotoCrianca: "img/vivi-crianca.jpg",
        fotoAtual: "img/vivi-atual.jpg",
        bio: "A rainha das redes sociais e criadora nata de memes. Sabe todas as trends antigas e atuais, domina o feed e não deixa passar uma única referência da cultura pop moderna.",
        curiosidade: "Foi responsável por viralizar um áudio local que hoje todo mundo usa no grupo."
    }
};

const modal = document.getElementById("perfilModal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close-modal");
const containerModal = document.getElementById("modalDataContainer");
const botoesPerfil = document.querySelectorAll(".btn-perfil");

botoesPerfil.forEach(botao => {
    botao.addEventListener("click", () => {
        const chave = botao.getAttribute("data-aniversariante");
        const pessoa = dadosAniversariantes[chave];

        if (pessoa) {
            // Limpa classes de background anteriores para não acumular
            modalContent.className = "modal-content"; 
            // Adiciona a classe de background específica da década desse aniversariante
            modalContent.classList.add(pessoa.classeFundo);

            // Injeta as informações e a estrutura do "Antes e Depois" de fotos
            containerModal.innerHTML = `
                <div class="perfil-header">
                    <h2>${pessoa.nome}</h2>
                    <span class="badge-decada">${pessoa.decada}</span>
                </div>

                <div class="fotos-comparativo">
                    <div class="foto-box">
                        <span>👶 Criança</span>
                        <img src="${pessoa.fotoCrianca}" alt="${pessoa.nome} Criança" class="foto-linha-tempo" onerror="this.src='https://via.placeholder.com/200x250?text=Foto+Criança'">
                    </div>
                    <div class="foto-box">
                        <span>⚡ Atual</span>
                        <img src="${pessoa.fotoAtual}" alt="${pessoa.nome} Atual" class="foto-linha-tempo" onerror="this.src='https://via.placeholder.com/200x250?text=Foto+Atual'">
                    </div>
                </div>

                <div class="perfil-info">
                    <p><strong>Idade:</strong> ${pessoa.idade}</p>
                    <p><strong>Quem é:</strong> ${pessoa.bio}</p>
                    <p class="curiosidade-box"><strong>💡 Curiosidade Cósmica:</strong> ${pessoa.curiosidade}</p>
                </div>
            `;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });
});

closeModalBtn.addEventListener("click", fecharModal);
window.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });

function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

document.getElementById("formRsvp").addEventListener("submit", function(e) {
    e.preventDefault();
    alert(`Obrigado! Sua presença foi registrada.`);
    this.reset();
});