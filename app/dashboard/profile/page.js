import Image from "next/image"

export default function Profile() {
    return(
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-12 lg:py-8 lg:px-16 bg-gray-50">
            <div className="w-full md:w-[350px] flex-col gap-4 shadow-lg rounded-md">
                <div className="">
                    <Image
                    width={80}
                    height={80}
                    src="/mybg.jpeg"
                    alt="profile-image"
                    className="w-[80px] h-[80px] rounded-full"
                    />
                </div>
                <p className="text-center py-3 border-b border-gray-600">kelly - OG</p>
                <p className="text-center py-3 border-b border-gray-600">kellyoung@gmail.com</p>
                <p></p>

            </div>

        </main>
    )
}