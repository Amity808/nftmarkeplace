
type Props = {
  className?: string
}

const navigation = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/CeloDevs',
    icon: (props: Props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/celo-org/celo-composer',
    icon: (props: Props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }
]

export default function Footer() {
  return (
    <footer className=" my-[20px]">
      <div className="flex lg:flex gap-[40px] justify-center text-white mx-10 items-center lg:ml-[122px] lg:mr-[122px] sm:ml-[2px] fle-col sm:mr-[2px] sm:flex-col lg:flex-row max-sm:flex-col md:flex-row max-md:flex-col ">

        <div>
          <div>
            <span className=" text-2xl flex font-extrabold font-ppReg"><p className=" text-white pb-[20px]">Psycho</p><p className=" text-ppGrad">Art</p></span>
          </div>
          <p className=" w-[288px]">The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
        </div>
        <div className=" flex justify-between gap-[60px] max-sm:flex-col">
          <div>
            <h3 className="font-bold text-[20px]">About</h3>
            <p>Product</p>
            <p>Resource</p>
            <p>Term & Condition</p>
            <p>FAQ</p>
          </div>
          <div>
            <h3 className=" font-bold text-[20px]">Company</h3>
            <p>Our Team</p>
            <p>Partner With Us</p>
            <p>Privacy & Policy</p>
            <p>Features</p>
          </div>
          <div>
            <h3 className=" font-bold text-[20px]">Contact</h3>
            <p>Our Team</p>
            <p>Partner With Us</p>
            <p>Privacy & Policy</p>
            
          </div>
        </div>

      </div>
      <div className=" text-center text-white font-manropeB mt-10">
        <p>Developed by Amityclev Solution</p>
      </div>


    </footer>
  )
}