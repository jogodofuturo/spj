
console.log("loaded tenant util")
function startTenant(host) {

  console.log("starting tenant util...")

  if (host.includes("www.")) {
    host = host.split("www.")[1]
  }

  var appNames = ["app", "checkout"]

  host = `/${host}`

  for (let appName of appNames) {
    host = host.replace(`/${appName}.`, "")
  }

  host = host.replace("/", "")

  window.tenantHostname = host

  const contentUrl = 'https://assets.' + host + '/_main'

  window.tenantContentUrl = contentUrl

  var link = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.getElementsByTagName('head')[0].appendChild(link)
  }
  link.href = contentUrl + "/favicon.ico"
}
