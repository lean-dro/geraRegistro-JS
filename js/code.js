var cpf = "";
var data = "";
var nome = "";


function geraNome(){
    let sobrenomes = [
        'Silva',
        'Santos', 
        'Pereira',
        'Almeida',
        'Azevedo',
        'Braga',
        'Barros',
        'Brasil',
        'Bahiense',
        'Campos',
        'Cardoso',
        'Correia',
        'Castro ',
        'Fontes ',
        'Guimarães ',
        'Magalhães ',
        'Matos',
        'Pedreira',
        'Queirós',
        ' Ribeiro',
        'Rocha',
        'Souza',
        'Siqueira ',
        'Teixeira',
    ];
    
    let nomes = [
      "Miguel",
      "Sophia",
      "Davi ",
      "Alice",
      "Arthur",
      "Julia",
      "Pedro",
      "Isabella",
      "Gabriel",
      "Manuela",
      "Bernardo",
      "Laura",
      "Lucas",
      "Luiza",
      "Matheus",
      "Valentina",
      "Rafael",
      "Giovanna",
      "Heitor",
      "Maria Eduarda",
      "Enzo",
      "Helena",
      "Guilherme",
      "Beatriz",
      "Nicolas",
      "Maria Luiza",
      "Lorenzo",
      "Lara",
      "Gustavo",
      "Mariana",
      "Felipe",
      "Nicole",
      "Samuel",
      "Rafaela",
      "João Pedro",
      "Heloísa",
      "Daniel",
      "Isadora",
      "Vitor",
      "Lívia",
      "Leonardo",
      "Maria Clara",
      "Henrique",
      "Ana Clara",
      "Theo",
      "Lorena",
      "Murilo",
      "Gabriela",
      "Eduardo",
      "Yasmin",
      "Pedro Henrique",
      "Isabelly",
      "Pietro",
      "Sarah",
      "Cauã",
      "Ana Julia",
      "Isaac",
      "Letícia",
      "Caio",
      "Ana Luiza",
      "Vinicius",
      "Melissa",
      "Benjamin",
      "Marina",
      "João",
      "Clara",
      "Lucca",
      "Cecília",
      "João Miguel",
      "Esther",
      "Bryan",
      "Emanuelly",
      "Joaquim",
      "Rebeca",
      "João Vitor",
      "Ana Beatriz",
      "Thiago",
      "Lavínia",
      "Antônio",
      "Vitória",
      "Davi Lucas",
      "Bianca",
      "Francisco",
      "Catarina",
      "Enzo Gabriel",
      "Larissa",
      "Bruno",
      "Maria Fernanda",
      "Emanuel",
      "Fernanda",
      "João Gabriel",
      "Amanda",
      "Ian",
      "Alícia",
      "Davi Luiz",
      "Carolina",
      "Rodrigo",
      "Agatha",
      "Otávio",
      "Gabrielly",
    ];

    let rand = Math.floor(Math.random() * nomes.length);
    this.nome = this.nome + nomes[rand];
    rand = Math.floor(Math.random() * sobrenomes.length);
    this.nome = this.nome+" "+sobrenomes[rand];
    
    return this.nome;
}

function geraCpf(){
    let vetorCpf = [
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
  ];
  
  let contador = 10;
  let soma1 = 0;
  let i;
  
  for (i = 0; i < 9; i++) {
    soma1 = soma1 + vetorCpf[i] * contador;
    contador--;
  }
  
  let digito1 = soma1 % 11;
  
  if (digito1 < 2) {
    digito1 = 0;
  } else {
    digito1 = 11 - digito1;
  }
  
  contador = 11;
  let soma2 = 0;
  
  vetorCpf[9] = digito1;
  for (i = 0; i < 10; i++) {
    soma2 = soma2 + vetorCpf[i] * contador;
    contador--;
  }
  
  let digito2 = soma2 % 11;
  if (digito2 < 2) {
    digito2 = 0;
  } else {
    digito2 = 11 - digito2;
  }
  
  vetorCpf[10] = digito2;
  
  
  for (i = 0; i < 9; i++) {
    this.cpf = cpf + vetorCpf[i];
    if (i == 2 || i == 5) {
      this.cpf = cpf + ".";
    }
  }
  this.cpf += "-";
  
  for (i = 9; i < 11; i++) {
    this.cpf = cpf + vetorCpf[i];
  }
  return this.cpf;
}


function geraData(){
    let dia = Math.floor(Math.random() * 31) + 1;
    let mes = Math.floor(Math.random() * 12) + 1;
    let ano =Math.floor(Math.random() * 51) + 1970;
    
    let diaTxt = dia.toString();
    let qtdChar = diaTxt.length;
    if (qtdChar<2) {
        diaTxt = "0"+diaTxt;
    }
    
    let mesTxt = mes.toString();
    qtdChar = mesTxt.length;
    if (qtdChar<2) {
        mesTxt = "0"+mesTxt;
    }

    let anoTxt = ano.toString();

    data = diaTxt+"/"+mesTxt+"/"+anoTxt;

    return this.data;
    }


function insereTb(nome, cpfF, dt) {
    let tb = document.getElementById("tabela");
    let qtdLinhas = tb.rows.lenght;
    let linha = tb.insertRow(qtdLinhas);

    let cellNome = linha.insertCell(0);
    let cellCPF = linha.insertCell(1);
    let cellDt = linha.insertCell(2);

    cellNome.innerHTML = nome;
    cellCPF.innerHTML = cpfF;
    cellDt.innerHTML = dt;
    this.nome = "";
    this.cpf="";
    this.data="";
}

function limpar() {
    document.location.reload(true);
    
}


function insereLista() {
    let list = document.getElementById("lista").innerHTML;
    var codigo = 0;
    list += "<p class='text-white'><b class='texto'>(</b><b class='laranja'>'</b>"+geraNome()+"<b class='laranja'>'</b></b>,<i class='laranja'><b class='laranja'>'</b></i>"+geraCpf()+"<b class='laranja'>'</b>, <b class='laranja'>'</b>"+geraData()+"<b class='laranja'>'</b><b class='texto'>)</b></p>";

    
    document.getElementById("lista").innerHTML = list;
    
    this.nome = "";
    this.cpf="";
    this.data="";
}