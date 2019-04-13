import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Banner from "../../components/banners/index";

import imgUrl from "./wechat.png";
import "./more.scss";

export default class More extends Component {
  config = {
    navigationBarTitleText: "一汽丰田零件防伪查询"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='root'>
        <Header />
        <Banner />
        <View className='content'>
          <Text className='title'>关注丰享汇，加入</Text>
          <Text className='title'>一汽丰田官方会员俱乐部</Text>
          <Image src={imgUrl} mode='widthFix' style='max-width:100%' />
        </View>
        <Footer />
      </View>
    );
  }
}
