import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductContext } from 'context/Context';
import { getProductsQuantity } from 'helpers/utils';

const CartNotification = () => {
  const {
    productsState: { cartItems }
  } = useContext(ProductContext);

  return (
    <Nav.Item as="li" className="d-none d-sm-block">
      <Nav.Link
        as={Link}
        href="/e-commerce/shopping-cart"
        className={classNames('px-0', {
          'notification-indicator notification-indicator-warning notification-indicator-fill':
            getProductsQuantity(cartItems)
        })}
      >
        <a>
          <span className="notification-indicator-number">
            {getProductsQuantity(cartItems)}
          </span>
          <FontAwesomeIcon
            icon="shopping-cart"
            transform="shrink-7"
            className="fs-4"
          />
        </a>
      </Nav.Link>
    </Nav.Item>
  );
};

export default CartNotification;
