import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function MyComponent() {
  return (
    <div>
      <FontAwesomeIcon 
      icon={faShoppingCart} 
      style={{ color: 'blue', fontSize: '1em', marginRight: '10px' }}
      />
    </div>
  );
}

export default MyComponent;