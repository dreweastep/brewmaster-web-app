const baseUrl =
    process.env.NODE_ENV === "production" 
        ? `http://${location.hostname}:3000`
        : `http://${location.hostname}:3000`

export default baseUrl;