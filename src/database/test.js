const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    //inserir dados na tabela
    await saveOrphanage(db, {    
        lat: "-23.5914213",
        lng: "-46.6572722",
        name: "Lar dos meninos",
        about:"presta assistência a criança de 06 a 15 anos que se encontra em situação de risco e/ou vulnarabilidade social.",
        whatsapp: "940369660",
        images: [
            "https://images.unsplash.com/photo-1597387126034-0026d138e5dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    })
    

   //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
        console.log(selectedOrphanages);

    //consultar somente 1 orphanage, pelo id 
   const orphanage = await db.all('SELECT * from orphanages WHERE id = "2"')
       console.log(orphanage);
})
