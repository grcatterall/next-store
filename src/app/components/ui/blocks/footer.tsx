const Footer = () => {
    return (
        <footer className="px-5 sm:px-10 md:px-20 py-8 bg-indigo-100">
            <div className="flex flex-col items-center lg:flex-row-reverse justify-between">
            <div className="">
                <a className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800" href="#">Home</a>
                <a className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800" href="#">About Us</a>
                <a className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800" href="#">Careers</a>
            </div>
            <div className="mt-4">
                <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png" className="w-32" />
            </div>
            <div className="mt-4 text-xs font-bold text-gray-500">
                &copy; 2020 TEMPLATANA | MIT License 
            </div>
            </div>
        </footer>
    );
}

export default Footer;