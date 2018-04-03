export default {
    selectedContact : null,
    contacts: {
        search : "",
        filterSst : false,
        fullList:[]
    },
    news: {
        filterDialogVisible: false,
        types: [{
            value: "actualites",
            label: "Actualités"
        }, {
            value: "flashInfos",
            label: "Flash infos"
        }, {
            value: "facebook",
            label: "Facebook"
        }],
        selectedTypes: ["actualites", "flashInfos", "facebook"],
        fullList: []
    }
};