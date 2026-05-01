import { useEffect } from 'react'

const SITE_NAME = 'ALBuild Group'

export default function usePageTitle(pageTitle) {
  useEffect(() => {
    const prev = document.title
    document.title = pageTitle
      ? `${pageTitle} | ${SITE_NAME}`
      : `${SITE_NAME} — Building Strong Foundations for Tomorrow`
    return () => { document.title = prev }
  }, [pageTitle])
}
