import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { VideoCard } from '@/pages/main/components/parts/VideoCard';
import { IMedia } from '@/utils/types/media';
import { AllVideos, AllVideosResponse, Videos } from '@/utils/types/videos';

import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './VideoBlock.module.scss';

export type VideoBlockProps = any;

export const VideoBlock: FC<VideoBlockProps> = () => {
    const allVideos: AllVideos = useSelector((state: AllVideosResponse) => state.videos);
    //console.log(allVideos.data, 'allVideos.data');

    return (
        <div className={css.videoBlock}>
            <Link to="/videos" className={css.resetStyle}>
                <CommonHeader title="Видео от Марины Римарчук" />
            </Link>

            <CardSlider slidesToShow={2.15} slidesToShowMobile={1.75}>
                {allVideos.data?.map((item, index) => <VideoCard key={item.id} {...item} index={index} />)}
            </CardSlider>
        </div>
    );
};
