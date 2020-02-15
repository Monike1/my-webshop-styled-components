import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// two methods of gettenig data from database
firestore.collection('users').doc('toM7aCAYiIIkysf0Nyey').collection('cartItems').doc('C0PZ3MbGR5BVlqm5JsRh');
// second method of getting data
firestore.doc('/users/toM7aCAYiIIkysf0Nyey/cartItems/C0PZ3MbGR5BVlqm5JsRh');
firestore.collection('/users/toM7aCAYiIIkysf0Nyey/cartItems');