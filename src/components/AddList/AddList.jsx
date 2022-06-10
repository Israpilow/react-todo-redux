import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import List from '../List/List';
import Badge from '../Badge/Badge';
import { setAddList } from '../../redux/actions/lists';

import closeSvg from '../../assets/img/close.svg';
import './AddList.scss';

const AddList = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectColor, setSelectColor] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const { colors } = useSelector(({ colors }) => colors);
  const dispatch = useDispatch();

  const onVisiblePopup = () => {
    setVisiblePopup(true);
  };

  const onClosePopup = () => {
    setVisiblePopup(false);
  };
  const list = colors.filter((color) => color.id === selectColor);
  const onAddList = () => {
    axios
      .post('http://localhost:3001/lists/', {
        name: inputValue,
        colorId: selectColor,
      })
      .then(({ data }) => {
        const color = colors.filter((color) => color.id === selectColor)[0];
        const newList = { ...data, color, tasks: [] };
        dispatch(setAddList(newList));
        setAddList(setInputValue(''));
        setVisiblePopup(false);
      });
  };

  return (
    <div className="add-list">
      <List
        onClick={onVisiblePopup}
        items={[
          {
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 6H11"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: 'Добавить',
          },
        ]}
      />

      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={onClosePopup}
            src={closeSvg}
            alt="closeSvg"
            className="add-list__popup-close"
          />
          <input onChange={(e) => setInputValue(e.target.value)} type="text" className="field" />
          <div className="add-list__popup-colors">
            {colors.map((item) => {
              return (
                <Badge
                  key={item.id}
                  color={item}
                  onClick={() => setSelectColor(item.id)}
                  className={selectColor === item.id ? 'active' : ''}
                />
              );
            })}
          </div>
          <button onClick={onAddList} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
