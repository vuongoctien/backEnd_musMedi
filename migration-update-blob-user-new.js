module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Users', 'image', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Users', 'image', {
                type: Sequelize.STRING,
                allowNull: true,
            })
        ])
    }
}

/**
 *  đây là file đổi từ dạng text sang ảnh, không biết có phải sửa gì không?
 *  à hiểu rồi, hình như file này để nếu bên migration đặt là TEXT hoặc STRING 
 *  thì nó sẽ giúp mình đổi thành BLOB('long')
 *  nhưng mình đặt BLOB('long') luôn thì chắc không cần
 *  mình thử move file ra ngoài cùng, nếu lỗi lại move lại vào tệp migration
 */