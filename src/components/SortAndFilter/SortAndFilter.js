import React, { Component } from 'react';
import './SortAndFilter.scss';
import {filterProducts, sortProducts} from '../../actions/productActions';
import {connect} from 'react-redux'

class SortAndFilter extends Component {
    render() {
        const { sort, filterProducts ,products, category, sortProducts, filteredProducts } = this.props;
        return (
            !filteredProducts ? 
            <div>Loading...</div>:
            <div className="sort-filter">
                <p className="sort-filter__count">{filteredProducts.length} Rugs</p>
                <div className="sort-filter__sort">
                    <p className="sort-filter__title">Sort by price </p>
                    <select className="sort-filter__select" value= {sort} onChange= {(e) => sortProducts(filteredProducts, e.target.value)}>
                        <option value="latest">Default</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
                <div className="sort-filter__filter">
                    <p className="sort-filter__title">Style</p>
                    <select className="sort-filter__select" value= {category} onChange= {(e)=>filterProducts(products, e.target.value)}>
                        <option value="">All</option>
                        <option value="Vintage">Vintage</option>
                        <option value="Primitive">Primitive</option>
                        <option value="Boho">Boho</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
}), {
    //second parameter for mapping actions
    filterProducts,
    sortProducts
})(SortAndFilter);
