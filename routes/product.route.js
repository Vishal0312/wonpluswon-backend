const express = require('express')
const ProductRouter = express.Router()
const {ProductModel} = require('../models/product.model')



ProductRouter.get('/',async(req,res)=>{
    try{
        const products = await ProductModel.find()
        res.send(products)
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
})

ProductRouter.post('/create',async(req,res)=>{
    const data = req.body
    console.log(data)
    try{
        let product = new ProductModel(data)
        console.log(product)
        await product.save()
        res.send('Prodcut is added')
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
 
})

ProductRouter.patch('/update/:id',async(req,res)=>{
    const payload = req.body
    const ID = req.params.id
    try{
       
            await ProductModel.findByIdAndUpdate({_id:ID},payload)
        res.send(`Updated the product with id - ${ID}`)
        
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
    
})

ProductRouter.delete('/delete/:id',async(req,res)=>{
    const ID = req.params.id
    
    try{
        
            await ProductModel.findByIdAndDelete({_id:ID})
        res.send(`Deleted the note with id - ${ID}`)
        
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
})

module.exports={
    ProductRouter
}



// //{
//     "title":"yes",
//     "subject":"physics",
//     "url":"hlfjkerft4rg5rt"
    
//   }