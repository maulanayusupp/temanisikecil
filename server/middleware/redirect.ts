export default defineEventHandler((event) => {
  const host = getRequestHost(event)
  const url = getRequestURL(event)

  // Redirect non-www to www and http to https
  if (host === 'temanisikecil.com' || url.protocol === 'http:') {
    const redirectUrl = `https://www.temanisikecil.com${url.pathname}${url.search}`
    return sendRedirect(event, redirectUrl, 301)
  }
})
