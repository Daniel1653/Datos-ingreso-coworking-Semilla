// Netlify Serverless Function — Ingress Secure Proxy

export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ status: 'error', message: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Read the secret Google Sheets URL from the secure environment variables in Netlify
    const gsheetsUrl = process.env.GSHEETS_SECRET_URL;

    if (!gsheetsUrl) {
      console.error('Server Configuration Error: GSHEETS_SECRET_URL is not defined.');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          status: 'error', 
          message: 'El servidor de base de datos no está configurado en Netlify.' 
        })
      };
    }

    // Forward the POST request to the Google Apps Script Web App
    const response = await fetch(gsheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const responseText = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: responseText
    };
  } catch (err) {
    console.error('Error forwarding log to Google Sheets:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        status: 'error', 
        message: 'No se pudo sincronizar el registro en segundo plano.' 
      })
    };
  }
}
