import './App.css';
import { useState } from 'react'
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

const greeterAddress = 'blah'

function App() {

  const [greeting setGreetingValue] = useState()


  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    // need to target actual greeterAddress
    // make a contract object through ethers.js library
    // call greet() from smart contract
    if ( typeof window.ethereum !== 'undefined' ) {
      const provider = new ethers.providers.Web3Provider( window.ethereum );
      const contract = new ethers.Contract( greeterAddress, Greeter.abi, provider )
      try {
        const data = await contract.greet()
        console.log('data', data)
      } catch(err) {
        console.log('error', err)
      }
    }
  }


  async function setGreeting() {
    if ( !greeter ) return
    if ( typeof window.ethereum !== 'undefined' ) {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider( window.ethereum );
      const signer = provider.getSigner()
      const contract = new ethers.Contract( greeterAddress, Greeter.abi, signer )
      const transaction = contract.setGreeting()
      await transaction.wait()
      fetchGreeting()

    }
  }
}
