import UserContact from '../userContact/UserContact';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
//import { getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter) || '';



   const contactSearch = contacts.filter(user => {
     const name = user.name || '';
     return name.toLowerCase().includes(filter.toLowerCase());
   });
  // const filterContact = (name, filter) => {
  //   return name.toLowerCase().includes(filter.toLowerCase());
  // };

  // const contactSearch = contacts.filter(user => {
  //   return filterContact(user.name, filter);
  // });

  return (
    <ul className={css.list}>
      {contactSearch.map(({ name, number, id }) => (
        <li className={css.user} key={id}>
          <UserContact name={name} number={number} />
          <button
            className={css.btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';
// import UserContact from '../userContact/UserContact';

// const ContactList = ({ contactSearch, deleteContact }) => {
//   return (
//     <ul className={css.list}>
//       {contactSearch.map(({ name, number, id }) => (
//         <li className={css.user} key={id}>
//           <UserContact name={name} number={number} />
//           <button className={css.btn} onClick={() => deleteContact(id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contactSearch: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;

//import PropTypes from 'prop-types';
