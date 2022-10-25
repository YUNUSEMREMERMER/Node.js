import jwt from "jsonwebtoken";

export const verifyToken = (request, response, next) => {
  const token =
    request.headers["x-access-token"] ||
    request.body.token ||
    request.query.token;
  if (!token) {
    console.log("Token bulunmamaktadır.");
    response.send("Token bulunmamaktadır.");
  } else {
    jwt.verify(token, request.app.get("api_secret_key"), (error, decoded) => {
      if (error) {
        console.log("Token bulunmamaktadır.");
        response.send("Beklenmeyen bir hatayla karşılaşıldı.");
      } else {
        request.decode = decoded;
        next();
      }
    });
  }
};
