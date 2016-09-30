// TODO
// var Apples = () => (
//   <li>Apples</li>
// );

// var Bananas = () => (
//   <li>Bananas</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  itemClicked (event) {
    this.setState({
      done: !this.state.done
    })
  }

  mouseEntered (event) {
    this.setState({
      hover: !this.state.hover
    })
  }

  mouseLeft (event) {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
        <li style={style} onClick={this.itemClicked.bind(this)} onMouseEnter={this.mouseEntered.bind(this)} onMouseLeave={this.mouseLeft.bind(this)}>{this.props.item}</li>
    );
  }
};

let GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceries={['apples','bananas','oranges', 'juice', 'milk', 'bread']} />, document.getElementById('app'));









