import { useSearchParams } from 'react-router-dom';

function Modal({ MaterialsData }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChkClick = e => {
    searchParams.set('diameter', e.target.name);
    setSearchParams(searchParams);
  };
  return (
    <div className="filterModalMaterial">
      <ul className="materialFilterL">토분 지름</ul>
      {MaterialsData.potInfo[0].potCategory.map(i => {
        return (
          <li className="materialFilterM">
            <input
              name={i.title}
              onClick={handleChkClick}
              className="materialCheckBox"
              type="checkbox"
            ></input>
            {i.title}
          </li>
        );
      })}
    </div>
  );
}

export default Modal;
