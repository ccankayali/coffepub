import React from 'react'
import { IconType } from 'react-icons';

interface OrderButtonProps {
        icon: IconType;
        OnClick?:()=>void;
        label: string;
}

const OrderButton:React.FC<OrderButtonProps> = ({ icon: Icon, label, OnClick }) => {
    return (
        <button className='bg-brandDark gap-4 flex shadow-lg px-6 p-4 rounded-full items-center uppercase font-second2 hover:scale-110 duration-700 transition' data-aos="fade-down">{label}{<Icon />}</button>
    )
}

export default OrderButton