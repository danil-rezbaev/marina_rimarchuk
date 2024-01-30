import { ReactNode } from 'react';

import { IBookContentList } from './book';

export interface ILesson {
    title: string;
    description?: string;
    image?: string;
    id: string | number;
}

export interface ICourseCard {
    title: string;
    description?: string;
    icon?: string;
    image?: string;
    contentTitle?: string;
    contentInfo?: string | ReactNode;
    contentList?: IBookContentList[];
    buttonText?: string;
    buttonBuy?: string;
    price?: string;
    buy?: boolean;
    lesson?: ILesson[];
    id: string | number;
}

export interface ICourses {
    id: string | number;
    title: string;
    description?: string;
    icon?: string;
    image?: string;
    contentTitle?: string;
    contentInfo?: string;
    contentList?: IBookContentList[];
    buttonText?: string;
    buttonBuy?: string;
    price?: string;
    buy?: boolean;
    card: ICourseCard[];
}
