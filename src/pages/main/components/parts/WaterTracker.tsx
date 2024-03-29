import React, { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';
import cs from 'classnames';

import CupIcon from '@/assets/images/actionGlass/cup.svg';
import CupBlackIcon from '@/assets/images/actionGlass/cupBlack.svg';
import MinusIcon from '@/assets/images/actionGlass/minus.svg';
import PlusIcon from '@/assets/images/actionGlass/plus.svg';
import { HeaderPage } from '@/modules/header/components/HeaderPage';
import WaterWaveImage from '@/pages/main/components/parts/WaterWaveImage';
import { getUser } from '@/store/currentUserSlice';
import { addVolumeWater } from '@/store/waterAddSlice';
import { getWater } from '@/store/waterGetSlice';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { UserGet, UserGetResponse } from '@/utils/types';
import { GetWaterResponse, WaterData } from '@/utils/types/water';

import css from './WaterTracker.module.scss';
import { WaterVolume } from './WaterVolume';

const MAX_SIZE = 2560;
const CONTAINER_HEIGHT_PX = 238;

export const WaterTracker = () => {
    useBackButton('/');
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const waterVolume: WaterData = useSelector((state: GetWaterResponse) => state.waterGet);

    const [currentLevel, setCurrentLevel] = useState(0);
    const [userChangedSlider, setUserChangedSlider] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [adjustedHeight, setAdjustedHeight] = useState(0);

    useEffect(() => {
        dispatch(getWater());
        dispatch(getUser());
    }, []);

    const currentUser: UserGet = useSelector((state: UserGetResponse) => state.currentUser);

    console.log(currentUser, 'ffff');

    useEffect(() => {
        setSliderValue(waterVolume.data);
    }, [waterVolume.data]);

    console.log(sliderValue, 'sliderValue');

    const handleSliderChange = (e: BaseSyntheticEvent) => {
        const newValue = +e.target.value;
        setSliderValue(newValue);
        setCurrentLevel(newValue);
    };

    const rangeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scale = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
            return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        };

        const range = document.getElementById('range') as HTMLInputElement;
        const label = range?.nextElementSibling as HTMLLabelElement;

        if (range) {
            const rangeWidth = getComputedStyle(range).getPropertyValue('width');
            const labelWidth = getComputedStyle(label).getPropertyValue('width');

            const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
            const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

            const max = +range.max;
            const min = +range.min;

            label.style.left =
                sliderValue * (numWidth / max) - numLabelWidth / 2 + scale(sliderValue, min, max, 15, -10) + 'px';
            label.innerHTML = sliderValue.toString();

            range.style.setProperty('--thumb-after-width', `${sliderValue}%`);
        }
    }, [sliderValue, waterVolume.data]);

    const handleDecrease = () => {
        if (adjustedHeight > 0) {
            setSliderValue((prevValue) => Math.max(prevValue - 320, 0));
            setCurrentLevel((prevValue) => Math.max(prevValue - 320, 0));
            setAdjustedHeight((value) => value - (320 / MAX_SIZE) * CONTAINER_HEIGHT_PX);
        }
    };

    const handleIncrease = () => {
        console.log(adjustedHeight, 'adjustedHeight');
        if (adjustedHeight < 237) {
            setSliderValue((prevValue) => Math.min(prevValue + 320, 2560));
            setCurrentLevel((prevValue) => Math.min(prevValue + 320, 2560));
            setAdjustedHeight((value) => value + (320 / MAX_SIZE) * CONTAINER_HEIGHT_PX);
        }
    };

    const handleSliderMouseUp = (e: BaseSyntheticEvent) => {
        const value = e.target.value ?? 0;
        const idUser = currentUser.data.user_id;

        const newValue = Math.min(value, MAX_SIZE);

        dispatch(addVolumeWater({ user_id: idUser, water_ml: newValue }));
        setAdjustedHeight((newValue / MAX_SIZE) * CONTAINER_HEIGHT_PX);
    };

    const handleSliderMouseDown = (e: BaseSyntheticEvent) => {
        const value = e.target.value ?? 0;
        setAdjustedHeight((value / MAX_SIZE) * CONTAINER_HEIGHT_PX);
    };

    return (
        <div className={css.waterTrackerWrapper}>
            <WaterWaveImage adjustedHeight={adjustedHeight} />
            <div className={css.waterTracker}>
                <HeaderPage title="Вода" className={css.waterHeader} />
                <WaterVolume currentLevel={currentLevel} />
            </div>
            <div ref={rangeRef} className={css.range}>
                <div className={css.cupIcon}>
                    <CupIcon />
                </div>
                <div className={css.field}>
                    <button className={cs(css.controlsWater, css.minusIcon)} onClick={handleDecrease}>
                        <MinusIcon />
                    </button>
                    <div className={css.rangeWithScale}>
                        <div className={css.scaleValues}>
                            {Array.from({ length: 9 }, (_, index) => (
                                <span key={index * 320} className={css.mark}></span>
                            ))}
                        </div>
                        <div className={css.rangeContainer}>
                            <input
                                type="range"
                                id="range"
                                min="0"
                                max="2560"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                onTouchStart={handleSliderMouseDown}
                                onTouchEnd={handleSliderMouseUp}
                                onMouseDown={handleSliderMouseDown}
                                onMouseUp={handleSliderMouseUp}
                                className={css.rangeInput}
                            />
                            <label htmlFor="range">{sliderValue}</label>
                        </div>
                    </div>
                    <button className={cs(css.controlsWater, css.plusIcon)} onClick={handleIncrease}>
                        <div className={css.ml}>мл</div>
                        <PlusIcon />
                    </button>
                </div>
            </div>
            <button disabled className={css.addGlass}>
                <div className={css.addGlassIcon}>
                    <CupBlackIcon />
                </div>
                <p className={css.addGlassText}>Добавить стакан&nbsp;+</p>
            </button>
        </div>
    );
};
