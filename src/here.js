const hereCredentials = {
   id: 'UQ75LhFcnAv0DtOUwBEA',
   code: 'f5nyezNmYF4wvuJqQgNSkg'
}

const hereIsolineUrl = (options) =>
`https://isoline.route.api.here.com/routing/7.2/calculateisoline.json
?app_id=${hereCredentials.id}
&app_code=${hereCredentials.code}
&mode=shortest;${options.mode};
traffic:${options.traffic ? 'enabled' : 'disabled'}
&start=geo!${options.center[0]},${options.center[1]}
&range=${options.range}
&rangetype=${options.type}`

const hereTileUrl = (style) => `https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/512/png8?app_id=${hereCredentials.id}&app_code=${hereCredentials.code}&ppi=320`;

const maxIsolineRangeLookup = {
   time: 32400,
   distance: 800000
}

export {
   hereCredentials,
   hereIsolineUrl,
   hereTileUrl,
   maxIsolineRangeLookup
}
