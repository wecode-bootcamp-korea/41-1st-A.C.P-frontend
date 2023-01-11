import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './FilterModal.scss';

function FilterModal({ categoryInfo }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChkClick = (category, title) => {
    const getAll = searchParams.getAll(category);

    if (getAll.includes(title)) {
      const filteredTitles = getAll.filter(item => item !== title);
      searchParams.delete(category);
      filteredTitles.forEach(title => {
        searchParams.append(category, title);
      });
      setSearchParams(searchParams);
    } else {
      searchParams.append(category, title);
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
                          handleChkClick(filterCate.category, subCate.title)
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
