const baseUrl =
    process.env.NODE_ENV === "production" 
        ? `https://PLACEHOLDER:3000`
        : `http://localhost:3000`

export default baseUrl; 
