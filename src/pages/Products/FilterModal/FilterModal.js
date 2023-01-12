import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './FilterModal.scss';

function FilterModal({ categoryInfo }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChkClick = (category, id) => {
    const getAll = searchParams.getAll(category);
    const idStr = id.toString();

    if (getAll.includes(idStr)) {
      const filteredIds = getAll.filter(item => item !== idStr);
      searchParams.delete(category);
      filteredIds.forEach(id => {
        searchParams.append(category, id);
      });
      setSearchParams(searchParams);
    } else {
      searchParams.append(category, id);
      setSearchParams(searchParams);
    }
  };

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
                  <li key={subCate.id} className="checkBox">
                    <label className="checkBoxCustom">
                      <input
                        className="inpCheck"
                        type="checkbox"
                        onClick={() =>
                          handleChkClick(filterCate.category, subCate.id)
                        }
                      />
                      {subCate.title}
                    </label>
                  </li>
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
