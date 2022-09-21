<h1 align="center">Trabalho-CLP Parte-1</h1>
<p align="center">Sistema de controle de produtos, cliente e vendas criado para explorar a linguagem javascript e os conceitos de POO.</p>

## Sobre o projeto:
É um sistema de domínio web, feito com a intenção de observar visualmente o funcionamento da linguagem JavaScipt na orientação a objetos. É feito de forma simples e intuitiva para "brincar" de inserir, visualizar, alterar e exluir informações ligadas diretamente aos objetos da implementação.
## Como executar o projeto:
### Instalar o NPM (que geralmente ja é instalado qunado se instala o nodeJs).
Mais informações em https://nodejs.org/en/.
### Abrir o terminal na pasta raiz do projeto.
```bash
#linux & windows
$ cd <caminho da pasta raiz>
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
### Observação:
Se o navegador não abrir automaticamente, olhe o terminal novamente e veja em qual ip/porta o sistema esta roadando e digite essa informação em sua barra de pesquisa do navegador (geralmnete a url é http://127.0.0.1:8080/)
## Classes implementadas:
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/class/pessoa.js">Pessoa</a> (abstrata)
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/class/cliente.js">Cliente</a> (extends Pessoa)
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/class/produto.js">Produto</a>
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/class/totalizavel.js">Totalizavel</a> (abstrata)
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/class/venda.js">Venda</a> (Extends Totalizavel)
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/class/itemVenda.js">ItemVenda</a> (Extends Totalizavel)
## Interface:
A interface foi feita utilizando o seguinte sistema de arquivos:
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/index.html">index.html</a>: Contém a base para todos os elementos visuais do programa (apenas uma div no body).
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/css/style.css">css/style.css</a>: Estiliza os elementos da interface.
* <a href="https://github.com/Festevao/Trabalho-CLP/blob/main/Parte-1/js/main.js">js/main.js</a>: Controla todo o comportamento da interface (de maneira iterativa) e o controle das estruturas e objetos criados (usando o paradigma de POO).</br>
* É indicado que seja utilizado o navegador google chrome para execução desse programa.
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
  