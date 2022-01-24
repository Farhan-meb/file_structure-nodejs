const getDiscountPercent = allProducts => {
	const products = [];
	for (const product of allProducts) {
		let percentDiscount = 0;
		if (product.discountedPrice <= product.price) {
			percentDiscount = parseInt(
				100 - (product.discountedPrice / product.price) * 100
			);
		}
		let tempPrdocuts = { ...product, percentDiscount };
		products.push(tempPrdocuts);
	}
	return products;
};

module.exports = {
	getDiscountPercent
}