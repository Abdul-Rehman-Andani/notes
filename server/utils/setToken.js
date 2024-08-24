import jwt from "jsonwebtoken";

export const setToken = (userId) => {
    const token = jwt.sign({id: userId}, process.env.JWT_KEY, {expiresIn : "1d"});
    return token;
}