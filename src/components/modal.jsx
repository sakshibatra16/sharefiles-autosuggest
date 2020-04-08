import React, { Component } from "react";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.items = [
      { name: "Adrianna", email: "adrianna@gmail.com", isOwner: true },
      { name: "Judd", email: "judd@live.in" },
      { name: "Anna", email: "anna@example.in" },
      { name: "Reta", email: "reta@example.in" },
      { name: "Toney", email: "toney@live.in" },
      { name: "Alene", email: "alene@live.in" },
      { name: "Ivah", email: "ivah@live.in" },
      { name: "Alda", email: "alda@example.in" },
      { name: "Courtney", email: "courtney@live.in" },
      { name: "Cynthia", email: "cynthia@example.in" },
      { name: "Elda", email: "elda@example.in" },
      { name: "Kamron", email: "kamron@live.in" },
    ];
  }
  state = {
    owner: [],
    selectedMember: [],
    suggestionList: [],
  };
  componentDidMount() {
    let owner = this.items.find((obj) => {
      return obj.isOwner === true;
    });
    this.setState({ owner: owner });
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      let regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v.name));
    }
    this.setState({
      suggestionList: suggestions,
    });
  };
  addMember = (item) => {
    let selectedMemberItem = this.state.selectedMember.concat([item]);
    this.setState({
      selectedMember: selectedMemberItem,
      suggestionList: [],
    });
    var index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  };
  removeMember = (item) => {
    this.items.push(item);
    let newMemberList = this.state.selectedMember;
    var index = newMemberList.indexOf(item);
    if (index > -1) {
      newMemberList.splice(index, 1);
    }
    this.setState({
      selectedMember: newMemberList,
      suggestionList: [],
    });
  };
  renderSuggestions() {
    if (this.state.suggestionList.length === 0) {
      return null;
    }
    return (
      <ul className="suggestion_list">
        {this.state.suggestionList.map((item) => (
          <li onClick={() => this.addMember(item)}>
            <div>{item.name}</div>
            <div>{item.email}</div>
          </li>
        ))}
      </ul>
    );
  }
  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-header row">
            <div className="col-12">
              <h4 className="modal-title float-left font-weight-bold">
                Sharing Settings
              </h4>
              <button
                type="button"
                className="close"
                onClick={this.props.handleClose}
              >
                &times;
              </button>
            </div>
            <div className="col-12">
              <span className="add_member pt-5">Add Member</span>
              <input
                type="text"
                placeholder="Enter name or registered email id"
                className="autosuggest_input"
                onChange={this.onTextChanged}
              ></input>
              {this.renderSuggestions()}
            </div>
          </div>

          <div className="modal-body">
            <div className="col-12">
              <span className="add_member">Owner</span>
              <ul>
                <li>
                  <div>{this.state.owner.name}</div>
                  <div>{this.state.owner.email}</div>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <span className="add_member">Members</span>
              <ul>
                {this.state.selectedMember.map((item) => (
                  <li>
                    <button
                      type="button"
                      className="close"
                      onClick={() => this.removeMember(item)}
                    >
                      &times;
                    </button>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.handleClose}
            >
              DONE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
