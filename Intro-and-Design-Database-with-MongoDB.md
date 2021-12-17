# Soal 1 One to One
{
    "_id": "ObjectId('AAA')",
    "fullName" : "Qimora Enjelika Simanjuntak",
    "email" : "qimorasimanjuntak27@gmail.com",
    "phoneNumber" : "538121"
}

# Soal 2 One to many
{
    "_id": "ObjectId('AAA')",
    "fullName" : "Qimora Enjelika Simanjuntak",
    "phoneNumber" : "538121",
    "address" : [
        {street: 'adisucipto'},
        {street: 'asdfghjk'}
    ]
}

# Soal 3 One to many
{
    "_id": "ObjectId('AAA')",
    "productName" : "Kaos Polos",
    "brandName" : "SkilShirt",
    "varian" : [{
        "_id": "ObjectId('AAA')",
        "varianName": "Kaos polos hitam",
        "color": "Hitam",
        "quantity": "12",
        "price": "99.000"
    },
    {
       "_id": "ObjectId('AAA')",
        "varianName": "Kaos polos navy",
        "color": "Navy",
        "quantity": "10",
        "price": "99.000" 
    }
    ]
}

# Soal 4 One to many
[
{
   "_id": "ObjectId('AAA')", 
   "cinemaName": "CGF",
   "location": "pondok indah mall",
   "film" : [{
       {   
           "_id": "ObjectId('AAA')", 
           "filmName":"venom 2"
        },
       {
           "_id": "ObjectId('AAA')", 
           "filmName":"Spiderman No Way Home"
           }
   }]
},
{
   "_id": "ObjectId('AAA')", 
   "cinemaName": "Cinema31",
   "location": "Mall Kelapa Gading",
   "film" : [{
       {
           "_id": "ObjectId('AAA')", 
           "filmName":"venom 2"
       },
       {
           "_id": "ObjectId('AAA')", 
           "filmName":"Spiderman No Way Home"
           }
   }]
}
]