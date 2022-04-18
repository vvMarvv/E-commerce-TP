module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };

    let config = {
       tableName: "categorias",
       timestamps: false
    };

    const Categoria = sequelize.define("Categoria", cols, config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoria_id'
            
        })
    }

    return Categoria;

}