import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button className='close-btn'>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>nav links</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
