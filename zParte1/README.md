<h1 align="center">Trabalho-CLP Parte-1</h1>
<p align="center">Sistema de controle de produtos, cliente e vendas criado para explorar a linguagem javascript e os conceitos de POO.</p>

## Sobre o programa:
É um sistema de dominio web, feito com a inteção de observar visualmente o funcionamento da linguagem javascipt na orientação a objetos.
A interface foi feita com 1 arquivo html que contem a base para todos os elementos visuais do programa (apenas uma div no body), 1 arquivo css que estiliza os elementos da interface e 1 arquivo javascript que controla todo o comportamento da interface (de maneira iterativa) e o controle das estruturas e objetos criados (usando o paradigma de POO).</br>

* É indicado que seja utilizado o navegador google chrome para execução desse programa.
## Classes implementadas:
* <a href="">Pessoa</a> (abstrata)
* <a href="">Cliente</a> (extends Pessoa)
* <a href="">Produto</a>
* <a href="">Totalizavel</a> (abstrata)
* <a href="">Venda</a> (Extends Totalizavel)
* <a href="">ItemVenda</a> (Extends Totalizavel)
## Funcionalidade por classe:

| Funcionalidades para clientes        | Status |
| ------------------------------------ | ------ |
| ⏺️ Vizualizar informações de clientes | ✅      |
| 🆕 Inserir clientes                   | ✅      |
| 🔁 Alterar informações de clientes    | ✅      |
| ❌ Apagar clientes                    | ✅      |

| Funcionalidades para podutos         | Status |
| ------------------------------------ | ------ |
| ⏺️ Vizualizar informações de Produtos | ✅      |
| 🆕 Inserir Produtos                   | ✅      |
| 🔁 Alterar informações de Produtos    | ✅      |
| ❌ Apagar Produtos                    | ✅      |

| Funcionalidades para vendas        | Status |
| ---------------------------------- | ------ |
| ⏺️ Vizualizar informações de Vendas | ✅      |
| 🆕 Inserir Vendas                   | ✅      |
| ❌ Apagar Vendas                    | ✅      |

| Funcionalidades para produtos em vendas (ItemVenda)       | Status |
| --------------------------------------------------------- | ------ |
| ⏺️ Vizualizar informações de produto em vendas (ItemVenda) | ✅      |
| 🆕 Inserir produto em vendas (ItemVenda)                   | ✅      |
| ❌ Apagar produto em vendas (ItemVenda)                    | ✅      |
  
## Como executar o programa:
### Instalar o NPM (que geralmente ja é instalado qunado se instala o nodeJs).
`https://nodejs.org/en/`
### Abrir o terminal na pasta do projeto (aonde se localiza o arquivo package.json).
```bash
#linux & windows
$ cd <caminho da pasta>
```
### Instalar a feramenta "live-server".
É necessária para rodar o sistema pois os navegadores nao costumam permitir a importacao de modulos quando o protocolo utilizado é "FILE" e nao "HTTP" ou "HTTPS".
```bash
#linux
$ sudo npm run make

#windows
$ npm run make
```
### Iniciar o servidor web para exibição do sistema em seu navegador.
```bash
#linux & windows
$ npm start
```
### Observação final.
Se o navegador não abrir automaticamente, olhe o terminal novamente e veja em qual ip/porta o sistema esta roadando e digite essa informação em sua barra de pesquisa do navegador (geralmnete a url é http://127.0.0.1:8080/)