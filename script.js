// Mudando a cor e a fonte de todas as palavras "Resumo", que esta em varias <section> diferente de uma so vez com o JS
// Seleciona todas as seções do documento
let sections = document.querySelectorAll("section");

// Itera sobre todas as seções e altera a cor e fonte da palavra "resumo"
sections.forEach(function(section) {
    // Encontra todas as palavras "resumo" dentro do conteúdo da seção
    let content = section.innerHTML;
    // Substitui a palavra "resumo" por uma versão envolta em uma tag <span> com a cor e fonte desejada
    section.innerHTML = content.replace(/\b(resumo)\b/gi, '<span style="color: rgb(104, 1, 1); font-size: 22px; font-family:\'Roboto Slab\', serif; font-weight: 700;">$1</span>');
});
