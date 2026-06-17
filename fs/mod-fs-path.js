
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default // Padrão

try {
    //            módulo-fs                diretório   arquivo   codificação
const arquivo = fs.readFileSync(path.join(__dirname'/festa.md'),'utf-8')
console.log(chalk.green('Arquivo carregado com sucesso!'))
console.log(arquivo)

} catch(erro)
console.log (chalk) {
console.log(chalk.yellow('Atenção, erro a frente'))
console.log(chalk.red("Erro 1406:"))
console.log(erro.mensage)

}

