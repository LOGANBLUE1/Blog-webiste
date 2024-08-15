// src/apiConnector.js
export const apiConnector = async (method, url, bodyData, headers = {}, params = {}) => {
    try {
      // Construct options object for fetch
      const options = {
        method: method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: bodyData ? JSON.stringify(bodyData) : undefined,
      };
      
      // console.log(method, url, bodyData, headers, params);
  
      // Append query parameters to URL if present
      const requestUrl = `${url}${params ? `?${new URLSearchParams(params)}` : ''}`;
  
      // Make fetch request
      const response = await fetch(requestUrl, options);
  
      // Check if response is OK (status 2xx)
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }
  
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        return response.text(); // Handle text responses if needed
      }
    } catch (error) {
      // Handle network errors or failed requests
      console.error('Network Error:', error.message);
      throw error;
    }
  };
  