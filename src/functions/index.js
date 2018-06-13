import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'

admin.initializeApp()

const db = admin.firestore()

const message = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`from Babelified Cloud Functions!`);
        }, 5000);
    });
};

export let helloWorld = functions.https.onRequest(async (req, res) => {
    try {
        //const { price = 50000 } = req.query
        //const query = await db.collection('sell').where('price', '<', parseInt(price))
        //const results = await query.get()
        //const docs = results.docs
        //const data = docs.map(doc => {
//            return doc.data()
        //})
        res.status(200).send('data');
    }
    catch (err) {
        console.log(err)
    }
});