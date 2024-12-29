import {createUserService, getAllUsersService} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const view = async (req, res, next) => {

}


export const store = async (req, res, next) => {
    const {name, email, password} = req.body;

    try {
        const newUser = await createUserService({
            "name": name,
            "email": email,
            "password": password,
        });

        handleResponse(res, 201, 'Record created', newUser);
    } catch (err) {
        next(err)
    }
};


export const index = async (req, res, next) => {
    try {
        const users = await getAllUsersService();

        handleResponse(res, 201, 'All records', users)
    } catch (err) {
        next(err)
    }
}

export const update = async (req, res, next) => {}

export const destroy = async (req, res, next) => {}