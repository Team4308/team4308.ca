import Image from "next/image";
export default function Outreach() {
    return (
        <div>
            <div className="mb-5">
                <div className="w-full relative">
                <Image
                    width={6000}
                    height={3000}
                    src={"/big-image.jpg"}
                    alt=""
                    className="w-screen h-[calc(100vh-16*var(--spacing))] object-cover brightness-67"
                />
                </div>
                <div className="absolute top-0 w-full h-full flex flex-row">
                    <div className="my-auto w-full">
                        <h1
                        className="text-7xl font-medium text-background text-center"
                        >Outreach</h1>
                    </div>
                </div>
            </div>
            <div className="content-center pt-10 mt-5 mb-5 pb-15 bg-nav text-red-100">
                <h1 className="text-6xl text-center mt-5 mb-7.5 font-bold">4308 Outreach Has</h1>
                <div className="grid grid-cols-2 gap-x-[10%] text-center">
                    <div className="flex flex-col items-end space-y-3">
                        <h1 className="text-5xl font-semibold leading-none">Planted:</h1>
                        <h1 className="text-5xl font-semibold leading-none">Carbon Offset:</h1>
                    </div>
                    <div className="flex flex-col items-start space-y-3">
                        <p className="text-5xl leading-none">200+ Trees</p>
                        <p className="text-5xl leading-none">1060+ Kgs</p>
                    </div>
                </div>
            </div>
            <div className = "w-full flex justify-center">
                <div className = "flex items-start gap-4 pb-4">
                    <div className = "">
                        <div className = "relative w-[400px] h-[500px] overflow-hidden rounded-lg">
                            <Image 
                            src={"/big-image.jpg"}
                            alt=""
                            fill
                            className = "object-cover"
                            ></Image>
                        </div>
                    </div>
                    <div className = "flex flex-col items-start justify-start pt-2">
                        <h1 className = "text-5xl">First Lego League</h1>
                        <p className="text-lg mt-2">We compete annually in regional robotics competitions.</p>
                        <p className="text-lg">Our team focuses on innovation and sustainability outreach.</p>
                    </div>
                </div>
            </div>
            <div className = "w-full flex justify-center">
                <div className = "flex items-start gap-4 pb-4 flex-row-reverse">
                    <div className = "">
                        <div className = "relative w-[400px] h-[500px] overflow-hidden rounded-lg">
                            <Image 
                            src={"/big-image.jpg"}
                            alt=""
                            fill
                            className = "object-cover"
                            ></Image>
                        </div>
                    </div>
                    <div className = "flex flex-col items-start justify-start pt-2">
                        <h1 className = "text-5xl">4308 X Tree Planting</h1>
                        <p className="text-lg mt-2">We compete annually in regional robotics competitions.</p>
                        <p className="text-lg">Our team focuses on innovation and sustainability outreach.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}