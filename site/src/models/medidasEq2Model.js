var database = require("../database/config");
// cnpj da organização
function buscaCnpj(cnpj) {
    
    if (cnpj === 0) {
        instrucaoSql = "";

        return Promise.reject(new Error('CNPJ cannot be 0 or undefined'));
    }

    instrucaoSql = `select cnpj from tbOrganizacao where cnpj = ${cnpj}`

    return database.executar(instrucaoSql);
}

// equipe 2
// todos
function buscarMedidasEmTempoRealTodosEq2(cnpj) {

    instrucaoSql = `SELECT apelidoComputador, cpuTemp, gpuTemp, cpuFreq , gpuFreq, ram, redeLatencia, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
    FROM (
        SELECT c.apelidoComputador, m.cpuTemp, m.gpuTemp, m.cpuFreq , m.gpuFreq, m.ram, m.redeLatencia, m.dataHora,
               ROW_NUMBER() OVER (PARTITION BY c.idComputador ORDER BY m.dataHora DESC) AS row_num
        FROM tbEvento e
            INNER JOIN tbComputador c ON c.fk_idEvento = e.idEvento
            LEFT JOIN tbMonitoramento m ON m.fk_idComputador = c.idComputador
        WHERE e.fk_Organizacao = ${cnpj} AND e.status = "Em andamento" AND c.apelidoComputador LIKE 
            CONCAT('%', (SELECT time2 FROM tbEvento WHERE fk_organizacao = ${cnpj} AND status = "Em andamento"))
    ) AS subquery
    WHERE row_num = 1
    ORDER BY dataHora DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// temperatura da GPU e CPU
function buscarUltimasMedidasTempEq2(idComputador, limite_linhas) {


    instrucaoSql = `select cpuTemp, gpuTemp, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit ${limite_linhas};`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTempEq2(idComputador) {

    instrucaoSql = ''


    instrucaoSql = `select cpuTemp, gpuTemp, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit 1;`


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// frequencia da GPU e CPU
function buscarUltimasMedidasFreqEq2(idComputador, limite_linhas) {


    instrucaoSql = `select cpuFreq, gpuFreq, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit ${limite_linhas};`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealFreqEq2(idComputador) {

    instrucaoSql = ''


    instrucaoSql = `select cpuFreq, gpuFreq, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit 1;`


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Rede e pacote
function buscarUltimasMedidasRedeEq2(idComputador, limite_linhas) {


    instrucaoSql = `select redeLatencia, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit ${limite_linhas};`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRedeEq2(idComputador) {

    instrucaoSql = ''


    instrucaoSql = `select redeLatencia, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit 1;`


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// disco e ram
function buscarUltimasMedidasAuxEq2(idComputador, limite_linhas) {


    instrucaoSql = `select disco, ram, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit ${limite_linhas};`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealAuxEq2(idComputador) {

    instrucaoSql = ''


    instrucaoSql = `select disco, ram, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico from tbMonitoramento where fk_idComputador = ${idComputador} order by dataHora desc limit 1;`


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidasAuxEq2,
    buscarMedidasEmTempoRealAuxEq2,
    buscarMedidasEmTempoRealRedeEq2,
    buscarUltimasMedidasRedeEq2,
    buscarUltimasMedidasTempEq2,
    buscarMedidasEmTempoRealTempEq2,
    buscarUltimasMedidasFreqEq2,
    buscarMedidasEmTempoRealFreqEq2,
    buscarMedidasEmTempoRealTodosEq2,
    buscaCnpj
}