const dadosAniversariantes = {
    messi: {
        nome: "Messi",
        idade: "30 anos",
        aniversario: "09 de Junho 1995",
        instagram: "messicomamor",
        decada: "Anos 70",
        classeFundo: "bg-anos70",
        corCobra: "#00f0ff", // Azul Neon Cyberpunk
        fotoCrianca: "img/messi-crianca.jpg",
        fotoAtual: "img/messi-atual.jpg",
        bio: "O cara mais 'Good Vibes' do grupo. Curte um som instrumental, roupas com estampas psicodélicas e jura que nasceu na época errada. Se deixar, passa horas falando sobre discos de vinil.",
        curiosidade: "Passou metade da adolescência tentando aprender a dançar o passinho do John Travolta."
    },
    michel: {
        nome: "Michel",
        idade: "29 anos",
        aniversario: "15 de Junho de 1996",
        instagram: "michel",
        decada: "Anos 80",
        classeFundo: "bg-anos80",
        corCobra: "#b5179e", // Roxo Synthwave Neon
        fotoCrianca: "img/michel-crianca.jpg",
        fotoAtual: "perfil-michel.jpg",
        bio: "Viciado em fliperama, trilhas sonoras cheias de sintetizadores e filmes de ficção científica dos anos 80. É o mestre dos trocadilhos infames da roda.",
        curiosidade: "Tem uma coleção secreta de fitas cassete guardada no armário."
    },
    charlinho: {
        nome: "Charlinho",
        idade: "21 anos",
        aniversario: "30 de Maio de 2004",
        instagram: "charles_edu.jr",
        decada: "Anos 90",
        classeFundo: "bg-anos90",
        corCobra: "#ffee32", // Amarelo Laser Neon
        fotoCrianca: "charlinhokid.jpg",
        fotoAtual: "charlinhohj.jpg",
        bio: "Se o vocalista do Arctic Monkeys tivesse um filho com o Sigmund Freud, esse filho seria o Charles. Profissional em ser um artista amador, de vocalista da sua infame e falida banda a actor, um verdadeiro sex symbol indie da geração Z Itapetininga (sqn). Entre poemas e muita psicanálise de boteco, sua personalidade é um mix de humor irônico e autodepreciativo, entregando sempre cortisol alto e carisma, o gêmeo mais novo da festa, campeão invicto de Mario Kart, palmeirense, namorado da Helen e hater do Nicolas ferreira ",
        curiosidade: "é o primo mais novo do gêmeo Rachid"
    },
    rachid: {
        nome: "Rachid",
        idade: "28 anos",
        aniversario: "20 de Junho de 1997",
        instagram: "po_rachid",
        decada: "Anos 2000",
        classeFundo: "bg-anos2000",
        corCobra: "#ffffff", // Branco Puro com Brilho Neon Opalecente
        fotoCrianca: "img/rachid-crianca.jpg",
        fotoAtual: "rachidpp.jpeg",
        bio: "A nostalgia do Orkut e do MSN vive aqui! Curte franjas, as melhores músicas Emocore do início do milênio e sente saudades de quando a internet caía quando a mãe atendia o telefone.",
        curiosidade: "Seu primeiro subnick do MSN continha letras coloridas e frases filosóficas profundas."
    },
    vivi: {
        nome: "Vivi",
        idade: "22 anos",
        aniversario: "11 de Junho 2003",
        instagram: "vivi_exemplo",
        decada: "Anos 2010",
        classeFundo: "bg-anos2010",
        corCobra: "#ff007f", // Rosa Neon Outrun
        fotoCrianca: "img/vivi-crianca.jpg",
        fotoAtual: "perfil-vivi.jpg",
        bio: "A rainha das redes sociais e criadora nata de memes. Sabe todas as trends antigas e atuais, domina o feed e não deixa passar uma única referência da cultura pop moderna.",
        curiosidade: "Foi responsável por viralizar um áudio local que hoje todo mundo usa no grupo."
    }
};

const modal = document.getElementById("perfilModal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close-modal");
const containerModal = document.getElementById("modalDataContainer");
const botoesPerfil = document.querySelectorAll(".btn-perfil");

let jogoIntervalo;

