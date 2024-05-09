import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
<<<<<<< HEAD
import Link from "next/link";
import { InjectedConnector } from "wagmi/connectors/injected";
import SearchSvg from "@/public/search.svg"
=======
import { injected } from "wagmi/connectors";
>>>>>>> 8bd5c0e15b715fadae1043b98ca8b114b521a10e

export default function Header() {
    const [hideConnectBtn, setHideConnectBtn] = useState(false);
    const { connect } = useConnect();

    useEffect(() => {
        if (window.ethereum && window.ethereum.isMiniPay) {
            setHideConnectBtn(true);
            connect({ connector: injected({ target: "metaMask" }) });
        }
    }, []);
    //     //  <span className=" text-2xl flex font-extrabold font-ppReg"><p className=" text-white">Psycho</p><p className=" text-ppGrad">Art</p></span>
    //     <Image
    //     className=" space-y-3 ml-5"
    //     src="/search.svg"
    //     width="20"
    //     height="20"
    //     alt="search"
    // />
    // <input type="text" name="Search" id="search" placeholder="Search items and collections" className=" px-3 outline-none text-white rounded-3xl border-none lg:w-[384px] lg:h-[50px] bg-transparent" />

    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className=" mx-24 px-2 sm:px-6 lg:px-8 mt-5">
                        <div className="relative flex h-16 justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                   
                                    <span className=" text-2xl flex font-extrabold font-ppReg"><p className=" text-white">Psycho</p><p className=" text-ppGrad">Art</p></span>
                                </div>
                                <div className="hidden rounded-3xl sm:ml-6 sm:flex mt-4 sm:space-x-8 bg-[#FFFFFF1A] lg:w-[384px] lg:h-[50px] lg:flex justify-center items-center  space-x-3">
                                    <Image
                                        className=" space-y-3 ml-5"
                                        src="/search.svg"
                                        width="20"
                                        height="20"
                                        alt="search"
                                    />
                                    <input type="text" name="Search" id="search" placeholder="Search items and collections" className=" px-3 outline-none text-white rounded-3xl border-none lg:w-[384px] lg:h-[50px] bg-transparent" />
                                </div>
                                <div className=" flex justify-center items-center mt-5 ml-10">
                                    Collections
                                </div>
                            </div> */}
                            <div className="flex justify-between items-center gap-10  max-sm:ml-14">
                                <div>
                                    <span className=" text-2xl flex font-extrabold font-ppReg"><p className=" text-white">Psycho</p><p className=" text-ppGrad">Art</p></span>
                                </div>
                                <div className="  items-center hidden rounded-3xl sm:ml-6 sm:flexsm:space-x-8 bg-[#FFFFFF1A] lg:w-[384px] lg:h-[50px] lg:flex justify-center  space-x-3">
                                    <Image
                                        className=" space-y-3 ml-5"
                                        src="/search.svg"
                                        width="20"
                                        height="20"
                                        alt="search"
                                    />
                                    <input type="text" name="Search" id="search" placeholder="Search items and collections" className=" px-3 outline-none text-white rounded-3xl border-none lg:w-[384px] lg:h-[50px] bg-transparent" />
                                </div>
                                <div className=" text-white font-ppReg text-[20px] lg:flex md:flex gap-4 hidden">
                                    <Link href="#">Collection</Link>
                                    <Link href="#">Feature</Link>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {!hideConnectBtn && (
                                    <ConnectButton
                                        showBalance={{
                                            smallScreen: true,
                                            largeScreen: false,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pt-2 pb-4">
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                            >
                                Home
                            </Disclosure.Button>
                            {/* Add here your custom menu elements */}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
