import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";

export default class service extends Component {
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
        service
        <Footer />
      </View>
    );
  }
}