botoesPerfil.forEach(botao => {
    botao.addEventListener("click", () => {
        const chave = botao.getAttribute("data-aniversariante");
        const pessoa = dadosAniversariantes[chave];

        if (pessoa) {
            modalContent.className = "modal-content"; 
            modalContent.classList.add(pessoa.classeFundo);

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
                    <p><strong>📅 Data de Aniversário:</strong> ${pessoa.aniversario}</p>
                    <p><strong>Idade:</strong> ${pessoa.idade}</p>
                    <p><strong>📸 Instagram:</strong> <a href="https://instagram.com/${pessoa.instagram}" target="_blank" style="color: #ff007f; text-decoration: none; font-weight: bold;">@${pessoa.instagram}</a></p>
                    <p><strong>Quem é:</strong> ${pessoa.bio}</p>
                    <p class="curiosidade-box"><strong>💡 Curiosidade Cósmica:</strong> ${pessoa.curiosidade}</p>
                </div>
            `;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            inicializarJogoSnake(pessoa.corCobra);
        }
    });
});

closeModalBtn.addEventListener("click", fecharModal);
window.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });

function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    clearInterval(jogoIntervalo); 
}

/* ==========================================================================
   ENGINE DO JOGO DA COBRINHA (SNAKE RETRO RESTRUTURED)
   ========================================================================== */
function inicializarJogoSnake(corDaCobra) {
    const containerJogo = document.getElementById("container-jogo");
    
   const dadosAniversariantes = {
    messi: {
        nome: "Messi",
        idade: "32 anos",
        aniversario: "24 de Junho",
        instagram: "leomessi",
        decada: "Anos 70",
        classeFundo: "bg-anos70",
        corCobra: "#00f0ff", // Azul Neon Cyberpunk
        fotoCrianca: "img/messi-crianca.jpg",
        fotoAtual: "img/messi-atual.jpg",
        bio: "O cara mais 'Good Vibes' do grupo. Curte um som instrumental, roupas com estampas psicodélicas e jura que nasceu na época errada. Se deixar, passa horas falando sobre discos de vinil.",
        curiosidade: "Passou metade da adolescência tentando aprender a dançar o passinho do John Travolta."
    },
    michel: {
        nome: "Michel",
        idade: "28 anos",
        aniversario: "05 de Junho",
        instagram: "michel_exemplo",
        decada: "Anos 80",
        classeFundo: "bg-anos80",
        corCobra: "#b5179e", // Roxo Synthwave Neon
        fotoCrianca: "img/michel-crianca.jpg",
        fotoAtual: "perfil-michel.jpg",
        bio: "Viciado em fliperama, trilhas sonoras cheias de sintetizadores e filmes de ficção científica dos anos 80. É o mestre dos trocadilhos infames da roda.",
        curiosidade: "Tem uma coleção secreta de fitas cassete guardada no armário."
    },
    charlinho: {
        nome: "Charlinho",
        idade: "21 anos",
        aniversario: "12 de Junho",
        instagram: "charles_exemplo",
        decada: "Anos 90",
        classeFundo: "bg-anos90",
        corCobra: "#ffee32", // Amarelo Laser Neon
        fotoCrianca: "charlinhokid.jpg",
        fotoAtual: "charlinhohj.jpg",
        bio: "Se o vocalista do Arctic Monkeys tivesse um filho com o Sigmund Freud, esse filho seria o Charles. Profissional em ser um artista amador, de vocalista da sua infame e falida banda a actor, um verdadeiro sex symbol indie da geração Z Itapetininga (sqn). Entre poemas e muita psicanálise de boteco, sua personalidade é um mix de humor irônico e autodepreciativo, entregando sempre cortisol alto e carisma, o gêmeo mais novo da festa, campeão invicto de Mario Kart, palmeirense, namorado da Helen e hater do Nicolas ferreira ",
        curiosidade: "é o primo mais novo do gêmeo Rachid"
    },
    rachid: {
        nome: "Rachid",
        idade: "25 anos",
        aniversario: "18 de Junho",
        instagram: "rafael_rachid",
        decada: "Anos 2000",
        classeFundo: "bg-anos2000",
        corCobra: "#ffffff", // Branco Puro com Brilho Neon Opalecente
        fotoCrianca: "img/rachid-crianca.jpg",
        fotoAtual: "rachidpp.jpeg",
        bio: "A nostalgia do Orkut e do MSN vive aqui! Curte franjas, as melhores músicas Emocore do início do milênio e sente saudades de quando a internet caía quando a mãe atendia o telefone.",
        curiosidade: "Seu primeiro subnick do MSN continha letras coloridas e frases filosóficas profundas."
    },
    vivi: {
        nome: "Vivi",
        idade: "26 anos",
        aniversario: "15 de Junho",
        instagram: "vivi_exemplo",
        decada: "Anos 2010",
        classeFundo: "bg-anos2010",
        corCobra: "#ff007f", // Rosa Neon Outrun
        fotoCrianca: "img/vivi-crianca.jpg",
        fotoAtual: "perfil-vivi.jpg",
        bio: "A rainha das redes sociais e criadora nata de memes. Sabe todas as trends antigas e atuais, domina o feed e não deixa passar uma única referência da cultura pop moderna.",
        curiosidade: "Foi responsável por viralizar um áudio local que hoje todo mundo usa no grupo."
    }
};

const modal = document.getElementById("perfilModal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close-modal");
const containerModal = document.getElementById("modalDataContainer");
const botoesPerfil = document.querySelectorAll(".btn-perfil");

let jogoIntervalo;

botoesPerfil.forEach(botao => {
    botao.addEventListener("click", () => {
        const chave = botao.getAttribute("data-aniversariante");
        const pessoa = dadosAniversariantes[chave];

        if (pessoa) {
            modalContent.className = "modal-content"; 
            modalContent.classList.add(pessoa.classeFundo);

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
                    <p><strong>📅 Data de Aniversário:</strong> ${pessoa.aniversario}</p>
                    <p><strong>Idade:</strong> ${pessoa.idade}</p>
                    <p><strong>📸 Instagram:</strong> <a href="https://instagram.com/${pessoa.instagram}" target="_blank" style="color: #ff007f; text-decoration: none; font-weight: bold;">@${pessoa.instagram}</a></p>
                    <p><strong>Quem é:</strong> ${pessoa.bio}</p>
                    <p class="curiosidade-box"><strong>💡 Curiosidade Cósmica:</strong> ${pessoa.curiosidade}</p>
                </div>
            `;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            inicializarJogoSnake(pessoa.corCobra);
        }
    });
});

