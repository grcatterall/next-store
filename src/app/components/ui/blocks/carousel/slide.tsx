const Slide = ({image}: {image: string}) => {
    return (
        <img src={`https://flowbite.com/${image}`} className="w-full object-contain object-center" alt="..." />
    );
}

export default Slide;