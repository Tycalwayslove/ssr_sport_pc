import fetch from './fetch'
export const getSportList = (data) =>
  fetch({
    url: '/GetPlayData/GetPalyForType',
    methods: 'GET',
    data
  })
