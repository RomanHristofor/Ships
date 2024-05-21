import React from 'react';

export interface BoatItem {
    title: string;
    description: string;
    icons: {
        large: string;
        medium: string;
    };
    level: number;
    type: {
        name: string;
        title: string;
        icons: {
            default: string;
        };
    };
    nation: {
        name: string;
        title: string;
        color: string;
        icons: {
            small: string;
            medium: string;
            large: string;
        };
    };
}

interface BoatCardProps {
    boat: BoatItem;
}

export const BoatCard: React.FC<BoatCardProps> = ({ boat }) => {
    return (
        <div className='wrapper__boat-card'>
            <img src={boat.icons.medium} alt={boat.title} />
            <h3>{boat.title}</h3>
            <p>{boat.description}</p>
            <p>Уровень: {boat.level}</p>
            <p>Класс: {boat.type.title}</p>
            <p>Нация: {boat.nation.title}</p>
            <img
                className='icon__nation'
                src={boat.nation.icons.large}
                alt={boat.nation.name}
            />
        </div>
    );
};
