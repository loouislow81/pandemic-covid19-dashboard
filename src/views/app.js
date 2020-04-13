/*
  Krunch Asynchronous Environment for routing, mouting and
  enable the build-in utilities.
*/
(async function main() {
  await krunch.compile()

  // Routing
  // Isomorphic urls routing api.
  krunch.register('router', route.Router)
  krunch.register('route', route.Route)

  // Mounting
  // If you mount the main view component, krunch will
  // automatically mounts the rest of the view components
  // inheritly. See `src/views/components`.
  const components = 'app'
  krunch.mount(components)

  // Caching
  // Store everything locally by default except for the
  // 3rd-party remote assets.
  // const assets = [] // url or file path
  // krunch.addCache(assets)

  // Utilities
  // See `libs/krugurt+utilities.js`
  // krunch.lang() // enable localization
  // krunch.probeConnection() // check network connection
  // krunch.networkSpeed() // show network properties

}())
