const lamps = document.querySelector('.lamps');
const bit_view = document.querySelector('.bit-view h1');
const input_bit = document.getElementById('input-bit');

const bitwise = (bit) => {

    //bit_view.innerHTML = bit; falta lógica para eprimir os bits na pagina

    for (let i = 0; i < 8; ++i) {
        if (bit & (1 << i)) {
            document.querySelectorAll('.lamp')[7 - i].classList.add('on');
            document.querySelectorAll('.lamp')[7 - i].style.backgroundColor = "yellow";


        } else {
            document.querySelectorAll('.lamp')[7 - i].classList.remove('on');
            document.querySelectorAll('.lamp')[7 - i].style.backgroundColor = "#ffffff99";
        }
    }
}


for (let i = 0; i < 8; ++i) {
    const lamp = document.createElement('div');
    lamp.classList.add('lamp');

    lamps.appendChild(lamp);
    document.querySelector('.contaner').appendChild(lamps);
}

document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        let Reg = `0b${input_bit.value}`; // 0b10001101
        bitwise(Reg);
    }
});

document.querySelector('#btn-on-lamp').addEventListener('click', () => {
    let Reg = `0b${input_bit.value}`; // 0b10001101
    bitwise(Reg);
});
