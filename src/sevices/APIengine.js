import { Snackbar } from "@material-ui/core";

const baseUrl = "https://random-data-api.com/api/";

const headers = {
  "Content-Type": "application/json",
};

const GetData = (url) => {
  return fetch(baseUrl + url, {
    headers,
    method: "GET",
  }).then((res) => res.json()).catch(err => Snackbar(err.message));
};

const PostData = async (url, dataBody) => {
  const data = await fetch(baseUrl + url, {
    headers,
    method: "POST",
    body: JSON.stringify(dataBody),
  });
  const result = await data.json();
  if (result.status < 400) return result;
  throw result;
};


export {PostData , GetData};