exports.get404 = (req,res,next) => { 
    //Can chain a bunch of different res. methods, send just has to be the last
    res.status(404).render('404', { pageTitle : "404 - Page Not Found", path : '/404'})
}