closeModalBtn.addEventListener("click", fecharModal);
window.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });

function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    clearInterval(jogoIntervalo); 
}

/* ==========================================================================
   ENGINE DO JOGO DA COBRINHA (SNAKE RETRO RESTRUTURED)
   ========================================================================== */
function inicializarJogoSnake(corDaCobra) {
    const containerJogo = document.getElementById("container-jogo");
    // Injeta a estrutura contendo placar, botão e as instruções de controle
    containerJogo.innerHTML = `
        <div class="controle-game">
            <div class="placar-game" style="text-shadow: 0 0 8px ${corDaCobra}">Score: <span id="score">0</span></div>
            <button id="btnNovoJogo" class="btn-restart-snake" style="color: ${corDaCobra}; border-color: ${corDaCobra}; box-shadow: 0 0 5px ${corDaCobra}">Novo Jogo</button>
        </div>
        <p style="color: #a2a2b5; font-size: 0.85rem; margin: 0 0 10px 0; font-family: 'Poppins', sans-serif;">Use as teclas <strong>W, A, S, D</strong> ou as <strong>Setas</strong> do teclado para jogar.</p>
        <canvas id="snakeCanvas" width="280" height="280" style="box-shadow: 0 0 15px ${corDaCobra}44"></canvas>
    `;

    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    const scoreElement = document.getElementById("score");
    const btnNovoJogo = document.getElementById("btnNovoJogo");

    const tamanhoBloco = 14; 
    let score;
    let snake;
    let dx;
    let dy;
    let comida;

    // Vincula o clique do botão físico para resetar a engine do canvas internamente
    btnNovoJogo.addEventListener("click", () => {
        resetEngine();
    });

    function resetEngine() {
        score = 0;
        scoreElement.innerText = score;
        snake = [{ x: tamanhoBloco * 5, y: tamanhoBloco * 5 }];
        dx = tamanhoBloco;
        dy = 0;
        comida = geradorDeComida();
        
        document.onkeydown = mudarDirecao;
        clearInterval(jogoIntervalo);
        jogoIntervalo = setInterval(atualizarJogo, 100);
    }

    function atualizarJogo() {
        if (detectarFimDeJogo()) {
            clearInterval(jogoIntervalo);
            ctx.fillStyle = "rgba(255, 0, 85, 0.95)";
            ctx.font = "20px 'Righteous', cursive";
            ctx.textAlign = "center";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#ff0055";
            ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
            ctx.shadowBlur = 0;
            return;
        }

        ctx.fillStyle = "#05030a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cabeca = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(cabeca);

        if (snake[0].x === comida.x && snake[0].y === comida.y) {
            score += 10;
            scoreElement.innerText = score;
            comida = geradorDeComida();
        } else {
            snake.pop(); 
        }

        // Comida: Vermelha Elétrica
        ctx.fillStyle = "#ff0055";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ff0055";
        ctx.fillRect(comida.x, comida.y, tamanhoBloco - 1, tamanhoBloco - 1);

        // Cobrinha: Cor Neon customizada do aniversariante ativa
        ctx.fillStyle = corDaCobra;
        ctx.shadowBlur = 12;
        ctx.shadowColor = corDaCobra;
        snake.forEach(bloco => {
            ctx.fillRect(bloco.x, bloco.y, tamanhoBloco - 1, tamanhoBloco - 1);
        });
        
        ctx.shadowBlur = 0;
    }

    function mudarDirecao(evento) {
        const TECLA_ESQUERDA = 37, TECLA_A = 65;
        const TECLA_DIREITA = 39, TECLA_D = 68;
        const TECLA_CIMA = 38, TECLA_W = 87;
        const TECLA_BAIXO = 40, TECLA_S = 83;

        const codigoTecla = evento.keyCode;
        const subindo = dy === -tamanhoBloco;
        const descendo = dy === tamanhoBloco;
        const indoDireita = dx === tamanhoBloco;
        const indoEsquerda = dx === -tamanhoBloco;

        if ((codigoTecla === TECLA_ESQUERDA || codigoTecla === TECLA_A) && !indoDireita) { dx = -tamanhoBloco; dy = 0; }
        if ((codigoTecla === TECLA_CIMA || codigoTecla === TECLA_W) && !descendo) { dx = 0; dy = -tamanhoBloco; }
        if ((codigoTecla === TECLA_DIREITA || codigoTecla === TECLA_D) && !indoEsquerda) { dx = tamanhoBloco; dy = 0; }
        if ((codigoTecla === TECLA_BAIXO || codigoTecla === TECLA_S) && !subindo) { dx = 0; dy = tamanhoBloco; }
    }

    function geradorDeComida() {
        return {
            x: Math.floor(Math.random() * (canvas.width / tamanhoBloco)) * tamanhoBloco,
            y: Math.floor(Math.random() * (canvas.height / tamanhoBloco)) * tamanhoBloco
        };
    }

    function detectarFimDeJogo() {
        if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) return true;
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
        }
        return false;
    }

    // Inicialização da primeira rodada do motor
    resetEngine();
}

