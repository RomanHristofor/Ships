import React from 'react';
import {BoatCard, BoatItem} from './BoatCard';

interface BoatListProps {
    boats: BoatItem[];
}

export const BoatList: React.FC<BoatListProps> = ({ boats }) => {
    return (
        <div>
            {boats.map((boat, index) => (
                <BoatCard key={`${boat.title}${index}`} boat={boat} />
            ))}
        </div>
    );
};
