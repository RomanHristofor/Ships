import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_VEHICLES } from './graphql/queries';
import { BoatList } from './components/BoatList';
import { FilterOptions, Filters } from './components/Filters';
import { BoatItem } from './components/BoatCard';

export const Boat: React.FC = () => {
    const { data, loading, error } = useQuery(GET_VEHICLES, {
        variables: { languageCode: 'ru' }
    });

    const [filters, setFilters] = useState<FilterOptions>({});

    if (loading) return <div className='loader'>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const filteredBoats = data.vehicles.filter((boat: BoatItem) => {
        return (
            (!filters.level || boat.level === filters.level) &&
            (!filters.nation || boat.nation.name === filters.nation) &&
            (!filters.type || boat.type.name === filters.type)
        );
    });

    const levels: number[] = Array.from<number>(new Set(data.vehicles.map((boat: BoatItem) => boat.level)))
        .sort((a, b) => a - b);
    const nations: string[] = Array.from(new Set(data.vehicles.map((boat: BoatItem) => boat.nation.name)));
    const types: string[] = Array.from(new Set(data.vehicles.map((boat: BoatItem) => boat.type.name)));

    return (
        <div className='wrapper__boat'>
            <Filters
                levels={levels}
                nations={nations}
                types={types}
                onFilterChange={setFilters}
            />
            <BoatList boats={filteredBoats} />
        </div>
    );
};
