import { Notification } from 'element-ui'
function wrapService(service) {
    const $service = {}
    Object.keys(service).forEach((key) => {
        $service[key] = async (args, message) => {
            return service[key](args)
                .then((result) => {
                    if (message) {
                        Notification({
                            title: '操作成功',
                            type: 'success',
                            message
                        })
                    }
                    return result
                })
                .catch((error) => {
                    Notification({
                        title: '操作失败',
                        type: 'error',
                        message: error.message
                    })
                })
        }
    })
    return $service
}

export default wrapService