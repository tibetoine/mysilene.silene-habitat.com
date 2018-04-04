import api from './api'

export default {
    //TANK
    getContacts: () => api.get(`api/contacts`),
    getNews: () => api.get(`api/news`)
}

const getFakeNews = async () => ([
    {
        type:"actualites",
        content:"coucou actu"
    },
    {
        type:"flashInfos",
        content:"coucou flash infos"
    },
    {
        type:"facebook",
        content:"coucou facebook"
    }
]);