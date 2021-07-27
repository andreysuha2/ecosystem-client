import Http from "@localHttp";

class FinancesHttp extends Http {
    constructor() {
        super({ slug: 'finances' });
    }

    get currencies() {
        return this.group('currencies', (query, group) => ({
            list: () => query.get(''),
            currency: group('currency', (query) => ({ read: (id) => query.get(`${id}`) }))
        }));
    }

    get valets() {
        return this.group('valets', (query, group) => ({
            list: () => query.get(''),
            valet: group('valet', (query, group) => ({
                create: (data) => query.post('', data),
                read: (id) => query.get(`${id}`),
                update: (id, data) => query.put(`${id}`, data),
                delete: (id) => query.delete(`${id}`),
                categories: (valetId) => group(`${valetId}/categories`, (query, group) => ({
                    list: () => query.get(''),
                    category: group('category', (query) => ({
                        create: (data) => query.post('', data),
                        read: (id) => query.get(`${id}`),
                        update: (id, data) => query.put(`${id}`, data),
                        delete: (id) => query.delete(`${id}`)
                    }))
                })),
                balances: (valetId) => group(`${valetId}/balances`, (query, group) => ({
                    list: () => query.get(''),
                    balance: group('balance', (query) => ({
                        create: (data) => query.post(data),
                        read: (id) => query.get(`${id}`),
                        update: (id, data) => query.put(`${id}`, data),
                        delete: (id) => query.delete(`${id}`)
                    }))
                })),
                records: (valetId) => group(`${valetId}/records`, (query, group) => ({
                    list: () => query.get(''),
                    record: group('record', (query) => ({
                        create: (data) => query.post(data),
                        read: (id) => query.get(`${id}`),
                        update: (id, data) => query.put(`${id}`, data),
                        delete: (id) => query.delete(`${id}`)
                    }))
                })),
                participants: (valetId) => group(`${valetId}/participants`, (query, group) => ({
                    list: () => query.get(''),
                    participant: group('participant', (query) => ({
                        create: (data) => query.post(data),
                        read: (id) => query.get(`${id}`),
                        update: (id, data) => query.put(`${id}`, data),
                        delete: (id) => query.delete(`${id}`)
                    }))
                }))
            }))
        }));
    }
}

export default new FinancesHttp();