/* ==========================================================================
   FORMULÁRIO DE RSVP
   ========================================================================== */
document.getElementById("formRsvp").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = this;
    const data = new FormData(form);
    const botaoSubmit = form.querySelector(".btn-submit");
    
    botaoSubmit.innerText = "Enviando...";
    botaoSubmit.disabled = true;

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert(`Sensacional! Sua presença foi registrada com sucesso. 🎉`);
            form.reset();
        } else {
            alert(`Ops! Ocorreu um erro ao enviar. Tente novamente.`);
        }
    }).catch(() => {
        alert(`Erro de conexão. Verifique sua internet.`);
    }).finally(() => {
        botaoSubmit.innerText = "Enviar Confirmação";
        botaoSubmit.disabled = false;
    });
});
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    const scoreElement = document.getElementById("score");
    const btnNovoJogo = document.getElementById("btnNovoJogo");

    const tamanhoBloco = 14; 
    let score;
    let snake;
    let dx;
    let dy;
    let comida;

    // Vincula o clique do botão físico para resetar a engine do canvas internamente
    btnNovoJogo.addEventListener("click", () => {
        resetEngine();
    });

    function resetEngine() {
        score = 0;
        scoreElement.innerText = score;
        snake = [{ x: tamanhoBloco * 5, y: tamanhoBloco * 5 }];
        dx = tamanhoBloco;
        dy = 0;
        comida = geradorDeComida();
        
        document.onkeydown = mudarDirecao;
        clearInterval(jogoIntervalo);
        jogoIntervalo = setInterval(atualizarJogo, 100);
    }

    function atualizarJogo() {
        if (detectarFimDeJogo()) {
            clearInterval(jogoIntervalo);
            ctx.fillStyle = "rgba(255, 0, 85, 0.95)";
            ctx.font = "20px 'Righteous', cursive";
            ctx.textAlign = "center";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#ff0055";
            ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
            ctx.shadowBlur = 0;
            return;
        }

        ctx.fillStyle = "#05030a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cabeca = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(cabeca);

        if (snake[0].x === comida.x && snake[0].y === comida.y) {
            score += 10;
            scoreElement.innerText = score;
            comida = geradorDeComida();
        } else {
            snake.pop(); 
        }

        // Comida: Vermelha Elétrica
        ctx.fillStyle = "#ff0055";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ff0055";
        ctx.fillRect(comida.x, comida.y, tamanhoBloco - 1, tamanhoBloco - 1);

        // Cobrinha: Cor Neon customizada do aniversariante ativa
        ctx.fillStyle = corDaCobra;
        ctx.shadowBlur = 12;
        ctx.shadowColor = corDaCobra;
        snake.forEach(bloco => {
            ctx.fillRect(bloco.x, bloco.y, tamanhoBloco - 1, tamanhoBloco - 1);
        });
        
        ctx.shadowBlur = 0;
    }

    function mudarDirecao(evento) {
        const TECLA_ESQUERDA = 37, TECLA_A = 65;
        const TECLA_DIREITA = 39, TECLA_D = 68;
        const TECLA_CIMA = 38, TECLA_W = 87;
        const TECLA_BAIXO = 40, TECLA_S = 83;

        const codigoTecla = evento.keyCode;
        const subindo = dy === -tamanhoBloco;
        const descendo = dy === tamanhoBloco;
        const indoDireita = dx === tamanhoBloco;
        const indoEsquerda = dx === -tamanhoBloco;

        if ((codigoTecla === TECLA_ESQUERDA || codigoTecla === TECLA_A) && !indoDireita) { dx = -tamanhoBloco; dy = 0; }
        if ((codigoTecla === TECLA_CIMA || codigoTecla === TECLA_W) && !descendo) { dx = 0; dy = -tamanhoBloco; }
        if ((codigoTecla === TECLA_DIREITA || codigoTecla === TECLA_D) && !indoEsquerda) { dx = tamanhoBloco; dy = 0; }
        if ((codigoTecla === TECLA_BAIXO || codigoTecla === TECLA_S) && !subindo) { dx = 0; dy = tamanhoBloco; }
    }

    function geradorDeComida() {
        return {
            x: Math.floor(Math.random() * (canvas.width / tamanhoBloco)) * tamanhoBloco,
            y: Math.floor(Math.random() * (canvas.height / tamanhoBloco)) * tamanhoBloco
        };
    }

    function detectarFimDeJogo() {
        if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) return true;
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
        }
        return false;
    }

    // Inicialização da primeira rodada do motor
    resetEngine();
}

/* ==========================================================================
   FORMULÁRIO DE RSVP
   ========================================================================== */
document.getElementById("formRsvp").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = this;
    const data = new FormData(form);
    const botaoSubmit = form.querySelector(".btn-submit");
    
    botaoSubmit.innerText = "Enviando...";
    botaoSubmit.disabled = true;

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert(`Sensacional! Sua presença foi registrada com sucesso. 🎉`);
            form.reset();
        } else {
            alert(`Ops! Ocorreu um erro ao enviar. Tente novamente.`);
        }
    }).catch(() => {
        alert(`Erro de conexão. Verifique sua internet.`);
    }).finally(() => {
        botaoSubmit.innerText = "Enviar Confirmação";
        botaoSubmit.disabled = false;
    });
});