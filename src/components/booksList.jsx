import React, {Component} from 'react';
import queryString from 'query-string'
import Container from 'react-bootstrap/Container';

import BookSearchForm from './bookSearchForm';
import ListViewBooks from './listViewBooks';
import PaginationControls from './paginationControls';
import {getBooksAsync} from '../utils/apiHelper';
 
class BooksList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          books: [],
          count: 0
      };
      this.refreshData();
    }

    async refreshData() {
      const searchParams = queryString.parse(this.props.location.search);
      const pageIndex = parseInt(searchParams.page) || 1;
      const itemsPerPage = parseInt(searchParams.itemsPerPage) || 2;
      const searchTerm = searchParams.searchTerm || null;

      const bookListPagerInfo = await getBooksAsync(pageIndex, itemsPerPage, searchTerm);
      this.setState(state => ({
        ...bookListPagerInfo,
        pageIndex,
        itemsPerPage,
        searchTerm
      }));
    }

    updateURLSeachParameters(parameters) {
      const searchParams = queryString.parse(this.props.location.search);
      const object = {...searchParams, ...parameters};
      const updatedSearchParams = queryString.stringify(object);
      this.props.history.push({search: updatedSearchParams});
    }

    handlePageChanged(newPageIndex) {
      this.updateURLSeachParameters({page: newPageIndex});
    }

    handleTermSearch(termToSearchFor) {
        // when searching for a term, also reset the page to 1, to start fresh again
        this.updateURLSeachParameters({searchTerm: termToSearchFor, page: 1});
    }

    handleItemsPerPageChanged(newItemsPerPage) {
      // when updating the items per page count, also reset the page to 1, to start fresh again
      this.updateURLSeachParameters({itemsPerPage: newItemsPerPage, page: 1});
    }

    componentDidUpdate(prevProps) {
      const shouldRefreshData = prevProps.location.search !== this.props.location.search;
      if(shouldRefreshData) {
        this.refreshData();
      }
    }

    render() {
        const totalPagesCount = Math.ceil(this.state.count / this.state.itemsPerPage);
        return (
          <Container>
            <BookSearchForm onSearchTerm={this.handleTermSearch.bind(this)}/>
            <ListViewBooks books={this.state.books}/>
            <PaginationControls 
                page={this.state.pageIndex} 
                pagesCount={totalPagesCount}
                onButtonPreviousPressed={() => this.handlePageChanged.bind(this)(this.state.pageIndex - 1)}
                onButtonNextPressed={() => this.handlePageChanged.bind(this)(this.state.pageIndex + 1)}
                onItemsPerPageChanged={this.handleItemsPerPageChanged.bind(this)}
                itemsPerPage={this.state.itemsPerPage}
            />
          </Container>
        );
    }
}

export default BooksList;