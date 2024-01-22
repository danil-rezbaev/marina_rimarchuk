import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { IPodcast } from '../../utils/types/podcast';
import { MeditationCard } from '../main/components/parts/MeditationCard';
import { PodcastCard } from '../main/components/parts/PodcastCard';
import css from './PodcastPage.module.scss';

const data: IPodcast[] = [
    {
        id: 1,
        title: 'Практика намерения, которая перевернет жизнь!',
        time: '12:56',
        image: 'string',
    },
    {
        id: 2,
        title: '123!',
        time: '12:56',
        image: 'string',
    },
    {
        id: 3,
        title: 'Практика намерения, которая перевернет жизнь!',
        image: 'string',
        time: '12:56',
    },
    {
        id: 4,
        title: '123!',
        image: 'string',
        time: '12:56',
    },
];

export const PodcastPage = () => {
    return (
        <div className={css.podcastPage}>
            <HeaderPage title="Подкасты" />
            <div className={css.podcastWrapper}>
                {data?.map((item, index) => (
                    <PodcastCard key={item.id} {...item} isPage={true} />
                ))}
            </div>
        </div>
    );
};
