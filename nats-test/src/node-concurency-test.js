process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');
const SESSION_KEY= 'eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall6TTJRME1XSTNNalZqWVdNNE9EWXdOR0U1T1dZd1lTSXNJbVZ0WVdsc0lqb2lVRTlUVkRSQVoyMWhhV3d1WTI5dElpd2lhV0YwSWpveE5qWTFORGczTURVeGZRLlk3bXJHNTNCUXBFUDl4VWFhRmMxSTF6WTVUNHgzaGNtRllOeXZsdm40VDQifQ==';
const cookie =
  `express:sess=${SESSION_KEY}`;
 
const doRequest = async () => {
  const { data } = await axios.post(
    `https://ticketing.dev/api/tickets`,
    { title: 'ticket', price: 5 },
    {
      headers: { cookie },
    }
  );
 
  await axios.put(
    `https://ticketing.dev/api/tickets/${data.id}`,
    { title: 'ticket', price: 10 },
    {
      headers: { cookie },
    }
  );
 
  axios.put(
    `https://ticketing.dev/api/tickets/${data.id}`,
    { title: 'ticket', price: 15 },
    {
      headers: { cookie },
    }
  );
 
  console.log('Request complete');
};
 
(async () => {
  for (let i = 0; i < 200; i++) {
    doRequest();
  }
})();