/*eslint-disable*/
import React from 'react';

function FilterModal({ categoryInfo }) {
  return (
    <>
      <div className="filterModal">
        {categoryInfo.map(function (categoryM, index) {
          return (
            <div className="filterCategoryL">
              <ul>
                <li className="filterCategoryM">{categoryM.name}</li>
                {categoryM.category.map(categoryS => {
                  return (
                    <li key={categoryS.id} className="filterCategoryS">
                      <input className="checkbox" type="checkbox" />
                      {categoryS.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FilterModal;
