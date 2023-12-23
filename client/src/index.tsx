import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from 'store'
import View from './view'
import reportWebVitals from './reportWebVitals'
import WalletProvider from 'providers/Wallet.provider'

import 'static/styles/index.less'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <WalletProvider>
      <Provider store={store}>
        <View />
      </Provider>
    </WalletProvider>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
