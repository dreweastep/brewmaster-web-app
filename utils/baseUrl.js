const baseUrl =
    process.env.NODE_ENV === "production" 
        ? `https://${process.env.IP_ADDR}`
        : `http://${process.env.IP_ADDR}:3000`

export default baseUrl;