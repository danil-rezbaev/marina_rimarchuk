import axios from '@/axios';
import { Pay, PayMessage } from '@/utils/types/pay';

export const payContentRequest = async ({
    customer_phone,
    customer_email,
    cost,
    course_id,
    manuals_id,
}: Pay): Promise<PayMessage> => {
    try {
        const response = await axios.post(
            `/api/prodamus/pay?customer_phone=${customer_phone}&customer_email=${customer_email}&cost=${+cost}&course_id=${+course_id}&manuals_id=${+manuals_id}`
        );

        console.log(response.data, 'rrrrrrrr');
        if (response.data.pay_url) {
            window.location.href = response.data.pay_url;

            return response.data;
        } else {
            console.error('Отсутствует URL для редиректа');
        }
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
};
