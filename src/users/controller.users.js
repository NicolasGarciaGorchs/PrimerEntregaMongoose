const { Router } = require('express')
const Users = require('../models/users')

const router = Router()

// router.get('/' , async (req,res) => { // ES ASINCRONO 
//     try {
//     const users = await Users.find( { status: true }) // ES PARA QUE TRAIGA TODO LO QUE TIENE DENTRO Users // SE VA A CONECTAR SIEMPRE Y CUANDO ESTE EN ESTADO TRUE
//     res.json({message: users})
//     }catch(error){ // SI LO QUE ESTA DENTRO DE TRY FUNCIONA, DEVUELVE ESO, SINO ERROR
//         res.json({error})
//     }
// })
router.get('/create', (req,res) => {
    res.render('createUser.handlebars')
})

router.get('/', async (req,res) => {
    const users = await Users.find()
    res.json({ message: users })
})


// router.get('/', async (req,res) => {
//     const users = await Users.find()
//     res.json({message: users})
// })
// router.post('/', (req,res) => {
//     console.log(req.body)
//     // UsersDao.create(req.body)
//     res.json({ message: 'Usuario creado' } )
// })

router.post('/create' , async (req,res) =>{
    try {
        const {name,lastname,email,password} = req.body

        const newUserInfo = {
            name,
            lastname,
            email,
            password
        }
        const newUser = await Users.create(newUserInfo)
    
        res.json({message: newUser }) // NOS DA LA INFORMACION DEL USUARIO CREADO JUNTO CON EL ID DE MONGO

    } catch (error) {
        res.json({error})
    }
})





// router.patch('/:id' , async (req,res) => { // ACTUALIZAR ID
//     try {
//         const { id } = req.params

//         await Users.updateOne ({ _id: id }, req.body)

//     res.json({message: 'user updated'})
//     }catch(error){ // SI LO QUE ESTA DENTRO DE TRY FUNCIONA, DEVUELVE ESO, SINO ERROR
//         res.json({ error })
//     }
// })

// router.delete('/:id',  async (req,res) => { // ACTUALIZAR ID
//     try {
//         const { id } = req.params

//         await Users.updateOne({ _id: id }, { status: false}) // ACTUALIZA EN ESTADO FALSE, ENTONCES QUEDA

//     res.json({message: 'user deleted'})
//     }catch(error){ // SI LO QUE ESTA DENTRO DE TRY FUNCIONA, DEVUELVE ESO, SINO ERROR
//         res.json({ error })
//     }
// })

module.exports = router