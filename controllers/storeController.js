const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.getStoreBySlug = async (req, res) => {
   const store = await Store.findOne({ slug: req.params.slug })
   res.send(store);
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body).save());
    res.send(store);
}


exports.editStore = async (req, res) => {
    // find the store given the id
    const store = await Store.findOne({ slug: req.params.slug })
    res.render('editstore', { title: `Edit ${store.name}`, store })

}