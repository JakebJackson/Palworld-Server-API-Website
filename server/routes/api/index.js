const router = require('express').Router();
const {
  getServerData,
  getPlayerData,
  getServerSettings,
  getServerMetrics,
  postAnnounce
} = require('../../controllers/apiController');

router.route('/getServerData').get(getServerData);
router.route('/getPlayerData').get(getPlayerData);
router.route('/getServerSettings').get(getServerMetrics);
router.route('/getServermetrics').get(getServerSettings);
router.route('/postAnnounce').post(postAnnounce);

module.exports = router;
