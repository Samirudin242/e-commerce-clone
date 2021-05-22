const router = require("express").Router();
const Auth = require("../middleware/Auth");
const ProdukController = require("../controllers/produk");
const UserController = require("../controllers/user");

router.post("/user/register", UserController.register);
router.post("/user/login", UserController.login);
router.get("/produk", ProdukController.showProduk);
router.use(Auth.Authentications);
router.post("/produk", ProdukController.create);

module.exports = router;
