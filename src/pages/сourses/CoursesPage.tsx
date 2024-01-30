import React, { FC } from 'react';

import brainImage from '../../assets/images/courses/brain.png';
import meditationImage from '../../assets/images/courses/meditation.png';
import moneyImage from '../../assets/images/courses/money.png';
import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { ICourses } from '../../utils/types/courses';
import css from './CoursesPage.module.scss';
import { CoursesCard } from './component/parts/CoursesCard';

export type CoursesPageProps = {
    isPage?: boolean;
};

export const dataCourses: ICourses[] = [
    {
        id: '1',
        title: 'Бесплатные курсы',
        card: [
            {
                title: 'Тело - храм. Как правильно эксплуатировать свое тело',
                description: 'Уроков: 6',
                price: '7 777 ₽',
                image: meditationImage,
                buttonText: 'Стоимость курса',
                buttonBuy: 'Купить курс',
                lesson: [
                    {
                        id: '11',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                    },
                    {
                        id: '12',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                    },
                    {
                        id: '13',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                    },
                    {
                        id: '14',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                    },
                ],
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '5',
            },
        ],
    },
    {
        id: '2',
        title: 'Авторские курсы',
        card: [
            {
                title: 'Мышление изобильного человека',
                description: 'Уроков: 5',
                price: '7 777 ₽',
                buttonText: 'Стоимость курса',
                buttonBuy: 'Купить курс',
                image: brainImage,
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '6',
                lesson: [
                    {
                        id: '15',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                    },
                    {
                        id: '16',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                    },
                    {
                        id: '17',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                    },
                    {
                        id: '18',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                    },
                ],
            },
            {
                title: 'Как раскрыть потенциал и запустить денежный поток',
                description: 'Уроков: 4',
                price: '7 777 ₽',
                buttonText: 'Стоимость курса',
                image: moneyImage,
                buttonBuy: 'Купить курс',
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '7',
                lesson: [
                    {
                        id: '19',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                    },
                    {
                        id: '20',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                    },
                    {
                        id: '21',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                    },
                    {
                        id: '22',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                    },
                ],
            },
            {
                title: 'Мышление изобильного человека',
                description: 'Уроков: 6',
                price: '7 777 ₽',
                buttonText: 'Стоимость курса',
                image: meditationImage,
                buttonBuy: 'Купить курс',
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '8',
                lesson: [
                    {
                        id: '23',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                    },
                    {
                        id: '24',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                    },
                    {
                        id: '25',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                    },
                    {
                        id: '26',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                    },
                ],
            },
        ],
    },
];

export const CoursesPage: FC<CoursesPageProps> = () => {
    useBackButton('/');

    return (
        <div className={css.coursesPage}>
            <HeaderPage title="Курсы" />
            <div className={css.coursesWrapper}>
                {dataCourses?.map((item) => (
                    <CoursesCard key={item.id} course={item} />
                ))}
            </div>
        </div>
    );
};
