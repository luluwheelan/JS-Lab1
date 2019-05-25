const router = require(`express`).Router();


//Register two routes to router object
router.get('/', (req, res) => {
	res.send(`Table`);
});

router.get('/about',(req, res) =>{
	res.send(`About page`);
})

router.get('/contact',(req, res) =>{
	res.send(`Contact page`);
})
module.exports = router;