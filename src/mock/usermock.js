export default {
    getUserInfo: () => {
        return {
            code: "0",
            message: "访问成功",
            data: [{
                id: 1,
                licNumber: '陕A79898',
                color: 1,
                buyTime: '2017-04-01'
            },
            {
                id: 2,
                licNumber: '陕A2222',
                color: 1,
                buyTime: '2017-04-01'
            },
            {
                id: 3,
                licNumber: '陕A3333',
                color: 1,
                buyTime: '2017-04-01'
            }]
        }
    },
    getProductlist: () => {
        return {
            data: [{ "lid": 9, "pid": 7, "catid": 1, "lname": "芒果拿破仑", "subtitle": "芒果季必吃人气蛋糕", "price": 218, "tag": "", "sold_count": 80, "md": "img/product/list_12152.jpg" }, { "lid": 10, "pid": 7, "catid": 2, "lname": "芒果拿破仑", "subtitle": "芒果季必吃人气蛋糕", "price": 218, "tag": "", "sold_count": 80, "md": "img/product/list_12152.jpg" }, { "lid": 7, "pid": 5, "catid": 1, "lname": "携手·环游世界", "subtitle": "与你携手 一次尝遍9种口味", "price": 228, "tag": "", "sold_count": 88, "md": "img/product/list_18609.jpg" }, { "lid": 6, "pid": 4, "catid": 1, "lname": "猪光宝气", "subtitle": "拉起好运 成为人生大赢家", "price": 368, "tag": "轻拉一下好彩头UP木糖醇低甜", "sold_count": 55, "md": "img/product/list_19428.jpg" }, { "lid": 1, "pid": 1, "catid": 1, "lname": "果然倾心", "subtitle": "满满缤纷水果 吃到夏天的味道", "price": 218, "tag": "+58元限时加大", "sold_count": 100, "md": "img/product/list_22426.jpg" }, { "lid": 8, "pid": 6, "catid": 1, "lname": "草莓拿破仑", "subtitle": "薄脆酥皮搭配清甜草莓", "price": 218, "tag": "法式经典 层层酥脆", "sold_count": 200, "md": "img/product/list_10923.jpg" }]
        }
    },
    getBanner: () => {
        return {
            data: [{ "cid": 1, "img": "img/index/banner1.jpg", "title": "轮播广告商品1", "href": "product_details.html?lid=1" }, { "cid": 2, "img": "img/index/banner2.jpg", "title": "轮播广告商品2", "href": "product_details.html?lid=2" }, { "cid": 3, "img": "img/index/banner3.jpg", "title": "轮播广告商品3", "href": "lookforward.html" }, { "cid": 4, "img": "img/index/banner4.jpg", "title": "轮播广告商品4", "href": "lookforward.html" }]
        }
    }
}