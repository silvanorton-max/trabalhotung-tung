function calcularGanhos(){

let valor =
Number(document.getElementById("ganhoDia").value);

if(valor <= 0){
alert("Digite um valor válido.");
return;
}

let total = valor * 5;

document.getElementById("resultado").innerHTML =
`
Você pode ganhar aproximadamente
<b>R$ ${total.toFixed(2)}</b>
em 5 dias.
`;
}

function analisarDinheiro(){

let dinheiro =
Number(document.getElementById("salario").value);

if(dinheiro <= 0){
alert("Digite um valor válido.");
return;
}

let necessidades = dinheiro * 0.50;
let investimentos = dinheiro * 0.30;
let lazer = dinheiro * 0.20;

document.getElementById("analise").innerHTML =
`
💡 Sugestão de distribuição:

<br><br>

🏠 Necessidades:
<b>R$ ${necessidades.toFixed(2)}</b>

<br>

📈 Investimentos:
<b>R$ ${investimentos.toFixed(2)}</b>

<br>

🎉 Lazer:
<b>R$ ${lazer.toFixed(2)}</b>
`;
}

function filtrarTabela(){

let valor =
document.getElementById("filtro").value;

let linhas =
document.querySelectorAll("#tabela tbody tr");

linhas.forEach(linha=>{

if(valor === "todos"){
linha.style.display = "";
}
else if(linha.classList.contains(valor)){
linha.style.display = "";
}
else{
linha.style.display = "none";
}

});
}

const dicas = [

"Evite comprar por impulso. Aguarde 24 horas antes de decidir.",

"Monte uma reserva de emergência equivalente a alguns meses de despesas.",

"Invista em habilidades que possam aumentar sua renda.",

"Anote seus gastos para identificar desperdícios.",

"Compare preços antes de comprar.",

"Evite parcelamentos longos para itens não essenciais.",

"Priorize quitar dívidas com juros altos.",

"Defina metas financeiras de curto e longo prazo."

];

function novaDica(){

const indice =
Math.floor(Math.random()*dicas.length);

document.getElementById("dica").innerText =
dicas[indice];
}

novaDica();
