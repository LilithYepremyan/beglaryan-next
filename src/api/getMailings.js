import client from "./client";
import mailingsFormatter from "./formatters/mailingsFormatter";

async function getMailings(page) {
  console.log("get mailings")
  console.log(`Starting fetch for mailings, page: ${page}`);
  return client
    .get("/mailings/", {
      params: {
        cp: page,
        ps: 12,
      },
    })
    .then((response) => mailingsFormatter(response?.data));
}

export default getMailings;
