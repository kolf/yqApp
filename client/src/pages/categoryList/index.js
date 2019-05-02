import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import "./categoryList.scss";

const dataScoure = [
  {
    id: 1,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15399626632.jpg"
  },
  {
    id: 2,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397408986.jpg"
  },
  {
    id: 3,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397408219.jpg"
  },
  {
    id: 4,
    url: "http://img.cn315fw.com/Public/uploads/mobi/2638/15397408462.jpg"
  }
];

export default class CategoryList extends Component {
  config = {
    navigationBarTitleText: "一汽丰田零件防伪查询"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  goToProcuctList = id => {
    Taro.redirectTo({
      url: `/pages/productList/index?id=${id}`
    });
  };

  render() {
    return (
      <View className='root'>
        <Header />
        <View className='category-list'>
          {dataScoure.map((d, index) => (
            <View
              key={d.url + index}
              className='category-item'
              onClick={this.goToProcuctList.bind(this, d.id)}
            >
              <Image src={d.url} mode='widthFix' />
            </View>
          ))}
        </View>
        <Footer />
      </View>
    );
  }
}
