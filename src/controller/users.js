const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'Get all users successfully',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: `SERVER error ${error.message}`
        });
    }
}

const createNewUsers = async (req, res) => {
    const {body} = req;

    if(!body.name || !body.nis || !body.username){
        return res.status(400).json({
            message: 'Anda mengirim data yang salah',
            data: null
        })
    }

    try {
        const [data] = await UsersModel.createUsers(body);

        res.status(201).json({
            message: 'Create new user success',
            data: {
                id: data.insertId,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: `SERVER error ${error.message}`
        });
    }
}

const updateDataUsers = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUsers(body, id);

        res.json({
            message: 'Update user success',
            data: {
                id: id,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: `SERVER error ${error.message}`
        });
    }
}

const deletedUsers = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteUsers(id);

        res.json({
            message: 'deleted user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: `SERVER error ${error.message}`
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateDataUsers,
    deletedUsers
}
