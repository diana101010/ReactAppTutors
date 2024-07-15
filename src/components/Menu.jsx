function Menu({ item, isVisible }) {
  if (!isVisible) {
      return <button>{ "<"}</button>;
  }
    return (
      <>
          <ul>
              {items.map((el.index) => `` {return < MenuItem key={index} itemName={el}/>})}
            </ul>
            <button>{ "<"}</button>
    </>
  );
}

export default Menu;
