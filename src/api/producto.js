import { basePath, apiVersion } from "./config";

export function crearProducto(data,id) {

 const dieta = {
   data,
   id,
   creado: Date()
 }
 console.log(dieta);
  const url = `${basePath}/producto`;
  const params = {
    method: "POST",
    body: JSON.stringify(dieta),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);

      return result;
    })
    .catch((err) => {
      return err.message;
    });
}