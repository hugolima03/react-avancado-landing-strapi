module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '42c43ce144f73e419aad3a1e6b512e89'),
  },
});
