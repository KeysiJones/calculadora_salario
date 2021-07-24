let btnConverter = document.querySelector("#btn-converter");

const convert = () => {
	const salario = document.querySelector("#salario").value
	const resultadoConversao = document.querySelector("#resultado-conversao")
	const resultado = Math.round(salario/220)
	let message = `Você ganha R$ ${resultado} reais** por hora.`

	resultadoConversao.innerText = message
}

btnConverter.addEventListener("click", convert);