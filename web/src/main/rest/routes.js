import api from './api'

export default {
    //TANK
    getContacts: () => api.get(`api/contacts`),
    getNewsOld: () => api.get(`api/news`),
    getNews: () => api.get(`api/newsSilene`)
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