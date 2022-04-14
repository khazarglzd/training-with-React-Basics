import React from "react";

class Collapse extends React.Component {
  state = {
    showContent: false,
  };

  showMore = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  };
  render() {
    return (
      <div className="mx-5 my-5">
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(
            this.props.children,
            (child) => child.props.cardTitle
          )}
        </button>
        {this.state.showContent ? (
          <div className="collapse show">
            {/* {this.props.children} */}
            {React.Children.map(this.props.children, (child) => child)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
