import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AllNft from "@/components/Listitem/AllNft";
import FAQs from "@/components/FAQs";
import NftBoard from "@/components/NftBoard";

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

<<<<<<< HEAD
  return (
    <>
    {/* <div className="flex flex-col justify-center items-center">
      <div className="h1">
        
      </div>
      {isConnected && (
        <div className="h2 text-center">Your address: {userAddress}</div>
      )}
    </div> */}
    <div className=" my-2">
        <Hero />
        <AboutUs />
        <AllNft />
        <Features />
        <FAQs />
        <NftBoard />
    </div>
    </>
  );
=======
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h1">
                There you go... a canvas for your next Celo project!
            </div>
            {isConnected ? (
                <div className="h2 text-center">
                    Your address: {userAddress}
                </div>
            ) : (
                <div>No Wallet Connected</div>
            )}
        </div>
    );
>>>>>>> 8bd5c0e15b715fadae1043b98ca8b114b521a10e
}
