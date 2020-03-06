const baseUrl =
    process.env.NODE_ENV === "production" 
        ? `http://${self.location.hostname}:3000`
        : `http://${self.location.hostname}:3000`

export default baseUrl;