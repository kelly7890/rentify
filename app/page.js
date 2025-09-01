import Image from "next/image";

export default function HomePage () {
      return (
            <main className="bg-gray-50 ">
                  <div className="bg-[url(/mybgs.jpeg)] h-[40vh] bg-cover bg-no-repeat md:bg-no-repeat md:bg-[url(/mybgs.jpeg)] md:h-[60vh]">
                        <p className="text-4xl text-center font-bold text-white">Your Vaction Home</p>
                  </div>
                  <h1 className="text-4xl text-center font-bold text-black mt-5">OUR SERVICE</h1>
                  <div className="flex gap-5 justify-center">
                  <div className="w[300px] h-[300px] rounded shadow-md">
                        <Image
                        width={300}
                        height={200}
                        src="/mini.jpeg"
                        alt="product.image"/>
                        <p className="text-sm text-black">5 Bedroom duplex at oklahoma USA</p>
                        <p>$23000</p>
                  </div>
                  <div className="w[300px] h-[300px] rounded shadow-md">
                        <Image
                        width={300}
                        height={200}
                        src="/mini.jpeg"
                        alt="product.image"/>
                        <p className="text-sm text-black">5 Bedroom duplex at oklahoma USA</p>
                        <p>$23000</p>
                  </div>
                  <div className="w[300px] h-[300px] rounded shadow-md">
                        <Image
                        width={300}
                        height={200}
                        src="/mini.jpeg"
                        alt="product.image"/>
                        <p className="text-sm text-black">6 Bedroom duplex at ABU DABI UAE</p>
                        <p>Full sanitizied Swimming pool</p>
                        <p>$230,000</p>
                  </div>
            </div>      
            </main>
      )
}