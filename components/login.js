import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const styles = {
    loginpage: 'w-screen h-screen bg-white flex justify-center flex-col items-center',
    text:'text-4xl text-black mb-10',
}

const login = () => {
  return (
    <div className={styles.loginpage}>
      <p className={style.text}>login to access this app</p>
      {/* <WalletMultiButton /> */}
   </div>
  )
}

export default login
