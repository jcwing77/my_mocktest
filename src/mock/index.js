import Mock from 'mockjs';
import userInfo from "./usermock"
 
Mock.mock("/userInfo",'post',userInfo.getUserInfo());
Mock.mock("/productlist",'post',userInfo.getProductlist());
Mock.mock("/banner",'post',userInfo.getBanner());
export default Mock