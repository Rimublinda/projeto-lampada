const lampaDaImg = document.getElementById('lampada');
const menuCelular = document.getElementById("menu_celular"); 
const modoClaro = document.querySelector('.modo_claro');
const btnModoNoturno = document.querySelector('.modo_noturno');


function FuncoesDoBotoes(numero) {
        switch (numero) {
            case '1':
                lampaDaImg.setAttribute('src', './assents/img/lampada_acesa.png');
                break;

            case '2':
                lampaDaImg.setAttribute('src', './assents/img/lampada.png');
                break;

            case '3':
                lampaDaImg.setAttribute('src', './assents/img/lampada_quebrada.png');
                document.querySelector(".botao:nth-child(1)").disabled = "true";
                document.querySelector(".botao:nth-child(2)").disabled = "true";
                document.querySelector(".botao:nth-child(1)").classList.add("botoes_1e2");
                document.querySelector(".botao:nth-child(2)").classList.add("botoes_1e2");
        }
}

document.querySelector('#btn_celular').addEventListener('click', () =>{
      menuCelular.classList.toggle("active");
});

btnModoNoturno.addEventListener('click', () => {
    modoClaro.classList.toggle("modo_escuro");
    if (modoClaro.classList.contains("modo_escuro")) {
        modoClaro.href = "./assents/css/modoEscuro.css";
        btnModoNoturno.classList.remove('ph-moon-stars');
        btnModoNoturno.classList.add('ph-sun');
    } else {
        modoClaro.href = "#";
        btnModoNoturno.classList.add('ph-moon-stars');
        btnModoNoturno.classList.remove('ph-sun');
    }
});