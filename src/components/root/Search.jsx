import { Component } from 'react';
import { MdSearch } from 'react-icons/md';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    this.setState({
      search: event.target.value,
    });
  }

  onKeyDownHandler(event) {
    if (
      event.code === 'Enter' ||
      event.code === 'NumpadEnter' ||
      event.key === 'Enter'
    ) {
      this.props.searchHandler(this.state.search);
    }
  }

  render() {
    return (
      <div className="w-full lg:w-[30rem] px-8 py-4 flex gap-6 items-center shadow-md rounded-md dark:bg-dark-element">
        <div className="text-light-input">
          <MdSearch className="text-2xl dark:text-white" />
        </div>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            value={this.state.search}
            onChange={this.onSearchChangeHandler}
            onKeyDown={this.onKeyDownHandler}
            placeholder="Search for a country..."
            className="font-semibold focus:outline-none dark:bg-dark-element dark:text-white"
          />
        </div>
      </div>
    );
  }
}

export default Search;
