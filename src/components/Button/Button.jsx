import './ButtonStyle.css'
import whiteArrow from '../../assets/white-arrow.svg'
import PropTypes from 'prop-types';

export const Button = ({ arrow, buttonStyle, children, ...props }) => {
  return (
    <>
      <button className={`button ${buttonStyle}`} {...props}>
        {children} {arrow && <img src={whiteArrow} />}
      </button>
    </>
  )
}

Button.propTypes = {
  arrow: PropTypes.bool,
  buttonStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
};
