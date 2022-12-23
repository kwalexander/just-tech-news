// const router = require('express').Router();
// const homeRoutes = require('./home-routes.js');

// const apiRoutes = require('./api');
// const { route } = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.status(404).end();
// });

// router.use('/', homeRoutes);

// module.exports = router;


const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;