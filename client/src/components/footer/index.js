import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./footer.scss";

export default class Footer extends Component {
  render() {
    return <View className='root'>Copyright © 一汽丰田汽车销售有限公司</View>;
  }
}
