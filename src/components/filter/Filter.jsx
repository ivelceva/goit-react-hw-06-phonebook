import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

   const handleChangeFilter = event => {
     const value = event.target.value;
     dispatch(setFilter(value));
   };

  return (
    <div className={css.contactsFilter}>
      <label>
        <p className={css.find}>Find contacts by name</p>
        <input
          className={css.input}
          name="filter"
          type="text"
          placeholder="search..."
          value={filter}
          onChange={handleChangeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

export default Filter;

// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

// const Filter = ({ handleChangeFilter, filter }) => {
//   return (
//     <div className={css.contactsFilter}>
//       <label>
//         <p className={css.find}>Find contacts by name</p>
//         <input
//           className={css.input}
//           name="filter"
//           type="text"
//           placeholder="search..."
//           value={filter}
//           onChange={handleChangeFilter}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//     </div>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handleChangeFilter: PropTypes.func.isRequired,
// };

// export default Filter;
