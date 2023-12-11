import { Component } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const filters = [
  {
    id: 'africa',
  },
  {
    id: 'america',
  },
  {
    id: 'asia',
  },
  {
    id: 'europe',
  },
  {
    id: 'oceania',
  },
];

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: false,
    };

    this.onOpenOptionHandler = this.onOpenOptionHandler.bind(this);
    this.onFilterOptionHandler = this.onFilterOptionHandler.bind(this);
  }

  onOpenOptionHandler(event) {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        option: !prevState.option,
      };
    });
  }

  onFilterOptionHandler(event) {
    this.setState({
      option: false,
    });
    const id = event.target.id;

    this.props.filterHandler(id);
  }

  render() {
    return (
      <div className="mt-10 lg:mt-0 relative font-semibold">
        <button
          onClick={this.onOpenOptionHandler}
          className="w-60 px-8 py-4 flex justify-between items-center shadow-md rounded-md dark:bg-dark-element dark:text-white"
        >
          Filter by Region
          {this.state.option ? (
            <MdKeyboardArrowUp className="text-2xl dark:text-white" />
          ) : (
            <MdKeyboardArrowDown className="text-2xl dark:text-white" />
          )}
        </button>
        {this.state.option && (
          <div className="absolute w-60 px-8 py-5 top-16 left-0 flex flex-col gap-3 justify-center items-start shadow-md rounded-md bg-white dark:bg-dark-element dark:text-white">
            {filters.map(({ id }) => (
              <button
                onClick={this.onFilterOptionHandler}
                key={id}
                id={id}
                className="capitalize"
              >
                {id}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Filter;
