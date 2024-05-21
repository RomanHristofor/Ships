import React from 'react';

export interface FilterOptions {
    level?: number;
    nation?: string;
    type?: string;
}

interface FiltersProps {
    levels: number[];
    nations: string[];
    types: string[];
    onFilterChange: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export const Filters: React.FC<FiltersProps> = ({
  levels,
  nations,
  types,
  onFilterChange
}) => {
    const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const level = Number(event.target.value) || undefined;
        onFilterChange((prevFilters: FilterOptions) => ({ ...prevFilters, level }));
    };

    const handleNationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const nation = event.target.value || undefined;
        onFilterChange((prevFilters: FilterOptions) => ({ ...prevFilters, nation }));
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const type = event.target.value || undefined;
        onFilterChange(prevFilters => ({ ...prevFilters, type }));
    };

    return (
        <div className='filter__boats'>
            <select onChange={handleLevelChange}>
                <option value="">Выбрать уровень</option>
                {levels.map(level => (
                    <option key={level} value={level}>
                        {level}
                    </option>
                ))}
            </select>
            <select onChange={handleNationChange}>
                <option value="">Выбрать нацию</option>
                {nations.map(nation => (
                    <option key={nation} value={nation}>
                        {nation}
                    </option>
                ))}
            </select>
            <select onChange={handleTypeChange}>
                <option value="">Выбрать класс</option>
                {types.map(type => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};
