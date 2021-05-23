import React, { Component } from 'react';
import './SortAndFilter.scss';

class SortAndFilter extends Component {
    render() {
        const { count, sort, category, sortProducts, filterProducts } = this.props;
        return (
            <div className="sort-filter">
                <p className="sort-filter__count">{count}Rugs</p>
                <div className="sort-filter__sort">
                    <p className="sort-filter__title">Sort </p>
                    <select value= {sort} onChange= {sortProducts}>
                        <option value="default">Default</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
                <div className="sort-filter__filter">
                    <p className="sort-filter__title">Filter</p>
                    <select value= {category} onChange= {filterProducts}>
                        <option>All</option>
                        <option value="highest">Vintage</option>
                        <option value="lowest">Primitive</option>
                        <option value="lowest">Boho</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default SortAndFilter;