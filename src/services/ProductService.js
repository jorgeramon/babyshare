import firebase from 'firebase';

class ProductService {

  create(product) {
    return firebase.firestore().collection('products').add(product);
  }

  getAll() {
    return firebase.firestore().collection('products').get();
  }
}

export default new ProductService();
