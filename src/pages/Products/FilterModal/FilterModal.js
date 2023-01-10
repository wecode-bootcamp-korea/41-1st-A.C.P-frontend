import React from 'react';
import { Link } from 'react-router-dom';
import './FilterModal.scss';

function FilterModal({ categoryInfo }) {
  return (
    <div className="filterModal">
      {categoryInfo.map((filterCate, index) => {
        const { categoryList } = filterCate;
        return (
          <div key={filterCate.id} className="filterCategoryL">
            <ul>
              <li className="filterCategoryM">{filterCate.name}</li>
              {categoryList.map(subCate => {
                return (
                  <Link
                    key={subCate.id}
                    className="filterCategoryS"
                    to={`/products?${filterCate.category}=${subCate.id}`}
                  >
                    <li className="checkBox">
                      <label className="checkBoxCustom">
                        <input className="inpCheck" type="checkbox" />
                        {subCate.title}
                      </label>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
export default FilterModal;
