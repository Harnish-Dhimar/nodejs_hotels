import express from 'express'
import person from '../models/person.js'
const router = express.Router();

router.put('/updatePerson/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const data = req.body;
    try {
        const response = await person.findByIdAndUpdate(id,data);
        res.send(response)
        if(!response){
            res.send('No person found')
        }
    } catch (error) {
        res.status(404).json({err:error.message})
    }
})

router.delete('/deleteperson/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        const response = await person.findByIdAndDelete(id);
        res.json({
            msg : 'successfully deleted person'
        })
    } catch (error) {
        res.json({
            msg : 'failed deleted person',
            error:error
        })
    }
})

router.post('/addperson', async (req, res) => {
    const data = req.body;
    const newPerson = new person(data);

    try {
        const result = await newPerson.save() // save the person
        res.status(201).json(result); // respond with saved data
    } catch (error) {
        res.status(500).json({ error: 'Error saving person', message: error.message });
    }
});


router.get('/getperson',async(req,res)=>{
    const getres = await person.find();
    if(getres){
        res.send(getres)
    }
    else{
        res.json({
            message:'Error getting person'
        })
    }
})

router.get('/getperson/:worktype',async(req,res)=>{
    const workType = req.params.worktype;
    if(workType == "chef" || workType == "waiter" ||workType == "manager" ){
        const response = await person.find({work:workType})
        res.send(response)
    }
    else{
        res.status(404).json({error:'failed'})
    }
})


export default router