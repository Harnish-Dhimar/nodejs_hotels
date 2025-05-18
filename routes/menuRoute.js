import express from 'express'
import menu from '../models/menu.js'
const router = express.Router();

router.post('/AddMenu',async (req,res)=>{
    const data = req.body;
    const newMenu = new menu(data);
    if(newMenu){
        const resMenu  = await newMenu.save();
        res.send(resMenu)
    }
    else{
        res.json({
            msg : "Error while add menu"
        })
    }
})

router.get('/getmenu',async(req,res)=>{
    const getres = await menu.find();
    if(getres){
        res.send(getres)
    }
    else{
        res.json({
            message:'Error getting menu'
        })
    }
})

router.delete('/deleteMenu/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        const response = await menu.findByIdAndDelete(id);
        res.json(response)
    } catch (error) {
        res.status(404).send();
    }
})

export default router