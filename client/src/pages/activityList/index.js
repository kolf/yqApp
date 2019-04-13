import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import "./style.scss";

const dataScoure = [
  {
    id: 1,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15423679314.jpg",
    text: " 鉴赏古韵西安，趣享纯真之旅"
  },
  {
    id: 2,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15423678862.jpg",
    text: " 开启纯真防伪时代，让世界更可信赖"
  },
  {
    id: 3,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15423677797.jpg",
    text: "纯真·新生活 品质购物新体验"
  },
  {
    id: 4,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15423677126.jpg",
    text: "官宣：除了双十一，霜降也是“换新季”"
  },
  {
    id: 5,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15400123721.jpg",
    text: "重阳节送锦鲤都不如送“保养品”！"
  },
  {
    id: 6,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15427198018.jpg",
    text: "《是时候安排一下了！》"
  },
  {
    id: 7,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15427198151.jpg",
    text: "一汽丰田纯牌零件“纯真之旅”品牌活动-天津站、郑州站成功举办"
  },
  {
    id: 8,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15427198274.jpg",
    text: "感谢师恩，纯牌零件与您重温美好"
  }
];

export default class ActivityList extends Component {
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
        <View className='activity-list'>
          {dataScoure.map((d, index) => (
            <View
              key={d.url + index}
              className='activity-item'
              onClick={this.goToProcuctList.bind(this, d.id)}
            >
              <Image src={d.url} mode='widthFix' style='width:100%' />
              <View className='activity-title'>{d.text}</View>
            </View>
          ))}
        </View>
        <Footer />
      </View>
    );
  }
}
