let saldo = prompt("Informe seu saldo");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$" +
      saldo +
      "\n. Adicionar dinheiro" +
      "\n. Retirar dinheiro" +
      "\n. Sair"
  );
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado"));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser retirado"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida");
  }
} while (opcao !== "3");
