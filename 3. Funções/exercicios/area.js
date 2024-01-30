function AreaTriangulo() {
  const base = prompt("Informe a base do triãngulo:");
  const altura = prompt("Informe a altura do triãngulo:");
  return (base * altura) / 2;
}

function AreaRetangulo() {
  const base = prompt("Informe a base do Retângulo:");
  const altura = prompt("Informe a altura do retângulo:");
  return base * altura;
}

function AreaQuadrado() {
  const lado = prompt("Informa o lado do quadrado:");
  return lado * lado;
}

function AreaTrapezio() {
  const basemaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const basemenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const altura = prompt("Informe a altura do trapézio:");
  return (basemaior * basemenor * altura) / 2;
}

function Areacirculo() {
  const raio = prompt("Informe o raio do circulo:");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica \n" +
      "1. Calcular área do triãngulo \n" +
      "2. Calcular área do retângulo\n" +
      "3. Calcular área do quadrado\n" +
      "4. Calcular área do trapézio\n" +
      "5. Calcular área do circulo\n" +
      "6. Sair\n"
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = AreaTriangulo();
        break;
      case "2":
        resultado = AreaRetangulo();
        break;
      case "3":
        resultado = AreaQuadrado();
        break;
      case "4":
        resultado = AreaTrapezio();
        break;
      case "5":
        resultado = Areacirculo();
        break;

      case "6":
        alert("saindo....");
        break;
      default:
        alert("Opção inválida");
        break;
    }
    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== "6");
}

executar();
