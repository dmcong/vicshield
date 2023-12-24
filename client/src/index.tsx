import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import View from './view'
import reportWebVitals from './reportWebVitals'
import WalletProvider from './providers/Wallet.provider'

import 'static/styles/index.less'
import 'index.less'
import { Provider } from 'react-redux'
import store from './store/rootStore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <WalletProvider>
        <View />
      </WalletProvider>
    </BrowserRouter>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
