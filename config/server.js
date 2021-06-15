module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', (process.env.PORT || 5000)),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '49475a96a506996e3a0ca8a6e85f34a9'),
    },
  },
});
