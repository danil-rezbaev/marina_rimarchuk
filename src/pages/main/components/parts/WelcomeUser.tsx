import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrowIcon/arrow.svg';
import { ReactComponent as AvatarIcon } from '../../../../assets/images/welcomeUser/avatar.svg';
import { ReactComponent as QuestionsIcon } from '../../../../assets/images/welcomeUser/questions.svg';
import { useTelegram } from '../../../../utils/hooks/useTelegram';
import css from './WelcomeUser.module.scss';

export const WelcomeUser = () => {
    /*    const dispatch = useDispatch();
    const users = useSelector((state) => state);

    useEffect(() => {
        dispatch(getUsersAll);
    }, [dispatch]);*/

    /* console.log(users, 'users');*/

    const { initDataUnsafe } = useTelegram();

    console.log((window as any).Telegram.WebApp.query_id, '111');

    return (
        <div className={css.welcomeUser}>
            <Link to="/statistics">
                <div className={css.user}>
                    <div className={css.greetings}>
                        <div className={css.userAvatar}>
                            <AvatarIcon />
                        </div>
                        <div className={css.userInfo}>
                            <div className={css.helloUser}>Привет</div>
                            {(window as any).Telegram.WebApp.query_id}
                            <div className={css.username}>{initDataUnsafe?.user?.first_name ?? 'Аноним'}</div>
                        </div>
                    </div>
                    <button type="button" className={css.arrowIcon}>
                        <ArrowIcon />
                    </button>
                </div>
            </Link>
            <button type="button" className={css.questions}>
                <Link to="/questions">
                    <QuestionsIcon />
                </Link>
            </button>
        </div>
    );
};
