import { filter } from 'lodash';

export default {
    filteredNews: state => filter(state.news.fullList, news => state.news.selectedTypes.indexOf(news.type) > -1),
    filteredContacts: state => {
        return state.contacts.fullList.filter(contact => {
            var isFiltered = false;
            isFiltered =
                isFiltered ||
                contact.sn.toLowerCase().indexOf(state.contacts.search.toLowerCase()) > -1;
            if (contact.givenName != null) {
                isFiltered =
                    isFiltered ||
                    contact.givenName.toLowerCase().indexOf(state.contacts.search.toLowerCase()) >
                    -1;
            }
            if (state.contacts.search.toLowerCase() == "sst" && contact.silenesst == "1") {
                isFiltered = true;
            }
            return isFiltered;
        });
    }
};


