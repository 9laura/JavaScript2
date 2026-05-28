
function abrirJanela(id){
    const el = document.getElementById(id)
    if(!el) return
    el.setAttribute('aria-hidden','false')
}
function fecharJanela(id){
    const el = document.getElementById(id)
    if(!el) return
    el.setAttribute('aria-hidden','true')
}

document.addEventListener('DOMContentLoaded', function(){
    // botões 
    document.getElementById('abrir-login').addEventListener('click', ()=> abrirJanela('janela-login'))
    document.getElementById('abrir-confirmacao').addEventListener('click', ()=> abrirJanela('janela-confirmacao'))
    document.getElementById('abrir-imagem').addEventListener('click', ()=> {
        const primeiraMiniatura = document.querySelector('.miniatura')
        if(primeiraMiniatura){ document.getElementById('imagem-grande').src = primeiraMiniatura.src }
        abrirJanela('janela-imagem')
    })
    document.getElementById('abrir-curiosidade').addEventListener('click', ()=> abrirJanela('janela-curiosidade'))
    document.getElementById('abrir-aviso').addEventListener('click', ()=> abrirJanela('janela-aviso'))

    document.querySelectorAll('[data-fechar]').forEach(function(btn){
        btn.addEventListener('click', function(){ fecharJanela(btn.getAttribute('data-fechar')) })
    })

    // fechar 
    document.querySelectorAll('.janela').forEach(function(janela){
        janela.addEventListener('click', function(e){ if(e.target === janela) janela.setAttribute('aria-hidden','true') })
    })

    // usuário: admin / senha: 1234
    const loginEntrar = document.getElementById('login-entrar')
    if(loginEntrar){
        loginEntrar.addEventListener('click', function(){
            const usuario = document.getElementById('login-usuario').value.trim()
            const senha = document.getElementById('login-senha').value
            const dica = document.getElementById('login-dica')
            if(usuario === 'admin' && senha === '1234'){
                dica.textContent = 'Login bem-sucedido!'
                dica.style.color = '#117a3a'
                setTimeout(()=>{ fecharJanela('janela-login'); mostrarResultado('Parabéns','Login efetuado com sucesso','success') },700)
            } else {
                dica.textContent = 'Usuário ou senha incorretos (demo: admin / 1234)'
                dica.style.color = '#9b2533'
            }
        })
    }

    // Confirmar
    document.getElementById('confirmar-sim').addEventListener('click', function(){
        fecharJanela('janela-confirmacao')
        mostrarResultado('Confirmado','Ação simulada: item excluído.','success')
    })

    // miniatura - imagem grande
    document.querySelectorAll('.miniatura').forEach(function(img){
        img.addEventListener('click', function(){
            const imagemGrande = document.getElementById('imagem-grande')
            imagemGrande.src = img.src
            abrirJanela('janela-imagem')
        })
    })

    // Curiosidades
    const curiosidades = [
        'O mel nunca estraga — foram encontrados potes comestíveis em tumbas egípcias antigas.',
        'As borboletas saboreiam com os pés.',
        'O plástico reciclado tem menos qualidade depois de cada reciclagem.',
        'Polvo tem três corações.'
    ]
    function mostrarCuriosidade(){
        const textoCuriosidade = document.getElementById('texto-curiosidade')
        textoCuriosidade.textContent = curiosidades[Math.floor(Math.random()*curiosidades.length)]
    }
    document.getElementById('curiosidade-nova').addEventListener('click', mostrarCuriosidade)

    // senha escolhida 
    const segredo = 'senha123'
    document.getElementById('enviar-adivinhar').addEventListener('click', function(){
        const valor = document.getElementById('entrada-adivinhar').value
        fecharJanela('janela-aviso')
        if(valor === segredo){
            mostrarResultado('Parabéns!','Você acertou a senha.','success')
        } else {
            mostrarResultado('Erro','Senha incorreta. Tente novamente.','error')
        }
    })

    function mostrarResultado(titulo, texto, tipo){
        const janela = document.getElementById('janela-resultado')
        document.getElementById('titulo-resultado').textContent = titulo
        document.getElementById('texto-resultado').textContent = texto
        const conteudo = janela.querySelector('.conteudo-modal')
        conteudo.classList.remove('resultado-sucesso','resultado-erro')
        if(tipo === 'success') conteudo.classList.add('resultado-sucesso')
        if(tipo === 'error') conteudo.classList.add('resultado-erro')
        abrirJanela('janela-resultado')
    }

    document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ document.querySelectorAll('.janela[aria-hidden="false"]').forEach(j=>j.setAttribute('aria-hidden','true')) } })

    mostrarCuriosidade()
})