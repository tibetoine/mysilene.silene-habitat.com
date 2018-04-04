import { filter } from 'lodash';

export default {
    filteredNews: state => filter(state.news.fullList, news => state.news.selectedTypes.indexOf(news.type) > -1),
    filteredContacts: state => {
        return state.contacts.fullList.filter(contact => {
            var isFiltered = false;
            if ((state.contacts.search == "" || state.contacts.search == null) && !state.contacts.filterSst){
                /* On ne filtre pas dans ce cas là */
                return true;
            }
            if (state.contacts.search != "" && state.contacts.search != null){
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
            } else {
                //console.log("state.contacts.filterSst : " + state.contacts.filterSst);
                if (state.contacts.filterSst && contact.silenesst == "1") {
                    isFiltered = true;
                }
            }
            //console.log("isFiltered : " + isFiltered);
            return isFiltered;
        });
    }
};


