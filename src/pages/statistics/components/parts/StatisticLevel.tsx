import React from 'react';
import { Link } from 'react-router-dom';

import { StatisticInfoCard } from './StatisticInfoCard';
import css from './StatisticLevel.module.scss';
import { StatisticProgressBar } from './StatisticProgressBar';

export const StatisticLevel = () => {
    return (
        <>
            <div className={css.statisticLevelWrapper}>
                <div className={css.levelCard}>
                    <div className={css.levelCurrent}>
                        <div className={css.currentIcon}></div>
                        <div className={css.currentInfo}>
                            <div className={css.infoTitle}>Звездочка</div>
                            <div className={css.infoDescription}>Ваш текущий уровень</div>
                        </div>
                    </div>
                    <div className={css.completeLevel}>
                        <div className={css.completeTitle}>До следующего уровня выполнено:</div>
                        <StatisticProgressBar percent={55} />
                    </div>
                    <button type="button" className={css.watchQuestion}>
                        <Link to="/tasks" className={css.watchLink}>
                            <div className={css.watchText}>Смотреть задания</div>
                        </Link>
                    </button>
                </div>
            </div>
            <StatisticInfoCard />
        </>
    );
};