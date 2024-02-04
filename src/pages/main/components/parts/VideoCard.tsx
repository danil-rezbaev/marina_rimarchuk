import { FC } from 'react';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import VideoPlay from '@/assets/images/videoCard/playVideo.svg';
import { IVideo } from '@/utils/types/video';

import css from './VideoCard.module.scss';

export type VideoCardProps = IVideo & {
    className?: any;
    isPage?: boolean;
    index?: number;
};

export const VideoCard: FC<VideoCardProps> = (props) => {
    const { className, title, isPage, index } = props;

    return (
        <div className={cs(css.videoCardWrapper, className)}>
            <div className={cs(css.videoCard, isPage ? css.videoPageCard : '')} data-index={index}></div>
            <div className={css.cardTitle}>{title}</div>
            <Link to="/" className={css.videoPlay}>
                <div className={css.videoIcon}>
                    <VideoPlay />
                </div>
                <div className={css.startVideo}>Смотреть</div>
            </Link>
        </div>
    );
};
