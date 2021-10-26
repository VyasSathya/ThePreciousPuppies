import React, { useState } from 'react';
import minus from 'assets/minus.svg';
import plus from 'assets/plus.svg';
import puppy from 'assets/puppi1.svg';
import oval from 'assets/Path 3.png';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
//precious puppies working 0.04 (eth)
//import PreciousPuppies from 'abi/ABI.json';
// 0.07 general purpose abi
import PreciousPuppies from 'abi/ABIgeneral.json';

const Precious = () => {
  const [count, setCount] = useState(1);
  
  const [remainingPups, setRemainingPups] = useState("10000");
  const [sellStatus, setSellStatus] = useState("coming soon");
  // const [sellStatus, setSellStatus] = useState("connect");
  //const [sellStatus, setSellStatus] = useState("sold out");

  
  
  const handleIncrement = () => {
    if (count < 20) setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const connectToMetamask = async () => {
    console.log('calling');
    const provider = await detectEthereumProvider();
    console.log('Provider: ', provider);
    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      console.log('Starting App');
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }
      const web3 = new Web3(provider);
      await provider.enable();
      const chainId = await provider.request({ method: 'eth_chainId' });
      console.log('Network Connected to: ', chainId);
      let currentAccount = null;
      currentAccount = await provider
        .request({ method: 'eth_accounts' })
        .catch((err) => {
          // Some unexpected error.
          // For backwards compatibility reasons, if no accounts are available,
          // eth_accounts will return an empty array.
          console.error(err);
        });
      const myAccount = "" + currentAccount[0];
      if (myAccount !== '') {
        //Contract Address
        //puppies at 0.04 (working)
        //const address = '0x6Dbb318EB58bF84910719500A6304dEFb844DEcc';
        //general purpose 0.07
        const address = '0x3fd6Aa22B5096840CaAC5D248Ed379586EEde2e1';
        
        const abi = PreciousPuppies;
        const MyContract = new web3.eth.Contract(abi, address);
        console.log('Number of Dogs to buy: ', count);
        console.log('Account: ', myAccount);
        
        //const remaining = await MyContract.methods.getPuppiesLeft().call();
        const remaining = await MyContract.methods.getNFTLeft().call();
        setRemainingPups(remaining);
        setSellStatus("mint")
      } else {
        window.alert('Please Connect a MetaMask Account');
        return;
      }

    } else {
      console.log('Please install MetaMask!');
      return;
    }

    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    
  };


  const getThePups = async () => {
    console.log('calling');
    const provider = await detectEthereumProvider();
    console.log('Provider: ', provider);
    if (!provider) {
      console.log('Please install MetaMask!');
      return;
    }
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
      return;
    }
    const web3 = new Web3(provider);
    await provider.enable();
    const chainId = await provider.request({ method: 'eth_chainId' });
    console.log('Network Connected to: ', chainId);
    let currentAccount = null;
    currentAccount = await provider
      .request({ method: 'eth_accounts' })
      .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });
    const myAccount = "" + currentAccount[0];
    if (currentAccount !== '') {
      //Contract Address
      //const address = '0x6Dbb318EB58bF84910719500A6304dEFb844DEcc';
      const address = '0x3fd6Aa22B5096840CaAC5D248Ed379586EEde2e1';
      
      const abi = PreciousPuppies;
      const MyContract = new web3.eth.Contract(abi, address);
      console.log('Number of Dogs to buy: ', count);
      const currPrice = await MyContract.methods.getPrice().call();
      console.log('Price of a Puppy: ', currPrice);
      const pupsLeft = await MyContract.methods.getNFTLeft().call();
      console.log('Pups Left: ', pupsLeft);
      const requiredAmount = (currPrice * count).toString();
      console.log('Amount to be sent: ', requiredAmount);
      // const val = await MyContract.methods.getPups(count).send({
      //   from: myAccount,
      //   gasPrice: "20000000000",
      //   value: requiredAmount,
      // });
      const val = await MyContract.methods.mint(count).send({
        from: myAccount,
        gasPrice: "20000000000",
        value: requiredAmount,
      });
    } else {
      window.alert('Please Connect a MetaMask Account');
    }
  };

  return (
    <>
      <img
        src={oval}
        alt=""
        className="absolute hidden sm:block w-64 h-96 top-7 z-50  -right-28"
      />
      <div className="container px-6 lg:px-32 py-24 ml-auto mr-auto mt-16">
        <div className="xl:hidden">
          <h1 className="text-6xl  text-blue-700 font-black">Precious</h1>
          <h1 className="text-6xl  text-red-600 font-black">Puppies</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="order-2 xl:order-1">
            <div className="hidden xl:block">
              <h1 className="text-7xl  text-blue-700 font-black">Precious</h1>
              <h1 className="text-7xl -mt-3 text-red-600 font-black">
                Puppies
              </h1>
            </div>

            <p
              className="mt-0 xl:mt-14 mb-11 text-2xl"
              style={{ lineHeight: '47px' }}
            >
              The pups are out! This precious breed of 10,000 pups have been
              hiding in the big puppy house plotting a plan to bring happiness
              the ENTIRE WORLD! But don't worry, you can prevent this. By
              minting a Precious Puppy NFT you can garner their happiness energy
              all for yourself!
            </p>

            {sellStatus.toLowerCase() === 'connect' ? (
              <div className="flex items-center justify-center xl:justify-start">
                <div className="sm:mx-8 text-center">
                  <h1
                    className="border-2 text-lg cursor-pointer sm:text-2xl border-purple-600 bg-pink-100 font-bold rounded-full px-1 my-6 sm:px-14 py-4"
                    onClick={connectToMetamask}
                  >
                    Connect
                  </h1>
                </div>
              </div>
            ) : (
              <p></p>
            )
          }
          {sellStatus.toLowerCase() === 'sold out' ? (
            <div className="flex items-center justify-center xl:justify-start">
              <div className="sm:mx-8 text-center">
                <h1
                  className="border-2 text-lg cursor-pointer sm:text-2xl border-purple-600 bg-pink-100 font-bold rounded-full px-1 my-6 sm:px-14 py-4"
                >
                  Sold Out
                </h1>
              </div>
            </div>
          ): (
            <p></p>
          )
        }
        {sellStatus.toLowerCase() === 'coming soon' ? (
          <div className="flex items-center justify-center xl:justify-start">
            <div className="sm:mx-8 text-center">
              <h1
                className="border-2 text-lg cursor-pointer sm:text-2xl border-purple-600 bg-pink-100 font-bold rounded-full px-1 my-6 sm:px-14 py-4"
              >
                Coming Soon!
              </h1>
            </div>
          </div>
        ): (
          <p></p>
        )
            }
            {sellStatus.toLowerCase() === 'mint' ? (
              <div className="flex items-center justify-center xl:justify-start">
                <img
                  src={minus}
                  alt=""
                  className="w-16 relative top-1 cursor-pointer"
                  onClick={handleDecrement}
                />
                <div className="sm:mx-8 text-center">
                  <button
                    type="button"
                    className="bg-gray-200 text-base sm:text-2xl py-3 px-2  "
                  >
                    <span className="text-blue-700 font-semibold">{remainingPups}</span>
                    <span className="text-black mr-1 font-semibold">
                      /10000
                    </span>
                    remaining
                  </button>

                  <h1
                    className="border-2 text-lg cursor-pointer sm:text-2xl border-purple-600 bg-pink-100 font-bold rounded-full px-1 my-6 sm:px-14 py-4"
                    onClick={getThePups}
                  >
                    Mint {count} pups
                  </h1>
                  <button
                    type="button"
                    style={{ width: 200 }}
                    className="bg-blue-100 py-2 px-3 sm:px-7 border-2 border-blue-700  text-2xl font-extrabold text-blue-800 "
                  >
                    {count * 0.06} eth
                  </button>
                </div>

                <img
                  src={plus}
                  alt=""
                  className=" w-16 relative top-1 cursor-pointer"
                  onClick={handleIncrement}
                />
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div className="flex -mt-7 sm:-mt-20 justify-center  items-center order-1 xl:order-2">
            <img src={puppy} alt="" className="h-full w-full " />
          </div>
        </div>
      </div>
    </>
  );
};
export default Precious;
