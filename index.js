class Message {
    static success(message, data, code) {
        const options = {
            code: (code !== null && code !== undefined ? code : 0),
            message: message || '',
            data: data || {}
        };

        return {
            success: true,
            code: options.code,
            message: options.message,
            data: options.data
        };
    }

    static error(message, data, code) {
        const options = {
            code: (code !== null && code !== undefined ? code : -1),
            message: message || '',
            data: data || (new Error('generic error'))
        };

        return {
            success: false,
            code: options.code,
            message: options.message,
            data: options.data
        };
    }
}

module.exports = Message;
