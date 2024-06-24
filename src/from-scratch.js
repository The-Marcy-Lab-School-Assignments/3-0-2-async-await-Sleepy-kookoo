export const fetchHandler = async (url, options = {}) => {
  try {
    /** FEEDBACK: Great job getting all tests to pass! */
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`))
      throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`)
    }

    const isJson = (response.headers.get('content-type') || '').includes('application/json');

    let data = "";
    if (isJson === true) {
      data = await response.json()
    } else {
      data = await response.text()
    }

    return [data, null];

  } catch (error) {
    console.warn(error);
    return [null, error]; // Return a tuple with null data and the error object
  }
};

