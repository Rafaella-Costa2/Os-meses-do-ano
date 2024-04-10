let mes = parseInt(prompt("Informe o número do mês do ano:"));
let ano = (mes==1)?"Janeiro":(mes==2)?"Favereiro":(mes==3)?"Março":(mes==4)?"Abril":(mes==5)?"Maio":(mes==6)?"Junho":(mes==7)?"Julho":(mes==8)?"Agosto":(mes==9)?"Setembro":(mes==10)?"Outubro":(mes==11)?"Novembro":(mes==12)?"Dezembro":"Inválido";
alert(ano);