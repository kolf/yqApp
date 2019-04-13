import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";

const dataScoure = [
  {
    id: 1,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397530734.jpg"
  },
  {
    id: 2,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397530917.jpg"
  },
  {
    id: 3,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397531063.jpg"
  },
  {
    id: 4,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397531246.jpg"
  },
  {
    id: 5,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397531381.jpg"
  },
  {
    id: 6,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397530917.jpg"
  },
  {
    id: 7,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397531537.jpg"
  },
  {
    id: 8,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397531667.jpg"
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
            </View>
          ))}
        </View>
        <Footer />
      </View>
    );
  }
}
