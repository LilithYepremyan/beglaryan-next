import mailingFormatter from "./mailingFormatter";

export default function mailingsFormatter(unformattedData) {
  console.log("Unformatted data:", unformattedData); 
  console.log("Unformatted data response:", unformattedData.response); 
  const { data, totalPages: pagesTotal, page } = unformattedData.response || {};

  const mailings = data.map((x) => mailingFormatter(x));

  console.log(mailings, "mailings");
  console.log(data, "data");
  console.log(pagesTotal, "pagesTotal");

  // console.log("Media field:", media);
  return {
    mailings,
    pagesTotal,
    page,
  };
}
