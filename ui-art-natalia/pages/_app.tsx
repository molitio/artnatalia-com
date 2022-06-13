import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppShell } from '@molitio/ui-core'

function UiArtNatalia({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default UiArtNatalia
