let opcao = "";

do {
  opcao = window.prompt(
    "Seja bem-vindo(a)\n" +
      "\n Escolha uma das opções abaixo:" +
      "\n. Opção um" +
      "\n. Opção dois" +
      "\n. Opção três" +
      "\n. Opção quatro" +
      "\n. Encerrar"
  );
  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu encerrar");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "5");
