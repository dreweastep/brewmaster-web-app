// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb://DrewEastep:mongoPassword@192.168.45.13:27017/admin",
    JWT_SECRET: "asdfasdfasdf",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/d1776east/image/upload",
    STRIPE_SECRET_KEY: "sk_test_aSHmY7E9Gm0mIbLnWrKykiRe000f4ELoCd"
  }
};