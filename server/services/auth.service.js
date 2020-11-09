const axios = require('axios');
const { User } = require('../models').models;

module.exports = {
  async token(req, res) {
    const { code } = req.body;
    const clientId = process.env.GITHUB_CLIENT_ID;
    const secret = process.env.GITHUB_SECRET;

    const TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${secret}&code=${code}`;
    const USER_PROFILE_URL = 'https://api.github.com/user';

    const { data } = await axios.post(TOKEN_URL);
    const queryString = new URLSearchParams(data);
    const accessToken = queryString.get('access_token');
    const { data: userData } = await axios.get(USER_PROFILE_URL, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const { login: nickname } = userData;
    const { dataValues: user } = await User.findOne({ where: { nickname } });
    if (!user) return res.status(200).send({ accessToken, ...user.dataValues });

    const { dataValues: newUser } = await User.create({ nickname });
    return res.status(200).send({ accessToken, ...newUser });
  },
};