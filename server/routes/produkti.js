const express = require("express");
const router = express.Router();
const Produkti = require('../models/Produkti')
const multer = require("multer")


// parādīt visas preces
router.get("/", (req, res) => {
    Produkti.find()
    .then(produkti => res.json(produkti))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

//const storage = multer.diskStorage({
//    destination: (req, file, cb) => {
//        cb(null,'./upload')
//    },
//    filename: (req, file, cb) => {
 //       cb(null, Date.now() + "--" + file.originalname)
//    }
//})

//const upload = multer({storage: storage})


//app.post('/addI', upload.single('Attels'), (req, res) => {
//
//	console.log(req.file)
//    res.send("Bilde tika seivota")
//});


//  pievienot preci
router.post('/add', async (req, res) => {

	const newProdukti = new Produkti(req.body);
	 await newProdukti.save();

	res.status(201).json({
		message: "Produkti tika seivoti",
	});
})

// meklēt produktu pec id
router.get('/:id', (req, res) => {
    Produkti.findById(req.params.id)
    .then (produkti => res.json(produkti))
    .catch(err => res.status(400).json(`Error ${err}`))
})

// meklēt produktu pec id un atjaunot
router.put('/update/:id', (req, res) => {
    Produkti.findById(req.params.id)
    .then (produkti => {
        //produkti.Attels = req.body.Attels,
        produkti.Nosaukums = req.body.Nosaukums,
        produkti.Apraksts = req.body.Apraksts,
        produkti.Krasa = req.body.Krasa,
        produkti.Cena = req.body.Cena

        produkti
            .save()
            .then(() => res.json('Produkts tika atjaunots'))
            .catch(err => res.status(400).json(`Error: ${err}`))
        
    })
    .catch(err => res.status(400).json(`Error ${err}`))
})

// meklēt produktu pec id un izdzēst to
router.delete('/:id', (req, res) => {
    Produkti.findByIdAndDelete(req.params.id)
        .then(() => res.json('Produkts tika dzēsts'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;