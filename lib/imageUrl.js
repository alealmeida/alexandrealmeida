import configs from "../configs";

const urlBuilder = (src) => {
    // const fullUrl = configs.STRAPI_URL + src
    return `${configs.STRAPI_URL}${src}`
}

export default urlBuilder;