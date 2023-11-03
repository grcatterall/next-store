const ProductSkeleton = () => {
    return (
        <div className="pt-10 h-full">
            <div className="bg-white h-full rounded shadow-md p-4">
                <div className="flex flex-row">
                    <div className="w-1/2 p-2">
                        <div className="bg-gray-400 animate-pulse h-full w-100"></div>
                    </div>
                    <div className="w-1/2 p-2 flex flex-col justify-between">
                        <h1 className="w-3/4 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                        <h2 className="w-1/3 mb-8 h-4 animate-pulse bg-gray-300"></h2>
                        <div>
                            <p className="w-4/5 mb-4 h-4 animate-pulse bg-gray-400"></p>
                            <p className="w-4/5 mb-4 h-4 animate-pulse bg-gray-400"></p>
                            <p className="w-4/5 mb-4 h-4 animate-pulse bg-gray-400"></p>
                            <p className="w-4/5 mb-4 h-4 animate-pulse bg-gray-400"></p>
                            <p className="w-4/5 h-4 animate-pulse bg-gray-400"></p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-90 rounded-full mx-auto h-1 mt-3"></div>
                <div className="mt-10">
                    <p className="w-100 mb-4 h-4 animate-pulse bg-gray-400"></p>
                    <p className="w-5/6 mb-4 h-4 animate-pulse bg-gray-400"></p>
                    <p className="w-3/4 mb-4 h-4 animate-pulse bg-gray-400"></p>
                    <p className="w-100 mb-4 h-4 animate-pulse bg-gray-400"></p>
                    <p className="w-4/5 h-4 animate-pulse bg-gray-400"></p>
                </div>
            </div>
        </div>
    );
}

export default ProductSkeleton;