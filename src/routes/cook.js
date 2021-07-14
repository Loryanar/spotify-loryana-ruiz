module.exports.cook= function c(res,req){
    res.cookie('cookien', req.body.name,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookieln', req.body.lname,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookiee', req.body.email,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
}
module.exports.co= async function coo(res,resultados){
    let data = resultados[0]; 
    res.cookie('cookien',resultados[0].nameus,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookieln', resultados[0].lastn,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookiee', resultados[0].email,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    
    const datos= {name: resultados[0].nameus, lname: resultados[0].lastn, email: resultados[0].email};
    
    return datos;
}
module.exports.cooki= function c(res,req){
    res.cookie('cookien', req.body.name,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookieln', req.body.lname,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookiee', req.body.mail,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
}


module.exports.coa= async function coo(res,resultados){
    let data = resultados[0]; 
    res.cookie('cookien',resultados[0].namead,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookieln', resultados[0].lastna,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    res.cookie('cookiee', resultados[0].emaila,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    
    const datos= {name: resultados[0].nameus, lname: resultados[0].lastn, email: resultados[0].email};
    
    return datos;
}
