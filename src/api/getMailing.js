import client from './client';
import mailingFormatter from './formatters/mailingFormatter';

async function getMailing(id) {
  console.log("get mailing")
  return client.get(`/mailings/${id}`).then(response => mailingFormatter(response?.data));
}

export default getMailing;
