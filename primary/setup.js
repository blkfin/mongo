rsconf = {
   _id : "rsmongo",
   members: [
       {
           "_id": 0,
           "host": "primary:27017",
           "priority": 4
       },
       {
           "_id": 1,
           "host": "secondary1:27017",
           "priority": 2
       },
       {
           "_id": 2,
           "host": "secondary2:27017",
           "priority": 1
       }
   ]
}
 
rs.initiate(rsconf); 