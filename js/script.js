let btnConverter = document.querySelector("#btn-converter");

const convert = () => {
	const salario = document.querySelector("#salario").value
	const resultadoConversao = document.querySelector("#resultado-conversao")
	const resultado = Math.round(salario/220)
	resultadoConversao.innerText = `Você ganha R$ ${resultado} reais por hora.`
}

btnConverter.addEventListener("click", convert);