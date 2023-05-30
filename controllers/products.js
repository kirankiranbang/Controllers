
const products=[];


exports.getAddProduct=(req,res,next)=>
{

res.render('add-products',{
pageTitle:'add-products',
path:'./admin/add-products',
formsCSS:true,
productCSS:true,
activeAddProduct:true
})
}


exports.postAddProduct=(req, res, next) => {

    console.log(req.body);
products.push({title:req.body.title})
   res.redirect('/');

  };


  exports.getProduct=(req,res,next)=>
  {
  
  res.render('shop',{
    prods:products,
  pageTitle:'Shop',
  path:'/',

  hasProducts:products.length>0,
  productCSS:true,
  activeShop:true
  })
  }

  ///