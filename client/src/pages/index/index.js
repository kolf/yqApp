import Taro, { Component } from "@tarojs/taro";
import { View, Video, Button } from "@tarojs/components";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Banner from "../../components/banners/index";
import Panel from "../../components/panel/index";

import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "一汽丰田零件防伪查询"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleQRClick = e => {};

  render() {
    return (
      <View className='root'>
        <Header />
        <Banner />
        <View>
          <Panel title='查询结果'>
            <View>请扫二维码查询</View>
            <View className='qBtn'>
              <View onClick={this.handleQRClick}>点此扫一扫辨真伪</View>
            </View>
          </Panel>
          <Panel title='真伪对比'>
            <Video
              src='http://v.qq.com/iframe/player.html?vid=o0501pes7iq&tiny=0&auto=0&isAutoPlay=false'
              controls
              autoplay={false}
              poster='http://shp.qpic.cn/qqvideo_ori/0/o0501pes7iq_496_280/0'
              initialTime='0'
              id='video'
              loop={false}
              muted={false}
              style='width: 100%'
            />
          </Panel>
        </View>
        <Footer />
      </View>
    );
  }
}
