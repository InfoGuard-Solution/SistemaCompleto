var medidaModel = require("../models/medidasModel");


// equipe 1
// ------------------------ temperatura
function buscarUltimasMedidasTempEq1(req, res) {

    const limite_linhas = 4;

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarUltimasMedidasTempEq1(apelidoMaquina, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res
            .status(401)
            .json({ mensagem: `Esse computador não está sendo monitorado` });
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealTempEq1(req, res) {

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarMedidasEmTempoRealTempEq1(apelidoMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da temperatura foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


// ------------------------ frequencia
function buscarUltimasMedidasFreqEq1(req, res) {

    const limite_linhas = 4;

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarUltimasMedidasFreqEq1(apelidoMaquina, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da frequencia foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealFreqEq1(req, res) {

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarMedidasEmTempoRealFreqEq1(apelidoMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da frequencia foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ------------------------ Rede
function buscarUltimasMedidasRedeEq1(req, res) {

    const limite_linhas = 4;

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarUltimasMedidasRedeEq1(apelidoMaquina, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da Rede foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealRedeEq1(req, res) {

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarMedidasEmTempoRealRedeEq1(apelidoMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da Rede foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ------------------------ Aux
function buscarUltimasMedidasAuxEq1(req, res) {

    const limite_linhas = 1;

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarUltimasMedidasAuxEq1(apelidoMaquina, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da Auxiliares foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealAuxEq1(req, res) {

    var apelidoMaquina = req.params.apelidoMaquina;

    medidaModel.buscarMedidasEmTempoRealAuxEq1(apelidoMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado da Auxiliares foi encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasMedidasAuxEq1,
    buscarMedidasEmTempoRealAuxEq1,
    buscarUltimasMedidasRedeEq1,
    buscarMedidasEmTempoRealRedeEq1,
    buscarUltimasMedidasFreqEq1,
    buscarMedidasEmTempoRealFreqEq1,
    buscarUltimasMedidasTempEq1,
    buscarMedidasEmTempoRealTempEq1
}