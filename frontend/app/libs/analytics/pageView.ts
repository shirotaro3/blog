type WindowWithDataLayer = Window & {
  dataLayer: Record<string, unknown>[]
}

declare const window: WindowWithDataLayer

export const pageView = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  } else {
    console.log({
      event: 'pageview',
      page: url,
    })
  }
}
