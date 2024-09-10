// const mongoose = require('mongoose');
// //const mongoUri="mongodb+srv://dnyaneshwargb2004:Shares@cluster0.psqfeas.mongodb.net/GoFoodMern?retryWrites=true&w=majority&appName=Cluster0"
// const mongoUri="mongodb://dnyaneshwargb2004:Shares@ac-qm4oxf0-shard-00-00.psqfeas.mongodb.net:27017,ac-qm4oxf0-shard-00-01.psqfeas.mongodb.net:27017,ac-qm4oxf0-shard-00-02.psqfeas.mongodb.net:27017/GoFoodMern?ssl=true&replicaSet=atlas-kws3dv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
// const mongoConnect=()=>{
//     mongoose.connect(mongoUri)
//     .then(() =>{ 
//         console.log('Connected Successfully')
//         const fetched_data= mongoose.connection.db.collection('food_items');
//         fetched_data.find({}).toArray(/*async function(err,data){*/)
//         .then((data)=>{
//             const foodCatagory= mongoose.connection.db.collection('food_category');
//             foodCatagory.find({}).toArray()
//                 .then((catData)=>{
//                     global.food_items =data;
//                     global.foodCatagory =catData;
//                 })
//                 .catch((err)=>{
//                     console.log(err);
//                 })
//          })
//          .catch((err) => { console.error(err); });
//     })

//     .catch((err) => { console.error(err); });
// }
// module.exports=mongoConnect;





const mongoose = require('mongoose');
//const mongoUri="mongodb+srv://dnyaneshwargb2004:Shares@cluster0.psqfeas.mongodb.net/GoFoodMern?retryWrites=true&w=majority&appName=Cluster0"
const mongoUri="mongodb://dnyaneshwargb2004:Shares@ac-qm4oxf0-shard-00-00.psqfeas.mongodb.net:27017,ac-qm4oxf0-shard-00-01.psqfeas.mongodb.net:27017,ac-qm4oxf0-shard-00-02.psqfeas.mongodb.net:27017/GoFoodMern?ssl=true&replicaSet=atlas-kws3dv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const mongoConnect=()=>{
    mongoose.connect(mongoUri)
    .then(() =>{ 
        console.log('Connected Successfully')
        const fetched_data= mongoose.connection.db.collection('food_items');
        fetched_data.find({}).toArray(/*async function(err,data){*/)
        .then((data)=>{
            const foodCatagory= mongoose.connection.db.collection('food_category');
            foodCatagory.find({}).toArray()
                .then((catData)=>{
                    const foodCatagory= mongoose.connection.db.collection('profile');
                    foodCatagory.find({}).toArray()
                        .then((pData)=>{
                        global.food_items =data;
                        global.foodCatagory =catData;
                        global.profileData=pData;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                })
                .catch((err)=>{
                    console.log(err);
                })
         })
         .catch((err) => { console.error(err); });
    })

    .catch((err) => { console.error(err); });
}
module.exports=mongoConnect;




