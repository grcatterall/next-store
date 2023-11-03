const CategorySkeleton = () => {
    const loopCount = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ];
    console.log('test');
    return (
        <div className='mt-3 gird-cols-1 xl:grid-cols-4 grid xl:gap-2 mb-6'>
            {loopCount.map((index) => {
                return (
                    <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg " key={index}>
                        <div className="inline-block bg-white rounded-lg w-full p-4">
                            <div className="w-full h-80 object-contain ease-in-out duration-500 hover:scale-110 bg-gray-500 animate-pulse"></div>
                        </div>
                        <div className="p-2 lg:p-3 lg:mx-4 md:mx-2 xl:p-4">
                            <div className="mt-4 font-light text-m tracking-wide bg-gray-600 animate-pulse w-5/6"></div>
                            <div className="mt-4 font-light text-m tracking-wide bg-gray-600 animate-pulse w-3/4"></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CategorySkeleton;