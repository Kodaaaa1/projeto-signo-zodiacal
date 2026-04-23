const botao = document.getElementById('btnDescobrir');
const dataInput = document.getElementById('dataNascimento');
const resultado = document.getElementById('resultado');
const signoNome = document.getElementById('signoNome');
const signoTexto = document.getElementById('signoTexto');

botao.addEventListener('click', descobrirSigno);

function descobrirSigno() {
  const valor = dataInput.value;
  if (!valor) {
    alert('Selecione sua data de nascimento.');
    return;
  }
  const partes = valor.split('-');
  const dia = parseInt(partes[2]);
  const mes = parseInt(partes[1]);
  const info = obterSigno(dia, mes);
  signoNome.textContent = info.nome;
  signoTexto.textContent = info.texto;
  resultado.classList.remove('d-none');
}

function obterSigno(dia, mes) {
  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return { nome: 'Áries', texto: 'Corajoso, competitivo e cheio de energia.' };
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return { nome: 'Touro', texto: 'Determinado, confiável e paciente.' };
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return { nome: 'Gêmeos', texto: 'Comunicativo, curioso e versátil.' };
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return { nome: 'Câncer', texto: 'Sensível, protetor e intuitivo.' };
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return { nome: 'Leão', texto: 'Criativo, confiante e carismático.' };
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return { nome: 'Virgem', texto: 'Organizado, analítico e dedicado.' };
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return { nome: 'Libra', texto: 'Diplomático, sociável e equilibrado.' };
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return { nome: 'Escorpião', texto: 'Intenso, estratégico e leal.' };
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return { nome: 'Sagitário', texto: 'Aventureiro, otimista e livre.' };
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return { nome: 'Capricórnio', texto: 'Responsável, ambicioso e disciplinado.' };
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return { nome: 'Aquário', texto: 'Original, independente e visionário.' };
  return { nome: 'Peixes', texto: 'Empático, criativo e sonhador.' };
}