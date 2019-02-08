const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const Seller = mongoose.model('Seller')


exports.getStoreBySlug = async (req, res) => {
    const store = await Store.findOne({ slug: req.params.slug }).populate('seller')
    res.json(store);
}

exports.createStore = async (req, res) => {
    const checkStore = await Store.findOne({seller: req.params.sellerid})
    if (checkStore){
        throw Error('Seller already owns a store')
    }
    req.body.seller = req.params.sellerid
    const store = await (new Store(req.body).save());
    const seller = await Seller.findOneAndUpdate({ _id: req.params.sellerid }, { store: store._id }, {
        new: true,
        runValidators: true
    }).exec();
    console.log({store, seller})
    res.json({ store });
}


exports.editStore = async (req, res) => {
    // find the store given the slug
    const store = await Store.findOne({ slug: req.params.slug })
    res.json(store);
}

exports.updateStore = async (req, res) => {
    const store = await Store.findOneAndUpdate({ slug: req.params.slug }, req.body, {
        new: true,
        runValidators: true
    }).exec();
    res.json(store);
}

exports.deleteStore = async (req, res) => {
    await Store.findOneAndRemove({ slug: req.params.slug })
    res.json({ message: 'Store deleted' });
}