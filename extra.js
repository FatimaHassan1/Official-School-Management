    // const opts = {
    // filter: '(objectClass=inetOrgPerson)',
    // scope: 'sub',
    // attributes: ['sn', 'cn' , 'dn' , 'userPassword']
    // };
    
    // const client = ldap.createClient({
    // url: ['ldap://localhost:10389', 'ldap://localhost:10389']
    // });
    
    // function searchClient(){
    //     client.search('ou=users,ou=system', opts, (err, res) => {
    //         if(err){
    //         console.log("Error in search")
    //     }else{

    //         res.on('searchEntry', (entry) => {

    //             const dn = JSON.stringify(entry.object.dn);
    //             const sn = JSON.stringify(entry.object.sn);
    //             const cn = JSON.stringify(entry.object.cn);
    //             const userPassword = JSON.stringify(entry.object.userPassword);
    //             console.log(JSON.stringify(entry.object.dn))

    //                 const ldapdocument =  ldapModel({
    //                     dn,
    //                     sn,
    //                     cn,
    //                     userPassword
    //                 })
    //                 ldapdocument.save()
                    
    //         });

    //     } 

    // });
    // }

    // function authenticateDN(username , password){
    //     client.bind(username, password, (err) => {
    //         if(err){
    //             console.log("Error in new connection" + err)
    //         }else{
    //             console.log("We Got Success in Our Connection")
    //             searchClient();
    //         }
    //     });
        
    // }

    // authenticateDN("uid=admin,ou=system" , "secret")