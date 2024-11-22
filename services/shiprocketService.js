const axios = require('axios');

const createOrder = async (orderData) => {
  const { order_id, order_date, pickup_location, channel_id, comment, ...otherData } = orderData;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU0NDQzMjMsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzMzMDM3NDUxLCJqdGkiOiI0bkJacGdJTVplNVFvcjBXIiwiaWF0IjoxNzMyMTczNDUxLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTczMjE3MzQ1MSwiY2lkIjo1MjQ1Mjk0LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.QueoikCTMCS4WU6nlKCK-sdR-eYEN5uULg7gMt83Jxo';
  
  const response = await axios.post(
    'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
    { order_id, order_date, pickup_location, channel_id, comment, ...otherData },
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

const cancelOrder = async (orderId) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU0NDQzMjMsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzMzMDM3NDUxLCJqdGkiOiI0bkJacGdJTVplNVFvcjBXIiwiaWF0IjoxNzMyMTczNDUxLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTczMjE3MzQ1MSwiY2lkIjo1MjQ1Mjk0LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.QueoikCTMCS4WU6nlKCK-sdR-eYEN5uULg7gMt83Jxo';
  
  const response = await axios.delete(
    `https://apiv2.shiprocket.in/v1/external/orders/cancel/${orderId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

module.exports = { createOrder, cancelOrder };
