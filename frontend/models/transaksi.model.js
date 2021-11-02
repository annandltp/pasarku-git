// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Transaksi = sequelize.define('transaksi', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        trs_number: {
            type: Sequelize.INTEGER
        }
    })

    return Transaksi
}