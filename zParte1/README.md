<h1 align="center">Trabalho-CLP Parte-1</h1>
<p align="center">Sistema de controle de produtos, cliente e vendas criado para explorar a linguagem javascript e os conceitos de POO</p>

## Sobre o programa:
É um sistema de dominio web, feito com a inteção de observar visualmente o funcionamento da linguagem javascipt na orientação a objetos.
A interface foi feita com 1 arquivo html que contem a base para todos os elementos visuais do programa (apenas uma div no body), 1 arquivo css que estiliza os elementos da interface e 1 arquivo javascript que controla todo o comportamento da interface (de maneira iterativa) e o controle das estruturas e objetos criados # (usadno o paradigma de POO).</br>

* É indicado que seja utilizado o navegador google chrome para execução desse programa.
## Supported features:

| Feature                                                 | Status |
| ------------------------------------------------------- | ------ |
| Inserir clientes                                        | ✅      |
| Alterar informações de clientes                         | ✅      |
| Vizualizar informações de clientes                      | ✅      |
| Apagar clientes                                         | ✅      |
| Inserir Produtos                                        | ✅      |
| Alterar informações de Produtos                         | ✅      |
| Vizualizar informações de Produtos                      | ✅      |
| Apagar Produtos                                         | ✅      |
| Inserir Vendas                                          | ✅      |
| Vizualizar informações de Vendas                        | ✅      |
| Apagar Vendas                                           | ✅      |
| Inserir produto em vendas (ItemVEnda)                   | ✅      |
| Vizualizar informações de produto em vendas (ItemVEnda) | ✅      |
| Apagar produto em vendas (ItemVEnda)                    | ✅      |
  
## Como executar o programa:
# Instalar o NPM (que geralmente ja é instalado qunado se instala o nodeJs).
`https://nodejs.org/en/`
# Abrir o terminal na pasta do projeto (aonde se localiza o arquivo package.json).
```bash
#linux & windows
$ cd <caminho da pasta>
```
# Instalar a feramenta "live-server".
É necessária para rodar o sistema pois os navegadores nao costumam permitir a importacao de modulos quando o protocolo utilizado é "FILE" e nao "HTTP" ou "HTTPS".
```bash
#linux
$ sudo npm run make

#windows
$ npm run make
```
# Iniciar o servidor web para exibição do sistema em seu navegador.
```bash
#linux & windows
$ npm start
```
Se o navegador não abrir automaticamente, olhe o terminal novamente e veja em qual ip/porta o sistema esta roadando e digite essa informação em sua barra de pesquisa do navegador (geralmnete a url é http://127.0.0.1:8080/)