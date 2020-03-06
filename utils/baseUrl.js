const baseUrl =
    process.env.NODE_ENV === "production" 
        ? 'https://deployment-url.now.sh'
        : `http://${process.env.IP_ADDR}:3000`

export default baseUrl;