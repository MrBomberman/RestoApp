export default class RestoService {
    url = 'http://localhost:3000'
    
    getMenuItems = async () => {
        const response = await fetch(this.url + '/menu');
        if (!response.ok){
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }


    async sendItems(order) { // постит данные на сервер
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }
        const response = await fetch(`${this.url}/orders`, { // обращение к серверу
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder) // переводим из json в нужный формат
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }

    async getOrderNumber(){
        const res = await fetch(this.url + '/orders/'); // получаем массив заказов
        const orderNumber = res.length+1; // добавляем массиву id при его увеличении, каждый раз увеличиваем на 1

        return orderNumber
    }


}