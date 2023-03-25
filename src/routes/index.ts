import { Router } from "express";
import * as pageC from "../controllers/pageC";
import * as searchC from "../controllers/searchC"


const router =  Router();

router.get('/', pageC.home);
router.get('/dogs', pageC.dogs);
router.get('/cats', pageC.cats);
router.get('/fishes', pageC.fishes);


router.get('/search', searchC.search);

export default router;