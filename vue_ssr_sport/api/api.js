import fetch from './fetch'
export const getTab = (data) =>
  fetch({
    url: '/GetPlayData/GetPalyForType',
    methods: 'GET',
    data
  })
