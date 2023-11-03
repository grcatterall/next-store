import { Product } from "@/app/components/store/types";
import { useState } from "react";

const AddTo = ({ text, colour, custom, onClick, product }: { text: string, colour: string, custom: string, onClick: any, product: Product }) => {
    const [isDisabled, setDisabled] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState(text);
    const [addedStyle, setAddedStyle] = useState('');

    const clicked = (e: any, product: Product) => {
        setButtonText('Adding');
        onClick(product);
        setDisabled(true);

        setTimeout(() => {
            setDisabled(false);
            setButtonText('Added');
            setAddedStyle(`animate-pulse text-white before:rotate-180 cursor-default before:bg-green-500`);
        }, 1000)

        setTimeout(() => {
            setButtonText(text);
            setAddedStyle(``);
        }, 5000)

    }
    return (
        <button onClick={(e) => clicked(e, product)} className={`before:ease 
            relative h-12 w-40 overflow-hidden border
            border-${colour} shadow-2xl before:absolute 
            before:left-0 before:-ml-2 before:h-48 before:w-48 
            before:origin-top-right before:-translate-x-full 
            before:translate-y-12 before:-rotate-90 before:bg-${colour} 
            before:transition-all before:duration-300 hover:text-white 
            hover:shadow-black hover:before:-rotate-180 ${custom} ${addedStyle}`} disabled={isDisabled}>
                <span className="relative z-10">{buttonText}</span>
        </button>
    );
}

export default AddTo;