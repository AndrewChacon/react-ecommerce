import React, { useEffect } from 'react';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Shopping.scss';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { connect } from 'react-redux';
import { getItems } from '../../actions/items';

const Shopping = ({ getItems, items }) => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div className="wrapper">
        {/* <ItemCard itemName="The Self-Taught Programmer" itemPrice="20.78" />
        <ItemCard itemName="C Programming Language" itemPrice="51.99" />
        <ItemCard
          itemName="Victrola Vintage Suitcase Turntable with Speakers"
          itemPrice="44.86"
        />
        <ItemCard itemName="Best Developer Coffee Mug" itemPrice="19.95" />
        <ItemCard itemName="The Bro Code" itemPrice="9.49" />
        <ItemCard itemName="The Clean Coder" itemPrice="28.99" />
        <ItemCard itemName="Clean Architecture" itemPrice="23.49" />
        <ItemCard
          itemName="Electronic Accessory Organizer Panel"
          itemPrice="22.99"
        />
        <ItemCard itemName="Jotaro Kujo Hat" itemPrice="23.30" /> */}
        {items.map((item, key) => {
          return (
            <ItemCard
              key={item.id}
              itemName={item.name}
              itemPrice={item.price}
              itemImage={item.imgUrl}
            />
          );
        })}
      </div>

      {/* <div className="pag-wrapper">
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="/" />
          </PaginationItem>
        </Pagination>
      </div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  // isAuthenticated: state.auth.isAuthenticated
  items: state.items.items
});

export default connect(mapStateToProps, { getItems })(Shopping);
