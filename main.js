function compareDayMonth(day, month, horos) {
  for (let i = 0; i < horos.length - 1; i++) {
    if (Number(month) === horos[i].month) {
      if (Number(day) >= horos[i].day) {
        return horos[i]
      }
    } else if (Number(month) === horos[i+1].month) {
      if (Number(day) < horos[i+1].day) {
        return horos[i]
      }
    } else if (Number(month) === 1 && (Number(day) < horos[0].day)){
      return  horos[horos.length-1]
    }
  }
}
function zodiacsSign (day, month) {
  zodiacs = [
    { sign: 'Aquário', day: 20, month: 1, polar: 'Positivo', element: 'Ar', flexibility: 'Fixo' }, 
    { sign: 'Peixes', day: 19, month: 2, polar: 'Negativo', element: 'Água', flexibility: 'Mutável' },
    { sign: 'Áries', day: 21, month: 3, polar: 'Positivo', element: 'Fogo', flexibility: 'Cardial' },
    { sign: 'Touro', day: 21, month: 4, polar: 'Negativo', element: 'Terra',  flexibility: 'Fixo' },
    { sign: 'Gêmeos', day: 21, month: 5, polar: 'Positivo', element: 'Ar', flexibility: 'Mutável' },
    { sign: 'Câncer', day: 21, month: 6, polar: 'Negativo', element: 'Água', flexibility: 'Cardial' },
    { sign: 'Leão', day: 23, month: 7, polar: 'Positivo', element: 'Fogo', flexibility: 'Fixo' },
    { sign: 'Virgem', day: 23, month: 8, polar: 'Negativo', element: 'Terra', flexibility: 'Mutável' },
    { sign: 'Libra', day: 23, month: 9, polar: 'Positivo', element: 'Ar', flexibility: 'Cardial' },
    { sign: 'Escorpião', day: 23, month: 10, polar: 'Negativo', element: 'Água', flexibility: 'Fixo' },
    { sign: 'Sagitário', day: 22, month: 11, polar: 'Positivo', element: 'Fogo', flexibility: 'Mutável' },
    { sign: 'Capricórnio', day: 22, month: 12, polar: 'Negativo', element: 'Terra', flexibility: 'Cardial' }
  ];
  const sign = compareDayMonth(day, month, zodiacs);
  document.getElementById("zod-sign").innerHTML = sign.sign
  document.getElementById("zod-polar").innerHTML = sign.polar
  document.getElementById("zod-eleme").innerHTML = sign.element
  document.getElementById("zod-flexi").innerHTML = sign.flexibility
}
function gypsySign (day, month) {
  gypsy = [
    { sign: 'Taça', day: 21, month: 1, metal: 'Alumínio', perfume: 'Canela', weekDay: 'Sábado', stone: 'Água Marinha', color: ['Laranja', 'Marrom Claro'] },
    { sign: 'Capela (Igreja)', day: 20, month: 2, metal: 'Platina', perfume: 'Glicínia', weekDay: 'Quinta-feira', stone: 'Ametista', color: ['Violeta', 'Azul'] },
    { sign: 'Punhal', day: 21, month: 3, metal: 'Ferro', perfume: 'Lavanda', weekDay: 'Terça-feira', stone: 'Esmeralda', color: ['Vermelho'] },
    { sign: 'Coroa', day: 21, month: 4, metal: 'Cobre', perfume: 'Rosa', weekDay: 'Sexta-feira', stone: 'Safira azul', color: ['Verde', 'Rosa'] },
    { sign: 'Lampião', day: 21, month: 5, metal: 'Níquel', perfume: 'Floral', weekDay: 'Quarta-feira', stone: ['Topázio', 'Magnetita'], color: ['Amarelo', 'Ocre'] },
    { sign: 'Roda', day: 21, month: 6, metal: 'Prata', perfume: ['Rosa', 'Patchouli'], weekDay: 'Segunda-feira', stone: 'Esmeralda', color: ['Branco', 'Prateado'] },
    { sign: 'Estrela', day: 22, month: 7, metal: 'Ouro', perfume: 'Sândalo', weekDay: 'Domingo', stone: 'Rubi', color: ['Amarelo', 'Laranja', 'Dourado'] },
    { sign: 'Sino', day: 23, month: 8, metal: 'Níquel', perfume: 'Gardênia', weekDay: 'Quarta-feira', stone: ['Ágata', 'Turmalina'], color: ['Verde', 'Azul'] },
    { sign: 'Moeda', day: 23, month: 9, metal: 'Cobre', perfume: 'Alfazema', weekDay: 'Sexta-feira', stone: 'Diamante rosa', color: ['Rosa', 'Azul'] },
    { sign: 'Adaga', day: 23, month: 10, metal: 'Ferro', perfume: 'Almíscar', weekDay: 'Terça-feira', stone: ['Opala', 'Topázio'], color: ['Púrpura', 'Marrom'] },
    { sign: 'Machado', day: 22, month: 11, metal: 'Estanho', perfume: 'Jasmin', weekDay: 'Quinta-feira', stone: ['Safira', 'Turqueza'], color: ['Púrpura', 'Violeta'] },
    { sign: 'Ferradura', day: 22, month: 12, metal: 'Chumbo', perfume: 'Crítico', weekDay: 'Sábado', stone: ['Ônix', 'Quartzo'], color: ['Preto', 'Cinza', 'Verde'] }
  ];
  const sign = compareDayMonth(day, month, gypsy);
  document.getElementById("gyp-sign").innerHTML = sign.sign
  document.getElementById("gyp-frag").innerHTML = sign.perfume
  document.getElementById("gyp-metal").innerHTML = sign.metal
  document.getElementById("gyp-day").innerHTML = sign.weekDay
  document.getElementById("gyp-stone").innerHTML = sign.stone
  document.getElementById("gyp-color").innerHTML = sign.color
}
function mayasSign (day, month) {
  mayas = [
    {id: 1,sign: 'Gorila', day: 10, month: 1 },
    {id: 2,sign: 'Falcão', day: 7, month: 2 },
    {id: 3,sign: 'Jaguar', day: 7, month: 3 },
    {id: 4,sign: 'Raposa', day: 4, month: 4 },
    {id: 5,sign: 'Serpente', day: 2, month: 5 },
    {id: 6,sign: 'Esquilo', day: 30, month: 5 },
    {id: 7,sign: 'Tartaruga', day: 27, month: 6 },
    {id: 8,sign: 'Morcego', day: 26, month: 7 },
    {id: 9,sign: 'Escorpião', day: 23, month: 8 },
    {id: 10,sign: 'Veado', day: 20, month: 9 },
    {id: 11,sign: 'Coruja', day: 18, month: 10 },
    {id: 12,sign: 'Pavão', day: 15, month: 11 },
    {id: 13,sign: 'Lagarto', day: 13, month: 12 }
  ];
  const sign = compareDayMonth(day, month, mayas);
  document.getElementById("may-sign").innerHTML = sign.sign;
}
function shamanSign (day, month) {
  shaman = [
    { sign: 'Ganso', day: 21, month: 12 },
    { sign: 'Lontra', day: 21, month: 1 },
    { sign: 'Lobo', day: 21, month: 2 },
    { sign: 'Falcão', day: 21, month: 3 },
    { sign: 'Castor', day: 21, month: 4 },
    { sign: 'Cervo', day: 21, month: 5 },
    { sign: 'Pica-pau', day: 21, month: 6 },
    { sign: 'Salmão', day: 21, month: 7 },
    { sign: 'Urso', day: 21, month: 8 },
    { sign: 'Corvo', day: 21, month: 9 },
    { sign: 'Serpente', day: 21, month: 10 },
    { sign: 'Coruja', day: 21, month: 11 }
  ];  
  const sign = compareDayMonth(day, month, shaman);
  document.getElementById("sha-sign").innerHTML = sign.sign;
}
function chineseSign (year) {
  const chinese = [
    {id:0, sign: 'Macaco', polar: 'Yang', element: 'Metal' },
    {id:1, sign: 'Galo', polar: 'Yin', element: 'Metal' },
    {id:2, sign: 'Cão', polar: 'Yang', element: 'Terra' },
    {id:3, sign: 'Porco', polar: 'Yin', element: 'Água' },
    {id:4, sign: 'Rato', polar: 'Yang', element: 'Água' },
    {id:5, sign: 'Boi', polar: 'Yin', element: 'Terra' },
    {id:6, sign: 'Tigre', polar: 'Yang', element: 'Madeira' },
    {id:7, sign: 'Coelho', polar: 'Yin', element: 'Madeira' },
    {id:8, sign: 'Dragão', polar: 'Yang', element: 'Terra' },
    {id:9, sign: 'Serpente', polar: 'Yin', element: 'Fogo' },
    {id:10, sign: 'Cavalo', polar: 'Yang', element: 'Fogo' },
    {id:11, sign: 'Cabra', polar: 'Yin', element: 'Terra' }
  ];
  const denominator = 12;
  const remainder = year % denominator;
  const sign = chinese.find(item => item.id === remainder);

  document.getElementById("chi-sign").innerHTML = sign.sign;
  document.getElementById("chi-polar").innerHTML = sign.polar;
  document.getElementById("chi-eleme").innerHTML = sign.element;
}

function main () {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  zodiacsSign (day, month);
  gypsySign (day, month);
  mayasSign (day, month);
  shamanSign (day, month);
  chineseSign(year);
}