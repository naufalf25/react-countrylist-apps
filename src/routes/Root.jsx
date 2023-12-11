import { Component } from 'react';
import Layout from '../components/Layout';
import Search from '../components/root/Search';
import {
  getAllCountries,
  getCountryByName,
  getCountryByRegion,
} from '../utils';
import CountryLists from '../components/root/CountryLists';
import Loading from '../components/root/Loading';
import Filter from '../components/root/Filter';

export class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
      error: null,
    };

    this.onGetKeywordHandler = this.onGetKeywordHandler.bind(this);
    this.onGetFilterHandler = this.onGetFilterHandler.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await getAllCountries();
      const sortByAlphabet = data.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }

        if (a.name.common > b.name.common) {
          return 1;
        }

        return 0;
      });

      this.setState({
        data: sortByAlphabet,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  }

  async onGetKeywordHandler(keyword) {
    this.setState({
      loading: true,
    });

    try {
      let data;
      if (keyword.length > 0) {
        data = await getCountryByName(keyword.toLowerCase());
      } else {
        data = await getAllCountries();
      }

      const sortByAlphabet = data.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }

        if (a.name.common > b.name.common) {
          return 1;
        }

        return 0;
      });

      this.setState({
        data: sortByAlphabet,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  }

  async onGetFilterHandler(filter) {
    this.setState({
      loading: true,
    });

    try {
      const data = await getCountryByRegion(filter.toLowerCase());
      const sortByAlphabet = data.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }

        if (a.name.common > b.name.common) {
          return 1;
        }

        return 0;
      });

      this.setState({
        data: sortByAlphabet,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  }

  render() {
    return (
      <Layout>
        <div className="mt-2 p-5 md:px-12 lg:px-20">
          <div className="lg:flex lg:justify-between lg:items-center">
            <Search searchHandler={this.onGetKeywordHandler} />
            <Filter filterHandler={this.onGetFilterHandler} />
          </div>
          {this.state.loading ? (
            <Loading />
          ) : (
            <CountryLists data={this.state.data} keyword={this.state.keyword} />
          )}
        </div>
      </Layout>
    );
  }
}

export default Root;
