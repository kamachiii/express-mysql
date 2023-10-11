const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createUsers = (body) => {
    const SQLQuery = `  INSERT INTO users (name, nis, username)
                        VALUES ('${body.name}', '${body.nis}', '${body.username}')`

    return dbPool.execute(SQLQuery);
}

const updateUsers = (body, id) => {
    const SQLQuery = `  UPDATE users
                        SET name='${body.name}', nis='${body.nis}', username='${body.username}'
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const deleteUsers = (id) => {
    const SQLQuery =  ` DELETE FROM users
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
}
