const queries ={
    saveus: `INSERT INTO suser (id_us,nameus,lastn,email,pass) VALUES ($1, $2, $3, $4,$5) `,
     log:`SELECT nameus FROM suser WHERE id_us=$1 AND pass=$2 `,
     cok: `SELECT nameus, email, lastn FROM suser WHERE id_us=$1 `,
     updu:`UPDATE suser SET nameus=$1,  lastn=$2 , email=$3 WHERE id_us= $4 ;`,
     delus: `DELETE FROM suser WHERE id_us=$1`,
     savead: `INSERT INTO sadmin (id_ad,namead,lastna,emaila,passa) VALUES ($1, $2, $3, $4,$5) `,
     loga:`SELECT namead FROM sadmin WHERE id_ad=$1 AND passa=$2 `,
     Sus: `SELECT id_us FROM suser `,
     upad:`UPDATE sadmin SET namead=$1, lastna=$2 ,emaila=$3 WHERE id_ad=$4;`,
     delad: `DELETE FROM sadmin WHERE id_ad=$1`,
     coka: `SELECT namead, emaila, lastna FROM sadmin WHERE id_ad=$1 `,
 };
 module.exports= queries;